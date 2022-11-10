import { activeProduct } from './components/activeProduct.js'
import { cartMenu } from './components/cartMenu.js'
import { darkTheme } from './components/darkTheme.js'
import { headerScroll } from './components/headerScroll.js'
import { load } from './components/load.js'
import { navMenu } from './components/navMenu.js'
import { sectionActive } from './components/sectionActive.js'
import { cart } from './components/cart.js'
import { carrusel } from '. /components/carrusel.js'

const db = [
  {
    id: 1,
    name: 'Camisa',
    size: 'Ch',
    price: 456,
    image: 'assets/img/featured1.png',
    imageHover: 'assets/img/featured2.png',
    category: 'hoodies',
    quantity: 10,
    offer: false
  },
  {
    id: 2,
    name: 'Playera',
    size: 'Ch',
    price: 627,
    image: 'assets/img/featured2.png',
    imageHover: 'assets/img/featured3.png',
    category: 'shirts',
    quantity: 12,
    offer: true
  },
  {
    id: 3,
    name: 'Sudadera',
    size: 'Ch',
    price: 586,
    image: 'assets/img/featured3.png',
    imageHover: 'assets/img/featured1.png',
    category: 'sweatshirts',
    quantity: 15,
    offer: false
  },
  {
    id: 4,
    name: 'Camisa',
    size: 'M',
    price: 556,
    image: 'assets/img/featured1.png',
    imageHover: 'assets/img/featured2.png',
    category: 'hoodies',
    quantity: 12,
    offer: false
  },
  {
    id: 5,
    name: 'Playera',
    size: 'M',
    price: 727,
    image: 'assets/img/featured2.png',
    imageHover: 'assets/img/featured3.png',
    category: 'shirts',
    quantity: 12,
    offer: false
  },
  {
    id: 6,
    name: 'Sudadera',
    size: 'M',
    price: 686,
    image: 'assets/img/featured3.png',
    imageHover: 'assets/img/featured1.png',
    category: 'sweatshirts',
    quantity: 20,
    offer: false
  },
  {
    id: 7,
    name: 'Camisa',
    size: 'G',
    price: 656,
    image: 'assets/img/featured1.png',
    imageHover: 'assets/img/featured2.png',
    category: 'hoodies',
    quantity: 25,
    offer: true
  },
  {
    id: 8,
    name: 'Playera',
    size: 'G',
    price: 827,
    image: 'assets/img/featured2.png',
    imageHover: 'assets/img/featured3.png',
    category: 'shirts',
    quantity: 18,
    offer: false
  },
  {
    id: 9,
    name: 'Sudadera',
    size: 'G',
    price: 786,
    image: 'assets/img/featured3.png',
    imageHover: 'assets/img/featured1.png',
    category: 'sweatshirts',
    quantity: 13,
    offer: true
  }
]

window.addEventListener('load', function () {
  load()
})

document.addEventListener('DOMContentLoaded', function () {
  darkTheme()
  headerScroll()
  navMenu()
  cartMenu()
  sectionActive()
  activeProduct()
  mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  }).filter('all')
  cart(db)
  carrusel(db)

})
