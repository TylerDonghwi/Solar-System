const submitBtn = document.querySelector('#submitBtn')
const description = document.querySelector('.description')
const image = document.querySelector('.planet-image')
const select = document.querySelector('select')
const input = document.querySelector('input')

// avoiding magic numbers
const gAtMercury = 3.7
const gAtVenus = 8.9
const gAtEarth = 9.8
const gAtMars = 3.7
const gAtJupiter = 24.8
const gAtSaturn = 10.4
const gAtUranus = 8.9
const gAtNeptune = 11.2
const gAtPluto = 0.62



submitBtn.addEventListener('click', () => {
    description.textContent = ''
    if (input.value.length == 0) {
        alert('mass is required')
    }

    let mass = input.value
    switch (select.selectedIndex) {
        case 0:
            alert('select a planet')
        case 1:
            description.textContent = `Your weight in Mercury is ${(gAtMercury*mass).toFixed(2)}N`
            break
        case 2:
            description.textContent = `Your weight in Venus is ${(gAtVenus*mass).toFixed(2)}N`
            break
        case 3:
            description.textContent = `Your weight in Earth is ${(gAtEarth*mass).toFixed(2)}N`
            break
        case 4:
            description.textContent = `Your weight in Mars is ${(gAtMars*mass).toFixed(2)}N`
            break
        case 5:
            description.textContent = `Your weight in Jupiter is ${(gAtJupiter*mass).toFixed(2)}N`
            break
        case 6:
            description.textContent = `Your weight in Saturn is ${(gAtSaturn*mass).toFixed(2)}N`
            break
        case 7:
            description.textContent = `Your weight in Uranus is ${(gAtUranus*mass).toFixed(2)}N`
            break
        case 8:
            description.textContent = `Your weight in Neptune is ${(gAtNeptune*mass).toFixed(2)}N`
            break
        case 9:
            description.textContent = `Your weight in Pluto is ${(gAtPluto*mass).toFixed(2)}N`
            break
    }
})

select.addEventListener('change', () => {
    switch (select.selectedIndex) {
        case 0:
            image.setAttribute('src', "")
            break
        case 1:
            image.setAttribute('src', "images/mercury.png")
            break
        case 2:
            image.setAttribute('src', "images/venus.png")
            break
        case 3:
            image.setAttribute('src', "images/earth.png")
            break
        case 4:
            image.setAttribute('src', "images/mars.png")
            break
        case 5:
            image.setAttribute('src', "images/jupiter.png")
            break
        case 6:
            image.setAttribute('src', "images/saturn.png")
            break
        case 7:
            image.setAttribute('src', "images/uranus.png")
            break
        case 8:
            image.setAttribute('src', "images/neptune.png")
            break
        case 9:
            image.setAttribute('src', "images/pluto.png")
            break
    }
})