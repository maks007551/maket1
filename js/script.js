const btns = document.querySelectorAll('.navbar__item')

for (let i = 0; i < btns.length; i++) {
    let element = btns[i]
    element.addEventListener('click', function  () {
        btns.forEach(item => {
            item.classList.remove('navbar__item_active')
        }) 
        element.classList.add('navbar__item_active')
    })
}

[1, 2, 3]