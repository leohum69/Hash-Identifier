import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, Hash, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface HashResult {
  type: string;
  confidence: 'high' | 'medium' | 'low';
  description: string;
  length: number;
  pattern: string;
}

const HashIdentifier = () => {
  const [inputHash, setInputHash] = useState('');
  const [result, setResult] = useState<HashResult | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const identifyHash = (hash: string): HashResult | null => {
    if (!hash.trim()) return null;

    const cleanHash = hash.trim().toLowerCase();
    const length = cleanHash.length;

    // MD5
    if (length === 32 && /^[a-f0-9]{32}$/.test(cleanHash)) {
      return {
        type: 'MD5',
        confidence: 'high',
        description: 'Message Digest Algorithm 5 - Legacy hash function (128-bit)',
        length: 32,
        pattern: '32 hexadecimal characters'
      };
    }

    // SHA-1
    if (length === 40 && /^[a-f0-9]{40}$/.test(cleanHash)) {
      return {
        type: 'SHA-1',
        confidence: 'high',
        description: 'Secure Hash Algorithm 1 - Legacy but still common (160-bit)',
        length: 40,
        pattern: '40 hexadecimal characters'
      };
    }

    // SHA-256
    if (length === 64 && /^[a-f0-9]{64}$/.test(cleanHash)) {
      return {
        type: 'SHA-256',
        confidence: 'high',
        description: 'Secure Hash Algorithm 256 - Modern cryptographic hash (256-bit)',
        length: 64,
        pattern: '64 hexadecimal characters'
      };
    }

    // SHA-512
    if (length === 128 && /^[a-f0-9]{128}$/.test(cleanHash)) {
      return {
        type: 'SHA-512',
        confidence: 'high',
        description: 'Secure Hash Algorithm 512 - High security cryptographic hash (512-bit)',
        length: 128,
        pattern: '128 hexadecimal characters'
      };
    }

    // bcrypt
    if (/^\$2[aby]?\$\d{2}\$[./A-Za-z0-9]{53}$/.test(hash)) {
      return {
        type: 'bcrypt',
        confidence: 'high',
        description: 'bcrypt - Adaptive hash function designed for passwords',
        length: hash.length,
        pattern: '$2a$, $2b$, or $2y$ prefix with cost and salt'
      };
    }

    // NTLM
    if (length === 32 && /^[a-f0-9]{32}$/i.test(cleanHash)) {
      return {
        type: 'NTLM/MD5',
        confidence: 'medium',
        description: 'Could be NTLM hash or MD5 - 32 hexadecimal characters',
        length: 32,
        pattern: '32 hexadecimal characters'
      };
    }

    // SHA-224
    if (length === 56 && /^[a-f0-9]{56}$/.test(cleanHash)) {
      return {
        type: 'SHA-224',
        confidence: 'high',
        description: 'Secure Hash Algorithm 224 - Truncated SHA-256 (224-bit)',
        length: 56,
        pattern: '56 hexadecimal characters'
      };
    }

    // SHA-384
    if (length === 96 && /^[a-f0-9]{96}$/.test(cleanHash)) {
      return {
        type: 'SHA-384',
        confidence: 'high',
        description: 'Secure Hash Algorithm 384 - Truncated SHA-512 (384-bit)',
        length: 96,
        pattern: '96 hexadecimal characters'
      };
    }

    // Base64 encoded (common for various hashes)
    if (/^[A-Za-z0-9+/]+=*$/.test(hash) && hash.length % 4 === 0) {
      return {
        type: 'Base64',
        confidence: 'medium',
        description: 'Base64 encoded string - Could be an encoded hash',
        length: hash.length,
        pattern: 'Base64 characters (A-Z, a-z, 0-9, +, /)'
      };
    }

    // Unknown but looks like hex
    if (/^[a-f0-9]+$/i.test(cleanHash)) {
      return {
        type: 'Unknown Hex',
        confidence: 'low',
        description: 'Hexadecimal string of unknown hash type',
        length: length,
        pattern: 'Hexadecimal characters only'
      };
    }

    return {
      type: 'Unknown',
      confidence: 'low',
      description: 'Unable to identify hash type from pattern',
      length: length,
      pattern: 'Mixed characters'
    };
  };

  useEffect(() => {
    setResult(identifyHash(inputHash));
  }, [inputHash]);

  const copyToClipboard = async () => {
    if (!inputHash) return;
    
    try {
      await navigator.clipboard.writeText(inputHash);
      setCopied(true);
      toast({
        title: 'Copied!',
        description: 'Hash copied to clipboard',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Could not copy to clipboard',
        variant: 'destructive',
      });
    }
  };

  const getConfidenceBadgeVariant = (confidence: string) => {
    switch (confidence) {
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-primary shadow-glow">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hash Cipher Sight
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instantly identify cryptographic hash types with advanced pattern recognition
          </p>
        </div>

        {/* Main Input Card */}
        <Card className="p-8 bg-gradient-secondary border-border shadow-card backdrop-blur-sm">
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="w-5 h-5 text-primary" />
                <label className="text-lg font-semibold text-foreground">
                  Enter Hash to Identify
                </label>
              </div>
              
              <div className="relative">
                <Input
                  value={inputHash}
                  onChange={(e) => setInputHash(e.target.value)}
                  placeholder="Paste your hash here... (MD5, SHA-1, SHA-256, bcrypt, etc.)"
                  className="min-h-[60px] text-base font-mono bg-background/50 border-border focus:border-primary focus:ring-primary transition-all duration-300"
                />
                
                {inputHash && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-primary/10"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Results */}
            {result && inputHash && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {result.type}
                      </h3>
                      <Badge variant={getConfidenceBadgeVariant(result.confidence)}>
                        {result.confidence} confidence
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {result.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">Length:</span>
                          <span className="text-muted-foreground">{result.length} characters</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">Pattern:</span>
                          <span className="text-muted-foreground">{result.pattern}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hash Display */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="text-sm font-medium text-foreground mb-2">Input Hash:</div>
                  <div className="font-mono text-sm text-muted-foreground break-all leading-relaxed">
                    {inputHash}
                  </div>
                </div>
              </div>
            )}

            {!inputHash && (
              <div className="text-center py-12 text-muted-foreground">
                <Hash className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Enter a hash above to see the identification results</p>
              </div>
            )}
          </div>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
            <h3 className="font-semibold text-foreground mb-2">Supported Types</h3>
            <p className="text-sm text-muted-foreground">
              MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, bcrypt, NTLM, and more
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
            <h3 className="font-semibold text-foreground mb-2">Real-time Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Instant identification as you type with confidence scoring
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
            <h3 className="font-semibold text-foreground mb-2">Pattern Recognition</h3>
            <p className="text-sm text-muted-foreground">
              Advanced algorithms analyze length, character patterns, and format
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HashIdentifier;