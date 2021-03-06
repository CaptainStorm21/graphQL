import express from 'express';
//import express from express
import graphqlHTTP from 'express-graphql';
import schema from './schema';


//create a constant since we will never need to change any app's values
//plus it is es6 feature
const app = express();

//now we need to create a base server 
app.get('/', (req, res) => {
    res.send('GraphQL is badass!' );
});


class Employee {
    constructor(id, { firstName, lastName, gender, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender= gender;
        this.language = language;
        this.email  = email ;
    }
}


const EmployeedDatabase = {};


//create a const root

const root= { employee: () => {
            return {
                "id": 25654,
                "firstName": "John",
                "lastName": "Doe",
                "position": "CEO",
                "gender": "M",
                "language": "English",
                "emails": [
                    {email: "hello@hello.com"},
                    {email: "hello3@hello.com"}
            ],
    }
}, 

createEmployee: ({input}) => {
    let id = require('crypto'). randomBytes(10).toString('hex');
    EmployeedDatabase[id]=input;
    return new Employee(id, input);
}

};

app.use('/graphql', graphqlHTTP ({
    schema, 
    rootValue: root,
    graphiql: true,
}));


//now we need to set up a listening port where will app / express will be listening on
// down below we are telling the server once you come alive throw a conssole log that it is running 
app.listen(8080, () => console.log("the server is running"));