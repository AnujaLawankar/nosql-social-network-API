

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

const comments = ['Excellent', 'Good', 'Worst', 'Bad'];

const statments = ["Time is money", "Slow and steady wins the race", "Do one thing every day that scares you.", "It's no use going back to yesterday, because I was a different person then.", "Everything you can imagine is real", "Do what you feel in your heart to be right―for you'll be criticized anyway.", "Practice makes man perfect"

];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate random reactions

const getRandomReactions = (numReactions) => {
    const results = [];
    for (let i = 0; i < numReactions; i++) {
        const reaction = {
            reactionName: getRandomArrItem(comments),
            score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
        };
        results.push(reaction);
    }
    return results;
};

module.exports = { username, getRandomReactions, statments };
