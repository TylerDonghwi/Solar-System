const submitBtn = document.querySelector('#submitBtn')
const description = document.querySelector('.description')
const image = document.querySelector('.planet-image')
const select = document.querySelector('select')

submitBtn.addEventListener('click', () => {
    description.textContent = ''
    if (submitBtn.value.length == 0) {
        alert('mass is required')
    }

    switch (select.selectedIndex) {
        case 0:
            alert('select a planet')
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
    }
})

select.addEventListener('change', () => {
    switch (select.selectedIndex) {
        case 0:
            image.setAttribute('src', "")
        case 1:
            image.setAttribute('src', "images/mercury.png")
        case 2:
            image.setAttribute('src', "images/venus.png")
        case 3:
            image.setAttribute('src', "images/earth.png")
        case 4:
            image.setAttribute('src', "images/mars.png")
        case 5:
            image.setAttribute('src', "images/jupiter.png")
        case 6:
            image.setAttribute('src', "images/saturn.png")
        case 7:
            image.setAttribute('src', "images/uranus.png")
        case 8:
            image.setAttribute('src', "images/neptune.png")
        case 9:
            image.setAttribute('src', "images/pluto.png")
    }
})