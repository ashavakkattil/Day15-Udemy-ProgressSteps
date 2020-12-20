const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const numbers = document.querySelectorAll('.number')
const progress = document.querySelector('.progress-bar')

nextBtn.addEventListener('click', () => {
    let activeClass = document.querySelector('.active')
    let nextElement = activeClass.nextElementSibling
    activeClass.classList.remove('active')
    nextElement.classList.add('active')
    updateBtn()
})

prevBtn.addEventListener('click', () => {
    let activeClass = document.querySelector('.active')
    let prevElement = activeClass.previousElementSibling
    activeClass.classList.remove('active')
    prevElement.classList.add('active')
    updateBtn()

})
function updateBtn() {
    progress.style.width = ((document.querySelector('.active').textContent - 1) / 4) * 100 + '%'
    if (document.querySelector('.active').classList.contains('first')) {
        prevBtn.disabled = true
    } else if (document.querySelector('.active').classList.contains('last')) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}