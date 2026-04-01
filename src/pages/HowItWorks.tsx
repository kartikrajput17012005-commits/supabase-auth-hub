import { motion } from 'framer-motion';
import { UserPlus, Edit3, Trophy, Heart, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const steps = [
  {
    icon: UserPlus,
    title: '1. Subscribe',
    description: 'Sign up for a monthly subscription (£5/month). Choose from our list of supported charities — 10% of your fee goes directly to them.',
  },
  {
    icon: Edit3,
    title: '2. Enter Your Scores',
    description: 'After each round, enter your Stableford score (0–45). You need 5 scores to qualify for the monthly draw.',
  },
  {
    icon: Trophy,
    title: '3. Monthly Draw',
    description: 'Your 5 scores become your "lottery numbers." A random set of 5 numbers is drawn each month. Match all 5 to win the jackpot!',
  },
  {
    icon: Heart,
    title: '4. Everyone Wins',
    description: 'Even if you don\'t match, your subscription supports amazing charities. No jackpot winner? It rolls over and grows bigger!',
  },
];

const prizes = [
  { match: '5 Numbers', prize: 'Jackpot (40% of pool)', highlight: true },
  { match: '4 Numbers', prize: '£500', highlight: false },
  { match: '3 Numbers', prize: '£50', highlight: false },
  { match: '2 Numbers', prize: '£5', highlight: false },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From signup to winning — here's everything you need to know about GolfGives.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-2xl mx-auto space-y-6 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-5 bg-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Prize Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto mb-20"
        >
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Prize Breakdown</h2>
          <div className="bg-card rounded-xl shadow-soft overflow-hidden">
            {prizes.map((p) => (
              <div
                key={p.match}
                className={`flex justify-between items-center px-6 py-4 border-b border-border last:border-0 ${
                  p.highlight ? 'bg-primary/5' : ''
                }`}
              >
                <span className={`font-medium ${p.highlight ? 'text-primary font-semibold' : 'text-foreground'}`}>
                  {p.match}
                </span>
                <span className={`font-display font-bold ${p.highlight ? 'text-primary text-lg' : 'text-foreground'}`}>
                  {p.prize}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-hero rounded-2xl p-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Play?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Subscribe now and start entering your scores for this month's draw.
          </p>
          <Link to="/auth?mode=signup">
            <Button size="lg" className="gradient-gold text-accent-foreground font-semibold px-8">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
