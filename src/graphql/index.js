import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";

import Poster from "./types/poster-type";
import Category from "./types/category-type";
import Course from "./types/course-type";
import PosterResolver from "./resolvers/poster-resolver";
import CategoryResolver from "./resolvers/category-resolver";
import CourseResolver from "./resolvers/course-resolver";

const typeDefs = mergeTypes([Poster, Category, Course]);
const resolvers = mergeResolvers([PosterResolver, CategoryResolver, CourseResolver]);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;