
const form = document.getElementById('formulaire')



form.addEventListener('submit', function (event) {
    event.preventDefault()

    let author = form.elements['auteur'].value
    let text = form.elements['citation'].value
    console.log(text, author)

})

