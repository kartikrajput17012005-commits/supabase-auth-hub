import { motion } from 'framer-motion';
import { Heart, Trophy, Target, TrendingUp, Gift, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const features = [
  {
    icon: Target,
    title: 'Track Your Scores',
    description: 'Enter your latest 5 Stableford scores and watch your game evolve.',
  },
  {
    icon: Gift,
    title: 'Monthly Prize Draws',
    description: 'Your scores become your lottery numbers. Match and win from the prize pool.',
  },
  {
    icon: Heart,
    title: 'Support Charities',
    description: 'A portion of every subscription goes directly to your chosen charity.',
  },
  {
    icon: TrendingUp,
    title: 'Jackpot Rollovers',
    description: "No 5-match winner? The jackpot rolls over, growing bigger every month.",
  },
];

const stats = [
  { value: '£25K+', label: 'Prize Pool' },
  { value: '40%', label: 'To Jackpot' },
  { value: '10%+', label: 'To Charity' },
  { value: '12', label: 'Draws/Year' },
];

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
            >
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">Play. Win. Give Back.</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Your Golf Scores
              <br />
              <span className="text-accent">Change Lives</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg text-primary-foreground/80 mb-8 max-w-lg"
            >
              Subscribe, enter your scores, and compete in monthly prize draws — all while
              supporting the charities you care about most.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link to="/auth?mode=signup">
                <Button size="lg" className="gradient-gold text-accent-foreground font-semibold px-8 animate-pulse-glow">
                  Start Giving Today
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  How It Works
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center shadow-elevated"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              More Than Just a Game
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Every score you enter powers a movement of generosity and competition.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Join hundreds of golfers who play with purpose. Subscribe today and start changing lives.
            </p>
            <Link to="/auth?mode=signup">
              <Button size="lg" className="gradient-gold text-accent-foreground font-semibold px-8">
                Subscribe Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-hero flex items-center justify-center">
              <Trophy className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">GolfGives</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 GolfGives. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
