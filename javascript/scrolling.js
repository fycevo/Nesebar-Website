let clouds=document.getElementById('clouds');
		let sky=document.getElementById('sky');
		let sea=document.getElementById('sea');
		let moon=document.getElementById('moon');
		let back=document.getElementById('back');
		let txt=document.getElementById('txt');
		let explore=document.getElementById('explore');
		let tower=document.getElementById('tower');
		let header = document.querySelector('header');

		window.addEventListener('scroll',function(){
			let value = window.scrollY;
			clouds.style.left = value*0.25+'px';
			back.style.top=value*0.05+'px';
			sky.style.top=value*0.10+'px';
			tower.style.top=value*0+'px';
			txt.style.bottom=value*1.01+'px';
			txt.style.marginRight=value*1.8+'px';
			txt.style.opacity = 1;
			sea.style.top=value*0.01+'px';
			header.style.top=value*0.1+'px';
			explore.style.marginTop=value*1.3+'px';
		})
