let chalk = require('chalk');
let readLineSync = require('readline-sync');
let score = 0;
let uName = readLineSync.question(chalk.blue("Enter your name,USER") + " ")

let qChalk = chalk.greenBright;
let aChalk = chalk.magentaBright;



let choice = readLineSync.question(chalk.green("DO YOU WANT TO PLAY A QUIZ GAME,") + uName + "[Y/N]");

let highScore = 11;

let quests = 
[
  qChalk("Q1: What is my full name?") +"\n"+ aChalk("a. AMAL OUSEPH" +"\n"+ "b. AMAL JOSEPH" +"\n"+ "c. AMAL MOJESH" +"\n"+ "d. AMAL WILSON")+"\n\n"
,
  
    qChalk("Q2: Which is my favourite color?") +"\n"+ 
    aChalk("a. BROWN" +"\n"+ "b. BLACK" +"\n"+ "c. RED" +"\n"+ "d. PURPLE")+"\n\n"
 ,
  
    qChalk("Q3: Which food I love the most?") +"\n"+
    aChalk("a. DOSA & IDLI"+"\n"+ "b. RICE & DAL" +"\n"+ "c. CHICKEN ROLL" +"\n"+ "d. PANEER")+"\n\n"
  ,
  
  qChalk("Q4: Which is my favourite sport?") +"\n"+
  aChalk("a. OUTDOOR SPORT" +"\n"+ "b. INDOOR SPORT" +"\n"+ "c. ALL SPORT" +"\n"+ "d. NONE OF THE ABOVE")+"\n\n"
  ,
  
  qChalk("Q5: Who is my favourite Sportsplayer?") +"\n"+ 
  aChalk("a. C.RONALDO" +"\n"+ "b. LEBRON JAMES" +"\n"+ "c. MIKE TYSON" +"\n"+ "d. NEERAJ CHOPRA")+"\n\n"
  ,
  qChalk("Q6: Who is my favourite hero?") +"\n"+ 
  aChalk("a. HRITHIK ROSHAN" +"\n"+ "b. KEVIN HART" +"\n"+ "c. WILL SMITH" +"\n"+ "d. ROWAN ATKINSON")+"\n\n"
  ,
  
  qChalk("Q7: Which place I want to go the most?") +"\n"+ 
  aChalk("a. FOREST" +"\n"+ "b. MOUNTAINS" +"\n"+ "c. SEA SHORE" +"\n"+ "d. WATERFALL")+"\n\n"
  ,

  qChalk("Q8: What is my highest qualification and the year I achieved it?")+"\n"+ aChalk("a. B.E. & 2018"+"\n"+ "b. B.Com & 2019" +"\n"+ "c. BSc & 2015" +"\n"+ "d. B.Tech & 2019")+"\n\n"
  ,

  qChalk("Q9: Which is my favourite anime of alltime?")+"\n"+aChalk("a. DEATH NOTE & NARUTO" +"\n"+ "b. BLEACH & ONE PIECE" +"\n"+ "c. ONE PIECE & DEATH NOTE" +"\n"+ "d. DRAGON BALL Z & NARUTO") +"\n\n"
  ,

   qChalk("Q10: Which is my mother tongue?")+"\n"+aChalk("a. TELEGU" +"\n"+ "b. TAMIL" +"\n"+ "c. MALAYALAM" +"\n"+ "d. CHHATTISGARHI") +"\n\n"
  ,
   qChalk("Q11: Which is my favourite number?")+"\n"+aChalk("a. 10" +"\n"+ "b. 11" +"\n"+ "c. 01" +"\n"+ "d. 111") +"\n\n"  
];


/* function for game */
function playGame(){
  let userAns0 = readLineSync.question(quests[0]);
    if (userAns0 === "a" || userAns0 === "A"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

  let userAns1 = readLineSync.question(quests[1]);
    if (userAns1 === "d" || userAns1 === "D"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong");
    }

let userAns2 = readLineSync.question(quests[2]);
  if (userAns2 === "b" || userAns2 === "B"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns3 = readLineSync.question(quests[3]);
  if (userAns3 === "c" || userAns3 === "C"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns4 = readLineSync.question(quests[4]);
  if (userAns4 === "a" || userAns4 === "A"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns5 = readLineSync.question(quests[5]);
  if (userAns5 === "d" || userAns5 === "D"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns6 = readLineSync.question(quests[6]);
  if (userAns6 === "d" || userAns6 === "D"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns7 = readLineSync.question(quests[7]);
  if (userAns7 === "a" || userAns7 === "A"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns8 = readLineSync.question(quests[8]);
  if (userAns8 === "a" || userAns8 === "A"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns9 = readLineSync.question(quests[9]);
  if (userAns9 === "c" || userAns9 === "C"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

let userAns10 = readLineSync.question(quests[10]);
  if (userAns10 === "b" || userAns10 === "B"){
      console.log("right")
      score += 1;
      console.log(uName+"'s Score : " + score);
    }else{
      console.log("wrong")
    }

    console.log(uName + " Score: " + score);
    console.log("THANK YOU FOR PLAYING!!!! " + uName);
    console.log(uName + "'s score: "+ score)
}

function highScr(){
  if(score > highScore){
    console.log("HURRAY!!!You have beaten highscore!!!")
  }else{
    console.log("DON'T GIVE UP")
  }
  console.log("HIGHSCORE: "+ highScore)
}



function ask(){
  if (choice == "y" || choice == "Y"){
    console.log("Here are your questions.")
    playGame();
    highScr();
  }else{
    console.log("THANK YOU, " + uName)
  }
}
ask();