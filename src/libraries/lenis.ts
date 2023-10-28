import Lenis from '@studio-freight/lenis'

// https://github.com/studio-freight/lenis
const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
