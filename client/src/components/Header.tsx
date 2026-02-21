/**
 * Header Component
 * Design System: Minimalismo Suíço com Tipografia Arquitetônica
 * - Navegação limpa e minimalista
 * - Links internos com hover subtil (mudança de opacidade)
 * - Alinhamento perfeito com grid de 8px
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo/Name */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-70"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          HS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-foreground transition-opacity duration-200 hover:opacity-60"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className="hidden md:inline-block px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all duration-200 hover:opacity-90"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Contato
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground transition-opacity duration-200 hover:opacity-60"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-foreground transition-opacity duration-200 hover:opacity-60 py-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded text-center transition-all duration-200 hover:opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
