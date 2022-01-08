import { getLetters } from "./dataAccess.js"


const convertRequestsToListElement = (request) => {
    
    return ` 
    <li class="letter">
    <p>Dear ${request.recipient},</p>
    <p>${request.text}</p>
    <p>${request.author}</p>
    <p id="sentOn">Sent on ${request.date}</p>

   <span id="letterButton">${request.category}</span>
    </li> 
`
}
 

export const listOfLetters = () => {
    const letters = getLetters()
    
    let html = `
        <ul class="listOfLetters">
            ${letters.map(letter => convertRequestsToListElement(letter)).join(" ")}
        </ul>
    `
    return html
} 
 


