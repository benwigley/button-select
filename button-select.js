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

	$.fn.buttonSelect = function(userOptions) {

		// Options
		// --------------------
		// Options can be added via params passed to button select
		// on initialization.
		// Alternatively, options can be added as data attributes to
		// the select element you are styling.
		// e.g. 'buttonClass': 'btn' would become data-button-class="btn"

		// Note: Options specified as data attributes will override any
		//       options passed in on initialization.

		var defaults = {
			// Default button styling class
			'buttonClass':	'button',

			// Extra custom classes to add to the select button
			'class':	'',

			// Custom class to apply to the arrow icon.
			// This can be useful if you want to use a
			// font-icon as the caret. e.g. 'icon-chevron-down'
			'arrowClass':	'',

			// If true, adds two arrow to the select menu (up and down)
			// Note: This does nothing if you give 'arrowClass' a value.
			'arrowUpDown':	false
		};

		this.each(function(i, el) {

			// Data attributes override options specified on initialization
			var dataOptions = $(el).data();

			// Extend default options with user provided options
			var options = $.extend({}, defaults, userOptions, dataOptions);


			// Arrow options setup
			// --------------------
			if (options.arrowClass === defaults.arrowClass) {

				// No arrow class specified, use a border caret
				options.arrowClass += ' select-arrow-caret';

				if (options.arrowUpDown) {
					options.arrowClass += ' select-arrow-updown';
				}
			}


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
				if ($el.prop('disabled')) {
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
			var $iconSpan = $(
				'<span class="select-arrow ' + options.arrowClass + '"></span>'
			);
			var $textSpan = $('<span class="select-value"></span>');
			$wrapper.append($iconSpan);
			$wrapper.append($textSpan);


			// Default settings
			// ---------------------

			// Initial value
			setValue($el, $textSpan);

			// Add extra classes to wrapper
			if (options.class) {
				$wrapper.addClass(options.class);
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
				setValue($el, $textSpan);
			});

		});
	};
})( jQuery );
