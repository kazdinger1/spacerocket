function destinationsScroll() {
    document.getElementById("destinations").scrollIntoView({behavior: "smooth"});
}
function whyUsScroll() {
    document.getElementById("whyUs").scrollIntoView({behavior: "smooth"});
}
function FAQsScroll() {
    document.getElementById("FAQs").scrollIntoView({behavior: "smooth"});
}


window.addEventListener("load",function() {
    var imageSources = ["img/destinationsImage2.jpg", "img/destinationsImage.jpg", "img/crsImage4.png"]

    var index = 0;
    setInterval (function(){
      if (index === imageSources.length) {
        index = 0;
      }
      document.getElementById("asdf").src = imageSources[index];
      index++;
    } , 2000);
})

function question(n) {
    var questions = [1,2,3,4];
    for(var i = 0; i<questions.length; i++) {
        if(questions[i]==n) questions.splice(questions.indexOf(n),1)
    }
    if(document.getElementById('answer'+n).style.maxHeight != "20rem")
    {
        document.getElementById('answer'+n).style.maxHeight = "20rem";
        for(var i = 0; i<questions.length; i++) {
            document.getElementById('answer'+questions[i]).style.maxHeight = "0";
            document.getElementById('plus'+questions[i]).style.display = "block";
            document.getElementById('minus'+questions[i]).style.display = "none";
        }
    }
    else document.getElementById('answer'+n).style.maxHeight = "0";

    if(document.getElementById('plus'+n).style.display != "none")
    {
    document.getElementById('plus'+n).style.display = "none";
    document.getElementById('minus'+n).style.display = "block";
    }
    else {
        document.getElementById('plus'+n).style.display = "block";
        document.getElementById('minus'+n).style.display = "none";
    }
}