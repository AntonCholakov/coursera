import Poster from '../../models/Poster';

export default {
    Query: {
        poster: (root, args) => {
            return new Promise((resolve, reject) => {
                Poster.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        posters: () => {
            return new Promise((resolve, reject) => {
                Poster.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addPoster: (root, { url }) => {
            const poster = new Poster({ url });

            return new Promise((resolve, reject) => {
                poster.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editPoster: (root, { _id, url }) => {
            return new Promise((resolve, reject) => {
                Poster.findOneAndUpdate({ _id }, { $set: { url } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deletePoster: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Poster.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
