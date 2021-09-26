$(document).ready(function(){
  // Start Carousel
    // $(".img-testimonial").owlCarousel({
    //     items:1,
    //     loop:true,
    // });
    // // End Carousel

    //Start Popup-Youtube
    $('.popup-btn').magnificPopup({type:'iframe'});
    // End Popup-Youtube
  });

  // Start Showroom page Specification Section
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
// End Showroom page Specification Section

// Start Credit page Loan Calculator Section
let creditForm=document.querySelector("#credit-form");
let price=document.querySelector('input[name="price"]');
let rate=document.querySelector('input[name="rate"]');
let month=document.querySelector('input[name="month"]');
let down=document.querySelector('input[name="down-payment"]');
let formControl=document.querySelectorAll('.form-control');

  creditForm.addEventListener("submit", function(e) {

    e.preventDefault();

    let priceValue=parseFloat(price.value);
    let rateValue=parseFloat(rate.value);
    let monthValue=parseFloat(month.value);
    console.log(priceValue);

    let total=priceValue + (rateValue * monthValue * priceValue)/100;
    let downPayment=total - priceValue;

    down.value=downPayment;
  })
// End Credit page Loan Calculator Section



  