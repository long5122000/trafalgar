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
        menu.classList.remove("is-active");
    })
})