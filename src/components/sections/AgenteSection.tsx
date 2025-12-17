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
    const TOTAL_FOTOS = 30;

    const loadedPhotos: Photo[] = Array.from({ length: TOTAL_FOTOS }, (_, i) => ({
      id: i + 1,
      url: `/img/imgNos/${i + 1}.jpeg`,
      caption: `Foto ${i + 1}`,
    }));

    setPhotos(loadedPhotos);
  }, []);

  const handleAddPhoto = () => {
    const url = prompt('Cole a URL da foto:');
    const caption = prompt('Adicione uma legenda (opcional):') || '';
    if (url) setPhotos([...photos, { id: Date.now(), url, caption }]);
  };

  const handleRemovePhoto = (id: number) => {
    setPhotos(photos.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemovePhoto(photo.id);
              }}
              className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button
          onClick={handleAddPhoto}
          className="aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2"
        >
          <Plus />
          <span>Adicionar foto</span>
        </button>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="max-h-[80vh] rounded-xl" />
        </div>
      )}
    </div>
  );
};

const AgenteSection = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <div className="flex justify-center gap-2 mb-4">
          <Flame className="text-flame-orange" />
          <HeartHandshake className="text-secondary" />
          <Flame className="text-flame-orange" />
        </div>
        <h1 className="text-5xl flame-text">A gente</h1>
      </div>

      <h2 className="text-3xl text-center mb-6 flame-text flex justify-center gap-2">
        <Heart /> Nossas fotos <Heart />
      </h2>

      <AgentePhotoGallery />
    </div>
  </div>
);

export default AgenteSection;
