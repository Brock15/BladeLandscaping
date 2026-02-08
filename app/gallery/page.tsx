'use client';

import { useState, useEffect, useRef } from 'react';

const categories = ['All', 'Lawn Care', 'Mulching', 'Planting', 'Hardscape', 'Weed Barrier', 'Sodding', 'Moving', 'Removal', 'Before & After'];

const gradients = [
  'from-emerald-500 to-green-700',
  'from-amber-600 to-orange-800',
  'from-green-600 to-teal-700',
  'from-lime-600 to-green-800',
  'from-cyan-600 to-blue-800',
  'from-stone-600 to-stone-800',
];

const galleryItems = [
  {
    id: 2,
    title: 'Fresh Mulch Installation',
    category: 'Mulching',
    gradient: gradients[1],
    videoUrl: '/media/homepage/videos/IMG_2526.mp4',
  },
  {
    id: 7,
    title: 'Backyard Rock Installation',
    category: 'Hardscape',
    gradient: gradients[0],
    imageUrl: '/reviews/fed-bread-2.png',
  },
  {
    id: 4,
    title: 'Stone Pathway Installation',
    category: 'Hardscape',
    gradient: gradients[3],
    imageUrl: '/reviews/fed-bread-3.png',
  },
  {
    id: 14,
    title: 'Sod Installation',
    category: 'Sodding',
    gradient: gradients[4],
    videoUrl: '/media/homepage/videos/sodding.mp4',
  },
  {
    id: 5,
    title: 'Overgrown Yard Clean Up',
    category: 'Before & After',
    gradient: gradients[4],
    videoUrl: '/media/homepage/photos/overgrown.mp4',
  },
  {
    id: 8,
    title: 'Garden Bed Refresh',
    category: 'Mulching',
    gradient: gradients[1],
    imageUrl: '/media/gallery/photos/mulchbackyard.jpg',
  },
  {
    id: 9,
    title: 'Lawn Soil Installation',
    category: 'Lawn Care',
    gradient: gradients[2],
    videoUrl: '/media/homepage/videos/soilfront2.mp4',
  },
  {
    id: 6,
    title: 'Junk Removal',
    category: 'Removal',
    gradient: gradients[5],
    videoUrl: '/media/homepage/videos/IMG_3923.mp4',
  },
  {
    id: 10,
    title: 'Commercial Installation',
    category: 'Before & After',
    gradient: gradients[3],
    videoUrl: '/media/homepage/videos/commercial-jobs.mp4',
  },
  {
    id: 11,
    title: 'Native Plant Garden',
    category: 'Planting',
    gradient: gradients[4],
    imageUrl: '/media/homepage/photos/plants%20copy.jpg',
  },
  {
    id: 13,
    title: 'Weed Barrier Install',
    category: 'Weed Barrier',
    gradient: gradients[2],
    imageUrl: '/media/gallery/photos/image.png',
  },
  {
    id: 1,
    title: 'Moving Assistance',
    category: 'Moving',
    gradient: gradients[0],
    imageUrl: '/media/homepage/photos/image%20copy%202.png',
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Lawn Care':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'Mulching':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case 'Planting':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case 'Hardscape':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'Before & After':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const videoItemIndexes = filteredItems
    .map((item, index) => (item.videoUrl ? index : null))
    .filter((index): index is number => index !== null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoItemIndexes.length === 0) {
      return;
    }

    setActiveVideoIndex(0);
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videoItemIndexes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeCategory, videoItemIndexes.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }
      const isActive =
        hoveredVideoIndex === index ||
        (hoveredVideoIndex === null &&
          videoItemIndexes[activeVideoIndex] === index);

      if (isActive) {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise) {
            playPromise.catch(() => {});
          }
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, [activeVideoIndex, hoveredVideoIndex, videoItemIndexes]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--blade-charcoal)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-[var(--blade-silver)] leading-relaxed">
              Browse through our portfolio of completed landscaping projects. See the quality
              and craftsmanship that goes into every job we do.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={sectionRef} className="section-padding bg-[var(--blade-off-white)]">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[var(--blade-green)] text-white'
                    : 'bg-white text-[var(--blade-gray)] hover:bg-[var(--blade-green)]/10 hover:text-[var(--blade-green)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onMouseEnter={() => {
                  if (item.videoUrl) {
                    setHoveredVideoIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (item.videoUrl) {
                    setHoveredVideoIndex(null);
                  }
                }}
              >
                {/* Background */}
                {item.videoUrl ? (
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.videoUrl}
                    muted
                    loop
                    playsInline
                    onTimeUpdate={(event) => {
                      const video = event.currentTarget;
                      if (video.currentTime >= 5) {
                        video.currentTime = 0;
                      }
                    }}
                    preload="metadata"
                  />
                ) : item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`gallery-pattern-${item.id}`} patternUnits="userSpaceOnUse" width="15" height="15">
                            <circle cx="7.5" cy="7.5" r="1" fill="white"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#gallery-pattern-${item.id})`}/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Center Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white/60 group-hover:text-white/90 group-hover:scale-110 transition-all duration-300">
                  {item.videoUrl ? (
                    <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  ) : item.imageUrl ? (
                    <div className="w-14 h-14 rounded-full bg-black/35 flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  ) : (
                    getCategoryIcon(item.category)
                  )}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[var(--blade-lime)] text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
