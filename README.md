create a folder mkdir graphql101 or something like that but not graphql
1. npm init 
2. npm install --save express nodemon
3. npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0 
//babel-preset-stage-0  covers the latest es7 
4. open package.json
5. add in "script" section 

             "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "nodemon ./index.js --exec babel-node -e js"
                },
6. create .babelrc file (see the file)
7.create index.js file (see the file)
8. now let's run the index.js --- npm start
9. if you go to localhost:8080 you will see GraphQL is a badass

you are done with  part 1.

1. create a new file schema.js (see the file)
//this file will be your schema file that is driven from using graphQL libraries/components
2. open index.js add 
    import graphHTTP from 'express-graphql';
3. import schema from './schema'  see the file
4. open package.json 
5. go to prompt and install graphql
    npm install --save express-graphql graphql or just grab my packa.json file and run npm install
6. see all the changes from part 1 to part 2 
7. if you have stopped your server restart it then go to http://localhost:8080/graphql you should see a welcome screen
8. remove everything from left side and add this 

query {
  hello,
}
9. click on arrow  and you should see 
{
  "data": {
    "hello": "Hi. I am GRAPHQL!"
  }
}

YAY! part 2 is done

Basics schema

let's open a file schema.js and add keys and properties
once you add alll the keys and values open index.js and  add return with keys. open a file index.js 
once you modify both files, save and rerun the server or just go to localhost:8080/graphql and open left side

here you only modify schema.js and index.js files 

 part 3 is done

In part 4 we are dealing with types of data ... 

if you open schema.js, you will see that each key has a type of data it accepts

    type Employee {
        id: ID
        firstName: String
        lastName: String
        position: String
        gender: String
        language: String
        emails: [Email]!
    }

now, you see somethign strange .. why is emails : has [ ]!
we are telling schema file that emails field is a must to be filled out and it may have more than 1 email

we see that in index.js 
        "emails": [
            {email: "hello@hello.com"},
            {email: "hello3@hello.com"}
    ],
    }

part 5 
query and mutation
so we learned how to pull the data out of built in db now we need to figure out how to create a random unique id 
and how do you add data into db 

open index.js
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

then add const EmployeedDatabase = {};
we need to add all the input into EmployeDatabase object

in order to generate a unique ID you add this code 
createEmployee: ({input}) => {
    let id = require('crypto'). randomBytes(10).toString('hex');
    EmployeedDatabase[id]=input;
    return new Employee(id, input);
}

restart localhost:8080/graphql
and add this

mutation {
  createEmployee(input:{
    firstName:"Josh",
    lastName: "Graban",
    gender: "M",
    email:"meme@meememe.com"
  }){
    id
    firstName
    lastName
    gender
    
  }
}



