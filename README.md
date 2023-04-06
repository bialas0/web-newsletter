# node.js server-side web-newsletter

## 📜 Index
#### 📷 Screenshots        (gui screenshots)
#### ✨ What it does...    (features)
#### 🛠️ Notes              (developments)
#### ⚙️ How it works...    (src code)

## 📷 Screenshots
### Desktop & Mobile
<img src="https://user-images.githubusercontent.com/118835576/230505043-c5c31b93-e343-45e6-970c-e24e0bf43426.png" width="1000">
<img src="https://user-images.githubusercontent.com/118835576/230505071-de576730-947e-4099-bf0a-77b7bd8e6ec9.png" width="300">

## ✨ What it does...
#### 1. Takes name, surname, & email input. 
#### 2. Creates a server request that handles the form input. 
#### 3. The server-side script saves the input into the database, in this case, a .json file. 
#### 4. It has cool and responsive UI. 

## 🛠️ Notes
### This project is still under development... 
The project offers a responsive and compact UI, with a form that takes in inputs (name, surname & email). 

### I am still working on: 
#### ➡ Handling form input via the server. 
#### ➡ Storing submitted data in a .json file. 
#### ➡ Refining the grid generation system  responsiveness. 

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

<img src="https://user-images.githubusercontent.com/118835576/230496897-24aea44b-b70e-4c80-af2d-e649589c7bb7.png" width="700">

This constant utilises the Node.js special variable '__dirname', which specifies the current directory that the client is running through. The 'path.join()' method joins the current directory string with the 'public' and 'url' strings. All this is redirect the path to be something along the lines of: 'X:\server\public\index.html'. 

<img src="https://user-images.githubusercontent.com/118835576/230497765-314e21c5-d3a9-45ab-b042-e58f36e6a594.png" width="800">

The first argument passed to 'readFile' is the 'filePath', which is a string representing the path to the 'public' file. The second argument is a callback function that will be called once the file has been read.

The callback function takes two parameters: err and data. The 'err' parameter is an object of the built-in 'NodeJS.ErrnoException' or null, which represents any error that occurred while reading the file. If there was no error, err will be null, and the execution will be successful.

The 'data' parameter is a 'Buffer' object that contains the contents of the file that was read. If there was an error while reading the file, data will be undefined as it could not have been processed.

The purpose behind this function is to read the file contained inside the 'filePath' constant. In this case, the server is reading the 'index.html' page file. It also incorporates error handling through the use of the Node.js built-in objects. 

<img src="https://user-images.githubusercontent.com/118835576/230498105-90ed8691-0d2e-4e94-8b9f-05080310e2d0.png" width="300">

The above if else statement checks for any errors of type 'ErrnoException', and if there is an error of this nature present, the reponse will be as follows: 

Case 1 (err): The 'writeHead()' method will set a status code of '404', deeming the request unsuccessful. It will also set the page content to '404 Not Found' using the 'end()' method.

Case 2 (null): On the other hand, if there is no errors present, the status code of '200' will be set, rendering the request successful, sending backa positive response. The 'data' parameter can now be fed into the response, loading the DOM content within the 'index.html' file. 

<img src="https://user-images.githubusercontent.com/118835576/230498231-7942b550-1fae-4557-aedc-240674911643.png" width="550">

This snippet of code executes the code embedded within the 'server' function, making use of the 'listen()' method. It takes in the port number and the uses an arrow function to log and confirm which port the server is running on, in this case port number 3000. 
