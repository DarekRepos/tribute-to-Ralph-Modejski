// ===== Navigation menu ====
const openButton = document.querySelector('.openbtn');
const closeButton = document.querySelector('.closebtn');
const navigation = document.querySelector('.sidenav');


openButton.addEventListener('click', () => {
    navigation.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
    navigation.classList.remove('is-open');
});


//TODO: semastics and accesibility

// ===== Scroll to Top button with animation ====

const backToTop = document.getElementById("return-to-top");

window.addEventListener("scroll", function (e) {
    if (window.scrollY > 40) {
        backToTop.style.opacity = "1";
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});


backToTop.addEventListener('click', () => {
    scrollToTop(500);
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval);
        }, 15);
}