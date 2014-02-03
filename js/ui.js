var $r = jQuery.noConflict();
$r(document).ready(function() {
	$(".modal").fancybox({
		maxWidth	: 900,
		maxHeight	: 800,
		fitToView	: true,
		width		: '80%',
		height		: '80%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));

var $x = jQuery.noConflict();
$x(document).ready(function() 
    { 
        $("#sort").tablesorter({
	        headers: {
		        2: {
			        sorter: false
		        },
		        3: {
			        sorter: false
		        },
		        6: {
			        sorter: false
		        },
		        7: {
			        sorter: false
		        },
		        8: {
			        sorter: false
		        },
		        9: {
			        sorter: false
		        }, 
	        },
	        sortList: [[0,1]]
        }); 
    } 
);

var $k = jQuery.noConflict();
$k(document).ready(function(){
    $("#status").minimalect({ theme: "bubble", placeholder: "Vyberte" });
});

var $ = jQuery.noConflict();
$('ul.tabs').each(function(){
  var $active, $content, $links = $(this).find('a');
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');
  $content = $($active.attr('href'));

  $links.not($active).each(function () {
    $($(this).attr('href')).hide();
  });

  $(this).on('click', 'a', function(e){
    $active.removeClass('active');
    $content.hide();

    $active = $(this);
    $content = $($(this).attr('href'));

    $active.addClass('active');
    $content.show();

    e.preventDefault();
  });
});

