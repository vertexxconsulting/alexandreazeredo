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

const logoDarkSrc = "/images/alexandre-logo-standard.png";
const heroPhotoSrc = "/images/alexandre-hero.jpeg";
const aboutPhotoSrc = "/images/alexandre-about.jpeg";
const authorityPhotoSrc = "/images/alexandre-about-secondary.jpeg";
const whatsappNumber = "553186417690";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Palestras", href: "#palestras" },
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
      setPalestrasBgIndex((prev) => (prev + 1) % 5);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    const whatsappMessage = [
      "Olá, Alexandre! Vim pelo site.",
      "",
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Mensagem: ${message}`,
    ].join("\n");
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    form.reset();
    toast.success("Redirecionando para o WhatsApp...");
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!whatsappWindow) window.location.assign(whatsappUrl);
  };

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Alexandre Azeredo — início">
            <span className="brand-logo-wrap">
              <img src={logoDarkSrc} alt="Logo Alexandre Azeredo" className="brand-logo" />
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
              <a href="https://www.instagram.com/alexandreazeredo" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
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
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Tecnologia transforma negócios.</div>
              <h1 id="hero-title">
                Transforme Tecnologia em <em>Resultado</em>
              </h1>
              <p className="hero-subtitle">
                Há mais de 32 anos atuando entre Tecnologia, Estratégia e Negócios, ajudando empresas a transformar tecnologia em resultados e profissionais a tomarem melhores decisões sobre suas carreiras.
              </p>
              <p className="hero-subtitle" style={{marginTop: '1rem'}}>
                Apoio empresas e lideranças na construção de estratégias, estruturas, processos e decisões capazes de aumentar a contribuição da Tecnologia para o negócio.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contato" onClick={handleSectionNavigation}>
                  Entrar em contato <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link light-link" href="#servicos" onClick={handleSectionNavigation}>
                  Conhecer serviços <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-visual" data-reveal style={{ transitionDelay: "120ms" }}>
              <div className="hero-image-frame">
                <img src={heroPhotoSrc} alt="Alexandre Azeredo em ambiente corporativo" className="hero-photo" />
                <div className="hero-photo-shade" aria-hidden="true" />
                <div className="visual-kicker">ALEXANDRE AZEREDO / 32+ ANOS</div>
                <div className="visual-caption">
                  <span className="caption-dot" />
                  <span>Experiência executiva aliada a resultados.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS EM TI */}
        <section className="section services-section" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading services-heading" data-reveal>
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> Serviços em TI</div>
                <h2 id="services-title">Soluções para <em>impulsionar negócios</em>.</h2>
              </div>
              <p>Experiência prática para orientar as decisões mais importantes de tecnologia na sua empresa.</p>
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

            {/* Diagnóstico de Tecnologia */}
            <div className="diagnostic-block light-section" data-reveal style={{ marginTop: '4rem', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sua Tecnologia está preparada para sustentar o crescimento da empresa?</h3>
              <ul className="problem-list" style={{ marginBottom: '2rem' }}>
                {diagnosticoPerguntas.map((pergunta, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={15} aria-hidden="true" style={{ color: '#C6A87C' }} /> {pergunta}
                  </li>
                ))}
              </ul>
              <a className="button button-dark" href="#contato" onClick={handleSectionNavigation}>
                Solicitar Diagnóstico de Tecnologia <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* MENTORIA DE CARREIRA */}
        <section className="section credentials-section dark-section" id="mentoria" aria-labelledby="mentoria-title">
          <div className="container">
            <div className="section-heading split-heading" data-reveal>
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> Mentoria de Carreira</div>
                <h2 id="mentoria-title">Não existe um único caminho de sucesso em Tecnologia.<br /><em>Existe o caminho que faz mais sentido para você.</em></h2>
              </div>
              <div>
                <p>Tecnologia oferece inúmeras possibilidades profissionais: Desenvolvimento, Dados, Cloud, Segurança, ERP, Projetos, Produto, Arquitetura, Governança, Consultoria ou Gestão.</p>
                <p style={{ marginTop: '1rem' }}>O problema é que muitos profissionais passam anos acumulando cursos, certificações e experiências sem uma estratégia clara. <strong>A mentoria existe para ajudar a transformar experiência em direção.</strong></p>
              </div>
            </div>

            <div className="mentoria-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
              <div data-reveal>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Para quem é a Mentoria</h3>
                <p style={{ marginBottom: '1.5rem' }}>Profissionais de Tecnologia em nível:</p>
                <ul className="audience-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Pleno</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Sênior</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Especialista</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Tech Lead</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Coordenador</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Gerente</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Consultor</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Gerente de Projetos</li>
                  <li><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Arquiteto</li>
                  <li style={{ gridColumn: 'span 2' }}><Check size={15} aria-hidden="true" style={{color: '#C6A87C'}}/> Profissionais em transição dentro da área de TI</li>
                </ul>
              </div>
              
              <div data-reveal style={{ transitionDelay: '100ms' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Principais Dores</h3>
                <ul className="problem-list">
                  {mentoriaDores.map((dor, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', opacity: 0.9 }}>
                      "{dor}"
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  Se você se identifica com algumas dessas perguntas, provavelmente não precisa apenas de mais conhecimento. <strong>Precisa de direção.</strong>
                </p>
              </div>
            </div>

            <div className="methodology-block" style={{ marginTop: '5rem' }}>
              <div className="eyebrow" data-reveal><span className="eyebrow-line" /> Metodologia da Mentoria</div>
              <div className="credentials-grid methodology-grid" style={{ marginTop: '2rem' }}>
                {mentoriaMetodologia.map((item, index) => (
                  <article className="credential-card" key={item.step} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                    <div className="card-topline"><span>{item.step}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="section-cta" data-reveal style={{ marginTop: '4rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vamos conversar sobre sua carreira?</h3>
              <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                Antes de falar sobre mentoria, quero entender seu momento profissional, suas dúvidas e onde você pretende chegar.
              </p>
              <a className="button button-gold" href="#contato" onClick={handleSectionNavigation}>
                Agendar uma Conversa de Carreira <ArrowUpRight size={17} />
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
              <h2 id="about-title">32 anos de Tecnologia. Muitas transformações. <em>Mais aprendizados ainda.</em></h2>
              <p>Há mais de 32 anos, atuo na interseção entre Tecnologia, Estratégia e Negócios, liderando transformações complexas, estruturando operações e ajudando empresas e profissionais a tomarem melhores decisões.</p>
              <p>Minha trajetória inclui projetos e operações no Brasil e no exterior, com experiências na China, Indonésia e Paraguai, além da liderança de iniciativas em ERP, PMO, Governança, Cloud, Dados, CRM, Processos e Transformação Digital.</p>
              <p>Hoje, além da atuação executiva, direciono parte da minha experiência para a mentoria de líderes e profissionais de tecnologia que buscam acelerar a carreira, ampliar visão estratégica e se preparar para posições de maior responsabilidade como Gerente, Head, CIO ou CTO.</p>
              
              <div className="podcast-highlight light-section" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <Mic2 size={18} /> Host do Papo de Valor
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>
                  Podcast dedicado a Tecnologia, Inovação, Carreira e Empreendedorismo. Converso com executivos, especialistas, empreendedores e líderes de mercado para discutir tendências, experiências reais e ideias capazes de transformar negócios e carreiras.
                </p>
                <a className="text-link" href="https://www.youtube.com/@papodevalorpodcast10" target="_blank" rel="noreferrer" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Conhecer o Podcast <ArrowUpRight size={16} />
                </a>
              </div>
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

            {/* Layout Dividido: Esquerda (Textos) / Direita (Slider) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
              
              {/* Coluna da Esquerda: Heading + Abas + Conteúdo */}
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
                    <div style={{ marginTop: '1.75rem' }}>
                      <Link href="/galeria-palestras" className="button button-dark" onClick={() => window.scrollTo(0,0)}>
                        Ver momentos no palco <ArrowUpRight size={17} />
                      </Link>
                    </div>
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
            </div> {/* Fim Coluna Esquerda */}

            {/* Coluna da Direita: Slider 9:16 */}
            <div data-reveal style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '300px', aspectRatio: '9/16', overflow: 'hidden', borderRadius: '12px', position: 'relative', boxShadow: '0 16px 36px rgba(0,0,0,0.35)' }}>
                <div style={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)', transform: `translateX(-${palestrasBgIndex * 100}%)` }}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <img
                      key={num}
                      src={`/images/galeria-palestras/palestra-${num}.jpeg`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }}
                      alt={`Alexandre Azeredo palestrando - Momento ${num}`}
                      loading="lazy"
                    />
                  ))}
                </div>
                {/* Indicadores */}
                <div style={{ position: 'absolute', bottom: '1rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '6px' }}>
                  {[0,1,2,3,4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setPalestrasBgIndex(idx)}
                      aria-label={`Foto ${idx + 1}`}
                      style={{ width: '6px', height: '6px', borderRadius: '50%', background: palestrasBgIndex === idx ? '#C6A87C' : 'rgba(255,255,255,0.4)', transition: 'background 0.3s', padding: 0, border: 'none', cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div> {/* Fim Grid Layout */}

            {/* CTA compacto */}
            <div data-reveal style={{ marginTop: '3rem', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.15)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>Para empresas, universidades e eventos</h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.8, lineHeight: 1.6 }}>
                  <strong>{palestrasEventos.join(' • ')}</strong>
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a
                  className="button button-gold"
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent("Olá, Alexandre! Gostaria de conversar sobre a possibilidade de uma palestra para o nosso evento/empresa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Convidar para palestrar <ArrowUpRight size={17} />
                </a>
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
              Preencha os campos e entrarei em contato via WhatsApp.
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
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Mensagem</span>
                <textarea id="mensagem" name="mensagem" rows={4} placeholder="Como posso ajudar? (Mentoria, Palestra, Serviços...)" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff', resize: 'vertical' }} />
              </label>
              <button className="button button-gold" type="submit" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                Enviar para WhatsApp <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#top">
              <span className="brand-logo-wrap"><img src={logoDarkSrc} alt="Logo Alexandre Azeredo" className="brand-logo" /></span>
            </a>
            <p>Estratégia que posiciona.<br />Liderança que transforma.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/alexandreazeredo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="https://www.instagram.com/alexandreazeredo" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://www.youtube.com/@papodevalorpodcast10" target="_blank" rel="noreferrer" aria-label="Podcast Papo de Valor"><Mic2 size={17} /></a>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-label">Explorar</p>
            <a href="#servicos" onClick={handleSectionNavigation}>Serviços</a>
            <a href="#mentoria" onClick={handleSectionNavigation}>Mentoria</a>
            <a href="#sobre" onClick={handleSectionNavigation}>Sobre Mim</a>
            <a href="#palestras" onClick={handleSectionNavigation}>Palestras</a>
          </div>
          <div className="footer-column">
            <p className="footer-label">Contato</p>
            <a href="mailto:contato@alexandreazeredo.com.br"><Mail size={15} /> contato@alexandreazeredo.com.br</a>
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
