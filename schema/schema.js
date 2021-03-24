import typeDefs from './user/typeDefs'
import resolvers from './user/resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

export default schema