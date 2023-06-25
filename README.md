## Nosql-social-network-API


## Description:-

1.  Nosql-social-network-API is a API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

2. Used Express.js for routing, a MongoDB database, and the Mongoose ODM.

3. If user enter the command to invoke the application,
THEN server is started and the Mongoose models are synced to the MongoDB database.

4. If user open API GET routes in Insomnia for users and thoughts,
THEN the data for each of these routes is displayed in a formatted JSON.

5. If user test API POST, PUT, and DELETE routes in Insomnia,
THEN user will able to successfully create, update, and delete users and thoughts in database.

6. If user test API POST and DELETE routes in Insomnia,
THEN user will able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Table of Contents

 *  [Installation](#installation)
 *  [URLs](#URLs)
 *  [Assets](#Assets)
 *  [Testing](#testing)



## Steps followed:-

1. First created the "New Repository" i.e "Nosql-social-network-API" in GitHub.

2. In GitBash  navigate to the repository and  to clone "Nosql-social-network-API" repository. Using "cd" command.

3. Then used "git clone <ssh key>" of "Nosql-social-network-API" and clone the repository.

4. Then  created Routes, javascript, models, index.js, gitignore, package.json, and README files using touch command.

5. Run "code ." command to open VS.

6.  Executed the code by installing npm install command.

7. Created  database "usersThoughtDB" in schema through connection.js file

8. Write the code and run by using nodemon index.js command. 

9. After that, added code to GitHub by using "git add -A" command on Gitbash. 

10. Commit the code and add commit message by using "git commit -m <message>".

11. Push the code by using "git push origin main".

12. All the final code push in my "Nosql-social-network-API" repository.


 

## URLs:-
Here, you can find the walkthrough video of "Nosql-social-network-API" here:- 

https://drive.google.com/file/d/1C2xQiTBML1Smlbzo1gskzcLlVpj9DJaR/view



Here, you can find the GitHub URL:-

https://github.com/AnujaLawankar/nosql-social-network-API


## Installation

1. Install pacakges by npm install
2. Import Mongoose package.
3. Import express package
4. Import all other required data, routes, connections.



## Testing

1. Stop server by using command "ctrl c"
2. Now restart server by using command "nodemon index.js"



## Assets:-

The following images demonstrates the application's REST API's appearance:

The MongoDb compass having all collections

1. To GET all users.

![Website](./assets/images/screeenshot1.png)


2. To GET user by id.
![Website](./assets/images/screeenshot2.png)

3. To CREATE a user.
![Website](./assets/images/screeenshot3.png)

4. To UPDATE a user by id
![Website](./assets/images/screeenshot4.png)

5. To DELETE a user by id.
![Website](./assets/images/screeenshot5.png)


6. To add friend with user.
![Website](./assets/images/screeenshot13.png)

7. To remove a friend from user.
![Website](./assets/images/screeenshot14.png)

8. To GET all thoughts.
![Website](./assets/images/screeenshot6.png)

9. To GET thought by id.
![Website](./assets/images/screeenshot7.png)

10. To CREATE a thought.
![Website](./assets/images/screeenshot8.png)

11. To UPDATE a thought by id
![Website](./assets/images/screeenshot9.png)

12. To DELETE a thought by id.
![Website](./assets/images/screeenshot10.png)

13. To add reaction with thought.
![Website](./assets/images/screeenshot11.png)

14. To remove a reaction from thought.
![Website](./assets/images/screeenshot12.png)

15. MongoDB database for thoughts
![Website](./assets/images/screeenshotdb1.png)

16. MongoDB database for users
![Website](./assets/images/screeenshotdb2.png)


## License

 MIT  License  ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)