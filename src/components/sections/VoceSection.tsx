import { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Plus, X } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const VocePhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const TOTAL_FOTOS = 25;

    const loadedPhotos: Photo[] = Array.from({ length: TOTAL_FOTOS }, (_, i) => ({
      id: i + 1,
      url: `/img/imgGe/${i + 1}.jpeg`,
      caption: `Foto ${i + 1}`,
    }));

    setPhotos(loadedPhotos);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map(photo => (
        <div
          key={photo.id}
          className="aspect-square rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setSelectedPhoto(photo)}
        >
          <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
        </div>
      ))}

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <img src={selectedPhoto.url} className="max-h-[80vh] rounded-xl" />
        </div>
      )}
    </div>
  );
};

const VoceSection = () => (
  <div className="min-h-screen pt-24 pb-12 px-4 text-center">
    <Sparkles className="mx-auto text-flame-yellow mb-4" />
    <h1 className="text-5xl flame-text mb-6">Você</h1>
    <VocePhotoGallery />
  </div>
);

export default VoceSection;
