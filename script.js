const data = [
  [{ name: 'affiche processus', format: '1/2' }],
  [{ name: 'divingWoman', format: '1/2' }],
  [{ name: 'isolated posters', format: '1/2' }],
  [{ name: 'couverture mémoire', format: '1/2' }],
  [{ name: 'bonhomme geometrique', format: '1/2' }],
  [{ name: 'PFCP', format: '1/2' }],
  [{ name: 'la danse des oiseaux', format: '1/2' }],
  [{ name: 'maulevrier', format: '1/2' }],
  [{ name: 'visage noir et blanc', format: '1/2' }],
  [{ name: 'olio e burro', format: '1/2' }],
  [{ name: 'panonica', format: '1/2' }],
  [{ name: 'fanzine', format: '1/2' }],
  [{ name: 'savon 1', format: '1/2' }],
  [{ name: 'oeil', format: '1/2' }],
  [{ name: 'vélo sport', format: '2/1' }],
  [{ name: 'workshop typo', format: '2/1' }],
  [{ name: 'bal des pompiers', format: '2/1' }],
]

const links = Array.from(document.querySelectorAll('.link'))
const header = document.querySelector('header')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    toggleElement('main', 'header')
    const headerLinks = ['PROJETS', 'À PROPOS', 'CONTACT']
    setTimeout(() => {
      header.firstElementChild.remove()
      headerLinks.forEach((headerLink) => {
        const h2 = document.querySelector('header').appendChild(document.createElement('h2'))
        h2.innerText = headerLink
        if (
          headerLink == e.target.innerText ||
          (header.children[2] && e.target.innerText == 'Contactez-moi!')
        ) {
          h2.classList.add('selectedLink')
        }
        h2.addEventListener('click', () => {
          if (!h2.classList.contains('selectedLink')) {
            setLinkColor(h2)
            populateMain()
          } else if (h2.innerText === 'À PROPOS') {
          }
        })
      })
      populateMain()
      toggleElement('main', 'header')
    }, 500)
  })
})

function toggleElement(...elements) {
  elements.forEach((element) => {
    document.querySelector(element).classList.toggle('hidden')
  })
}

function clearMainContent(main) {
  while (main.firstElementChild) {
    main.firstElementChild.remove()
  }
}

function setLinkColor(h2) {
  Array.from(header.children).forEach((link) => {
    link.classList.remove('selectedLink')
  })
  h2.classList.add('selectedLink')
}

function populateMain() {
  const main = document.querySelector('main')
  clearMainContent(main)
  if (document.querySelector('.selectedLink').innerText == 'PROJETS')
    data.forEach((folder) => {
      const img = document.createElement('img')
      img.src = `./img/gallery/${folder[0].name}.webp`
      main.appendChild(img)
      if (folder[0].format == '2/1') {
        img.classList.add('horizontal')
      }
    })
  else if (document.querySelector('.selectedLink').innerText == 'À PROPOS') {
    const aboutDiv1 = main.appendChild(document.createElement('div'))
    aboutDiv1.classList.add('aboutDiv')
    const aboutDiv1H1 = aboutDiv1.appendChild(document.createElement('h1'))
    aboutDiv1H1.innerText = 'À propos'
    const aboutDiv1P = aboutDiv1.appendChild(document.createElement('p'))
    aboutDiv1P.innerText =
      "Je m'appelle Isaure, je suis étudiante en graphisme. Curieuse et polyvalente, je vous invite à découvrir mon travail. Ma pratique se veut exploratoire et pluri-disciplinaire."
    const aboutDiv2 = main.appendChild(document.createElement('div'))
    aboutDiv2.classList.add('experiencesDiv')
    const aboutDiv2H1 = aboutDiv2.appendChild(document.createElement('h1'))
    aboutDiv2H1.innerText = 'Expériences professionelles'
    const aboutDiv2Ul = aboutDiv2.appendChild(document.createElement('ul'))
    const experiencesLi1 = aboutDiv2Ul.appendChild(document.createElement('li'))
    experiencesLi1.innerText = "Stage à l'atelier graphique KOLK"
    const experiencesLi2 = aboutDiv2Ul.appendChild(document.createElement('li'))
    experiencesLi2.innerText = "Stage dans l'agence web Akagi"
    const experiencesLi3 = aboutDiv2Ul.appendChild(document.createElement('li'))
    experiencesLi3.innerText = 'Stage au sein du pôle signalétique de Nantes Métropole'
    const aboutDiv3 = main.appendChild(document.createElement('div'))
    aboutDiv3.classList.add('formationDiv')
    const aboutDiv3H1 = aboutDiv3.appendChild(document.createElement('h1'))
    aboutDiv3H1.innerText = 'Formation'
    const formation1 = aboutDiv3.appendChild(document.createElement('p'))
    formation1.innerText = 'DNMADe Graphisme - Option identité multi-support'
  } else {
    const contactIMG = main.appendChild(document.createElement('img'))
    contactIMG.classList.add('contactIMG')
    contactIMG.src = './img/gallery/visage noir et blanc.webp'
    const contactDiv = main.appendChild(document.createElement('div'))
    contactDiv.classList.add('contactDiv')
    const contactH2 = contactDiv.appendChild(document.createElement('h2'))
    contactH2.innerText = 'ISAURE BERTHOMÉ'
    const contactMail = contactDiv.appendChild(document.createElement('a'))
    contactMail.href = 'mailto:isaure.ber@gmail.com'
    contactMail.innerText = 'CONTACTEZ-MOI !'
  }
}
