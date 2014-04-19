
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG Vimeo or Youtube video if non-mobile device is detected*/ 
			$.okvideo({ source: 'ZAZ24NtUXBI', //set your video source here
		                    autoplay:true,
		                    loop: true,
		                    highdef:true,
		                    hd:true, 
		                    adproof: true,
		                    volume:5 // control the video volume by setting a value from 0 to 99
		                 });
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.intro-video-bg').addClass('poster-img');
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

