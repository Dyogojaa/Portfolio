import { useState } from 'react'
import type React from 'react'
import dyogoPhoto from './assets/images/dyogo.png'

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h.01M7 17h.01" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    cloud: <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9z" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-6M12 13c0-2 4-3 4 1v2" /></>,
    github: <><path d="M15 22v-3.9c0-.9-.3-1.5-.7-1.9 2.3-.3 4.7-1.1 4.7-5A3.9 3.9 0 0 0 18 8.5 3.6 3.6 0 0 0 17.9 5S17 4.7 15 6a13.5 13.5 0 0 0-6 0C7 4.7 6.1 5 6.1 5A3.6 3.6 0 0 0 6 8.5a3.9 3.9 0 0 0-1 2.7c0 3.9 2.4 4.7 4.7 5-.4.4-.7 1-.7 1.9V22" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const skills = [
  { icon: 'code', title: '.NET & C#', text: 'ASP.NET Core, Web API, Entity Framework e desenvolvimento de aplicações corporativas.' },
  { icon: 'server', title: 'Arquitetura', text: 'Clean Architecture, DDD, microsserviços e modernização de sistemas legados.' },
  { icon: 'database', title: 'Integrações', text: 'APIs REST, WebServices SOAP, mensageria e integração entre sistemas corporativos.' },
  { icon: 'cloud', title: 'DevOps & Cloud', text: 'Docker, CI/CD, Azure DevOps, Git e práticas de automação para evolução contínua.' },
  { icon: 'ai', title: 'IA aplicada', text: 'Uso de Inteligência Artificial para apoiar produtividade, automação e melhoria do ciclo de desenvolvimento.' },
  { icon: 'briefcase', title: 'Negócio', text: 'Experiência em Seguros, Logística e sistemas corporativos de missão crítica.' },
]

const projects = [
  {
    name: 'GameTracker',
    type: 'Projeto próprio',
    status: 'Público',
    text: 'Sistema fullstack para gerenciamento e acompanhamento de jogos, desenvolvido como projeto de demonstração técnica.',
    tags: ['.NET 8', 'React', 'SQL Server', 'Docker'],
    url: 'https://github.com/Dyogojaa/GameTracker',
  },
  {
    name: 'RecisaoControl',
    type: 'Projeto próprio',
    status: 'Público',
    text: 'Sistema para acompanhamento e projeção de valores de rescisão, desenvolvido como produto próprio com potencial comercial.',
    tags: ['.NET', 'React'],
    url: 'https://github.com/Dyogojaa/RecisaoControl',
  },
  {
    name: 'IRControl',
    type: 'Projeto próprio',
    status: 'Em desenvolvimento',
    text: 'Sistema para organização e gestão das informações relacionadas ao Imposto de Renda, com foco em uma solução profissional e escalável.',
    tags: ['ASP.NET Core', 'React', 'SQL Server'],
    url: null,
  },
]

function App() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="site">
      <header className="header">
        <button className="brand" onClick={() => go('home')} aria-label="Ir para o início">DA<span>.</span></button>

        <nav className={open ? 'nav open' : 'nav'}>
          <button onClick={() => go('sobre')}>Sobre</button>
          <button onClick={() => go('experiencia')}>Experiência</button>
          <button onClick={() => go('projetos')}>Projetos</button>
          <button onClick={() => go('contato')}>Contato</button>
        </nav>

        <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
          {open ? <Icon name="close" /> : <Icon name="menu" />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">DESENVOLVEDOR SÊNIOR .NET</p>
            <h1>Construindo sistemas que conectam <em>tecnologia</em>, arquitetura e negócio.</h1>
            <p className="lead">Especialista em integrações corporativas, APIs e sistemas de missão crítica, com mais de 20 anos de experiência em tecnologia.</p>
            <div className="actions">
              <button className="primary" onClick={() => go('projetos')}>Conheça meus projetos <Icon name="arrow" size={18} /></button>
              <button className="secondary" onClick={() => go('experiencia')}>Minha trajetória</button>
            </div>
          </div>

          <div className="hero-mark">
            <img src={dyogoPhoto} alt="Dyogo Almeida" className="hero-photo" />
            <div className="hero-card">
              <span>20+</span>
              <small>anos de experiência</small>
            </div>
          </div>
        </section>

        <section id="sobre" className="section section-light">
          <div className="section-head">
            <p className="eyebrow">SOBRE</p>
            <h2>Experiência técnica com visão de negócio.</h2>
          </div>

          <div className="about-grid">
            <p>Minha trajetória profissional começou em sistemas fiscais e aplicações corporativas e evoluiu para desenvolvimento .NET, integrações com grandes seguradoras, arquitetura de software e modernização de plataformas críticas.</p>
            <p>Ao longo dos anos, atuei com desenvolvimento, liderança técnica, arquitetura, dados, infraestrutura, DevOps, automação e, atualmente, ferramentas de Inteligência Artificial aplicadas ao desenvolvimento e à melhoria dos processos.</p>
          </div>

          <div className="skills">
            {skills.map(({ icon, title, text }) => (
              <article className="skill" key={title}>
                <Icon name={icon} size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="section-head">
            <p className="eyebrow">TRAJETÓRIA</p>
            <h2>Mais de duas décadas construindo sistemas.</h2>
          </div>

          <div className="timeline">
            <article>
              <span>2006 — 2011</span>
              <div><h3>Glandata</h3><p>Desenvolvimento de sistemas fiscais, NF-e e SPED.</p></div>
            </article>

            <article>
              <span>2011 — 2015</span>
              <div><h3>Spaziolog</h3><p>Liderança técnica, sistemas corporativos, bancos de dados e infraestrutura.</p></div>
            </article>

            <article>
              <span>2015 — presente</span>
              <div>
                <h3>Simetrias / nstech</h3>
                <p>Desenvolvimento .NET, APIs REST, WebServices SOAP e integrações corporativas para o mercado de seguros, com participação em projetos estratégicos e modernização de sistemas críticos.</p>
                <p>Atuação também em práticas de DevOps, automação, CI/CD e uso de Inteligência Artificial como apoio à produtividade, melhoria dos processos de desenvolvimento e evolução contínua das soluções.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="projetos" className="section section-dark">
          <div className="section-head">
            <p className="eyebrow">PROJETOS</p>
            <h2>O que estou construindo.</h2>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div>
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className={`project-status ${project.status === 'Público' ? 'is-public' : 'is-development'}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.text}</p>
                </div>

                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                {project.url ? (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver ${project.name} no GitHub`}
                  >
                    Ver no GitHub <Icon name="arrow" size={16} />
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">Em desenvolvimento</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact">
          <p className="eyebrow">CONTATO</p>
          <h2>Vamos conversar sobre tecnologia?</h2>
          <p>Disponível para conexões profissionais, projetos e oportunidades relacionadas a software, arquitetura, desenvolvimento e tecnologia.</p>

          <div className="contact-links">
            <a href="mailto:dyogojaa@gmail.com" aria-label="Enviar e-mail para Dyogo Almeida">
              <Icon name="mail" size={18} /> E-mail
            </a>
            <a href="https://www.linkedin.com/in/dyogoalmeida" target="_blank" rel="noreferrer" aria-label="LinkedIn de Dyogo Almeida">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Dyogojaa" target="_blank" rel="noreferrer" aria-label="GitHub de Dyogo Almeida">
              <Icon name="github" size={18} /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>© 2026 Dyogo Almeida. Portfólio profissional.</footer>
    </div>
  )
}

export default App
