import { buildSchema } from 'graphql';

const schema = buildSchema ( `

    type Employee {
        id: ID
        firstName: String
        lastName: String
        position: String
        gender: String
        language: String
        emails: [Email]!
    }

    type Email {
        email: String
    }
    type Query {
        employee: Employee
    }

`)

export default schema;