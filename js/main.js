$(document).ready(function() {
	$(document).delegate('.open', 'click', function(event){
		$(this).addClass('oppenned');
		event.stopPropagation();
	})
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
	})
	$(document).delegate('.cls', 'click', function(event){
		$('.open').removeClass('oppenned');
		event.stopPropagation();
	});
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function(){
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

class Accordion{
  constructor(selector, multiple=true){
    this.accordion = document.querySelector(selector);
    this.multiple = multiple;
    this.bindEvents();
  }

  bindEvents(){
    this.accordion.querySelectorAll(".item header").forEach(itemHeader =>{

      itemHeader.addEventListener("click",()=>{
        let item = itemHeader.parentNode;
        this.validateMultiple(item);
        item.classList.toggle("active");
      })

    });
  }
  validateMultiple(selectedItem){
    if(this.multiple) return;

    this.accordion.querySelectorAll(".item").forEach(item => {
      if(selectedItem == item) return;
      item.classList.remove("active");
    })
  }
}

(function(){
  new Accordion(".accordion")
	new Accordion(".accordion_2")
})()
