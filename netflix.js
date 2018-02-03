document.addEventListener('DOMContentLoaded', function() {  
    var button = document.getElementById('controlL');
    button.onclick = function() {
        document.getElementById('module-section').scrollLeft -= 360;
    };
}, false);

document.addEventListener('DOMContentLoaded', function() {  
    var button = document.getElementById('controlR');
    button.onclick = function() {
        document.getElementById('module-section').scrollLeft += 360;
    };
}, false);

// function xPos() {
//     var e = document.getElementById("module-section");
//     var x = e.scrollLeft;
//     console.log(`ScrollLeft X: ${x}px`);
// } 

function scrolled(o) {
    // div visible width + px scrolled from 0 - border pxs = total width 
    if (o.offsetWidth + o.scrollLeft - 4 >= o.scrollWidth) {
        alert("End of Top 10 Fav Movies");
        console.log("end: " + o.offsetWidth, o.scrollLeft, o.scrollWidth);
    } else {
        console.log(o.offsetWidth, o.scrollLeft, o.scrollWidth);
    }
}

// end: 579 3753 4330   4332 - 2
// (+4px when pointer hovered over enlarged photo)
// end: 579 3757 4334   4336 - 2

// e.pageX
// pageXOffset
// scrollWidth
// innerWidth

//  e.preventDefault();
//  e.getBoundingClientRect();
//  el.left + window.scrollX
