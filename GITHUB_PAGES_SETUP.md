# Guia de Deploy no GitHub Pages

## 📋 Pré-requisitos

- Git instalado
- Node.js 18+ e pnpm
- Conta no GitHub

## 🚀 Passos para Deploy

### 1. Clonar/Criar Repositório no GitHub

```bash
# Se ainda não tem um repositório
git init
git add .
git commit -m "Initial commit: Portfolio de Hítalon Saimon"
git branch -M main
git remote add origin https://github.com/seu-usuario/portfolio-hitalon-saimon.git
git push -u origin main
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Build para Produção

```bash
pnpm build
```

Isso gera uma pasta `dist/` com os arquivos estáticos prontos para deploy.

### 4. Configurar GitHub Pages

#### Opção A: Deploy automático com GitHub Actions (Recomendado)

1. Crie a pasta `.github/workflows` na raiz do projeto
2. Crie o arquivo `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Faça push das mudanças:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

#### Opção B: Deploy Manual

1. Build o projeto:
```bash
pnpm build
```

2. Crie uma branch `gh-pages`:
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin gh-pages
```

3. Volte para a branch main:
```bash
git checkout main
```

### 5. Configurar Repositório para GitHub Pages

1. Vá para **Settings** do repositório
2. Navegue para **Pages** (no menu lateral)
3. Em "Build and deployment":
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione `gh-pages` (ou `main` se preferir)
   - **Folder**: Selecione `/ (root)`
4. Clique em "Save"

### 6. Acessar seu Portfólio

Seu portfólio estará disponível em:
```
https://seu-usuario.github.io/portfolio-hitalon-saimon
```

Ou com domínio personalizado (se configurado).

## 🔧 Configurações Adicionais

### Usar Domínio Personalizado

1. Vá para **Settings > Pages**
2. Em "Custom domain", adicione seu domínio
3. Configure os registros DNS do seu domínio

### Atualizar o Portfólio

Sempre que fizer mudanças:

```bash
# Faça as alterações no código
git add .
git commit -m "Update portfolio"
git push origin main
```

O GitHub Actions fará o deploy automaticamente!

## 📱 Testar Localmente

```bash
pnpm dev
```

Acesse `http://localhost:3000` para visualizar.

## 🐛 Troubleshooting

### Portfólio não aparece após deploy

1. Verifique se a branch `gh-pages` foi criada
2. Confirme que **Settings > Pages** está apontando para a branch correta
3. Aguarde 2-3 minutos para o GitHub processar
4. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Build falha

```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

## 📚 Recursos Úteis

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Última atualização**: Fevereiro 2026
