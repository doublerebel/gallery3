$.gallery = {};

(function ($) {
  $.extend($.gallery, {
	AjaxRotate: function(el) {
	  var $el = $(el);
	  $.getJSON($el.attr('href'), function(data) {
		$.gallery_replace_image(data, $el.closest('.g-photo').find('.g-thumbnail'));
	  });
	},
	AjaxSetAlbumCover: function(el) {
	  $.get($(el).attr('href'), function() {
		window.location.reload();
	  });
	}
  });
})(jQuery);


