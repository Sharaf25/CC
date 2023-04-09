const nav = document.querySelector("nav");
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let prevScrollPos = window.pageYOffset;
let isNavHidden = false;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > vh / 2 && !isNavHidden) {
    nav.style.transform = "translateY(-100%)";
    isNavHidden = true;
  } else if (currentScrollPos <= vh / 2 && isNavHidden) {
    nav.style.transform = "translateY(0)";
    isNavHidden = false;
  }

  if (currentScrollPos > 500) {
    whiteBlock.style.backgroundColor = "blue";
  } else {
    whiteBlock.style.backgroundColor = "white";
  }
  
  prevScrollPos = currentScrollPos;
});

//blur function for Grid

const products = document.querySelectorAll('.product');

products.forEach(product => {
  product.addEventListener('mouseenter', () => {
    products.forEach(p => {
      if (p !== product) {
        p.style.filter = 'blur(3px) brightness(0.8)';
      }
    });
  });

  product.addEventListener('mouseleave', () => {
    products.forEach(p => {
      p.style.filter = '';
    });
  });
});
