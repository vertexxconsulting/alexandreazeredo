import { type FormEvent, type MouseEvent, useEffect, useState, useRef } from "react";
import { Link } from "wouter";

function CountUp({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          setCount(Math.round(easeOutQuad * value));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
      {prefix}{count}{suffix}
    </span>
  );
}
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Cloud,
  FileCheck2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Mic2,
  Network,
  PieChart,
  Play,
  Presentation,
  Quote,
  Server,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const topLogoSrc = "/images/Logo.png";
const footerLogoSrc = "/images/logo_result.png";
const heroPhotoSrc = "/images/alexandre-hero.jpeg";
const aboutPhotoSrc = "/images/alexandre-about.jpeg";
const authorityPhotoSrc = "/images/alexandre-about-secondary.jpeg";
const whatsappNumber = "553186417690";

const navItems = [
  { label: "Mentoria", href: "#mentoria" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Palestras", href: "#palestras" },
  { label: "Podcast", href: "#podcast" },
];

const servicos = [
  {
    icon: Building2,
    title: "CIO Advisor / CIO as a Service",
    text: "Apoio estratégico para CEOs, CFOs, empresários e lideranças que precisam tomar melhores decisões sobre Tecnologia sem necessariamente manter uma estrutura executiva permanente.",
    bullets: [
      "avaliação da área de TI",
      "estratégia tecnológica",
      "priorização de investimentos",
      "avaliação de fornecedores",
      "estrutura organizacional",
      "governança e gestão de riscos",
      "indicadores e aconselhamento executivo",
    ],
  },
  {
    icon: Network,
    title: "Estratégia e Governança de TI",
    text: "Alinhamento de tecnologia aos objetivos de negócio.",
    bullets: [
      "Planejamento Estratégico de Tecnologia",
      "PDTI, Governança, COBIT e ITIL",
      "indicadores e orçamento",
      "gestão de fornecedores",
      "estrutura organizacional",
    ],
  },
  {
    icon: Cloud,
    title: "Transformação Digital",
    text: "Apoio na identificação, priorização e execução de iniciativas de transformação.",
    bullets: [
      "automação e digitalização",
      "integração e Cloud",
      "Dados e Inteligência Artificial",
      "experiência do cliente",
      "eficiência operacional",
    ],
  },
  {
    icon: Server,
    title: "ERP & Transformação de Processos",
    text: "Experiência em mais de 20 implantações de ERP (SAP S/4HANA, TOTVS, Protheus, RM, Datasul).",
    bullets: [
      "assessment e estratégia de implantação",
      "governança e PMO",
      "revisão de processos e gestão de riscos",
      "acompanhamento de implantação",
      "preparação para Go-Live, Hypercare e estabilização",
    ],
  },
  {
    icon: Target,
    title: "PMO & Gestão de Portfólio",
    text: "Governança e acompanhamento executivo de portfólios e projetos críticos.",
    bullets: [
      "estruturação de PMO",
      "governança de projetos e priorização",
      "gestão de portfólio e indicadores",
      "gestão de riscos",
      "recuperação de projetos críticos",
    ],
  },
  {
    icon: FileCheck2,
    title: "Processos & Eficiência Operacional",
    text: "Melhoria contínua e redução de gargalos nas operações.",
    bullets: [
      "BPM e mapeamento de processos",
      "automação e CSC",
      "identificação de gargalos",
      "melhoria operacional e redução de custos",
    ],
  },
  {
    icon: PieChart,
    title: "Dados, Analytics e IA",
    text: "Apoio às empresas na estruturação da utilização de dados e IA com foco em geração de valor, produtividade e governança.",
    bullets: [],
  },
];

const diagnosticoPerguntas = [
  "A TI possui prioridades claramente conectadas ao negócio?",
  "Os investimentos em Tecnologia geram resultados mensuráveis?",
  "Existem projetos demais e prioridades de menos?",
  "Os processos estão sendo melhorados ou apenas digitalizados?",
  "O ERP está apoiando ou limitando a operação?",
  "Existem indicadores claros da performance da TI?",
  "A empresa possui uma estratégia estruturada para Dados e IA?",
];

const mentoriaDores = [
  "Estou crescendo ou apenas acumulando experiência?",
  "Devo seguir carreira técnica ou gestão?",
  "Qual especialização faz mais sentido para mim?",
  "Estou sendo remunerado de acordo com meu valor?",
  "Vale a pena trocar de empresa?",
  "Preciso realmente fazer outro MBA ou certificação?",
  "Como me posicionar melhor no mercado?",
  "Como me preparar para os próximos cinco anos da minha carreira?",
];

const mentoriaMetodologia = [
  { step: "01", title: "Diagnóstico", desc: "Entender trajetória, competências, experiências, momento profissional, objetivos e dificuldades." },
  { step: "02", title: "Possibilidades", desc: "Mapear caminhos profissionais compatíveis com perfil, experiência e mercado." },
  { step: "03", title: "Direção", desc: "Definir objetivos profissionais e prioridades." },
  { step: "04", title: "Posicionamento", desc: "Avaliar currículo, LinkedIn, networking, comunicação e posicionamento profissional." },
  { step: "05", title: "Desenvolvimento", desc: "Identificar competências técnicas, comportamentais e de negócios que precisam ser desenvolvidas." },
  { step: "06", title: "Plano de Ação", desc: "Construir um roadmap profissional com ações concretas para os próximos meses." },
];

const palestrasTemas = [
  "O profissional de Tecnologia do futuro",
  "Tecnologia não é estratégia: como transformar investimento em resultado",
  "Transformação Digital começa por pessoas e processos",
  "Do técnico ao estratégico: construindo uma carreira relevante em Tecnologia",
  "Liderança na era da Inteligência Artificial",
  "ERP não transforma empresas. Pessoas e processos transformam.",
  "O futuro do trabalho e as novas competências profissionais",
  "IA como aceleradora de talentos: por que repertório será cada vez mais importante",
  "Tecnologia, carreira e longevidade profissional",
  "Governança, processos e a qualidade das decisões",
  "O novo papel da liderança de Tecnologia nos negócios",
];

const palestrasEventos = [
  "Eventos corporativos", "Convenções", "Congressos", "Universidades",
  "Semanas de Tecnologia", "Programas de Liderança", "Encontros Executivos",
  "Kick-offs", "Eventos de Inovação", "Programas de Desenvolvimento Profissional",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [palestrasTab, setPalestrasTab] = useState<'sobre' | 'temas'>('sobre');
  const [palestrasBgIndex, setPalestrasBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPalestrasBgIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  
  const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    closeMenu();

    if (href === "#contato") {
      setContactModalOpen(true);
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    window.history.pushState(null, "", href);
    // Removemos o offset do headerHeight para que a seção suba até o topo absoluto (y=0)
    // Assim o fundo da seção atual é o que fica sob o efeito de blur do cabeçalho
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("mensagem") || "").trim();

    if (name.length < 3) {
      toast.error("Insira seu nome completo para continuar.");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Insira um e-mail válido.");
      return;
    }
    if (message.length < 10) {
      toast.error("Insira uma mensagem para continuar.");
      return;
    }

    const loadToast = toast.loading("Enviando sua mensagem...");

    const object = Object.fromEntries(data);
    // Add the Web3Forms access key
    object.access_key = "50885259-f9f5-40de-a759-0fd12ddb025d";
    object.subject = "Nova submissão de Contato via Site";
    // Also include a friendly from name
    object.from_name = name;

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      if (result.success) {
        toast.dismiss(loadToast);
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
        setContactModalOpen(false); // Close modal on success if it's open
      } else {
        toast.dismiss(loadToast);
        toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      toast.dismiss(loadToast);
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Alexandre Azeredo — início">
            <span className="brand-logo-wrap" style={{ width: '95px', height: '50px', marginLeft: '-7px', transform: 'translateY(-14px)' }}>
              <img src={topLogoSrc} alt="Logo Alexandre Azeredo" className="brand-logo" />
            </span>
            <span className="brand-copy">
              <strong>Alexandre Azeredo</strong>
              <span>Mentor Executivo · CIO Advisor</span>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleSectionNavigation}>
                {item.label}
              </a>
            ))}
            <div className="nav-social">
              <a href="https://www.linkedin.com/in/alexandreazeredo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/alexandreazeredo_" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
            <a className="nav-cta" href="#contato" onClick={handleSectionNavigation}>
              Fale comigo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section 
          className="hero-section dark-section" 
          id="inicio" 
          aria-labelledby="hero-title"
          style={{
            backgroundImage: 'url(/images/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            position: 'relative'
          }}
        >
          {/* Overlay to darken background (Gradient: Darker on left for text, transparent on right for image) */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.1) 100%)', 
            zIndex: 1 
          }}></div>

          {/* Linhas Douradas (Arcos decorativos atrás do Alexandre) */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1, pointerEvents: 'none' }}>
            <svg width="100%" height="100%" style={{ position: 'absolute', bottom: 0, right: 0 }}>
              {/* Círculos grandes para criar o efeito de arcos varrendo a tela */}
              <circle cx="85%" cy="110%" r="55%" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeOpacity="0.35" />
              <circle cx="95%" cy="120%" r="65%" fill="none" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.25" />
              <circle cx="75%" cy="130%" r="75%" fill="none" stroke="var(--gold)" strokeWidth="2" strokeOpacity="0.15" />
              <circle cx="100%" cy="100%" r="45%" fill="none" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.4" />
            </svg>
          </div>
          
          {/* Imagem do Alexandre Recortada */}
          <img 
            src="/images/alexandre.png" 
            alt="Alexandre Azeredo" 
            style={{
              position: 'absolute',
              bottom: 0,
              right: 'calc(50vw - 360px)', /* Moved even closer to the center/left */
              height: '82%', 
              maxHeight: '750px',
              width: 'auto',
              zIndex: 2,
              pointerEvents: 'none',
              filter: 'drop-shadow(-10px 10px 30px rgba(0,0,0,0.6))'
            }}
          />
          
          <div className="container hero-grid" style={{ position: 'relative', zIndex: 3 }}>
            <div className="hero-copy" data-reveal>
              <div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> TECNOLOGIA TRANSFORMA NEGÓCIOS.</div>
              <h1 className="hero-heading" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
                Transforme Tecnologia em <em style={{ color: 'var(--gold)' }}>Resultados Reais.</em>
              </h1>
              <p className="hero-subtitle">
                Há mais de 32 anos atuando entre Tecnologia, Estratégia e Negócios, ajudando empresas a transformar tecnologia em resultados e profissionais a tomarem melhores decisões sobre suas carreiras.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contato" onClick={handleSectionNavigation}>
                  ENTRAR EM CONTATO <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link light-link" href="#servicos" onClick={handleSectionNavigation}>
                  CONHECER SERVIÇOS <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* Visual vazio para manter o grid layout e espaçamento */}
            <div className="hero-visual" style={{ display: 'none' }} />
          </div>
        </section>

        {/* PROPOSTA DE VALOR */}
        <section className="section" id="proposta-valor" style={{ padding: '6rem 0 3rem' }}>
          <div className="container">
            <div data-reveal style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" /> O DESAFIO E A SOLUÇÃO</div>
              <h2 style={{ 
                fontFamily: '"Playfair Display", serif', 
                fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                lineHeight: 1.2, 
                marginTop: '1.5rem', 
                marginBottom: '1.5rem',
                color: 'var(--navy)'
              }}>
                A tecnologia não gera resultados sozinha.<br /> <em>Líderes estratégicos sim.</em>
              </h2>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
                A maioria das empresas investe pesado em TI sem ver retorno claro no negócio. Ao mesmo tempo, excelentes líderes técnicos enfrentam barreiras porque não conseguem traduzir a tecnologia para a linguagem estratégica do conselho.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#4a5568' }}>
                Com mais de <strong>32 anos de experiência</strong> conectando estratégia, operações e tecnologia, eu fecho essa lacuna. Ajudo empresas a transformarem TI em vantagem competitiva real e oriento profissionais a conquistarem autoridade e acelerarem suas carreiras executivas.
              </p>
            </div>
          </div>
        </section>

        {/* MENTORIA RESULT */}
        <section className="section credentials-section dark-section" id="mentoria" aria-labelledby="mentoria-title">
          <div className="container">
            <div className="section-heading split-heading" data-reveal>
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> Mentoria RESULT</div>
                <h2 id="mentoria-title">Experiência não se compra.<br /><em>Mas a direção certa, sim.</em></h2>
              </div>
              <div>
                <p>O mercado cobra inovação, mas a realidade exige execução. A Mentoria RESULT foi desenhada para quem não pode perder tempo testando caminhos errados.</p>
                <p style={{ marginTop: '1rem' }}>Um espaço de troca estratégica, prático e focado no seu desafio real. <strong>A mentoria existe para transformar sua experiência em resultados e autoridade.</strong></p>
              </div>
            </div>

            <div className="mentoria-split" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '4rem' }}>
              <div data-reveal className="credential-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Para Profissionais Seniores de TI</h3>
                <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>Gerentes, Heads, Coordenadores e Especialistas que buscam acelerar a carreira executiva.</p>
                <ul className="audience-list" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Desenvolver visão de negócios</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Melhorar comunicação com a diretoria/C-Level</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Estruturar áreas e times de alta performance</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Transição de líder técnico para líder estratégico</li>
                </ul>
              </div>
              
              <div data-reveal className="credential-card" style={{ transitionDelay: '100ms', padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Para Empresários e C-Levels</h3>
                <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>CEOs, Diretores e Sócios que precisam que a tecnologia impulsione, e não trave, a empresa.</p>
                <ul className="audience-list" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Priorizar investimentos em TI sem desperdício</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Avaliar e gerenciar equipes ou fornecedores de TI</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Apoio na decisão de troca de ERPs e sistemas</li>
                  <li><Check size={18} aria-hidden="true" style={{color: '#C6A87C'}}/> Traduzir o 'tecniquês' para as metas da empresa</li>
                </ul>
              </div>
            </div>

            <div className="section-cta" data-reveal style={{ marginTop: '5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Deseja participar da Mentoria RESULT?</h3>
                <p style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  A Mentoria RESULT possui vagas limitadas e um processo de seleção para garantir que eu posso realmente ajudar no seu desafio atual. Preencha o formulário para iniciar sua aplicação.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a className="button button-gold" href="#aplicacao" style={{ whiteSpace: 'nowrap' }}>
                  INICIE SUA APLICAÇÃO <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OUTRAS FORMAS DE ATUAÇÃO (Serviços em TI) */}
        <section className="section services-section" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading services-heading" data-reveal>
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> Outras Formas de Atuação</div>
                <h2 id="services-title">Consultoria e <em>Advisory</em>.</h2>
              </div>
              <p>Experiência prática para orientar as decisões mais importantes de tecnologia na sua empresa, através de projetos estruturados ou aconselhamento executivo.</p>
            </div>
            
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {servicos.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={index} data-reveal style={{ transitionDelay: `${index * 50}ms`, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ minHeight: '120px' }}>
                      <div className="service-meta"><Icon size={27} strokeWidth={1.35} aria-hidden="true" /></div>
                      <h3>{service.title}</h3>
                      <p className="service-audience">{service.text}</p>
                    </div>
                    {service.bullets.length > 0 && (
                      <>
                        <div className="service-rule" />
                        <ul style={{ flexGrow: 1 }}>
                          {service.bullets.map((bullet) => (
                            <li key={bullet}><Check size={15} aria-hidden="true" /> {bullet}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="section-cta" data-reveal style={{ marginTop: '4rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Precisa de apoio estratégico para a sua empresa?</h3>
              <a className="button button-dark" href="#contato" onClick={handleSectionNavigation}>
                Fale sobre seu projeto <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-visual" data-reveal>
              <div className="about-image-frame">
                <img src={aboutPhotoSrc} alt="Alexandre Azeredo trabalhando em ambiente executivo" loading="lazy" />
                <div className="about-image-overlay">AA <span>Mentor & Advisor</span></div>
              </div>
              <div className="about-secondary-photo"><img src={authorityPhotoSrc} alt="Alexandre Azeredo em ambiente corporativo" loading="lazy" /></div>
            </div>
            <div className="about-copy" data-reveal style={{ transitionDelay: "120ms" }}>
              <div className="eyebrow"><span className="eyebrow-line" /> Sobre Mim</div>
              <h2 id="about-title">A autoridade se constrói na <em>prática.</em></h2>
              <p>São mais de 32 anos liderando grandes transformações, desde implantações complexas de ERP e Cloud até reestruturações de times e operações no Brasil e no exterior (China, Indonésia, Paraguai).</p>
              <p>Já ocupei as cadeiras de decisão. Sei exatamente o que o C-Level espera da Tecnologia e o que falta nos líderes técnicos para ascenderem na carreira corporativa.</p>
              <p>Minha missão agora é encurtar o caminho de quem precisa de resultados: tanto empresas buscando eficiência quanto profissionais buscando protagonismo.</p>
            </div>
          </div>
          
          <div className="container" style={{ marginTop: '6rem' }}>
            <div className="eyebrow" data-reveal><span className="eyebrow-line" /> Resultados da Trajetória</div>
            <div className="trust-grid" data-reveal style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div className="trust-item"><span className="trust-number"><strong><CountUp value={32} suffix="+" /></strong></span><span>Anos de experiência</span></div>
              <div className="trust-item"><span className="trust-number"><strong><CountUp value={20} suffix="+" /></strong></span><span>Implantações ERP e CRM</span></div>
              <div className="trust-item"><span className="trust-number"><strong><CountUp prefix="R$ " value={13} suffix="M+" /></strong></span><span>Orçamentos gerenciados</span></div>
              <div className="trust-item"><span className="trust-number"><strong><CountUp value={18} suffix="%" /></strong></span><span>Otimização de custos</span></div>
              <div className="trust-item"><span className="trust-number"><strong><CountUp value={20} suffix="%+" /></strong></span><span>Redução de estruturas via automação</span></div>
            </div>
          </div>

          <div className="container" style={{ marginTop: '6rem' }}>
            <div className="eyebrow" data-reveal><span className="eyebrow-line" /> Formação</div>
            <div className="credentials-grid" data-reveal style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <article className="credential-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <GraduationCap size={32} style={{ margin: '0 auto 1rem', color: '#C6A87C' }} />
                <h3>Harvard Business School</h3>
                <p>Disruptive Strategy</p>
              </article>
              <article className="credential-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <GraduationCap size={32} style={{ margin: '0 auto 1rem', color: '#C6A87C' }} />
                <h3>Fundação Dom Cabral</h3>
                <p>Programa de Desenvolvimento de Executivos</p>
              </article>
              <article className="credential-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <GraduationCap size={32} style={{ margin: '0 auto 1rem', color: '#C6A87C' }} />
                <h3>PUC Minas</h3>
                <p>MBA – Gestão de Negócios</p>
              </article>
            </div>
          </div>
        </section>

        {/* PALESTRAS */}
        <section
          className="section podcast-section dark-section"
          id="palestras"
          aria-labelledby="palestras-title"
          style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
        >
          <div className="container">

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                {/* Heading */}
                <div data-reveal>
                  <div className="eyebrow"><span className="eyebrow-line" /> Palestras</div>
                  <h2 id="palestras-title" style={{ marginTop: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                    Mais do que falar sobre tendências, é preciso transformar conhecimento em <em>decisões.</em>
                  </h2>
                </div>

                {/* Conteúdo das Abas */}
                <div style={{ marginTop: '2rem' }}>
                  {/* Abas sem linha inferior */}
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <button onClick={() => setPalestrasTab('sobre')} className={`tab-btn ${palestrasTab === 'sobre' ? 'active' : ''}`}>
                      Sobre as Palestras
                    </button>
                    <button onClick={() => setPalestrasTab('temas')} className={`tab-btn ${palestrasTab === 'temas' ? 'active' : ''}`}>
                      Temas para Eventos
                    </button>
                  </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: palestrasTab === 'temas' ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr', gap: '1.5rem' }}>
                {palestrasTab === 'sobre' && (
                  <div className="animate-fade-in" style={{ maxWidth: '720px' }}>
                    <p>Tecnologia está mudando empresas, profissões e modelos de negócio em uma velocidade sem precedentes. Inteligência Artificial, automação, dados e transformação digital já fazem parte da agenda de praticamente todas as organizações.</p>
                    <p style={{ marginTop: '1.25rem' }}>Mas existe uma questão que considero ainda mais importante: <strong>Como transformar toda essa tecnologia em valor real para empresas e pessoas?</strong></p>
                    <p style={{ marginTop: '1.25rem' }}>Sobre o que acontece quando tecnologia encontra estratégia. Quando inovação encontra cultura. Quando conhecimento técnico precisa encontrar visão de negócios.</p>
                    <h3 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Experiência real. Casos reais. Aprendizados reais.</h3>
                    <p>Levo para o palco experiências acumuladas em mais de três décadas de carreira: projetos que deram certo, decisões difíceis, transformações empresariais, erros, liderança e aprendizados que somente a prática proporciona.</p>
                  </div>
                )}

                {palestrasTab === 'temas' && (
                  <div className="animate-fade-in">
                    <p style={{ marginBottom: '1.25rem', fontSize: '0.9rem', opacity: 0.8 }}>Palestras customizadas conforme o público, momento e objetivos da organização:</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem', listStyle: 'none', margin: 0, padding: 0 }}>
                      {palestrasTemas.map((tema, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                          <Check size={15} aria-hidden="true" style={{ color: '#C6A87C', flexShrink: 0, marginTop: '3px' }} /> <span>{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Coluna da Direita: Slider Horizontal */}
            <div data-reveal style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px', position: 'relative', boxShadow: '0 16px 36px rgba(0,0,0,0.35)' }}>
                <div style={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)', transform: `translateX(-${palestrasBgIndex * 100}%)` }}>
                  {['palestra.jpeg', 'palestra1.jpeg', 'palestra2.png', 'palestra3.png'].map((filename, idx) => (
                    <img
                      key={idx}
                      src={`/images/galeria-palestras/${filename}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }}
                      alt={`Alexandre Azeredo palestrando - Momento ${idx + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
                {/* Indicadores */}
                <div style={{ position: 'absolute', bottom: '1rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '6px' }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setPalestrasBgIndex(idx)}
                      aria-label={`Foto ${idx + 1}`}
                      style={{ width: '8px', height: '8px', borderRadius: '50%', background: palestrasBgIndex === idx ? '#C6A87C' : 'rgba(255,255,255,0.4)', transition: 'background 0.3s', padding: 0, border: 'none', cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

            {/* CTA compacto */}
            <div data-reveal className="palestras-cta-grid" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.15)' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>Para empresas, universidades e eventos</h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.8, lineHeight: 1.6 }}>
                  <strong>{palestrasEventos.join(' • ')}</strong>
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a
                  className="button button-gold"
                  href={`mailto:Alexandre@resultgestaopro.com.br?subject=${encodeURIComponent("Convite para Palestra")}&body=${encodeURIComponent("Olá, Alexandre! Gostaria de conversar sobre a possibilidade de uma palestra para o nosso evento/empresa.")}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Convidar para palestrar <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* PODCAST */}
        <section 
          className="section podcast-section dark-section" 
          id="podcast" 
          aria-labelledby="podcast-title"
          style={{ 
            position: 'relative',
            backgroundImage: 'url("/images/banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '5rem',
            paddingBottom: '5rem'
          }}
        >
          {/* Overlay para leitura */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10, 31, 61, 0.9)', zIndex: 0 }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div data-reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" /> Host do Papo de Valor</div>
              <h2 id="podcast-title" style={{ marginTop: '1rem' }}>
                Podcast <em>Papo de Valor</em>
              </h2>
            </div>
            
            <div className="about-grid" style={{ alignItems: 'center' }}>
              <div className="about-copy" data-reveal>
                <img src="/images/logo_papodevalor.jpg" alt="Logo Papo de Valor" style={{ maxWidth: '250px', marginBottom: '1.5rem', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }} loading="lazy" />
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                  Podcast dedicado a Tecnologia, Inovação, Carreira e Empreendedorismo. Converso com executivos, especialistas, empreendedores e líderes de mercado para discutir tendências, experiências reais e ideias capazes de transformar negócios e carreiras.
                </p>
                <a className="button button-gold" href="https://www.youtube.com/@papodevalorpodcast10" target="_blank" rel="noreferrer" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                  Acompanhar no YouTube <Play size={17} style={{ marginLeft: '0.5rem', fill: 'currentColor' }} />
                </a>
              </div>

              <div className="about-visual" data-reveal style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div style={{ 
                  width: '100%',
                  borderRadius: '16px', 
                  border: '4px solid var(--navy, #0a1f3d)',
                  boxShadow: '0 0 0 1px var(--gold, #c9a961), 0 20px 40px rgba(0,0,0,0.3)',
                  overflow: 'hidden'
                }}>
                  <img src="/images/papodevalor.jpeg" alt="Alexandre Azeredo no Papo de Valor" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* APLICAÇÃO E CONTATO (CTA) */}
        <section className="section dark-section" id="aplicacao" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <div className="container">
            <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" /> VAMOS CONVERSAR</div>
              
              <h2 style={{ 
                fontFamily: '"Playfair Display", serif', 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                lineHeight: 1.2, 
                marginTop: '1rem', 
                marginBottom: '1.5rem',
                maxWidth: '800px'
              }}>
                Dê o próximo passo na sua carreira.
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6, 
                maxWidth: '600px', 
                margin: '0 auto 3rem',
                color: 'rgba(255,255,255,0.8)'
              }}>
                Preencha o formulário abaixo para iniciar sua aplicação na Mentoria RESULT. Analisaremos seu perfil para entender se é o momento certo para acelerarmos seus resultados.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button 
                  className="button button-gold"
                  onClick={() => setContactModalOpen(true)}
                  style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
                >
                  PREENCHER FORMULÁRIO <ArrowUpRight size={17} />
                </button>
              </div>

              <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', maxWidth: '800px' }}>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Possui dúvidas sobre outros serviços (Consultoria, Palestras, etc)? Fale diretamente comigo:</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a 
                    className="button"
                    style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}
                    href={`https://wa.me/5531986417690?text=${encodeURIComponent("Olá, Alexandre! Cheguei através do site e gostaria de conversar com você.")}`}
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Falar no WhatsApp <ArrowUpRight size={16} />
                  </a>
                  
                  <a 
                    className="button"
                    style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      setContactModalOpen(true);
                    }}
                  >
                    <Mail size={16} style={{ marginRight: '0.4rem' }} /> Alexandre@resultgestaopro.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* MODAL DE CONTATO FLUTUANTE */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setContactModalOpen(false)}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setContactModalOpen(false)} aria-label="Fechar formulário">
              <X size={24} />
            </button>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="eyebrow-line" /> Fale comigo</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', textAlign: 'center', marginBottom: '1rem', color: '#fff' }}>
              Como posso te ajudar?
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              Preencha os campos e eu retornarei o contato o mais breve possível.
            </p>
            <form onSubmit={(e) => { handleSubmit(e); setContactModalOpen(false); }} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Nome</span>
                <input id="nome" name="nome" type="text" placeholder="Como posso te chamar?" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>E-mail</span>
                <input id="email" name="email" type="email" placeholder="voce@email.com" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Telefone / WhatsApp</span>
                <input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-9999" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Mensagem</span>
                <textarea id="mensagem" name="mensagem" rows={4} placeholder="Como posso ajudar? (Mentoria, Palestra, Serviços...)" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff', resize: 'vertical' }} />
              </label>
              <button className="button button-gold" type="submit" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                Enviar Mensagem <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#top" style={{ width: 'auto', marginLeft: '-84px' }}>
              <span className="brand-logo-wrap" style={{ width: 'min(276px, 80vw)', height: '140px' }}>
                <img src={footerLogoSrc} alt="Logo Alexandre Azeredo" className="brand-logo" style={{ objectPosition: 'left center' }} />
              </span>
            </a>
            <p>Estratégia que posiciona.<br />Liderança que transforma.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/alexandreazeredo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="https://www.instagram.com/alexandreazeredo_" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://www.youtube.com/@papodevalorpodcast10" target="_blank" rel="noreferrer" aria-label="Podcast Papo de Valor"><Mic2 size={17} /></a>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-label">Explorar</p>
            <a href="#servicos" onClick={handleSectionNavigation}>Serviços</a>
            <a href="#mentoria" onClick={handleSectionNavigation}>Mentoria</a>
            <a href="#sobre" onClick={handleSectionNavigation}>Sobre Mim</a>
            <a href="#palestras" onClick={handleSectionNavigation}>Palestras</a>
            <a href="#podcast" onClick={handleSectionNavigation}>Podcast</a>
          </div>
          <div className="footer-column">
            <p className="footer-label">Contato</p>
            <a style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setContactModalOpen(true); }}><Mail size={15} /> Alexandre@resultgestaopro.com.br</a>
            <a href="https://www.linkedin.com/in/alexandreazeredo" target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/alexandreazeredo</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Alexandre Azeredo. Todos os direitos reservados.</span>
          <span><a href="/politica-de-privacidade">Política de Privacidade</a><i /> <a href="/termos-de-uso">Termos de Uso</a></span>
        </div>
      </footer>
    </div>
  );
}
