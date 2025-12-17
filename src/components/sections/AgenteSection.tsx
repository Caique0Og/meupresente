import { Flame, Heart, HeartHandshake } from 'lucide-react';
import PhotoGallery from '../PhotoGallery';
import VideoGallery from '../VideoGallery';

const AgenteSection = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-flame-orange animate-flicker" />
            <HeartHandshake className="w-10 h-10 text-secondary animate-float" />
            <Flame className="w-6 h-6 text-flame-orange animate-flicker" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl flame-text flame-glow">
            A gente
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa história é feita de chamas que nunca se apagam. 
            Juntos, criamos um fogo que ilumina tudo ao nosso redor.
          </p>
        </div>

        {/* Love Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Dias juntos', value: '∞' },
            { label: 'Risadas', value: 'Milhões' },
            { label: 'Abraços', value: 'Infinitos' },
            { label: 'Amor', value: 'Eterno' },
          ].map((stat, i) => (
            <div
              key={i}
              className="card-flame rounded-xl p-4 text-center animate-pulse-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <p className="text-2xl md:text-3xl font-display flame-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Photos Section */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-display flame-text text-center flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-secondary" />
            Nossas fotos
            <Heart className="w-6 h-6 text-secondary" />
          </h2>
          <PhotoGallery />
        </div>

        {/* Videos Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display flame-text text-center flex items-center justify-center gap-2">
            <Flame className="w-6 h-6 text-flame-orange" />
            Nossos vídeos
            <Flame className="w-6 h-6 text-flame-orange" />
          </h2>
          <VideoGallery />
        </div>
      </div>
    </div>
  );
};

export default AgenteSection;
