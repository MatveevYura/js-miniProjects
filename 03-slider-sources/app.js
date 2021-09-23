const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const sliderCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSliderIndex = 0

sidebar.style.top = `-${(sliderCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSliderIndex++
    if (activeSliderIndex === sliderCount) {
      activeSliderIndex = 0
    }
  } else if (direction === 'down') {
    activeSliderIndex--
    if (activeSliderIndex < 0) {
      activeSliderIndex = sliderCount - 1
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSliderIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSliderIndex * height}px)`
}