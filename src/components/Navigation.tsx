import { Flame, Heart, Camera } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const tabs = [
    { id: 'voce', label: 'Você, minha gatinha', icon: Heart },
    { id: 'agente', label: 'A gente', icon: Flame },
    { id: 'momentos', label: 'Momentos', icon: Camera },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full
                  font-medium text-sm md:text-base transition-all duration-300
                  ${isActive 
                    ? 'btn-flame text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'animate-flicker' : ''}`} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
