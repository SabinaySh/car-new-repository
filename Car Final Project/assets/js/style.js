$(document).ready(function(){
    $(".img-testimonial").owlCarousel({
        items:1,
        loop:true,
    });

    $('.popup-btn').magnificPopup({type:'iframe'});
  });

  let specification=document.querySelector(".specification-header");
  let specifiactionList=document.querySelector(".specifiaction-list");

  specification.addEventListener("click",function(){
    specifiactionList.classList.toggle("active");
  });

  let feature=document.querySelector(".feature-header");
  let featureList=document.querySelector(".feature-list");

  feature.addEventListener("click",function(){
    featureList.classList.toggle("active");
  });


  