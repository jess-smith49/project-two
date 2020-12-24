window.onload = function() {
    christmasCountdown();
  function christmasCountdown() {
    var now = new Date();
 
    //Get the current month. Add a +1 because
    //getMonth starts at 0 for January.
    var currentMonth = (now.getMonth() + 1);
 
    //Get the current day of the month.
    var currentDay = now.getDate();
 
    //Work out the year that the next Christmas
    //day will occur on.
    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        //This year's Christmas Day has already passed.
        nextChristmasYear = nextChristmasYear + 1;
    }
 
    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);
 
    //Get the difference in seconds between the two days.
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
 
    //Don't calculate the time left if it is Christmas day.
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        //Convert these seconds into days, hours, minutes, seconds.
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }
 
        console.log(days, hours, minutes);

        let daysUntilChristmas = days;
        console.log(daysUntilChristmas)
        let countdownContainer = document.getElementById('countdown');
      
        
    
        countdownContainer.innerHTML= `Only ${daysUntilChristmas} Days Until Christmas! `;

        setTimeout(christmasCountdown, 1000);
  
    }
}
    


var data = {items: [
    {
      title: "Hello",
      description: "Hello Text",
      image: "https://via.placeholder.com/300x100",
    },
    {
      title: "Card title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.<p>Another paragraph</p><p>Another paragraph</p>",
      image: "https://via.placeholder.com/300x100",
    }
]};

var source   = document.getElementById("card-template").innerHTML;
var template = Handlebars.compile(source);
var html    = template(data);

document.getElementById("content").innerHTML= html;
console.log (html);

//jquery method
$("#content .card-footer .btn").on("click", function(event){
console.log("jquery");

var index = $(".card").index(event.currentTarget);
console.log( "index = " + index );
console.log( event.target.dataset.target );
});