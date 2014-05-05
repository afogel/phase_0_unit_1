#### Include an inline screenshot of your codeschool's points from the profile page:

http://postimg.org/image/p1b9ht1f3/6ca8124e/

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

*Realtime editing of HTML and CSS can be performed on the Elements panel. To edit HTML, one must simply double click on the content that one wishes to edit, then it can be changed. To move HTML elements around on the page, one can simply drag and drop. To edit CSS, one can go to the "Styles" section of the Elements panel and add or remove CSS code.

*Javascript Debugging can be performed on the Sources tab. Once highlighting the javascript code that we're hoping to debug on the leftmost side of the screen, we can add or remove code, refresh and see whether the work influenced the bug!

*Performance optimization can be performed using the Network and PageSpeed tabs! The Network tab shows us how long it takes to load various objects and scripts for our page. PageSpeed will download and analyze the page, and will then make suggestions to improve the speed.

* What's the quick key for your OS to spawn the Dev Tools inspector?

*[command]+[option]+[i]

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  
  *#0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  *http://postimg.org/image/57y0icw7v/

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

*The text is embedded in an image that is used as the background. The text we see "The most important things are not things. So we'll design experiences." in the DOM are actually taken off-screen by a "text-indent:" CSS property of -9999px. As a result, the text we see on the final page is just that of the embedded image and not anything else.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  
  *The largest image is one of times square, NY, NY.

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  
  *I found this information by going to the Network tab, refreshing the page, and filtering by size. The URL to the image is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png.
  The image size is 500x210 px and takes us 316KB of space.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

*According to PageSpeed, optimizing the images on the site can eliminate 885.9KiB!