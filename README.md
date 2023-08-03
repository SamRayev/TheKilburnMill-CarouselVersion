# The Kilburn Mill at Clark's Cove
![Kilburn Mill Banner.png](https://github.com/SamRayev/TheKilburnMill-OfficialWebsite/blob/main/client/src/Assets/GithubImages/Kilburn%20Mill%20Banner.png)
The following explains the use and maintenance of the Kilburn Mill website.
The languages used to create this website are **Javascript, CSS, and HTML**. **Javascript** is responsible for the website's functionality, such as handling the submitted emails and page sizing to make the content fit different screen sizes. Each page has its own respective "Page Name".jsx file. Every page is available in the **"client/src/Pages"** directory. Additionally, each page contains multiple components, such as its header, footer, etc. These components are located in the **"client/src/Components"** directory. **CSS** is responsible for the styling of the page and each component - how each of the elements on the page look and are oriented. Every page has its own stylesheet/CSS file, which is available in the **"client/src/Styles"** directory. Additionally, every image is located in the **"Assets"** folder. 

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
DISCLAIMER: All of our images are located in the assets folder, but some images are nested in a folder inside the assets folder, so make sure you are importing the image correctly and using the proper path.

After the image is imported and its name is declared, change the src property to the correct image name:
```javascript
<img className='wedding' src={**YOUR UNIQUE IMAGE NAME WITH NO SPACES**} /> //The image property//
```
## 1. The Homepage
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

## 2. The Gallery
This page contains multiple **Image** components. In order to add more images to the gallery, navigate to the gallery.jsx file and add the following code below the current image components:
```javascript
import ImageOne from '../Assets/GalleryImages/ImageOne.jpeg'; //Top of the code//
//Misc. code in between//
<img className="gallery-item" src={ImageOne} /> //The image property//
```
Following the same structure to change an image that is mentioned above, import an image to the top of the file, give it a unique name with no spaces, and change the "src" property to the new image name.

## Further Questions
If there are any further questions regarding the use of this code, email **srayev12@gmail.com**
