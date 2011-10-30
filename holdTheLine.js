/*!
 * HoldtheLine: polyfill for HTML5 placeholder support
 * Dan Motzenbecker
 * MIT Licensed
 */

(function($){
	$(function(){
		var input = document.createElement('input'),
			phSupport = 'placeholder' in input;
		if(phSupport) return;
		var els = $('[placeholder]');
		for(var i = 0, len = els.length; i < len; i++){
			(function($this){
				if($this.is('input') || $this.is('textarea')){
					var str = $this.attr('placeholder');
					$this.val(str)
					    .bind('focus', function(){
						    if($this.val() === str) $this.val('');
						    }
					    })
					    .bind('blur', function(){
						    if($this.val() === '') $this.val(str);
					    });
				}
			})(els.eq(i));
		}
	});
})(jQuery);