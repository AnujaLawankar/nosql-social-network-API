const { ObjectId } = require('mongoose').Types;


const { User, Thought } = require('../models');

const headCount = async () => {
    try {
        const count = await User.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    //get all users
    getUsers(req, res) {

        User.find().populate(
            {

                path: 'thoughts',
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: 'reactions',
                    model: 'reaction',
                    select: '-__v',
                },


            }).populate('friends', '-__v')
            .then(async (users) => {

                const userObj = {

                    users,
                    headCount: await headCount(),

                };

                return res.json(userObj);

            })
            .catch((err) => {

                console.log(err);
                return res.status(500).json(err);

            });
    },

    // get a single user

    getSingleUser(req, res) {

        const { userId } = req.params;


        // Check if the userId is a valid ObjectId
        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        // TODO: populate thooughts and friends
        User.findOne({ _id: userId }).populate("thoughts").populate("friends")
            .select('-_v')
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' });
                }
                return res.json({ user });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });

    },

    //create a user

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));

    },

    //delete a users
    deleteUser(req, res) {

        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => {
                return !user
                    ? res.status(404).json({ message: 'No sunch user exists' })
                    : Thought.findOneAndUpdate(
                        { users: req.params.userId },
                        {
                            $pull: {
                                users: req.params.userId
                            }
                        },
                        { new: true }

                    )
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({

                        message: ' User deleted. But thoughts not found'
                    })
                    : res.json({ message: 'User successfully deleted ' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            }
            );
    },
    //Update user

    updateUser(req, res) {

        User.findOneAndUpdate(
            {
                _id: req.params.userId
            },
            {
                $set: req.body
            },
            {
                runValidators: true,
                new: true
            }
        )

            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: "No user with this id" });
                }
                return res.json(user);
            })
            .catch((err) => res.status(500).json(err));


    },


    //Add an friend to user
    addFriend(req, res) {
        console.log('You are adding an friend');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No users found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Remove friend from a user
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};

