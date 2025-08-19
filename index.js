document.addEventListener("DOMContentLoaded", showStep1);

function animateIn() {
  const c = document.getElementById("container");
  c.classList.remove("fade-in");
  // força reflow para resetar animação
  void c.offsetWidth;
  c.classList.add("fade-in");
}

function showStep1() {
  const html = `
    <button id="btn1">Clique aqui para descobrir algo especial...</button>
  `;
  render(html);
  document.getElementById("btn1").onclick = showCat;
}

function showCat() {
  const html = `
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFieWVpZGZldGhuNno0a2dncnEzMXcxaHN2cDh1ZnB6ajg5czRmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yFaVoocKapYwWjTqZ7/giphy.gif" alt="eu te amo" class="jumping-cat">
    <p class="message">Eu te amo de montão!</p>
    <button id="btn2">Quer ver uma parcela desse amor?</button>
  `;
  render(html);
  document.getElementById("btn2").onclick = showUniverse;
}

function showUniverse() {
  const html = `
    <img src="https://media3.giphy.com/media/fl41FRYRvhzOgiyDkX/giphy.gif" alt="universo" class="universe">
    <p class="message">Isso é só uma parte do que sinto por você...</p>
    <button id="btn3">Quer outra demonstração?</button>
  `;
  render(html);
  document.getElementById("btn3").onclick = showSeries;
}

function showSeries() {
  const html = `
    <p class="message">Cada uma dessas séries é só mais uma forma de dizer que eu te conheço, te admiro e te amo!</p>
    <div class="gallery" id="galeria"></div>
    <button id="btn4">Você gosta de filmes?</button>
  `;
  render(html);

  const series = [
    { title: "hannibal", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmp6cDgybnZ3MGI2NmhoZjN2eXl6aHpsYzZpam1tNXo1cGp0dmdveSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4VfF50RzR4HKw/giphy.gif" },
    { title: "our Flag Means Death", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGo2Y2xjajJmYW9iZDVqaWt5bHRnemkwYjZoY2dyb294cXNydWM0YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZU27tKZBiVWe2lRqBI/giphy.gif" },
    { title: "good Omens", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTY4eTYyODYxeWVxZnhrYnNyNGxjeXcyNmhjMWZ3cHlzOWF5dGo4biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lp0lCc1yGmvZITB92G/giphy.gif" },
    { title: "what We Do in the Shadows", img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjIwZDFxbTN5d2p3amJ5YTByNjZpNjR4dHA0cGpvN2Y4NWdzbnJlYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d6E4icWikt2kjDFW77/giphy.gif" },
    { title: "fleabag", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGg1ejlyazlheDVuMDhhazJiNjV0NnR0d2NtanhjMmw4bm56YWh1NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3D6aNgOPIg7iXhoLun/giphy.gif" },
    { title: "loki", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXV1cnlseXozdDdoOXJsN2VrYWVuNDcxNmp6M2dudXFld2g4YmlzeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iIiSLPvuxZROdBsCPE/giphy.gif" }
  ];

  const gal = document.getElementById("galeria");
  series.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<img src="${item.img}" alt="${item.title}"><p>${item.title}</p>`;
    gal.appendChild(div);
  });

  document.getElementById("btn4").onclick = showFilms;
}

function showFilms() {
  const html = `
    <p class="message">🎥 Talvez sim.</p>
    <div class="gallery" id="galeria-filmes"></div>
    <button id="btn5">E animes?</button>
  `;
  render(html);

  const filmes = [
    { title: "a Criada", img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFoMjRnZWl0aDJ4eGR0aWc5bmtybXR2ZDJ1NWh4dDdoMHhic3V1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ejJCutbpzThf6GWEvk/giphy.gif" },
    { title: "kingsman", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnhpanJlcWRnNTdxNDI0dWthdjlkMG5teHd3Mjh5NWt2eTRsbGpuaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ov9jXSwUTGZFWFDAQ/giphy.gif" },
    { title: "django Livre", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHdiOHM3NzdhaHlnM2MybGtrb241M3Z2OGM3NzE3NmdvamYzejl4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rpdPBecp8imfS/giphy.gif" }
  ];

  const gal = document.getElementById("galeria-filmes");
  filmes.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<img src="${item.img}" alt="${item.title}"><p>${item.title}</p>`;
    gal.appendChild(div);
  });

  document.getElementById("btn5").onclick = showAnimes;
}

function showAnimes() {
  const html = `
    <p class="message">🍥 É, Você tem bom gosto em:</p>
    <div class="gallery" id="galeria-animes"></div>
    <button id="btn6">Não acaba não??</button>
  `;
  render(html);

  const animes = [
    { title: "saiki", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl2amZ3a3VhMTE5ODZ4enN2enk1dHhnY2Q5eGIwdndyeXlxbTF6MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2SpSdSBuIU10ELvy/giphy.gif" },
    { title: "high School Host Club", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhtZHg1eWozbDltYWdvODRzMW56YnA1Mnp1bzN4ZXdqc2g0dXY5aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DeJqH1Q76fjtC/giphy.gif" },
    { title: "hunter x Hunter", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWl5OHh5NXpjcHF6djYxY3Z0NW44eW83NTRybDhwM2hrN3RrcmlpYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4SdFG1BbqiJEI/giphy.gif" },
    { title: "ore Monogatari", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjcxaTNlOGFseGVsZjN5dm1udHNjYnNhN3cwbGJmYWtqOGl3amloOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jrzbS0aGY7fC7hkxEW/giphy.gif" },
    { title: "mob Psycho 100", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHcwbWdvdGttYjhrbXl5bWE5eDh3eDlmNWcydXk3c2dsazZkNnJiZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUNda7dFmFjGmOpVv2/giphy.gif" },
    { title: "one Punch Man", img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDE3Zmc0cGZ4dGFyMDlocmMzNjcyaDNmOHBiYjBpdzEwbnNibnIzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jj1xut6ZsokKI/giphy.gif" },
    { title: "no.6", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlnMXM0YW14c3dpdXZ3NmFzcXM5YjF1czBzNzkwdWxvaXhwNmYzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WxmIqqdbHxOE/giphy.gif" }
  ];

  const gal = document.getElementById("galeria-animes");
  animes.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<img src="${item.img}" alt="${item.title}"><p>${item.title}</p>`;
    gal.appendChild(div);
  });

  document.getElementById("btn6").onclick = showMusic;
}

function showMusic() {
  const html = `
    <p class="message">Claro que não, oq seria você sem mostrar as suas musicas para mim?</p>
    <div id="music-list"></div>
    <button id="btn7">Agora acabou né?</button>
  `;
  render(html);

  const musics = [
    { title: "drunk Walk Home – Mitski", url: "https://www.youtube.com/embed/_YTPuHVlGXY" },
    { title: "the Red Means I Love You – Madds Buckley", url: "https://www.youtube.com/embed/Pj6ntDEEfeE" },
    { title: "love You Like an Alcoholic – The Taxpayers", url: "https://www.youtube.com/embed/KSfTEtrM1AU" },
    { title: "o Sol e a Lua – Kamaitachi", url: "https://www.youtube.com/embed/30fbS1x0i5M" },
    { title: "future Love – Kamaitachi", url: "https://www.youtube.com/embed/M-vcSlkKm7U" },
    { title: "last Words of a Shooting Star – Mitski", url: "https://www.youtube.com/embed/ssVf326Ox9g" },
  ];

  const list = document.getElementById("music-list");
  musics.forEach(m => {
    const card = document.createElement("div");
    card.className = "music-card";
    card.innerHTML = `
      <p class="music-title">🎧 ${m.title}</p>
      <iframe width="300" height="170" src="${m.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    list.appendChild(card);
  });

  document.getElementById("btn7").onclick = showFacts;
}

function showFacts() {
  const html = `
    <p class="message">🌟 Como eu posso acabar sem mostrar detalhes que fazem você única.</p>
    <div class="gallery" id="curiosity-list"></div>
    <button id="btn8">Uai, tem mais???</button>
  `;
  render(html);

  const facts = [
    {
      title: "🌸 Flor favorita:",
      text: "Lírio do vale — delicada e venenosa.",
      gif: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:350,cw:900,ch:900,q:80,w:900/Vi7uHzJgpVQH9JkCQU5rMR.jpg"
    },
    {
      title: "🥭 Fruta favorita:",
      text: "Talvez manga (mas odeia suco de manga).",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGhjdWw0aXlvZnlwMjR6d2RvYXFyOThrNzFnbjh5N3RyaTBrZjZyNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5tDelK8n41i5G/giphy.gif"
    },
    {
      title: "🍽️ Comida favorita:",
      text: "Strogonoff.",
      gif: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg"
    },
    {
      title: "🥤 Refri favorito:",
      text: "Sprite (Coca e Pepsi? Nem pensar).",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTRlZjFnYWt1MXRwNThwc2gwOW9tbjN2ejR4MHdpZW8yYTU1bnNrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QhMMQC9WIZ9RK/giphy.gif"
    },
    {
      title: "🚫 Não gosta de:",
      text: "Pimentão, quiabo.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXcxbTQ4MTBhYmFvZ3E5dnhsbWJweXZkcWhrd3F2b2xpbW9yNjg0ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUA7aSJyQmfsUOFaqQ/giphy.gif"
    },
    {
      title: "🧅 Cebola?",
      text: "Só se estiver picadinha e sem textura.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmkzN2MycjB4dDZuaWRqMHdiMnF5MmpqYWI1YmJ0eGkwOGZ3bnByeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IgLxrUVrGCgfPQtjvM/giphy.gif"
    },
    {
      title: "🎨 Cor favorita:",
      text: "Cinza.",
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3VycnIyem4xMXU0MTlhMXpkdWk4djZqMDZtemc1bDJ6M3o1emN2dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/P1OMglJ6brixVSdEFk/giphy.gif"
    }
  ];

  const list = document.getElementById("curiosity-list");
  facts.forEach(f => {
    const div = document.createElement("div");
    div.className = "curiosity-card";
    div.innerHTML = `
      <p>${f.title}</p>
      <p>${f.text}</p>
      <img src="${f.gif}" alt="${f.title}">
    `;
    list.appendChild(div);
  });

  document.getElementById("btn8").onclick = showFinal;
}

function showFinal() {
  const html = `
    <p class="message">
      Esse site é só uma tentativa de mostrar o quão incrível você é para mim.<br>
      Você é aquela parte boa da minha vida que eu nem sabia que precisava. Te amo de um jeito simples, verdadeiro, sem exagero, mas com tudo que tenho. Obrigado por ser você, por estar aqui, por fazer parte de mim.
    </p>
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmQ5Z3Y5cGo1ZmJ4cWV0ZXRtY3ZhMWJpMWQyYmIzZGZkdGh2c2U1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sh11BmCf8HY8F0c5GN/giphy.gif" alt="coração">
  `;
  render(html);
}

function render(html) {
  const c = document.getElementById("container");
  c.innerHTML = html;
  animateIn();
}