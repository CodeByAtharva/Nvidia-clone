var tl=gsap.timeline()

tl.from("#loader-head",{
    y:"0",
    opacity:0,
    scale:0,
    duration:1,
    ease:"elastic",

})

tl.to("#loader",{
    height:"0%",
    y:"-100%",
    duration:2,
    ease:Expo.easeInOut,
    display:"none"
},'a')

tl.to("#loader-head",{
    display:"none"
},'a')


tl.to("#green",{
    height:"100%",
    ease:Expo.easeInOut,
    display:"none",
    // duration:-1.8,
})
tl.from(".anime1",{
   opacity:0,
   stagger:0.5
})
tl.from(".anime2",{
   opacity:0,
   y:"100%",

   stagger:0.5,
   scrollTrigger:{
    trigger:".anime2",
    opacity:0,
    stagger:0.5,
    start:"top top",
    scrub:1,
    // markers:true
   }
})