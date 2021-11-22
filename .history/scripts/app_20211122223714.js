window.addEventListener("load" , function(){
    const menu = document.querySelector(".menu")
    const menuBg = document.querySelector(".menu-bg")
    const menuToggle = document.querySelector(".menu-toggle")
    menuToggle.addEventListener( "click" , handleToggleMenu);
    function handleToggleMenu(e){
        menuBg.classList.add("is-active" );
    }
})