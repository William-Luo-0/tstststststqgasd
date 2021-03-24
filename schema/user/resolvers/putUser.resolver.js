import { users } from '../../../data-source/users'

const putUser = (_, { input }) => {
    users.push(input)
    console.log(`The internal gender value is: ${input.gender}`)
    return input;
}

export default putUser