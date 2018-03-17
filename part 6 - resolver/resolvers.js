class Employee {
  constructor (id, { firstName, lastName, gender, language, email }) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.language = language
    this.email = email
  }
}

const employeeDatabase = {}

// create a const root

const resolvers = {
  getEmployee: ({ id }) => {
    return new Employee(id, employeeDatabase[id])
  },

  createEmployee: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex')
    employeeDatabase[id] = input
    return new Employee(id, input)
  }
}

export default resolvers
