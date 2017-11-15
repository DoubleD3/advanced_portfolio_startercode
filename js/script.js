//Unit 4 Portfolio with Object
// Class 1 
// use JavaScript to create a simple object representation of your portfolio
// Class 2
// create a data representation of your portfolio using nested objects
// learn to access properties of an object using dot and bracket notation
// use jquery to update your portfolio html (make sure to add appropriate class to your HTML
// Class 3
// add like buttons to your html and like property to your object
// add new properties, modify, and delete properties an object
// update existing properties of an object
// add a click handler to update the like counter when buton is clicked

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


// Create your potrfolio object representation below

$(document).ready(function() {

    $('#message').focus();

    $("#post-btn").click(function() {

        var newContainer = $("<div></div>");

        var img = $("<img/>")
        img.attr("src", "http://zsb.info.bit.edu.cn/static/images/avatar.jpg")

        var span = $("<span></span>");
        var message = $("#message").val();
        span.text(message) //
        //$ representt he object everything afterthing after 
        // that are the properties.

        newContainer.append(img);
        newContainer.append(span);

        $("#wall").append(newContainer);

        var span = str.fontcolor("white");
    });


});

// var $("#message").val = str.fontcolor("white");






// Use Jquery to update your HTML using your object. Don't forget the Document Ready function. 







// Add your click handler below to update your like counters when the like buttons are clicked.
