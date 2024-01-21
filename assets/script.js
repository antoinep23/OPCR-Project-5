const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides[0].tagLine)

const flecheGauche = document.querySelector('.arrow_left')
const flecheDroite = document.querySelector('.arrow_right')

const bannerImage = document.querySelector('.banner-img')
const bannerText = document.querySelector('.banner__text')

let dots = Array.from(document.querySelectorAll('.dot'))

let indexActif = 0
let position = 1


flecheGauche.addEventListener('click', () => {
	if (position > 1) {
		position--
		bannerImage.src = './assets/images/slideshow/slide'+ position + '.jpg'
		dots[indexActif].classList.remove('dot_selected') 
		indexActif = (indexActif - 1) % dots.length
		dots[indexActif].classList.add('dot_selected')
		bannerText.innerHTML = slides[indexActif].tagLine
	}
})


flecheDroite.addEventListener('click', () => {
	if (position < 4) {
		position++
		bannerImage.src = './assets/images/slideshow/slide'+ position + '.jpg'
		dots[indexActif].classList.remove('dot_selected') 
		indexActif = (indexActif + 1) % dots.length
		dots[indexActif].classList.add('dot_selected')
		bannerText.innerHTML = slides[indexActif].tagLine
	}
})



