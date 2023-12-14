### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  Json Web Token, which represents a secure object that can be sent through the web and the receiver can know the sender, the data inside without losing privacy and remain private.   It has three parts, the header, payload, and signature encoded. 

- What is the signature portion of the JWT?  What does it do?
  The signature portion includes the name or identifier of who sent that request.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  YES because it is encoded in base64

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  with bcrypt, you can use validation and hashing of private information 

- Compare and contrast unit, integration and end-to-end tests.
  Integration test talk about how the different pieces work together which is similar to end to end but end to end is more high-level and deals with user flows while integration is   a little more segmented just identifying how pieces of app work together

- What is a mock? What are some things you would mock?
  A mock is object created by the tester to simulate a real-life object that is hard to come by in a test setting. For example, an API call response. The tester would mock the response instead of actually making an API call. You can mock usernames, passwords, API calls, objects that don't need specific data can be mocked.  

- What is continuous integration?
  CI is a software development procedure that involves small changes in code and frequent updates/pushes to the codebase instead of large updates. Jenkins, Travis are examples of packages that attach to github and help programmers test, and pass or reject pushed code based on the test results.

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?
  TDD is a software development philosophy that begins by writing tests first which would FAIL and then writing code to make the test pass. The drawbacks of this philosophy/method    is that it takes development longer. They are hard to write. Tests need to change with the requirements. And often the whole team needs to jump in. The benefits of this method      are the final product may be better, forces code optimization, testing becomes easier at latter stages of development. Code is tried and true so they can be reused elsewhere. 

- What is the value of using JSONSchema for validation?
  The JSONSchema replaces many headaches of writing your own code to troubleshoot inaccuracies, missing data, bad data in your json. JSONSchema does/validates it for you.

- What are some ways to decide which code to test?
  Test important pieces in the code. Test for breakpoints. Test to ensure reliability.

- What does `RETURNING` do in SQL? When would you use it?
  Returning returns the SQL query changes to you, the coder in addition to the query's program 

- What are some differences between Web Sockets and HTTP?
  Websockets are bi-directional while HTTP is uni-directional. HTTP has a request/response cycle while websockets can communicate bi-directionally. Video games need continuous        updates through the screen so a HTTP cycle would be too long and slow. Websockets are bi-directional so they don't wait for a response after a request such as with HTTP
  

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Flask seems more "meaty" and Express seems even less opinionated than Flask. Express seems to be harder to pick up but only goes so deep in complexity while Python's learning       curve is much easier but can go deep and complex in its advanced stages. I prefer Flask in the short run but think that Express tests your "smarts" more than Python bc of its       steeper learning curve. So Express most of the time and Python less frequently
