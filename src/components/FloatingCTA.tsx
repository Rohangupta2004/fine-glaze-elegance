const WHATSAPP_NUMBER = "918369233566";
const WHATSAPP_MESSAGE = "Hello Fine Glaze, I'm interested in your facade services. Please share details.";

/**
 * Simple floating WhatsApp button — bottom-right on desktop, bottom-right on mobile.
 * No state, no toggle, no flickering. Just a static link with the official WhatsApp logo.
 */
export default function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-6 lg:bottom-6 z-50 flex items-center justify-center group"
    >
      {/* Pulse rings */}
      <span className="absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-30" />
      <span className="absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-300" style={{ animationDelay: "0.4s" }} />

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors duration-200">
        {/* Official WhatsApp SVG logo */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 group-hover:scale-110 transition-transform duration-200"
        >
          <path d="M16.004 3.2C8.924 3.2 3.2 8.924 3.2 16.004c0 2.26.588 4.468 1.708 6.416L3.2 28.8l6.58-1.724A12.73 12.73 0 0 0 16.004 28.8c7.08 0 12.796-5.724 12.796-12.796S23.084 3.2 16.004 3.2Zm0 23.392a10.55 10.55 0 0 1-5.384-1.472l-.384-.228-3.996 1.048 1.068-3.9-.252-.4a10.53 10.53 0 0 1-1.616-5.636c0-5.832 4.744-10.576 10.576-10.576 5.828 0 10.572 4.744 10.572 10.576-.004 5.836-4.748 10.588-10.584 10.588Zm5.8-7.924c-.316-.16-1.876-.928-2.168-1.032-.292-.108-.504-.16-.716.16-.212.316-.824 1.032-1.008 1.244-.188.212-.372.24-.688.08-.316-.16-1.336-.492-2.544-1.572-.94-.84-1.576-1.876-1.76-2.192-.188-.316-.02-.488.14-.644.144-.14.316-.372.476-.556.16-.188.212-.316.316-.532.108-.212.056-.4-.028-.556-.08-.16-.716-1.724-.98-2.36-.256-.62-.52-.536-.716-.544-.188-.008-.4-.012-.612-.012a1.17 1.17 0 0 0-.848.4c-.292.316-1.112 1.084-1.112 2.648 0 1.564 1.14 3.076 1.296 3.288.16.212 2.24 3.42 5.428 4.796.76.328 1.352.524 1.816.668.76.244 1.456.208 2.004.128.612-.092 1.876-.768 2.14-1.508.268-.744.268-1.38.188-1.508-.08-.132-.292-.212-.612-.372Z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
