import { Heart, Sparkles, Star } from 'lucide-react';
import PhotoGallery from '../PhotoGallery';

const VoceSection = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-flame-yellow animate-flicker" />
            <Heart className="w-8 h-8 text-secondary animate-float" />
            <Sparkles className="w-6 h-6 text-flame-yellow animate-flicker" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl flame-text flame-glow">
            Você, minha gatinha
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada foto sua é como uma chama que aquece meu coração. 
            Você é minha Princesa de Fogo, iluminando meus dias com seu brilho único.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-flame-yellow fill-flame-yellow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Quote Card */}
        <div className="card-flame rounded-2xl p-6 md:p-8 mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl italic text-foreground">
            "Assim como a Princesa de Fogo, você tem o poder de transformar 
            qualquer momento em algo mágico e especial."
          </p>
          <Heart className="w-6 h-6 text-secondary mx-auto mt-4" />
        </div>

        {/* Photo Gallery */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display flame-text text-center">
            Suas fotos especiais
          </h2>
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
};

export default VoceSection;
