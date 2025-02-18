// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for the header text
    gsap.from(".fade-in", { 
        duration: 1.5, 
        opacity: 0, 
        y: -50, 
        ease: "power2.out" 
    });

    // Staggered animation for the boxes
    gsap.from(".box", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        stagger: 0.3 
    });

    // Button click animation
    document.querySelector(".btn").addEventListener("click", () => {
        gsap.to(".btn", { 
            scale: 1.2, 
            duration: 0.2, 
            yoyo: true, 
            repeat: 1 
        });
    });
});
