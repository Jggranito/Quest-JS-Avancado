import { renderEvents } from '../render/renderEvents.js'
import { renderRepositories } from '../render/renderRepositories.js'

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

        renderRepositories(user, this.userProfile)
        renderEvents(user, this.userProfile)
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado 😥</h3>"
    }
}

export { screen }