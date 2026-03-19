// ========== MENU MOBILE ==========
const mobileBtn = document.getElementById('mobile-btn');
const menu = document.querySelector('.menu');

if (mobileBtn && menu) {
  mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

// ========== FAQ ACCORDION (apenas na página Home) ==========
const faqPerguntas = document.querySelectorAll('.faq-pergunta');

if (faqPerguntas.length > 0) {
  faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
      const faqItem = pergunta.parentElement;
      
      // Fechar outros itens abertos
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
      
      // Toggle no item clicado
      faqItem.classList.toggle('active');
    });
  });
}

// ========== VALIDAÇÃO DO FORMULÁRIO ==========
const formContato = document.getElementById('form-contato');

if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpar mensagens de erro anteriores
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => erro.textContent = '');
    
    const formGrupos = document.querySelectorAll('.form-grupo');
    formGrupos.forEach(grupo => grupo.classList.remove('error'));
    
    // Validação dos campos
    let temErro = false;
    
    // Nome
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '') {
      mostrarErro(nome, 'Por favor, preencha seu nome');
      temErro = true;
    }
    
    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      mostrarErro(email, 'Por favor, preencha seu email');
      temErro = true;
    } else if (!emailRegex.test(email.value.trim())) {
      mostrarErro(email, 'Por favor, insira um email válido');
      temErro = true;
    }
    
    // Assunto
    const assunto = document.getElementById('assunto');
    if (assunto.value.trim() === '') {
      mostrarErro(assunto, 'Por favor, preencha o assunto');
      temErro = true;
    }
    
    // Mensagem
    const mensagem = document.getElementById('mensagem');
    if (mensagem.value.trim() === '') {
      mostrarErro(mensagem, 'Por favor, escreva sua mensagem');
      temErro = true;
    } else if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, 'A mensagem deve ter pelo menos 10 caracteres');
      temErro = true;
    }
    
    // Se não houver erros, mostrar mensagem de sucesso
    if (!temErro) {
      const msgSucesso = document.getElementById('msg-sucesso');
      msgSucesso.style.display = 'block';
      
      // Limpar o formulário
      formContato.reset();
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        msgSucesso.style.display = 'none';
      }, 5000);
      
      // Scroll suave até a mensagem de sucesso
      msgSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  
  // Função auxiliar para mostrar erro
  function mostrarErro(input, mensagem) {
    const formGrupo = input.parentElement;
    const erro = formGrupo.querySelector('.erro');
    erro.textContent = mensagem;
    formGrupo.classList.add('error');
  }
  
  // Remover erro quando o usuário começar a digitar
  const inputs = formContato.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const formGrupo = input.parentElement;
      const erro = formGrupo.querySelector('.erro');
      erro.textContent = '';
      formGrupo.classList.remove('error');
      
      // Esconder mensagem de sucesso se o usuário começar a editar
      const msgSucesso = document.getElementById('msg-sucesso');
      if (msgSucesso) {
        msgSucesso.style.display = 'none';
      }
    });
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});