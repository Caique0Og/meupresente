import { useState } from 'react';
import { Plus, X, Video } from 'lucide-react';

interface VideoItem {
  id: number;
  url: string;
  title: string;
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  const getEmbedUrl = (url: string) => {
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    return url;
  };

  const handleAddVideo = () => {
    const url = prompt('Cole a URL do vídeo (YouTube):');
    const title = prompt('Adicione um título (opcional):') || '';
    
    if (url) {
      setVideos([...videos, { id: Date.now(), url: getEmbedUrl(url), title }]);
    }
  };

  const handleRemoveVideo = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group relative card-flame rounded-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={video.url}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            {video.title && (
              <p className="p-3 text-sm text-foreground">{video.title}</p>
            )}
            <button
              onClick={() => handleRemoveVideo(video.id)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <X className="w-4 h-4 text-secondary-foreground" />
            </button>
          </div>
        ))}

        <button
          onClick={handleAddVideo}
          className="aspect-video rounded-xl border-2 border-dashed border-flame-orange/50 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
        >
          <Plus className="w-8 h-8" />
          <span className="text-sm">Adicionar vídeo</span>
        </button>
      </div>

      {videos.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">Adicione seus vídeos especiais aqui</p>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
