export function headerScroll() {
  const header = document.getElementById('header')
  const scrollUp = document.getElementById('scroll-up')

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
        scrollUp.classList.add('show-scroll')
      } else {
        header.classList.remove('scroll-header')
        scrollUp.classList.remove('show-scroll')
      }
    })
  }
}
