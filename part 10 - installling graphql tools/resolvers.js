class Employee {
  constructor (
    id,
    { firstName, lastName, gender, language, email, age, contacts }
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.language = language
    this.email = email
    this.age = age
    this.contacts = contacts
  }
}

const employeeDatabase = {}

// create a const root

export const resolvers = {
  Query: {
    getEmployee: ({ id }) => {
      return new Employee(id, employeeDatabase[id])
    }
  },
  Mutation: {
    createEmployee: ({ input }) => {
      let id = require('crypto').randomBytes(10).toString('hex')
      employeeDatabase[id] = input
      return new Employee(id, input)
    }
  }
}
