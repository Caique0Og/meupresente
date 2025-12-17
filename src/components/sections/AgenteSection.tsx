import { useState, useEffect } from 'react';
import { Flame, Heart, HeartHandshake, Plus, X } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const AgentePhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    // ========== INÍCIO DA MUDANÇA ==========
    // Carrega automaticamente TODAS as imagens numeradas (1.jpeg, 2.jpeg, 3.jpeg...)
    // da pasta /src/img/imgNos/ usando import.meta.glob do Vite
    const images = import.meta.glob('/src/img/imgNos/*.{jpeg,jpg,png,gif}', { eager: true });
    
    const loadedPhotos: Photo[] = Object.keys(images)
      .sort((a, b) => {
        // Ordena numericamente (1.jpeg, 2.jpeg, 3.jpeg...)
        const numA = parseInt(a.match(/\/(\d+)\./)?.[1] || '0');
        const numB = parseInt(b.match(/\/(\d+)\./)?.[1] || '0');
        return numA - numB;
      })
      .map((path, index) => {
        const filename = path.split('/').pop()?.replace(/\.(jpeg|jpg|png|gif)$/, '') || `Foto ${index + 1}`;
        return {
          id: index + 1,
          url: path,
          caption: filename
        };
      });

    setPhotos(loadedPhotos);
    // ========== FIM DA MUDANÇA ==========
  }, []);

  const handleAddPhoto = () => {
    const url = prompt('Cole a URL da foto:');
    const caption = prompt('Adicione uma legenda (opcional):') || '';
    
    if (url) {
      setPhotos([...photos, { id: Date.now(), url, caption }]);
    }
  };

  const handleRemovePhoto = (id: number) => {
    setPhotos(photos.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-2 left-2 right-2 text-sm text-white truncate">
                {photo.caption}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemovePhoto(photo.id);
              }}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button
          onClick={handleAddPhoto}
          className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors duration-300"
        >
          <Plus className="w-8 h-8" />
          <span className="text-sm">Adicionar foto</span>
        </button>
      </div>

      {photos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Carregando fotos...</p>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            {selectedPhoto.caption && (
              <p className="text-center mt-4 text-lg text-white">{selectedPhoto.caption}</p>
            )}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

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
          <AgentePhotoGallery />
        </div>
      </div>
    </div>
  );
};

export default AgenteSection;