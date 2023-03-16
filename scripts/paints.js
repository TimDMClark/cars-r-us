import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "paints") {
            setPaint(parseInt(clickEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
