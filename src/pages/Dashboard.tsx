import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground mb-8">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
          
          <div className="grid gap-4">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="font-display font-semibold text-foreground mb-2">Subscription</h2>
              <p className="text-sm text-muted-foreground">No active subscription yet.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="font-display font-semibold text-foreground mb-2">Your Scores</h2>
              <p className="text-sm text-muted-foreground">Enter your latest 5 Stableford scores to participate in draws.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="font-display font-semibold text-foreground mb-2">Selected Charity</h2>
              <p className="text-sm text-muted-foreground">Choose a charity to support with your subscription.</p>
            </div>
          </div>
          
          <Button variant="outline" onClick={handleSignOut} className="mt-8">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
