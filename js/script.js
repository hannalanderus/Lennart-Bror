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
 /********* change image in Menu ********/

let imgs = ["images/LB_Snacks_fix.jpg",
            "images/LB_mat_fix.jpg",
            "images/LB_dryck_fix.jpg"];

    function changeMenuFunction() {
        document.getElementById("menuCardimg").src = imgs[1];
        imgs.push(imgs.shift())
    }   

/*********    Change Menu Image      ************/ 
   /* function changeMenuFunction(dir) {
         let img = document.getElementById("menuCardimg");
         let img = document.getElementById("changeImageArrow");
        img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    }
 
    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            changeMenuFunction(-1) //left <- show Prev image
        } else if (e.keyCode == '38') {
            changeMenuFunction() // right -> show next image
        }
    }*/
/****************************************************/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
      