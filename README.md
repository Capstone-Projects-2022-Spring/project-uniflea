
# project-uniflea
project-uniflea created by GitHub Classroom

# Project overview
<br>
UniFlea is a mobile application that serves as a marketplace platform for university students. It will be exclusively available to currently enrolled students at the university with a buffer period that permits recent graduates to also participate. The goal for UniFlea is to help students purchase or sell textbooks, equipment, electronics, furniture, clothing and more. Similar to applications such as Facebook Marketplace and Craigslist, UniFlea is unique in that it offers the comfort of safety through an authentication process that confirms transactions are being made by students. Features of UniFlea include authentication and verification upon creating an account, a personalized homepage catered to the individual student, search filters and categories, in app messaging, notifications, and a moderation and reporting system.

# Milestone 1 Release
<br>
New in this release is a full authentication suite. This includes sign up, sign in, and password reset functionality. Furthermore, we provide industry standard email validation to ensure that each user is a current or recent university graduate. Finally, we have implemented a profile screen, which allows users to interact with their information by changing their profile picture, or by navigating to related pages to change their password, or view their active listings.

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

* Test the email validation
  1. Click the sign up button
  2. Enter sign up information, but instead of using a university email, use a personal email
  3. Click submit
  4. You will be greeted with an error
  5. Enter a university email
  
* Test that duplicate accounts can't be created
  1. Click the sign up button again
  2. Enter sign up information, but instead of using a new email, sign up using the email you validated in the previous test
  3. Click submit
  4. You will be greeted with an error
  5. Return to the sign in page

* Test that other input fields are validated
  1. Click the sign up button
  2. Enter no sign up information
  3. Click submit
  4. You will be greeted with errors for each field
  5. Enter valid values for the fields
  6. Check your email for the validation code
  7. Enter the code and press submit
  8. You will be redirected to the sign in page, enter your validated email and password
  9. You will now be on the home page

* Test that user can change profile image
  1. Navigate to profile page (bottom righ tab) 
  2. Click the profile picture icon at the top of the page
  3. Select the image you would like to use
  4. You can now see that image being displayed
  
* Test user can change password
  1. Navigate to profile page (bottom righ tab) 
  2. Click the change password button
  3. Input your email
  4. Enter the code sent to your email, and your new password on the next screen

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

