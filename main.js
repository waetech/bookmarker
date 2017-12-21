//Listen for event
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save bookmark
function saveBookmark(e){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;
    
    if(!validateForm(siteName, siteURL)){
        return false;
    }
    
    var bookmark = {
        name: siteName,
        url: siteURL
    }
    
   /*//Local storage test
   
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.
    
    getItem('test'));
    
    */
   
    
    
    
    //Test if bookmarks is null
    
    if(localStorage.getItem('bookmarks')=== null){
        //Init array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookmark);
        
        //Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else{
        //Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       
        //Add bookmark to array
        bookmarks.push(bookmark);
        //Reset back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    //Clear the form
    document.getElementById('myForm').reset();
    
    //Re fetch bookmark
    fetchBookMarks();
    
   //Prevent form from submitting
    e.preventDefault();
}

//Delete bookmark
function deleteBookmark(url){
    //Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for(var i=0;i < bookmarks.length; i++){
        if(bookmarks[i].url=== url){
            //Remove from array
            bookmarks.splice(i,1);
        }
    }
    //Reset back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    //Re-fetch bookmarks
    fetchBookmarks();
}

//fetch bookmarks
function fetchBookMarks(){
    //Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //Get ouput id
    var bookmarksResults = document.getElementById('BookmarkResults');
    
    //Build output
    bookmarksResults.innerHTML = '';
    for(var i =0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        
        bookmarksResults.innerHTML += '<div class="well">' + 
                                      '<h3>' +name+
                                      ' <a class= "btn btn-default"  href="'+url+'">Visit</a> '
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                      
                                      '</h3>'+ 
                                      '</div>';
    }
}


//Validate Form
function validateForm(siteName, siteURL){
    
    if(!siteName || !siteURL){
        alert("Please fill in the form.");
        return false;
    }
    
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if(!siteURL.match(regex)){
        alert("Please use a valid url.");
        return false;
    }
    
    return true;
}







