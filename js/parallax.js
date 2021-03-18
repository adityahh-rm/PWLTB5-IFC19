const translate = document.querySelectorAll(".translate");
const navbars = document.querySelector(".navbar");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
    // console.log(header_height);
let section_height = section.offsetHeight;
    // console.log(section_height);

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
        
    if (scroll < 720 ){
        let sectionY = section.getBoundingClientRect();
            // console.log(SectionY.top); //--> for viewport after scrolling
        
        translate.forEach(element => {
            let speed = element.dataset.speed;
                //console.log(speed);
            element.style.transform = `translateY(${scroll * speed}px)`;
        });

        //Opacity Effect (title)
        opacity.forEach(element => {
            element.style.opacity = scroll / (sectionY.top + section_height);
        })

        //Home Page title effect
        big_title.style.opacity = - scroll / (header_height / 2) + 1;
        shadow.style.height = `${scroll * 0.5 + 300}px`;

        //Content page 2 effect
        content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
        image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

        // Bordering page 2
        border.style.width = `${scroll / (sectionY.top + section_height) * 10}%`;
    }
});