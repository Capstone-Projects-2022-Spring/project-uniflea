# project-uniflea
project-uniflea created by GitHub Classroom

# Project overview
<br>
UniFlea is a mobile application that serves as a marketplace platform for university students. 
It will be exclusively available to currently enrolled students at the university with a buffer period that permits recent graduates to also participate. 
The goal for UniFlea is to help students purchase or sell textbooks, equipment, electronics, furniture, clothing and more. 
Similar to applications such as Facebook Marketplace and Craigslist, 
UniFlea offers the comfort of safety through an authentication process that confirms transactions are being made by students. 
Features of UniFlea include authentication and verification upon creating an account, a personalized homepage catered to the individual student, 
search filters and categories, in app messaging, notifications, and a moderation and reporting system.

# Release notes
<br>
New in this release is a full authentication suite. This includes sign up, sign in, and password reset functionality.
Furthermore, we provide industry standard email validation to ensure that each user is a current or recent university graduate.
Finally, we have implemented a profile screen, which allows users to interact with their information by changing their profile picture,
or by navigating to related pages to chang their password, or view their active listings.

# Installation Instructions
<br>

# How to Use and Test Release
<br>
Users can test the release in the following ways

* Test the email validation
  1. Click the sign up button
  2. enter sign up information, but instead of using a university email, use a personal email
  3. Click submit
  4. You will be greeted with an error
  5. Enter a university email
  
* Tet that duplicate accounts can't be created
  1. Click the sign up button again
  2. enter sign up information, but instead of using a new email, sign up using the email you validated in the previous test
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

[Link to source code](src)
