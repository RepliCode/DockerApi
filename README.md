# Docker API for RepliCode

## Description

This is a simple dockerized server set up to do three things. Accept post request with code represented as a string. Evaluate the code from the recieved post request. Lastly, respond to the post request with the stdout/stderr of the evaluated code or an error message. We used this server to handle code evaluations for our web app [RepliCode](https://github.com/RepliCode/RepliCode) a content creation platform for creating interactive coding tutorials. Check it out!

## Set up

First, run `git clone https://github.com/RepliCode/DockerApi.git` in your terminal.
Then, run `npm install` to install all of the required dependencies
Now we're all set to move forward.

## Running the Server locally without Docker 

run `npm run start` and the server should be listening on [http://localhost:3000/](http://localhost:3000/)

## Running the Server locally within a docker container

First, you need to have docker locally on your computer. Click [this](https://docs.docker.com/install/) link to download and then follow up wih the [get started](https://docs.docker.com/get-started/) page.

Once, you're all set up you can follow these steps:

Build the docker image with `docker build . -t example:latest`, this creates an image and names it 'example:latest'

After building the image we can use `docker run` on the image we created to create the container and have our containerized server up

Run `docker run -d -p 3000:3000 example:latest` to create the container and have your computer's port 3000 connect to the container's port 3000

Now the server should be listening on [http://localhost:3000/](http://localhost:3000/) just like before.


## Authors

[Chris Augustus Perez](https://github.com/chrisauinmotion)
[Nabil Yafai](https://github.com/na-ya)
[Jon Rosado](https://github.com/johnnybee4e)
[Jessie De La Cruz Santos](https://github.com/jessdelacruzsantos)
