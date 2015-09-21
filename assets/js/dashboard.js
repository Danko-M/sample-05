/*
Author: Danko Milutinovic
Desctiption: 
  ...
Contact:  dankomilutinovic@gmail.com, 
          https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778 
*/

$(function() {  

  // toggle mobile search menu
  $('.search').on('click',  function() { 
    $('.search-box').slideToggle(200);    
  });
  
  $('.mob-search').on('click' , function() {
    $('.filter-search').slideToggle(200);
  });

  // close mobile search menu on window resize
  $( window ).resize(function() {
    $('.search-box, .filter-search').hide();
  });
  
  // adding white carret for active submenu item
  $('.navbar-left li').on('click',  function() {  
    $('.navbar-left li').removeClass('active');
    $(this).addClass('active');    
  });

  // switch reviews to no revews
  $('.glyphicon-minus').parent().on('click', function(e){
    e.preventDefault();
    $('.no-reviews, .general-info, .review-item').toggle();
  });

  // moving some elements for mobile view
  
  if ($(window).width() < 768) {
     $('.nearby-lawyers').appendTo('.mob-nearby-lawyers-holder');
     $('.q-for-you .blue').prependTo('.sidebar');
  }
  else {
  }

  // chart - used "chartjs" plugin: http://www.chartjs.org/
  var ctx = $("#myChart").get(0).getContext("2d");

  var data = [
    {
        value: 50,
        color:"#f46e3b",
        highlight: "#fa8253",
        label: "Positive"
    },
    {
        value: 45,
        color: "#d2d2d2",
        highlight: "#ddd",
        label: "Neutral"
    },
    {
        value: 5,
        color: "#199cba",
        highlight: "#22afde",
        label: "Critical"
    }
  ];

  var options = {  
    tooltipBorderColor : '#000',
    tooltipFillColor : '#000',
    tooltipFontColor: "#fff",  
    tooltipFontSize: 10,
    tooltipCornerRadius: 4,
    segmentShowStroke : false,
    percentageInnerCutout : 50,
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    animateScale : false,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

  };

  setTimeout(function() {
    var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
  }, 500);

  $('a[href="#reviews"]').on('click',  function() {    
    var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
  });

  // checkboxes and radio buttons - used "iCheck" plugin: http://fronteed.com/iCheck/

  $('input[type=radio]').iCheck({
    radioClass: 'iradio_minimal-orange'
  });
  $('input[type=checkbox]').iCheck({
    checkboxClass: 'icheckbox_minimal-orange'
  });

  // rating - used "bootstrap-star-rating" plugin: https://github.com/kartik-v/bootstrap-star-rating
  var ratOptA = {
    1: '―  Poor',
    2: '―  Fair',
    3: '―  Good',
    4: '―  Very Good',
    5: '―  Excellent'
  };
  
  var ratOptB = {
    1: '-  Poor',
    2: '-  Fair',
    3: '-  Good',
    4: '-  Very Good',
    5: '-  Excellent'
  };

  $(".rated-01").rating({
    size:'xs',
    step: 1,
    showClear: false,
    // readonly: false,
    starCaptions: ratOptB,
    showCaption: false
  });

  $(".rated-02").rating({
    size:'xs',
    step: 1,
    showClear: false,
    clearCaption: '― Choose',
    // readonly: true,
    starCaptions: ratOptA
  });

  $(".rated-03").rating({
    showClear: false,
    size:'xs',
    // readonly: true,
    showCaption: false
  });

  $(".rated-04").rating({
    size:'xs',
    step: 1,
    showClear: false,
    // readonly: true,
    starCaptions: ratOptB,
    showCaption: true
  });  

  // tags - used "tag manager" plugin: https://maxfavilli.com/jquery-tag-manager
  $('.tm-input').tagsManager({
    maxTags: 3,
    tagsContainer: $('.tags-container')
  });
  $('#addtag').on('click', function (e) {
    e.preventDefault();
    var tag = $(".tm-input").val();    
    $(".tm-input").tagsManager('pushTag', tag);
  });



  // upload avatar - used "NiceFileInput" plugin:http://moro.es/projects/jquery-nicefileinput-js/
  $("input[type=file]").nicefileinput({
    label : 'Select'
  });

});