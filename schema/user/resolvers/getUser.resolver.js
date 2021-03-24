import { users } from '../../../data-source/users'

const getUser = (_, { input }) => {
    users.forEach(user => {
        if (user.firstName === input) {
            return user
        }
    })
}

export default getUser