const instructions = {
  startGame: "Start Game - This starts a new game on the basis of selected category and difficulty level",
  difficultyLevel: "Difficulty Level - You can choose one of the difficulty levels i.e. Difficult, Intermediate, Easy",
  category: "Category - You can choose one of the categories i.e. Movies, Series, Games, History, Science",
  scoreHistory: "Score History - In the Table, You can see the last 10 game details",
  leaderBoard: "Leaderboard - It shows the top 10 users who played the game along on the basis of their scores by difficulty level and if the score is same then in the ascending order of their time",
  timer: "Each quiz has a timer of 2 minutes and you can pause the quiz in between by using pause button and resume it when ready to play.",
  scores: "Each correct answer has a 1 point.",
  quiz: "Each quiz has 4 questions along with a timer and after all the questions are answered, answers to all the questions will be displayed",
};

const questions = [
    {
      questionText: 'Where did the Olympic Games originate?',
      questionLevel: 'Easy',
      questionType: 'History',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Greece', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: "'Fight Night 2004' is a game about what kind of sport?",
      questionLevel: 'Easy',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Boxing', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the nearest planet to the sun?',
      questionLevel: 'Easy',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Apple', isCorrect: false },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Mercury', isCorrect: true },
      ],
    },
    {
      questionText: 'A young woman is picked up with her dog by a tornado in Kansas and plopped into a magical land.',
      questionLevel: 'Easy',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'The Wizard of Oz', isCorrect: true },
        { answerText: 'Jurassic Park', isCorrect: false },
        { answerText: 'Twister', isCorrect: false },
        { answerText: 'Into the Storm', isCorrect: false },
      ],
    },
    {
      questionText: 'South Park takes place in which state?',
      questionLevel: 'Easy',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Colorado', isCorrect: true },
      ],
    },
    {
      questionText: 'Who was the first American President?',
      questionLevel: 'Easy',
      questionType: 'History',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'George Washington', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: "What organization hosts a bi-annual charity event on twitch revolving around speedruns on popular video games?",
      questionLevel: 'Easy',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Games Done Quick', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest known animal?',
      questionLevel: 'Easy',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Blue Whale', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      questionLevel: 'Easy',
      questionType: 'Movies',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What does Michael Scott eat for lunch on The Office that makes him fall asleep?',
      questionLevel: 'Easy',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'A whole chicken pot pie', isCorrect: true },
      ],
    },
    {
      questionText: 'Which country first used paper money?',
      questionLevel: 'Difficult',
      questionType: 'History',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'China', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Mario originated as a character in which video game?',
      questionLevel: 'Difficult',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Donkey Kong', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'This theory aims to explain how Pangea became separate continents, suggesting that the movement of tectonic plates caused the mass to break off and drift into different places.',
      questionLevel: 'Difficult',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'The Continental Drift Theory', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: "In which movie, was the sound of a  Russian train's toilet flushing  used as the sound of automatic doors opening?",
      questionLevel: 'Difficult',
      questionType: 'Movies',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Star Trek', isCorrect: true },
      ],
    },
    {
      questionText: 'What was the Bayside High gang’s hangout spot on Saved By the Bell?',
      questionLevel: 'Difficult',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'The Max', isCorrect: true },
      ],
    },
    {
      questionText: 'What building is on the back of the $20 bill?',
      questionLevel: 'Difficult',
      questionType: 'History',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'White House', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: "In 'Call of Duty: Advanced Warfare,' what's the name of Jack Mitchell's best friend?",
      questionLevel: 'Difficult',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Will Irons', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'This planet has a collective 53 moons, making it the planet in our solar system with the most number of moons.',
      questionLevel: 'Difficult',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Saturn', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'In which movie did Keanu Reeves learn Judo, Brazilian Jiu-Jitsu, marksmanship and driving, and performed about 95% of the fight scenes himself?',
      questionLevel: 'Difficult',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'None of the above as it never happened', isCorrect: false },
        { answerText: 'For all the chapters', isCorrect: false },
        { answerText: 'John Wick - Chapter 1', isCorrect: false },
        { answerText: 'John Wick - Chapter 2', isCorrect: true },
      ],
    },
    {
      questionText: 'Who was Bart Simpson’s teacher?',
      questionLevel: 'Difficult',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Mrs. Krabappel', isCorrect: true },
      ],
    },
    {
      questionText: 'Which country gifted the Statue of Liberty to the USA?',
      questionLevel: 'Intermediate',
      questionType: 'History',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'France', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: "Who's on the cover of the video game 'Madden NFL 18'?",
      questionLevel: 'Intermediate',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Tom Brady', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Lightning is hotter than the sun.',
      questionLevel: 'Intermediate',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'Which movie depicted the battle scenes of D-Day so realistically that it caused Post-Traumatic Stress Disorder in combat Veterans when they watched it?',
      questionLevel: 'Intermediate',
      questionType: 'Movies',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Saving Private Ryan', isCorrect: true },
      ],
    },
    {
      questionText: 'How many people did Annalise Keating kill on How to Get Away With Murder?',
      questionLevel: 'Intermediate',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '0', isCorrect: true },
      ],
    },
    {
      questionText: 'Dr. Livingstone became the first European to cross the width of the African continent.',
      questionLevel: 'Intermediate',
      questionType: 'History',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: "In the 'Pac-Man' video game, What's the name of the orange ghost?",
      questionLevel: 'Intermediate',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Clyde', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Photosynthesis is a highly tuned process. Plants use it to turn light into what?',
      questionLevel: 'Easy',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Calcium', isCorrect: false },
        { answerText: 'Xylem', isCorrect: false },
        { answerText: 'Chlorophyll', isCorrect: true },
        { answerText: 'Bark', isCorrect: false },
      ],
    },
    {
      questionText: 'In which movie was the iconic DeLorean time machine originally a refrigerator?',
      questionLevel: 'Intermediate',
      questionType: 'Movies',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Back to the Future', isCorrect: true },
      ],
    },
    {
      questionText: 'Jennifer Lopez and Ray Liotta co-starred in what drama?',
      questionLevel: 'Intermediate',
      questionType: 'Series',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'Shades of Blue', isCorrect: true },
      ],
    },













    {
      questionText: 'What happened in 1066?',
      questionLevel: 'Difficult',
      questionType: 'History',
      answerOptions: [
        { answerText: 'World War II', isCorrect: false },
        { answerText: 'The Discovery of America', isCorrect: false },
        { answerText: 'The Battle of Hastings', isCorrect: true },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: "What inspired game maker Satoshi Tajiri to create the character Pokemon?",
      questionLevel: 'Easy',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Pokemon', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Pure gold has a lot of interesting properties. Can you name one?',
      questionLevel: 'Easy',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'incredibly toxic', isCorrect: false },
        { answerText: 'essentially worthless until polished', isCorrect: false },
        { answerText: 'no conductivity at all', isCorrect: false },
        { answerText: 'Can be molded with bare hands', isCorrect: true },
      ],
    },
    {
      questionText: 'Which movies have over 24 minutes of just staring in them?',
      questionLevel: 'Easy',
      questionType: 'Movies',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: 'The Twilight series', isCorrect: true },
      ],
    },
    {
      questionText: 'Living life in the Arctic can be tough but rewarding. Can you name this show that follows RCMP officers as well as indigenous peoples?',
      questionLevel: 'Easy',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'Mr. Dressup', isCorrect: false },
        { answerText: 'The littlest Hobo', isCorrect: false },
        { answerText: 'On the road again', isCorrect: false },
        { answerText: 'North of 60', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of these was NOT a Roman leader?',
      questionLevel: 'Easy',
      questionType: 'History',
      answerOptions: [
        { answerText: 'Julius Caesar', isCorrect: false },
        { answerText: 'Caesar John', isCorrect: true },
        { answerText: 'Augustus', isCorrect: false },
        { answerText: 'Nero', isCorrect: false },
      ],
    },
    {
      questionText: "Who is the first character you play in 'Injustice 2'?",
      questionLevel: 'Easy',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Batman', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Conifers, like pine trees, always grow in triangular shape. Why is that?',
      questionLevel: 'Intermediate',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'To increase trunk strength', isCorrect: false },
        { answerText: 'To maximize photosynthesis', isCorrect: true },
        { answerText: 'To ward off pess', isCorrect: false },
        { answerText: 'To improve root structure', isCorrect: false },
      ],
    },
    {
      questionText: 'An endearing prostitute and a wealthy lawyer fall in love after spending a week together. What is the name of this chick flick?',
      questionLevel: 'Easy',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'Pretty Woman', isCorrect: true },
        { answerText: 'A Christmas Prince', isCorrect: false },
        { answerText: "My Best Friend's Wedding", isCorrect: false },
        { answerText: '50 First Dates', isCorrect: false },
      ],
    },
    {
      questionText: 'Before "Heartland", this series took over the airwaves. What is it called?',
      questionLevel: 'Easy',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'Babar', isCorrect: false },
        { answerText: 'Neon Rider', isCorrect: true },
        { answerText: "Da Vinci's Inquest", isCorrect: false },
        { answerText: 'Kid Steet', isCorrect: false },
      ],
    },
    {
      questionText: 'Cleopatra had an imaginary friend called Hamish. True or false?',
      questionLevel: 'Easy',
      questionType: 'History',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
      ],
    },
    {
      questionText: "What is a 'frag'?",
      questionLevel: 'Difficult',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'A hand grenade', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: "It's not a trick question. How do chemical elements vary from place to place in the universe?",
      questionLevel: 'Difficult',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'elements are found everywhere', isCorrect: true },
        { answerText: 'Mars elements are way different than other planets', isCorrect: false },
        { answerText: 'depends on how it was spread on the time of creation', isCorrect: false },
        { answerText: 'Earth is different and the elements found here is only available here', isCorrect: false },
      ],
    },
    {
      questionText: "Two competitors in the world of book selling find themselves unwittingly falling in love over email despite their real-life rivalry. What is the name of this much-loved chick flick?",
      questionLevel: 'Difficult',
      questionType: 'Movies',
      answerOptions: [
        { answerText: "You've got mail", isCorrect: true },
        { answerText: 'When Harry met Sally', isCorrect: false },
        { answerText: 'Friends with Benefits', isCorrect: false },
        { answerText: 'Autumn in New York', isCorrect: false },
      ],
    },
    {
      questionText: 'Based on a series of books, this show brings life back to basics. What is its name?',
      questionLevel: 'Difficult',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'Traders', isCorrect: false },
        { answerText: 'Kings of Kensington', isCorrect: false },
        { answerText: 'Degrassi High', isCorrect: false },
        { answerText: 'Road to Avonlea', isCorrect: true },
      ],
    },
    {
      questionText: 'Who did Henry VIII first marry?',
      questionLevel: 'Difficult',
      questionType: 'History',
      answerOptions: [
        { answerText: 'Catherine of Aragon', isCorrect: true },
        { answerText: 'Meghan Markle', isCorrect: false },
        { answerText: 'Kate Middleton', isCorrect: false },
        { answerText: 'Holly Willoughby', isCorrect: false },
      ],
    },
    {
      questionText: "What are the paintings in Minecraft modeled after?",
      questionLevel: 'Difficult',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Counterstrike Maps', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'What do Venus and Mercury have in common?',
      questionLevel: 'Difficult',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'atmospheres', isCorrect: false },
        { answerText: 'no moons', isCorrect: true },
        { answerText: 'nothing', isCorrect: false },
        { answerText: 'surface temperatures are same', isCorrect: false },
      ],
    },
    {
      questionText: 'The plot line of this chick flick goes like this: A tongue-tied English bookseller falls in love with a major American celebrity. Which movie do you think this is?',
      questionLevel: 'Difficult',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'Four Weddings and a Funeral', isCorrect: false },
        { answerText: 'About Time', isCorrect: false },
        { answerText: 'Notting Hill', isCorrect: true },
        { answerText: 'Say Anything', isCorrect: false },
      ],
    },
    {
      questionText: 'A show of variety, it first started airing in 1966. Do you know its name?',
      questionLevel: 'Difficult',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'The red green show', isCorrect: false },
        { answerText: 'Polka dot door', isCorrect: false },
        { answerText: 'Night Heat', isCorrect: false },
        { answerText: 'Les Beaux Dimanches', isCorrect: true },
      ],
    },
    {
      questionText: "Tomatoes, potatoes, chillies and a whole load of other things were brought to Europe in the 16th Century - they're not from Europe originally. Where did they come from?",
      questionLevel: 'Intermediate',
      questionType: 'History',
      answerOptions: [
        { answerText: 'Africa', isCorrect: false },
        { answerText: 'The Americas', isCorrect: true },
        { answerText: 'India', isCorrect: false },
        { answerText: 'Mexico', isCorrect: false },
      ],
    },
    {
      questionText: "What is the name of the first video game to be played in outer space?",
      questionLevel: 'Intermediate',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Starcraft', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Human teeth are as hard as what?',
      questionLevel: 'Intermediate',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Copper', isCorrect: false },
        { answerText: 'Shark Teeth', isCorrect: true },
        { answerText: 'Diamond dust', isCorrect: true },
        { answerText: 'Steel', isCorrect: false },
      ],
    },
    {
      questionText: 'In this chick flick, a recent graduate gets hired by a diva boss at a popular fashion magazine, forcing her to choose between her work life and her personal life. What is the name of this très chic comedy?',
      questionLevel: 'Intermediate',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'The Devil Wears Prada', isCorrect: true },
        { answerText: 'Picture Perfect', isCorrect: false },
        { answerText: 'The object of my Affection', isCorrect: false },
        { answerText: 'Roman Holiday', isCorrect: false },
      ],
    },
    {
      questionText: "It's not about your regular high school experience, but it is a cool one! What's the name of this program?",
      questionLevel: 'Intermediate',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'Breaker High', isCorrect: true },
        { answerText: 'The Red Green Show', isCorrect: false },
        { answerText: 'Babar', isCorrect: false },
        { answerText: 'Les Beaux Dimanches', isCorrect: false },
      ],
    },
    {
      questionText: 'Where was the Titanic headed to before it sank?',
      questionLevel: 'Intermediate',
      questionType: 'History',
      answerOptions: [
        { answerText: 'The USA', isCorrect: true },
        { answerText: 'Japan', isCorrect: false },
        { answerText: 'China', isCorrect: false },
        { answerText: 'Switzerland', isCorrect: false },
      ],
    },
    {
      questionText: "What video game franchise has racked up over 1 Billion dollars in lawsuits?",
      questionLevel: 'Intermediate',
      questionType: 'Games',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Grand Theft Auto', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'What tissues connect the muscles to the bones?',
      questionLevel: 'Intermediate',
      questionType: 'Science',
      answerOptions: [
        { answerText: 'Tendons', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'A bride, with the help of her jaded maid of honor and over-the-top bridesmaids, navigates the sometimes-tricky world of weddings and saying "I do." Do you know what this blockbuster chick flick is called?',
      questionLevel: 'Intermediate',
      questionType: 'Movies',
      answerOptions: [
        { answerText: 'Beaches', isCorrect: false },
        { answerText: 'Runaway Bride', isCorrect: false },
        { answerText: 'The Heat', isCorrect: false },
        { answerText: 'Bridesmaids', isCorrect: true },
      ],
    },
    {
      questionText: 'This early 2000s show follows regular teenage lives in BC. Do you know its name?',
      questionLevel: 'Intermediate',
      questionType: 'Series',
      answerOptions: [
        { answerText: 'The Newsroom', isCorrect: false },
        { answerText: "Fred Penner's Place", isCorrect: false },
        { answerText: 'Street Cents', isCorrect: true },
        { answerText: 'Due South', isCorrect: false },
      ],
    },
  ];

  module.exports = {
    questions,
    instructions,
  };