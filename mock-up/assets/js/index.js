window.onload = function() {
    christmasCountdown();

    function christmasCountdown() {
    //get today's date
    let now = new Date();

    //get current month
    let currentMonth = (now.getMonth() + 1);

    //get current day
    let currentDay = now.getDate();

    //calculate the year that the next Christmas will appear in
    let nextChristmas = now.getFullYear();
    if(currentMonth === 12 && currentDay > 25 ) {
        nextChristmas = nextChristmas + 1;
    }

    let nextChristmasDate = nextChristmas + '-12-25T00:00:00.000Z';
    let christmasDay = new Date(nextChristmasDate);

        //Get the difference in seconds between the two days.
        var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
 
        let days = 0;
        let hours = 0;
        let minutes = 0;
    
     
        //Don't calculate the time left if it is Christmas day.
        if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
            //Convert these seconds into days, hours, minutes, seconds.
            let days = Math.floor(diffSeconds / (3600*24));
            diffSeconds  -= days * 3600 * 24;
            let hours   = Math.floor(diffSeconds / 3600);
            diffSeconds  -= hours * 3600;
            let minutes = Math.floor(diffSeconds / 60);
            diffSeconds  -= minutes * 60;
          
        }
        console.log(days, hours, minutes);

        let daysUntilChristmas = days + ':' + hours + ':' + minutes;
        console.log(daysUntilChristmas)
        let countdownContainer = document.getElementById('countdown');
        let  titleEl = document.createElement("h1");
        titleEl.classList.add('cta-title');
        titleEl.textContent = `${daysUntilChristmas} Day's Left Until Christmas! `;
    
        countdownContainer.appendChild(titleEl);

        setTimeout(christmasCountdown, 1000);
  
    }
    }
    


