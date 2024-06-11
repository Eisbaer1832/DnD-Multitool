const blob = document.getElementById("blob");

document.onmousemove = event => {
    blob.animate ({
        left: event.clientX + window.scrollX + 'px',
        top: event.clientY + window.scrollY + 'px'
    }, {duration: 3000, fill: "forwards"});
}