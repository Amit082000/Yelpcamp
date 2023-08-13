Yelpcamp is a web application built using Express, Ejs, Node.js, JavaScript, MongoDB, Bootstrap, Cloudinary, Mapbox, and deployed using Render.

Table of Contents



Overview
Technologies Used
Getting Started
Prerequisites
Installation
Configuration
Usage
Deployment
License




Overview



YelpCamp is a comprehensive web application designed for camping enthusiasts who are seeking to discover and share information about various camping locations. The platform allows users to explore a wide range of camping sites on a map, submit reviews, upload photos, and even edit or delete camping locations as needed. Here's an overview of the main features and functionalities of the YelpCamp project:

User Registration and Authentication:
Users can create accounts and log in to the YelpCamp platform. This authentication system ensures that users have personalized experiences and can contribute to the community.

Interactive Map Interface:
The heart of YelpCamp is an interactive map that displays various camping locations. Users can visually explore different sites, making it easy to find places of interest based on their geographical preferences.

Camping Location Listings:
YelpCamp features a database of camping locations with detailed information about each site, including its name, description, amenities, accessibility, and user-submitted reviews. Users can browse through this collection to find camping spots that suit their preferences.

Location Details and Reviews:
When users click on a specific camping location on the map or in the listings, they can view comprehensive details about that site. This includes information about the site's facilities, nearby attractions, weather conditions, and user-generated reviews. Users can rate the camping location and provide written reviews to share their experiences.

User-Generated Content:
Users have the ability to contribute to the platform by adding new camping locations to the map. They can provide essential details such as location coordinates, description, amenities, and upload photos to showcase the site's features.

Editing and Deleting Locations:
Users who have added camping locations can manage their entries by editing or deleting them. This ensures that the information remains accurate and up to date.

Adding Photos:
Users can enrich the information about camping locations by uploading photos that highlight the beauty and uniqueness of each site. This visual content helps other users make informed decisions about where to camp.

Geolocation Services:
YelpCamp utilizes geolocation services to accurately place camping locations on the map. This feature helps users identify the exact geographical positions of the sites they are interested in.

User Interaction and Community Engagement:
Users can engage with the community by commenting on reviews, asking questions, and sharing their own insights about camping locations. This fosters a sense of community and encourages information sharing among camping enthusiasts.

In essence, YelpCamp is a comprehensive platform that combines interactive maps, user-generated content, and social features to create a valuable resource for camping enthusiasts. Whether users are looking to explore new camping spots, share their experiences, or plan their next outdoor adventure, YelpCamp offers a user-friendly and engaging environment to fulfill these needs.



Technologies Used



Express,
Ejs,
Node.js,
MongoDB,
Bootstrap,
Cloudinary,
Mapbox,
Render



Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

Prerequisites



Node.js:[https://nodejs.org/en/docs/guides/getting-started-guide]





MongoDB: [https://www.mongodb.com/docs/manual/tutorial/getting-started/]



Installation



Clone the repository.
Navigate to the project directory.
Install dependencies: npm install.



Configuration



Rename the .env.example file to .env.
Open the .env file and set the required environment variables:
DATABASE_URL: MongoDB connection string,
CLOUDINARY_CLOUD_NAME: Cloudinary cloud name,
CLOUDINARY_API_KEY: Cloudinary API key,
CLOUDINARY_API_SECRET: Cloudinary API secret,
MAPBOX_ACCESS_TOKEN: Mapbox access token



Usage




Start the development server: npm start,
Open your web browser and navigate to http://localhost:3000

Deployment



The project is deployed using Render. Follow these steps to deploy:

Create a Render account
Create a new web service.
Configure the deployment settings:
Build Command: npm install && npm run build
Start Command: npm start
Set the environment variables in the Render dashboard.
Deploy the project.

====================================================================================



Link for website: https://india-yelpcamp.onrender.com

