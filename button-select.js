/**
 * Button Select
 * jQuery plugin for styling native cross-browser select menus.
 * 
 * Version:		0.1.0
 * Download:	https://github.com/benwigley/button-select
 * Requires:
 *			1) jQuery v1.3+
 *			2) Bootstrap OR your own custom button styling. Simply create
 *				a button class you would like to use and then provide that
 *				class as option to Button Select when you initialise it. (see example)
 *
 * Examples:
 *		// With Bootstrap
 *		$('select.styled').buttonSelect();
 *
 *		// Custom button class
 *		$('select.styled').buttonSelect({
 *			buttonClass: '.myButtonClass'
 *		});
 *
 *
 * Copyright (c): 2013 Ben Wigley
 *
 * License: MIT License
 *   http://www.opensource.org/licenses/mit-license.php
 */

;(function( $ ){

	$.fn.buttonSelect = function(options) {

		this.each(function(i, el) {

			var defaults = {
				// Default button styling class
				'buttonClass':	'btn',

				// These clases will be added to the select button
				'dataClass':	''
			};

			// Extend default options with user provided options
			var options = $.extend({}, defaults, options);


			/**
			 * Copies the value from a given select element
			 * over to a given placeholder element.
			 */
			var setValue = function($select, $placeholder) {
				var option, value;
				value = $select.val();
				option = $select.children('option[value="' + value + '"]').text();
				$placeholder.text(option);

				// Initial disabled state on/off
				if ($el.attr('disabled') === 'disabled') {
					$wrapper.addClass('disabled');
				}
				else {
					$wrapper.removeClass('disabled');
				}
			};


			// Wrap select elements
			// ---------------------

			var $el = $(el);
			$el.wrap('<span class="select-wrap">');
			var $wrapper = $el.parent();
			var $iconSpan = $('<span class="select-icon icon-chevron-down"></span>');
			var $textSpan = $('<span class="select-value"></span>');
			$wrapper.append($iconSpan);
			$wrapper.append($textSpan);


			// Default settings
			// ---------------------

			// Initial value
			setValue($el, $textSpan);

			// Add all classes to wrapper in the data-class attr
			var wrapperClass = options.dataClass + ' ' + $el.data('class');
			if (wrapperClass) {
				$wrapper.addClass(wrapperClass);
			}

			// Ensure select always has a button class
			if ( ! $wrapper.hasClass(options.buttonClass)) {
				$wrapper.addClass(options.buttonClass);
			}

			// Check for styles on the select menu 
			// and apply them to the wrapper element.
			$wrapper.css({
				'float': $el.css('float')
			});
			
			// Replace the value of the select 
			// every time a new value is selected.
			$el.change(function(e) {
				if ($.inArray($el.val(), ['', 'default']) > -1) {
					$el.val("default");
				}
				else {
					setValue($el, $textSpan);
				}
			});

		});
	};
})( jQuery );
