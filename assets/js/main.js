
const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

const nameOutput2  =document.body.querySelector("#nameBox2");
const countryOutput =document.body.querySelector("#countryBox");
const activeOutput =document.body.querySelector("#activeBox");
const genreOutput =document.body.querySelector("#genreBox");
const nameButton  =document.body.querySelector("#nameButton");
const countryButton =document.body.querySelector("#countryButton");
const activeButton =document.body.querySelector("#activeButton");
const genreButton =document.body.querySelector("#genreButton");
const searchInput = document.body.querySelector("#searchInput")
const searchButton = document.body.querySelector("#searchButton")

const resetHtml = () => {
    nameOutput2.innerHTML = "<p onClick = 'sortByName()' >Name</p>"
    countryOutput.innerHTML = "<p onClick = 'sortByCountry()'>country</p>"
    activeOutput.innerHTML = "<p>active</p>"
    genreOutput.innerHTML = "<p onClick = 'sortByGenre()'>genre</p>"
}

resetHtml()

const showSingers =(arr) => arr.forEach((elt) => {
    nameOutput2.innerHTML += `<p>${elt.name}</p>`
    countryOutput.innerHTML += `<p>${elt.country}</p>`
    activeOutput.innerHTML += `<p>${elt.period_active.start} - ${elt.period_active.end}</p>`
    genreOutput.innerHTML += `<p>${elt.genre}</p>`
})

showSingers(singers)

const sortByName= () => {
    resetHtml()
    singers.sort((a, b) => {
        if (a.name[0] > b.name[0] ) {
            return 1
        } else {
            return -1
        }
    })
    showSingers(singers)
}

const sortByCountry = () => {
    resetHtml()
    singers.sort((a, b) => {
        if (a.country > b.country) {
            return 1
        } else {
            return -1
        }
    })
    showSingers(singers)
}

const sortByGenre = () => {
    resetHtml()
    singers.sort((a, b) => {
        if (a.genre > b.genre ) {
            return 1
        } else {
            return -1
        }
    })
    showSingers(singers)
}


searchButton.addEventListener("click", () => {
    event.preventDefault();
    resetHtml();
    const searchResult = [];
    singers.forEach((elt) => elt.name.toLowerCase().includes(searchInput.value.toLowerCase()) ? searchResult.push(elt) : null);
    showSingers(searchResult)
})