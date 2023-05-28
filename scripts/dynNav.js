var topnavLinks = document.getElementById("topnav").children;

function scaleTopNav() {

    setInterval(() => {
        var sideNavWidth = document.body.scrollWidth * 12/100;
        topnavLinks.forEach(link => {
            link.style.width = ((document.body.scrollWidth - sideNavWidth) * 30/100 - 64) + "px";
        });
    }, 100)
}