import { getLetters, getAuthors, getRecipients } from "./dataAccess.js"

const convertLettersToListElement = (request) => {
        
    const authors = getAuthors()
    const foundAuthor = authors.find(
        (author) => {
            return author.id === parseInt(request.author)
        }
    )

    const recipients = getRecipients()
    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === parseInt(request.recipient)
        }
    )
 
    return ` 
    <li class="letter">
    <p>Dear ${foundRecipient.name} (${foundRecipient.email}),</p>
    <p>${request.text}</p>
    <p>Sincerely,</p>
    <p>${foundAuthor.name} (${foundAuthor.email})</p>
    <p id="sentOn">Sent on ${request.date}</p>
    <span id="letterButton">${request.category}</span>
    </li> 
    `
}
 

export const listOfLetters = () => {
    const letters = getLetters()
    
    let html = `
        <ul class="listOfLetters">
            ${letters.map(letter => convertLettersToListElement(letter)).join(" ")}
        </ul>
    `
    return html
} 
 


