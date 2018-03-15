# graphQL
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

YAY! part 2 is done
