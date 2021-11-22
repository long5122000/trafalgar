window.addEventListener(type: "load" , listener:function(){
    const menu = document.querySelector(seclectors:".menu")
    const menuBg = document.querySelector(seclectors:".menu-bg")
    const menuToggle = document.querySelector(seclectors:".menu-toggle")
    menuToggle.addEventListener(type: "click" , litener:handleToggleMenu);
    function handleToggleMenu(e){
        menuBg.classList.add(...tokens:"is-active" )
    }
})