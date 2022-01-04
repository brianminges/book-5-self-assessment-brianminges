import { letterForm } from "./form.js"

export const completedLetter = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="serviceForm">
            ${letterForm()}
        </section>
    `
}