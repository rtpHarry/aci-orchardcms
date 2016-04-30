// page init
jQuery(function () {
    initOpenClose();
    initAccordion();
    initImagePopup();
    jQuery('input, textarea').placeholder();
});

// open-close init
function initOpenClose() {
  jQuery('.menu').openClose({
    activeClass: 'active',
    opener: '.opener',
    slider: '.slide',
    animSpeed: 400,
    effect: 'slide'
  });
  jQuery('.search-block').openClose({
    activeClass: 'active',
    opener: '.opener',
    slider: '.slide',
    animSpeed: 400,
    effect: 'slide'
  });
}

// accordion menu init
function initAccordion() {
  jQuery('ul.accordion').slideAccordion({
    opener: 'a.opener',
    slider: 'div.slide',
    animSpeed: 300
  });
}

// imagePopup init
function initImagePopup() {
  var image = jQuery('img.imagePopup');
  // add click event to open image in a new window
  image.click(function () {
    window.open($(this).attr("src"), "_blank");
  });
  // add italics text below image to show if they click they can open it
  image.after('<br /><em>The image has been scaled down for this page.<br />Click the image view actual size in a new window.</em>');
}

/*
 * jQuery Open/Close plugin
 */
;(function($) {
  function OpenClose(options) {
    this.options = $.extend({
      addClassBeforeAnimation: true,
      activeClass:'active',
      opener:'.opener',
      slider:'.slide',
      animSpeed: 400,
      effect:'fade',
      event:'click'
    }, options);
    this.init();
  }
  OpenClose.prototype = {
    init: function() {
      if(this.options.holder) {
        this.findElements();
        this.attachEvents();
        this.makeCallback('onInit');
      }
    },
    findElements: function() {
      this.holder = $(this.options.holder);
      this.opener = this.holder.find(this.options.opener);
      this.slider = this.holder.find(this.options.slider);
      
      if (!this.holder.hasClass(this.options.activeClass)) {
        this.slider.addClass(slideHiddenClass);
      }
    },
    attachEvents: function() {
      // add handler
      var self = this;
      this.eventHandler = function(e) {
        e.preventDefault();
        if (self.slider.hasClass(slideHiddenClass)) {
          self.showSlide();
        } else {
          self.hideSlide();
        }
      };
      self.opener.bind(self.options.event, this.eventHandler);

      // hove mode handler
      if(self.options.event === 'over') {
        self.opener.bind('mouseenter', function() {
          self.holder.removeClass(self.options.activeClass);
          self.opener.trigger(self.options.event);
        });
        self.holder.bind('mouseleave', function() {
          self.holder.addClass(self.options.activeClass);
          self.opener.trigger(self.options.event);
        });
      }
    },
    showSlide: function() {
      var self = this;
      if (self.options.addClassBeforeAnimation) {
        self.holder.addClass(self.options.activeClass);
      }
      self.slider.removeClass(slideHiddenClass);

      self.makeCallback('animStart', true);
      toggleEffects[self.options.effect].show({
        box: self.slider,
        speed: self.options.animSpeed,
        complete: function() {
          if (!self.options.addClassBeforeAnimation) {
            self.holder.addClass(self.options.activeClass);
          }
          self.makeCallback('animEnd', true);
        }
      });
    },
    hideSlide: function() {
      var self = this;
      if (self.options.addClassBeforeAnimation) {
        self.holder.removeClass(self.options.activeClass);
      }
      
      self.makeCallback('animStart', false);
      toggleEffects[self.options.effect].hide({
        box: self.slider,
        speed: self.options.animSpeed,
        complete: function() {
          if (!self.options.addClassBeforeAnimation) {
            self.holder.removeClass(self.options.activeClass);
          }
          self.slider.addClass(slideHiddenClass);
          self.makeCallback('animEnd', false);
        }
      });
    },
    destroy: function() {
      this.slider.removeClass(slideHiddenClass);
      this.opener.unbind(this.options.event, this.eventHandler);
      this.holder.removeClass(this.options.activeClass).removeData('OpenClose');
    },
    makeCallback: function(name) {
      if(typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    }
  };
  
  // add stylesheet for slide on DOMReady
  var slideHiddenClass = 'js-slide-hidden';
  $(function() {
    var tabStyleSheet = $('<style type="text/css">')[0];
    var tabStyleRule = '.' + slideHiddenClass;
    tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
    if (tabStyleSheet.styleSheet) {
      tabStyleSheet.styleSheet.cssText = tabStyleRule;
    } else {
      tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
    }
    $('head').append(tabStyleSheet);
  });
  
  // animation effects
  var toggleEffects = {
    slide: {
      show: function(o) {
        o.box.stop(true).hide().slideDown(o.speed, o.complete);
      },
      hide: function(o) {
        o.box.stop(true).slideUp(o.speed, o.complete);
      }
    },
    fade: {
      show: function(o) {
        o.box.stop(true).hide().fadeIn(o.speed, o.complete);
      },
      hide: function(o) {
        o.box.stop(true).fadeOut(o.speed, o.complete);
      }
    },
    none: {
      show: function(o) {
        o.box.hide().show(0, o.complete);
      },
      hide: function(o) {
        o.box.hide(0, o.complete);
      }
    }
  };
  
  // jQuery plugin interface
  $.fn.openClose = function(opt) {
    return this.each(function() {
      jQuery(this).data('OpenClose', new OpenClose($.extend(opt, {holder: this})));
    });
  };
}(jQuery));

/*
 * jQuery Accordion plugin
 */
;(function($){
  $.fn.slideAccordion = function(opt){
    // default options
    var options = $.extend({
      addClassBeforeAnimation: false,
      activeClass:'active',
      opener:'.opener',
      slider:'.slide',
      animSpeed: 300,
      collapsible:true,
      event:'click'
    },opt);

    return this.each(function(){
      // options
      var accordion = $(this);
      var items = accordion.find(':has('+options.slider+')');

      items.each(function(){
        var item = $(this);
        var opener = item.find(options.opener);
        var slider = item.find(options.slider);
        opener.bind(options.event, function(e){
          if(!slider.is(':animated')) {
            if(item.hasClass(options.activeClass)) {
              if(options.collapsible) {
                slider.slideUp(options.animSpeed, function(){
                  hideSlide(slider);
                  item.removeClass(options.activeClass);
                });
              }
            } else {
              // show active
              var levelItems = item.siblings('.'+options.activeClass);
              var sliderElements = levelItems.find(options.slider);
              item.addClass(options.activeClass);
              showSlide(slider).hide().slideDown(options.animSpeed);
            
              // collapse others
              sliderElements.slideUp(options.animSpeed, function(){
                levelItems.removeClass(options.activeClass);
                hideSlide(sliderElements);
              });
            }
          }
          e.preventDefault();
        });
        if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
      });
    });
  };

  // accordion slide visibility
  var showSlide = function(slide) {
    return slide.css({position:'', top: '', left: '', width: '' });
  };
  var hideSlide = function(slide) {
    return slide.show().css({position:'absolute', top: -9999, left: -9999, width: slide.width() });
  };
}(jQuery));

/*! http://mths.be/placeholder v2.0.6 by @mathias */
;(function(window, document, $) {

  var isInputSupported = 'placeholder' in document.createElement('input'),
      isTextareaSupported = 'placeholder' in document.createElement('textarea'),
      prototype = $.fn,
      valHooks = $.valHooks,
      hooks,
      placeholder;
  if(navigator.userAgent.indexOf('Opera/') != -1) {
    isInputSupported = isTextareaSupported = false;
  }
  if (isInputSupported && isTextareaSupported) {

    placeholder = prototype.placeholder = function() {
      return this;
    };

    placeholder.input = placeholder.textarea = true;

  } else {

    placeholder = prototype.placeholder = function() {
      var $this = this;
      $this
        .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
        .not('.placeholder')
        .bind({
          'focus.placeholder': clearPlaceholder,
          'blur.placeholder': setPlaceholder
        })
        .data('placeholder-enabled', true)
        .trigger('blur.placeholder');
      return $this;
    };

    placeholder.input = isInputSupported;
    placeholder.textarea = isTextareaSupported;

    hooks = {
      'get': function(element) {
        var $element = $(element);
        return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
      },
      'set': function(element, value) {
        var $element = $(element);
        if (!$element.data('placeholder-enabled')) {
          return element.value = value;
        }
        if (value == '') {
          element.value = value;
          // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
          if (element != document.activeElement) {
            // We can’t use `triggerHandler` here because of dummy text/password inputs :(
            setPlaceholder.call(element);
          }
        } else if ($element.hasClass('placeholder')) {
          clearPlaceholder.call(element, true, value) || (element.value = value);
        } else {
          element.value = value;
        }
        // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
        return $element;
      }
    };

    isInputSupported || (valHooks.input = hooks);
    isTextareaSupported || (valHooks.textarea = hooks);

    $(function() {
      // Look for forms
      $(document).delegate('form', 'submit.placeholder', function() {
        // Clear the placeholder values so they don’t get submitted
        var $inputs = $('.placeholder', this).each(clearPlaceholder);
        setTimeout(function() {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    });

    // Clear placeholder values upon page reload
    $(window).bind('beforeunload.placeholder', function() {
      $('.placeholder').each(function() {
        this.value = '';
      });
    });

  }

  function args(elem) {
    // Return an object of element attributes
    var newAttrs = {},
        rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function(i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr.value;
      }
    });
    return newAttrs;
  }

  function clearPlaceholder(event, value) {
    var input = this,
        $input = $(input),
        hadFocus;
    if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
      hadFocus = input == document.activeElement;
      if ($input.data('placeholder-password')) {
        $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
        // If `clearPlaceholder` was called from `$.valHooks.input.set`
        if (event === true) {
          return $input[0].value = value;
        }
        $input.focus();
      } else {
        input.value = '';
        $input.removeClass('placeholder');
      }
      hadFocus && input.select();
    }
  }

  function setPlaceholder() {
    var $replacement,
        input = this,
        $input = $(input),
        $origInput = $input,
        id = this.id;
    if (input.value == '') {
      if (input.type == 'password') {
        if (!$input.data('placeholder-textinput')) {
          try {
            $replacement = $input.clone().attr({ 'type': 'text' });
          } catch(e) {
            $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
          }
          $replacement
            .removeAttr('name')
            .data({
              'placeholder-password': true,
              'placeholder-id': id
            })
            .bind('focus.placeholder', clearPlaceholder);
          $input
            .data({
              'placeholder-textinput': $replacement,
              'placeholder-id': id
            })
            .before($replacement);
        }
        $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
        // Note: `$input[0] != input` now!
      }
      $input.addClass('placeholder');
      $input[0].value = $input.attr('placeholder');
    } else {
      $input.removeClass('placeholder');
    }
  }
}(this, document, jQuery));