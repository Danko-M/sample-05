 /***********/
            
       /*     
            
        $('body').off('submit', '#contact-form').on('submit', '#contact-form', function()
        {

            if(window.validator_contact_form())
            {
                
                
            }
             var titleValid = $('#fullname').valid();
             
             alert(titleValid);
			//var typeValid = $('#law_type').valid(); 
			//var postcodeValid = $('#postcode_edit').valid();
            return false;
        });
        
        */
      
        
        
        
 $().ready(function() {
     
 (function($)
        {
            $.extend(true, $.validator,
                    {
                        prototype:
                                {
                                    showLabelNew: function(element, message)
                                    {
                                        var label = this.errorsFor(element);                                     
                                        if (label.length)
                                        {
                                            if ($(element).is(':file'))
                                            {
                                                element = '#photo-area';
                                            }
                                            else if ($(element).is(':radio'))
                                            {
                                                element = '#genders [name="gender"]';
                                            }

                                            if ($(element).data('qtip'))
                                            {
                                                $(element).qtip('option', 'content.text', message);
                                            }
                                            else
                                            {
                                                if (element == '#photo-area')
                                                {
                                                    $(element).qtip({content: {text: message}, style: {classes: 'qtip-red qtip-rounded qtip-shadow tooltip'}, position: {my: 'top center', at: 'bottom center'}}).addClass('invalid');
                                                }
                                                else if (element == '#genders [name="gender"]')
                                                {
                                                    $(element).qtip({content: {text: message}, style: {classes: 'qtip-red qtip-rounded qtip-shadow tooltip'}, position: {my: 'top left', at: 'bottom left'}}).addClass('invalid');
                                                }
                                                else
                                                {
                                                    $(element).qtip({content: {text: message}, style: {classes: 'qtip-red qtip-rounded qtip-shadow tooltip'}, position: {my: 'bottom center', at: 'top center'}}).addClass('invalid');
                                                }
                                            }
                                        }
                                        else
                                        {
                                            // create label
                                            label = $('<' + this.settings.errorElement + '>')
                                                    .attr('for', this.idOrName(element))
                                                    .addClass(this.settings.errorClass)
                                                    .html(message || '');
                                            if (this.settings.wrapper)
                                            {
                                                // make sure the element is visible, even in IE
                                                // actually showing the wrapped element is handled elsewhere
                                                label = label.hide().show().wrap('<' + this.settings.wrapper + '/>').parent();
                                            }
                                            if (!this.labelContainer.append(label).length)
                                            {
                                                if (this.settings.errorPlacement)
                                                {
                                                    this.settings.errorPlacement(label, $(element));
                                                }
                                                else
                                                {
                                                    label.insertAfter(element);
                                                }
                                            }
                                        }
                                        if (!message && this.settings.success)
                                        {
                                            label.text('');
                                            if (typeof this.settings.success === 'string')
                                            {
                                                
                                                label.addClass(this.settings.success);
                                            }
                                            else
                                            {

                                                this.settings.success(label, element);
                                            }
                                        }
                                        this.toShow = this.toShow.add(label);
                                    }
                                }
                    });
        }(jQuery));
		// validate the comment form when it is submitted
		//$("#contact-form").validate();
                
window.validator_initial = $("#contact-form").validate({
                    validClass: 'checked',
                    errorClass: 'warning',
                    errorElement: 'label',
                    ignore: '.ignore',
					onkeyup: function(element) { $(element).valid();},
			rules:
                            {
                                fullname:
                                        {
                                            required: true,
                                            minlength: 2
                                        },
                                email_ad:
                                        {
                                            
                                            required: true,
                                            email: true
                                            
                                        },
                                phone:
                                        {
                                            
                                            required: true,
                                            minlength: 10,
                                            number: true
                                            
                                        },
                                message_clt:
                                        {
                                            
                                            required: true,
                                            minlength: 3
                                            
                                        }
                            },
                    messages:
                            {
                                fullname:
                                        {
                                            required: 'Enter your Full name',
                                            minlength: jQuery.format('Enter at least {0} characters')
                                        },
                                email_ad:
                                        {
                                            required: 'Enter your email address',
                                            minlength: 'Please enter a valid email address',
                                            remote: jQuery.format('{0} is already in use')
                                        },
                                phone:
                                        {
                                            required: 'Enter your Phone number',
                                            minlength: jQuery.format('Enter a ten digit Phone number'),
                                            number:jQuery.format('Enter a numeric Phone number')
                                        },
                                message_clt:
                                        {
                                            required: 'Enter the message',
                                            minlength: jQuery.format('Enter atleast 3 characters long message')
                                        }
                            },
                    errorPlacement: function(error, element)
                    {
                        $('#' + element.attr('id') + '_check').html('&#33;').addClass('warning');
                    },
                    success: function(label, element)
                    {
                        label.html('&#10003;').removeClass('warning').addClass('checked');
                        $('#' + $(element).attr('id')).qtip('destroy').removeClass('invalid');
                       ;
                    },
                    highlight: function(element, errorClass, validClass)
                    {
                        
                        var checkElementId = '#' + $(element).attr('id') + '_check';
                        
                        $(checkElementId).html('&#33;').removeClass(validClass).addClass(errorClass);
                    },
                    unhighlight: function(element, errorClass, validClass)
                    {
                        
                        var checkElementId = '#' + $(element).attr('id') + '_check';
                        
                        if ($(element).data('qtip'))
                        {
                            $(element).qtip('destroy');
                        }
                        $(checkElementId).html('&#10003;').removeClass(errorClass).addClass(validClass);
                    },
                    showErrors: function(errorMap, errorList)
                    { 
                        var i, elements;
                        for (i = 0; this.errorList[i]; i++)
                        {
                            var error = this.errorList[i];
                            if (this.settings.highlight)
                            {
                                this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                            }
                            this.showLabelNew(error.element, error.message);
                        }
                        if (this.errorList.length)
                        {
                            this.toShow = this.toShow.add(this.containers);
                        }
                        if (this.settings.success)
                        {
                            for (i = 0; this.successList[i]; i++)
                            {
                                this.showLabelNew(this.successList[i]);
                            }
                        }
                        if (this.settings.unhighlight)
                        {
                            for (i = 0, elements = this.validElements(); elements[i]; i++)
                            {
                                this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                            }
                        }
                        this.toHide = this.toHide.not(this.toShow);
                        this.hideErrors();
                        this.addWrapper(this.toShow).show();
                    }
                   
                });
        
        $('body').off('submit', '#contact-form').on('submit', '#contact-form', function()
        {
          
           
            if(grecaptcha.getResponse(widgetId1) == "")	{
                    $('#re-cap1 iframe').css('border', '1px solid #fc3a3b'); 
                    $('#re-cap1 iframe').qtip({content: {text: "Please verify that your are not a robot"},position: { my: 'top center',   at: 'bottom center' }, style: {classes: 'qtip-red qtip-rounded qtip-shadow '}});
                    return false;
            } else	{
                    $('#re-cap1 iframe').qtip('destroy');
                    $('#re-cap1 iframe').css('border', 'none'); 
            }

            if (!get_recaptcha_response())	{ 
					alert('ddf');
					grecaptcha.reset(widgetId1);
					$('#re-cap1 iframe').css('border', '1px solid #fc3a3b'); 
					$('#re-cap1 iframe').qtip({content: {text: "Please verify that your are not a robot"},position: { my: 'top center',   at: 'bottom center' }, style: {classes: 'qtip-red qtip-rounded qtip-shadow '}});
					return false;
            } 

            if(window.validator_initial.form())
            {
               recaptcha_response = true;
		data = $("#contact-form").serialize(); 
               
		$.ajax({
			url: '/contact-message/',
			type: 'POST',
			data: data,
			async : false,
			success: function(result) {

                                if(result == 'fail'){
                                    
                                  $('#windowCont12').html('<h3>Your message was not send please try again</h3>'); 
                                    
                                }
                                 $("#contact-form").closest('form').find("input[type=text], textarea").val(""); 
                                 $("#email_ad").val("");
                                 
                                 $('.mobile-popup').hide();
                                 
                                $("#btnForm").fancybox().trigger('click');
                                
                              
			setTimeout(function () {
                                    location.reload();
                                 }, 2500);
                                
				
			}
		});
			
		 
            }
             var titleValid = $('#fullname').valid();
             
			//var typeValid = $('#law_type').valid(); 
			//var postcodeValid = $('#postcode_edit').valid();
            return false;
        });
        
        
         $( ".call-button" ).click(function() {
             
              lawyer_id = $("#lawyer_id_1").val();
              
              client_id = $("#client_id_1").val();
              data = "lawyer_id="+lawyer_id+"&client_id="+client_id;
              $.ajax({
			url: '/call-log/',
			type: 'POST',
			data: data,
			async : false,
			success: function(result) {
				
			}
		});
                
              });

      function get_recaptcha_response(){
                
		recaptcha_response = true;
		data = $("#contact-form").serialize();
             
		$.ajax({
			url: '/recaptcha-response-contact/',
			type: 'POST',
			data: data,
			async : false,
			success: function(result) {
				if (result == '1')	{
					recaptcha_response = true;
				} else {
					recaptcha_response = false;
 }
 
			}
		});
 
		return recaptcha_response;	
    }   
    
    $("#find-a-lawyer-button").click(function(){window.location.href="/finde.html"}),$("#find-information-button").click(function(){window.location.href="/finde-info.html"}),$(".contact-button").click(function(){$(".shadow-gen").toggle(),$(".sidebar-section.mobile-popup").toggle()}),$(".side-bar-profile .sidebar-section.mobile-popup .closer").click(function(){$(".shadow-gen").toggle(),$(".sidebar-section.mobile-popup").toggle()}),$(".mobile-menu").click(function(){$(".topics-top_view").toggle("slow");}),$(".selector-item").click(function(){$(".taber-selector").toggleClass("hide-skills"),$(".selector-item").toggleClass("active"),$(".save-lawyer-review, .reviews-toggle").toggle();$('#review_menu_org').toggleClass('current');$('.indicator-area').html('<div id="mod_indicator" class="review">&nbsp;</div>');$('#mod_indicator').toggleClass('indicator');}),$(".mobile-menu-search").click(function(){$(".slide-toogle").slideToggle("slow")}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.Slideout=e()}}(function(){return function e(t,n,i){function o(r,a){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[r]={exports:{}};t[r][0].call(c.exports,function(e){var n=t[r][1][e];return o(n?n:e)},c,c.exports,e,t,n,i)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(e,t){"use strict";function n(e){e=e||{},this._startOffsetX=0,this._currentOffsetX=0,this._opening=!1,this._moved=!1,this._opened=!1,this._preventOpen=!1,this.panel=e.panel,this.menu=e.menu,this.panel.className+=" slideout-panel",this.menu.className+=" slideout-menu",this._fx=e.fx||"ease",this._duration=parseInt(e.duration,10)||300,this._tolerance=parseInt(e.tolerance,10)||70,this._padding=parseInt(e.padding,10)||256,this._initTouchEvents()}var i,o=e("decouple"),s=!1,r=window.document,a=r.documentElement,l=window.navigator.msPointerEnabled,u={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"},c=function(){var e=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,t=r.getElementsByTagName("script")[0].style;for(var n in t)if(e.test(n))return"-"+n.match(e)[0].toLowerCase()+"-";return"WebkitOpacity"in t?"-webkit-":"KhtmlOpacity"in t?"-khtml-":""}();n.prototype.open=function(){var e=this;return-1===a.className.search("slideout-open")&&(a.className+=" slideout-open"),this._setTransition(),this._translateXTo(this._padding),this._opened=!0,setTimeout(function(){e.panel.style.transition=e.panel.style["-webkit-transition"]=""},this._duration+50),this},n.prototype.close=function(){var e=this;return this.isOpen()||this._opening?(this._setTransition(),this._translateXTo(0),this._opened=!1,setTimeout(function(){a.className=a.className.replace(/ slideout-open/,""),e.panel.style.transition=e.panel.style["-webkit-transition"]=""},this._duration+50),this):this},n.prototype.toggle=function(){return this.isOpen()?this.close():this.open()},n.prototype.isOpen=function(){return this._opened},n.prototype._translateXTo=function(e){this._currentOffsetX=e,this.panel.style[c+"transform"]=this.panel.style.transform="translate3d("+e+"px, 0, 0)"},n.prototype._setTransition=function(){this.panel.style[c+"transition"]=this.panel.style.transition=c+"transform "+this._duration+"ms "+this._fx},n.prototype._initTouchEvents=function(){var e=this;o(r,"scroll",function(){e._moved||(clearTimeout(i),s=!0,i=setTimeout(function(){s=!1},250))}),r.addEventListener(u.move,function(t){e._moved&&t.preventDefault()}),this.panel.addEventListener(u.start,function(t){e._moved=!1,e._opening=!1,e._startOffsetX=t.touches[0].pageX,e._preventOpen=!e.isOpen()&&0!==e.menu.clientWidth}),this.panel.addEventListener("touchcancel",function(){e._moved=!1,e._opening=!1}),this.panel.addEventListener(u.end,function(){e._moved&&(e._opening&&Math.abs(e._currentOffsetX)>e._tolerance?e.open():e.close()),e._moved=!1}),this.panel.addEventListener(u.move,function(t){if(!s&&!e._preventOpen){var n=t.touches[0].clientX-e._startOffsetX,i=e._currentOffsetX=n;if(!(Math.abs(i)>e._padding)&&Math.abs(n)>20){if(e._opening=!0,e._opened&&n>0||!e._opened&&0>n)return;e._moved||-1!==a.className.search("slideout-open")||(a.className+=" slideout-open"),0>=n&&(i=n+e._padding,e._opening=!1),e.panel.style[c+"transform"]=e.panel.style.transform="translate3d("+i+"px, 0, 0)",e._moved=!0}}})},t.exports=n},{decouple:2}],2:[function(e,t){"use strict";function n(e,t,n){function o(e){a=e,s()}function s(){l||(i(r),l=!0)}function r(){n.call(e,a),l=!1}var a,l=!1;e.addEventListener(t,o,!1)}var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();t.exports=n},{}]},{},[1])(1)});  
    
    $('.fancybox').fancybox();
    
    

 }
 
 
 

 
            );
       
            
  function share(link,title){
        $('#share_title').html(title);
        //$("#share_button").attr("data-title", 'lawcorner.au.com'+link);
       addthis.update('share', 'url',link); 
addthis.url = link;                
addthis.toolbox(".addthis_toolbox");
        $("#share_button_link").fancybox().trigger('click');
         
        
    } 
    function share_rev(link,title,more){
        $('#share_title').html(title);
        //$("#share_button").attr("data-title", more);
       addthis.update('share', 'url',link); 
       addthis.update('share', 'description',more);
       addthis.description = more;
addthis.url = link;                
addthis.toolbox(".addthis_toolbox");
        $("#share_button_link").fancybox().trigger('click');
         
        
    } 
        
            
            
            