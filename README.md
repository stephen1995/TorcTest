# cscChallenge

**How to run scenarios (Headless):**
1. Clone the project
2. Open the project in VS studio go to terminal and run "npm install" command in order to install dependencies
3. Run "npx cypress run" command in terminal

**How to run scenarios from testRunner:**
1. Clone the project
2. Open the project in VS studio go to terminal and run "npm install" command in order to install dependencies
3. Run "npx cypress open" command in terminal
4. When the runner is open click on "E2E Testing option"
5. Select a browser to run your test cases (Chrome, Edge, FireFox, Electron)
6. Click on "Computer database suite"


**Regarding questions:**

**Steps for how to integrate Cypress test case with Development Pipeline:**

1. Set up Jenkins: Install and configure Jenkins on a server or machine, and create a new Jenkins job.

2. Install Cypress: Install Cypress on the same machine as Jenkins.

3. Write your Cypress tests: Write your test cases using the Cypress API.

4. Version control your tests: Store your Cypress test code in a version control system like Git.

5. Configure the Jenkins job: In the Jenkins job, configure the source code management section to pull the code from your version control system.

6. Add a Build step: Add a build step to run your Cypress tests. This can be done using a shell script that runs the Cypress test command.

7. Publish test results: After the tests are complete, use the Cypress test result files to generate a report that can be published in Jenkins.

8. Notify on build failure: Configure email notifications or other notification methods in Jenkins to notify the team in case of a build failure.

9. Start the pipeline: Trigger the pipeline manually or set up a schedule for it to run automatically.

These are the high-level steps to integrate Cypress test cases into a development pipeline using Jenkins. The exact steps may vary based on your specific setup and requirements.


**How this testing framework fits into SDLC?**

We can integrtate Cucumber in the feature so we can start creating test cases in early phases of the sprint and then start with automation. At the end of the sprint we can run all our test
cases to see if everthings goes well.
