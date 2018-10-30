let menuToggleButton = document.getElementById("menu-toggle");
let miniMenu = document.getElementById("main-mini-menu");

menuToggleButton.addEventListener("click", toggleMenu);

function toggleMenu(){
	if (menuToggleButton.classList.contains('open')){
		menuToggleButton.classList.remove('open');
		miniMenu.classList.remove('open');
		menuToggleButton.innerHTML = "<svg><use href='#menu' /></svg>";
	} else{
		menuToggleButton.classList.add('open');
		miniMenu.classList.add('open');
		menuToggleButton.innerHTML = "<svg><use href='#cross' /></svg>";

	}
}