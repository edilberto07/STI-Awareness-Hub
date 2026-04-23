import React, { useState } from 'react';
import { Play, AlertCircle } from 'lucide-react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
  className?: string;
}

export default function YouTubeVideo({
  videoId,
  title,
  description,
  className = '',
}: YouTubeVideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (!videoId) {
    return null;
  }

  if (hasError) {
    return (
      <div className={`rounded-lg bg-amber-50 border border-amber-200 p-6 ${className}`}>
        <div className="flex gap-3 items-start">
          <AlertCircle className="text-amber-700 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-amber-900">Video unavailable</h4>
            <p className="text-sm text-amber-800 mt-1">
              The video could not be loaded. Please check your internet connection or try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center animate-pulse">
                <Play size={32} className="text-gray-500" fill="currentColor" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Loading video...</p>
            </div>
          </div>
        )}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      {title && (
        <div className="bg-white px-6 py-4 border-t border-gray-100">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">{title}</h4>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
