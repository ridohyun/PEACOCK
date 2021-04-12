'use strict';

$(document).ready(function() {
  preventDefault();
  marketTab();
  subGnbEnevts();

  mobileCommon();

  // 상품에 마우스 올리면 이미지 변하는 이벤트
  $('ul.product > li > a').on('mouseover', function(){
    $(this).parent().addClass('on');
    $(this).on('mouseleave', function(){
      $(this).parent().removeClass('on');
    })
  });
});

function preventDefault() {
  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });
}

function marketTab() {
  $('#market > a.open-tab').on('click', function() {
    $('#wrapper').addClass('market-on');
  });

  $('#market a.close-tab').on('click', function(){
    $('#wrapper').removeClass('market-on');
  });
}

function subGnbEnevts() {
  // 열기
  $('#gnb > ul > li').on('click', function() {
    var index = $(this).index();
    openSubGnb(index + 1);
  });

  // 카테고리별 상품들이 나옴
  $('#sub-gnb .hover-line > li').on('click', function() {
    $('#sub-gnb .hover-line > li').removeClass('on');
    $(this).addClass('on');
    $('#sub-gnb div.sub-list').addClass('on');
    $('#sub-gnb > div.on > div.details').addClass('open');
  });
  
  $('div.details > a.back').on('click', function() {
    $('#sub-gnb .hover-line > li').removeClass('on');
    $('#sub-gnb div.sub-list').removeClass('on');
    $('#sub-gnb > div.on > div.details').removeClass('open');
  });

  // 닫기
  $('#sub-gnb > div > a.close').on('click', function(){
    $('#wrapper').removeClass('sub-gnb-on');
    $('#sub-gnb > div').removeClass('on');
  });
  
  function openSubGnb(n) {
    $('#wrapper').addClass('sub-gnb-on');
    $('#sub-gnb > div:eq(' + (n - 1) + ')').addClass('on');
  }
}

function mobileCommon() {
  $('a.mobile.toggle').on('click', function(){
    $('#wrapper').addClass('open');
    $('a.mobile.close-tab').on('click', function(){
      $('#wrapper').removeClass('open');
    });
  });
}

