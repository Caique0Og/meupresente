import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const PhotoGallery = () => {
  // Pré-carrega as 25 fotos do diretório src/img
  const initialPhotos: Photo[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    url: `/src/img/${i + 1}.jpeg`,
    caption: `Foto ${i + 1}`
  }));

  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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

export default PhotoGallery;