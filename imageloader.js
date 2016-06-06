var Imageloader = function () {
    
    /**
     * Declares default setting of selector.
     */
     var defaultSettings = {
        selector: '.loader',
    };
    
    /**
     * Declare variables to be used.
     */
    var images;
    var viewport;
    var timer; 
    
    /**
     * Gets al the objects using the selector element.
     * Gets the realImg src and the current src. 
     * Calls for function to check if the image is visible in the viewport, if yes, changes the img src to the real image src.
     * @param {object} element 
     */
    function loadImage(element){
        images = document.querySelectorAll(element);
            for (var i=0; i<images.length; i++){
                var realImg = images[i].getAttribute("realImg");
                var imgSrc = images[i].getAttribute("src");
                if (isVisible(images[i])){
                    if (realImg !== null){
                        if (realImg !== imgSrc){
                            images[i].src = realImg;
                        }
                    }
                }
            }
    }

    /**
     * Checks if the image is visible, using the viewport.
     * @param {object} image
     * @return {boolean} true or false
     */
    function isVisible(image){
        viewport = image.getBoundingClientRect();
            return (viewport.top >= 0 && viewport.left >=0 && viewport.right < window.innerWidth && viewport.bottom < window.innerHeight);
    }

    /**
     * Element gets its value from the deafultSettings.
     * Scroll event triggers the loading of the real image.
     */
    var init = function() {
        element = defaultSettings.selector;
        $(window).scroll(function(){
            timer = setTimeout(function(){
                loadImage(element);
            },  100);
        })
    };

    /**
     * Returns the functions that should be accessible from the outside.
     * The rest is only accessible from within the object.
     */
    return {
        init: init,
    };
    
};