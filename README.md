# cs465-fullstack
CS-465 Full Stack Development with MEAN

<b>Architecture</b>

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

- Throughout this project, we had the opportunity to explore front-end development through multiple methods. Starting, we developed a simple web application using Express HTML. Using the HTML provided, we converted this to the HBS (Handlebars) view. The HBS view allowed for a more simple and more efficient approach to displaying our data. Javascript was the programming language we used to create the routing and structure. Using Javascript we could dynamically add elements to our webpage. The single-page application provided an alternative format to organize our travel data. The SPA allowed the user to add, edit, and view travel data without the need to refresh the site while navigating from page to page. SPA's streamline navigation and make it simple for users to find needed functionality. 

Why did the backend use a NoSQL MongoDB database?

- The backend utilized a NoSQL MongoDB database as it allows for a highly flexible and scalable document structure. NoSQL databases don't require predefined schemas and can support any type of data. This made it possible to have a reliable database to perform our CRUD operations.

<b>Functionality</b>

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

- JSON is a data format that can be used to communicate between the server and the computer. Objects can be stored in JSON and then pulled from using Javascript. In this project, we demonstrated this by creating the trips.json file that held our trip data. This backend data was used to display travel information on the front end. 

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

- An important instance in the full stack process where I refactored code was the switch to Angular. Angular was the framework we utilized to create a SPA from our single web application. The format of this framework allowed for our travel data to be separated by component. We had components for the travel card, adding trips, editing trips, etc. Having everything organized by component helped me a lot with visually understanding the elements included in the design. Reusable user interface components make it simple to add recurring functionality and format when the application is built upon. It is also helpful for future projects that require similar designs. 
 
<b>Testing</b>

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

- Endpoints could be tested through third-party applications such as POSTMAN or through a localhost web address. I could check to see if data was available at an endpoint through either option, an error or nothing would tell me if the application is not working as expected. POSTMAN was helpful for taking in security measures. It was key to understanding if the user could access an endpoint if they input the proper authentication details. With this added layer of authentication, users with higher levels of access could call add and edit methods. 

<b>Reflection</b>

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

- This course was critical for teaching me about the MEAN stack and providing me with the skills necessary to further explore full-stack development. I learned a lot about different frontend and backend technologies, as well as how they can interact to create a full-functioning site. I am looking forward to my next full-stack course and am curious to know if we will work with different technologies/stacks to achieve different functionality.
