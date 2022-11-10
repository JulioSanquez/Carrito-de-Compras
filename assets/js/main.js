import { activeProduct } from './components/activeProduct.js'
import { cartMenu } from './components/cartMenu.js'
import { darkTheme } from './components/darkTheme.js'
import { headerScroll } from './components/headerScroll.js'
import { load } from './components/load.js'
import { navMenu } from './components/navMenu.js'
import { sectionActive } from './components/sectionActive.js'
import { cart } from './components/cart.js'
import { carrusel } from './components/carrusel.js'

const db = [
  {
    id: 1,
    name: 'Camisa',
    price: 456,
    image: 'assets/img/featured1.png',
    category: 'hoodies',
    quantity: 5
  },
  {
    id: 2,
    name: 'Playera',
    price: 627,
    image: 'assets/img/featured2.png',
    category: 'shirts',
    quantity: 7
  },
  {
    id: 3,
    name: 'Sudadera',
    price: 586,
    image: 'assets/img/featured3.png',
    category: 'swetshirts',
    quantity: 4
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
