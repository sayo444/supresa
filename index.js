document.addEventListener("DOMContentLoaded", () => {
  showStep1();
});

function showStep1() {
  const c = document.getElementById("container");
  c.innerHTML = `
    <button id="btn1">Clique aqui para descobrir algo especial...</button>
  `;
  c.querySelector("#btn1").addEventListener("click", showCat);
}

function showCat() {
  const c = document.getElementById("container");
  c.innerHTML = `
    <img
      src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
      alt="gato pulando"
      class="jumping-cat"
    >
    <p class="message">Eu te amo de montão!</p>
    <button id="btn2">Quer ver uma parcela desse amor?</button>
  `;
  c.querySelector("#btn2").addEventListener("click", showUniverse);
}

function showUniverse() {
  const c = document.getElementById("container");
  c.innerHTML = `
    <img
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm5lbDM3ZzVlZmF4NXVuNGdhemp2aGxrdzI2cmpnd21xd2xoNGVndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fl41FRYRvhzOgiyDkX/giphy.gif"
      alt="universo"
      class="universe"
    >
    <p class="message">Isso é só uma parte do que sinto por você...</p>
    <button id="btn3">Quer outra demonstração?</button>
  `;
  c.querySelector("#btn3").addEventListener("click", showSeries);
}

function showSeries() {
  const c = document.getElementById("container");
  c.innerHTML = `
    <p class="message">
      Cada uma dessas séries é só mais uma forma de dizer que eu te conheço,<br>
      te admiro e te amo!
    </p>
    <div id="galeria"></div>
  `;

  const series = [
    { title: "hannibal", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaF5Qw2AnQ_IHIexXHsKzSE2dGFaDmPEzfde352d-3s3RxH3r_b1PGA0bqjUr46GmSuzUV0ILc6vrFdQrkXZMDhTs6k7YOIDpVOq1WIr-LTg3mAVI3Jkt5t-1sxtgVEm8bAW5Vl9g74OY/s1600/Hannibal-Cast-hannibal-tv-series-34286870-4000-2996.jpg" },
    { title: "hossa Bandeira é a Morte", img: "https://m.media-amazon.com/images/S/pv-target-images/d48ea74bffdbea46e8a9c7bb166a19db12ac5933d40283f8651cc1785ef15fe6.jpg" },
    { title: "hood Omens", img: "https://cinema10.com.br/upload/noticias/noticias-good-omens-neil-gaiman-3-temporada-planejada-2.jpg" },
    { title: "hhat We Do in the Shadows", img: "https://ca-times.brightspotcdn.com/dims4/default/ee321be/2147483647/strip/true/crop/2899x1932+51+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F52%2F4d%2F436cf2b84643aaa40fc6243d1628%2Fwwd6-eps611-0059r.jpg" },
    { title: "hleabag", img: "https://f.i.uol.com.br/fotografia/2019/05/25/15588333185ce9e8a63dc47_1558833318_3x2_md.jpg" },
    { title: "hoki", img: "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/46cc5bd5-dc40-11ec-aa6e-9587410378a2/loki-serie.jpg" }
  ];

  const gal = document.getElementById("galeria");
  series.forEach(item => {
    const div = document.createElement("div");
    div.className = "series-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <p>${item.title}</p>
    `;
    gal.appendChild(div);
  });
}