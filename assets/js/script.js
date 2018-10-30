// let menuToggleButton = document.getElementById("#menu-toggle");

document.getElementById("#menu-toggle").addEventListener("click", toggleMenu);

function toggleMenu(){
	if (document.getElementById("#menu-toggle").classList.contains('open')){
		document.getElementById("#menu-toggle").classList.remove('open');
	} else{
		document.getElementById("#menu-toggle").classList.add('open');
	}
}