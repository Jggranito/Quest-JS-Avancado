const renderRepositories = (user, userProfile) => {
    let repositoriesItens = ""
    user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}"target="_blank">${repo.name}
                                                                        <ul>
                                                                            <li>🍴${repo.forks_count}</li>
                                                                            <li>⭐${repo.stargazers_count}</li>
                                                                            <li>👀${repo.watchers_count}</li>
                                                                            <li>👨🏽‍💻${repo.language ?? 'Sem linguagem definida'} </li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)
    if (user.repositories.length > 0) {
        userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                    </div>`
    }
}

export { renderRepositories }