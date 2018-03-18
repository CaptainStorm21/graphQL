import { resolvers } from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `

    type Employee {
        id: ID
        firstName: String
        lastName: String
        position: String
        gender: Gender
        language: String
        emails: String
        age: Int
        contacts: [Contact]

    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
    }


    type Query {
        getEmployee(id:ID): Employee
    }

    input EmployeeInput {
        id: ID
        firstName: String!
        lastName: String!
        position: String   
        gender: Gender
        language: String
        email: String
        age: Int
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createEmployee (input: EmployeeInput): Employee
    }

`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
