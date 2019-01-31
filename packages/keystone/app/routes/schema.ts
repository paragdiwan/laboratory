import { gql } from 'apollo-server-express';

export default gql`
  input OrderBy {
    title: Int!
  }
  
  type Query {
    posts(section: String, orderBy: OrderBy, skip: Int, limit: Int, labels: [String]): [Post]
  }
  
  scalar Date
  
  type Image {
    filename: String
  }
  
  type Name {
    first: String
    last: String
  }
  
  type Author {
    name: Name
  }
  
  type Section {
    name: String
  }
  
  type Post {
    slug: String
    image: Image
    state: String
    title: String
    subtitle: String
    content: String
    date: String
    author: Author
    labels: [String]
    section: Section
  }
  
  schema {
    query: Query
  }
`;
