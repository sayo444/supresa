document.addEventListener('DOMContentLoaded', showNameQuiz);

function fadeIn(html) {
  const app = document.getElementById('app');
  app.style.opacity = 0;
  setTimeout(() => {
    app.innerHTML = html;
    app.style.opacity = 1;
  }, 200);
}

function showNameQuiz() {
  fadeIn(`
    <p class="message">Qual é o seu nome? 💖</p>
    <ul class="options">
      <li><button data-value="Beatriz">Beatriz</button></li>
      <li><button data-value="Caroline">Caroline</button></li>
      <li><button data-value="Mariana">Mariana</button></li>
      <li><button data-value="Ana">Ana</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'Ana') {
        showFeedback(
          true,
          'Isso mesmo, Ana! 🌟',
          'https://media.giphy.com/media/1BdIP54T3RS2BRc1Xc/giphy.gif',
          showDrinkQuiz
        );
      } else {
        showFeedback(
          false,
          'Ops… não era esse nome! 😂',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showNameQuiz
        );
      }
    };
  });
}

function showDrinkQuiz() {
  fadeIn(`
    <p class="message">Qual é o seu refri favorito? 🥤</p>
    <ul class="options">
      <li><button data-value="Sprite">Sprite</button></li>
      <li><button data-value="Coca-Cola">Coca-Cola</button></li>
      <li><button data-value="Pepsi">Pepsi</button></li>
      <li><button data-value="Fanta">Fanta</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'Sprite') {
        showFeedback(
          true,
          'Sprite é a escolha perfeita! 🥤',
          'https://media.giphy.com/media/IoLmklxBxrZeg/giphy.gif',
          showColorQuiz
        );
      } else {
        showFeedback(
          false,
          'Acho que não… tenta de novo! 😅',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showDrinkQuiz
        );
      }
    };
  });
}

function showColorQuiz() {
  fadeIn(`
    <p class="message">Qual é a sua cor favorita? 🎨</p>
    <ul class="options">
      <li><button data-value="cinza">Cinza</button></li>
      <li><button data-value="rosa">Rosa</button></li>
      <li><button data-value="azul">Azul</button></li>
      <li><button data-value="verde">Verde</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'cinza') {
        showFeedback(
          true,
          'Cinza combina muito com você! ⚪⚫',
          'https://media.giphy.com/media/26AHu11M5MLtdmYVy/giphy.gif',
          showFoodQuiz
        );
      } else {
        showFeedback(
          false,
          'Não era essa cor… 😬',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showColorQuiz
        );
      }
    };
  });
}

function showFoodQuiz() {
  fadeIn(`
    <p class="message">Qual comida faz seu coração bater mais forte? 🍛</p>
    <ul class="options">
      <li><button data-value="strogonoff">Strogonoff</button></li>
      <li><button data-value="pizza">Pizza</button></li>
      <li><button data-value="hamburguer">Hambúrguer</button></li>
      <li><button data-value="salada">Salada</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'strogonoff') {
        showFeedback(
          true,
          'Strogonoff pra vida! 🍛',
          'https://media.giphy.com/media/l0MYKKj0OLmbn4h4s/giphy.gif',
          showFlowerQuiz
        );
      } else {
        showFeedback(
          false,
          'Quase lá… escolhe outra vez! 😋',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showFoodQuiz
        );
      }
    };
  });
}

function showFlowerQuiz() {
  fadeIn(`
    <p class="message">Qual é a sua flor preferida? 🌸</p>
    <ul class="options">
      <li><button data-value="lírio-do-vale">Lírio-do-vale</button></li>
      <li><button data-value="rosa">Rosa</button></li>
      <li><button data-value="girassol">Girassol</button></li>
      <li><button data-value="orquídea">Orquídea</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'lírio-do-vale') {
        showFeedback(
          true,
          'Lírio-do-vale, pura delicadeza! 🌿',
          'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
          showFruitQuiz
        );
      } else {
        showFeedback(
          false,
          'Não era essa… tenta de novo! 🌼',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showFlowerQuiz
        );
      }
    };
  });
}

function showFruitQuiz() {
  fadeIn(`
    <p class="message">E qual fruta te deixa feliz? 🥭</p>
    <ul class="options">
      <li><button data-value="manga">Manga</button></li>
      <li><button data-value="banana">Banana</button></li>
      <li><button data-value="maçã">Maçã</button></li>
      <li><button data-value="uva">Uva</button></li>
    </ul>
  `);

  document.querySelectorAll('.options button').forEach(btn => {
    btn.onclick = () => {
      if (btn.dataset.value === 'manga') {
        showFeedback(
          true,
          'Manga é sucesso! 🥭',
          'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif',
          () => fadeIn('<p class="message">Parabéns, Ana! Quiz finalizado com sucesso! 🎉</p>')
        );
      } else {
        showFeedback(
          false,
          'Quase… tenta mais uma vez! 👏',
          'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
          showFruitQuiz
        );
      }
    };
  });
}

function showFeedback(isCorrect, text, gifUrl, nextFn) {
  fadeIn(`
    <img class="gif" src="${gifUrl}" alt="${isCorrect ? 'Certo' : 'Errado'}" />
    <p class="message">${text}</p>
    <button class="action" id="next">
      ${isCorrect ? 'Próximo' : 'Tentar de novo'}
    </button>
  `);
  document.getElementById('next').onclick = nextFn;
}