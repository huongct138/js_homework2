function setImages(){
    listImgs = ["cake01.jpg", "cake02.jpg", "cake03.jpg", "cake04.jpg", "cake05.jpg", "cake06.jpg"]
    currentImgs = document.querySelectorAll(".flex img")
    for (var i = 0; i < currentImgs.length; i++)
    {
        console.log("image" + i)
        randomImg = "images/" + listImgs[Math.floor(Math.random() * listImgs.length)]
        currentImgs[i].src = randomImg
        currentImgs[i].setAttribute("tabindex","0")
    }
}

function blurFunc(x) {
    x.style.opacity= "0.75";
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
}

function focusFunc(x) {
    x.style.opacity= "1";
    document.getElementById('image').style.backgroundImage = "url('" + x.src + "')";
    
    document.getElementById('image').innerHTML = x.alt;
}

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    // console.log(previewPic.src);
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    
    // console.log(previewPic.alt);
    document.getElementById('image').innerHTML = previewPic.alt;
  
}


function unDo(){
/* In this function you should 
1) Update the url for the background image of the div with the id = "image" 
back to the orginal-image.  You can use the css code to see what that original URL was

2) Change the text  of the div with the id = "image" 
back to the original text.  You can use the html code to see what that original text was
*/
document.getElementById('image').style.backgroundImage = "url('')";
document.getElementById('image').innerHTML = "Hover over an image below to display here";
}