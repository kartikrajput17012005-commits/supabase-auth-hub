import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Heart, CreditCard, Target, CheckCircle, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const charities = [
  'The Golf Trust',
  'Cancer Research UK',
  'Mind',
  'The R&A Foundation',
  'British Heart Foundation',
  'On Course Foundation',
];

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [scores, setScores] = useState<number[]>([]);
  const [currentScore, setCurrentScore] = useState('');
  const [selectedCharity, setSelectedCharity] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const addScore = () => {
    const val = parseInt(currentScore);
    if (isNaN(val) || val < 0 || val > 45) {
      toast({ title: 'Invalid score', description: 'Enter a Stableford score between 0 and 45.', variant: 'destructive' });
      return;
    }
    if (scores.length >= 5) {
      toast({ title: 'Maximum reached', description: 'You can only enter 5 scores per draw.', variant: 'destructive' });
      return;
    }
    setScores([...scores, val]);
    setCurrentScore('');
    toast({ title: 'Score added!', description: `Score ${val} recorded. ${4 - scores.length} more needed.` });
  };

  const removeScore = (index: number) => {
    setScores(scores.filter((_, i) => i !== index));
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    toast({ title: 'Subscribed!', description: 'Welcome to GolfGives! You can now enter scores and join draws.' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl font-bold text-foreground mb-1">Dashboard</h1>
            <p className="text-muted-foreground mb-8">
              Welcome back, {user?.user_metadata?.full_name || user?.email}
            </p>
          </motion.div>

          <div className="grid gap-6">
            {/* Subscription Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg">Subscription</h2>
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Active — £5/month</span>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe for £5/month to enter monthly prize draws and support charities.
                  </p>
                  <Button onClick={handleSubscribe} className="gradient-gold text-accent-foreground font-semibold">
                    Subscribe — £5/month
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Score Entry Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg">Your Scores</h2>
                <span className="ml-auto text-sm text-muted-foreground">{scores.length}/5</span>
              </div>

              {/* Current scores */}
              <div className="flex flex-wrap gap-2 mb-4">
                {scores.map((score, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-sm font-semibold"
                  >
                    {score}
                    <button onClick={() => removeScore(i)} className="hover:text-destructive transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                {Array.from({ length: 5 - scores.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="w-10 h-8 rounded-full border-2 border-dashed border-border"
                  />
                ))}
              </div>

              {/* Input */}
              {scores.length < 5 && (
                <div className="flex gap-2">
                  <Input
                    type="number"
                    min={0}
                    max={45}
                    placeholder="Enter score (0-45)"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addScore()}
                    className="max-w-[200px]"
                  />
                  <Button onClick={addScore} size="sm" className="gap-1">
                    <Plus className="w-4 h-4" /> Add
                  </Button>
                </div>
              )}

              {scores.length === 5 && (
                <p className="text-sm text-primary font-medium flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  All 5 scores entered — you're in this month's draw!
                </p>
              )}
            </motion.div>

            {/* Charity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg">Selected Charity</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {charities.map((charity) => (
                  <button
                    key={charity}
                    onClick={() => {
                      setSelectedCharity(charity);
                      toast({ title: 'Charity selected', description: `You're now supporting ${charity}.` });
                    }}
                    className={`text-left text-sm rounded-lg p-3 border transition-all ${
                      selectedCharity === charity
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border hover:border-primary/40 text-foreground'
                    }`}
                  >
                    {charity}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <Button variant="outline" onClick={handleSignOut} className="mt-8">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
