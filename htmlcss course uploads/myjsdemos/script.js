
//images
const panels = document.querySelectorAll('.panel')

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})




//testimonials
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Messi',
    position: 'Striker',
    photo:
      'messi.jpg',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this person.",
  },
  {
    name: 'Virgil',
    position: 'Defender',
    photo: 'virgil.jpg',
    text:
      'This person is an amazing frontend developer that delivered the task exactly how we need it, you will not be disappointed by the work delivered.',
  },
  {
    name: 'Mbappe',
    position: 'Forward',
    photo: 'mbappe.jpg',
    text:
      "Communication was also very good with him and he was very responsive all the time.",
  },
  {
    name: 'Beckham',
    position: 'Manager',
    photo: 'beckham.jpg',
    text:
      "This person does everything they can to get the job done and done right.",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)


/*
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
*/

/*
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
*/