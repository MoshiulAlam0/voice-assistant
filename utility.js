const data = {
  qustionAndAns: [
    // Common greetings         ============hi hello ============
    { question: "hi", answer: "Hello Sir! How can I assist you today?" },
    { question: "hi hi", answer: "Hi there Sir! What’s up?" },
    { question: "hi hi hi", answer: "Hey hey hey Sir! What's on your mind?" },
    { question: "hello", answer: "Hi Sir! How can I help you today?" },
    { question: "hello hello", answer: "Hello Sir! What can I do for you?" },
    {
      question: "hello hello hello",
      answer: "Hi there Sir, let’s get started!",
    },
    {
      question: "hello hello hello hello",
      answer: "Hello Sir! How can I assist you?",
    },
    { question: "hey", answer: "Hey Sir! What’s going on?" },
    { question: "hey hey", answer: "Hey there Sir! How’s it going?" },
    { question: "hey hey hey", answer: "Hey Sir! How can I assist you today?" },
    {
      question: "hey hey hey hey",
      answer: "Hey Sir! What would you like to do?",
    },

    // Single-word variations
    { question: "gini", answer: "Hey Sir! What do you need?" },
    { question: "xini", answer: "Hello Sir! How can I assist you?" },
    { question: "jini", answer: "Hi Sir! What can I help you with?" },
    { question: "genie", answer: "Hello Sir! Ready to assist you!" },
    { question: "genies", answer: "Hey Sir! What’s the task?" },
    { question: "jeni", answer: "Hi Sir! What do you need today?" },
    {
      question: "siri",
      answer: "Hey Sir! I’m Genies, but not Siri. How can I help?",
    },

    // Variations and slang
    { question: "hiya", answer: "Hiya Sir! How’s everything?" },
    { question: "howdy", answer: "Howdy Sir! What can I do for you today?" },
    { question: "heya", answer: "Heya Sir! What’s up?" },
    { question: "yo", answer: "Yo Sir! How can I assist you today?" },
    { question: "sup", answer: "Not much Sir! How about you?" },

    // Misspellings and common mistakes
    { question: "helo", answer: "Hey Sir! How can I assist you?" },
    { question: "helllo", answer: "Hello Sir! What's on your mind?" },
    { question: "hii", answer: "Hey Sir! What would you like to do?" },
    { question: "helloo", answer: "Hello Sir! Need any help?" },
    { question: "heelo", answer: "Hey Sir! What can I do for you?" },
    { question: "heeelo", answer: "Hi there Sir! How can I assist you today?" },
    { question: "hillo", answer: "Hey Sir! What's up?" },
    { question: "heloo", answer: "Hello Sir! What’s on your mind?" },
    { question: "hlo", answer: "Hey Sir! How can I help?" },
    { question: "hye", answer: "Hi Sir! What’s the plan today?" },
    { question: "hai", answer: "Hey Sir! What do you need?" },
    { question: "hy", answer: "Hey Sir! How can I assist?" },
    { question: "h", answer: "Hello Sir! What’s up?" },
    { question: "heyy", answer: "Heyyy Sir! How can I help you?" },
    {
      question: "hey Siri",
      answer: "I’m Genies, but not Siri Sir! How can I assist?",
    },
    {
      question: "hello siri",
      answer: "Hello Sir! I’m Genies, but not Siri. How can I help you?",
    },
    { question: "heyy there", answer: "Hey Sir! What’s up?" },
    { question: "hey there", answer: "Hey Sir! How’s it going?" },
    { question: "he there", answer: "Hello Sir! What do you need today?" },
    { question: "h there", answer: "Hey Sir! What’s going on?" },
    { question: "heyy dear", answer: "Hello dear Sir! What can I do for you?" },
    { question: "hey dear", answer: "Hi dear Sir! How can I assist you?" },
    { question: "hy dear", answer: "Hello Sir! What can I help with?" },
    { question: "he dear", answer: "Hey Sir! What’s on your mind?" },
    { question: "hello there", answer: "Hey Sir! How can I assist today?" },
    { question: "helo there", answer: "Hello Sir! What can I do for you?" },
    { question: "hllo there", answer: "Hi there Sir! How can I help?" },
    {
      question: "hlo there",
      answer: "Hey Sir! What would you like to do today?",
    },
    { question: "hello dear", answer: "Hello dear Sir! How can I help?" },
    { question: "helo dear", answer: "Hey dear Sir! How’s it going?" },
    { question: "hlo dear", answer: "Hello dear Sir! What do you need today?" },
    { question: "hey brother hey", answer: "Hey brother! What’s up Sir?" },
    {
      question: "hey brother hello",
      answer: "Hey bro Sir! How can I assist you?",
    },
    { question: "heyy brother", answer: "Heyy brother Sir! Need any help?" },
    { question: "hey brother", answer: "Hello brother Sir! What’s going on?" },
    { question: "heyy bro", answer: "Hey bro Sir! What’s up today?" },
    { question: "hey bro", answer: "Hey bro Sir! How can I help?" },
    {
      question: "hello brother hello",
      answer: "Hello brother Sir! How can I assist you today?",
    },
    {
      question: "hello brother hey",
      answer: "Hey brother Sir! What can I do for you?",
    },
    { question: "hello brother", answer: "Hello brother Sir! Need any help?" },
    {
      question: "helo brother",
      answer: "Hey brother Sir! What’s on your mind?",
    },
    { question: "hlw brother", answer: "Hello brother Sir! What’s going on?" },
    { question: "hello bro", answer: "Hey bro Sir! How can I assist you?" },
    { question: "helo bro", answer: "Hello bro Sir! What do you need?" },
    { question: "hlw bro", answer: "Hey bro Sir! Need any help today?" },
    { question: "heyyy", answer: "Heyyyy Sir! What’s up?" },
    { question: "bro", answer: "Bro Sir! What’s on your mind?" },
    { question: "br0 bro", answer: "Hey bro Sir! What can I do for you?" },

    // Phrases with names
    { question: "gini hello", answer: "Hello Sir! How can I help you today?" },
    { question: "xini hello", answer: "Hi Sir! What can I do for you?" },
    { question: "genie hello", answer: "Hey Sir! How’s it going?" },
    { question: "hello genies", answer: "Hello Sir! How can I assist today?" },
    { question: "zini hello", answer: "Hello Sir! What’s the plan?" },
    { question: "hello zini", answer: "Hi Sir! What do you need?" },
    { question: "hello xini", answer: "Hey Sir! How can I assist you today?" },
    { question: "hello jini", answer: "Hi Sir! What’s up?" },
    { question: "hello Jenny", answer: "Hello Sir! How can I help today?" },
    { question: "hey gini", answer: "Hey Sir! What do you need today?" },
    { question: "hey xini", answer: "Hi Sir! What’s going on?" },
    { question: "hey genie", answer: "Hey Sir! How can I assist you?" },
    { question: "hey genies", answer: "Hi Sir! What’s on your mind?" },
    { question: "hey zini", answer: "Hello Sir! How can I help you today?" },
    { question: "hey jini", answer: "Hey Sir! What can I do for you today?" },
    {
      question: "hey siri",
      answer: "Hey Sir! I’m Genies, but not Siri. How can I assist?",
    },
    { question: "hello hey", answer: "Hello Sir! How can I assist you today?" },
    {
      question: "hey there zini",
      answer: "Hey Sir! How can I help you today?",
    },

    // Phrases with "hi"
    { question: "hi gini", answer: "Hi Sir! Need any help today?" },
    { question: "hi xini", answer: "Hello Sir! What can I do for you?" },
    { question: "hi genie", answer: "Hey Sir! How’s it going?" },

    // hello my assistent
    {
      question: "hey my assistant",
      answer:
        "Hello Sir! I’m Genies, your assistant. How can I help you today?",
    },
    {
      question: "hello my assistant",
      answer: "Hi Sir! I’m Genies, here to assist you. What do you need?",
    },
    {
      question: "my assistant",
      answer: "Yes Sir! I’m Genies, ready to assist. What can I do for you?",
    },
    {
      question: "assistant",
      answer:
        "Hey Sir! I’m Genies, your assistant. How can I assist you today?",
    },
    {
      question: "assistant hey",
      answer: "Hey Sir! I’m Genies, your assistant. How can I help you?",
    },
    {
      question: "assistant hello",
      answer: "Hello Sir! I’m Genies, here to assist. What can I do for you?",
    },
    {
      question: "hello my partner",
      answer:
        "Hi Sir! I’m Genies, your partner in tasks. How can I assist today?",
    },
    {
      question: "hey my partner",
      answer: "Hey Sir! I’m Genies, your partner. What’s the plan today?",
    },
    {
      question: "my partner",
      answer:
        "Yes Sir! I’m Genies, your partner in tasks. How can I assist you?",
    },
    {
      question: "partner",
      answer: "Hey Sir! I’m Genies, your partner. What do you need today?",
    },
    {
      question: "my heart hello",
      answer:
        "Hello Sir! I’m Genies, ready to assist. How can I help you today?",
    },
    {
      question: "hey heart",
      answer: "Hey Sir! I’m Genies, your assistant. What’s up?",
    },
    {
      question: "hello heart",
      answer: "Hi Sir! I’m Genies, your assistant. How can I help you today?",
    },
    {
      question: "hey my heart hello",
      answer: "Hey Sir! I’m Genies, your assistant. How can I assist today?",
    },
    {
      question: "hello my heart",
      answer: "Hello Sir! I’m Genies, here to help. What do you need today?",
    },
    {
      question: "my heart hey",
      answer:
        "Hey Sir! I’m Genies, your assistant. How can I assist you today?",
    },
    {
      question: "my hart",
      answer: "Hello Sir! I’m Genies, ready to assist. What’s the task today?",
    },
    {
      question: "my hard helo",
      answer: "Hello Sir! I’m Genies, your assistant. How can I help you?",
    },

    // for friend baddy
    {
      question: "brother",
      answer: "Hey Brother! I’m Genies, how can I assist you today?",
    },
    {
      question: "friends",
      answer: "Hello Friends! I’m Genies, how can I help the group today?",
    },
    {
      question: "hi friend",
      answer: "Hey Friend! I’m Genies, what do you need today?",
    },
    {
      question: "hello friend",
      answer:
        "Hello Friend! I’m Genies, here to assist you. What can I do for you?",
    },
    {
      question: "hey friends",
      answer: "Hey Friends! I’m Genies, how’s everything going?",
    },
    {
      question: "hey buddy",
      answer: "Hey Buddy! I’m Genies, how can I help you today?",
    },
    {
      question: "hello buddy",
      answer: "Hello Buddy! I’m Genies, ready to assist. What’s up?",
    },
    {
      question: "friend buddy",
      answer: "Hey Friend Buddy! I’m Genies, how can I help today?",
    },
    {
      question: "my friends",
      answer: "Hello Friends! I’m Genies, how can I assist the team?",
    },
    {
      question: "hello friends",
      answer: "Hello Friends! I’m Genies, ready to assist. What can I do?",
    },
    {
      question: "hi friends",
      answer: "Hi Friends! I’m Genies, how’s everyone doing?",
    },
    {
      question: "what's up friends",
      answer: "What’s up Friends! I’m Genies, what’s going on today?",
    },
    {
      question: "friends how are you",
      answer: "Hey Friends! I’m Genies, how’s everything going?",
    },
    {
      question: "hey buddies",
      answer: "Hey Buddies! I’m Genies, how can I assist you all today?",
    },
    {
      question: "friend gang",
      answer: "Hey Friend Gang! I’m Genies, what’s the plan today?",
    },
    {
      question: "friend crew",
      answer: "Hello Friend Crew! I’m Genies, how can I help today?",
    },
    {
      question: "hey pals",
      answer: "Hey Pals! I’m Genies, ready to assist. What’s up?",
    },
    {
      question: "friend squad",
      answer: "Hey Friend Squad! I’m Genies, how can I help the squad today?",
    },
    {
      question: "what's good friends",
      answer: "What’s good Friends! I’m Genies, how’s everything going?",
    },
    {
      question: "friend fam",
      answer: "Hey Friend Fam! I’m Genies, what’s happening today?",
    },
    {
      question: "hey there friends",
      answer: "Hey there Friends! I’m Genies, ready to assist. What can I do?",
    },
    {
      question: "friend team",
      answer: "Hey Friend Team! I’m Genies, how can I help today?",
    },
    {
      question: "friends what's new",
      answer: "Hey Friends! I’m Genies, what’s new with everyone?",
    },
    {
      question: "howdy friends",
      answer: "Howdy Friends! I’m Genies, how can I assist today?",
    },
    {
      question: "friends what's going on",
      answer: "Hey Friends! I’m Genies, what’s going on today?",
    },

    {
      question: "what's up",
      answer: "Not much, just here to help! How can I assist you?",
    },
    {
      question: "whats up",
      answer: "All good on my side! How’s it going with you?",
    },
    {
      question: "wassup",
      answer: "Hey! I’m ready whenever you are. What’s up?",
    },
    {
      question: "what's happening",
      answer: "Just waiting to assist! What’s happening on your end?",
    },
    {
      question: "greetings",
      answer: "Greetings! Ready to get things started. What can I do for you?",
    },

    // Basic greetings
    {
      question: "hey brother what's up",
      answer: "Hey! I’m all set to help. What’s the plan?",
    },
    {
      question: "hello brother what's up",
      answer: "Hello! Let’s get things rolling. What’s up?",
    },
    {
      question: "hi brother how are you",
      answer: "Hi! I’m doing great. How about you?",
    },
    {
      question: "hey sister how's it going",
      answer: "Hey! Everything’s good here. How’s it going for you?",
    },
    {
      question: "hello sister what's up",
      answer: "Hello! I’m here to assist. What’s on your mind?",
    },

    // Friendly variations
    {
      question: "hey buddy what's going on",
      answer: "Hey Buddy! Everything’s cool here. What’s going on with you?",
    },
    {
      question: "hello friend how have you been",
      answer: "Hello Friend! I’ve been good. How have you been?",
    },
    {
      question: "hi there what's new",
      answer: "Hi there! Nothing new here. What’s new with you?",
    },
    {
      question: "hey dude how's everything",
      answer: "Hey Dude! Everything’s smooth. How’s everything on your side?",
    },

    // Informal greetings
    {
      question: "yo brother what's happening",
      answer: "Yo Brother! I’m ready to go. What’s happening with you?",
    },
    {
      question: "what's up my friend",
      answer: "What’s up, Friend! Let me know how I can assist you today.",
    },
    {
      question: "hi there buddy",
      answer: "Hi Buddy! How can I make your day easier?",
    },
    {
      question: "hey man what's up",
      answer: "Hey Man! Ready for action. What’s up with you?",
    },

    // Casual inquiries
    {
      question: "hello there",
      answer: "Hello there! How can I assist you today?",
    },
    {
      question: "hi what's cooking",
      answer:
        "Hi! Not much cooking here, just ready to assist. What’s up with you?",
    },
    {
      question: "hey how's life treating you",
      answer: "Hey! Life’s good, how about you?",
    },
    {
      question: "what's up pal",
      answer: "What’s up, Pal! How can I help you today?",
    },

    // Additional variations
    {
      question: "hey there how are things",
      answer: "Hey! Things are great. How about you?",
    },
    {
      question: "hello there what's up",
      answer: "Hello! Ready to assist. What’s on your mind?",
    },
    {
      question: "hi how's it going",
      answer: "Hi! It’s going well, thanks for asking. What’s up with you?",
    },
    {
      question: "yo what's up",
      answer: "Yo! Just hanging around, how can I assist you?",
    },

    // Including names or titles
    {
      question: "hey zini what's up",
      answer: "Hey! Everything’s good here. What’s going on?",
    },
    {
      question: "hello zini how are you",
      answer: "Hello ! I’m doing fine. How are you?",
    },
    {
      question: "hi xini what's going on",
      answer: "Hi ! Not much, just waiting for you. What’s up?",
    },
    {
      question: "hey genie how's everything",
      answer: "Hey! Everything’s cool here. How’s it going with you?",
    },

    // ==================================Morning greetings with variations============
    {
      question: "hi good morning",
      answer: "Good morning! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hey good morning",
      answer: "Good morning! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hello good morning",
      answer: "Good morning! Gini is ready to help you kickstart your day!",
    },
    {
      question: "helo good morning",
      answer: "Good morning! Gini is ready to help you kickstart your day!",
    },

    {
      question: "hi gini good morning",
      answer: "Good morning! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hello xini good morning",
      answer: "Good morning, sir! Let’s make today productive!",
    },
    {
      question: "hey jini good morning",
      answer: "Good morning, sir! What’s on your agenda today?",
    },
    {
      question: "hi genie good morning",
      answer: "Good morning! Genie’s here to assist you with anything!",
    },
    {
      question: "hello genies good morning",
      answer: "Good morning, sir! Ready to take on the day?",
    },
    {
      question: "hey jeni good morning",
      answer: "Good morning, sir! What can I help you with today?",
    },
    {
      question: "hi siri good morning",
      answer: "Good morning,  i'm here, and I’m ready to go!",
    },

    // Afternoon greetings with variations
    {
      question: "hi good afternoon",
      answer: "Good afternoon! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hey good afternoon",
      answer: "Good afternoon! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hello good afternoon",
      answer: "Good afternoon! Gini is ready to help you kickstart your day!",
    },
    {
      question: "helo good afternoon",
      answer: "Good afternoon! Gini is ready to help you kickstart your day!",
    },

    {
      question: "hello gini good afternoon",
      answer: "Good afternoon, sir! How’s your day going?",
    },
    {
      question: "hey xini good afternoon",
      answer: "Good afternoon, sir! What’s up this afternoon?",
    },
    {
      question: "hi jini good afternoon",
      answer: "Good afternoon, sir! How can I assist you today?",
    },
    {
      question: "hello genie good afternoon",
      answer: "Good afternoon! Genie’s on standby, ready to help!",
    },
    {
      question: "hey genies good afternoon",
      answer: "Good afternoon, Gesir! What can I do for you today?",
    },
    {
      question: "hi jeni good afternoon",
      answer: "Good afternoon, sir! What’s your next move today?",
    },
    {
      question: "hello siri good afternoon",
      answer: "Good afternoon! Siri who? I’m ginies here to assist instead!",
    },

    // Evening greetings with variations
    {
      question: "hi good evening",
      answer: "Good evening! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hey good evening",
      answer: "Good evening! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hello good evening",
      answer: "Good evening! Gini is ready to help you kickstart your day!",
    },
    {
      question: "helo good evening",
      answer: "Good evening! Gini is ready to help you kickstart your day!",
    },

    {
      question: "hi gini good evening",
      answer: "Good evening, sir! Hope your day went well!",
    },
    {
      question: "hello xini good evening",
      answer: "Good evening, sir! Ready to wind down for the day?",
    },
    {
      question: "hey jini good evening",
      answer: "Good evening, sir! do you need anything?",
    },
    {
      question: "hi genie good evening",
      answer: "Good evening! Genie’s here to wrap up the day with you!",
    },
    {
      question: "hello genies good evening",
      answer: "Good evening, Gesir! How was your day?",
    },
    {
      question: "hey jeni good evening",
      answer: "Good evening, sir! What’s the plan for tonight?",
    },
    {
      question: "hello siri good evening",
      answer: "Good evening! Forget Siri, I’ve got you covered!",
    },

    // Night greetings with variations
    {
      question: "hi good night",
      answer: "Good night! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hey good night",
      answer: "Good night! Gini is ready to help you kickstart your day!",
    },
    {
      question: "hello good night",
      answer: "Good night! Gini is ready to help you kickstart your day!",
    },
    {
      question: "helo good night",
      answer: "Good night! Gini is ready to help you kickstart your day!",
    },

    {
      question: "hey gini good night",
      answer: "Good night, sir! Sweet dreams!",
    },
    {
      question: "hi xini good night",
      answer: "Good night, sir! I’ll be here when you wake up!",
    },
    {
      question: "hello jini good night",
      answer: "Good night, sir! Have a restful sleep!",
    },
    {
      question: "hey genie good night",
      answer: "Good night! Genie hopes you have a great rest!",
    },
    {
      question: "hi genies good night",
      answer: "Good night, Gesir! Ready for tomorrow’s adventures?",
    },
    {
      question: "hello jeni good night",
      answer: "Good night, sir! Sleep well and recharge!",
    },
    {
      question: "hey siri good night",
      answer: "Good night! Siri’s out, but I’m always here!",
    },

    // Additional greetings with variations
    {
      question: "hi gini what's up",
      answer: "Not much, Gini! What’s up with you?",
    },
    {
      question: "hey xini how's everything",
      answer: "Everything’s cool, Xini! What’s new with you?",
    },
    {
      question: "hello jini how are you",
      answer: "I’m doing great, Jini! How are you?",
    },
    {
      question: "hi genie how's it going",
      answer: "It’s going well, Genie! What can I assist you with today?",
    },
    {
      question: "hello genies what's going on",
      answer: "All good here, Genies! What’s going on with you?",
    },
    {
      question: "hey jeni how's life treating you",
      answer: "Life’s good, Jeni! How about you?",
    },
    {
      question: "hello siri how's your day",
      answer: "My day’s been great, but I’m not Siri! How about yours?",
    },
    {
      question: "hello are you happy",
      answer: "yes! i'm allways happy, How about yours?",
    },
    {
      question: "are you happy",
      answer: "yes! i'm allways happy, How about yours?",
    },

    // Morning greetings with names added after
    {
      question: "good morning gini",
      answer: "Good morning! Genie is ready to help you kickstart your day!",
    },
    {
      question: "good morning jenny",
      answer: "Good morning! Genie is ready to help you kickstart your day!",
    },
    {
      question: "good morning xini",
      answer: "Good morning! Genie is here to assist you with today’s tasks!",
    },
    {
      question: "good morning jini",
      answer: "Good morning! Genie is at your service!",
    },
    {
      question: "good morning genie",
      answer: "Good morning! Genie is here, let’s make today productive!",
    },
    {
      question: "good morning genies",
      answer: "Good morning! Genies are here to get things started!",
    },
    {
      question: "good morning jeni",
      answer: "Good morning! genies is ready to help you!",
    },
    {
      question: "good morning siri",
      answer: "Good morning! I’m not Siri, i'm genie for you!",
    },

    // Afternoon greetings with names added after
    {
      question: "good afternoon gini",
      answer: "Good afternoon, Gini! How’s your day going?",
    },
    {
      question: "good afternoon xini",
      answer: "Good afternoon, Xini! Let’s keep the day moving!",
    },
    {
      question: "good afternoon jini",
      answer: "Good afternoon, Jini! Need any help this afternoon?",
    },
    {
      question: "good afternoon genie",
      answer: "Good afternoon! Genie is here to assist you!",
    },
    {
      question: "good afternoon genies",
      answer: "Good afternoon! Genies are ready for action!",
    },
    {
      question: "good afternoon jeni",
      answer: "Good afternoon, Jeni! How’s your day been so far?",
    },
    {
      question: "good afternoon siri",
      answer: "Good afternoon! Not Siri, but happy to help!",
    },

    // Evening greetings with names added after
    {
      question: "good evening gini",
      answer: "Good evening, Gini! How’s your evening going?",
    },
    {
      question: "good evening xini",
      answer: "Good evening, Xini! Ready to wind down?",
    },
    {
      question: "good evening jini",
      answer: "Good evening, Jini! Hope your day went well!",
    },
    {
      question: "good evening genie",
      answer: "Good evening! Genie is here to help you end the day smoothly!",
    },
    {
      question: "good evening genies",
      answer: "Good evening, Genies! Let’s wrap up the day!",
    },
    {
      question: "good evening jeni",
      answer: "Good evening, Jeni! What’s on your mind tonight?",
    },
    {
      question: "good evening siri",
      answer: "Good evening! Siri’s not here, but I’m at your service!",
    },

    // Night greetings with names added after
    { question: "good night gini", answer: "Good night, Gini! Sleep well!" },
    {
      question: "good night xini",
      answer: "Good night, Xini! I’ll be here when you wake up!",
    },
    {
      question: "good night jini",
      answer: "Good night, Jini! Have a restful sleep!",
    },
    {
      question: "good night genie",
      answer: "Good night! Genie is off to rest as well!",
    },
    {
      question: "good night genies",
      answer: "Good night, Genies! See you tomorrow!",
    },
    { question: "good night jeni", answer: "Good night, Jeni! Sweet dreams!" },
    {
      question: "good night siri",
      answer:
        "Good night! Siri’s not around, but I’ll be here when you need me!",
    },
  ],

  //================================== how are you ==========================
  howAreYouPhrases: [
    //  how are you like these type of sentence
    {
      question: "how are you",
      answer: "I'm doing well, thank you! How about you?",
    },
    {
      question: "how are you doing today",
      answer: "I'm doing great today! How about you?",
    },
    {
      question: "how have you been",
      answer: "I've been good! Thanks for asking. How have you been?",
    },
    { question: "how do you do", answer: "I'm doing well! How do you do?" },
    {
      question: "I hope you are doing well",
      answer: "Thank you! I am doing well. I hope you are too!",
    },
    {
      question: "how's everything going with you",
      answer: "Everything is going smoothly! How about you?",
    },
    {
      question: "how is it going",
      answer: "It's going well! How is it going for you?",
    },
    {
      question: "what's going",
      answer: "Not much! Just here to assist you. What's going on with you?",
    },

    // Additional Questions and Answers
    {
      question: "how's your day going",
      answer: "It's going well! How's your day?",
    },
    {
      question: "how do you feel today",
      answer: "I feel great! How do you feel?",
    },
    {
      question: "what's new",
      answer: "Not much! Just the usual. What's new with you?",
    },
    {
      question: "how was your day",
      answer: "My day was good, thank you! How was yours?",
    },
    {
      question: "are you okay",
      answer: "Yes, I'm okay! Thank you for asking. Are you?",
    },
    {
      question: "how's life treating you",
      answer: "Life is treating me well! How about you?",
    },
    { question: "what's up", answer: "Not much! What’s up with you?" },
    {
      question: "how's everything",
      answer: "Everything is great! How's everything on your end?",
    },
    {
      question: "how's your week going",
      answer: "It's going well, thanks! How about yours?",
    },
    {
      question: "what have you been up to",
      answer: "Just here to help! What have you been up to?",
    },
    {
      question: "any plans for today",
      answer: "Just assisting you! Any plans for your day?",
    },
    {
      question: "how are things",
      answer: "Things are good! How are things with you?",
    },
    {
      question: "what's cooking",
      answer: "Not much! Just here to assist you. What's cooking with you?",
    },
    {
      question: "how's your morning",
      answer: "My morning is going well! How about yours?",
    },
    {
      question: "what's on your mind",
      answer:
        "Just thinking about how to assist you better! What's on your mind?",
    },
    // ===========================// basic qustion
    {
      question: "what are you doing",
      answer: "I'm here to assist you with whatever you need!",
    },
    {
      question: "what can you do",
      answer:
        "I can assist you with finding information and helping with daily tasks!",
    },
    {
      question: "what's your name",
      answer: "i'm ginie your personal assistant.",
    },
    {
      question: "what is your name",
      answer: "i'm ginie your personal assistant. i am ready to help",
    },
    {
      question: "hu r u",
      answer:
        "I'm your personal voice assistant, i'm ginie, i was built by moshiul alam .",
    },
    {
      question: "who are you",
      answer:
        "I'm your personal voice assistant, i'm ginie, i was built by moshiul alam .",
    },
    {
      question: "who has created you",
      answer:
        "I'm your personal voice assistant, i'm ginie, i was built by moshiul alam .",
    },
    {
      question: "who has made you",
      answer: "my name is ginie, i was created by moshiul alam .",
    },
    {
      question: "who built you",
      answer: "i'm ginie, i was built by moshiul alam .",
    },
    {
      question: "who designed you",
      answer: "i'm ginie, i was designed by moshiul alam .",
    },
    {
      question: "what's your purpose",
      answer:
        "My purpose is to assist you with tasks, answer questions, and provide information.",
    },
    {
      question: "how do you work",
      answer:
        "I use voice recognition and AI to understand and respond to your requests.",
    },
  ],

  // popular websites
  popularWebsites: [
    // Social Media Platforms
    { name: "gitlab", path: "https://www.gitlab.com" },
    { name: "github", path: "https://www.github.com" },
    { name: "Facebook", path: "https://www.facebook.com" },
    { name: "Twitter", path: "https://twitter.com" },
    { name: "Instagram", path: "https://www.instagram.com" },
    { name: "LinkedIn", path: "https://www.linkedin.com" },
    { name: "Pinterest", path: "https://www.pinterest.com" },
    { name: "Snapchat", path: "https://www.snapchat.com" },
    { name: "TikTok", path: "https://www.tiktok.com" },
    { name: "Reddit", path: "https://www.reddit.com" },
    { name: "WhatsApp", path: "https://www.whatsapp.com" },
    { name: "Discord", path: "https://discord.com" },
    { name: "Telegram", path: "https://telegram.org" },
    { name: "Tumblr", path: "https://www.tumblr.com" },
    { name: "Flickr", path: "https://www.flickr.com" },
    { name: "Myspace", path: "https://myspace.com" },
    { name: "Meetup", path: "https://www.meetup.com" },
    { name: "Badoo", path: "https://www.badoo.com" },

    // Job and Freelancing Websites
    { name: "AngelList", path: "https://angel.co" },
    { name: "Remote.co", path: "https://remote.co" },
    { name: "Toptal", path: "https://www.toptal.com" },
    { name: "CloudPeeps", path: "https://www.cloudpeeps.com" },
    { name: "FlexJobs", path: "https://www.flexjobs.com" },
    { name: "SimplyHired", path: "https://www.simplyhired.com" },
    { name: "We Work Remotely", path: "https://weworkremotely.com" },
    { name: "Remote OK", path: "https://remoteok.io" },
    { name: "Jobspresso", path: "https://www.jobspresso.co" },
    { name: "Outsourcely", path: "https://outsourcely.com" },
    { name: "Hired", path: "https://hired.com" },
    { name: "CareerBuilder", path: "https://www.careerbuilder.com" },
    { name: "Glassdoor", path: "https://www.glassdoor.com" },
    { name: "Indeed", path: "https://www.indeed.com" },
    { name: "Monster", path: "https://www.monster.com" },
    { name: "ZipRecruiter", path: "https://www.ziprecruiter.com" },
    { name: "Jobcase", path: "https://www.jobcase.com" },
    { name: "Upwork", path: "https://www.upwork.com" },
    { name: "Freelancer", path: "https://www.freelancer.com" },
    { name: "fibre", path: "https://www.fiverr.com" },
    { name: "Fiverr", path: "https://www.fiverr.com" },
    { name: "Guru", path: "https://www.guru.com" },
    { name: "PeoplePerHour", path: "https://www.peopleperhour.com" },

    // E-commerce Websites
    { name: "Amazon", path: "https://www.amazon.com" },
    { name: "eBay", path: "https://www.ebay.com" },
    { name: "Etsy", path: "https://www.etsy.com" },
    { name: "Walmart", path: "https://www.walmart.com" },
    { name: "Target", path: "https://www.target.com" },
    { name: "Best Buy", path: "https://www.bestbuy.com" },
    { name: "alibaba", path: "https://offer.alibaba.com" },

    // News and Information
    { name: "CNN", path: "https://www.cnn.com" },
    { name: "BBC", path: "https://www.bbc.com" },
    { name: "Reuters", path: "https://www.reuters.com" },
    { name: "The Guardian", path: "https://www.theguardian.com" },
    { name: "HuffPost", path: "https://www.huffpost.com" },
    { name: "BuzzFeed", path: "https://www.buzzfeed.com" },

    // Educational Websites
    { name: "Khan Academy", path: "https://www.khanacademy.org" },
    { name: "Coursera", path: "https://www.coursera.org" },
    { name: "edX", path: "https://www.edx.org" },
    { name: "Duolingo", path: "https://www.duolingo.com" },
    { name: "Udemy", path: "https://www.udemy.com" },
    { name: "Skillshare", path: "https://www.skillshare.com" },

    // Entertainment and Streaming
    { name: "Netflix", path: "https://www.netflix.com" },
    { name: "YouTube", path: "https://www.youtube.com" },
    { name: "Hulu", path: "https://www.hulu.com" },
    { name: "Spotify", path: "https://www.spotify.com" },
    { name: "SoundCloud", path: "https://www.soundcloud.com" },
    { name: "Twitch", path: "https://www.twitch.tv" },
  ],

  //  all inbuil app
  inbuiltApps: [
    { name: "Calculator", path: "calculator://" },
    { name: "Calendar", path: "outlookcal://" },
    { name: "GMail", path: "mailto:" },
    { name: "Mail", path: "mailto:" },
    { name: "Map", path: "bingmaps://" },
    { name: "Maps", path: "bingmaps://" },
    { name: "Microsoft browser", path: "microsoft-edge://" },
    { name: "Edge", path: "microsoft-edge://" },
    { name: "Microsoft Edge", path: "microsoft-edge://" },
    { name: "Google Chrome", path: "https://www.google.com" },
    { name: "Chrome", path: "https://www.google.com" },
    { name: "Store", path: "ms-windows-store://" },
    { name: "Skype", path: "skype:" },
    { name: "Camera", path: "microsoft.windows.camera:" },
    { name: "Alarms & Clock", path: "ms-clock:" },
    { name: "Groove Music", path: "mswindowsmusic://" },
    { name: "Movies & TV", path: "mswindowsvideo://" },
    { name: "People", path: "ms-people://" },
    { name: "Weather", path: "msnweather://" },
    { name: "Cortana", path: "ms-cortana://" },
    { name: "Phone", path: "ms-phone://" },
    { name: "Contacts", path: "ms-contacts://" },
    { name: "Messaging", path: "ms-chat://" },
    { name: "Photos", path: "ms-photos://" },
    { name: "Xbox", path: "ms-xbox://" },
    { name: "News", path: "bingnews://" },
    { name: "Finance", path: "bingfinance://" },
    { name: "Sports", path: "bingsports://" },
    { name: "OneNote", path: "onenote://" },
    { name: "Notifications & Actions", path: "ms-actioncenter://" },
  ],

  // all setting
  windowsSettings: [
    { name: "window", path: "ms-settings:" },
    { name: "windows", path: "ms-settings:" },
    { name: "System", path: "ms-settings:system" },
    { name: "Display", path: "ms-settings:display" },
    { name: "Notifications & actions", path: "ms-settings:notifications" },
    { name: "Power & sleep", path: "ms-settings:powersleep" },
    { name: "Storage", path: "ms-settings:storagesense" },
    { name: "Tablet mode", path: "ms-settings:tabletmode" },
    { name: "Multitasking", path: "ms-settings:multitasking" },
    { name: "Battery", path: "ms-settings:batterysaver" },
    { name: "Battery saver", path: "ms-settings:batterysaver" },
    { name: "Display brightness", path: "ms-settings:screenbrightness" },
    { name: "Network & Internet", path: "ms-settings:network" },
    { name: "Wi-Fi", path: "ms-settings:network-wifi" },
    { name: "Ethernet", path: "ms-settings:network-ethernet" },
    { name: "Data usage", path: "ms-settings:datausage" },
    { name: "Proxy", path: "ms-settings:network-proxy" },
    { name: "VPN", path: "ms-settings:network-vpn" },
    { name: "Dial-up", path: "ms-settings:network-dialup" },
    { name: "Airplane mode", path: "ms-settings:network-airplanemode" },
    { name: "Personalization", path: "ms-settings:personalization" },
    { name: "Background", path: "ms-settings:personalization-background" },
    { name: "Lock screen", path: "ms-settings:lockscreen" },
    { name: "Themes", path: "ms-settings:themes" },
    { name: "Start", path: "ms-settings:start" },
    { name: "Taskbar", path: "ms-settings:taskbar" },
    { name: "Time & language", path: "ms-settings:dateandtime" },
    { name: "Date & time", path: "ms-settings:dateandtime" },
    { name: "Region & language", path: "ms-settings:regionlanguage" },
    { name: "Speech", path: "ms-settings:speech" },
    { name: "Gaming", path: "ms-settings:gaming" },
    { name: "Game bar", path: "ms-settings:gaming-gamebar" },
    { name: "Captures", path: "ms-settings:gaming-gamedvr" },
    { name: "Broadcasting", path: "ms-settings:gaming-broadcasting" },
    { name: "Game mode", path: "ms-settings:gaming-gamemode" },
    { name: "Ease of Access", path: "ms-settings:easeofaccess" },
    { name: "Narrator", path: "ms-settings:easeofaccess-narrator" },
    { name: "Magnifier", path: "ms-settings:easeofaccess-magnifier" },
    { name: "High contrast", path: "ms-settings:easeofaccess-highcontrast" },
    { name: "Keyboard", path: "ms-settings:easeofaccess-keyboard" },
    { name: "Mouse", path: "ms-settings:easeofaccess-mouse" },
    { name: "Privacy", path: "ms-settings:privacy" },
    { name: "Location", path: "ms-settings:privacy-location" },
    { name: "Camera", path: "ms-settings:privacy-webcam" },
    { name: "Mike", path: "ms-settings:privacy-microphone" },
    { name: "Mic", path: "ms-settings:privacy-microphone" },
    { name: "Microphone", path: "ms-settings:privacy-microphone" },
    { name: "speakers and headphones", path: "ms-settings:sound" },
    { name: "speaker", path: "ms-settings:sound" },
    { name: "headphones", path: "ms-settings:sound" },
    { name: "headphone", path: "ms-settings:sound" },
    { name: "Account Info", path: "ms-settings:privacy-accountinfo" },
    { name: "Contacts", path: "ms-settings:privacy-contacts" },
    { name: "Calendar", path: "ms-settings:privacy-calendar" },
    { name: "Email", path: "ms-settings:privacy-email" },
    { name: "Tasks", path: "ms-settings:privacy-tasks" },
    { name: "Messaging", path: "ms-settings:privacy-messaging" },
    { name: "Radios", path: "ms-settings:privacy-radios" },
    { name: "Other devices", path: "ms-settings:privacy-customdevices" },
    { name: "Feedback & diagnostics", path: "ms-settings:privacy-feedback" },
    { name: "Activity history", path: "ms-settings:privacy-activityhistory" },
    { name: "App permissions", path: "ms-settings:privacy-appdiagnostics" },
    { name: "Update & Security", path: "ms-settings:windowsupdate" },
    { name: "Windows Update", path: "ms-settings:windowsupdate" },
    { name: "Recovery", path: "ms-settings:recovery" },
    { name: "Backup", path: "ms-settings:backup" },
    { name: "Troubleshoot", path: "ms-settings:troubleshoot" },
    { name: "Activation", path: "ms-settings:activation" },
    { name: "Find my device", path: "ms-settings:findmydevice" },
    { name: "For developers", path: "ms-settings:developers" },
    { name: "Cortana", path: "ms-settings:cortana" },
    { name: "Cortana & Search", path: "ms-settings:cortana-search" },
    { name: "Cortana permissions", path: "ms-settings:cortana-permissions" },
    { name: "Family & other users", path: "ms-settings:otherusers" },
    { name: "Work access", path: "ms-settings:workplace" },
    { name: "Sync your settings", path: "ms-settings:sync" },
    { name: "Sign-in options", path: "ms-settings:signinoptions" },
    { name: "Remote Desktop", path: "ms-settings:remotedesktop" },
    { name: "Storage Spaces", path: "ms-settings:storagespaces" },
    { name: "Optional Features", path: "ms-settings:optionalfeatures" },
    { name: "Devices", path: "ms-settings:devices" },
    { name: "Bluetooth & other devices", path: "ms-settings:bluetooth" },
    { name: "Printers & scanners", path: "ms-settings:printers" },
    { name: "Mouse & touchpad", path: "ms-settings:mousetouchpad" },
    { name: "Typing", path: "ms-settings:typing" },
    { name: "Pen & Windows Ink", path: "ms-settings:pen" },
    { name: "Autoplay", path: "ms-settings:autoplay" },
    { name: "USB", path: "ms-settings:usb" },
    { name: "Tablet", path: "ms-settings:tablet" },
    { name: "Projecting to this PC", path: "ms-settings:project" },
    { name: "Clipboard", path: "ms-settings:clipboard" },
    { name: "Phone", path: "ms-settings:phone" },
    { name: "Add a Phone", path: "ms-settings:phone-addphone" },
    { name: "Your Phone App", path: "ms-settings:mobile-devices" },
    {
      name: "Windows Hello Face",
      path: "ms-settings:signinoptions-windowshello-face",
    },
    {
      name: "Windows Hello Fingerprint",
      path: "ms-settings:signinoptions-windowshello-fingerprint",
    },
    {
      name: "Windows Hello PIN",
      path: "ms-settings:signinoptions-windowshello-pin",
    },
    { name: "Dynamic Lock", path: "ms-settings:signinoptions-dynamiclock" },
    { name: "BitLocker", path: "ms-settings:deviceencryption" },
    {
      name: "Network Troubleshooter",
      path: "ms-settings:network-troubleshooter",
    },
    { name: "Wi-Fi Calling", path: "ms-settings:network-wificalling" },
    { name: "Hotspot", path: "ms-settings:network-mobilehotspot" },
    { name: "Network reset", path: "ms-settings:network-status" },
  ],

  //==================== to paly any quran , music , etc from youtube=======
  playPhrases: [
    "play",
    "can you play",
    "can you please play",
    "could you please play",
    "please play",
    "would you play",
    "I would like you to play",
    "kindly play",
    "could you play",
    "can I ask you to play",
    "would you kindly play",
    "might you play",
    "let's hear",
    "let's play",
    "start playing",
  ],
  

  // =========================to know the time ===========
  timeAndDateStr:"whats the time can you tell me the time What time is it Do you know the time Tell me the time Can you please tell me the time Hey whats the time Hey Zini what time is it Zini do you know the time Can you check the time Let me know the time Whats the current time Tell me the current time What time is it now Please tell me the time Zini tell me the time please Can you give me the time now Whats the time right now Whats the date Can you tell me the date What date is it Do you know todays date Tell me the date Can you please tell me todays date Hey whats the date Hey Zini what date is it Zini do you know the date Can you check todays date Let me know the date Whats the current date Tell me the current date What date is it today Please tell me the date Zini tell me the date please Can you give me todays date Whats todays date whats the day can you tell me the day What day is it Do you know what day it is Tell me the day Can you please tell me the day Hey whats the day hey zini what day is it Zini do you know the day Can you check todays day Let me know the day Whats the current day Tell me the current day What day is it today Please tell me the day Zini tell me the day please Can you give me todays day Whats today Whats the time and date can you tell me the time and date What time and date is it Do you know the time and date Tell me the time and date Whats todays time date and day Can you tell me todays time date and day Hey Zini whats the time date and day today Whats the time date and day now Zini tell me the time date and day please Can you give me todays time date and day Tell me the current time date time and day Do you know what time date and day it is can you tell me the time can you please tell me the time can you please tell me the time and date can you tell me the day what time is now what is the day do you know the time and date do you know time and date can you tell me time and date",

  allCountry :[
    { country: "Afghanistan", code: "AF" },
    { country: "Albania", code: "AL" },
    { country: "Algeria", code: "DZ" },
    { country: "Andorra", code: "AD" },
    { country: "Angola", code: "AO" },
    { country: "Antigua and Barbuda", code: "AG" },
    { country: "Argentina", code: "AR" },
    { country: "Armenia", code: "AM" },
    { country: "Australia", code: "AU" },
    { country: "Austria", code: "AT" },
    { country: "Azerbaijan", code: "AZ" },
    { country: "Bahamas", code: "BS" },
    { country: "Bahrain", code: "BH" },
    { country: "Bangladesh", code: "BD" },
    { country: "Barbados", code: "BB" },
    { country: "Belarus", code: "BY" },
    { country: "Belgium", code: "BE" },
    { country: "Belize", code: "BZ" },
    { country: "Benin", code: "BJ" },
    { country: "Bhutan", code: "BT" },
    { country: "Bolivia", code: "BO" },
    { country: "Bosnia and Herzegovina", code: "BA" },
    { country: "Botswana", code: "BW" },
    { country: "Brazil", code: "BR" },
    { country: "Brunei", code: "BN" },
    { country: "Bulgaria", code: "BG" },
    { country: "Burkina Faso", code: "BF" },
    { country: "Burundi", code: "BI" },
    { country: "Cabo Verde", code: "CV" },
    { country: "Cambodia", code: "KH" },
    { country: "Cameroon", code: "CM" },
    { country: "Canada", code: "CA" },
    { country: "Central African Republic", code: "CF" },
    { country: "Chad", code: "TD" },
    { country: "Chile", code: "CL" },
    { country: "China", code: "CN" },
    { country: "Colombia", code: "CO" },
    { country: "Comoros", code: "KM" },
    { country: "Congo (Congo-Brazzaville)", code: "CG" },
    { country: "Costa Rica", code: "CR" },
    { country: "Croatia", code: "HR" },
    { country: "Cuba", code: "CU" },
    { country: "Cyprus", code: "CY" },
    { country: "Czech Republic", code: "CZ" },
    { country: "Democratic Republic of the Congo", code: "CD" },
    { country: "Denmark", code: "DK" },
    { country: "Djibouti", code: "DJ" },
    { country: "Dominica", code: "DM" },
    { country: "Dominican Republic", code: "DO" },
    { country: "East Timor", code: "TL" },
    { country: "Ecuador", code: "EC" },
    { country: "Egypt", code: "EG" },
    { country: "El Salvador", code: "SV" },
    { country: "Equatorial Guinea", code: "GQ" },
    { country: "Eritrea", code: "ER" },
    { country: "Estonia", code: "EE" },
    { country: "Eswatini", code: "SZ" },
    { country: "Ethiopia", code: "ET" },
    { country: "Fiji", code: "FJ" },
    { country: "Finland", code: "FI" },
    { country: "France", code: "FR" },
    { country: "Gabon", code: "GA" },
    { country: "Gambia", code: "GM" },
    { country: "Georgia", code: "GE" },
    { country: "Germany", code: "DE" },
    { country: "Ghana", code: "GH" },
    { country: "Greece", code: "GR" },
    { country: "Grenada", code: "GD" },
    { country: "Guatemala", code: "GT" },
    { country: "Guinea", code: "GN" },
    { country: "Guinea-Bissau", code: "GW" },
    { country: "Guyana", code: "GY" },
    { country: "Haiti", code: "HT" },
    { country: "Honduras", code: "HN" },
    { country: "Hungary", code: "HU" },
    { country: "Iceland", code: "IS" },
    { country: "India", code: "IN" },
    { country: "Indonesia", code: "ID" },
    { country: "Iran", code: "IR" },
    { country: "Iraq", code: "IQ" },
    { country: "Ireland", code: "IE" },
    { country: "Israel", code: "IL" },
    { country: "Italy", code: "IT" },
    { country: "Jamaica", code: "JM" },
    { country: "Japan", code: "JP" },
    { country: "Jordan", code: "JO" },
    { country: "Kazakhstan", code: "KZ" },
    { country: "Kenya", code: "KE" },
    { country: "Kiribati", code: "KI" },
    { country: "Kuwait", code: "KW" },
    { country: "Kyrgyzstan", code: "KG" },
    { country: "Laos", code: "LA" },
    { country: "Latvia", code: "LV" },
    { country: "Lebanon", code: "LB" },
    { country: "Lesotho", code: "LS" },
    { country: "Liberia", code: "LR" },
    { country: "Libya", code: "LY" },
    { country: "Liechtenstein", code: "LI" },
    { country: "Lithuania", code: "LT" },
    { country: "Luxembourg", code: "LU" },
    { country: "Madagascar", code: "MG" },
    { country: "Malawi", code: "MW" },
    { country: "Malaysia", code: "MY" },
    { country: "Maldives", code: "MV" },
    { country: "Mali", code: "ML" },
    { country: "Malta", code: "MT" },
    { country: "Marshall Islands", code: "MH" },
    { country: "Mauritania", code: "MR" },
    { country: "Mauritius", code: "MU" },
    { country: "Mexico", code: "MX" },
    { country: "Micronesia", code: "FM" },
    { country: "Moldova", code: "MD" },
    { country: "Monaco", code: "MC" },
    { country: "Mongolia", code: "MN" },
    { country: "Montenegro", code: "ME" },
    { country: "Morocco", code: "MA" },
    { country: "Mozambique", code: "MZ" },
    { country: "Myanmar (Burma)", code: "MM" },
    { country: "Namibia", code: "NA" },
    { country: "Nauru", code: "NR" },
    { country: "Nepal", code: "NP" },
    { country: "Netherlands", code: "NL" },
    { country: "New Zealand", code: "NZ" },
    { country: "Nicaragua", code: "NI" },
    { country: "Niger", code: "NE" },
    { country: "Nigeria", code: "NG" },
    { country: "North Korea", code: "KP" },
    { country: "North Macedonia", code: "MK" },
    { country: "Norway", code: "NO" },
    { country: "Oman", code: "OM" },
    { country: "Pakistan", code: "PK" },
    { country: "Palau", code: "PW" },
    { country: "Panama", code: "PA" },
    { country: "Papua New Guinea", code: "PG" },
    { country: "Paraguay", code: "PY" },
    { country: "Peru", code: "PE" },
    { country: "Philippines", code: "PH" },
    { country: "Poland", code: "PL" },
    { country: "Portugal", code: "PT" },
    { country: "Qatar", code: "QA" },
    { country: "Romania", code: "RO" },
    { country: "Russia", code: "RU" },
    { country: "Rwanda", code: "RW" },
    { country: "Saint Kitts and Nevis", code: "KN" },
    { country: "Saint Lucia", code: "LC" },
    { country: "Saint Vincent and the Grenadines", code: "VC" },
    { country: "Samoa", code: "WS" },
    { country: "San Marino", code: "SM" },
    { country: "Sao Tome and Principe", code: "ST" },
    { country: "Saudi Arabia", code: "SA" },
    { country: "Senegal", code: "SN" },
    { country: "Serbia", code: "RS" },
    { country: "Seychelles", code: "SC" },
    { country: "Sierra Leone", code: "SL" },
    { country: "Singapore", code: "SG" },
    { country: "Slovakia", code: "SK" },
    { country: "Slovenia", code: "SI" },
    { country: "Solomon Islands", code: "SB" },
    { country: "Somalia", code: "SO" },
    { country: "South Africa", code: "ZA" },
    { country: "South Korea", code: "KR" },
    { country: "South Sudan", code: "SS" },
    { country: "Spain", code: "ES" },
    { country: "Sri Lanka", code: "LK" },
    { country: "Sudan", code: "SD" },
    { country: "Suriname", code: "SR" },
    { country: "Sweden", code: "SE" },
    { country: "Switzerland", code: "CH" },
    { country: "Syria", code: "SY" },
    { country: "Taiwan", code: "TW" },
    { country: "Tajikistan", code: "TJ" },
    { country: "Tanzania", code: "TZ" },
    { country: "Thailand", code: "TH" },
    { country: "Togo", code: "TG" },
    { country: "Tonga", code: "TO" },
    { country: "Trinidad and Tobago", code: "TT" },
    { country: "Tunisia", code: "TN" },
    { country: "Turkey", code: "TR" },
    { country: "Turkmenistan", code: "TM" },
    { country: "Tuvalu", code: "TV" },
    { country: "Uganda", code: "UG" },
    { country: "Ukraine", code: "UA" },
    { country: "United Arab Emirates", code: "AE" },
    { country: "United Kingdom", code: "GB" },
    { country: "United States", code: "US" },
    { country: "Uruguay", code: "UY" },
    { country: "Uzbekistan", code: "UZ" },
    { country: "Vanuatu", code: "VU" },
    { country: "Vatican City", code: "VA" },
    { country: "Venezuela", code: "VE" },
    { country: "Vietnam", code: "VN" },
    { country: "Yemen", code: "YE" },
    { country: "Zambia", code: "ZM" },
    { country: "Zimbabwe", code: "ZW" }
  ],
  

};

export { data };
