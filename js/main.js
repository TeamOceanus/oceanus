document.addEventListener('DOMContentLoaded', function(){


  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = document.querySelector('.navbar');
    	function updateMenu(){
    		menu.classList.toggle('open', window.scrollY > 140);
    	}
    	window.addEventListener('scroll', updateMenu, { passive: true });
    	updateMenu();


  //------------------------------------//
  //Navbar Collapse (mobile)//
  //------------------------------------//
  document.querySelectorAll('[data-toggle="collapse"]').forEach(function(button){
  	button.addEventListener('click', function(){
  		var target = document.querySelector(button.getAttribute('data-target'));
  		if(target){
  			target.classList.toggle('in');
  		}
  	});
  });


  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  document.querySelectorAll('.scroll').forEach(function(link){
  	link.addEventListener('click', function(event){
  		var target = link.hash && document.querySelector(link.hash);
  		if(!target){
  			return;
  		}
  		event.preventDefault();
  		target.scrollIntoView({ behavior: 'smooth' });
  	});
  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();



});
