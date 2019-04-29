export default `
    type Poster {
        _id: String!,
        url: String!
    }

    type Query {
        poster(_id: String!): Poster
        posters: [Poster]
    }

    type Mutation {
        addPoster(url: String!): Poster
        editPoster(_id: String!, url: String!): Poster
        deletePoster(_id: String!): Poster
    }
`;