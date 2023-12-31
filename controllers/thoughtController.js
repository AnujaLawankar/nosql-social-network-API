
const { Thought, User } = require('../models');

module.exports = {

    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));


    },

    getSingleThought(req, res) {

        Thought.findOne({ _id: req.params.thoughtId })
            .select('-_v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)

            )
            .catch((err) => res.status(500).json(err));

    },
    //create thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);

            });
    },


    // delete thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with that ID' });
                }
                return User.updateMany(
                    { _id: { $in: thought.users } },
                    { $pull: { thought: req.params.thoughtId } }
                );
            })
            .then(() => {
                res.json({ message: 'Thought and related users deleted' });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    updateThought(req, res) {

        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $set: req.body

            },
            {
                runValidators: true, new: true
            }

        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id' })
                    : res.json(thought)

            )
            .catch((err) => res.status(500).json(err));


    },
    // Add an Reaction to a student
    addReaction(req, res) {
        console.log('You are adding an reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought found with that ID :(' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Remove reaction from a thought
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought found with that ID :(' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
};