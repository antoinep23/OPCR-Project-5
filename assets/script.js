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


let flecheGauche = document.querySelector('.arrow_left')
let flecheDroite = document.querySelector('.arrow_right')
let bannerImage = document.querySelector('.banner-img')

let position = 1


flecheGauche.addEventListener('click', () => {
	if (position > 1) {
		position--
		bannerImage.src = './assets/images/slideshow/slide'+ position + '.jpg'
		console.log(position)
	}
})


flecheDroite.addEventListener('click', () => {
	if (position < 4) {
		position++
		bannerImage.src = './assets/images/slideshow/slide'+ position + '.jpg'
		console.log(position)
	}
})



