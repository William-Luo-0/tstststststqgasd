import Joi from 'joi'
import putUser from './resolvers/putUser.resolver'
import { composeResolvers } from '@graphql-tools/resolvers-composition'
import getUser from './resolvers/getUser.resolver'
import getUsers from './resolvers/getUsers.resolver'

const validate = () => next => (root, args, context, info) => {
    const schema = Joi.object({
        firstName: Joi.string().min(0).max(24),
        lastName: Joi.string().min(0).max(24),
        age: Joi.number().min(0).max(200),
        gender: Joi.string().valid('Man', 'Woman')
    })

    schema.validate(args.input)

    return next(root, args, context, info)
}

const resolvers = {
    Gender: {
        MALE: 'Man',
        FEMALE: 'Woman'
    },
    Query: {
        getUser: getUser,
        getUsers: getUsers
    },
    Mutation: {
        putUser: putUser
    }
}

const resolversComposition = {
    'Mutation.putUser': [validate()]
}

composeResolvers(resolvers, resolversComposition)

export default resolvers