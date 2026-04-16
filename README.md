# 🎓 Portal do Estudante - UFVJM

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

O **Portal do Estudante** é um website institucional fictício desenvolvido para oferecer informações rápidas, práticas e essenciais para calouros e veteranos da UFVJM (Universidade Federal dos Vales do Jequitinhonha e Mucuri).

Este projeto foi desenvolvido como parte de uma avaliação prática para vaga de estágio na Diretoria de Comunicação Social da UFVJM, demonstrando domínio em HTML semântico, CSS responsivo e JavaScript interativo.

---

## 🎯 Funcionalidades

### Páginas
- **Home (index.html)**: Apresentação do portal com hero section, destaques, serviços úteis e FAQ interativo
- **Sobre (sobre.html)**: Informações sobre o projeto, missão e benefícios
- **Contato (contato.html)**: Formulário de contato com validação completa

### Interatividade (JavaScript)
- ✅ **Menu Responsivo**: Menu hambúrguer para dispositivos móveis com animação suave
- ✅ **FAQ Accordion**: Sistema de perguntas e respostas expansíveis na página inicial
- ✅ **Validação de Formulário**: Validação em tempo real com feedback visual
  - Verificação de campos vazios
  - Validação de formato de email
  - Verificação de tamanho mínimo de mensagem
  - Mensagem de sucesso após envio

---

## 🎨 Design e Identidade Visual

### Paleta de Cores
```css
--azul-ufvjm: #003366;      /* Azul institucional */
--azul-claro: #0074D9;      /* Azul para destaques */
--cinza-claro: #F3F5F7;     /* Fundo suave */
--branco: #FFFFFF;          /* Backgrounds */
--cinza-escuro: #333333;    /* Textos */
```

### Tipografia
- **Títulos**: Poppins (600/700)
- **Texto**: Roboto (300/400/500)
- Fontes carregadas via Google Fonts

### Características
- Design limpo e institucional
- Layout responsivo (mobile-first)
- Bordas arredondadas (`border-radius: 10px`)
- Sombras suaves para profundidade
- Animações e transições suaves
- Ícones SVG do Font Awesome

---

## 📁 Estrutura de Arquivos

```
/portal-do-estudante/
│
├── index.html          # Página inicial
├── sobre.html          # Página sobre o projeto
├── contato.html        # Página de contato
├── style.css           # Estilos globais
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação do projeto
```

---

## 🚀 Como Executar

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/seu-usuario/portal-estudante-ufvjm.git
   ```

2. **Abra o arquivo `index.html`** em seu navegador
   - Não é necessário servidor local
   - Compatível com todos os navegadores modernos

3. **Navegue pelas páginas**
   - Use o menu superior para alternar entre as páginas
   - Teste o menu mobile (redimensione a janela)
   - Interaja com o FAQ na página inicial
   - Preencha o formulário de contato

---

## 💻 Tecnologias Utilizadas

### HTML5
- Estrutura semântica
- Tags apropriadas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Acessibilidade com `aria-label`

### CSS3
- Flexbox e Grid Layout
- CSS Variables (Custom Properties)
- Media Queries para responsividade
- Animações e transições
- Mobile-first approach

### JavaScript (Vanilla)
- DOM Manipulation
- Event Listeners
- Validação de formulários
- Toggle de classes
- Smooth scroll

---

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** (> 768px): Layout completo com menu horizontal
- **Mobile** (≤ 768px): Menu hambúrguer, cards empilhados, layout otimizado

### Breakpoints
```css
@media (max-width: 768px) {
  /* Estilos mobile */
}
```

---

## ✨ Destaques Técnicos

### HTML Semântico
```html
<header class="header">
  <nav class="nav">...</nav>
</header>

<main>
  <section class="hero">...</section>
  <section class="destaques">...</section>
</main>

<footer class="footer">...</footer>
```

### CSS Modular
```css
/* Variáveis CSS para fácil manutenção */
:root {
  --azul-ufvjm: #003366;
  --sombra-suave: 0 4px 12px rgba(0, 51, 102, 0.08);
}
```

### JavaScript Limpo
```javascript
// Event delegation e código organizado
formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  // Validação e feedback
});
```

---

## 🎓 Requisitos Atendidos

### Estrutura (HTML)
- [x] Três páginas interligadas
- [x] Cabeçalho, navegação, conteúdo e rodapé em todas as páginas
- [x] HTML semântico

### Estilo (CSS)
- [x] Arquivo CSS externo
- [x] Layout responsivo (desktop e mobile)
- [x] Boas práticas de design

### Interatividade (JavaScript)
- [x] Arquivo JavaScript externo
- [x] Menu mobile responsivo
- [x] Validação de formulário
- [x] FAQ interativo (bônus)

---

## 📞 Contato Fictício

**Portal do Estudante - UFVJM**  
📍 Rua da Glória, 187 - Centro, Diamantina - MG  
📧 portal@ufvjm.edu.br  
📞 (38) 3532-1200  
🕒 Seg a Sex, 8h às 18h

---

## 📄 Licença

Este é um projeto acadêmico fictício desenvolvido para fins de avaliação. Todo o conteúdo apresentado é ilustrativo.

---

## 👨‍💻 Desenvolvedor

Desenvolvido como parte da avaliação prática para vaga de estágio na Diretoria de Comunicação Social da UFVJM.

**Ano:** 2025  
**Instituição:** Universidade Federal dos Vales do Jequitinhonha e Mucuri

---

## 🙏 Agradecimentos

- Font Awesome pelos ícones SVG
- Google Fonts pelas tipografias
- UFVJM pela oportunidade

---

<div align="center">
  <p>Feito com ❤️ para a comunidade estudantil da UFVJM</p>
  <p>© 2025 Portal do Estudante - Todos os direitos reservados</p>
</div>
