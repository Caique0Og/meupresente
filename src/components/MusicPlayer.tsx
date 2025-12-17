import { Music } from 'lucide-react';

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="card-flame rounded-2xl p-4 flex items-center gap-3 animate-pulse-glow">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flame-orange to-flame-red flex items-center justify-center">
          <Music className="w-5 h-5 text-primary-foreground animate-flicker" />
        </div>
        <div className="hidden sm:block">
          <p className="text-xs text-muted-foreground">Nossa música</p>
          <p className="text-sm font-medium text-foreground">Tocando...</p>
        </div>
      </div>
      <iframe
        className="hidden"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/szwIGXqgwjg?autoplay=1&loop=1"
        allow="autoplay"
      />
    </div>
  );
};

export default MusicPlayer;
