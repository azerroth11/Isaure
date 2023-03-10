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

const projects = document.querySelector('.projects')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const links = [projects, about, contact]
const main = document.querySelector('main')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    hideElement('main')
    hideElement('header')
    document.querySelector('footer').classList.remove('hidden')
    const header = document.querySelector('header')
    setTimeout(function () {
      header.children[0].remove()
      Array.from(main.children).map((elem) => {
        elem.remove()
      })
      populateHeader(header, e)
    }, 750)
    setTimeout(function () {
      header.classList.remove('hidden')
    }, 750)
  })
})

function hideElement(elem) {
  document.querySelector(elem).classList.add('hidden')
}

function populateHeader(header, e) {
  const headerLinks = []
  const projectsHeader = createHeaderLink('PROJETS', header, headerLinks)
  const aboutHeader = createHeaderLink('À PROPOS', header, headerLinks)
  const contactHeader = createHeaderLink('CONTACT', header, headerLinks)

  headerLinks.forEach((headerLink) => {
    headerLink.addEventListener('click', () => {
      hideElement('main')
      headerLinks.forEach((link) => {
        link.classList.remove('selectedLink')
      })
      headerLink.classList.add('selectedLink')
      selectHeaderLink(headerLink)
    })
  })

  if (e.target.parentNode.classList.contains('projects')) {
    selectHeaderLink(projectsHeader)
    populateMain()
  } else if (e.target.parentNode.classList.contains('about')) {
    selectHeaderLink(aboutHeader)
    removeMainContent()
  } else {
    selectHeaderLink(contactHeader)
    removeMainContent()
  }
}

function removeMainContent() {
  const ul = document.querySelector('main ul')
  if (ul) {
    ul.remove()
  }
}

function createHeaderLink(text, header, headerLinks) {
  const headerLink = document.createElement('h2')
  headerLink.textContent = text
  header.appendChild(headerLink)
  headerLinks.push(headerLink)
  return headerLink
}

function selectHeaderLink(headerLink) {
  const headerLinkText = headerLink.textContent
  if (!headerLink.classList.contains('selectedLink')) {
    switch (headerLinkText) {
      case 'PROJETS':
        headerLink.classList.add('selectedLink')
        populateMain()
        break
      case 'À PROPOS':
        headerLink.classList.add('selectedLink')
        break
      case 'CONTACT':
        headerLink.classList.add('selectedLink')
        break
    }
  }
}

function populateMain() {
  main.innerHTML = ''
  data.forEach((folder) => {
    const img = document.createElement('img')
    img.src = `./img/gallery/${folder[0].name}.webp`
    main.appendChild(img)
    if (folder[0].format == '2/1') {
      img.classList.add('horizontal')
    }
  })
  main.classList.remove('hidden')
}
