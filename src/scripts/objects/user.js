const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        console.log(events)
        this.events = []
        events.forEach(e => {
            if (e.type === "PushEvent" || e.type === "CreateEvent") {
                this.events.push(e)
            }
        })
        if(this.events.length > 10) this.events.length = 10
    }
}

export { user }