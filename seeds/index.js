const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const axios = require('axios');

mongoose.connect('mongodb://localhost:27017/YelpCamp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

// install and call axios
// call unsplash and return small image
// async function seedImg() {
//     try {
//         const resp = await axios.get('https://api.unsplash.com/photos/random', {
//             params: {
//                 //ACCESS KEY FROM UNSPLASH
//                 client_id: 'YnIOnvu6DMMgZcTIZvlP3jVRJPq47mIq3vcLyPTt9vk',
//                 collections: 1114848,
//             },
//         });
//         return resp.data.urls.small;
//     } catch (err) {
//         console.error(err);
//     }
// }

// seed data into campground
const seedDB = async () => {
    await Campground.deleteMany({});
    // just to make sure everything is connected in mongo
    // const c = new Campground({ title: 'Green field' });
    // await c.save();
    // NOW LETS MAKE A LOOP
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: '62dfaff8f2df62c44fbe158b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nihil tempora vel aspernatur quod aliquam illum! Iste impedit odio esse neque veniam molestiae eligendi commodi minus, beatae accusantium, doloribus quo!',
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
                    url: 'https://res.cloudinary.com/dkohffnqv/image/upload/v1662968411/YelpCamp/oo7o8vmidkmolo10q7jc.jpg',
                    filename: 'YelpCamp/oo7o8vmidkmolo10q7jc'
                },
                {
                    url: 'https://res.cloudinary.com/dkohffnqv/image/upload/v1662968411/YelpCamp/ugs83zmfpmwosaeptxyp.jpg',
                    filename: 'YelpCamp/ugs83zmfpmwosaeptxyp'
                }
            ]
        })
        await camp.save();
    }
}

// connected and then close out
seedDB().then(() => {
    mongoose.connection.close();
})