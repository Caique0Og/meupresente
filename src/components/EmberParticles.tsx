import { useEffect, useState } from 'react';

interface Ember {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const EmberParticles = () => {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const newEmbers: Ember[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
      size: 2 + Math.random() * 4,
    }));
    setEmbers(newEmbers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-t from-flame-orange to-flame-yellow opacity-60"
          style={{
            left: `${ember.left}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            animation: `ember-rise ${ember.duration}s ease-out infinite`,
            animationDelay: `${ember.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default EmberParticles;
