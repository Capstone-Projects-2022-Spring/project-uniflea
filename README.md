
# project-uniflea
project-uniflea created by GitHub Classroom

# Project overview
<br>
UniFlea is a mobile application that serves as a marketplace platform for university students. It will be exclusively available to currently enrolled students at the university with a buffer period that permits recent graduates to also participate. The goal for UniFlea is to help students purchase or sell textbooks, equipment, electronics, furniture, clothing and more. Similar to applications such as Facebook Marketplace and Craigslist, UniFlea is unique in that it offers the comfort of safety through an authentication process that confirms transactions are being made by students. Features of UniFlea include authentication and verification upon creating an account, a personalized homepage catered to the individual student, search filters and categories, in app messaging, notifications, and a moderation and reporting system.

# Milestone 2 Release
<br>
New in this release is a fully functioning product filtering system. This includes filtering by searching, category, date, and price.
Furthermore, we enable users to save items they are interested in. We have also restyled the listings on the home screen to adhere to modern design principles. We also created the listing screen, allowing users to create new listings, and have them populated in the home screen's list of products.
Finally, we created the front end for the report user and add review screens, accessible via the profile screen.

# Installation Instructions
<br>
To install/run UniFlea, first proceed to https://expo.dev/client and download the appropriate Expo application for your mobile device. 
Open the Expo application and log into the following account: Username - unifleatest | Password - uniflea1

From here, there are two options:

Option One (QR Code Scan): Scan the QR Code below. 
Upon scanning, you may be prompted to open the UniFlea application in Expo. 
Otherwise, it will automatically do so, and UniFlea will be running on your mobile device.

![image](https://user-images.githubusercontent.com/61302705/158296888-72c3d1e2-a615-4d2a-a762-3aa28ba774e1.png)

Option Two (Link): Copy and paste the following link into your browser and hit enter: 
exp://exp.host/@unifleatest/UniFlea?release-channel=default. 
Upon hitting enter, you may be prompted to open the UniFlea application in Expo. 
Otherwise, it will automatically do so, and UniFlea will be running on your mobile device.

If you would like to see the current offical published release on Expo, proceed to https://expo.dev/@unifleatest/UniFlea where you can see additional details about the project and corresponding instructions to run the application similar to Option One and Option Two.

# How to Use and Test Release
<br>
Users can test the release in the following ways


* Test the sort by date filter
  1. navigate to home screen (first tab)
  2. click on the funnel icon
  3. click on date: newest. 
  4. Look for products with timestamp in title
  5. observe that products are sorted, newest at the top
  
* Test the sort by date filter
  1. navigate to home screen (first tab)
  2. click on the funnel icon
  3. click on date: oldest. 
  4. Look for products with timestamp in title
  5. observe that products are sorted, oldest at the top
 
* Test the sort by price filter
  1. navigate to home screen (first tab)
  2. click on the funnel icon
  3. click on date. Observe that the products are now sorted by price, cheapest at the top

* Test create listing 
  1. navigate to listing screen (middle tab)
  2. select an image
  3. fill out the form
  4. click submit
  5. wait a few moments
  6. navigate to the home screen and filter based on date: newest to see your product
 
* Test save listing 
  1. navigate to home screen (first tab)
  2. select 'Book 3 (3/23/22 12:02)' product
  3. click 'save listing'
  4. navigate to saved listings screen (second tab)
  5. notice the listing is there. Click the listing to be taken back to the listing details screen
  6. Press back arrow
  7. click delete listing to remove from saved screen
 
* Test review screens exist

  1. Navigate to profile page (bottom righ tab) 
  2. Click the 'Reviews and Ratings' button
  3. Notice that reviews are displayed
  4. click back arrow
  5. click on 'Leave a Review' button
  6. Notice that a form to leave a rating exists
  7. Note: Currentlt no functionality added to this screen yet
  
* Test report screen exists
  1. Navigate to profile page (bottom righ tab) 
  2. Click 'Test Report' button
  3. Notice that form to report a user exists
  4. Note: no functionality added to this screen yet

[Link to source code for milestone 1](src)

# Milestone 2 Release
<br>
New in this release is the ability to filter listings on the home screen based on attributes such as price and date. Furthermore, a search bar has been implemented for users to enter keywords to search for items. There is a new button on the home page for notifications. There is also a new button on the profile page for reviews and ratings. In the settings page, users can update their personal information. Users now have the ability to create their own listing. We have also implemented an active listings page which shows the user their current listings they have uploaded. This page includes useful information about the listing such as the photo, the title of the listing, the price, and  how many views the listing has gotten. There is also the ability to edit the listing or delete it. Updates have been made to the style and UI of UniFlea as well, specifically on the product information screen, saved listings screen, and settings screen.

# Installation Instructions
<br>
To install/run UniFlea, first proceed to https://expo.dev/client and download the appropriate Expo application for your mobile device. 
Open the Expo application and log into the following account: Username - unifleatest | Password - uniflea1

From here, there are two options:

Option One (QR Code Scan): Scan the QR Code below. 
Upon scanning, you may be prompted to open the UniFlea application in Expo. 
Otherwise, it will automatically do so, and UniFlea will be running on your mobile device.

![image](https://user-images.githubusercontent.com/61302705/158296888-72c3d1e2-a615-4d2a-a762-3aa28ba774e1.png)

Option Two (Link): Copy and paste the following link into your browser and hit enter: 
exp://exp.host/@unifleatest/UniFlea?release-channel=default. 
Upon hitting enter, you may be prompted to open the UniFlea application in Expo. 
Otherwise, it will automatically do so, and UniFlea will be running on your mobile device.

If you would like to see the current offical published release on Expo, proceed to https://expo.dev/@unifleatest/UniFlea where you can see additional details about the project and corresponding instructions to run the application similar to Option One and Option Two.

# How to Use and Test Release
<br>
Users can test the release in the following ways

* Test filtering items
  1. Click the filtering button on the home screen
  2. Click the option to sort items based on price
  3. Click the option to sort items from the lowest price to the highest
  
* Test searching for an item
  1. Click the search bar on the home screen
  2. Type "book" into the search bar

* Test pressing the notifications button
  1. Go back to the home page
  2. Press the bell icon at the top right of the page
  
* Test pressing the reviews and ratings button
  1. Go to the profile screen
  2. Click on the ratings and reviews button

* Test updating information in settings
  1. Go to the profile screen
  2. Click on settings
  3. Change your phone number
  4. Press the save changes button
  5. Go back to the settings page to see that the proper changes have been made

* Test creating a listing
  1. Click the create listing button on the navigation bar
  2. Add a photo of the listing
  3. Add the title of the listing
  4. Add a short description about the listing
  5. Set a price for the listing
  6. Press the create listing button
  7. Go back to the home page where the listing will be shown

* Delete a listing
  1. Go to the profile page
  2. Click on active listings
  3. Click on the listing you created in the previous test
  4. Click delete listing
  5. Go back to active listings and see that the listing has been deleted

[Link to source code for milestone 2](src)

## Contributors
Dylan Dunda, Josh Hageman, Tuan Lam, Adam Lang, Kasie Madden, TJ Nguyen, Sameera Rachakonda

