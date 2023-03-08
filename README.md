# Dall - E Clone
Here I made a simple dall e clone with the help of some very popular technologies today, such as MongoDB, Express JS, React, Node Js or commonly called MERN-Stack, with the help of [Cloudinary](https://cloudinary.com/) as image storage to save hosting storage space significantly.

# Installation

- Create a folder to store the following 2 repositories
``` 
git clone https://github.com/Caknoooo/dall-e-clone-client.git
cd client
npm install


git clone https://github.com/Caknoooo/dall-e-clone-server.git
cd server
npm install
```


- Create an .env on folder server file and fill it with:
```
MONGODB_URL = 
OPENAI_API_KEY = 
CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET = 
```
you can get the API code from the official website

- Change directory to client folder and replace the fetching api destination with localhost:8080

After you replace all fetch urls taken, then you just have to run it

```
npm run dev -> for client side
npm start -> for server side
```

# References
[Cloudinary](https://cloudinary.com/)

[MongoDB](https://mongodb.com/)

[OpenAI](https://openai.com/api/)