import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    url: 'https://images.pexels.com/photos/29392549/pexels-photo-29392549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Gym Interior',
    span: 'col-span-1 row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/13863730/pexels-photo-13863730.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Gym Equipment',
    span: 'col-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/5327465/pexels-photo-5327465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Strength Training',
    span: 'col-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/29825228/pexels-photo-29825228.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Workout Session',
    span: 'col-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Gym Floor',
    span: 'col-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/6388373/pexels-photo-6388373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Pull-up Area',
    span: 'col-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/29392546/pexels-photo-29392546.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Gym Machines',
    span: 'col-span-2',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-[#0A0A0A] section-padding" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="red-badge">Gallery</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Gym <span className="text-gradient-red">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base max-w-xl mx-auto">
            A glimpse inside our world-class facility. Come experience it yourself.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              data-testid={`gallery-item-${i}`}
              onClick={() => setLightbox(img)}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? 'row-span-2' : i === 6 ? 'col-span-2' : ''
              }`}
              style={{ height: i === 0 ? undefined : '200px', minHeight: i === 0 ? '420px' : undefined }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="gallery-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              {/* Red bottom line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            data-testid="lightbox-modal"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.url.replace('w=800&h=600', 'w=1400&h=900')}
                alt={lightbox.alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                onClick={() => setLightbox(null)}
                data-testid="lightbox-close"
                className="absolute top-3 right-3 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center hover:bg-[#FF3B30] transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <p className="text-center text-gray-400 font-inter text-sm mt-3">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
