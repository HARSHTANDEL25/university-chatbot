// Options the user could type in
const prompts = [
 
  ["how are you", "how is life", "how are things"],
  ["adit","a d patel"],
  ["college","university","institute","different college"],
  ["cvm","cvmu"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["colleges" , "universities" , "institues","what are colleges"],
  ["G.H.Patel College of Engineering & Technology" , "GCET" , "gcet" , "g.h.patel"],
  ["A.D.Patel Institute of Technolohy" , "ADIT" , "adit" , "a.d.patel"],
  ["Madhuben & Bhanubhai Patel Institute of Technology" , "MBIT" , "mbit" , "m.b.patel"],
  ["departments" , "different programs" , "all programs" , "all engineering programs" , "Departments" , "all departments" , "Programs" , "programs"],
  ["Department" , "department" , "program" , "Program", "engineering program" , "different engineering program"],
  ["adit college departments" , "adit department" , "courses in adit" , "programs in adit" , "departments available in adit"],
  ["approved intakes" , "class size" , "class strength"],
  ["Master of Engineering"],
  ["tuition fees" , "fees" , "fee structure" , "yearly tuition fees"],
  ["hostel fees","hostel fee" , "hostel fee structure"],
  ["cvm location" , "location of cvm" , "cvm university location"],
  ["a.d.patel location" , "adit location" , "location of adit" , "location of adit college" , "location of a.d.patel"],
  ["date","whatis the date" , "what is the date" , "what is today date","today"],
  ["time","what is the time" , "what is today time"]
];

// Possible responses, in corresponding order

const replies = [
  [
   "Fine... how are you?",
   "Pretty well, how are you?",
   "Fantastic, how are you?"
 ],
 ["A D Patel Institute of Technology"],
 ["A D Patel","G H Patel ","MBIT","CVM College of Fine Arts"," BJVM", "SEMCOM"],
 ["charutar university"],
 [
   "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
 ],
 [
   "Nothing much",
   "About to go to sleep",
   "Can you guess?",
   "I don't know actually"
 ],
 ["I am infinite"],
 ["I am just a bot", "I am a bot. What are you?"],
 ["The one true God, JavaScript"],
 ["I am nameless", "I don't have a name"],
 ["Have you ever felt bad?", "Glad to hear it"],
 ["Why?", "Why? You shouldn't!"],
 ["What about?", "Once upon a time..."],
 ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
 ["Bye", "Goodbye", "See you later"],
 ["Pasta", "Burger"],
 ["Great question"],
 ["That's ok", "What do you want to talk about?"],
 ["Please say something :("],
 ["Haha!", "Good one!"],
 ["G.H.Patel College of Engineering & Technology (GCET), A.D.Patel Institute of Technolohy (ADIT), Madhuben & Bhanubhai Patel Institute of Technology (MBIT), CVM College of Fine Arts, Bhikhabhai Jivabhai Vanijya Mahavidyalaya (BJVM), S.G.M. English Medium College of Commerce & Management (SEMCOM)"],
 ["This institute offers undergraduate and postgraduate courses in various engineering disciplines, such as Mechanical, Electrical, Computer Science, Information Technology, Civil Engineering and Many other Programs."],
 ["This institute offers undergraduate and postgraduate courses in various engineering disciplines, such as Mechanical, Electrical, Computer Science, Information Technology, Civil Engineering and Many other Programs."],
 ["This institute offers undergraduate and postgraduate courses in various engineering disciplines, such as Mechanical, Electrical, Computer Science, Information Technology, and Civil Engineering."],
 ["Chemical Engineering , Computer Science & Engineering (IOT) , Mechnatronics Engineering , Artificial Intelligence , Automobile Engineering , Computer Engineering , Information Technology , Applied Science And Humanities."],
 ["Chemical Engineering" , "Computer Science & Engineering (IOT)" , "Mechnatronics Engineering" , "Artificial Intelligence" , "Automobile Engineering" , "Computer Engineering" , "Information Technology" , "Applied Science And Humanities."],
 ["Artificial Intelligence (AI) & Data Science , Automobile Engineering , Civil Engineering , Computer Engineering , Computer Science And Design , Electronics And Communication , Electrical Engineering , Food Processing Technology , Information Technology , Mechanical Engineering , Dairy Technology."],
 ["Artificial Intelligence (AI) & Data Science - 60 , Automobile Engineering - 60 , Civil Engineering - 30 , Computer Engineering - 60 ,  Computer Science And Design - 60 , Electronics And Communication - 30 , Electrical Engineering - 30 , Food Processing Technology - 60 , Information Technology - 120 , Mechanical Engineering - 60 , Dairy Technology -30."],
 ["111000 yearly"],
 ["Bachelor of Engineering - 106000"],
 ["ADIT Boys Hostel(Block - 4,5,6,7) fees - 48000/- deposit 1000/- (Block 11)fees - 45000/- deposit - 1000/- Sharda Girls Hostel fees - 48000/- deposit 1000/- Sharda Girls Hostel (with AC) fees - 55000/- deposit - 2000/-"],
 ["Beside BVM College, Opp Shastri Maidan, Vallabh Vidhyanagar-388120 Gujarat-india."],
 ["New Vallabh Vidhyanagar, Post Box:-52 , Vitthal Udyognagar-388121 , Dist:-Anand(Gujarat) India"],
 [new Date().toDateString()],
 [new Date().toLocaleTimeString()]
];

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]