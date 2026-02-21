# Portfólio de Hítalon Saimon

Portfólio profissional minimalista e moderno para Engenheiro de Software em formação, desenvolvido com **React 19 + Tailwind CSS 4**, seguindo a filosofia de design do **Minimalismo Suíço com Tipografia Arquitetônica**.

## 🎯 Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave com scroll automático
- ✅ Animações fade-in ao scroll (Intersection Observer)
- ✅ Tipografia arquitetônica (Syne + Inter + JetBrains Mono)
- ✅ Paleta de cores profissional (Charcoal, Branco, Azul Elétrico)
- ✅ Otimizado para conversão de recrutadores
- ✅ Performance otimizada com Vite
- ✅ Acessibilidade (WCAG 2.1)

## 📋 Seções Incluídas

1. **Hero Section**: Frase de impacto com CTAs diretos
2. **Sobre Mim**: Transição de instrutor para desenvolvedor
3. **Habilidades**: Bento Grid com 12 tecnologias
4. **Projetos**: 6 projetos com problema/solução e links
5. **Experiência & Educação**: Timeline com indicadores visuais
6. **Contato**: Links para GitHub, LinkedIn e Email

## 🚀 Quick Start

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio-hitalon-saimon.git
cd portfolio-hitalon-saimon

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse `http://localhost:3000` no navegador.

### Build para Produção

```bash
# Build otimizado
pnpm build

# Visualize o build localmente
pnpm preview
```

## 📦 Deploy no GitHub Pages

Veja o arquivo **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)** para instruções completas de deploy.

### Quick Deploy

1. **Clone ou crie um repositório no GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio de Hítalon Saimon"
git branch -M main
git remote add origin https://github.com/HSaimon/HSaimon.github.io.git
git push -u origin main
```

2. **Configure GitHub Pages**:
   - Vá para Settings > Pages
   - Selecione "Deploy from a branch"
   - Escolha a branch `main`

3. **Deploy automático com GitHub Actions**:
   - O arquivo `.github/workflows/deploy.yml` já está configurado
   - Cada push para `main` fará o deploy automaticamente

Seu portfólio estará disponível em:
```
https://HSaimon.github.io
```

## 🎨 Personalização

### Atualizar Informações Pessoais

Edite `client/src/pages/Home.tsx`:

```tsx
// Frase de impacto
<h1>Sua frase aqui</h1>

// Adicionar/editar projetos
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição',
    problem: 'Problema resolvido',
    technologies: ['Tech1', 'Tech2'],
    repo: 'https://github.com/...',
    demo: 'https://...',
  },
];

// Atualizar experiência
const experience = [
  {
    role: 'Seu Cargo',
    company: 'Sua Empresa',
    period: '2024 - Presente',
    description: 'O que você fez',
  },
];
```

### Personalizar Cores

Edite `client/src/index.css`:

```css
:root {
  --primary: oklch(0.4 0.25 260);        /* Azul Elétrico */
  --foreground: oklch(0.15 0.01 65);     /* Charcoal */
  --background: oklch(1 0 0);            /* Branco */
  --border: oklch(0.95 0.001 286.32);    /* Cinza Claro */
}
```

Use [OKLch Color Picker](https://oklch.com) para encontrar cores personalizadas.

## 📁 Estrutura do Projeto

```
portfolio-hitalon-saimon/
├── client/
│   ├── public/                 # Assets estáticos
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navegação
│   │   │   └── AnimatedSection.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx        # Página principal
│   │   ├── App.tsx             # Roteamento
│   │   ├── index.css           # Design tokens
│   │   └── main.tsx            # Entry point
│   └── index.html
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions
├── tailwind.config.ts          # Configuração Tailwind
├── package.json
├── PORTFOLIO_GUIDE.md          # Guia de personalização
├── GITHUB_PAGES_SETUP.md       # Guia de deploy
└── README.md                   # Este arquivo
```

## 🔧 Tecnologias

- **React 19**: Framework frontend
- **Tailwind CSS 4**: Utility-first CSS
- **Vite**: Build tool rápido
- **TypeScript**: Type safety
- **Lucide React**: Ícones
- **Intersection Observer**: Animações ao scroll

## 📱 Responsividade

O portfólio é **mobile-first** e otimizado para:

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## ♿ Acessibilidade

Segue as diretrizes **WCAG 2.1**:

- ✅ Contraste de cores (AA)
- ✅ Navegação por teclado
- ✅ Semântica HTML5
- ✅ Atributos ARIA
- ✅ Foco visível

## 🐛 Troubleshooting

### Build falha

```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Portfólio não aparece após deploy

1. Verifique se a branch `gh-pages` foi criada
2. Confirme que **Settings > Pages** está correto
3. Aguarde 2-3 minutos
4. Limpe o cache do navegador

## 📚 Recursos Úteis

- [Guia de Personalização](./PORTFOLIO_GUIDE.md)
- [Guia de Deploy GitHub Pages](./GITHUB_PAGES_SETUP.md)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📞 Contato

- **GitHub**: [github.com/HSaimon](https://github.com/HSaimon)
- **LinkedIn**: [linkedin.com/in/hítalon-saimon-5aa8b9311/](https://www.linkedin.com/in/hítalon-saimon-5aa8b9311/)
- **Email**: dev.hsaimon@gmail.com

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para adaptá-lo conforme necessário.

---

**Desenvolvido com ❤️ para impressionar recrutadores**

**Última atualização**: Fevereiro 2026  
**Versão**: 1.0.0
