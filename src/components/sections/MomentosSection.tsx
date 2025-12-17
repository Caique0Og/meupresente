import { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, Plus, X, Sparkles } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const MomentosPhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const TOTAL_FOTOS = 20;

    const loadedPhotos: Photo[] = Array.from({ length: TOTAL_FOTOS }, (_, i) => ({
      id: i + 1,
      url: `/img/momentos/${i + 1}.jpeg`,
      caption: `Momento ${i + 1}`,
    }));

    setPhotos(loadedPhotos);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map(photo => (
        <div
          key={photo.id}
          className="aspect-square overflow-hidden rounded-xl cursor-pointer"
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

const MomentosSection = () => (
  <div className="min-h-screen pt-24 pb-12 px-4">
    <div className="container mx-auto max-w-6xl text-center">
      <Sparkles className="mx-auto text-flame-yellow mb-4" />
      <h1 className="text-5xl flame-text mb-6">Momentos</h1>
      <MomentosPhotoGallery />
    </div>
  </div>
);

export default MomentosSection;
