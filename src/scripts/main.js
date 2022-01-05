import { fetchAuthors, fetchRecipients, fetchLetters } from "./dataAccess.js"
import { completedLetter } from "./letter.js"

const mainContainer = document.querySelector("#container")

// this one works
// const render = () => {
//     fetchAuthors().then(
//         () => {
//             fetchRecipients().then(
//                 () => {
//                     mainContainer.innerHTML = completedLetter()
//                 }
//             )
//         }
//     )
    
// }

const render = () => {
    fetchAuthors().then(
        () => {
            fetchRecipients().then(
                () => {
                    fetchLetters().then(
                        () => {
                            mainContainer.innerHTML = completedLetter()
                        }
                    )
                }
            )
        }
    )
    
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
