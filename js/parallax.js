const translate = document.querySelectorAll(".translate");
const navbars = document.querySelector(".navbar");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");

//Scrolling Pada Navbar
window.onscroll = scrollShowNav;
function scrollShowNav() { 
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        // console.log(scrollShowNav);
        document.getElementsByTagName("nav")[0].style.top = "0";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
}

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset; //695
        // console.log(scroll);
    // Parallax Effect
    
});