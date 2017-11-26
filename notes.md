To run:
- from top directory (/TheLabChallenge), run 'docker-compose up'
- from a separate terminal tab/window:
  - cd into challenge-frontend directory
  - run yarn start (or npm start)
    - note: CORS is set up to handle localhost:3000. So, ensure that your frontend is running on port 3000 or switch the port in the settings.py file

Devops! -- What I like or dislike about Docker
 Likes: The fact that Docker containerizes the app and bundles all the dependencies together seems super useful for companies with lots of devs and different people touching the files. Packaging everything up means that someone can use it run it without any issues because Docker normalizes everything. The server messages in the terminal are also helpful, and while I didn't always know how to fix a particular problem right off the bat, the server terminal told me clearly what was going on.

 Dislikes: It is a little tough to get a grasp of what is happening with Docker at first, because it is a new way of thinking about how files are served to the web. Reading the documentation and also searching for answers to my questions/roadblocks was interesting at first because I had never dealt with anything like this before. So, I think that there is a bit of a learning curve with Docker.

 Brief RESTful API endpoint explanation:
 - The endpoint in my backend to retrieve the company name is '/companies'. According to RESTful conventions, this calls to the index for all of the companies in the database, which I believe could be argued as both appropriate and inappropriate here. I went off the assumption that this is an internal site in which there will ever only be one company. As such, calling to the index, getting all 1 instances of companies and operating on the one that is returned seems appropriate because we know that there will only ever be one company. I do, however, see the argument that I could (and perhaps should) use a dynamic endpoint of /companies/:id. This, however, seemed over-complicated with routing on the frontend and providing the id of the company to the API call when calling to the index and pulling out index 0 of the returned database object 'array' works just fine.