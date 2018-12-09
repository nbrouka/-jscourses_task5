function VkGallery(options) {
    var element;
    var items;
    var slideIndex = 1;
    var prev;
    var next;

    function get() {
        if(!element) {
            render();
        }
        return element;
    }

    function render() {
        element = document.createElement('div');
        element.className = "vk-gallery";
        element.appendChild(getSlider());
        element.appendChild(getThumbnail());

        prev.onclick = function() {
            slides(-1);
        }

        next.onclick = function() {
            slides(1);
        }
    }

    function slides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function getSlider() {
        var slider = document.createElement('div');
        slider.className = "slider";
        items.forEach(function(item, i, arr) {
            var imgSliders = document.createElement('div');
            imgSliders.className = "img-slides";
            i++;
            if(i === 1) {
                imgSliders.style.display = "block";    
            }
            inner = "<div class='number'>" +i+ " / "+arr.length+"</div>";
            inner += "<img src='"+item.sizes[8].url+"'>";
            imgSliders.innerHTML = inner;
            slider.appendChild(imgSliders);
        });
        prev = document.createElement('a');
        prev.className = "prev";
        prev.innerHTML = "&#10094;";
        slider.appendChild(prev);

        next = document.createElement('a');
        next.className = "next";
        next.innerHTML = "&#10095;";
        slider.appendChild(next);

        return slider;
    }

    function getThumbnail() {
        var thumbnail = document.createElement('div');
        thumbnail.className = "thumbnail";
        var columnCount = 6;
        var count = 1;
        var row = document.createElement('div');
        row.className = "row"; 
        items.forEach(function(item, i, arr) {
            var column = document.createElement('div');
            column.className = "column";
            i++;
            var imgClassName = "item-img cursor";
            var img = document.createElement('img');
            if(i === 1) {
                imgClassName += " active";            } 
            img.className = imgClassName;
            img.id = i;
            img.src = item.sizes[1].url;
            img.addEventListener('click', function(event) {  
                currentSlide(this.id);
            }, false);

            column.appendChild(img);
            row.appendChild(column);     
            count++;
            if(count === columnCount + 1) {
                thumbnail.appendChild(row); 
                count = 1;
                row = document.createElement('div');
                row.className = "row";
            }  
        });
        return thumbnail;
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("img-slides");
        var dots = document.getElementsByClassName("item-img");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }  

    function addItems(params) {
        items = params;
    }

    this.get = get;
    this.addItems = addItems;
}
