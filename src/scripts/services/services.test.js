import { getUser } from './user'
import { getRepositories } from './repositories'
import { getEvents } from './events'

it('must get user information - deve obter informações do usuário', async () => {
    const user = await getUser('jggranito');
    let test = user.message != 'Not Found' ? true : false;

    expect(test).toBe(true);
})

it('must get user repositories - deve obter os repositórios do usuário', async () => {
    const repository = await getRepositories('jggranito');
    let test = repository.message != 'Not Found' ? true : false;

    expect(test).toBe(true);
})

it ('must get user events - deve obter os eventos do usuário', async () => {
    const event = await getEvents('jggranito');
    let test = event.message != 'Not Found' ? true : false;

    expect(test).toBe(true);
})