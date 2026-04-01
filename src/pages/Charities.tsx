import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const charities = [
  {
    name: 'The Golf Trust',
    description: 'Making golf accessible to young people from disadvantaged backgrounds across the UK.',
    category: 'Youth & Sport',
  },
  {
    name: 'Cancer Research UK',
    description: 'Funding scientists, doctors and nurses to help beat cancer sooner.',
    category: 'Health',
  },
  {
    name: 'Mind',
    description: 'Providing advice and support to empower anyone experiencing a mental health problem.',
    category: 'Mental Health',
  },
  {
    name: 'The R&A Foundation',
    description: 'Growing golf worldwide by supporting community and grassroots programmes.',
    category: 'Golf Development',
  },
  {
    name: 'British Heart Foundation',
    description: 'Funding research into heart and circulatory diseases and their risk factors.',
    category: 'Health',
  },
  {
    name: 'On Course Foundation',
    description: 'Using golf to support the recovery and rehabilitation of wounded veterans.',
    category: 'Veterans',
  },
];

export default function Charities() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Our Charity Partners</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Charities We Support
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            10%+ of every subscription goes directly to your chosen charity. Choose the cause closest to your heart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {charities.map((charity, i) => (
            <motion.div
              key={charity.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{charity.category}</span>
              <h3 className="font-display font-semibold text-foreground text-lg mt-1 mb-2">{charity.name}</h3>
              <p className="text-sm text-muted-foreground">{charity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
