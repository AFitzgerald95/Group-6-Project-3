const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./graphql/schema'); // Assume you create this

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
const port = process.env.PORT || 3000;

server.start().then(() => {
  server.applyMiddleware({ app });

 if (process.env.NODE_ENV === 'production') {
   app.use(express.static('build'));
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
});
