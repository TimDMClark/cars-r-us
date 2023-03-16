import { getOrders, getInteriors, getPaints, getTechnologies, getWheels } from "./database.js"

const interiors = getInteriors()
const paints = getPaints()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    let totalCost = 'Invalid Selection'
    if (foundInterior && foundPaint && foundTechnology && foundWheel) {
        totalCost = foundInterior.cost + foundPaint.cost + foundTechnology.cost + foundWheel.cost
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
            Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}