const username = [
    'Anuja',
    'Shobha',
    'Janhavi',
    'Agniv',
    'Nikhil',
    'Clark',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];
const comments = [
    'Excellent',
    'Good',
    'Worst',
    'Bad',
];

//get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//get a random username

const getRandomUsername = () => {
    const uniqueIdentifier = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${getRandomArrItem(username)}${uniqueIdentifier} ${getRandomArrItem(username)}`;
};

//// Function to generate random reactions that we can add to thought object.
const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionName: getRandomArrItem(comments),
            score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomReactions };
