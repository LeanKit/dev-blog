( function( $, undefined ) {
	"use strict";

	var $document = $( document );

	$document.ready( function() {
		var $postContent = $( ".post-content" );
		$postContent.fitVids();

		$( ".scroll-down" ).arctic_scroll();

		$( ".menu-button, .nav-cover, .nav-close" ).on( "click", function( e ) {
			e.preventDefault();
			$( "body" ).toggleClass( "nav-opened nav-closed" );
		} );
	} );

	// Arctic Scroll by Paul Adam Davis
	// https://github.com/PaulAdamDavis/Arctic-Scroll
	$.fn.arctic_scroll = function( options ) {
		var defaults = {
			elem: $( this ),
			speed: 500
		};

		var allOptions = $.extend( defaults, options );

		allOptions.elem.click( function( event ) {
			event.preventDefault();
			var $this = $( this );
			var $htmlBody = $( "html, body" );
			var offset = ( $this.attr( "data-offset" ) ) ? $this.attr( "data-offset" ) : false;
			var position = ( $this.attr( "data-position" ) ) ? $this.attr( "data-position" ) : false;
			var toMove;

			if ( offset ) {
				toMove = parseInt( offset );
				$htmlBody.stop( true, false ).animate( { scrollTop: ( $( this.hash ).offset().top + toMove ) }, allOptions.speed );
			} else if ( position ) {
				toMove = parseInt( position );
				$htmlBody.stop( true, false ).animate( { scrollTop: toMove }, allOptions.speed );
			} else {
				$htmlBody.stop( true, false ).animate( { scrollTop: ( $( this.hash ).offset().top ) }, allOptions.speed );
			}
		} );
	};

	$( function() {
		function e( e, r, n ) {
			r || ( r = 250 );
			var i, o;
			return function() {
				var t = n || this,
				a = +new Date,
				u = arguments;
				i && i + r > a ? ( clearTimeout( o ), o = setTimeout( function() {
					i = a, e.apply( t, u )
				}, r ) ) : ( i = a, e.apply( t, u ) )
			}
		}

		function r() {
			var e = $( window ).width();
			e > 1024 && $( "#menu-open" ).prop( "checked" ) === !0 && ( $( "#menu-open" ).change(), $( "#menu-open" ).prop( "checked", !1 ) )
		}

		function n() {
			var e = $( window ).height(),
			r = $( window ).width(),
			n = $( ".hero__leaderboard__messaging" ).height(),
			i = 120;
			if ( r > 768 && $( "body" ).hasClass( "index" ) ) {
				var o = e - n - i - 60,
				t = Math.round10( o / 7, -1 );
				$( ".hero__leaderboard" ).css( "padding-top", 3 * t ).css( "padding-bottom", 4 * t )
			} else $( ".hero__leaderboard" ).css( "padding-top", "" ).css( "padding-bottom", "" )
		}

		function i( e, r, n ) {
			return "undefined" == typeof n || 0 === +n ? Math[e]( r ) : ( r = +r, n = +n, isNaN( r ) || "number" != typeof n || n % 1 !== 0 ? 0 / 0 : ( r = r.toString().split( "e" ), r = Math[e]( +( r[0] + "e" + ( r[1] ? +r[1] - n : -n ) ) ), r = r.toString().split( "e" ), +( r[0] + "e" + ( r[1] ? +r[1] + n : n ) ) ) )
		}
		$( ".site-header" ).clone().removeClass( "site-header" ).addClass( "site-fixed-header" ).appendTo( document.body );
		var o = $( ".site-fixed-header" );
		$( this ).scrollTop() > 300 && ( o.hasClass( "fixed" ) || o.addClass( "fixed" ) ), $( window ).scroll( e( function() {
			$( this ).scrollTop() > 400 ? o.hasClass( "fixed" ) || o.addClass( "fixed" ) : o.removeClass( "fixed" )
		}, 100 ) ), $( ".sliding-panel-fade-screen" ).on( "click touchstart", function( e ) {
			$( ".sliding-panel-content,.sliding-panel-fade-screen" ).toggleClass( "is-visible" ), $( "body" ).toggleClass( "js-mobile-nav-open" ), $( "#menu-open" ).prop( "checked", !1 ), e.preventDefault()
		} ), $( "#menu-open" ).on( "change", function() {
			$( ".sliding-panel-content,.sliding-panel-fade-screen" ).toggleClass( "is-visible" ), $( "body" ).toggleClass( "js-mobile-nav-open" )
		} ), Math.round10 || ( Math.round10 = function( e, r ) {
			return i( "round", e, r )
		} ), $( ".site-header .main-navigation > ul" ).clone().addClass( "js-mobile-navigation" ).appendTo( ".site-header .sliding-panel-content" ), $( window ).resize( e( function() {
			r()
		}, 300 ) ), $( window ).resize( e( function() {
			n()
		}, 400 ) ), window.onload = function() {
			n(), $( "#menu-open" ).prop( "checked", !1 )
		}
	} );
} )( jQuery );
