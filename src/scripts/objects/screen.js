const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <p>👥 ${user.followers} followers | ${user.following} following</p>
                                        </div>
                                    </div>`
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}"target="_bank">${repo.name}
                                                                        <ul>
                                                                            <li>🍴${repo.forks_count}</li>
                                                                            <li>⭐${repo.stargazers_count}</li>
                                                                            <li>👀${repo.watchers_count}</li>
                                                                            <li>👨🏽‍💻${repo.language}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)

        let eventsItens = ""
        user.events.forEach(event => {
            if (event.type === "PushEvent") {
                eventsItens += `<li>
                                    <p class="event">
                                        <strong>${event.repo.name}</strong>
                                        -${event.payload.commits[0].message}
                                    </p>
                                </li>`
            } else if (event.type === "CreateEvent") {
                eventsItens += `<li><p class="event"><strong>${event.repo.name}</strong>-${event.payload.description ?? 'Sem descrição 😥'}</p></li>`
            }
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>
                                           <div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado 😥</h3>"
    }
}

export { screen }