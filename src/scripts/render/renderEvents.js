const renderEvents = (user, userProfile) => {
    let eventsItens = ""
    user.events.forEach(event => {
        const eventType = event.type === "CreateEvent" || event.type === "PushEvent";

        if (eventType) {
            eventsItens += `<li>
                                <p class="event">
                                    <strong>${event.repo.name}</strong>
                                    - ${event.payload.commits?.[0].message ?? 
                                    `Create ${event.payload.ref_type}`}
                                </p>
                            </li>`
        }
    })

    if (eventsItens.length > 0) {
        userProfile.innerHTML += `<div class="events section">
                                          <h2>Eventos</h2>
                                          <ul>${eventsItens}</ul>
                                        </div>`
    }
}

export { renderEvents }