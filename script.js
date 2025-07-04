
const form = document.getElementById('formulaire')




form.addEventListener('submit', function (event) {
    event.preventDefault()

    let author = form.elements['auteur'].value
    let text = form.elements['citation'].value
    addQuote(text, author)

})


function addQuote(quote, author) {
    let quoteText = document.createElement('p')
    quoteText.classList.add('text')
    quoteText.innerText = quote
    let authors = document.createElement('p')
    authors.classList.add('author')
    authors.innerText = author
    const quoteDiv = document.createElement('div')
    quoteDiv.classList.add('quote')

quoteDiv.appendChild(quoteText)
quoteDiv.appendChild(authors)

const quoteList = document.getElementById('quote-list')
quoteList.appendChild(quoteText)
quoteList.appendChild(authors)

}
