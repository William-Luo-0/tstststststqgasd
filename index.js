import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
import typeDefs from './schema/user/typeDefs'
import resolvers from './schema/user/resolvers'
import schema from './schema/schema'
dotenv.config()

const server = new ApolloServer({
    schema
})

server.listen({
    port: process.env.PORT
}).then(({ url }) => 
    console.log(`App listening at ${url}!`)
);