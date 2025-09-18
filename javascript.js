document.getElementById("rock").addEventListener("mouseenter", featuredDisplay);

function featuredDisplay() {
    document.getElementById("rock").style.scale = "1.2"

    setTimeout(() => {
    document.getElementById("rock").style.scale = "1.1"
        
    }, 200);
}

document.getElementById("rock").addEventListener("mouseleave", featuredDisplayOff);


function featuredDisplayOff() {
        document.getElementById("rock").style.scale = "0.9";

    setTimeout(() => {
document.getElementById("rock").style.scale = "1";

    }, 200);

    
}