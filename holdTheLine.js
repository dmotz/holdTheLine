/*!
 * HoldtheLine: backwards compatibility for HTML5 placeholder support
 * (c) Dan Motzenbecker <motzdc@gmail.com>
 * MIT Licensed
 */

(function($){
	$(function(){
		var input = document.createElement('input'),
			placeholderSupport = 'placeholder' in input;
		if(placeholderSupport){
			return;
		}
		var elements = $('[placeholder]');
		for(var i = 0, len = elements.length; i < len; i++){
			(function($this){
				if($this.is('input') || $this.is('textarea')){
					var str = $this.attr('placeholder');
					$this.val(str);
					$this.bind('focus', function(){
						if($this.val() === str){
							$this.val('');
						}
					});
					$this.bind('blur', function(){
						if($this.val() === ''){
							$this.val(str);
						}
					});
				}
			})($(elements[i]));
		}
	});
})(jQuery);