(function($) {
	

	$(document).ready( function() {
		$('.site-form').on('submit', function(e) {
			e.preventDefault();
			$('.form-control').removeClass('error');
			let $this = $(this);
			let $email = $this.find('.form-control');
			$email.removeClass('error');
			$email.parent().find('.error-icon').addClass('hidden');

			$email.parent().find('.form-message').empty();
			if( !$email.val() || $email.val().indexOf('@') == -1 ) {
				$email.addClass('error');
				$email.parent().find('.error-icon').removeClass('hidden');
				$email.parent().find('.form-message').append('Please provide a valid email');
			} 
		});
	});
})(jQuery);