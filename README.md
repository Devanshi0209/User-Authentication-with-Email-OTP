# User-Authentication-with-Email-OTP
This is a mobile application made with ReactJS, Express API(in Node.js framework) and MongoDB in AWS. Its users can sign up with email id and password and will then receive an OTP on their email address to verify it. Subsequently they can sign out and sign in again with valid credentials. 

## INTRODUCTION
The usage of apps is increasing day by day which makes it important for a developer to correctly authenticate users before they move on the mainflow. Fake IDs which do not exist are also being used regularly by malicious attackers. This app depicts a proper authentication system for users where an email OTP is sent to the registered email id during signup to verify it so there are no fake IDs in the system.

## TECHNOLOGIES

React --react@16.9.0

Expo --expo@36.0.2

Express --express@4.17.1

Mongoose --mongoose@5.8.11

Jsonwebtoken --jsonwebtoken@8.5.1

Bcrypt --bcrypt@5.0.0

Ngrok- 2.3.35

## USAGE 
First the frontend is developed with ReactJS and we can run the app using React Metro Bundler on our phones or simulators. React Library axios is used to send the client HTTP requests to the backend REST API. The Express API developed in Node.js is listenting at port 3000 for these requests and handles and processes them in sync with the MongoDB deployed on AWS. Mongoose Library is used by the API to create databses in the MongoDB cluster and connect to them. Validation is done in the app with presence and absense of json web tokens which are assigned to each user at sucessfull signup/signin.
Video Demonstration of Authentication: https://drive.google.com/file/d/1-vRuXqNdekTIdsKUIgJbMabbNb_JfxAp/view?usp=sharing 
