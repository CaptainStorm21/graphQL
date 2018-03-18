import { buildSchema } from 'graphql'

const schema = buildSchema(
  `

    type Employee {
        id: ID
        firstName: String
        lastName: String
        position: String
        gender: String
        language: String
        emails: String
        age: Int

    }

    type Query {
        getEmployee(id:ID): Employee
    }

    input EmployeeInput {
        id: ID
        firstName: String!
        lastName: String!
        position: String
        gender: String
        language: String
        email: String
        age: Int
    }

    type Mutation {
        createEmployee (input: EmployeeInput): Employee
    }

`
)

export default schema
