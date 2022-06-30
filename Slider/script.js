let offset = 0;
const sliderline = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
    offset =offset + 564;
    if (offset > 1692) {
        offset=0;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset =offset - 564;
    if (offset < 0) {
        offset= 1692;
    }
    sliderline.style.left = -offset + "px";
});