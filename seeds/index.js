const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
   // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 586; i++) {
        const random1000 = Math.floor(Math.random() * 586);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '64a1145a2e1099c3382a8835',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Welcome to this WonderFull Place!! ',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
              {
                url: 'https://res.cloudinary.com/dzeb8elaw/image/upload/v1689172575/YelpCamp/otzsi7tirp1kjsl2zuqu.avif',
                filename: 'YelpCamp/otzsi7tirp1kjsl2zuqu',
              },
              {
                url: 'https://res.cloudinary.com/dzeb8elaw/image/upload/v1689172576/YelpCamp/yehnbjevr5cmcuiqkgvm.avif',
                filename: 'YelpCamp/yehnbjevr5cmcuiqkgvm',
              }


            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})