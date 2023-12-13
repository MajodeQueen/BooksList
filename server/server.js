const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema');
const cors = require('cors');

const app = express();

mongoose.connect(
  'mongodb+srv://queenMajo:Shinequeenmajo@cluster0.uzxvjsj.mongodb.net/Graphql_books?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Mongodb');
});

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(5000, () => {
  console.log('Now listening to port 5000');
});
