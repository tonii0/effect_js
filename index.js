const tl = gsap.timeline();
tl.from('.left-line span', .8,{
    delay:1,
    opacity: 0,
    ease: 'power4.out',
    x: "-100%",
    stagger: {
        amount: .6
    }
});
tl.from('.line p', 1.8,{
    ease: 'power4.out',
    y: 250,
    skewY: 15,
    stagger: {
        amount: .4
    }
});
tl.from('.items_date-line span',.8,{
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .4
    }
});
tl.from('.right-line svg',.2,{
    opacity: 0,
    x: "100%",
    stagger: {
        amount: .4
    }
});

follower = document.querySelectorAll('.cursor');

    posX = 0;
    posY = 0;
    mouseX = 0;
    mouseY = 0;

    TweenMax.to({},0.016,{
        repeat: -2,
        onRepeat: function(){
            posX += (mouseX  - posX) / 10;
            posY += (mouseY  - posY) / 10;

            TweenMax.set(follower, {
                css: {
                    left: posX - 80,
                    top: posY - 80
                }
            });
        }
    });

document.addEventListener("mousemove", 
    function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });