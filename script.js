class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".links", ".links li");
mobileNavbar.init();

const capa1 = document.querySelector(".carousel-capa1");
const capa2 = document.querySelector(".carousel-capa2");

function capa_first() {
  capa1.classList.remove("remove_carousel");
  capa2.classList.add("remove_carousel");
  ImageSlide.startSlider;
}

function capa_two() {
  capa1.classList.add("remove_carousel");
  capa2.classList.remove("remove_carousel");
  ImageSlide.startSlider;
}

const ImageSlide = (() => {
  let count = 1;

  const selectRadio = () => {
    document.getElementById("radio" + count).checked = true;
  };

  const nextImage = () => {
    count++;

    if (count === 1 || document.getElementById("radio1").checked) {
      capa1.classList.remove("remove_carousel");
      capa2.classList.add("remove_carousel");
    }
    if (count === 2) {
      capa1.classList.add("remove_carousel");
      capa2.classList.remove("remove_carousel");
    }

    if (count > 2) {
      count = 0;
    }

    selectRadio();
  };

  const startSlider = () => {
    selectRadio();
    setInterval(nextImage, 4000);
  };

  return {
    startSlider,
  };
})();

ImageSlide.startSlider();
