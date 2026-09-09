$(document).ready(function () {
    const scene2 = document.getElementById("scene2");
    let canExpand = true;
    let expanded = false;
    let aboutMultiplier = 1;
    
    //alert("");

    scene2.addEventListener("click", () => {
        if (canExpand) { 
            scene2.classList.add("expand");
            canExpand = false;
            expanded = true;
            console.log(expanded);
            scene2.classList.remove("shortTransition");
            scene2.classList.remove("miniHover");
        }
    });

    scene2.addEventListener("mouseover", () => {
        if (!expanded) { 
            scene2.classList.add("shortTransition");
            scene2.classList.add("miniHover");
        }
    });

    scene2.addEventListener("mouseleave", () => {
        if (!expanded) { 
            scene2.classList.remove("miniHover");
        }
    });

    $('.focus-link').eq(0).click(()=>{
        //$('.about').css('z-index', "2000");
    });

    $(window).resize(function() {
        aboutMultiplier = $(window).height() * 0.00093370681;
        $('.about').css('bottom', (-300 * aboutMultiplier).toString() + "px");
    });

    $('.about').hover(()=>{
        if(!expanded && canExpand)
        {
            let height = 1000 * aboutMultiplier;
            $('.about').css('height', height +"px");
            let math = (height * -0.72);   
            console.log(math);
            $('.about').css('bottom', math.toString() + "px");
            $('.about').addClass("focused");
        }
        else {
            $('.about').css('height', "500px");
            $('.about').css('bottom', (-300 * aboutMultiplier).toString() + "px");
            if(canExpand) $('.about').removeClass("focused");
        }
    }, ()=> {
        $('.about').css('height', "500px");
        $('.about').css('bottom', "-300px");
        if(canExpand) $('.about').removeClass("focused");
    });

    document.addEventListener('keydown', (e) => {
        if (e.key == "Escape") leaveChat();
    });

    $('#logo').click(() => {
        //console.log("yes, you clicked home");
        leaveChat();
    });

    function leaveChat() {
        scene2.classList.remove("expand");
        setTimeout(function () {
            canExpand = true;
            expanded = false;
        }, 1000);
    }

    document.querySelectorAll(".focus-link").forEach(link => {

        //console.log("focus link clicked");
        link.addEventListener("click", e => {
            const id = link.getAttribute("href");
            const target = document.querySelector(id);
            if (target == null) return;
            const overlay = document.getElementById("overlay");
            
            if(!expanded){
                canExpand = false;
                $('#scene2').css('pointerEvents', 'none');

                overlay.classList.add("active");
                target.classList.add("focused");

                setTimeout(() => {
                    overlay.classList.remove("active");
                }, 600); // adjust time

                setTimeout(() => {
                    target.classList.remove("focused");
                    canExpand = true;
                    $('#scene2').css('pointerEvents', 'auto');
                }, 850); // adjust time
            } else {
                leaveChat()
                setTimeout(() => {
                    canExpand = false;
                    $('#scene2').css('pointerEvents', 'none');

                    overlay.classList.add("active");
                    target.classList.add("focused");

                    setTimeout(() => {
                        overlay.classList.remove("active");
                    }, 600); // adjust time

                    setTimeout(() => {
                        target.classList.remove("focused");
                        canExpand = true;
                        $('#scene2').css('pointerEvents', 'auto');
                    }, 850); // adjust time
                }, 1000);
            }
        });
    });
































});