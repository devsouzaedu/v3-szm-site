$(document).ready(function() {
    $(window).on('scroll', function() {
      var scrollPosition = $(window).scrollTop();
      var opacity = scrollPosition / 100; // Altere conforme necessário
      $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const slidesList = document.querySelector(".slides-list");
    let currentIndex = 0;

    function showSlide(index) {
      slidesList.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slidesList.children.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slidesList.children.length) % slidesList.children.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Altere o intervalo conforme necessário (em milissegundos)
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de clique aos botões
    document.querySelectorAll('.buttons-container button').forEach(function (button) {
      button.addEventListener('click', function () {
        // Obtém o valor do atributo 'data-target'
        var targetId = button.getAttribute('data-target');
  
        // Obtém a posição da seção de destino
        var targetSection = document.getElementById(targetId);
        var targetPosition = targetSection.offsetTop;
  
        // Rola a página até a posição da seção de destino
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Adiciona um efeito de rolar suave
        });
      });
    });
  });
  $(document).ready(function(){
    $('#balloonGallery').slick({
      slidesToShow: 2, // Mostra 2 slides por vez no desktop
      slidesToScroll: 1, // Avança de 1 em 1 slide
      dots: false, // Desativa os pontos de navegação
      arrows: true, // Ativa as setas de navegação
      responsive: [
        {
          breakpoint: 767, // Configurações para dispositivos com largura máxima de 767px (dispositivos móveis)
          settings: {
            slidesToShow: 1, // Mostra 1 slide por vez no mobile
            slidesToScroll: 1, // Avança de 1 em 1 slide no mobile
            arrows: true, // Ativa as setas de navegação no mobile
          }
        }
      ]
    });
  });
  $(document).ready(function() {
    // Função para verificar se o elemento está visível na janela de visualização
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }

    // Função para animar quando o elemento estiver visível
    function animateIfVisible() {
      if (isScrolledIntoView('.div2title') && $('.div2title').css('opacity') === '0') {
        $('.div2title').addClass('slideInLeft');
      }
    }

    // Adicionar evento de rolagem
    $(window).scroll(function() {
      animateIfVisible();
    });

    // Chamar a função inicialmente para verificar ao carregar a página
    animateIfVisible();
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      animateIfVisible('.div2title', 'slideInLeft');
    });
  
    animateIfVisible('.div2title', 'slideInLeft'); // Chamar a função inicialmente para verificar ao carregar a página
  
    function animateIfVisible(element, animationClass) {
      var elem = $(element);
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = elem.offset().top;
      var elemBottom = elemTop + elem.height();
  
      if (elemBottom <= docViewBottom && elemTop >= docViewTop && elem.css('opacity') === '0') {
        elem.addClass(animationClass);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
  
    // Verifica se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  
    if (!cookiesAccepted) {
      // Mostra o pop-up se os cookies não foram aceitos
      cookiePopup.style.display = 'block';
    }
  
    // Adiciona um ouvinte de clique ao botão de aceitar cookies
    acceptCookiesButton.addEventListener('click', function () {
      // Esconde o pop-up
      cookiePopup.style.display = 'none';
      
      // Armazena a aceitação dos cookies localmente
      localStorage.setItem('cookiesAccepted', true);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
  
    // Obtém o idioma preferido do navegador
    const userLanguage = navigator.language || navigator.userLanguage;
  
    // Verifica se o idioma é o português (Brasil)
    if (userLanguage.toLowerCase() === 'pt-br') {
      // Adapte o conteúdo para a versão em português
      // Exemplo: atualize textos, links, etc.
      console.log('Usuário está usando o idioma português (Brasil)');
    } else {
      // Adapte o conteúdo para a versão em inglês ou padrão
      // Exemplo: atualize textos, links, etc.
      console.log('Usuário está usando um idioma diferente do português (Brasil)');
    }
  
    // Restante do seu código...
  
    // A lógica para alternar entre o modo claro e escuro (se você quiser manter)
    function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      const darkModeEnabled = body.classList.contains('dark-mode');
      localStorage.setItem('darkModeEnabled', darkModeEnabled);
    }
  
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (darkModeEnabled) {
      body.classList.add('dark-mode');
    }
  });

  document.querySelector('.btn-secondary').addEventListener('click', function() {
    // Obtém o valor do atributo data-target
    var target = this.getAttribute('data-target');
    
    // Oculta todas as seções
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Verifica se o elemento com o ID especificado existe
    var targetElement = document.getElementById(target);
    if (targetElement) {
        // Exibe apenas a seção de destino
        targetElement.style.display = 'block';
    } else {
        console.error("Elemento com o ID " + target + " não encontrado.");
    }
});
