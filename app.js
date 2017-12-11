window.addEventListener('DOMContentLoaded', function(event) {
    window.addEventListener('scroll', function(evt) {
        console.log(window.pageYOffset);
        var menu_bar = document.querySelector('#menu-bar');
        var groups = document.querySelectorAll('[class^="group-"]');
        if (window.pageYOffset > 150) {
            menu_bar.style.position = 'fixed';
            menu_bar.style.width = '100%';
            menu_bar.style.top = '0px';
            menu_bar.style.left = '0px';
            menu_bar.style.marginTop = '0px';
            menu_bar.style.zIndex = '1';
            menu_bar.style.boxShadow = '2px 0px 5px gray';
            groups.forEach(function(element) {
                element.style.borderTop = '0px';
            }, this);
        } else {
            menu_bar.style.position = '';
            groups.forEach(function(element) {
                element.style.borderTop = '';
            }, this);
        }
    });
    // slide image box
    var indexImage = -1;
    var imageBox = document.getElementById('image-box');
    var listImage = imageBox.querySelector('.list-image');

    function calPositionImage(n) {
        indexImage = indexImage + n;
        if (indexImage > 2) {
            indexImage = 0;
        } else {
            if (indexImage < 0) {
                indexImage = 2;
            }
        }
    }

    function slideImage(n) {
        calPositionImage(n);

        listImage.style.transition = 'transform 1s ease';
        listImage.style.transform = 'translateX(' + indexImage * -300 + 'px)';
    }

    function plusIndexImage(n) {
        calPositionImage(n);
        listImage.style.transition = 'transform 0.3s ease';
        listImage.style.transform = 'translateX(' + indexImage * -300 + 'px)';
    }
    var prev = imageBox.querySelector('.prev');
    var next = imageBox.querySelector('.next');
    prev.addEventListener('click', function() {
        plusIndexImage(-1);
    });
    next.addEventListener('click', function() {
        plusIndexImage(1);
    });

    function controlSlide() {
        slideImage(1);
        setTimeout(controlSlide, 6000);
    }

    controlSlide();
    // end slide image
    // turn on/off sound video
    var headline = document.getElementById('headline');
    var video = headline.querySelector('#ban-tin');
    var volume = headline.querySelector('.speaker');
    var close = headline.querySelector('.close');
    var miniHeadline = document.querySelector('#mini-headline');
    miniHeadline.style.display = 'none';
    video.muted = true;
    close.addEventListener('click', function(evt) {
        headline.style.display = 'none';

        video.pause();
        miniHeadline.style.display = '';
    });
    miniHeadline.addEventListener('click', function(evt) {
        headline.style.display = '';
        this.style.display = 'none';
        video.play();
    });
    // video.addEventListener('mouseenter', function(evt) {
    //     video.muted = false;
    //     volume.firstElementChild.textContent = 'volume_up';
    // });
    // video.addEventListener('mouseout', function(evt) {
    //     video.muted = true;
    //     volume.firstElementChild.textContent = 'volume_off';
    // });
    volume.addEventListener('click', function(evt) {
        if (video.muted === true) {
            video.muted = false;
            volume.firstElementChild.textContent = 'volume_up';
        } else {
            video.muted = true;
            volume.firstElementChild.textContent = 'volume_off';

        }
    });
    // end video
});