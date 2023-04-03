const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

const createSelectedSection = (root) => {
	const nav = root.querySelector('nav');

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
					let id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).classList.add('active');
				}
			})
		}, {}).observe(s);
	})
}

window.onload = function(){
  trackMouse('.hoverable', '.js-pointer');
  trackMouse('.menu__link', '.js-pointer');
  trackMouse('.card__button', '.js-pointer');
  trackMouse('.Video', '.js-pointer');
  trackMouse('.about__text', '.js-pointer');
  trackMouse('.card__text', '.js-pointer');
  trackMouse('.footer__title', '.js-pointer');
  trackMouse('.footer__subtitle', '.js-pointer');
  trackMouse('.hero__title', '.js-pointer');
  trackMouse('.hero__arrow', '.js-pointer');
  trackMouse('.works__title', '.js-pointer');
  trackMouse('.about__title', '.js-pointer');
  trackMouse('.scale', '.js-pointer');
}

function trackMouse(hover, pointer) {

  var $hover = document.querySelectorAll(hover);
  var $pointer = document.querySelector(pointer);

  var off = 50;
  var first = !0;

  function mouseX(evt) {
    if (!evt) evt = window.event;
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    else return 0
  }

  function mouseY(evt) {
    if (!evt) evt = window.event;
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    else return 0
  }

  function follow(evt) {

    if (first) {
      first = !1;
      $pointer.style.opacity = 1;
    }

    TweenMax.to($pointer, .7, {
      left: (parseInt(mouseX(evt)) - off) + 'px',
      top: (parseInt(mouseY(evt)) - off) + 'px',
      ease: Power3.easeOut
    });
  }
  document.onmousemove = follow;

  (function hoverable(){
    $hover.forEach(function(item){
      item.addEventListener('mouseover', function(){
        $pointer.classList.add('hide');
      });
      item.addEventListener('mouseout', function(){
        $pointer.classList.remove('hide');
      });
    })
  })();

}

createSelectedSection(document.querySelector('#page'))