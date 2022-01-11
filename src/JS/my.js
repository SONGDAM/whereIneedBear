window.onscroll = function (e) {
	var header = document.getElementById('header');
	// target.style.transition = '1s';
	var container = document.querySelectorAll('.container')[0].offsetTop - 300;

	if (window.scrollY >= 10) {
		// target.style.transform = 'scale(2) translateX(100px)';
		header.classList.add('show');
		title.classList.add('show');
		loginbutton.classList.add('show');
		menu.classList.add('show');
		dropdown.classList.add('show');
	} else {
		// target.style.transform = 'scale(1) translateX(0px)';
		header.classList.remove('show');
		title.classList.remove('show');
		loginbutton.classList.remove('show');
		menu.classList.remove('show');
		dropdown.classList.remove('show');
	}
};
