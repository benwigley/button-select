Button Select
=============

A jQuery plugin that allows you to style native select menus using your own custon button styles.


### Basic usage

Button select works well with the default 'btn' class that [Twitter Boostrap](http://getbootstrap.com/css/#buttons) uses

``` javascript
$('select.custom').buttonSelect({
	buttonClass: 'btn'
});
```

#### Default Options

``` javascript
$('select.custom').buttonSelect({
	// Default button styling class
	buttonClass: 'button'
			
	// Extra custom classes to add to the select button
	class: ''
			
	// Custom class to apply to the arrow icon. This can be useful if you want to use a font-icon as the caret. e.g. 'icon-chevron-down
	arrowClass: ''
			
	// If true, adds two arrow to the select menu (up and down) Note: This does nothing if the arrowClass option is set
	arrowUpDown: false
});
```
