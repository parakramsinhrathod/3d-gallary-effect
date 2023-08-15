
const gallary  = document.querySelector('section ul')

gsap.set('img', {scale: 0})

gsap.to(gallary, { 
    scrollTrigger: { 
        trigger: gallary, 
        scrub: true, 
        start: 'top bottom-=200px',
        end: 'bottom middle', 
        markers: false, 
        toggleActions: 'play none none reverse'
    }, 
    rotationX : '0deg'
})

gsap.to('img', { 
    scrollTrigger: { 
        trigger: gallary, 
        scrub: true, 
        start: 'top bottom-=200px',
        end: 'bottom bottom-=400px', 
        markers: false, 
        toggleActions: 'play none none reverse'
    }, 
    scale: 1, 
    stagger: .1
})








// smooth scroll boilerplate

const lenis = new Lenis()

lenis.on('scroll', (e) => { 
    console.log(e)
})

function raf(time) { 
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)