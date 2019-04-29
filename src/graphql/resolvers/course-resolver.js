import Course from '../../models/Course';

export default {
    Query: {
        course: (root, args) => {
            return new Promise((resolve, reject) => {
                Course.findOne(args)
                    .populate('category')
                    .populate('poster')
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        courses: () => {
            return new Promise((resolve, reject) => {
                Course.find({})
                    .populate('category')
                    .populate('poster')
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        }
    },
    Mutation: {
        addCourse: (root, { title, description, language, poster, category }) => {
            const course = new Course({ title, description, language, poster, category });

            return new Promise((resolve, reject) => {
                course.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editCourse: (root, { _id, title, description, language, poster, category }) => {
            return new Promise((resolve, reject) => {
                Course.findOneAndUpdate({ _id }, { $set: { title, description, language, poster, category } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deleteCourse: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Course.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
