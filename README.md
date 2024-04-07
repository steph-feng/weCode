# ARC'VENTURE
## Inspiration
* Personality quizzes that reveal something about the user
* Arc’teryx’s brand and its emphasis on wellness through outdoor activities 
* Beautiful British Columbia

## What it does
Users upload photos that represent them and our model identifies what outdoor expertise level they may be and we suggest BC hikes and ARC’TERYX gear to match.

## How we built it
* Used React and Tailwind for the front-end, as well as Figma for the design
* Trained Tensorflow.js Image Classification Model using over 3200 images to classify user’s images into 3 levels
* Created JSON files to store data about different trails and ARC’TERYX products

## Challenges we ran into
1) Training the Tensorflow.js model
There weren’t perfect datasets for what we wanted to train, e.g, there were outdoor and indoor scenes datasets, but they didn’t both have a good distribution of people, so if people were in the image, it would default to indoor even if they were in nature. We had to source from many different datasets and manually select certain images and be very patient when training the model.
2) Passing the model’s prediction into our React app
Due to the asynchronous nature of React calls, our prediction passing wasn’t updating with every image upload, instead it was locked at what we initially uploaded. We had to add some more awaits and promises and whatnot.
3) Navigating a cohesive design
We’re all very new to UI/UX design so we had a lot to learn and we experimented with lots of different versions to end up with a user interface we think is pretty and sleek. 

## Accomplishments that we're proud of
* We are proud of our frontend design, especially since none of our team considers ourselves designers
* We are proud of the accuracy of our image classification model 

## What we learned
We used many technologies for the first time, so while there was a learning curve, we are proud to have completed a cohesive and functional product

## What's next for ARC'VENTURE
* Social media compatibility: Accept Instagram handles and scrape accounts for images to analyze 
* Improve TF model: Create more classes that are biome-specific, weather-specific, and that recognize activities 
* Grow database: Automate product and trail database generation to suggest more targeted ARC’TERYX products and location specific trails

## Attributions
https://web.sas.upenn.edu/upennidb/albums/ 
https://www.kaggle.com/datasets/robinreni/house-rooms-image-dataset 
https://figshare.com/articles/dataset/Indoor-Outdoor_dataset/4595323
https://makeagif.com/gif/growing-tree-FfVonI
https://bcnature.org/protect-nature/
https://www.naturallywood.com/resource/forest-certification-in-bc/
https://secretvancouver.co/opening-day-bc-ski-resorts/
https://www2.gov.bc.ca/gov/content/industry/forestry/our-forests-our-future
https://whereissarahblog.com/hiking-trails-british-columbia/
