// Nawigacja wysuwająca się
const arrow = document.querySelector(".fa-angle-down");
const nav = document.querySelector("ul");

arrow.addEventListener("click", function () {
  nav.classList.toggle("on");
  arrow.classList.toggle("on");
});

// Scroll w nawigacji
const headOfSection = document.querySelector(".about").clientHeight;

$("nav a").on("click", function () {
  const goTo = `[data-scroll = ${$(this).attr("class")}]`;
  $("body,html").animate(
    {
      scrollTop: $(goTo).offset().top - headOfSection,
    },
    1000
  );
});

window.addEventListener("scroll", function () {
  const onasNav = document.querySelector(".onas");
  const ofertaNav = document.querySelector(".oferta");
  const galeriaNav = document.querySelector(".galeria");
  const videoNav = document.querySelector(".video");
  const infoNav = document.querySelector(".info");
  const kontaktNav = document.querySelector(".kontakt");

  const distanceOnas = document.querySelector("[data-scroll=onas]").offsetTop;
  const distanceOferta = document.querySelector("[data-scroll=oferta]")
    .offsetTop;
  const distanceGaleria = document.querySelector("[data-scroll=galeria]")
    .offsetTop;
  const distanceVideo = document.querySelector("[data-scroll=video]").offsetTop;
  const distanceInfo = document.querySelector("[data-scroll=info]").offsetTop;
  const distanceKontakt = document.querySelector("[data-scroll=kontakt]")
    .offsetTop;

  const distanceHeadOfSection = headOfSection * 4;
  const windowHeight = window.innerHeight;
  const scrollValue = window.scrollY;
  if (scrollValue > distanceOnas - distanceHeadOfSection) {
    onasNav.classList.add("active");
  }
  if (scrollValue < distanceOnas - distanceHeadOfSection) {
    onasNav.classList.remove("active");
  }
  if (scrollValue > distanceOferta - distanceHeadOfSection) {
    ofertaNav.classList.add("active");
    onasNav.classList.remove("active");
  }
  if (scrollValue < distanceOferta - distanceHeadOfSection) {
    ofertaNav.classList.remove("active");
  }
  if (scrollValue > distanceGaleria - distanceHeadOfSection) {
    galeriaNav.classList.add("active");
    ofertaNav.classList.remove("active");
  }
  if (scrollValue < distanceGaleria - distanceHeadOfSection) {
    galeriaNav.classList.remove("active");
  }
  if (scrollValue > distanceVideo - distanceHeadOfSection) {
    videoNav.classList.add("active");
    galeriaNav.classList.remove("active");
  }
  if (scrollValue < distanceVideo - distanceHeadOfSection) {
    videoNav.classList.remove("active");
  }
  if (scrollValue > distanceInfo - windowHeight) {
    infoNav.classList.add("active");
    videoNav.classList.remove("active");
  }
  if (scrollValue < distanceInfo - windowHeight) {
    infoNav.classList.remove("active");
  }
  if (scrollValue > distanceKontakt - windowHeight) {
    kontaktNav.classList.add("active");
    infoNav.classList.remove("active");
  }
  if (scrollValue < distanceKontakt - windowHeight) {
    kontaktNav.classList.remove("active");
  }

  if (window.scrollY < 200) {
    backArrow.style.display = "none";
  } else {
    backArrow.style.display = "block";
  }
});

// strzałka powrotna

const backArrow = document.querySelector(".arrow");

backArrow.addEventListener("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
