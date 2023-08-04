# The Kilburn Mill at Clark's Cove
![Kilburn Mill Banner.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Banner.png)
The following explains the use and maintenance of the Kilburn Mill website.

The languages used to create this website are **Javascript, CSS, and HTML**. **Javascript** is responsible for the website's functionality, such as handling the submitted emails and page sizing to make the content fit different screen sizes. Each page has its own respective "Page Name".jsx file. Every page is available in the **"client/src/Pages"** directory. Additionally, each page contains multiple components, such as its header, footer, etc. These components are located in the **"client/src/Components"** directory. 

**CSS** is responsible for the styling of the page and each component - how each of the elements on the page look and are oriented. Every page has its own stylesheet/CSS file, which is available in the **"client/src/Styles"** directory; however, there is one CSS file in the main directory called **App.css**, which handles styling across every page of the website. For example, the font that the website uses is controlled in this CSS file. Additionally, every image is located in the **"Assets"** folder. 

## How to Edit the Code
In order to easily make changes to this codebase, follow the steps below. 
1. You need to open this code in an IDE (Integrated Developing Environment). One popular and easy-to-use IDE that can be downloaded on Mac, Linux, and Windows systems is **Visual Studio Code**. Click the following link to install Visual Studio Code: https://code.visualstudio.com/download.

2. After Visual Studio Code is installed, install NodeJS here: https://nodejs.org/en/download. Within Visual Studio Code, you will need to enter a couple of basic codes into the command line. NodeJS is necessary for entering these pieces of code and making them work.

3. Finally, navigate to the following link to install Git: https://github.com/git-guides/install-git. Git is used for managing basic functionality that is needed for downloading the code.  

4. In Visual Studio Code, open a new terminal as it is shown below: ![Kilburn Mill Visual Studio Code One.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Visual%20Studio%20Code%20One.png)

5. In the command terminal, enter the following:
   ```console
   git clone https://github.com/SamRayev/TheKilburnMill-OfficialWebsite.git KilburnMillDev
   ```
   The *KilburnMillDev* part of the code is the name of the new folder that is created to hold the code you are downloading from GitHub. The current folder name is only a template; however, it can be called anything of your choosing. ![Kilburn Mill Visual Studio Code Two.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Visual%20Studio%20Code%20Two.png)
   
6. After the files are successfully installed from GitHub, use the following console code to navigate to the new folder:
   ```console
   cd KilburnMillDev
   ```
   *NOTE: The "cd" term means "change directory".*

   Now, go to the console again and enter the following code in the console to navigate to the **client** directory:
   ```console
   cd client
   ```
   
7. This is the final step to set up your project and enable you to run the site. Once you are in the client directory, enter the following code into the command line to install all the necessary dependencies in the package.json file:
   ```console
   npm install
   ```
   
8. Now, to start the site, enter the following code into the command line:
   ```console
   npm start
   ```
   In order to terminate the current instance of the site/turn off the development server, all a user needs to do is go back to the console and do **cmd+c**.
   
This code in the command line will open a development version of the website in your default browser. Since this is only a development version, it will open in a URL called "http://localhost:3000/". Localhost means that this site is being locally hosted on your machine, meaning that it is not the public version of the site and only the person hosting it can access it. The benefit of this site being created with ReactJS, a Javascript framework, is that while the site is running, it can be actively updated to instantly see changes that are made to the code.

To actively view changes made to the site, the local host server must be running. Then, if a user edits a file and saves it, Visual Studio Code will automatically refresh the page in your browser and show the updated changes.
   
## 1. Basic Changes
*NOTE: If any changes are made, make sure to save the project.*

### Changing an Image
Changing an image on a page is relatively simple!
Let's use the wedding page as an example: 
```javascript
import ImageOne from "../Assets/EventImages/KilburnWeddingTwo.jpg" //Top of the code//
//Misc. code in between//
<img className='wedding' src={ImageOne} /> //The image property//
```
In every "Page Name".jsx file, each image follows the same structure, which is shown above. First, the desired image must be imported from a folder. Paste the following template code to the top of the necessary page file and change the temporary spaces with your own information:
```javascript
import **YOUR UNIQUE IMAGE NAME WITH NO SPACES** from "../Assets/ **YOUR IMAGE FILE NAME** .jpg" //Top of the code//
```
*DISCLAIMER: All of our images are located in the assets folder, but some images are nested in a folder inside the assets folder, so make sure you are importing the image correctly and using the proper path.*

After the image is imported and its name is declared, change the src property to the correct image name:
```javascript
<img className='wedding' src={**YOUR UNIQUE IMAGE NAME WITH NO SPACES**} /> //The image property//
```

### Changing The Website's Font
In order to change the font of the entire website, navigate to the **App.css** file in the **src** directory. The following code is the only code that should be changed:
```javascript
@import url("https://use.typekit.net/ffp1rif.css");

//Misc. code in between//

:root {
  font-family: 'source-sans-pro', sans-serif;
  font-synthesis: weight;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
```
The first line imports the font from the web. Fonts can be found here: https://fonts.adobe.com/. In order to add a font from Adobe Fonts, search the catalog for the font you want. Once you find your preferred font and navigate to its respective page, you need to click "Add to Web Project". You will be prompted to create a new web project, which only needs to be named. Once it is named, click "Create". In the example below, the project is named "Template Project".
![Kilburn Mill Font One.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Font%20One.png)

After creating the project, you will be brought to the following page seen below. Click **@import** in the sentence <ins>"If you'd like to use fonts in HTML email, use the @import link." </ins>

![Kilburn Mill Font Two.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Font%20Two.png)

Copy the import URL. In this example it is **@import url("https://use.typekit.net/gao5dmc.css");**. Replace the old import statement at the top of the CSS file with the new one. Now, copy the CSS code for the font-family that is also shown below. In this case, it is **font-family: "source-serif-pro", serif;**. Simply delete the current line in the **:root** section of the code shown above and paste the new line in its place. 
![Kilburn Mill Font Three.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Font%20Three.png)

### Adding New Pages
Every page has its own **/page_name** extension that connects it to the flow of the website. These are called **Routes** and every route can be seen in the App.jsx file, which is available in the src directory. Below I will provide a basic example of how this file works and how to add more pages:

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";

//At the bottom of the home.jsx file, there is an export statement that says "Export Default Home;" This statement wraps all the code in the file into the singular "Home" element. At the top of the App.jsx file, you import the Home element and state where you imported it from. This applies to every other page. If you create a new page, make sure it is created in the src/Pages/ directory. The file name must follow the following conditions:
 - Lowercase
 - No Spaces
 - No Special Characters
 - Must end in .jsx"

To integrate this new page into the flow of the website, copy the import template below and replace the filler code with your own//
import EXPORTED_PAGE_NAME from "./Pages/PAGE_FILE_NAME"; //Importing the code for the Homepage from the home file in the Pages directory//

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />}></Route> //The default path is set to the Home page, which is specified by the element property.//
            <Route path="/YOUR_DESIRED_PATH_NAME" element={<EXPORTED_PAGE_NAME />}></Route> //This is a template that you can fill with your own information//
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
```

## 2. The Homepage
To edit the content on the homepage of the website, navigate to the "home.jsx" file in the "client/src/Pages" directory. To edit the styling of the homepage, navigate to the "client/src/Styles/Home.css" file. 

 #### The Hero Image 
The hero image is the largest and top-most image on the home page. In order to change the hero image, navigate to the **Home.css** file and find the **".hero"** section. In this section, the **background-image** attribute is defined by the following image url: **'../Assets/HeroImage.jpg'**. The images are located in the Assets folder. In order to change the image, add a new picture to the 'Assets' folder and change the 'HeroImage.jpg' part of the background-image url to the name of the new image and save the file.

 #### The Event Carousel
 ![Kilburn Mill Event Carousel.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Events.png)
The event carousel is positioned below the hero image. Each event is written in the code as a card component. The following shows the code:
```javascript
<Card
    image={Image_Name}
    description="This is Card 1."
    date="July 10, 2023"
/>
```

In order to set an image to an event, it must be imported at the top of the file from the Assets folder. For example: 
```javascript
import Image_Name from "../Assets/HeroImage.jpg"
```

The **"Image_Name"** can be called whatever the user prefers; however, it must match what is put in the **{Image_Name}** section of the card. Additionally, the description and date of each individual card can be changed. In order to add more cards to the carousel, copy and paste the following code template and update it as needed:
```javascript
<Card
    image={Image_Name}
    description="This is Card 1."
    date="July 10, 2023"
/>
```

 #### The Contact Form
 ![Kilburn Mill Contact Form.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Contact%20Form.png)
 The contact form is located below the history section. When a user signs up for the newsletter, their email will be sent to you in an email with the subject "NEW NEWSLETTER SUBSCRIBER - The Kilburn Mill at Clark's Cove". 

## 3. The Gallery
 ![Kilburn Mill Gallery.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Gallery.png)
This page contains multiple **Image** components. In order to add more images to the gallery, navigate to the gallery.jsx file and add the following code below the current image components:
```javascript
import ImageOne from '../Assets/GalleryImages/ImageOne.jpeg'; //Top of the code//
//Misc. code in between//
<img className="gallery-item" src={ImageOne} /> //The image property//
```
Following the same structure to change an image that is mentioned above, import an image to the top of the file, give it a unique name with no spaces, and change the "src" property to the new image name.

## 4. Further Questions
If there are any further questions regarding the use of this code, email **srayev12@gmail.com**

React Email Services: https://dashboard.emailjs.com/admin
