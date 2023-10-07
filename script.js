var tl = gsap.timeline()
tl.from("#nav img,#nav h3,#nav button",{
    y:-100,
    duration:0.2,
    delay:0.2,
    opacity:0,
    stagger:0.1,
})
tl.from("#main h1",{
    y:100,
    duration:0.2,
    delay:0.2,
    opacity:0,
    stagger:0.2,
})
tl.from("#main>img",{
    x:100,
    duration:0.2,
    delay:0.2,
    opacity:0,
    stagger:0.2,
})
tl.from("h4",{
    scale:0,
    opacity:0,
    delay:0.5,
})
tl.to("h4",{
     y:100,
     repeat:1,
     yoyo:true,

})