import { Technologies } from "./technologies.js"
import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
             
        const itemClicked = event.target

        if (itemClicked.id.startsWith("orderButton")) {

            addCustomOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars R Us</h1>
        <article class="choices">
            <section class="paints">
                ${Paints()}
            </section>
            <section class="interiors">
                ${Interiors()}
            </section>
            <section class="wheels">
                ${Wheels()}
            </section>
            <section class="tech">
                ${Technologies()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Order</button>
        </article>
        <article class="customOrders">
            <section class = "orders">
                <h2>Custom Car Orders</h2>
                ${Orders()}
            </section>
        </article>
    `
}