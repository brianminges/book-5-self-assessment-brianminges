const applicationState = {
    authors: [],
    recipients: [],
    letters: [],
}

const API = "http://localhost:8088"

//This returns the authors from the API and stores them in applicationState.authors
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authorRequest) => {
                applicationState.authors = authorRequest
            } 
        )
}

//This creates a copy of the applicationState.authors array
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author})) 
}


//This returns the recipients from the API and stores them in applicationState.recipients
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipientRequest) => {
                applicationState.recipients = recipientRequest
            }
        )
}

//This creates a copy of the applicationState.recipients array
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient})) 
}
 

//This returns the letters from the API and stores them in applicationState.letters
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letterRequest) => {
                applicationState.letters = letterRequest
            }
        )
}

//This creates a copy of the applicationState.letters array
export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}