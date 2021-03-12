const translate = document.querySelectorAll(".translate");
const navbars = document.querySelector(".navbar");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");

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
    }
    
});