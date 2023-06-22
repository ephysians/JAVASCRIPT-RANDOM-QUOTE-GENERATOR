//creating a date and time for decor.
var today = new Date;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

var date = day +  ' | ' + today.getDate() + ' / ' + (today.getMonth() +1) + ' / ' + today.getFullYear();

document.getElementById("currentdate").innerHTML = date;

// Getting time from date object.
function startTime() {
    var today = new Date;
    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    var amPm = "AM";
    //To set Am or PM
    if (hour > 12){
    amPm = "PM";
    hour = hour - 12;
    }
//To put a Zero infront of minutes and seconds less than 10.
   if (hour < 10){
        hour = "0" + hour;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    var time = hour + ' : ' + minute + ' : ' + seconds + ' : ' + amPm;
    document.getElementById("currenttime").innerHTML = time;

    //To auto reload time per second.
    setTimeout(function (){startTime()}, 1000);

}

// create an array of quotes
const quotes =[
    "\"Whether you think you can or think you can\'t, you\'re right.\”<br> — Henry Ford",
    "\“Your talent determines what you can do. Your motivation determines how much you\'re willing to do. Your attitude determines how well you do it.” <br>— Lou Holtz",
    "\“The happiness of your life depends on the quality of your thoughts.\” <br>— Marcus Aurelius",
    "\“You do not find the happy life. You make it.\” <br>— Camilla Eyring Kimball",
    "\“Keep your face always toward the sunshine, and shadows will fall behind you.\”<br> — Walt Whitman",
    "\“Life is what happens to us while we are making other plans.\” <br>― Allen Saunders",
    "\“Life isn\'t about finding yourself. Life is about creating yourself.\”<br>— George Bernard Shaw",
    "\“Doubt kills more dreams than failure ever will.\” <br>— Suzy Kassem",
    "\Folks are usually about as happy as they make up their minds to be.\” <br>— Abraham Lincoln",
    "\“You learn more from failure than from success. Don\'t let it stop you. Failure builds character.\” <br>— Unknown",
    "\“The bad news is time flies. The good news is you\'re the pilot.\” <br>— Michael Altshuler",
    "\“Learn as if you will live forever, live like you will die tomorrow.\” <br>— Mahatma Gandhi",
    "\“All our dreams can come true if we have the courage to pursue them.\” <br>— Walt Disney",
    "\“Everything you\'ve ever wanted is on the other side of fear.\”<br>— George Addair",
    "\“Never bend your head. Always hold it high. Look the world straight in the eye.\”<br>—  Helen Keller",
    "\“The man who has confidence in himself gains the confidence of others.\” <br>— Hasidic Proverb",
    "\“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.\” — Brian Tracy",
    "\“We generate fears while we sit. We overcome them by action. Fear is nature\'s way of warning us to get busy.\” —  Dr. Henry Link",
    "\“What you lack in talent can be made up with desire, hustle and giving 110% all the time.\” <br>— Don Zimmer",
    "\"Person wey dey purge no dey select toilet\"<br>— Nigerian Proverb",
    "\"Na See-finish make \“Good morning\” turn \"How far\"\"<br>— Nigerian Proverb",
    "\"Jollof Rice wey dey for bottom of pot today go dey for top of cooler tomorrow.\" <br>— Nigerian Proverb",
    "\"Goat wen get mind follow lion go catch fish, make e know say weda dem catch fish or not, Lion food don set.\"<br>— Nigerian Proverb",
    "\"Akara and moin moin get the same parent, na wetin dem pass through make dem different.\"<br>— Nigerian Proverb",
    "\"Jollof Rice wey dey for d bottom of pot 2day go dey for top of cooler tomorrow.\"<br>— Nigerian Proverb",
    "\"People\'s lives don\'t end when they die. It ends when they lose faith.\"<br>- Itachi Uchiha",
    "\"If you want to know who you are, you have to look at your real self and acknowledge what you see.\”<br>- Itachi Uchiha",
    "\"Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.\"- Itachi Uchiha",
    "\"It is not wise to judge others based on your own preconceptions and by their apperances.\”<br>- Itachi Uchiha",
    "\"the people who are crazy enough to think they can change the world are the ones who do.\"<br>— steve jobs",
    "\"Dude, suckin\' at something is the first step at being sorta good at something.\"<br>―  Jake <small><em>(Adventure Time)</em></small>",
    "\"Either I will find a way, or I will make one.\"<br> ― Philip Sidney", 
    "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"― Thomas A. Edison",
    "\"You are never too old to set another goal or to dream a new dream.\"<br>― C.S Lewis",
    "\"If you can dream it, you can do it.\"<br>― Walt Disney", 
    "\"Never give up, for that is just the place and time that the tide will turn.\"<br>― Harriet Beecher Stowe",
    "\"I know where I\'m going and I know the truth, and I don\'t have to be what you want me to be. I\'m free to be what I want.\" ― Muhammad Ali", 
    "\“Don\'t fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.”\" ― Bruce Lee",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" <br> -Nelson Mandela",
    "\"The way to get started is to quit talking and begin doing.\"<br> -Walt Disney",
    "\"We\'re here to put a dent in the universe. Otherwise why else even be here?\" <br>-Steve Jobs",
    "\"If life were predictable it would cease to be life, and be without flavor.\" <br>-Eleanor Roosevelt",
    "\"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.\"<br> -Oprah Winfrey",
    "\"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.\"<br> -James Cameron",
    "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"<br> -Mother Teresa",
    "\"When you reach the end of your rope, tie a knot in it and hang on.\"<br> -Franklin D. Roosevelt",
    "\"Always remember that you are absolutely unique. Just like everyone else.\" <br>-Margaret Mead",
    "\"Don\'t judge each day by the harvest you reap but by the seeds that you plant.\" <br> -Robert Louis Stevenson",
    "\"The future belongs to those who believe in the beauty of their dreams.\"<br> -Eleanor Roosevelt",
    "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\" <br> -Benjamin Franklin",
    "\"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\" <br> -Helen Keller",
    "\"It is during our darkest moments that we must focus to see the light.\"<br> -Aristotle",
    "\"Whoever is happy will make others happy too.\"<br> -Anne Frank",
    "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"<br> -Ralph Waldo Emerson",
];
// create a funtion that generate a random Number within the array length and pass it into a html element for display.
function quotesFetch(){
    randomNumber = Math.round(Math.random() * (quotes.length));
    document.getElementById("quotest").innerHTML = quotes[randomNumber];
}