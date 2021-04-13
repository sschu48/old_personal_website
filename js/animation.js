/*
// Wrap every letter in a span
var textWrapper = document.querySelector('.pilot .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.pilot .letters',
        rotateY: [-90, 0],
        duration: 1500,
        delay: (el, i) => 75 * i
    }) .add({
        targets: '.ml10',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

*/