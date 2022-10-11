
# SEI Project 4: Album Of the Year '22

So, this was project 4 of General Assembly’s SEI course and the final project we embarked upon as a cohort. The challenge set was to make a full stack web application in 7 days utilising our new knowledge in Django backend development. For this project, I chose to build a music publication website where users could view albums from the last year, curated and ranked in order of greatness. Users may also add their own reviews and add albums to their ‘playlist’ and link to their Spotify. 



## Demo

https://albums-of-the-year.herokuapp.com/



## Timeframe & Working Team

This project was a solo project. I had 7 days to plan, execute and deploy.


## Tech Stack

**Frontend:** 
- JavaScript (ES6)
- HTML
- CSS
- SASS
- React
- React-bootstrap
- MUI
- cloudinary-React

**Backend:**
- Python
- Django
- Tableplus
- PostgreSQL

**Dev Tools:** 
- VS Code
- Google Fonts
- Google Dev Tools
- Insomnia
- Excalidraw
- GitHub







## Project Brief

Project #4: 
​

​
- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.




## Planning


After deciding on the theme for my project, I used Excalidraw to wireframe the frontend design and lucid to map out backend SQL relationships.
A link to the wireframe can be found here:

[![Excalidraw](https://res.cloudinary.com/dqcowm72f/image/upload/c_scale,w_102/v1665425227/Readme%20projects/0aee6643aa17c85443cc919f4b293e0986_pvbefd.png)](https://excalidraw.com/#json=xDJzusLaV0tY9UlBffRUq,tfTQOj6H4yqId_Q-Z3kS1w) 

A link to the ERD can here found here:

[![Excalidraw](https://res.cloudinary.com/dqcowm72f/image/upload/c_scale,e_shadow:40,w_114/v1665474715/Readme%20projects/th-4074672046_tupumw.jpg)](https://lucid.app/lucidchart/98bde32c-908f-4ada-9f13-102a41aeb53a/edit?viewport_loc=-124%2C211%2C1860%2C856%2C0_0&invitationId=inv_d823f981-eb72-4ef6-9f14-bc8859fd6a67#) 

## Build/Code Process

#### Day 1 

Firstly, I listed all of the back-end and front-end features that I wished to implement in my app using Excalidraw for the wireframe and Lucid for backend ERD. 

#### Excalidraw wireframe:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665475241/Readme%20projects/Screenshot_2022-10-11_at_09.00.34_qvqox5.png)

#### ERD:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665475340/Readme%20projects/Screenshot_2022-10-11_at_09.02.14_lgtosw.png)

I spent the remaining part of the day researching features that the course didn’t include like cloudinary image upload and google auth for google login/signup.

#### Day 2 & 3 
I built the back-end with Python and Django. I created my Django apps and established my models based on my ERD. As an example, here are the models for Album with a ‘many to many’ field for genres. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665475653/Readme%20projects/carbon_22_bjxnlv.png)

#### Day 4  

I added a JWT_Auth directory with views and URLs to allow users to register and login. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665475835/Readme%20projects/carbon_24_vekzxq.png)

#### Day 5 

I worked on front-end styling for the main page component

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665476040/Readme%20projects/Screenshot_2022-10-11_at_09.13.53_omqebs.png)

Each album is dynamically updated with information from the database. Each album image navigates to a detailed view of that album with user reviews and critic reviews. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665476388/Readme%20projects/carbon_26_bh2ji9.png)

#### Day 6 
I created my login and register pages utilising MUI library for forms:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665476474/Readme%20projects/Screenshot_2022-10-11_at_09.21.06_doaieg.png)

I created reviews and updated the reviews components. Update review is prepopulated with the current user’s review via an axios request: 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665476597/Readme%20projects/carbon_27_pym3vd.png)

The placeholder is then set from the data object and rendered as the text fields’ placeholder.

#### Day 7
I worked on a Private Route component to navigate a user without a token to login when trying to leave a review. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665476708/Readme%20projects/carbon_28_tnqaxy.png)

This private route wraps around the add reviews component in the router. If the user is not logged in and tries to leave a review, they are sent to the login page:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665477031/Readme%20projects/carbon_29_cmnddo.png)

I also added an Uploading component to allow users to upload a profile image. This posts a request to the cloudinary API where images are hosted and this http link is added to the database for that user. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665477169/Readme%20projects/carbon_30_mqubsz.png)
## Challenges
I found it challenging working on this project solo. Previously in our group projects we had the ability to go into more detail on singular components and were able to move more quickly in order to get functionality completed more quickly. However, working solo I felt like any dead ends or issues were more detrimental to progress and getting stuck on anything took longer to resolve and there was some difficulty moving quickly, which was at times frustrating. I much prefer working in a team as it’s a much more enjoyable experience. 
## Wins

I’m really pleased to have created my first Django/Python/React full stack application. Although it was tough working solo, the design and CRUD functionality are strong and it manages to have the feel of a music publication site. 
Navigating through it feels tactile and responsive with the help from react libraries such as Bootstrap and MUI.  

## Lessons Learned
- I learned about Styled components.
- I learned how to use React libraries to create a much better UI.
- I’ve got a much better understanding of authentication.
- I started building the desktop version, then I had to stop and rebuild for mobile size first which was a learning experience to always start building on mobile size.

## Bugs

Currently, there is an issue viewing the detailed view due to auth middleware having a bug.
## Future Improvements

- Embed Cloudinary’s widget to allow users to edit and upload multiple images at a time
- Improve Error handling messages
- Google authentication


