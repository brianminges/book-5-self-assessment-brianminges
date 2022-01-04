import { getAuthors, fetchAuthors, getRecipients, fetchRecipients, getLetters, fetchLetters } from "./dataAccess.js";
 
export const letterForm = () => {
   
    const authors = getAuthors()
    const recipients = getRecipients()

    let html = `
        
        <div class="field dropdown">
            <label class="label">Authors</label>
            <select class="dropdown" id="authors">
            <option value="author">Choose author ...</option>
            ${
                authors.map(
                    author => {
                        return `<option value="${author.id} email=${author.email}">${author.name}</option>`
                    }
                ).join("")
            }
            </select>
        </div>

        <div class="field textArea">
            <label class="label" for="letterText">Letter</label>
            <input type="text" name="letterText" class="input" />
        </div>

        <div class="field">
            <label class="label">Topics</label>
            <div class="radioWrapper">
                <div class="radio">
                    <label class="radio" for="bizBtn">Business</label>
                    <input type="radio" name="bizBtn" class="input" />
                </div>
                <div class="radio">
                    <label class="radio" for="friendBtn">Friendly</label>
                    <input type="radio" name="friendBtn" class="input" />
                </div>
                <div class="radio">
                    <label class="radio" for="familyBtn">Family</label>
                    <input type="radio" name="familyBtn" class="input" />
                </div>
                <div class="radio">
                    <label class="radio" for="congratsBtn">Congratulations</label>
                    <input type="radio" name="congratsBtn" class="input" />
                </div>
                <div class="radio">
                    <label class="radio" for="condolencesBtn">Condolences</label>
                    <input type="radio" name="condolencesBtn" class="input" />
                </div>
            </div>
        </div>

        <div class="field dropdown">
            <label class="label">Recipients</label>
            <select class="dropdown" id="recipients">
            <option value="recipient">Choose recipient ...</option>
            ${
                    recipients.map(
                        recipient => {
                            return `<option value="${recipient.id} email=${recipient.email}">${recipient.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>

        <button class="button" id="submitLetter">Send Letter</button>
    `

    return html
}