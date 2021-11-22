window.addEventListener("load" , function(){
    const menu = document.querySelector(".menu")
    const menuBg = document.querySelector(".menu-bg")
    const menuToggle = document.querySelector(".menu-toggle")
    const menuClose = document.querySelector(".menu-close")
    menuToggle.addEventListener( "click" , handleToggleMenu);
    function handleToggleMenu(e){
        menuBg.classList.add("is-active" );
        menu.classList.add("is-active");
        menuClose.classList.add("is-active");
    }
    menuClose.addEventListener("click", function(){
        menuBg.classList.remove("is-active");
        menu.classList.remove("is-active");
        this.classList.remove("is-active");
    })
})

$('.review-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots:true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" /></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" /></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });