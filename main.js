window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  // Verificar se a seção passou da linnha
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // Verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionHeight + sectionTop
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  // Limites da seção
  const sectionBondaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBondaries) {
    menuElement.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
  #home img,
  #home .stats, 
  #serives,
  #services header,
  #services .card,
  #about,
  #about header,
  #about content`)

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showTopButtonOnScroll() {
  if (scrollY > 500) {
    BackToTop.classList.add('show')
  } else {
    BackToTop.classList.remove('show')
  }
}

function sayMyName(name) {
  console.log(name)
}

sayMyName('myke')
