import { gql } from 'apollo-server'

const typeDefs = gql`
    type Query {
        getUser(input: String!): User
        getUsers: [User]
    }

    type Mutation {
        putUser(input: PutUserInput!): User
    }

    type User {
        firstName: String!
        lastName: String!
        age: Int!
        gender: Gender!
    }

    input PutUserInput {
        firstName: String!
        lastName: String!
        age: Int!
        gender: Gender!
    }

    enum Gender {
        MALE
        FEMALE
    }
`
export default typeDefs