import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919687294124?text=Hi%2C%20I%27m%20interested%20in%20joining%20Mid%20City%20Gym%20in%20Vadodara.%20Please%20share%20membership%20details.';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2" data-testid="whatsapp-float-container">
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 bg-[#141414] text-white text-xs font-inter px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap pointer-events-none select-none hidden sm:block">
        Chat on WhatsApp
      </span>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
