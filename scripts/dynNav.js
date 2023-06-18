function scaleTopNav() {
    var topnavLinks = document.getElementById("topnav").children;

    setInterval(() => {
        var sideNavWidth = document.body.scrollWidth * 12/100;
        Array.from(topnavLinks).forEach(link => {
            link.style.width = ((document.body.scrollWidth - sideNavWidth) * 20/100 - 50) + "px";
        });
    }, 100)
}