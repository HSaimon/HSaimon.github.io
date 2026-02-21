/**
 * Home Page - Portfolio de Hítalon Saimon
 * Design System: Minimalismo Suíço com Tipografia Arquitetônica
 * - Hierarquia tipográfica clara (Syne para display, Inter para corpo)
 * - Espaçamento generoso (80-120px entre seções)
 * - Separadores sutis (1px em cinza claro)
 * - Transições suaves (200ms ease-out)
 */

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (!prev.includes(entry.target.id)) {
                return [...prev, entry.target.id];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'C#', icon: '#️⃣' },
    { name: 'PHP', icon: '🐘' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MySQL', icon: '🔵' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Git', icon: '🔗' },
  ];

  const projects = [
    {
      title: 'Sistema de Gestão de Estoque',
      description: 'Plataforma completa para gerenciamento de inventário com relatórios em tempo real.',
      problem: 'Redução de 40% no tempo de processamento de pedidos',
      technologies: ['Java', 'MySQL', 'Spring Boot'],
      repo: 'https://github.com/HSaimon/sistema-estoque',
      demo: '#',
    },
    {
      title: 'Dashboard Analítico',
      description: 'Interface interativa para visualização de dados de vendas e performance.',
      problem: 'Centralização de dados dispersos em múltiplas planilhas',
      technologies: ['React', 'Power BI', 'SQL'],
      repo: 'https://github.com/HSaimon/dashboard-analytics',
      demo: '#',
    },
    {
      title: 'API RESTful de Autenticação',
      description: 'Backend robusto para gerenciamento de usuários e permissões.',
      problem: 'Implementação segura de autenticação JWT',
      technologies: ['C#', 'PostgreSQL', '.NET'],
      repo: 'https://github.com/HSaimon/auth-api',
      demo: '#',
    },
    {
      title: 'Aplicação Web com React',
      description: 'Projeto frontend moderno com componentes reutilizáveis e state management.',
      problem: 'Criação de interface responsiva e performática',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      repo: 'https://github.com/H-Saimon/react-app',
      demo: '#',
    },
    {
      title: 'Sistema de Controle de Acesso',
      description: 'Solução de autenticação e autorização com múltiplos níveis de permissão.',
      problem: 'Segurança robusta com validação de tokens',
      technologies: ['Python', 'Flask', 'PostgreSQL'],
      repo: 'https://github.com/H-Saimon/access-control',
      demo: '#',
    },
    {
      title: 'Análise de Dados com Python',
      description: 'Scripts e notebooks para processamento e visualização de dados.',
      problem: 'Extração de insights de grandes volumes de dados',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      repo: 'https://github.com/HSaimon/data-analysis',
      demo: '#',
    },
  ];

  const experience = [
    {
      role: 'Instrutor',
      company: 'Tel Contact Center',
      period: '2022 - 2026',
      description: 'Treinamento de usuários, suporte técnico e documentação de processos.',
    },
    {
      role: 'Operador',
      company: 'Tel Contact Center',
      period: '2021 - 2022',
      description: 'Atendimento ao cliente, resolução de problemas e escalação de tickets.',
    },
  ];

  const education = [
    {
      degree: 'Engenharia de Software',
      institution: 'Descomplica UniAmérica • 2025 - 2029',
      status: 'Em Andamento',
    },
    {
      degree: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'SENAI - Feira de Santana • 2023 - 2025',
      status: 'Concluído',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('hero') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
          >
            Transformando a experiência do usuário em arquiteturas de software eficientes
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Engenheiro de Software em formação com sólida experiência em suporte técnico, treinamento de sistemas e desenvolvimento de soluções robustas. Pronto para contribuir em projetos desafiadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded transition-all duration-200 hover:opacity-90 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ver Projetos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold rounded transition-all duration-200 hover:bg-secondary"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* About Section */}
      <section
        id="about"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('about') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
        >
          Sobre Mim
        </h2>
        <div className="max-w-2xl">
          <p
            className="text-lg leading-relaxed mb-6 text-muted-foreground"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Sou um profissional em transição de Instrutor de Sistemas para Desenvolvedor, trazendo uma perspectiva única que une a compreensão profunda das necessidades do usuário com a capacidade técnica de implementar soluções robustas.
          </p>
          <p
            className="text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Minha experiência em treinamento e suporte técnico me permitiu desenvolver habilidades excepcionais de resolução de problemas, comunicação clara e empatia com usuários finais. Agora, estou canalizando essas habilidades para criar software que não apenas funciona, mas que realmente melhora a vida das pessoas.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Skills Section - Bento Grid */}
      <section
        id="skills"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('skills') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-foreground"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
        >
          Habilidades & Tecnologias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 bg-secondary border border-border rounded transition-all duration-200 hover:border-primary hover:bg-background group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {tech.icon}
              </div>
              <p
                className="text-sm font-medium text-foreground"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('projects') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-foreground"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
        >
          Projetos Selecionados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 border border-border rounded transition-all duration-200 hover:border-primary hover:shadow-lg"
            >
              <h3
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm text-primary font-semibold mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {project.problem}
              </p>
              <p
                className="text-muted-foreground mb-4 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold transition-opacity duration-200 hover:opacity-70"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Repositório
                  <ExternalLink size={16} />
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold transition-opacity duration-200 hover:opacity-70"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Deploy
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Experience & Education Section */}
      <section
        id="experience"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('experience') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-foreground"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
        >
          Experiência & Educação
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3
              className="text-2xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Experiência
            </h3>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary rounded-full"></div>
                  <h4
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {exp.role}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {exp.company} • {exp.period}
                  </p>
                  <p
                    className="text-muted-foreground mt-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="text-2xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Educação
            </h3>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary rounded-full"></div>
                  <h4
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-sm text-primary font-semibold mt-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {edu.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        data-section
        className={`container py-24 md:py-32 transition-opacity duration-1000 ${
          visibleSections.includes('contact') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
          >
            Vamos construir algo juntos?
          </h2>
          <p
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Estou sempre aberto a novas oportunidades, projetos desafiadores e conversas interessantes. Sinta-se à vontade para entrar em contato comigo através dos links abaixo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://github.com/HSaimon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary border border-border rounded transition-all duration-200 hover:border-primary hover:bg-background"
            >
              <Github size={20} />
              <span
                className="font-semibold text-foreground"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hítalon-saimon-5aa8b9311/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary border border-border rounded transition-all duration-200 hover:border-primary hover:bg-background"
            >
              <Linkedin size={20} />
              <span
                className="font-semibold text-foreground"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:dev.hsaimon@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded font-semibold transition-all duration-200 hover:opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Footer */}
      <footer className="container py-12 text-center">
        <p
          className="text-sm text-muted-foreground"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          © Todos os direitos reservados. Hítalon Saimon. 2026
        </p>
      </footer>
    </div>
  );
}
