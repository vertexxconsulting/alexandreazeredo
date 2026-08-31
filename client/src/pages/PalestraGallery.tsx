import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PalestraGallery() {
  const images = Array.from({ length: 5 }, (_, i) => `/images/galeria-palestras/palestra-${i + 1}.jpeg`);
  // Triplicar o array para garantir um loop contínuo e perfeito
  const marqueeImages = [...images, ...images, ...images];

  // object-position personalizado por imagem para garantir o enquadramento correto
  const objectPositions: Record<number, string> = {
    0: 'left top',   // palestra-1: Alexandre no canto superior esquerdo
  };

  return (
    <div className="gallery-page dark-section" style={{ backgroundColor: 'var(--navy-deep)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      
      {/* Background Texture */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(198,168,124,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <header style={{ padding: '3rem 5%', position: 'relative', zIndex: 10 }}>
        <Link href="/#palestras" style={{ color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <ArrowLeft size={18} /> Voltar para o site
        </Link>
        <h1 style={{ color: 'white', fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginTop: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
          Momentos no Palco
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
          Registros de palestras, provocações e discussões sobre o futuro da Tecnologia, Liderança e Inovação pelo Brasil.
        </p>
      </header>
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative', padding: '0 0 3rem' }}>
        
        {/* CSS for marquee animation and image styling */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scrollMarquee 49s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .gallery-image-wrapper {
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            background: #000;
          }
          .gallery-image-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(6,19,39,0.0) 0%, rgba(6,19,39,0.45) 100%);
            pointer-events: none;
          }
          .gallery-image-wrapper::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%);
            z-index: 1;
            pointer-events: none;
          }
          .gallery-img {
            width: 100%; 
            height: 100%; 
            object-fit: cover;
            object-position: center top;
            filter: grayscale(100%) contrast(1.2) brightness(0.88) sepia(15%) hue-rotate(180deg);
            transition: transform 0.8s ease, filter 0.8s ease;
          }
          .gallery-image-wrapper:hover .gallery-img {
            transform: scale(1.03);
            filter: grayscale(60%) contrast(1.05) brightness(1.0) sepia(8%) hue-rotate(180deg);
          }
        `}} />

        <div className="marquee-track" style={{ height: '100%', alignItems: 'center' }}>
          {marqueeImages.map((src, idx) => {
            const imgIndex = idx % images.length;
            const position = objectPositions[imgIndex] ?? 'center top';
            return (
              <div key={idx} style={{ flexShrink: 0, padding: '0 0.75rem' }}>
                <div className="gallery-image-wrapper" style={{ height: 'min(560px, 78vh)', aspectRatio: '9/16', width: 'auto' }}>
                  <img 
                    src={src} 
                    alt={`Registro de Palestra`} 
                    className="gallery-img"
                    style={{ objectPosition: position }}
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
