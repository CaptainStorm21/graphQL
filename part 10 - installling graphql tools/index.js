import express from 'express'
// import express from express
import graphqlHTTP from 'express-graphql'
import { schema } from './schema'

// create a constant since we will never need to change any app's values
// plus it is es6 feature
const app = express()

// now we need to create a base server
app.get('/', (req, res) => {
  res.send('GraphQL is badass!')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

// now we need to set up a listening port where will app / express will be listening on
// down below we are telling the server once you come alive throw a conssole log that it is running
app.listen(8080, () => console.log('the server is running'))
