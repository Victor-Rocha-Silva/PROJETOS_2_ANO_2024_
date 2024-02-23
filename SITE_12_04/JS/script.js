window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.add("fixed");
        document.getElementById("logo").innerText = "New Logo";
    } else {
        document.getElementById("header").classList.remove("fixed");
        document.getElementById("logo").innerText = "Logo";
    }
}
