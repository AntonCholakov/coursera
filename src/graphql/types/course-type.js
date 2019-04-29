export default `
    type Course {
        _id: String!,
        title: String!,
        description: String,
        language: String!,
        poster: Poster,
        category: Category
    }

    type Query {
        course(_id: String!): Course
        courses: [Course]
    }

    type Mutation {
        addCourse(
            title: String!,
            description: String,
            language: String!,
            poster: ID!,
            category: ID!): Course
        editCourse(
            _id: String!,
            title: String!,
            description: String,
            language: String!,
            poster: ID!,
            category: ID!): Course
        deleteCourse(_id: String!): Course
    }
`;