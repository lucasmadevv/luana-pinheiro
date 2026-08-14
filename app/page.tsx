"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Asterisk,
  Brain,
  Check,
  Instagram,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const instagramUrl =
  "https://www.instagram.com/psicologaluanapinheiro?igsh=MTV4Nmk4MDR5NHU0cA==";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Psicologia clínica",
    text: "Um espaço seguro para compreender emoções, fortalecer recursos e construir novas formas de lidar com o que hoje pesa.",
    tags: ["Adultos", "Adolescentes", "Crianças"],
  },
  {
    number: "02",
    icon: Brain,
    title: "Avaliação neuropsicológica",
    text: "Uma investigação cuidadosa do funcionamento cognitivo, emocional e comportamental, transformada em orientação clara.",
    tags: ["Infantojuvenil", "Adultos", "Plano individual"],
  },
];

const testimonials = [
  {
    quote:
      "Profissional competente, empática e muito zelosa com os pacientes.",
    name: "Maria Núbia",
    meta: "Opinião verificada",
  },
  {
    quote:
      "Atenciosa e muito dedicada no atendimento. Técnicas que fazem toda diferença.",
    name: "José Medeiros",
    meta: "Opinião verificada",
  },
  {
    quote:
      "Um trabalho que impacta a vivência da família, com mais qualidade de vida e relacionamento.",
    name: "Emilene Costa",
    meta: "Consulta verificada",
  },
];

const faqs = [
  {
    q: "Para quem é o atendimento?",
    a: "A psicologia clínica é voltada a crianças, adolescentes e adultos. A indicação mais adequada é compreendida com cuidado no primeiro contato.",
  },
  {
    q: "Qual é a abordagem utilizada?",
    a: "Trabalho com TCC e terapias de terceira geração, uma abordagem colaborativa, estruturada e baseada em evidências.",
  },
  {
    q: "Como funciona a avaliação neuropsicológica?",
    a: "É um processo realizado em etapas, com entrevista, aplicação de instrumentos e devolutiva. O percurso é definido conforme a necessidade de cada pessoa.",
  },
  {
    q: "Como dar o primeiro passo?",
    a: "Use o botão de contato para conversar diretamente pelo WhatsApp. Você poderá tirar dúvidas e receber as orientações iniciais.",
  },
];

function ArrowIcon() {
  return <ArrowRight size={17} strokeWidth={1.7} aria-hidden="true" />;
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav-reveal", { y: -22, opacity: 0, duration: 0.8 })
        .from(
          ".hero-line > span",
          { yPercent: 110, duration: 1.15, stagger: 0.12 },
          "-=0.35",
        )
        .from(
          ".hero-fade",
          { y: 24, opacity: 0, duration: 0.85, stagger: 0.1 },
          "-=0.55",
        )
        .from(
          ".hero-portrait",
          { clipPath: "inset(100% 0 0 0)", duration: 1.3 },
          "-=1.2",
        );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((item) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".word-reveal").forEach((item) => {
        gsap.from(item, {
          yPercent: 105,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%", once: true },
        });
      });

      mm.add("(min-width: 900px)", () => {
        gsap.to(".about-orbit", {
          rotate: 90,
          ease: "none",
          scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div ref={root}>
      <header className="site-header nav-reveal">
        <a href="#inicio" className="brand" aria-label="Luana Pinheiro — início">
          <span className="brand-mark">LP</span>
          <span>
            Luana Pinheiro
            <small>Psicologia & Neuropsicologia</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atendimentos">Atendimentos</a>
          <a href="#processo">Como funciona</a>
        </nav>

        <a
          className="button button-dark header-cta"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Vamos conversar <ArrowIcon />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav>
          {[
            ["Sobre", "#sobre"],
            ["Atendimentos", "#atendimentos"],
            ["Como funciona", "#processo"],
            ["Dúvidas", "#duvidas"],
          ].map(([label, href], index) => (
            <a
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-cream"
        >
          Falar com a Luana <ArrowIcon />
        </a>
      </div>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow hero-fade">
              <span className="eyebrow-line" />
              Psicologia baseada em evidências
            </div>
            <h1>
              <span className="hero-line">
                <span>A<span className="hero-word-gap">mente</span></span>
              </span>
              <span className="hero-line">
                <span>também merece</span>
              </span>
              <span className="hero-line hero-accent">
                <span>cuidado.</span>
              </span>
            </h1>
            <p className="hero-intro hero-fade">
              Acolhimento e ciência para entender o que você sente, reorganizar
              caminhos e viver com mais presença.
            </p>
            <div className="hero-actions hero-fade">
              <a
                className="button button-terra"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Dar o primeiro passo <ArrowIcon />
              </a>
              <a className="text-link" href="#sobre">
                Conhecer a Luana <ArrowDown size={16} />
              </a>
            </div>
            <p className="hero-language-note hero-fade">
              Atendimentos exclusivamente em português
              <span className="hero-flags" aria-label="Portugal e Brasil">
                <Image
                  src="/flag-portugal.svg"
                  alt="Bandeira de Portugal"
                  width={24}
                  height={16}
                />
                <Image
                  src="/flag-brazil.svg"
                  alt="Bandeira do Brasil"
                  width={24}
                  height={16}
                />
              </span>
            </p>
          </div>

          <div className="hero-visual hero-fade">
            <div className="hero-portrait">
              <div className="hero-image-inner">
                <Image
                  src="/hero-image.png"
                  alt="Psicóloga Luana Pinheiro sorrindo em seu consultório"
                  fill
                  priority
                  sizes="(max-width: 800px) 92vw, 43vw"
                />
              </div>
              <span className="portrait-caption">Presença · escuta · ciência</span>
            </div>
            <div className="credential-card">
              <span>Psicóloga &</span>
              <strong>Neuropsicóloga</strong>
              <small>OPP 26039 | CRP 05/43.417</small>
            </div>
            <div className="sun-seal" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="circlePath"
                    d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                  />
                </defs>
                <text>
                  <textPath href="#circlePath">
                    ACOLHER • COMPREENDER • TRANSFORMAR •
                  </textPath>
                </text>
              </svg>
              <Asterisk />
            </div>
          </div>

          <div className="hero-index hero-fade">01 / 06</div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group}>
                <span>Psicologia clínica</span>
                <Asterisk />
                <span>Neuropsicologia</span>
                <Asterisk />
                <span>Saúde emocional</span>
                <Asterisk />
                <span>Autoconhecimento</span>
                <Asterisk />
              </div>
            ))}
          </div>
        </div>

        <section className="about section" id="sobre">
          <div className="section-label reveal">
            <span>01</span>
            Sobre a Luana
          </div>

          <div className="about-heading">
            <span className="line-mask">
              <span className="word-reveal">Uma escuta que acolhe.</span>
            </span>
            <span className="line-mask">
              <span className="word-reveal italic">Um cuidado que orienta.</span>
            </span>
          </div>

          <div className="about-grid">
            <div className="about-art reveal" aria-hidden="true">
              <div className="about-orbit">
                <span />
                <span />
                <span />
              </div>
              <Asterisk />
            </div>

            <div className="about-copy reveal">
              <p className="lead">
                O processo terapêutico não é sobre ter todas as respostas. É
                sobre encontrar um lugar seguro para fazer as perguntas certas.
              </p>
              <p>
                Luana Pinheiro é psicóloga e neuropsicóloga. Sua prática une
                acolhimento, método e respeito à singularidade de cada pessoa
                — da infância à vida adulta.
              </p>
              <div className="credentials">
                <span><Check /> Mestre em psicologia - Recon Uminho Braga, PT</span>
                <span><Check /> Neuropsicologia Clínica</span>
                <span><Check /> Terapia Cognitivo-Comportamental</span>
                <span><Check /> Especialista em Psicologia Clínica e da Saúde - OPP</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="atendimentos">
          <div className="services-top">
            <div className="section-label light reveal">
              <span>02</span>
              Como posso ajudar
            </div>
            <p className="reveal">
              Cada pessoa chega com uma história. O cuidado começa ao olhar
              para ela por inteiro.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card reveal" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Icon /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Conversar sobre ${service.title}`}
                  >
                    <ArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="process section" id="processo">
          <div className="section-label reveal">
            <span>03</span>
            Seu primeiro passo
          </div>

          <div className="process-grid">
            <div className="process-heading reveal">
              <p className="kicker">Sem pressa. Com direção.</p>
              <h2>Um caminho construído <em>com você.</em></h2>
            </div>
            <ol className="steps">
              {[
                ["Primeiro contato", "Você conta brevemente o que busca e recebe as orientações iniciais."],
                ["Encontro inicial", "Um momento de escuta para compreender sua história e suas necessidades."],
                ["Plano de cuidado", "Juntos, vocês definem objetivos e o percurso mais adequado para você."],
              ].map(([title, text], index) => (
                <li className="reveal" key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="testimonials section">
          <div className="testimonial-intro">
            <div className="section-label light reveal">
              <span>04</span>
              Palavras de quem viveu
            </div>
            <h2 className="reveal">Cuidado que deixa marcas <em>boas.</em></h2>
          </div>
          <div className="quote-grid">
            {testimonials.map((item, index) => (
              <figure className="quote-card reveal" key={item.name}>
                <div className="quote-mark">“</div>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span>{item.name}</span>
                  <small>{item.meta}</small>
                </figcaption>
                <span className="quote-index">0{index + 1}</span>
              </figure>
            ))}
          </div>
          <p className="review-source reveal">
            Depoimentos públicos de pacientes · Doctoralia
          </p>
        </section>

        <section className="faq section" id="duvidas">
          <div className="faq-intro">
            <div className="section-label reveal">
              <span>05</span>
              Perguntas frequentes
            </div>
            <h2 className="reveal">Antes de começar, talvez você queira <em>saber.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <div className={`faq-item reveal ${open ? "is-open" : ""}`} key={item.q}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <span className="faq-plus">{open ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <div><p>{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="closing section" id="contato">
          <div className="closing-star" aria-hidden="true"><Asterisk /></div>
          <div className="closing-copy">
            <p className="reveal">Talvez você não precise fazer tudo sozinha.</p>
            <h2 className="reveal">O cuidado pode começar <em>agora.</em></h2>
            <a
              className="button button-cream reveal"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Conversar com a Luana <ArrowIcon />
            </a>
          </div>
          <div className="closing-note reveal">
            <span>Atendimento psicológico</span>
            <span>Natal · RN</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a href="#inicio" className="brand brand-footer">
            <span className="brand-mark">LP</span>
            <span>
              Luana Pinheiro
              <small>Psicologia & Neuropsicologia</small>
            </span>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={18} /> Instagram
          </a>
        </div>
        <div className="footer-bottom">
          <span>CRP 05/43.417 | OPP 26039</span>
          <span>© {new Date().getFullYear()} Luana Pinheiro</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
