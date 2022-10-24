const menu=document.getElementById('menu_gray');
const link=document.getElementById('link_menu_gray')
const day=document.getElementsByClassName('day');
link.onclick=function() {
    "use strict";
    menu.setAttribute('style','transition: 0.9s;;display:flex;top:99%')
}
link.ondblclick=function() {
    "use strict";
 
  menu.setAttribute('style','display:none;')
}

