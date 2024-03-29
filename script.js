const galleryData = [
  {
    category: 'Identité visuelle',
    entries: ['logo race cars location', 'race cars 2', 'PCFP', 'PCFP2'],
  },
  {
    category: 'Urbanisme',
    entries: [
      'festival up 5',
      'festival up 3',
      'maquette festival up2',
      'festival up 6',
      'isolated posters',
    ],
  },
  {
    category: 'Pratique plastique',
    entries: [
      'savon 1',
      'savon 2',
      'la danse des oiseaux',
      'la danse des oiseaux 2',
      'affiche processus',
      'sweat blanc fond blanc',
    ],
  },
  {
    category: 'Édition',
    entries: ['couverture mémoire', 'mock up mémoire', 'flipbook', 'flipbook 2'],
  },
  {
    category: 'Code processing',
    entries: [
      'processing1',
      'processing2',
      'processing3',
      'processing4',
      'processing5',
      'processing6',
    ],
  },
  {
    category: 'Modélisation 3D',
    entries: ['blender1', 'blender3', 'coquillage 8', 'etoile de mer 4'],
  },
  { category: 'Signalétique', entries: ['vélo sport', 'bal des pompiers2'] },
  {
    category: 'Fanzine et cartes postales',
    entries: ['utopie 3', 'divingWoman', "sang d'encre", 'oeil', 'fanzine 2', 'fanzine 5'],
  },
]

const data = [
  {
    name: 'Olio e Burro',
    cover: './img/Projet 1/olio 7.webp',
    keywords: ['Branding', 'Identité visuelle', 'Web'],
    challenge:
      "Trouver l'équilibre entre l'aspect artisanal et moderne, tout en transmettant la simplicité et le savoir-faire de leur cuisine avec une identité visuelle élégante et contemporaine pour attirer les clients.",
    solution:
      "Une palette de couleurs naturelles, des illustrations dessinées à la main et des typographies simples mais modernes pour créer une identité visuelle qui reflète parfaitement l'atmosphère chaleureuse et authentique d'Olio e Burro.",
    imgs: [
      // './img/Projet 1/olio 1.webp',
      './img/Projet 1/olio 6.webp',
      './img/Projet 1/olio 2.webp',
      './img/Projet 1/olio 7.webp',
      // './img/Projet 1/olio 5.webp',
      // './img/Projet 1/olio 4.webp',
      './img/Projet 1/olio 3.webp',
    ],
    description:
      "Olio e Burro est un restaurant né de la rencontre d'un français et d'une italienne amoureux de leur culture. Ils proposent une cuisine locale et sans gluten qui valorise la simplicité et le savoir faire. Le couple propose des plats fait maison à partir de produits bruts. C'est un endroit idéal pour les amateurs de cuisine italienne à la recherche d'ingrédients authentiques. ",
  },
  {
    name: 'Pannonica',
    cover: './img/Projet 2/Pannonica 1.webp',
    keywords: ['Édition', 'Identité visuelle', 'Web'],
    challenge:
      "Une refonte de l'identité visuelle à la fois sobre et élégante, mais également facilement identifiable pour la scène de jazz et de musiques improvisées à Nantes.",
    solution:
      "Création d'une maquette web et d'une revue saisonnière pour mettre en valeur l'identité visuelle, en la déclinant sur différents supports pour toucher un public plus large et promouvoir cette scène musicale dynamique et innovante. ",
    imgs: [
      './img/Projet 2/Pannonica 1.webp',
      './img/Projet 2/Pannonica 2.webp',
      './img/Projet 2/Pannonica 3.webp',
    ],
    description:
      "Pannonica est une scène de jazz et de musiques improvisées située à Nantes, en France. Elle propose une programmation régulière de concerts, d'expositions et de rencontres avec des artistes locaux et internationaux. C'est un lieu incontournable pour les amateurs de jazz et de musique expérimentale à Nantes.",
  },
  {
    name: 'Inktober',
    cover: './img/Projet 5/Inktober 1.webp',
    keywords: ['Illustration'],
    challenge:
      "Il s'agit de dessiner chaque jour pendant le mois d'octobre selon le thème indiqué par la liste officielle. Cette liste varie d'année en année.",
    solution:
      "Ces visuels, extraits de ma série d'inktober de 2021, ont été dessinés en noir et blanc et à l'encre.",
    imgs: [
      './img/Projet 5/Inktober 7.webp',
      './img/Projet 5/Inktober 5.webp',
      './img/Projet 5/Inktober 6.webp',
      './img/Projet 5/Inktober 2.webp',
      './img/Projet 5/Inktober 1.webp',
      './img/Projet 5/Inktober 4.webp',
      // './img/Projet 5/Inktober 3.webp',
    ],
    description:
      "Réalisation de dessins à l'encre à l'occasion d'Inktober 2021. Inktober est un challenge créé par Jake Parker en 2009 qui permet d'améliorer rapidement ses compétences en dessin à main levée. C'est aussi une occasion de développer un style illustratif personnel.",
  },
  {
    name: 'Motion',
    cover: './img/Projet 4/Motion 1.webp',
    keywords: ['Illustration', 'Animation'],
    challenge:
      'Peut-on briser la rigidité de la géométrie pour découvrir une scène animée dans laquelle les personnages prennent vie ?',
    solution:
      "Une scène occupée par des personnages géométriques créés sur illustrator qui s'articulent avant de quitter le décor. Les enjeux ? L'importance des points clés, de la synchronisation des calques et des effets.",
    imgs: ['./img/Projet 4/Motion 1.webp'],
    description:
      "Avec l'arrivée des réseaux sociaux, la vidéo de courte durée occupe une place centrale dans nos quotidiens. À la découverte des outils comme After effects, les outils graphiques, la géométrie et les illustrations vectorielles s'animent pour nous transporter dans un univers haut en couleur.",
  },
  {
    name: 'Maulévrier',
    cover: './img/Projet 3/Maulévrier 1.webp',
    keywords: ['Édition', 'Identité visuelle'],
    challenge:
      "Concevoir un flyer qui soit compact et ludique, pour faciliter la déambulation des visiteurs. Il doit offrir une grande quantité d'informations de manière intuitive en respectant le style local.",
    solution:
      "Inspiré par les cartes de métro, le support choisi est dépliable afin de présenter un plan du parc complet et lisible au recto et les informations au verso. Le flyer du parc recense les informations pratiques du lieu et son histoire. L'identité visuelle est à l'image de la diversité de la végétation.",
    imgs: [
      './img/Projet 3/Maulévrier 1.webp',
      './img/Projet 3/Maulévrier 11.webp',
      './img/Projet 3/Maulévrier 3.webp',
      // './img/Projet 3/Maulévrier 8.webp',
      // './img/Projet 3/Maulévrier 2.webp',
      // './img/Projet 3/Maulévrier 9.webp',
      // './img/Projet 3/Maulévrier 10.webp',
      // './img/Projet 3/Maulévrier 4.webp',
      // './img/Projet 3/Maulévrier 5.webp',
      // './img/Projet 3/Maulévrier 6.webp',
      // './img/Projet 3/Maulévrier 7.webp',
    ],
    description:
      "Le Parc Oriental de Maulévrier est un jardin botanique japonais créé en 1899 par Alexander Marcel, un industriel passionné de botanique et d'arts asiatiques. S'étendant sur plus de 29 hectares, il contient plus de 300 espèces végétales venues du Japon, de Chine et de Corée, ainsi que de nombreux éléments traditionnels de l'art de vivre japonais tels que des ponts, des lanternes, des pagodes et des pavillons.",
  },
]

function buildProjectSection(main, section, project) {
  function createProjectName() {
    const infos = section.appendChild(document.createElement('div'))
    infos.classList.add('infos')

    const infosH1 = infos.appendChild(document.createElement('h1'))
    infosH1.textContent = `0${data.indexOf(project) + 1}`

    const infosH2 = infos.appendChild(document.createElement('h1'))
    infosH2.textContent = `${project.name}`
  }
  createProjectName()

  if (window.innerWidth <= 1200) {
    const cover = section.appendChild(document.createElement('img'))
    cover.classList.add('cover')
    cover.src = `${project.cover}`

    const keywords = section.appendChild(document.createElement('div'))
    keywords.classList.add('keywords')
    project.keywords.forEach((keyword) => {
      const h3 = keywords.appendChild(document.createElement('h3'))
      h3.textContent = keyword
    })

    const description = section.appendChild(document.createElement('div'))
    description.classList.add('description')

    description.appendChild(document.createElement('h4')).textContent = 'Le Client'
    const projetDescP = description.appendChild(document.createElement('p'))
    projetDescP.textContent = `${project.description}`

    const button = section.appendChild(document.createElement('a'))
    button.classList.add('discover')
    button.textContent = 'DÉCOUVRIR'

    button.addEventListener('click', () => {
      main.classList.toggle('hidden')
      setTimeout(function () {
        clearContent(section)
        createProjectName()
        createSwiperDiv(section)
        populateSwiperWrapper(project)
        initSwiper()

        const projetDesc = section.appendChild(document.createElement('div'))
        projetDesc.classList.add('description')
        projetDesc.appendChild(document.createElement('h4')).textContent = 'Les enjeux'
        projetDesc.appendChild(document.createElement('p')).textContent = `${project.challenge}`
        projetDesc.appendChild(document.createElement('h4')).textContent = 'Le parti-pri'
        projetDesc.appendChild(document.createElement('p')).textContent = `${project.solution}`

        const retour = section.appendChild(document.createElement('a'))
        retour.textContent = 'RETOUR'
        retour.addEventListener('click', () => {
          main.classList.toggle('hidden')
          setTimeout(function () {
            clearContent(section)
            buildProjectSection(main, section, project)
            setTimeout(() => main.classList.toggle('hidden'), 250)
          }, 500)
        })

        if (window.innerWidth >= 1200) {
          section.lastChild.insertAdjacentElement(
            'afterend',
            document.getElementsByClassName('swiper')[0]
          )
        } else {
          console.log('Screen probably too small')
        }

        setTimeout(() => main.classList.toggle('hidden'), 250)
      }, 500)
    })

    if (window.innerWidth >= 1200) {
      section.lastChild.insertAdjacentElement('afterend', cover)
    }
  } else {
    const keywords = section.appendChild(document.createElement('div'))
    keywords.classList.add('keywords')
    project.keywords.forEach((keyword) => {
      const h3 = keywords.appendChild(document.createElement('h3'))
      h3.textContent = keyword
    })

    const description = section.appendChild(document.createElement('div'))
    description.classList.add('description')
    description.appendChild(document.createElement('h4')).textContent = 'Le Client'
    const projetDescP = description.appendChild(document.createElement('p'))
    projetDescP.textContent = `${project.description}`
    description.appendChild(document.createElement('h4')).textContent = 'Le Challenge'
    description.appendChild(document.createElement('p')).textContent = `${project.challenge}`
    description.appendChild(document.createElement('h4')).textContent = 'Ma Solution'
    description.appendChild(document.createElement('p')).textContent = `${project.solution}`

    const imgContainer = section.appendChild(document.createElement('div'))
    imgContainer.classList.add('imgContainer')
    project.imgs.forEach((img) => {
      const imgElem = imgContainer.appendChild(document.createElement('img'))
      imgElem.src = img
      imgElem.setAttribute('onclick', 'magnify(this)')
    })
  }
}

function projectsBuilding() {
  const main = document.querySelector('main')
  data.forEach((project) => {
    const section = main.appendChild(document.createElement('div'))
    section.classList.add(`project${data.indexOf(project) + 1}`, 'section')
    section.setAttribute('id', `project${data.indexOf(project) + 1}`)
    buildProjectSection(main, section, project)
  })
  galleryBuilding(main)
  contactBuilding(main)
}
projectsBuilding()

function galleryBuilding(main) {
  const gallery = main.appendChild(document.createElement('div'))
  gallery.classList.add('gallery', 'section')
  const categorySelector = gallery.appendChild(document.createElement('div'))
  categorySelector.classList.add('categorySelector')
  const galleryDisplay = gallery.appendChild(document.createElement('div'))
  galleryDisplay.classList.add('galleryDisplay')

  galleryData.forEach((category) => {
    const galleryCategoryH3 = categorySelector.appendChild(document.createElement('h3'))
    galleryCategoryH3.textContent = category.category

    galleryCategoryH3.addEventListener('click', () => {
      Array.from(document.querySelector('.categorySelector').children).forEach((h3) => {
        h3.style = 'border: 2px solid var(--secondary);'
      })
      galleryCategoryH3.style = 'border: 2px solid var(--accent);'

      galleryDisplay.classList.add('hidden')
      setTimeout(() => {
        Array.from(galleryDisplay.children).forEach((img) => {
          img.remove()
        })
      }, 250)

      setTimeout(() => {
        category.entries.forEach((elem) => {
          const img = galleryDisplay.appendChild(document.createElement('img'))
          img.src = `./img/gallery/${category.category}/${elem}.webp`
          img.addEventListener('click', (i) => {
            magnify(img)
          })
        })
        setTimeout(() => {
          galleryDisplay.classList.remove('hidden')
        }, 500)
      }, 250)
    })
  })
  document.querySelector('.categorySelector').firstChild.click()
}

function contactBuilding(main) {
  const contactDiv = main.appendChild(document.createElement('div'))
  contactDiv.classList.add('contactDiv', 'section')
  contactDiv.setAttribute('id', 'contactDiv')
  const contactContainer = contactDiv.appendChild(document.createElement('div'))
  contactContainer.classList.add('contactContainer')
  const contactIMG = contactContainer.appendChild(document.createElement('img'))
  contactIMG.src = './img/gallery/visage noir et blanc.webp'
  const contactInfos = contactContainer.appendChild(document.createElement('div'))
  contactInfos.classList.add('contactInfos')
  contactInfos.appendChild(document.createElement('h1')).textContent = 'Un projet en tête ? '
  contactInfos.appendChild(document.createElement('p')).textContent =
    "Si vous souhaitez discuter de votre projet ou simplement me dire bonjour, n'hésitez pas à me contacter par e-mail: "
  const contactBTN = contactInfos.appendChild(document.createElement('a'))
  contactBTN.href = 'test@gmail.com'
  contactBTN.textContent = 'CONTACTEZ-MOI'
}

function clearContent(section) {
  while (section.firstChild) {
    section.removeChild(section.lastChild)
  }
}

function createSwiperDiv(section) {
  const swiperDiv = section.appendChild(document.createElement('div'))
  swiperDiv.classList.add('swiper')

  const swiperWrapper = swiperDiv.appendChild(document.createElement('div'))
  swiperWrapper.classList.add('swiper-wrapper')

  const swiperNavPrev = swiperDiv.appendChild(document.createElement('div'))
  swiperNavPrev.classList.add('swiper-button-prev')

  const swiperNavNext = swiperDiv.appendChild(document.createElement('div'))
  swiperNavNext.classList.add('swiper-button-next')

  const swiperPagination = swiperDiv.appendChild(document.createElement('div'))
  swiperPagination.classList.add('swiper-pagination')

  return swiperDiv
}

function populateSwiperWrapper(project) {
  const entries = Array.from(project.imgs)

  entries.forEach((entry) => {
    const swiperSlide = document
      .querySelector('.swiper-wrapper')
      .appendChild(document.createElement('div'))
    swiperSlide.classList.add('swiper-slide')

    const swiperIMG = swiperSlide.appendChild(document.createElement('img'))
    swiperIMG.src = `${entry}`
  })
}

function initSwiper() {
  return new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

function magnify(img) {
  const modal = document.createElement('div')
  modal.classList.toggle('hidden')
  modal.classList.add('magnifyModal')
  document.body.appendChild(modal)

  const modalContent = document.createElement('div')
  modalContent.classList.add('magnifyModalContent')
  modal.appendChild(modalContent)

  const magnifiedImage = document.createElement('img')
  magnifiedImage.src = img.src
  modalContent.appendChild(magnifiedImage)
  setTimeout(() => {
    modal.classList.toggle('hidden')
  }, 0)

  modal.onclick = function () {
    modal.classList.toggle('hidden')
    setTimeout(() => {
      document.body.removeChild(modal)
    }, 250)
  }
}

const words = ['Illustrations', 'Édition', 'Web', 'Motion Design', 'Graphisme']

let wordIndex = 0
const heroText = document.getElementById('hero-text')

setInterval(function () {
  heroText.textContent = words[wordIndex]
  wordIndex = (wordIndex + 1) % words.length
}, 2000)
