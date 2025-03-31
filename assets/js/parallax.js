document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const SHADOW_FACTOR = 2
  const BLUR_STRENGTH = 1
  const OPACITY_DIVIDER = 75

  // Elements
  const container = document.querySelector('#home')
  const subject = document.querySelector('#quentin-bubu-home')

  // Mesures initiales
  let containerWidth = container.offsetWidth
  let containerHeight = container.offsetHeight

  // Gestionnaires d'événements
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { shadowX, shadowY, blur, opacity } = calculateShadowValues(clientX, clientY)

    applyStyles(shadowX, shadowY, blur, opacity)
  }

  const handleMouseLeave = () => {
    resetStyles()
  }

  // Initialisation
  const init = () => {
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
  }

  // Calculs
  const calculateShadowValues = (x, y) => {
    const shadowX = Math.ceil((50 - (x * 100 / containerWidth)) / SHADOW_FACTOR)
    const shadowY = Math.ceil((50 - (y * 100 / containerHeight)) / SHADOW_FACTOR)

    const absX = Math.abs(shadowX)
    const absY = Math.abs(shadowY)
    const blur = Math.ceil(Math.max(absX, absY) * BLUR_STRENGTH)

    const opacity = ((100 - (blur * SHADOW_FACTOR)) / OPACITY_DIVIDER).toFixed(2)

    return { shadowX, shadowY, blur, opacity}
  }

  // Manipulation du DOM
  const applyStyles = (x, y, blur, opacity) => {
    subject.style.textShadow = `${x}px ${y}px ${blur}px rgba(104, 255, 0, ${opacity})`
  }

  const resetStyles = () => {
    subject.style.textShadow = 'none'
  }

  // Démarrage
  init()
})
