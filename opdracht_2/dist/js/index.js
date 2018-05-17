document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    console.log('hallo')
    studentAlert.style.right = '0'

    alertGone.addEventListener('click', function() {
        studentAlert.style.right = 'calc(-30vw - 8rem)'
    })
}

setTimeout(alertStudent, 1500)