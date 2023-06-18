<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/FinFinder)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/FinFinder)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/FinFinder)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/FinFinder)


<!-- LeandervanAarde/FikaClothing -->

<!-- HEADER SECTION -->
<h3 align="center" style="padding:0;margin:0;">Leander van Aarde</h3>
<h5 align="center" style="padding:0;margin:0;">200211</h5>
<h6 align="center">FinFinder | 2023</h6>
<h6 align="center"><a href="https://fin-finder-n1mzgwlgh-leandervanaarde.vercel.app/">FinFinder website</a> </h6>
</br>
<p align="center">

  <a href="https://github.com/LeandervanAarde/FinFinder">
    <img src="https://drive.google.com/uc?export=view&id=1QKoFlOOrMXCMDR3Mb9-ysmpokt7q64Tq" alt="Logo" width="140">
  </a>
<!-- https://drive.google.com/file/d/19JkfDgvGLzHQ1AVMvgv9rLTFR0HzJBVq/view?usp=sharing -->
  
  <h3 align="center">Fin Finder | Fish inventory management</h3>

  <p align="center">
Fin Finder is a website where users can manage their own inventory of fish and fish related items. Here you can view and edit your own fish, and if you have enough inventory,  build and craft one of the prebuilt tanks!
    <br />
   <br />
   <br />
<h6 align="center"><a href="https://drive.google.com/uc?export=view&id=14hkEiHzcPIWxUBJUMf3PfueCY7b6r7cy">FinFinder walkthrough</a> </h6>
   <!-- INSERT UP UP -->
    ·
    <a href="https://github.com/LeandervanAarde/FinFinder/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeandervanAarde/FinFinder/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* :tropical_fish: [About the Project](#about-the-project)
* :tropical_fish: [Project Description](#project-description)
* :tropical_fish: [Built With](#built-with)
* :tropical_fish: [Getting Started](#getting-started)
* :tropical_fish: [Prerequisites](#prerequisites)
* :tropical_fish: [How to install](#how-to-install)
* :tropical_fish: [Features and Functionality](#features-and-functionality)
* :tropical_fish: [Concept Process](#concept-process)
* :tropical_fish: [Development Process](#development-process)
* :tropical_fish: [Highlights](#highlights)
* :tropical_fish: [Challenges](#challenges)
* :tropical_fish: [Future Implementation](#peer-reviews)
* :tropical_fish: [Final Outcome](#final-outcome)
* :tropical_fish: [Mockups](#mockups)
* :tropical_fish: [Video Demonstration](#video-demonstration)
* :tropical_fish: [Conclusion](#conclusion)
* :tropical_fish: [License](#license)
* :tropical_fish: [Contact](#contact)
* :tropical_fish: [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->


![image10](https://drive.google.com/uc?export=view&id=1eHEyg7EDosaCBDD3KXpFT8KljRSXceLk)
### Project Description

FinFinder is a full stack MEAN stack project implemented Angular 6, Typegoose, MongoDB Atlas and NodeJS. The aim of the project is to allow users to manage their own inventory of fish and fish related itemsm ultimately giving them the ability to track and keep inventory up to date.

### Built With
* [SASS](https://sass-lang.com/)
* [Angular](https://angular.io/)
* [MongoDb Atlas](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Typegoose](https://typegoose.github.io/typegoose/)

## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.
Ensure that you have the Angular CLI installed on your local machine, you an install it by running the command  `npm install -g @angular/cli`

### How to install

### Installation
Here are a couple of ways to clone this repo:

Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/FindFinder.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/FinFinder.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install / npm i
   ```

4. To get access to the database, go to ```https://github.com/LeandervanAarde/FinFinderServer ```
5. Once in the App, run  ```ng serve --open``` to compile in the browser.

6. Go Clone the FinFinder server on my  <a href="https://github.com/LeandervanAarde/FinFinderServer">Github</a> and run 
    ```npm i ``` to install all the dependancies. Access to the Mongo is restricted and will only be given access to upon request.
</br>
 </br>

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

![image2](https://drive.google.com/uc?export=view&id=1eHEyg7EDosaCBDD3KXpFT8KljRSXceLk)



### Personalised Inventory
Fin Finder creates an empty ivnentory for each user to manage, this means that every user gets access to all the inventory that FinFinder has in its database, however, each users quantity of inventory will be 0 by default and it is up to the user to update the inventory appropriately. This flexibility allows for a more personalised experience for each user.

### Update and view
Users can update inventory based on their inventory that they have and can view individual information about their inventory
*   Fish
    *   View fish compatibility, diet requirements as well as optimal temprature. 
    * View in which of <b>your</b> tanks the fish can be found
*   Decorations, Utilities and Tanks
    * View in which of the prebuilts this item can be used.

### Search Products
Looking for a specific product? Fika has a searchbar that allows users to search for any available product that Fika has on the website. 

### Filter and search
Seeing as the inventory is quite large, users hold the ability to filter their inventory based on the category (fish, decorations, utilities). They can also search their tanks in the My tanks section. 

![image3](https://drive.google.com/uc?export=view&id=13fqsiSfRAUu6tCl278f3IpNFPU5YXa2a)

### Locations
FinFinder considers Fishtanks to be a location where a user can store all their inventory, inventory can be updated in each location and can hold the items that were specififed in the build. 

Users have the ability to craft their own locations based on their inventory, these locations are craftable based on the users inventory and will only become craftable once all the criteria is met.

### No passwords
When users register for their own account, they are required to set up 3 security questions which will validate them upon logging in. Logging in will require users to answer one of these 3 questions.

### Deployment
This project has been deployed on <a href = "https://vercel.com/dashboard">Vercel</a>
and the backend on <a href = "https://render.com/">Render</a>

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. <br>

The goal of this application was to create an experience that felt personalised to each user to some extent, making it as clean as possible.  Considering the limit time constraint I was limited to my MVP (minimal viable product), I wanted to build an application which I could expand on if I needed to while learning the fundamentals of ANGULAR. 
<br> 
Throughout the conceptual process of this application , I had started taking more consideration of components and how the application should be structured, this would make it easier for myself to create reusable component and for future developers to uderstand how the project is structured. This would make the entire process smoother, I had also learned about MONGODB Atlas, a NoSQL database that would be used alongside NODE and Express. 

Throuhgout the conceptual prcess, I had to carefully consider the structure of data while designing a front end that was attractive and informative, while exciting. Considering aspects such as the backend allowed me to identify where reusable components could be implemented, how services would be used and determine how my models would be setup. While there were challenges throughout the project, the conceptual process set a great fundamental start.


### Ideation

![image7](https://drive.google.com/uc?export=view&id=15Ak4f3V8ks2v-ODCgxR1PhZh5V9bj792)


<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

####    Front end Implementation

* Implementation of models were used to structure my data appropriately ensuring that the project will not behave in ways it was not intended to.
* Type checking, ensuring that variables do not change ensures that pages stay consistent. 
* Services were set up as a way that all my data can be managed from one central place, making code easier to find and more readable. 
* Animations were implemented in between routes to make the experience more pleasurable and can keep the useres more engaged. 
* Updating inventory in tanks was quite the challenge, I showcase the users current inventory stock and the location stock, this was a challenge considering that they are in two seperate collections/documents. I overcame this by using the ```index as i``` in the forloop and using the users document to showcase users stock in their inventory.
* Filtering by category was based on the structure of data, each category of data was looped through to showcase on the front end, I would then use a string to filter the data and show only the relevant data (achieved through *ngIF to filter on the loop)
* Finding data on users builds and matching it to a fish ID to showcase in which of the users builds the fish can be found.
* Angular routing and Activated route assisted me in getting individual views.


#### Backend implementation
<!-- stipulated the highlight you experienced with the project -->
* Users:
    * When users sign up , a document with fish, utilities and Decorations gets generated for each new user, meaning they have their own inventory to manage, this document gets placed in a collection of userMaterials that then holds the userMaterial ID, the user ID along with each items ID and quantity
    * Users set up 3 Security question and when registering and one of the random questions will be asked upon logging in to authenticate the user. 
    * Considering how the data is set up, users need to access subsections in their userMaterials document, avoiding 3 functions in this case was achieved by getting the materials category and sending it to the backend, this meant that I could use one function to access all of my data in the front end. 

* Builds:
    * Crafting builds was the most challenging part of the project, because of each user having their own inventory, I had to specify which build was craftable or not based only on the users ID , this mean taht I had to get the users Materials and the Build requirement. Looping through each of the requirement categories and user materials, I was able to match their ID's and loop through that array, checking if the quantities match or not, breaking at the first requirement that was not meat, ultimately making the tank uncraftable. By creating a new object with a complete value of true or false I was then able to manage that on the front end.  
    * Crafting builds followed the same approach for updating quantitys, although it was a lot easier than getting builds, I would still be required to loop through each category and update the quantity of the users inventory based on the craft requirements.


#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
*   My largest challenge throughout any of my projects is my Data, setting up data and thinking like a backend Developer is a skill that I have not fully developed yet. This is something that I would have to improve and work on going forward in my career as a developer , however, I did come up with solutions to work around my data and make it meet all of the specified requirements for the outcome of the project
* This challenge influenced all aspects of my project, because my goal is to make most of my data handling in the backend. 
* Angular was a much steeper learning curve than react, with the more OOP based way of writing code, it was something that I had to adapt to. But this was overcome through doing an online course on Angular which aided me in understanding Angular a lot better. overall, this was not only a challenge, but a highlight considering that Angular is a fantastic tool to have.

#### Highlights
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* A challenge is always a highlight, finding a soluting to a problem was a great highlight of this term on top of learning the MEAN stack and its intergration. 
* One click deployment of the project is a definite Highlight considering that I was able to deploy a project that I am proud of and still want to continue working on going forward. 

#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Implementation of reviews, this was fairly ease considering my DB structure, but it worked out for the best. 
* Back end and front end deployment 
* Each user gets their own managable inventory
* Angular Models, using models instead of interfaces was something that I learned on my own. 
* Backend implementation was taken more seriously and with users having their own inventory, I was able to really start testing my back end ability. 

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->
* IN future I would like to do more server side rendering and focus on the backend.
 
* I would like to flesh the project out more as a whole. 

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image10](https://drive.google.com/uc?export=view&id=1zzX0_a9xiXxjoYKgPtl_Xt2tTMQ2aEOF)


![image11](https://drive.google.com/uc?export=view&id=1IhHhwIUjGGTzSM-QQM9VIiDyU9uOaT8q)

![image12](https://drive.google.com/uc?export=view&id=1FNTBQIx_5I9htBplz6mkH5Mu5UjqZfrU)

![image13](https://drive.google.com/uc?export=view&id=1q9s6wPYBln5mQhK2TlcRmh4u9wxJf_ul)

![image14](https://drive.google.com/uc?export=view&id=1BSNR9__Fe-ZxR01BQiAyxQH12mCM8J5R)
![image15](https://drive.google.com/uc?export=view&id=1er5ijB9fxfpkoel7XEKQ1a-K2XZmMbP5)


1AZRxRysJt9lKHe_fatdQWGNezd3PFrUv
<!-- VIDEO DEMONSTRATION -->
### Video Demonstration
To see a run through of the application, click below:
[View Demonstration](https://drive.google.com/uc?export=view&id=14hkEiHzcPIWxUBJUMf3PfueCY7b6r7cy)



See the [open issues](https://github.com/LeandervanAarde/FinFinder/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* [Leander van Aarde](https://github.com/LeandervanAarde/FinFinder)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **leander van Aarde** -(mailto: Leander.vaonline@gmail.com) - [@instagram_handle](https://www.instagram.com/_.leander_e/) 
* **Project Link** - https://github.com/LeandervanAarde/FinFinder

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Stack overflow](https://stackoverflow.com/)
* [Images](https://www.google.com/)
* [Images](https://www.Unsplash.com/)
* [SASS](https://sass-lang.com/)
* [Angular](https://angular.io/)
* [MongoDb Atlas](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Typegoose](https://typegoose.github.io/typegoose/)

