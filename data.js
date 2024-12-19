const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    ``,
  ];
  
  const thoughtBodies = [
    "Just tried this new recipe, and it turned out AMAZING! 😍 Who wants the link?",
    "Feeling grateful for the little things today. 🌿",
    "Why does it take me 3 hours to pick a movie and 10 minutes to finish a pizza? 🍕😂",
    "Throwback to the best road trip ever. Can’t wait to do it again! 🚗✨",
    "Anyone else feel like time is flying by too fast lately? Where did the year go? 😅",
    "Starting a new book today! Let’s see if I actually finish this one. 📚",
    "Some days are harder than others, but we keep pushing forward. 💪",
    "Can we all agree that naps are underrated? 😴",
    "Shoutout to the barista who made my coffee perfect this morning. You’re a hero. ☕❤️",
    "You know you’re an adult when getting new kitchen appliances makes you ridiculously happy. 😂",
    "Just a reminder that you are enough. Keep going. 🌟",
    "So excited to share some big news soon! Stay tuned. 😁",
    "Saw the most beautiful sunset tonight. Sometimes nature just takes your breath away. 🌅",
    "Anyone else get emotionally attached to their favorite TV show characters? 😭📺",
    "Life update: I’m finally learning how to cook something other than instant noodles. Progress! 🥘",
    "The older I get, the more I appreciate quiet weekends at home. 🏡",
    "Facebook memories really know how to hit you in the feels. 10 years ago? No way. 😳",
    "When life gives you lemons… squeeze them into a cocktail. 🍹😂",
    "Does anyone else have a cat that thinks they’re the boss of the house? Asking for a friend. 🐱",
    "Friendly reminder to drink your water today. Stay hydrated, friends! 💧",
  ];
  
  
  
  const possibleReactions = [
    'This is exactly what I needed to hear today. Thank you!',
    'I totally disagree, but I respect your opinion.',
    'Haha, this made me laugh so hard! 😂',
    'Wow, I never thought about it that way. Mind blown. 🤯',
    'Can someone summarize this for me? Too long to read.',
    'This deserves more views! You killed it 🔥.',
    'I feel like this is so underrated. People need to see this!',
    'Who else paused their day just to watch this? 😅',
    'Honestly, I wish I saw this earlier. Would have saved me so much time!',
    'This gave me chills. Beautifully said.',
    'Not sure why this popped up on my feed, but I’m glad it did!',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random videos that we can add to the database. Includes video responses.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        description: getRandomArrItem(thoughtBodies),
        advertiserFriendly: Math.random() < 0.5,
        responses: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  export { getRandomName, getRandomThoughts, getThoughtReactions };
  