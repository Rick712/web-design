(function() {
    const home = document.querySelector('.home')

    if (home) {
        
        const anchor = document.querySelectorAll('a[href^="#"]')
        anchor.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const studentAlert = document.querySelector('.alert'),
            alertGone = document.querySelector('.alertGone')

        const alertStudent = function () {
            studentAlert.style.right = '0'

            alertGone.addEventListener('click', function () {
                studentAlert.style.right = 'calc(-30vw - 8rem)'
            })
        }

        setTimeout(alertStudent, 1500)
    }
})()