export default `
    type Category {
        _id: String!,
        name: String!,
        poster: Poster
    }

    type Query {
        category(_id: String!): Category
        categories: [Category]
    }

    type Mutation {
        addCategory(
            name: String!,
            poster: ID!): Category
        editCategory(
            _id: String!,
            name: String!,
            poster: ID!): Category
        deleteCategory(_id: String!): Category
    }
`;