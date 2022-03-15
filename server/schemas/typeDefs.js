// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
   type User {
      _id: ID
      username: String
      email: String
      password: String
      savedBooks: [Book]
   }
   type Book {
      authors: String
      description: String
      bookId: String
      image: String
      link: String
      title: String
   }

   type Query {
      user: User
      books: [Book]
   }

   type Mutation {
      login(email: String!, password: String!): Auth
   }

   type Auth {
      token: ID!
      user: User
   }
`;

// export the typeDefs
module.exports = typeDefs;
