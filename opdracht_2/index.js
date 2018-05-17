document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const studentAlert = document.querySelector('.alert')

const alertStudent = function() {
    console.log('hallo')
    studentAlert.style.right = '0'
}

setTimeout(alertStudent, 1500)