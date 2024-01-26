gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 3,
    effects: true
  })

  gsap.fromTo('.logo-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.logo-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  })

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

  itemsL.forEach((item) => {
    gsap.fromTo(item, { opacity: 0, x: -250 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
	start: '-1050',
	end: '-100',
        scrub: true
      }
    })
  })

  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

  itemsR.forEach((item) => {
    gsap.fromTo(item, { opacity: 0, x: 250 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
	start: '-1050',
	end: '-100',
        scrub: true
      }
    })
  })
}

let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
  soundButton.classList.toggle('paused')
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
  audio.pause()
}
