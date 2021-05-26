'use strict';

//Takes event to listen for and then a callback, which is an anonymous function in this case. 
document.addEventListener('DOMContentLoaded', function() {
    console.log('The DOM Content has loaded.');
    // anything we create in here will now be local to the scope of this function and cannot be used globally. 

    const allParagraphs = document.querySelectorAll('p');
    console.log("Amount of paragraphs: ", allParagraphs.length);
    console.log(allParagraphs);
    // This will loop through ALL paragraphs 
    allParagraphs.forEach(function(paragraph, index) {
       // Inside the loop, we are working with EACh individual paragraph
        console.log(index, paragraph);
        const spanElement = document.createElement('span');
        spanElement.innerText = `This paragraph is at index: ${index}.`;
        spanElement.classList.add('bold');
        paragraph.append(spanElement);
   

    })
});



