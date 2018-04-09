(function(){

    const catImage = document.querySelectorAll('.catImage')

    for(var i = 0; i < catImage.length; i++) {
        catImage[i].style.backgroundImage = 'url("public/images/kat' + (i + 1) + '.jpg")'
    }

    const dogImage = document.querySelectorAll('.dogImage')

    for (var i = 0; i < dogImage.length; i++) {
        dogImage[i].style.backgroundImage = 'url("public/images/hond' + (i + 1) + '.jpg")'
    }
    
})()