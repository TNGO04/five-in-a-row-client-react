<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<h1 align="center">Five In A Row</h1>
<div align="center">
  <h3>A Game like Tic-Tac-Toe, but you need Five In A Row!</h3>
  
  Visit web app <a href="http://five-in-a-row-react-client.s3-website-us-east-1.amazonaws.com/">here</a>
</div>

<br/>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#description-and-demo">Demo</a>
    </li>
      <li>
      <a href="#usage">Usage</a>
    </li>
    <li><a href="#how-i-build-this">How I Build This</a>
          <ul>
        <li><a href="#ux-prototype">UX Prototype</a></li>
        <li><a href="#back-end-server-and-database">Back End</a></li>
        <li><a href="#front-end-client">Front End</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
          <li>
      <a href="#acknowledgements">Acknowledgements</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![React App ScreenShot](https://user-images.githubusercontent.com/87917284/214201506-f633c279-228c-4a10-9a26-13b3ac8ca487.png)

Five In A Row, also known as Caro, is a popular Vietnamese logic game. The game rule is similar to Tic-Tac-Toe; however, a player needs 5 move in a row to win instead of 3. The board size is 20-by-20, much larger than the Tic-Tac-Toe board. Players take turn placing moves on available spaces on a grid, and whoever reach 5 moves in a row first win the game. 

In this project, I developed a web-based version of the game. Users can sign up, and then log into the web app to play games against other players or against an AI. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With
* ![JavaScript]
* ![Spring]
* [![React][React.js]][React-url]
* ![Redux]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* ![Mongo-DB]
* ![AWS]
* ![Figma]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
* UX Prototyping with Figma
* Responsive Design with Bootstrap
* Event listeners and handlers
* Document Object Model (DOM) manipulation
* User sign up and log in functionality
* Full CRUD functionality
* RESTful API for back-end by Spring Boot
* Websocket for real-time game updates
* MongoDB database

## Description and Demo

### Landing Page
<img width=800 src="https://user-images.githubusercontent.com/87917284/214220864-fa235ea7-973d-4d32-9ade-15f64eb29c13.png"/>

### Landing Page after Log In
<img width=800 src="https://user-images.githubusercontent.com/87917284/214221014-7bfe3d1e-0411-46f3-b830-45afe9f8b508.png"/>


### Game Page
<img width=800 src="https://user-images.githubusercontent.com/87917284/214221333-c4c55a8d-f24a-45ad-96fa-e350e772e6c7.png"/>

### Demo Game against AI
[Demo Game](https://user-images.githubusercontent.com/87917284/214222186-a49ef5f8-332d-4fd2-a126-e53c376f34ab.webm)

## Usage

Project deployed [here](http://five-in-a-row-react-client.s3-website-us-east-1.amazonaws.com/).

User can sign up for an account, then use that account to log-in and play a game! If you don't want to sign up, you can use this credentials to log in:
```
Username: guest
Password: 12345
````

After logging in, you can start a Player-versus-Player game and wait for another player to join with the provided game Id. Alternatively, you can play a game against the game AI. 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How I Build This

### UX Prototype
Figma is a super awesome(!) tool that can be used to build a quick prototype for how the web app is supposed to look and behave. Coming from a design backround, I have always wanted to learn Figma, and this was a great opportunity to use Figma to sketch out my websites and design its interactions with users. 

<img width=600 src="https://user-images.githubusercontent.com/87917284/214223595-cfceaebd-0012-43f4-a76f-2e2b8bb56feb.png"/>


Check out the Figma Prototype [here](https://www.figma.com/proto/0MsphlkjcvhPfo30Bv7AoN/FiveInARow?node-id=2%3A3&starting-point-node-id=2%3A3).

### Back-End Server and Database
Check out the repo and read more about the back-end and how the AI is implemented [here](https://github.com/TNGO04/five-in-a-row-server-java).

I initially built a console-based version of the game to practice Object-Oriented Design and to have a try at implementing a game AI. Once I decided to deploy the game onto the web, Spring Boot is a logical solution to building the back-end using my existing code.

The game AI was originally implemented using minimax algorithm. However, for larger decision space (such as a 20-by-20 gameboard) and complex games, this can be very computationally intensive. Therefore, I implemented specific algorithms to significantly reduce the decision space, and designed my own utility function to implement a depth-limited minimax search instead. I am really proud of incorporating my own understanding of the game into designing a better AI, so feel free to read more about its implementation in the link above. 

#### Features:
* REST API to perform game and user services
* WebSocket server providing two-way communication for real-time game updates
* MongoDB to store game and user data
* AI player implemented using depth-limited Minimax algorithm

#### Sequence Diagram:
![Sequence diagram](https://user-images.githubusercontent.com/87917284/214379684-4f468415-fb10-47a1-b391-9e5510ee2e32.png)



### Front-End Client


#### Features:
* Single-Page Application (ReactJS and React Router)
* Responsive Design (Bootstrap)
* State Management (Redux)
* HTTP requests and DOM Manipulation (JavaScript)
* Real-time game updates (WebSocket)

#### SPA Demo
[UX Walkthrough](https://user-images.githubusercontent.com/87917284/214229330-676aef29-7b8f-470c-b6ce-4866f5045b17.webm)



### Deployment
This project was deployed using AWS:
* Spring Boot Server on Amazon EC2
* React Client stored using Amazon ES3 and distributed using CloudFront

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgements
1. Back-end REST API based upon [this tutorial](https://www.youtube.com/watch?v=XwQJRfv9Mfg) on implementing Server and WebSocket in SpringBoot
2. [Web Development Course](https://www.youtube.com/watch?v=lyPmK9cO_ZU&list=PL_GGiAMracOUjPUjIbmrD6WIPeOJQgozq) by Professor Jose Annunziato
3. [README template](https://github.com/othneildrew/Best-README-Template) 
4. [Artificial Intelligence course](https://cs50.harvard.edu/ai/2020/) by Harvard University



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Spring]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/projects/spring-boot
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Mongo-DB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[AWS]: https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white
[Figma]: https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
