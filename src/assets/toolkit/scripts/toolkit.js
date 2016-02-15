/**
 * Toolkit JavaScript
 */

'use strict';

var $ = require('jquery');

$(document).ready(function () {

	/* Accordion */
	$('.js-accordion-trigger').bind('click', function(e){
		$(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
		$(this).parent().toggleClass('is-expanded');
		e.preventDefault();
	});
	/* END Accordion */

	/* Animate */
	$(function() {
		var animationClasses = 'animated alternate iteration zoomOut';
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		$('.animate-trigger').on('click',function() {
			$('.animate-target').addClass(animationClasses).one(animationEnd,function() {
				$(this).removeClass(animationClasses);
			});
		});
	});
	/* END Animate */

	/* Dropdown */
	$(".dropdown-button").click(function() {
		var $button, $menu;
		$button = $(this);
		$menu = $button.siblings(".dropdown-menu");
		$menu.toggleClass("show-menu");
		$menu.children("li").click(function() {
			$menu.removeClass("show-menu");
			$button.html($(this).html());
		});
	});
	/* END Dropdown */

	/* Expander */
	$(document).ready(function() {
		$('.expander-trigger').click(function(){
			$(this).toggleClass("expander-hidden");
		});
	});
	/* END Expander */

	/* Scroll Fade In */
	var element = document.getElementById("js-fadeInElement");
	$(element).addClass('js-fade-element-hide');

	$(window).scroll(function() {
		if( $("#js-fadeInElement").length > 0 ) {
			var elementTopToPageTop = $(element).offset().top;
			var windowTopToPageTop = $(window).scrollTop();
			var windowInnerHeight = window.innerHeight;
			var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
			var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
			var distanceFromBottomToAppear = 300;

			if(elementTopToWindowBottom > distanceFromBottomToAppear) {
				$(element).addClass('js-fade-element-show');
			}
			else if(elementTopToWindowBottom < 0) {
				$(element).removeClass('js-fade-element-show');
				$(element).addClass('js-fade-element-hide');
			}
		}
	});
	/* END Scroll Fade In */

	/* Modal */
	$(function() {
		$("#modal-1").on("change", function() {
			if ($(this).is(":checked")) {
				$("body").addClass("modal-open");
			} else {
				$("body").removeClass("modal-open");
			}
		});

		$(".modal-fade-screen, .modal-close").on("click", function() {
			$(".modal-state:checked").prop("checked", false).change();
		});

		$(".modal-inner").on("click", function(e) {
			e.stopPropagation();
		});
	});
	/* END Modal */

	/* Parallax */
	$(window).scroll(function(e) {
		if ($("#js-parallax-window").length) {
			parallax();
		}
	});

	function parallax(){
		if( $("#js-parallax-window").length > 0 ) {
			var plxBackground = $("#js-parallax-background");
			var plxWindow = $("#js-parallax-window");

			var plxWindowTopToPageTop = $(plxWindow).offset().top;
			var windowTopToPageTop = $(window).scrollTop();
			var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

			var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
			var windowInnerHeight = window.innerHeight;
			var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
			var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
			var plxSpeed = 0.35;

			plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
		}
	}
	if ($("#js-parallax-window").length) {
		parallax();
	}
	/* END Parallax */

	/* Sliding Panel */
	$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
		$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
		e.preventDefault();
	});
	/* END Sliding Panel */

	/* Vertical Tabs */
	$(".js-vertical-tab-content").hide();
	$(".js-vertical-tab-content:first").show();

	/* if in tab mode */
	$(".js-vertical-tab").click(function(event) {
		event.preventDefault();

		$(".js-vertical-tab-content").hide();
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).show();

		$(".js-vertical-tab").removeClass("is-active");
		$(this).addClass("is-active");

		$(".js-vertical-tab-accordion-heading").removeClass("is-active");
		$(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
	});

	/* if in accordion mode */
	$(".js-vertical-tab-accordion-heading").click(function(event) {
		event.preventDefault();

		$(".js-vertical-tab-content").hide();
		var accordion_activeTab = $(this).attr("rel");
		$("#"+accordion_activeTab).show();

		$(".js-vertical-tab-accordion-heading").removeClass("is-active");
		$(this).addClass("is-active");

		$(".js-vertical-tab").removeClass("is-active");
		$(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
	});
	/* END Vertical Tabs */

	/* Accordion Tabs */
	$('.accordion-tabs,.accordion-tabs-minimal').each(function(index) {
		$(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	});
	$('.accordion-tabs,.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
		if (!$(this).hasClass('is-active')) {
			event.preventDefault();
			var accordionTabs = $(this).closest('.accordion-tabs, .accordion-tabs-minimal');
			accordionTabs.find('.is-open').removeClass('is-open').hide();

			$(this).next().toggleClass('is-open').toggle();
			accordionTabs.find('.is-active').removeClass('is-active');
			$(this).addClass('is-active');
		} else {
			event.preventDefault();
		}
	});
	/* END: Accordion Tabs */

	/* Navigation */
	var menuToggle = $('#js-mobile-menu').unbind();
	$('#js-navigation-menu').removeClass("show");

	menuToggle.on('click', function(e) {
		e.preventDefault();
		$('#js-navigation-menu').slideToggle(function(){
			if($('#js-navigation-menu').is(':hidden')) {
				$('#js-navigation-menu').removeAttr('style');
			}
		});
	});
	/* END Navigation */

	/* Scroll on page */
	(function ($) {
		$.mark = {
			jump: function (options) {
				var defaults = {
					selector: 'a.scroll-on-page-link'
				};
				if (typeof options == 'string') {
					defaults.selector = options;
				}

				options = $.extend(defaults, options);
				return $(options.selector).click(function (e) {
					var jumpobj = $(this);
					var target = jumpobj.attr('href');
					var thespeed = 1000;
					var offset = $(target).offset().top;
					$('html,body').animate({
						scrollTop: offset
					}, thespeed, 'swing');
					e.preventDefault();
				});
			}
		};
	})($);


	$(function(){
		$.mark.jump();
	});
	/* END Scroll on page */

	/* Search tools */
	var Filter = (function() {
		function Filter(element) {
			this._element = $(element);
			this._optionsContainer = this._element.find(this.constructor.optionsContainerSelector);
		}

		Filter.selector = '.filter';
		Filter.optionsContainerSelector = '> div';
		Filter.hideOptionsClass = 'hide-options';

		Filter.enhance = function() {
			var klass = this;

			return $(klass.selector).each(function() {
				return new klass(this).enhance();
			});
		};

		Filter.prototype.enhance = function() {
			this._buildUI();
			this._bindEvents();
		};

		Filter.prototype._buildUI = function() {
			this._summaryElement = $('<label></label>').
			addClass('summary').
			attr('data-role', 'summary').
			prependTo(this._optionsContainer);

			this._clearSelectionButton = $('<button class=clear></button>').
			text('Clear').
			attr('type', 'button').
			insertAfter(this._summaryElement);

			this._optionsContainer.addClass(this.constructor.hideOptionsClass);
			this._updateSummary();
		};

		Filter.prototype._bindEvents = function() {
			var self = this;

			this._summaryElement.click(function() {
				self._toggleOptions();
			});

			this._clearSelectionButton.click(function() {
				self._clearSelection();
			});

			this._checkboxes().change(function() {
				self._updateSummary();
			});

			$('body').click(function(e) {
				var inFilter = $(e.target).closest(self.constructor.selector).length > 0;

				if (!inFilter) {
					self._allOptionsContainers().addClass(self.constructor.hideOptionsClass);
				}
			});
		};

		Filter.prototype._toggleOptions = function() {
			this._allOptionsContainers().
			not(this._optionsContainer).
			addClass(this.constructor.hideOptionsClass);

			this._optionsContainer.toggleClass(this.constructor.hideOptionsClass);
		};

		Filter.prototype._updateSummary = function() {
			var summary = 'All';
			var checked = this._checkboxes().filter(':checked');

			if (checked.length > 0 && checked.length < this._checkboxes().length) {
				summary = this._labelsFor(checked).join(', ');
			}

			this._summaryElement.text(summary);
		};

		Filter.prototype._clearSelection = function() {
			this._checkboxes().each(function() {
				$(this).prop('checked', false);
			});

			this._updateSummary();
		};

		Filter.prototype._checkboxes = function() {
			return this._element.find(':checkbox');
		};

		Filter.prototype._labelsFor = function(inputs) {
			return inputs.map(function() {
				var id = $(this).attr('id');
				return $("label[for='" + id + "']").text();
			}).get();
		};

		Filter.prototype._allOptionsContainers = function() {
			return $(this.constructor.selector + " " + this.constructor.optionsContainerSelector);
		};

		return Filter;
	})();

	$(function() {
		Filter.enhance();
	});
	/* END Search tools */

});
