# CodePath_Screenshot_App


-- ABOUT PROJECT --

This React.jsx project utilizes an API to take a screenshot of a website based on user input.

Users can input what site they want a screenshot of by entering a valid URL (without https:// ). Users also have the option to 
enter the format type they would like the image in, if the image should contain ads or a cookies banner, and specify the 
dimensions of the image. However, this app still works without those specifications.


-- FEATURES -- 

- [x] A form that accepts text as user input updates a state hook object to store user input 
- [x] A custom URL is made with queries to make an API call from user input
- [x] API call is made using acync and await to retrieve the screenshot from the web
- [x] try{...} catch (err){...} error handling displays a customized message to alert users that an error has occured
- [x] Create useState array variable to store and update screenshots and display all to screen


-- CHALLENGES --

- API call would not work because I imported my access key incorrectly
