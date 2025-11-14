'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GalleryItem } from '@/types';

interface ImmersiveGalleryProps {
  items: GalleryItem[];
}

export default function ImmersiveGallery({ items }: ImmersiveGalleryProps) {
  const [availableImages, setAvailableImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    // Set images immediately - Next.js Image will handle loading and errors
    const processedItems = items.map(item => ({
      ...item,
      alt: item.alt || item.title || 'Gallery item',
    }));
    
    setAvailableImages(processedItems);
    setIsLoading(false);
  }, [items]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-8 px-4 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-[var(--text-secondary)] text-sm">Loading gallery...</div>
        </div>
      </div>
    );
  }

  if (availableImages.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-8 px-4 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-[var(--text-secondary)]">No images found in gallery.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 mb-4 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-2">
            Gallery
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            {availableImages.length} {availableImages.length === 1 ? 'Image' : 'Images'}
          </p>
        </div>

        {/* Gallery List */}
        <div className="space-y-6">
          {availableImages.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageFirst = isEven;
            
            return (
              <div
                key={item.id}
                className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image - Alternates left/right */}
                  <div className={`lg:w-2/3 w-full h-64 lg:h-96 relative bg-[var(--bg-secondary)] ${!imageFirst ? 'lg:order-2' : ''}`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.alt || item.title || 'Gallery item'}
                      fill
                      className="object-cover cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                  
                  {/* Details - Alternates right/left */}
                  <div className={`lg:w-1/3 w-full p-6 flex flex-col justify-between ${!imageFirst ? 'lg:order-1' : ''}`}>
                    <div>
                      {item.category && (
                        <span className="inline-block px-3 py-1 bg-[var(--bg-secondary)] text-[var(--accent)] rounded-full text-xs font-medium mb-3 border border-[var(--border)]">
                          {item.category}
                        </span>
                      )}
                      {item.title && (
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                          {item.title}
                        </h2>
                      )}
                      {item.caption && (
                        <p className="text-[var(--text-secondary)] text-sm mb-2 leading-relaxed">
                          {item.caption}
                        </p>
                      )}
                      {item.subCaption && (
                        <p className="text-[var(--text-muted)] text-xs">
                          {item.subCaption}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="mt-4 text-[var(--accent)] hover:text-[var(--accent-hover)] text-sm font-medium transition-colors duration-200"
                    >
                      View Full Size →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
              <div className="relative w-full h-full max-h-[90vh] max-w-[90vw]">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.alt || selectedImage.title || 'Gallery item'}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
                priority
              />
            </div>
            {(selectedImage.title || selectedImage.caption || selectedImage.subCaption) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                {selectedImage.title && (
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                )}
                {selectedImage.caption && (
                  <p className="text-sm opacity-90 mb-1">{selectedImage.caption}</p>
                )}
                {selectedImage.subCaption && (
                  <p className="text-xs opacity-75">{selectedImage.subCaption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

