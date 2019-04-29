import Category from '../../models/Category';

export default {
    Query: {
        category: (root, args) => {
            return new Promise((resolve, reject) => {
                Category.findOne(args)
                    .populate('poster')
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        categories: () => {
            return new Promise((resolve, reject) => {
                Category.find({})
                    .populate('poster')
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        }
    },
    Mutation: {
        addCategory: (root, { name, poster }) => {
            const category = new Category({ name, poster });

            return new Promise((resolve, reject) => {
                category.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editCategory: (root, { _id, name, poster }) => {
            return new Promise((resolve, reject) => {
                Category.findOneAndUpdate({ _id }, { $set: { name, poster } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deleteCategory: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Category.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
