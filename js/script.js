function scrollFunction() {
    let partTwo = document.getElementById("partTwo");
    partTwo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
    function scrollFunction2() {
        let happeningWrapper = document.getElementById("happeningWrapper");
        happeningWrapper.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    
        }

    function scrollFunction3() {
        let menuWrapper = document.getElementById("menuWrapper");
        menuWrapper.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    
        }
    
       function scrollFunction4() {
        let headerImageWrapper = document.getElementById("headerImageWrapper");
        headerImageWrapper.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    
        }


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
      