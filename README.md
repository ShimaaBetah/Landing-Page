# Landing-Page(Udacity Web track)
This project is part of udacity professional web track course.
## first step
downloading sekeleton containing html and css file 
## requirment
 adding some fuctionality using javascript :
  -building navigation dynamically 
  -work with events to specify active sections
  -link navigation items to thier corresponding section 
## Building navlinks
  using `.querySelectorALL()` to select all sections then loop to make new corresponding `<li>` element using `document.createElement()`
 then append the created element to the navigation `<ul>`
 `note` use `document.createDocumentFragment()` for better performance.
## Select Active Section
 use `.getBoundingClientRect()` to get bounds of the every section element and if it is top bound is between 0 and 300 remove active class from every all sections then add the active class to that section using `classList.add()`
 
