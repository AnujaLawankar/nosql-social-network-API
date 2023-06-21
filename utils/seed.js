

const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { username, getRandomReactions, statments } = require('./data');

connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected');
    // Drop existing Thoughts
    await Thought.deleteMany({});
    // Drop existing users
    await User.deleteMany({});
    // Create empty array to hold the users
    const users = [];
    // Loop through the usernames and create users
    for (let i = 0; i < username.length; i++) {
        const user = {
            username: username[i],
            email: `${username[i].replace(/\s/g, '').toLowerCase()}@gmail.com`,
            thoughts: statments[i],
            friends: [],
        };
        users.push(user);
    }

    // Add users to the collection and await the results
    await User.collection.insertMany(users);


    const thoughts = [];

    for (let i = 0; i < username.length; i++) {
        const thoughtText = statments[i];
        const createdAt = new Date();
        const reactions = getRandomReactions(4);

        thoughts.push({
            thoughtText,
            createdAt,
            username: username[i],
            reactions,
        });
    }


    // Add Thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughts);
    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
});




