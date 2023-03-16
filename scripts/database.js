const database = {
    paints: [
        { id: 1, color: "Silver", cost: 350 },
        { id: 2, color: "Midnight Blue", cost: 500 },
        { id: 3, color: "Firebrick Red", cost: 520 },
        { id: 4, color: "Spring Green", cost: 600 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", cost: 225 },
        { id: 2, type: "Charcoal Fabric", cost: 275 },
        { id: 3, type: "White Leather", cost: 630 },
        { id: 4, type: "Black Leather", cost: 650 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", cost: 120 },
        { id: 2, package: "Navigation Package", cost: 245 },
        { id: 3, package: "Visibility Package", cost: 670 },
        { id: 4, package: "Ultra Package", cost: 900 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", cost: 440 },
        { id: 2, type: "17-inch Pair Radial Black", cost: 540},
        { id: 3, type: "18 inch Pair Spoke Silver", cost: 720 },
        { id:4, type: "18-inch Pair Spoke Black", cost: 850 }
    ],
    customOrders: [
        { id: 1, paintId:2, interiorId: 4, technologyId: 3, wheelId: 4}
    ],
    orderBuilder: {},
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const getTechnologies = () => {
    return database.technologies.map(technology=> ({...technology}))
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}