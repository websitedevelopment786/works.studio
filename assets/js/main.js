document.addEventListener('DOMContentLoaded', function () {
	var b_loader = document.querySelector('#b_loader');
	var b_content_innerwrap = document.querySelector('.b_content_innerwrap');
	var tl = gsap.timeline();
	const scroll = new LocomotiveScroll({
		el: document.querySelector('#main'),
		smooth: true,
	});
	// banner animation
	bannerVidOut();
	function bannerVidOut () {
		tl.from(b_loader, {
			y: '100%',
			duration: 0.4,
			delay: 1,
			ease: "expo.out",
		});
		gsap.to(b_content_innerwrap, {
			color: 'white',
			delay: 1,
			ease: "expo.out",
		});
		tl.to(b_loader, {
			y: '-100%',
			duration: 0.4,
			delay: 1,
			ease: "expo.out",
		});
		gsap.to(b_content_innerwrap, {
			color: 'black',
			delay: 2.5,
			ease: "expo.out",
		});
	}
	// vs slider animation
	var vs_els = document.querySelectorAll('#vs_slider_wrap .vs_el');
	var section_2 = document.querySelector('#section_2');
	vs_els.forEach(vs_el => {
		vs_el.addEventListener('mouseenter', event => {
			var dataImg = event.currentTarget.getAttribute('data-img');
			section_2.style.backgroundImage = `url(${dataImg})`;
		});
	});
	// back to top
	var back_top = document.querySelector('#back_top');
	back_top.addEventListener('click', e => {
		scroll.scrollTo(0);
	});
});