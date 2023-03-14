var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var dopoclick = [];
var recordArray = []

function nextSequence()
{
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);

    jQuery("." + gamePattern[gamePattern.length-1]).addClass("pressed");
    var suono = new Audio("sounds/"+ gamePattern[gamePattern.length-1] +".mp3").play();
    setTimeout(function(){jQuery("." + gamePattern[gamePattern.length-1]).removeClass("pressed"); },1000);
    console.log("gamePattern: " + gamePattern);
}

var key = 0;
var livello = 1;
var giusto = 0;
var sbagliato = 0;
var contatore = -1;
var record = 0;


jQuery(document).keypress(function (event)
  {
    key = event.keyCode;
    if(key == 97) //tasto A
    {
      nextSequence();
      jQuery("h1").text("Livello " + livello);
      animazione_e_suono();
      ripetiClick();
    }
  });
function ripetiClick()
{
  jQuery(".green").click(function()
  {
      dopoclick.push("green");
      contatore +=1;
      console.log("dopoclick: " + dopoclick);
      console.log(contatore);

        if (dopoclick[dopoclick.length-1] != gamePattern[contatore])
        {
            sbagliato = 1;
            console.log("sbagliato: " + sbagliato)
        }
        if (dopoclick.length == gamePattern.length)
        {
          for(var i=0;i<dopoclick.length;i++)
          {
            if (dopoclick[i] == gamePattern[i])
            {
                giusto += 1;
                console.log("giusto: " + giusto)
            }
          }
        }
      if (sbagliato == 1)
      {
        livello = 1;
        jQuery("h1").text("Ahiahiahi, try next time ^_^");
        setTimeout(function(){jQuery("h1").text("Livello " + livello)},3000);
        jQuery("body").addClass("game-over");
        var errore = new Audio("sounds/wrong.mp3").play();
        setTimeout(function(){jQuery("body").removeClass("game-over"); },500);
        contatore = -1;
        dopoclick = [];
        gamePattern = [];
        recordArray = [];
        sbagliato = 0;
        giusto = 0;
        console.log("ritorno al livello 1")
        setTimeout(function(){nextSequence()},3001);
      }
      if (giusto == gamePattern.length && contatore>=0)
      {
        livello +=1;
        jQuery("h1").text("Livello " + livello);
        contatore = -1;
        dopoclick = [];
        giusto = 0;
        recordArray.push(livello);
        if(recordArray.length > record)
        {
           record += 1;
        }
        jQuery("h2").text("Record:" + record);
        setTimeout(function(){nextSequence()},500);
      }
  });
  jQuery(".blue").click(function()
  {
      dopoclick.push("blue");
      contatore +=1;
      console.log("dopoclick: " + dopoclick);
      console.log(contatore);

        if (dopoclick[dopoclick.length-1] != gamePattern[contatore])
        {
            sbagliato = 1;
            console.log("sbagliato: " + sbagliato)
        }
        if (dopoclick.length == gamePattern.length)
        {
          for(var i=0;i<dopoclick.length;i++)
          {
            if (dopoclick[i] == gamePattern[i])
            {
                giusto += 1;
                console.log("giusto: " + giusto)
            }
          }
        }

      if (sbagliato == 1)
      {
        livello = 1;
        jQuery("h1").text("Ahiahiahi, try next time ^_^");
        setTimeout(function(){jQuery("h1").text("Livello " + livello)},3000);
        jQuery("body").addClass("game-over");
        var errore = new Audio("sounds/wrong.mp3").play();
        setTimeout(function(){jQuery("body").removeClass("game-over"); },500);
        contatore = -1;
        dopoclick = [];
        gamePattern = [];
        recordArray = [];
        sbagliato = 0;
        giusto = 0;
        console.log("ritorno al livello 1")
        setTimeout(function(){nextSequence()},3001);
      }
      if (giusto == gamePattern.length  && contatore>=0)
      {
        livello +=1;
        jQuery("h1").text("Livello " + livello);
        contatore = -1;
        dopoclick = [];
        giusto = 0;
        recordArray.push(livello);
        if(recordArray.length > record)
        {
           record += 1;
        }
        jQuery("h2").text("Record:" + record);
        setTimeout(function(){nextSequence()},500);
      }
  });
  jQuery(".yellow").click(function()
  {
      dopoclick.push("yellow");
      contatore +=1;
      console.log("dopoclick: " + dopoclick);
      console.log(contatore);
        if (dopoclick[dopoclick.length-1] != gamePattern[contatore] )
        {
            sbagliato = 1;
            console.log("sbagliato: " + sbagliato)
        }
        if (dopoclick.length == gamePattern.length)
        {
          for(var i=0;i<dopoclick.length;i++)
          {
            if (dopoclick[i] == gamePattern[i])
            {
                giusto += 1;
                console.log("giusto: " + giusto)
            }
          }
        }

      if (sbagliato == 1)
      {
        livello = 1;
        jQuery("h1").text("Ahiahiahi, try next time ^_^");
        setTimeout(function(){jQuery("h1").text("Livello " + livello)},3000);
        jQuery("body").addClass("game-over");
        var errore = new Audio("sounds/wrong.mp3").play();
        setTimeout(function(){jQuery("body").removeClass("game-over"); },500);
        contatore = -1;
        dopoclick = [];
        gamePattern = [];
        recordArray = [];
        sbagliato = 0;
        giusto = 0;
        console.log("ritorno al livello 1")
        setTimeout(function(){nextSequence()},3001);
      }
      if (giusto == gamePattern.length && contatore>=0)
      {
        livello +=1;
        jQuery("h1").text("Livello " + livello);
        contatore = -1;
        dopoclick = [];
        giusto = 0;
        recordArray.push(livello);
        if(recordArray.length > record)
        {
           record += 1;
        }
        jQuery("h2").text("Record:" + record);
        setTimeout(function(){nextSequence()},500);
      }
  });
  jQuery(".red").click(function()
  {
      dopoclick.push("red");
      contatore +=1;
      console.log("dopoclick: " + dopoclick);
      console.log(contatore);

        if (dopoclick[dopoclick.length-1] != gamePattern[contatore])
        {
            sbagliato = 1;
            console.log("sbagliato: " + sbagliato)
        }
        if (dopoclick.length == gamePattern.length)
        {
          for(var i=0;i<dopoclick.length;i++)
          {
            if (dopoclick[i] == gamePattern[i])
            {
                giusto += 1;
                console.log("giusto: " + giusto)
            }
          }
        }

      if (sbagliato == 1)
      {
        livello = 1;
        jQuery("h1").text("Ahiahiahi, try next time ^_^");
        setTimeout(function(){jQuery("h1").text("Livello " + livello)},3000);
        jQuery("body").addClass("game-over");
        var errore = new Audio("sounds/wrong.mp3").play();
        setTimeout(function(){jQuery("body").removeClass("game-over"); },500);
        contatore = -1;
        dopoclick = [];
        gamePattern = [];
        recordArray = [];
        sbagliato = 0;
        giusto = 0;
        console.log("ritorno al livello 1")
        setTimeout(function(){nextSequence()},3001);
      }
      if (giusto == gamePattern.length && contatore>=0)
      {
        livello +=1;
        jQuery("h1").text("Livello " + livello);
        contatore = -1;
        dopoclick = [];
        giusto = 0;
        recordArray.push(livello);
        if(recordArray.length > record)
        {
           record += 1;
        }
        jQuery("h2").text("Record:" + record);
        setTimeout(function(){nextSequence()},500);
      }
  });
}
function animazione_e_suono()
{
  jQuery(".green").click(function()
  {
    jQuery(".green").addClass("pressed");
    var green = new Audio("sounds/green.mp3").play();
    setTimeout(function(){jQuery(".green").removeClass("pressed"); },100);
  });
  jQuery(".blue").click(function()
  {
    jQuery(".blue").addClass("pressed");
    var blue = new Audio("sounds/blue.mp3").play();
    setTimeout(function(){jQuery(".blue").removeClass("pressed"); },100);
  });
  jQuery(".yellow").click(function()
  {
    jQuery(".yellow").addClass("pressed");
    var yellow = new Audio("sounds/yellow.mp3").play();
    setTimeout(function(){jQuery(".yellow").removeClass("pressed"); },100);
  });
  jQuery(".red").click(function()
  {
    jQuery(".red").addClass("pressed");
    var red = new Audio("sounds/red.mp3").play();
    setTimeout(function(){jQuery(".red").removeClass("pressed"); },100);
  });
}
