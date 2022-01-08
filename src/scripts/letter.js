import { letterForm } from "./form.js"
import { sendLetter, fetchLetters } from "./dataAccess.js"
import { listOfLetters } from "./output.js"

export const completedLetter = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="serviceForm">
            ${letterForm()}
        </section>

        <section>
        <h2>Letters</h2>
           ${listOfLetters()}
        </section>

    `
}