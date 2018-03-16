import { buildSchema } from 'graphql';

const schema = buildSchema ( `

    type Employee {
        id: ID
        firstName: String
        lastName: String
        position: String
        gender: String
        language: String
        email: String
    }

    type Query {
        employee: Employee
    }

`)

export default schema;