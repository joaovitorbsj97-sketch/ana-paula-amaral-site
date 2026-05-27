# Ana Paula Amaral - Site Profissional

Site profesional para Ana Paula Amaral, especialista em pós-operatório.

## 🚀 Quick Start

### Localmente

1. **Instale dependências:**
```bash
npm install
```

2. **Rode o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Abra no navegador:**
```
http://localhost:3000
```

### Deploy no Vercel

Este projeto está pronto para fazer deploy direto no Vercel:

1. Faça push para GitHub
2. Vá para [vercel.com](https://vercel.com)
3. Importe o repositório
4. Clique "Deploy"
5. Pronto! URL temporária será gerada

## 📁 Estrutura

```
site-codigo/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── Hero.tsx         # Seção de boas-vindas
│   ├── About.tsx        # Quem é Ana Paula
│   ├── Services.tsx     # Serviços oferecidos
│   ├── FAQ.tsx          # Perguntas frequentes
│   └── Footer.tsx       # Rodapé
├── tailwind.config.js   # Configuração Tailwind
└── package.json         # Dependências
```

## 🎨 Customização

### Adicionar Fotos
- Foto profissional: substituir placeholder em `components/Hero.tsx`
- Fotos antes/depois: adicionar em `components/About.tsx` (quando disponível)

### Mudar Cores
- Cores estão em `tailwind.config.js` (variáveis Quiet Luxury)
- Escala: Off-White, Nude, Marrom, Dourado

### Atualizar Textos
- Cada componente tem um bloco de conteúdo editável
- Textos estão em português (PT-BR)

### Mudar Número WhatsApp
- Buscar `https://wa.me/5521997378503` em todos os arquivos
- Substituir pelo número real

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TailwindCSS** - Utility-first CSS
- **Playfair Display + Montserrat** - Tipografia
- **Vercel** - Hosting

## 📱 Responsividade

Site é 100% mobile-first. Testado em:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🚢 Próximos Passos

1. [ ] Registrar domínio `anapaulaamaral.com.br`
2. [ ] Adicionar fotos profissionais
3. [ ] Configurar Google Analytics
4. [ ] Adicionar certificado SSL (automático no Vercel)
5. [ ] Apontar domínio para Vercel

## 📧 Suporte

Dúvidas? Entre em contato com João (joaovitorbsj@gmail.com)
