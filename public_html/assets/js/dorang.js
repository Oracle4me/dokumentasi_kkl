/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle 
$(document).ready(function () {

    $('.search-toggle').click(function () {
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function () {
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function () {
        $(this).removeClass('show');
    });

    $('.spinner').click(function () {
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function () {
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function () {
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});


$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 3;
    let totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

// Function to slide one by one
let carouselInterval = setInterval(function () {
    $('#carouselExampleControls').carousel('next');
}, 10000); // Slide every 3 seconds

document.getElementById("read-more").addEventListener("click", function (e) {
    e.preventDefault();
    // Select all elements with the 'hide' class and show them
    const hiddenItems = document.querySelectorAll(".grid-gallery .hide");
    hiddenItems.forEach(function (item) {
        item.classList.remove("hide");
    });
    // Optionally hide the "Read More" link after showing all items
    this.style.display = "none";
});
