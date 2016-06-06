## Synopsis

imageloader.js is a 'small' pure JavaScript library that loads images when they are in your viewport. Currently there are no extra options that can be added to the loading.

## Code Example

```javascript
function isVisible(image){
    viewport = image.getBoundingClientRect();
    return (viewport.top >= 0 && viewport.left >=0 && viewport.right < window.innerWidth && viewport.bottom < window.innerHeight);
}
```

```javascript
$(window).scroll(function(){
    timer = setTimeout(function(){
        loadImage(element);
    },  100);
})
```

## Motivation

I made this small library to practice my JavaScript skills. It's also one of the school assignments I had to work out.

## Installation

Add jQuery and the imageloader.js file to your HTML page
```html
<head>
	<script type="text/javascript" src="imageloader.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
</head>
```

Make a new div and name it the class "loader". Put your loading gif in the src and the actual image in "realImg"
```html
<body>
    <img class="loader" src="load.gif" realImg="http://gallery.photo.net/photo/5306600-md.jpg" style="object-fit:none;"/> 
</body>
```

Call the imageloader just below your closing body tag.
```javascript
<script>
    var imageloader = new Imageloader();
    imageloader.init();
</script>
```

## Tests

[Demo](http://www.conniesmits.nl/imageloader/)

## Contributors

padschild

## License

N/A