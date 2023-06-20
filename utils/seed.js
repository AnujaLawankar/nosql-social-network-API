const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomReactions } = require('./data');
connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected');
    // Drop existing Thoughts
    await Thought.deleteMany({});
    // Drop existing users
    await User.deleteMany({});
    // Create empty array to hold the users
    const users = [];
    // Loop 17 times -- add users to the users array
    const usedUsernames = new Set();

    for (let i = 0; i < 15; i++) {
        // Get some random reaction objects using a helper function that we imported from ./data
        const reactions = getRandomReactions(15);
        let username = getRandomUsername();
        let email = username.split(' ')[0];

        // Check if the username is already used
        while (usedUsernames.has(username)) {
            username = getRandomUsername();
        }

        usedUsernames.add(username);


        users.push({
            username,
            email,

            reactions,
        });
    }
    // Add users to the collection and await the results
    await User.collection.insertMany(users);
    // Add Thoughts to the collection and await the results
    await Thought.collection.insertOne({
        thoughtName: 'Practice makes man perfect',
        inPerson: false,
        users: [...users],
    });
    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
});






