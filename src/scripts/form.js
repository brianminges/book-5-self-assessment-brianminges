import { getAuthors, getRecipients, fetchRecipients, getLetters, sendLetter } from "./dataAccess.js";

export const letterForm = () => {
   
    const authors = getAuthors()
    const recipients = getRecipients()

    let html = `
        
        <div class="field dropdown">
            <label class="label">Authors</label>
            <select class="dropdown" id="authors">
            <option value="author" id="authorName">Choose author ...</option>
            ${
                authors.map(
                    author => {
                        return `<option value="${author.id}">${author.name}</option>`
                    }
                ).join("")
            }
            </select>
        </div>

        <div class="field textArea">
            <label class="label" for="letterText">Letter</label>
            <textarea type="text" name="letterText" class="textarea" /></textarea>
        </div>

        <div class="field radioBtns">
            <label class="label">Topics</label>
            <div class="radioWrapper">
                <div>
                    <label class="radio" for="business">Business</label>
                    <input type="radio" name="radioBtns" class="input" value="business" />
                </div>
                <div>
                    <label class="radio" for="friendly">Friendly</label>
                    <input type="radio" name="radioBtns" class="input" value="friendly" />
                </div>
                <div>
                    <label class="radio" for="family">Family</label>
                    <input type="radio" name="radioBtns" class="input" value="family" />
                </div>
                <div>
                    <label class="radio" for="congratulations">Congratulations</label>
                    <input type="radio" name="radioBtns" class="input" value="congratulations" />
                </div>
                <div>
                    <label class="radio" for="condolences">Condolences</label>
                    <input type="radio" name="radioBtns" class="input" value="condolences" />
                </div>
            </div>
        </div>

        <div class="field dropdown">
            <label class="label">Recipients</label>
            <select class="dropdown" id="recipients">
            <option value="recipient" name="recipientName">Choose recipient ...</option>
            ${
                recipients.map(
                    recipient => {
                        return `<option value="${recipient.id}">${recipient.name}</option>`
                    }
                ).join("")
            }
            </select>
        </div>

        <button class="button" id="submitLetter">Send Letter</button>
    `

    return html
}
 
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    //Get what user entered into form
    if (clickEvent.target.id === "submitLetter") {
        const authorOfLetter = document.getElementById("authors").value;
        const textOfLetter = document.querySelector("textarea[name='letterText']").value;
        const recipientOfLetter = document.getElementById("recipients").value;
        const category = document.querySelector("input[name='radioBtns']:checked").value;

        //Create an object out of that data
        const dataToSendToAPI = {
            author: authorOfLetter,
            text: textOfLetter,
            recipient: recipientOfLetter,
            category: category,
            date: (new Date()).toLocaleDateString()
        }

        //Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

