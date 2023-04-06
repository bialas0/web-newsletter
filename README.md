# node.js web-newsletter

## ✨ What it does...
#### 1. Takes name, surname, & email input. 
#### 2. Creates a server request that handles the form input. 
#### 3. The server-side script saves the input into the database, in this case, a .json file. 
#### 4. It has cool and responsive UI. 

## ⚙️ How it works...
### Node.js packages
#### ➡ http
#### ➡ fs
#### ➡ path
### Server-side code
![src](https://user-images.githubusercontent.com/118835576/230492974-80bba694-6b4d-4761-b656-11756618b90b.png)
### Code Explained
<img src="https://user-images.githubusercontent.com/118835576/230493323-08d74ac3-5e6a-4c99-921a-8acf69d57cad.png" width="400">

The constant above defines which port the server will run on, in this example it is the standard port 3000. 

<img src="https://user-images.githubusercontent.com/118835576/230494373-283bbfd0-5802-4f7f-8098-e275061634f1.png" width="650">

The function named 'server' utilises the http package. 'http.Server' initialises the creation of the server, and then continues to create two parameters named 'req' (request) and 'res' (response), all this does is set a basis for handling ingoing and outgoing traffic. 

<img src="https://user-images.githubusercontent.com/118835576/230495751-e27f2add-9d0a-4e6a-a7a7-2f075e5d9529.png" width="500">

'url' is a string. it creates a request The first line of code checks if the req.url property is undefined or falsy, which would indicate that the client did not specify a URL in the request. If this is the case, the url variable is set to '/index.html'. 

The second line of code checks if the url variable is equal to '/'. If it is, then it is reassigned to '/index.html'. This is necessary because many web servers will treat requests to '/' as requests to '/index.html', so this code ensures that the correct file is served in this case. 

<img src="https://user-images.githubusercontent.com/118835576/230496170-45501d99-3da5-45df-b512-74d53a8f79b9.png" width="450">

The first if statement checks if the url ends with the string '.html'. If it does, it sets the 'Content-Type' header of the response to 'text/html'. This tells the client that the response contains HTML content, and the browser should render it as such. 

The second if statement checks if the url ends with the string '.css'. If it does, it sets the 'Content-Type' header of the response to 'text/css'. This tells the client that the response contains CSS content. 

By setting the 'Content-Type' header, the server ensures that the client knows how to interpret the response content. This is important as different types of content require different rendering/ processing. Without setting the 'Content-Type' header correctly, the client may not be able to render or process the content properly. 

<img src="https://user-images.githubusercontent.com/118835576/230496897-24aea44b-b70e-4c80-af2d-e649589c7bb7.png" width="600">

This constant utilises the Node.js special variable '__dirname', which specifies the current directory that the client is running through. The 'path.join()' method joins the current directory string with the 'public' and 'url' strings. All this is redirect the path to be something along the lines of: 'X:\server\public\index.html'. 

<img src="https://user-images.githubusercontent.com/118835576/230497765-314e21c5-d3a9-45ab-b042-e58f36e6a594.png" width="700">
