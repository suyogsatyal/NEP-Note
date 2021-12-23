let menuIcon = document.querySelector('.menu-icon');
let frame = document.querySelector('.navbar-toggler')
		frame.addEventListener('click', function(){
			menuIcon.classList.toggle('active')

			if(!menuIcon.classList.contains('active')){
				menuIcon.classList.toggle('not-active')
			}else{
				menuIcon.classList.remove('not-active')
			}
		});