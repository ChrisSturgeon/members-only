# Members Only

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Concepts and Ideas Learnt](#concepts-and-ideas-learnt)
- [Areas to Improve](#areas-to-improve)
- [Contact](#contact)

## Overview

A messaging board where users can create accounts and post text messages. Anyone can view the messages, but only those with accounts can see which user posted each message. The motivation behind this project was to get to grips with the basics of user authentication and security in Express.

View the live project [here](https://members-only-production-c868.up.railway.app/messages/all) and view the project guidelines [here](https://www.theodinproject.com/lessons/nodejs-members-only).

![Front page screenshot](/public/images/screenshot.jpg 'IMG DESCRIPTION')

### Built With

- [Express](https://expressjs.com/)
- [Passport JS](https://www.passportjs.org/)
- [Pug](https://github.com/pugjs/pug)
- [Mongoose](https://mongoosejs.com/)
- CSS
- HTML

## Features

- Users can create their own accounts and post messages.
- Server-side rendering is used to anonymise users for anyone outside _the club_ i.e. not logged-in.
- Standard users can delete their own posts, whilst admin users can delete any post.
- Passwords are salted and hashed before with the help of [brcrypt.js](https://www.npmjs.com/package/bcryptjs).

### Concepts and Ideas Learnt

- How to use **LocalStrategy** in **Passport JS** middleware to create accounts, log-in, log-out and maintain a logged-in state with session cookies and serialization.
- How to **salt and hash** passwords with bcrypt.js.
- **Conditional rendering** by authenticating HTTP requests.
- How to use environment variables to hide sensitive data, such as the MongoDB connection string.

### Areas to Improve

With more time I would have liked to have implemented more features and improved others, such as:

- Allow users to update posts.
- Store message document IDs within user models, to implement a _see all messages by this user_ functionality.
- Use more Javascript within the rendered pages to make the user experience more interactive.

## Contact

- sturgeon.chris@gmail.com
- [www.chrissturgeon.co.uk](https://chrissturgeon.co.uk/)
- [LinkedIn](https://www.linkedin.com/in/chris-sturgeon-36a74254/)
