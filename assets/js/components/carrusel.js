
// const db = [
//     {
//         id: 1,
//         name: 'Camisa',
//         size: 'Ch',
//         price: 456,
//         image: 'assets/img/featured1.png',
//         imageHover: 'assets/img/featured2.png',
//         category: 'hoodies',
//         quantity: 10,
//         offer: false
//     },
//     {
//         id: 2,
//         name: 'Playera',
//         size: 'Ch',
//         price: 627,
//         image: 'assets/img/featured2.png',
//         imageHover: 'assets/img/featured3.png',
//         category: 'shirts',
//         quantity: 12,
//         offer: true
//     },
//     {
//         id: 3,
//         name: 'Sudadera',
//         size: 'Ch',
//         price: 586,
//         image: 'assets/img/featured3.png',
//         imageHover: 'assets/img/featured1.png',
//         category: 'sweatshirts',
//         quantity: 15,
//         offer: false
//     },
//     {
//         id: 4,
//         name: 'Camisa',
//         size: 'M',
//         price: 556,
//         image: 'assets/img/featured1.png',
//         imageHover: 'assets/img/featured2.png',
//         category: 'hoodies',
//         quantity: 12,
//         offer: false
//     },
//     {
//         id: 5,
//         name: 'Playera',
//         size: 'M',
//         price: 727,
//         image: 'assets/img/featured2.png',
//         imageHover: 'assets/img/featured3.png',
//         category: 'shirts',
//         quantity: 12,
//         offer: false
//     },
//     {
//         id: 6,
//         name: 'Sudadera',
//         size: 'M',
//         price: 686,
//         image: 'assets/img/featured3.png',
//         imageHover: 'assets/img/featured1.png',
//         category: 'sweatshirts',
//         quantity: 20,
//         offer: false
//     },
//     {
//         id: 7,
//         name: 'Camisa',
//         size: 'G',
//         price: 656,
//         image: 'assets/img/featured1.png',
//         imageHover: 'assets/img/featured2.png',
//         category: 'hoodies',
//         quantity: 25,
//         offer: true
//     },
//     {
//         id: 8,
//         name: 'Playera',
//         size: 'G',
//         price: 827,
//         image: 'assets/img/featured2.png',
//         imageHover: 'assets/img/featured3.png',
//         category: 'shirts',
//         quantity: 18,
//         offer: false
//     },
//     {
//         id: 9,
//         name: 'Sudadera',
//         size: 'G',
//         price: 786,
//         image: 'assets/img/featured3.png',
//         imageHover: 'assets/img/featured1.png',
//         category: 'sweatshirts',
//         quantity: 13,
//         offer: true
//     }
// ]

export function carrusel(db = bd, { insertarInfo, numberToCurrency }) {

    let offerItems = db.filter(d => d.offer)

    const sliderCont = document.querySelector('#slider-cont')
    const slider = document.querySelector('#slider')
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')


    function printCarrousel() {
        let html = ''
        for (const offer of offerItems) {
            html += `
                <div class="slider__img" data-price="${offer.price}" data-name="${offer.name}" data-description="${offer.description}">
                <img src="${offer.image}" alt="${offer.name}">
                </div>
            `
        }
        slider.innerHTML = html
    }
    printCarrousel()

    let loop
    const delay = 3000
    function next() {
        let firstImg = document.querySelectorAll('.slider__img')[0]
        const sliderMessage = document.getElementById('slider__message')

        // console.log(sliderMessage)

        insertarInfo(firstImg.dataset, sliderMessage)

        slider.style.marginLeft = '-200%'
        slider.style.transition = 'all 0.3s'
        setTimeout(() => {
            slider.style.transition = 'none'
            slider.insertAdjacentElement('beforeend', firstImg)
            slider.style.marginLeft = '-100%'
        }, 300)
    }

    function prev() {
        const sliderMessage = document.getElementById('slider__message')
        let lastImg = document.querySelectorAll('.slider__img')
        lastImg = lastImg[lastImg.length - 1]

        console.log(sliderMessage)
        console.log(lastImg.dataset)
        insertarInfo(lastImg.dataset, sliderMessage)

        slider.style.marginLeft = '0'
        slider.style.transition = 'all 0.3s'
        setTimeout(() => {
            slider.style.transition = 'none'
            slider.insertAdjacentElement('afterbegin', lastImg)
            slider.style.marginLeft = '-100%'
        }, 300)
    }

    btnRight.addEventListener('click', next)
    btnLeft.addEventListener('click', prev)
    loop = setInterval(next, delay)

    sliderCont.addEventListener('mouseover', e => {
        clearInterval(loop)
    })

    sliderCont.addEventListener('mouseout', e => {
        loop = setInterval(next, delay)
    })

}