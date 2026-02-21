# Guia Completo - Portfólio de Hítalon Saimon

## 📋 Visão Geral

Este é um portfólio profissional minimalista e moderno, desenvolvido com **React 19 + Tailwind CSS 4**, seguindo a filosofia de design do **Minimalismo Suíço com Tipografia Arquitetônica**.

**Características principais:**
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave com scroll automático
- ✅ Animações fade-in ao scroll (Intersection Observer)
- ✅ Tipografia arquitetônica (Syne + Inter + JetBrains Mono)
- ✅ Paleta de cores profissional (Charcoal, Branco, Azul Elétrico)
- ✅ Otimizado para conversão de recrutadores
- ✅ Acessibilidade (WCAG 2.1)

---

## 🎨 Design System

### Cores
| Cor | Valor | Uso |
|-----|-------|-----|
| **Charcoal (Foreground)** | `oklch(0.15 0.01 65)` | Texto principal |
| **Branco (Background)** | `oklch(1 0 0)` | Fundo principal |
| **Cinza (Muted)** | `oklch(0.5 0.01 65)` | Texto secundário |
| **Azul Elétrico (Primary)** | `oklch(0.4 0.25 260)` | CTAs, destaques |
| **Cinza Claro (Border)** | `oklch(0.95 0.001 286.32)` | Bordas, divisores |

### Tipografia

#### Display (Hero, Headings)
- **Fonte**: Syne Bold/SemiBold
- **Tamanho**: 64px (hero), 48px (h1), 32px (h2)
- **Letter-spacing**: -0.02em (hero), -0.01em (h1)
- **Uso**: Títulos de seções, frase de impacto

#### Body (Texto Principal)
- **Fonte**: Inter Regular/Medium
- **Tamanho**: 16px
- **Line-height**: 1.6
- **Uso**: Descrições, parágrafos

#### Monospace (Código, Tecnologias)
- **Fonte**: JetBrains Mono Regular
- **Tamanho**: 14px
- **Uso**: Nomes de tecnologias, tags

### Espaçamento
- **Grid Base**: 8px
- **Padding Seções**: 96px (desktop), 64px (mobile)
- **Gap Horizontal**: 32px (desktop), 16px (mobile)
- **Margin Vertical**: 80-120px entre seções

### Transições
- **Duração Padrão**: 200ms
- **Easing**: ease-out
- **Fade-in ao Scroll**: 600ms
- **Hover States**: 200ms

---

## 📁 Estrutura de Arquivos

```
portfolio-hitalon-saimon/
├── client/
│   ├── public/              # Assets estáticos
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação principal
│   │   │   └── AnimatedSection.tsx # Wrapper de animações
│   │   ├── pages/
│   │   │   └── Home.tsx            # Página principal (todas as seções)
│   │   ├── App.tsx                 # Roteamento
│   │   ├── index.css               # Design tokens + Tailwind
│   │   └── main.tsx                # Entry point
│   └── index.html                  # HTML base
├── tailwind.config.ts              # Configuração Tailwind
├── package.json                    # Dependências
└── PORTFOLIO_GUIDE.md              # Este arquivo
```

---

## 🔧 Como Personalizar

### 1. Atualizar Informações Pessoais

Edite `client/src/pages/Home.tsx`:

```tsx
// Linha ~51: Frase de Impacto (Hero)
<h1>Transformando a experiência do usuário em arquiteturas de software eficientes</h1>

// Linha ~55: Descrição Curta
<p>Engenheiro de Software em formação com sólida experiência...</p>

// Linha ~82: Sobre Mim
<p>Sou um profissional em transição de Instrutor de Sistemas...</p>
```

### 2. Adicionar/Editar Tecnologias

Edite o array `technologies` (linha ~98):

```tsx
const technologies = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  // Adicione mais aqui
];
```

**Dica**: Use emojis relevantes ou instale `lucide-react` para ícones vetoriais.

### 3. Adicionar/Editar Projetos

Edite o array `projects` (linha ~115):

```tsx
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição breve',
    problem: 'Problema resolvido',
    technologies: ['Tech1', 'Tech2'],
    repo: 'https://github.com/seu-usuario/projeto',
    demo: 'https://seu-deploy.com',
  },
  // Adicione mais aqui
];
```

### 4. Atualizar Experiência & Educação

Edite os arrays `experience` e `education` (linhas ~145 e ~160):

```tsx
const experience = [
  {
    role: 'Seu Cargo',
    company: 'Empresa',
    period: '2024 - Presente',
    description: 'O que você fez',
  },
];

const education = [
  {
    degree: 'Seu Diploma',
    institution: 'Universidade',
    status: 'Concluído',
  },
];
```

### 5. Atualizar Links de Contato

Edite os links na seção Contact (linha ~470):

```tsx
<a href="https://github.com/seu-usuario">GitHub</a>
<a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
<a href="mailto:seu-email@example.com">Email</a>
```

### 6. Personalizar Cores

Edite `client/src/index.css` (seção `:root`):

```css
:root {
  --primary: oklch(0.4 0.25 260);        /* Azul Elétrico */
  --foreground: oklch(0.15 0.01 65);     /* Charcoal */
  --background: oklch(1 0 0);            /* Branco */
  --border: oklch(0.95 0.001 286.32);    /* Cinza Claro */
}
```

**Dica**: Use [OKLch Color Picker](https://oklch.com) para encontrar cores personalizadas.

### 7. Personalizar Tipografia

Edite `client/index.html` para adicionar outras fontes Google:

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ (ou use o sandbox do Manus)
- pnpm (incluído no sandbox)

### Instalação

```bash
cd portfolio-hitalon-saimon
pnpm install
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`.

### Build para Produção

```bash
pnpm build
pnpm preview
```

---

## 📱 Responsividade

O portfólio é **mobile-first** e otimizado para:

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

Breakpoints Tailwind utilizados:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

---

## ♿ Acessibilidade

O portfólio segue as diretrizes **WCAG 2.1**:

- ✅ Contraste de cores (AA)
- ✅ Navegação por teclado
- ✅ Semântica HTML5
- ✅ Atributos ARIA onde necessário
- ✅ Foco visível em elementos interativos

---

## 🎯 Dicas para Conversão de Recrutadores

1. **Frase de Impacto Clara**: Comunique seu valor imediatamente
2. **Projetos Relevantes**: Mostre 3-5 melhores projetos com problema/solução
3. **Tecnologias Visíveis**: Use o Bento Grid de habilidades para destaque
4. **CTAs Diretos**: Botões "Ver Projetos" e "Contato" bem posicionados
5. **Links Atualizados**: GitHub e LinkedIn sempre ativos
6. **Responsividade**: Teste em mobile (recrutadores usam celular)
7. **Performance**: Carregamento rápido (otimizado com Vite)

---

## 🔗 Links Importantes

- **GitHub**: [github.com/HSaimon](https://github.com/HSaimon)
- **LinkedIn**: Atualizar no código
- **Email**: Atualizar no código

---

## 📞 Suporte

Para dúvidas sobre o design ou código:

1. Consulte o arquivo `ideas.md` para entender a filosofia de design
2. Revise `client/src/index.css` para tokens de design
3. Verifique `client/src/pages/Home.tsx` para estrutura de componentes

---

## 📄 Licença

Este portfólio é de uso pessoal. Sinta-se livre para adaptá-lo conforme necessário.

---

**Última atualização**: Fevereiro 2026
**Versão**: 1.0.0
