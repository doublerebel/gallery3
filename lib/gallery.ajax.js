(function ($) {
  $.fn.extend({
	galleryAjaxRotateHandler: function() {
	  $(this).click( function() {
		var $this = $(this);
		$.get($this.attr('href'), function(data) {
			$.gallery_replace_image(data, $this.closest('.g-photo').find('.g-thumbnail'));
		});
		return false;
	  });
	},
	galleryAjaxSetAlbumCoverHandler: function() {
	  $(this).click( function() {
		$.get($(this).attr('href'), function() {
			window.location.reload();
		});
		return false;
	  });
	}
  });
})(jQuery);


