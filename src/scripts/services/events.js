import { baseUrl } from "../../scripts/variables.js";
import { eventsQuantity } from "../../scripts/variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { getEvents }