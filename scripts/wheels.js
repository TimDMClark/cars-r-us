import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "wheels") {
            setWheels(parseInt(clickEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel type</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
