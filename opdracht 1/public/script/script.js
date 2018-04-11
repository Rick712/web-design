(function(){

    const catImage = document.querySelectorAll('.catImage')

    for(var i = 0; i < catImage.length; i++) {
        catImage[i].style.backgroundImage = 'url("public/images/kat' + (i + 1) + '.jpg")'
    }

    const dogImage = document.querySelectorAll('.dogImage')

    for (var i = 0; i < dogImage.length; i++) {
        dogImage[i].style.backgroundImage = 'url("public/images/hond' + (i + 1) + '.jpg")'
    }

    const featuredImage = document.querySelector('.featuredImage')
    featuredImage.style.backgroundImage = 'url("https://i.imgur.com/xkKw5r8.jpg")'

    const allImages = document.querySelectorAll('a'),
        highlighted = document.querySelector('.highlighted')
    window.addEventListener('hashchange', function() {
        highlighted.classList.add('highlightedBlock')
        allImages.forEach( function (image) {
            const urlHash = image.href.split("html")[1]
            if (window.location.hash == urlHash) {
                const highlightedImage = document.querySelector('.highlightedImage')
                highlightedImage.setAttribute('src', 'public/images/' + (urlHash.split('#')[1]) + '.jpg')
                
                const text = document.querySelector('.highlightedText'),
                    header = document.querySelector('.highlightedTitle')

                if (window.location.hash == '#hond9') {
                    console.log(window.location.hash)
                    header.innerHTML = 'Frans Bauer'
                    text.innerHTML = "Wait, this isn't a cute animal. Can someone tell Frans to get of my website?"
                } 
                else {
                    header.innerHTML = 'This is a cute animal'
                    text.innerHTML = "This is an image of a cute animal. It is really cute."
                }
            }
        })
    })

    const begoneHighlighted = document.querySelector('.begoneHighlighted')
    begoneHighlighted.addEventListener('click', function() {
        highlighted.classList.remove('highlightedBlock')
    })
    
})()