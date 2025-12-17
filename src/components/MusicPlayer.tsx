import { useEffect, useRef, useState } from 'react';
import { Music, Play } from 'lucide-react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryAutoplay = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay bloqueado pelo navegador (comportamento esperado)
        setIsPlaying(false);
      }
    };

    tryAutoplay();
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao tocar música:', error);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlay}
        className="card-flame rounded-2xl p-4 flex items-center gap-3 animate-pulse-glow cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flame-orange to-flame-red flex items-center justify-center">
          {isPlaying ? (
            <Music className="w-5 h-5 text-primary-foreground animate-flicker" />
          ) : (
            <Play className="w-5 h-5 text-primary-foreground" />
          )}
        </div>

        <div className="hidden sm:block">
          <p className="text-xs text-muted-foreground">Nossa música</p>
          <p className="text-sm font-medium text-foreground">
            {isPlaying ? 'Tocando...' : 'Clique para tocar'}
          </p>
        </div>
      </button>

      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/music.mp4"
      />
    </div>
  );
};

export default MusicPlayer;
