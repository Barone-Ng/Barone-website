// ==================== WORD SNIPER - SAKURA EDITION ====================
      // add skip button for flashcard
      // rusult screen hard to see
      // 

// ====================== PARAGRAPH DATA ======================
const paragraphs = [
  {
    text: "About 4,000 years ago, Asian sailors introduced dingoes to Australia. Throughout the ensuing millennia, these descendants of the wolf spread across the continent and, as the Tasmanian tiger disappeared completely from Australia, dingoes became Australia's top predators. As agricultural development took place, the European settlers found that they could not safely keep their livestock where dingoes roamed. So began one of the most sustained efforts at pest control in Australia's history. Over the last 150 years, dingoes have been shot and poisoned, and fences have been used in an attempt to keep them away from livestock. But at the same time, as the European settlers tried to eliminate one native pest from Australia, they introduced more of their own.",
    words: [
      { word: "sailors",    correct: "People who navigate ships",                             options: ["People who navigate ships", "Ancient Australian tribes", "European settlers", "Wildlife conservationists"] },
      { word: "Throughout", correct: "During the course of",                                  options: ["During the course of", "At the beginning of", "At the end of", "In contrast to"] },
      { word: "ensuing",    correct: "Following as a result",                                 options: ["Following as a result", "Occurring simultaneously", "Preceding in time", "Unrelated to the context"] },
      { word: "millennia",  correct: "Thousands of years",                                    options: ["Thousands of years", "Hundreds of years", "Decades", "Centuries"] },
      { word: "descendants",correct: "Offspring or later generations",                        options: ["Offspring or later generations", "Ancestors", "Unrelated species", "Types of plants"] },
      { word: "spread",     correct: "To extend over a larger area",                          options: ["To extend over a larger area", "To migrate seasonally", "To reproduce rapidly", "To live in symbiosis with other species"] },
      { word: "continent",  correct: "A large landmass on Earth",                             options: ["A large landmass on Earth", "A type of ecosystem", "A geological formation", "A specific region in Australia"] },
      { word: "took place", correct: "Occurred or happened",                                  options: ["Occurred or happened", "Was planned in advance", "Was prevented from happening", "Was celebrated with a festival"] },
      { word: "settlers",   correct: "People who establish a community in a new area",        options: ["People who establish a community in a new area", "Indigenous Australian tribes", "Wildlife conservationists", "European explorers"] },
      { word: "sustained",  correct: "Maintained at a certain level over a period of time",   options: ["Maintained at a certain level over a period of time", "Occurring briefly", "Increasing rapidly", "Decreasing steadily"] },
      { word: "pest",       correct: "An animal that is harmful to crops or livestock",       options: ["An animal that is harmful to crops or livestock", "A type of plant disease", "A natural disaster", "A traditional method of farming"] },
      { word: "fences",     correct: "Barriers used to enclose an area",                      options: ["Barriers used to enclose an area", "Natural formations like rivers", "Types of vegetation", "Traditional Aboriginal tools"] },
      { word: "livestock",  correct: "Farm animals raised for commercial purposes",           options: ["Farm animals raised for commercial purposes", "Wild animals native to Australia", "Endangered species", "Types of crops"] },
    ]
  },
  {
    text: "A plane flies a slow pattern over Carlton Hill station, a 3,600 square kilometre ranch in the Kimberley region in northwest Australia. As the plane circles, those aboard drop 1,000 small pieces of meat, one by one, onto the scrubland below, each piece laced with poison; this practice is known as baiting. Besides 50,000 head of cattle, Carlton Hill is home to the dingo, Australia's largest mammalian predator and the bane of a grazier's (cattle farmer's) life. Stuart McKechnie, manager of Carlton Hill, complains that graziers' livelihoods are threatened when dingoes prey on cattle. But one man wants the baiting to end, and for dingoes to once again roam Australia's wide-open spaces. According to Chris Johnson of James Cook University, 'Australia needs more dingoes to protect our biodiversity.'",
    words: [
      { word: "pattern",      correct: "A repeated decorative design or a regular arrangement",                        options: ["A repeated decorative design or a regular arrangement", "A type of flight path used by birds", "A specific type of aircraft maneuver", "A traditional Aboriginal dance"] },
      { word: "ranch",        correct: "A large farm where animals are raised",                                        options: ["A large farm where animals are raised", "A type of natural habitat", "A geological formation", "A specific region in Australia"] },
      { word: "aboard",       correct: "On or in a ship, aircraft, or other vehicle",                                  options: ["On or in a ship, aircraft, or other vehicle", "In the countryside", "In a city", "In a rural community"] },
      { word: "scrubland",    correct: "Land covered with low vegetation",                                             options: ["Land covered with low vegetation", "A type of forest", "A desert area", "A coastal region"] },
      { word: "laced",        correct: "Infused or mixed with a substance",                                            options: ["Infused or mixed with a substance", "Tied together with string", "Decorated with patterns", "Protected with a barrier"] },
      { word: "baiting",      correct: "The practice of placing poison to control pests",                              options: ["The practice of placing poison to control pests", "A method of hunting using traps", "A traditional Aboriginal fishing technique", "A type of wildlife conservation strategy"] },
      { word: "mammalian",    correct: "Relating to mammals, warm-blooded vertebrates with hair or fur",              options: ["Relating to mammals, warm-blooded vertebrates with hair or fur", "Relating to reptiles, cold-blooded vertebrates with scales", "Relating to birds, warm-blooded vertebrates with feathers", "Relating to amphibians, cold-blooded vertebrates that live both in water and on land"] },
      { word: "bane",         correct: "A cause of great distress or annoyance",                                       options: ["A cause of great distress or annoyance", "A type of plant that is poisonous", "A natural disaster", "A traditional method of farming"] },
      { word: "complains",    correct: "Expresses dissatisfaction or annoyance about something",                       options: ["Expresses dissatisfaction or annoyance about something", "Praises the benefits of something", "Describes the characteristics of something", "Explains the reasons for something"] },
      { word: "graziers",     correct: "People who raise livestock, especially cattle or sheep",                       options: ["People who raise livestock, especially cattle or sheep", "Wildlife conservationists", "European settlers", "Indigenous Australian tribes"] },
      { word: "livelihoods",  correct: "Means of securing the necessities of life",                                    options: ["Means of securing the necessities of life", "Types of crops grown in Australia", "Traditional Aboriginal practices", "Natural resources found in Australia"] },
      { word: "threatened",   correct: "At risk of being harmed or damaged",                                           options: ["At risk of being harmed or damaged", "Protected by law", "Benefiting from conservation efforts", "Unrelated to the context"] },
      { word: "cattle",       correct: "Large domesticated animals raised for meat or milk",                           options: ["Large domesticated animals raised for meat or milk", "Wild animals native to Australia", "Endangered species", "Types of crops"] },
      { word: "roam",         correct: "To move about or travel without a fixed destination",                         options: ["To move about or travel without a fixed destination", "To migrate seasonally", "To reproduce rapidly", "To live in symbiosis with other species"] },
      { word: "biodiversity", correct: "The variety of plant and animal life in a particular habitat",                options: ["The variety of plant and animal life in a particular habitat", "The number of species in a specific area", "The genetic diversity within a species", "The ecological balance of an ecosystem"] },
    ]
  },
  {
    text: "In 1860, the rabbit was unleashed on Australia by a wealthy landowner and by 1980 rabbits had covered most of the mainland. Rabbits provide huge prey base for two other introduced species: the feral (wild) cat and the red fox. The Interaction between foxes, cats and rabbits is a huge problem for native mammals. In good years, rabbit numbers increase dramatically, and fox and cat populations grow quickly in response to the abundance of this prey. When bad seasons follow, rabbit numbers are significantly reduced - and the dwindling but still large fox and cat populations are left with little to eat besides native mammals.",
    words: [
      { word: "unleashed",           correct: "Released or set free",                                    options: ["Released or set free", "Captured and contained", "Domesticated for farming", "Protected by conservation efforts"] },
      { word: "wealthy",             correct: "Having a lot of money or resources",                      options: ["Having a lot of money or resources", "Living in poverty", "Belonging to the middle class", "Working as a laborer"] },
      { word: "mainland",            correct: "The principal landmass of a country or continent",        options: ["The principal landmass of a country or continent", "An island off the coast", "A coastal region", "A mountainous area"] },
      { word: "provide",             correct: "To supply or make available",                             options: ["To supply or make available", "To consume or use up", "To protect or conserve", "To harm or damage"] },
      { word: "prey",                correct: "An animal that is hunted and eaten by another animal",    options: ["An animal that is hunted and eaten by another animal", "A type of plant that is consumed by herbivores", "A natural disaster", "A traditional method of farming"] },
      { word: "feral",               correct: "In a wild state, especially after escape from captivity", options: ["In a wild state, especially after escape from captivity", "Domesticated and raised on farms", "Protected by conservation efforts", "Native to Australia"] },
      { word: "interaction",         correct: "The way in which two or more things affect each other",   options: ["The way in which two or more things affect each other", "A type of competition between species", "A natural disaster", "A traditional method of farming"] },
      { word: "native",              correct: "Indigenous to a particular place",                        options: ["Indigenous to a particular place", "Introduced from another region", "Domesticated for farming", "Protected by conservation efforts"] },
      { word: "mammals",             correct: "Warm-blooded vertebrates with hair or fur",               options: ["Warm-blooded vertebrates with hair or fur", "Cold-blooded vertebrates with scales", "Warm-blooded vertebrates with feathers", "Cold-blooded vertebrates that live both in water and on land"] },
      { word: "increase dramatically",correct: "To grow significantly in a short period of time",       options: ["To grow significantly in a short period of time", "To decrease steadily over time", "To remain stable without change", "To fluctuate unpredictably"] },
      { word: "response",            correct: "A reaction to a stimulus or change in the environment",   options: ["A reaction to a stimulus or change in the environment", "A type of natural disaster", "A traditional method of farming", "An unrelated concept"] },
      { word: "significantly reduced",correct: "Decreased to a large extent",                           options: ["Decreased to a large extent", "Increased significantly", "Remained unchanged", "Fluctuated unpredictably"] },
      { word: "abundance",           correct: "A very large quantity of something",                      options: ["A very large quantity of something", "A small amount of something", "A moderate level of something", "An unpredictable fluctuation of something"] },
      { word: "dwindling",           correct: "Gradually diminishing in size, amount, or strength",      options: ["Gradually diminishing in size, amount, or strength", "Increasing rapidly", "Remaining stable without change", "Fluctuating unpredictably"] },
      { word: "besides",             correct: "In addition to; apart from",                              options: ["In addition to; apart from", "Excluding; except for", "Contrary to; in opposition to", "Unrelated to the context"] },
    ]
  },
  {
    text: "Australian mammals generally reproduce much more slowly than rabbits, cats and foxes - and adaption to prevent overpopulation in the arid environment, where food can be scarce and unreliable - and populations decline because they can't grow fast enough to replace animals killed by the predators. Johnson says dingoes are the solution to this problem because they keep cat and fox populations under control. Besides regularly eating the smaller predators, dingoes will kill them simply to lessen competition. Dingo packs live in large, stable territories and generally have only one fertile, which limits their rate of increase. In the 4,000 years that dingoes have been Australia, they have contributed to few, if any, extinctions, Johnsons says.",
    words: [
      { word: "mammals",       correct: "Warm-blooded vertebrates with hair or fur",                                              options: ["Warm-blooded vertebrates with hair or fur", "Cold-blooded vertebrates with scales", "Warm-blooded vertebrates with feathers", "Cold-blooded vertebrates that live both in water and on land"] },
      { word: "adaption",      correct: "A change or adjustment to better suit an environment",                                   options: ["A change or adjustment to better suit an environment", "A type of natural disaster", "A traditional method of farming", "An unrelated concept"] },
      { word: "overpopulation",correct: "A situation where the number of individuals exceeds the carrying capacity of the environment", options: ["A situation where the number of individuals exceeds the carrying capacity of the environment", "A type of natural disaster", "A traditional method of farming", "An unrelated concept"] },
      { word: "prevent",       correct: "To stop something from happening",                                                       options: ["To stop something from happening", "To encourage something to happen", "To ignore something", "To be unaware of something"] },
      { word: "arid",          correct: "Extremely dry; having little or no rain",                                                options: ["Extremely dry; having little or no rain", "Having a lot of rainfall", "Being covered in water", "Having a moderate climate"] },
      { word: "scarce",        correct: "In short supply; not abundant",                                                          options: ["In short supply; not abundant", "Plentiful and easily available", "Moderately available", "Unpredictably fluctuating"] },
      { word: "unreliable",    correct: "Not able to be trusted or depended on",                                                  options: ["Not able to be trusted or depended on", "Consistently dependable", "Occasionally dependable", "Unrelated to the context"] },
      { word: "predators",     correct: "Animals that hunt and eat other animals",                                                options: ["Animals that hunt and eat other animals", "Plants that are consumed by herbivores", "Natural disasters", "Traditional methods of farming"] },
      { word: "solution",      correct: "A means of solving a problem or dealing with a difficult situation",                     options: ["A means of solving a problem or dealing with a difficult situation", "A type of natural disaster", "A traditional method of farming", "An unrelated concept"] },
      { word: "besides",       correct: "In addition to; apart from",                                                             options: ["In addition to; apart from", "Excluding; except for", "Contrary to; in opposition to", "Unrelated to the context"] },
      { word: "lessen",        correct: "To make something smaller or less severe",                                               options: ["To make something smaller or less severe", "To make something larger or more severe", "To ignore something", "To be unaware of something"] },
      { word: "packs",         correct: "Groups of animals that live and hunt together",                                          options: ["Groups of animals that live and hunt together", "Individual animals that live alone", "Pairs of animals that mate for life", "Unrelated to the context"] },
      { word: "territories",   correct: "Areas that an animal or group of animals defends as their own",                         options: ["Areas that an animal or group of animals defends as their own", "Areas that are shared by multiple species", "Areas that are uninhabited", "Unrelated to the context"] },
      { word: "fertile",       correct: "Able to produce offspring",                                                              options: ["Able to produce offspring", "Unable to produce offspring", "Having a large number of offspring", "Unrelated to the context"] },
      { word: "contributed",   correct: "Helped to cause or bring about",                                                        options: ["Helped to cause or bring about", "Hindered or prevented", "Had no effect on", "Unrelated to the context"] },
      { word: "extinctions",   correct: "The state or process of a species becoming extinct",                                     options: ["The state or process of a species becoming extinct", "The introduction of new species to an ecosystem", "The conservation of endangered species", "Unrelated to the context"] },
    ]
  },
  {
    text: " Reaching out from a desolate spot where three states meet, for 2,500 km in either direction, is the world's longest fence, two metres high and stretching from the coast in Queensland to the Great Australian Bight in South Australia; it is there to keep dingoes out of southeast, the fence separates the main types of livestock found in Australia. To the northwest of the fence, cattle predominate; to the southwest, sheep fill the landscape. In fact, Australia is a land dominated by these animals - 25 million cattle, 100 million sheep and just over 20 million people.",
    words: [
      { word: "desolate",    correct: "A place that is empty and bleak, often due to lack of vegetation or human presence", options: ["A place that is empty and bleak, often due to lack of vegetation or human presence", "A bustling urban area", "A fertile agricultural region", "A coastal paradise"] },
      { word: "stretching",  correct: "Extending over a distance",                                                           options: ["Extending over a distance", "Contracting to a smaller area", "Remaining the same size", "Unrelated to the context"] },
      { word: "coast",       correct: "The land along the edge of the sea",                                                  options: ["The land along the edge of the sea", "A mountainous region", "A desert area", "A forested region"] },
      { word: "separates",   correct: "Divides or keeps apart",                                                              options: ["Divides or keeps apart", "Joins together", "Has no effect on", "Unrelated to the context"] },
      { word: "predominate", correct: "To be the most common or frequent",                                                   options: ["To be the most common or frequent", "To be the least common or frequent", "To be equally common as other types", "Unrelated to the context"] },
      { word: "dominate",    correct: "To have control or power over",                                                       options: ["To have control or power over", "To be controlled by", "To coexist equally with", "Unrelated to the context"] },
    ]
  },
  {
    text: "While there is no argument that dingoes will prey on sheep if given the chance, they don't hunt cattle once the calves are much past two or three weeks old, according to McKechnie. And a study in Queensland suggests that dingoes don't even prey heavily on the newborn calves unless their staple prey disappears due to deteriorating conditions like drought. This study, co-authored by Lee Alien of the Robert Wicks Research Centre in Queensland, suggests that the aggressive baiting programs used against dingoes may actually be counter-productive for graziers. When dingoes are removed from an area by baiting m the area is recolonized by younger, more solitary dingoes. These animals aren't capable of going after the large prey like kangaroos, so they turn to calves. In their study, some of the highest rates of calf predation occurred in areas that had been baited.",
    words: [
      { word: "argument",        correct: "A reason or set of reasons given in support of an idea or action", options: ["A reason or set of reasons given in support of an idea or action", "A disagreement between two or more parties", "A type of logical fallacy", "Unrelated to the context"] },
      { word: "calves",          correct: "Young cattle",                                                      options: ["Young cattle", "Adult sheep", "Wild animals native to Australia", "Endangered species"] },
      { word: "according to",    correct: "As stated by or based on the information from",                    options: ["As stated by or based on the information from", "In contrast to", "Unrelated to the context", "A type of natural disaster"] },
      { word: "staple",          correct: "A main or important element of something",                         options: ["A main or important element of something", "A minor or insignificant part of something", "An unrelated concept", "A type of natural disaster"] },
      { word: "deteriorating",   correct: "Becoming worse over time",                                         options: ["Becoming worse over time", "Improving over time", "Remaining stable without change", "Unrelated to the context"] },
      { word: "drought",         correct: "A prolonged period of abnormally low rainfall, leading to a shortage of water", options: ["A prolonged period of abnormally low rainfall, leading to a shortage of water", "A period of heavy rainfall", "A natural disaster unrelated to weather", "A traditional method of farming"] },
      { word: "co-authored",     correct: "Written by two or more people",                                    options: ["Written by two or more people", "Written by a single author", "Edited by someone other than the author", "Unrelated to the context"] },
      { word: "aggressive",      correct: "Characterized by or tending toward unprovoked offensives or attacks", options: ["Characterized by or tending toward unprovoked offensives or attacks", "Passive and non-confrontational", "Neutral and indifferent", "Unrelated to the context"] },
      { word: "counter-productive", correct: "Having the opposite of the desired effect",                    options: ["Having the opposite of the desired effect", "Achieving the intended result", "Having no effect on the situation", "Unrelated to the context"] },
      { word: "recolonized",     correct: "To populate an area again after it has been cleared or depopulated", options: ["To populate an area again after it has been cleared or depopulated", "To permanently remove all inhabitants from an area", "To protect an area from any human interference", "Unrelated to the context"] },
      { word: "solitary",        correct: "Living or occurring alone",                                        options: ["Living or occurring alone", "Living in groups", "Living in pairs", "Unrelated to the context"] },
      { word: "calf predation",  correct: "The act of predators hunting and eating young cattle",             options: ["The act of predators hunting and eating young cattle", "The act of predators hunting and eating adult sheep", "The act of predators hunting and eating wild animals native to Australia", "Unrelated to the context"] },
    ]
  },
  {
    text: "Mark Clifford, general manager of a firm that manages over 200,000 head of cattle, is not convinced by Allen's assertion. Clifford says, 'It's obvious if we drop or loosen control on dingoes, we are going to lose more calves.' He doesn't believe that dingoes will go after kangaroos when calves are around. Nor is he persuaded of dingoes' supposed ecological benefits, saying he is not convinced that they manage to catch cats that often, believing they are more likely to catch small native animals instead. McKechnie agrees that dingoes kill the wallabies (small native animals) that compete with his cattle for food, but points out that in parts of Western Australia, there are no fixes, and not very many cats. He doesn't see how relaxing controls on dingoes in his area will improve the ecological balance. Johnson sees a need for a change in philosophy on the part of graziers. 'There might be a number of different ways of thinking through dingo management in cattle country,' he says. 'At the moment, though, that hasn't got through to graziers. There's still just on prescription, and that is to bait as widely as possible.'",
    words: [
      { word: "convinced",    correct: "Completely certain about something",                                       options: ["Completely certain about something", "Doubtful or skeptical about something", "Indifferent to something", "Unrelated to the context"] },
      { word: "assertion",    correct: "A confident and forceful statement of fact or belief",                     options: ["A confident and forceful statement of fact or belief", "A question or inquiry about something", "An unrelated concept", "A type of natural disaster"] },
      { word: "obvious",      correct: "Easily perceived or understood; clear",                                    options: ["Easily perceived or understood; clear", "Difficult to understand or perceive", "Unrelated to the context", "A type of natural disaster"] },
      { word: "loosen",       correct: "To make something less tight or less strict",                              options: ["To make something less tight or less strict", "To make something tighter or more strict", "To have no effect on the situation", "Unrelated to the context"] },
      { word: "ecological",   correct: "Relating to the relationships between living organisms and their environment", options: ["Relating to the relationships between living organisms and their environment", "Relating to economic systems", "Relating to social interactions", "Unrelated to the context"] },
      { word: "instead",      correct: "As an alternative or substitute",                                          options: ["As an alternative or substitute", "In addition to", "Contrary to", "Unrelated to the context"] },
      { word: "compete",      correct: "To strive against others to achieve a goal or win something",              options: ["To strive against others to achieve a goal or win something", "To cooperate with others to achieve a common goal", "To ignore others and focus on oneself", "Unrelated to the context"] },
      { word: "points out",   correct: "To indicate or draw attention to something",                               options: ["To indicate or draw attention to something", "To ignore or overlook something", "To criticize or condemn something", "Unrelated to the context"] },
      { word: "philosophy",   correct: "A set of ideas or beliefs about how to live or manage something",          options: ["A set of ideas or beliefs about how to live or manage something", "A type of natural disaster", "A traditional method of farming", "Unrelated to the context"] },
      { word: "prescription", correct: "A recommendation or guideline for a course of action",                     options: ["A recommendation or guideline for a course of action", "A legal requirement", "An unrelated concept", "A type of natural disaster"] },
      { word: "widely",       correct: "Over a large area or to a great extent",                                   options: ["Over a large area or to a great extent", "In a small area or to a limited extent", "Unrelated to the context", "A type of natural disaster"] },
    ]
  },
];

// ====================== VIETNAMESE MEANINGS ======================
const vietnameseMeanings = {
  "sailors": "thủy thủ",
  "Throughout": "suốt",
  "ensuing": "sau đó",
  "millennia": "nghìn năm",
  "descendants": "hậu duệ",
  "spread": "lan rộng",
  "continent": "lục địa",
  "took place": "diễn ra",
  "settlers": "người định cư",
  "sustained": "bền vững",
  "pest": "sâu bệnh",
  "fences": "hàng rào",
  "livestock": "gia súc",
  "pattern": "mẫu hình",
  "ranch": "trang trại lớn",
  "aboard": "trên tàu / máy bay",
  "scrubland": "vùng đất cằn cỗi",
  "laced": "được trộn lẫn",
  "baiting": "đặt mồi độc",
  "mammalian": "thuộc về động vật có vú",
  "bane": "tai họa",
  "complains": "phàn nàn",
  "graziers": "người chăn nuôi gia súc",
  "livelihoods": "sinh kế",
  "threatened": "bị đe dọa",
  "cattle": "gia súc / bò",
  "roam": "đi lang thang",
  "biodiversity": "đa dạng sinh học",
  "unleashed": "thả ra",
  "wealthy": "giàu có",
  "mainland": "lục địa",
  "provide": "cung cấp",
  "prey": "con mồi",
  "feral": "hoang dã",
  "interaction": "sự tương tác",
  "native": "bản địa",
  "mammals": "động vật có vú",
  "increase dramatically": "tăng mạnh",
  "response": "phản ứng",
  "significantly reduced": "giảm đáng kể",
  "abundance": "sự dồi dào",
  "dwindling": "ngày càng suy giảm",
  "besides": "bên cạnh đó",
  "adaption": "sự thích nghi",
  "overpopulation": "tình trạng quá tải dân số",
  "prevent": "ngăn chặn",
  "arid": "khô cằn",
  "scarce": "khan hiếm",
  "unreliable": "không đáng tin cậy",
  "predators": "động vật săn mồi",
  "solution": "giải pháp",
  "lessen": "giảm bớt",
  "packs": "bầy đàn",
  "territories": "lãnh thổ",
  "fertile": "có khả năng sinh sản",
  "contributed": "đóng góp",
  "extinctions": "sự tuyệt chủng",
  "desolate": "hoang vắng",
  "stretching": "kéo dài",
  "coast": "bờ biển",
  "separates": "phân tách",
  "predominate": "chiếm ưu thế",
  "dominate": "thống trị",
  "convinced": "bị thuyết phục",
  "assertion": "sự khẳng định",
  "obvious": "rõ ràng",
  "loosen": "nới lỏng",
  "ecological": "thuộc về sinh thái",
  "instead": "thay vào đó",
  "compete": "cạnh tranh",
  "points out": "chỉ ra",
  "philosophy": "triết lý",
  "prescription": "đơn thuốc / chỉ định",
  "widely": "rộng rãi",
  "argument": "lý lẽ / luận điểm",
  "calves": "bê con",
  "according to": "theo như",
  "staple": "chủ yếu / thiết yếu",
  "deteriorating": "đang xấu đi",
  "drought": "hạn hán",
  "co-authored": "đồng tác giả",
  "aggressive": "hung hăng",
  "counter-productive": "phản tác dụng",
  "recolonized": "tái định cư",
  "solitary": "đơn độc",
  "calf predation": "nạn săn mồi bê con",
};

// ====================== GAME STATE ======================
let currentParaIndex = 0;
let score = 0;
let streak = 1;
let maxStreakToday = 0;
let correctCount = 0;
let currentWordIndex = 0;
let punishmentLevel = 0;

// Daily tracking
let dailyPlayed = 0;
let totalCorrect = 0;
let totalWrong = 0;
let usedToday = [];
let playedParaIndices = [];   // indices of paragraphs played this session
let sessionStartTime = null;

// Fill-in-the-blank state
let currentFillIndex = 0;
let fillCorrectCount = 0;
let fillWrongCount = 0;
let fillAnswered = false;
let shuffledFillQueue = [];

// Flashcard state
let flashcardQueue = [];
let currentFlashcardIndex = 0;
let flashcardFlipped = false;

// ====================== LOCAL STORAGE ======================
function loadDailyStats() {
  const today = getTodayString();
  const saved = localStorage.getItem('wordSniperDaily');

  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      dailyPlayed    = data.played    || 0;
      totalCorrect   = data.correct   || 0;
      totalWrong     = data.wrong     || 0;
      usedToday      = data.used      || [];
      maxStreakToday  = data.maxStreak || 0;
    } else {
      resetDailyStats(today);
    }
  } else {
    resetDailyStats(today);
  }
}

function saveDailyStats() {
  localStorage.setItem('wordSniperDaily', JSON.stringify({
    date:      getTodayString(),
    played:    dailyPlayed,
    correct:   totalCorrect,
    wrong:     totalWrong,
    used:      usedToday,
    maxStreak: maxStreakToday,
  }));
}

function resetDailyStats(today) {
  dailyPlayed = 0; totalCorrect = 0; totalWrong = 0;
  usedToday = []; maxStreakToday = 0;
  localStorage.setItem('wordSniperDaily', JSON.stringify({
    date: today, played: 0, correct: 0, wrong: 0, used: [], maxStreak: 0
  }));
}

function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

// ====================== PARAGRAPH SELECTION ======================
function getNextParagraphIndex() {
  let available = paragraphs
    .map((_, i) => i)
    .filter(i => !usedToday.includes(i));

  if (available.length === 0) {
    usedToday = [];
    available = paragraphs.map((_, i) => i);
  }

  const chosen = available[Math.floor(Math.random() * available.length)];
  usedToday.push(chosen);
  saveDailyStats();
  return chosen;
}

// ====================== ANIMATIONS ======================
function createPetalBurst() {
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.textContent = '🌸';
    petal.style.cssText = `
      position:fixed; left:${Math.random() * 100}vw; top:-40px;
      font-size:${18 + Math.random() * 22}px; opacity:0.85;
      z-index:1000; pointer-events:none;
    `;
    document.body.appendChild(petal);
    const dur = 1800 + Math.random() * 1500;
    petal.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 0.9 },
      { transform: `translateY(${window.innerHeight + 150}px) rotate(${Math.random() * 800 - 400}deg)`, opacity: 0 }
    ], { duration: dur, easing: 'ease-out' });
    setTimeout(() => petal.remove(), dur + 100);
  }
}

// ====================== PUNISHMENT SYSTEM ======================
function applyPunishment() {
  punishmentLevel = Math.min(punishmentLevel + 1, 3);
  document.body.classList.remove('punish-1', 'punish-2', 'punish-3');
  document.body.classList.add(`punish-${punishmentLevel}`);
}

function resetPunishment() {
  punishmentLevel = 0;
  document.body.classList.remove('punish-1', 'punish-2', 'punish-3');
}

// ====================== SCREEN HELPERS ======================
function showScreen(id) {
  ['game-screen', 'result-screen', 'flashcard-screen', 'review-screen'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// ====================== GAME LOGIC ======================
function startNewRound() {
  if (!sessionStartTime) sessionStartTime = Date.now();
  score = 0;
  streak = 1;
  correctCount = 0;
  currentWordIndex = 0;
  resetPunishment();

  document.getElementById('score').textContent  = '0';
  document.getElementById('streak').textContent = '1';

  playedParaIndices.push(currentParaIndex);

  showScreen('game-screen');
  loadParagraph();
  showNextWord();
}

function loadParagraph() {
  const para = paragraphs[currentParaIndex];

  // Sort words by order of appearance
  para.words.sort((a, b) =>
    para.text.toLowerCase().indexOf(a.word.toLowerCase()) -
    para.text.toLowerCase().indexOf(b.word.toLowerCase())
  );

  // Highlight all target words
  let html = para.text;
  para.words.forEach(w => {
    const re = new RegExp(`\\b${escapeRegex(w.word)}\\b`, 'gi');
    html = html.replace(re, `<span class="highlight">${w.word}</span>`);
  });

  document.getElementById('paragraph').innerHTML = html;
  document.getElementById('progress').textContent = `0/${para.words.length}`;
}

function showNextWord() {
  const para = paragraphs[currentParaIndex];
  if (currentWordIndex >= para.words.length) {
    endRound();
    return;
  }

  const wordData = para.words[currentWordIndex];
  document.getElementById('current-word-num').textContent = currentWordIndex + 1;
  document.getElementById('target-word').textContent      = wordData.word;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  [...wordData.options]
    .sort(() => Math.random() - 0.5)
    .forEach(optText => {
      const div = document.createElement('div');
      div.className = 'option';
      div.textContent = optText;
      div.onclick = () => handleAnswer(optText, wordData.correct, wordData.word);
      optionsDiv.appendChild(div);
    });
}

function handleAnswer(selected, correct, currentWord) {
  const isCorrect = selected === correct;

  document.querySelectorAll('.option').forEach(opt => {
    if (opt.textContent === correct)  opt.classList.add('correct');
    else if (opt.textContent === selected) opt.classList.add('wrong');
    opt.style.pointerEvents = 'none';
  });

  if (isCorrect) {
    const points = Math.round(100 * streak);
    score       += points;
    correctCount++;
    streak = Math.min(streak + 0.5, 3);
    if (streak > maxStreakToday) maxStreakToday = streak;

    document.getElementById('score').textContent  = score;
    document.getElementById('streak').textContent = streak.toFixed(1);
    showFeedback("🌸 Beautiful shot!", true);
    resetPunishment();

    setTimeout(() => {
      document.getElementById('feedback').textContent = '';
      showVietnameseHint(currentWord, true);
    }, 1350);
  } else {
    streak = 1;
    document.getElementById('streak').textContent = '1';
    showFeedback("Missed it... Punishment increased 🌸", false);
    applyPunishment();
    showVietnameseHint(currentWord, false);
  }
}

function showFeedback(text, isCorrect) {
  const fb = document.getElementById('feedback');
  fb.textContent = text;
  fb.style.color = isCorrect ? '#e04a7e' : '#ff6b6b';
  if (isCorrect) createPetalBurst();
}

function showVietnameseHint(word, isCorrect) {
  // Remove any existing hint
  const existing = document.getElementById('viet-hint');
  if (existing) existing.remove();

  const viet    = vietnameseMeanings[word] || "Đang cập nhật...";
  const english = paragraphs[currentParaIndex].words.find(w => w.word === word)?.correct || "No definition found";

  const hint = document.createElement('div');
  hint.id = 'viet-hint';
  if (isCorrect) hint.classList.add('correct-hint');

  hint.innerHTML = `
    <strong>${isCorrect ? '🌸 Tuyệt vời!' : '🌸 Học từ này cùng mình nhé:'}</strong><br><br>
    <span><strong>${word}</strong></span><br><br>
    <div style="text-align:left; max-width:420px; margin:0 auto;">
      <p style="margin:8px 0;">
        <span style="color:#e04a7e; font-weight:600;">English:</span>
        <span class="hint-meaning-text"> ${english}</span>
      </p>
      <p style="margin:8px 0;">
        <span style="color:#ff4d7a; font-weight:600;">Tiếng Việt:</span>
        <span class="hint-meaning-text"> ${viet}</span>
      </p>
    </div>
    <div style="margin:25px 0 15px;">
      <p style="margin-bottom:10px; font-size:1.05rem; color:#666; font-weight:500;">
        Gõ lại từ tiếng Anh để tiếp tục:
      </p>
      <input type="text" id="word-input"
             placeholder="Nhập từ tiếng Anh ở đây..."
             autocomplete="off">
    </div>
    <button id="submit-word-btn">Xác nhận &amp; Tiếp tục 🌸</button>
    <div id="input-feedback" style="margin-top:15px; min-height:28px; font-size:1.1rem; font-weight:600;"></div>
  `;

  document.getElementById('options').insertAdjacentElement('afterend', hint);

  const input      = document.getElementById('word-input');
  const submitBtn  = document.getElementById('submit-word-btn');
  const inputFb    = document.getElementById('input-feedback');

  setTimeout(() => input.focus(), 150);

  function checkInput() {
    const val = input.value.trim();
    if (val.toLowerCase() === word.toLowerCase()) {
      inputFb.innerHTML = `<span style="color:#e04a7e;">✓ Chính xác! Đang chuyển sang từ tiếp theo...</span>`;
      submitBtn.disabled = true;
      input.disabled = true;
      input.style.borderColor = '#e04a7e';
      setTimeout(() => {
        hint.remove();
        currentWordIndex++;
        document.getElementById('progress').textContent =
          `${currentWordIndex}/${paragraphs[currentParaIndex].words.length}`;
        showNextWord();
      }, 900);
    } else {
      inputFb.innerHTML = `<span style="color:#ff6b6b;">✗ Chưa đúng. Hãy gõ lại: <strong>${word}</strong></span>`;
      input.value = '';
      input.focus();
      input.style.transition = 'transform 0.1s';
      input.style.transform = 'translateX(8px)';
      setTimeout(() => { input.style.transform = 'translateX(-8px)'; }, 100);
      setTimeout(() => { input.style.transform = 'translateX(0)'; }, 300);
    }
  }

  submitBtn.onclick = checkInput;
  input.addEventListener('keypress', e => { if (e.key === 'Enter') checkInput(); });
}

function endRound() {
  const totalWords = paragraphs[currentParaIndex].words.length;
  dailyPlayed++;
  totalCorrect += correctCount;
  totalWrong   += totalWords - correctCount;
  saveDailyStats();

  if (dailyPlayed >= 2) {
    // Both paragraphs done — flashcards first, then fill-in-the-blank
    startFlashcardSession();
  } else {
    // Show between-round result screen
    showBetweenRoundResult(totalWords);
  }
}

function showBetweenRoundResult(totalWords) {
  const isPerfect = correctCount === totalWords;
  const resultScreen = document.getElementById('result-screen');

  resultScreen.innerHTML = `
    <div style="text-align:center; padding:30px;">
      <h2 style="color:#e04a7e;">${isPerfect ? '🎯 PERFECT ROUND!' : '🌸 Round Complete'}</h2>
      <p style="font-size:1.2rem; margin:15px 0;">Score: <strong>${score}</strong> points</p>
      <p style="color:#888;">${isPerfect ? '🌸 Power-up unlocked for the next paragraph!' : ''}</p>
      <button id="play-next-btn" style="margin-top:30px;">Play Next Paragraph 🌸</button>
    </div>
  `;

  showScreen('result-screen');
  if (isPerfect) createPetalBurst();

  document.getElementById('play-next-btn').onclick = () => {
    currentParaIndex = getNextParagraphIndex();
    startNewRound();
  };
}

// ====================== FLASHCARD SESSION ======================

function startFlashcardSession() {
  // Collect all words from every paragraph played this session
  const allWords = [];
  playedParaIndices.forEach(pi => {
    paragraphs[pi].words.forEach(w => {
      allWords.push({
        word:    w.word,
        english: w.correct,
        viet:    vietnameseMeanings[w.word] || "Đang cập nhật..."
      });
    });
  });

  // Shuffle
  flashcardQueue = allWords.sort(() => Math.random() - 0.5);
  currentFlashcardIndex = 0;

  showScreen('flashcard-screen');
  showFlashcard();
}

function showFlashcard() {
  const total = flashcardQueue.length;

  if (currentFlashcardIndex >= total) {
    // All cards done — proceed to fill-in-the-blank
    startReviewSession();
    return;
  }

  const card = flashcardQueue[currentFlashcardIndex];
  flashcardFlipped = false;

  document.getElementById('flashcard-progress').textContent =
    `Card ${currentFlashcardIndex + 1} of ${total}`;

  document.getElementById('fc-word').textContent    = card.word;
  document.getElementById('fc-viet').textContent    = card.viet;
  document.getElementById('fc-english').textContent = card.english;
  document.getElementById('fc-feedback').textContent = '';

  // Reset flip state
  const outer = document.getElementById('flashcard');
  outer.classList.remove('flipped');

  // Hide action buttons until flipped
  document.getElementById('fc-skip-btn').classList.add('hidden');
  document.getElementById('fc-known-btn').classList.add('hidden');

  // Flip on card click
  outer.onclick = () => {
    if (flashcardFlipped) return;
    flashcardFlipped = true;
    outer.classList.add('flipped');
    document.getElementById('fc-skip-btn').classList.remove('hidden');
    document.getElementById('fc-known-btn').classList.remove('hidden');
  };
}

function advanceFlashcard(wasKnown) {
  const fb = document.getElementById('fc-feedback');
  fb.textContent = wasKnown ? '✓ Great!' : '⏭ Skipped';
  fb.style.color  = wasKnown ? '#e04a7e' : '#aaa';

  // Disable buttons immediately
  document.getElementById('fc-skip-btn').disabled  = true;
  document.getElementById('fc-known-btn').disabled = true;

  setTimeout(() => {
    document.getElementById('fc-skip-btn').disabled  = false;
    document.getElementById('fc-known-btn').disabled = false;
    currentFlashcardIndex++;
    showFlashcard();
  }, 500);
}

// ====================== FILL IN THE BLANK ======================
// ----------------------------------------------------------------
//  ADD YOUR CUSTOM SENTENCES BELOW.
//  Each entry needs:
//    sentence : the sentence with _____ where the blank goes
//    answer   : the correct word (must match one of the options exactly)
//    options  : exactly 4 choices including the correct answer
// ----------------------------------------------------------------
const fillSentences = [
  {
    sentence: "Scientists warn that deforestation threatens _____ by destroying habitats for thousands of species.",
    answer:   "biodiversity",
    options:  ["biodiversity", "predators", "livestock", "abundance"]
  },
  {
    sentence: "Without natural _____, prey populations can grow unchecked and damage entire ecosystems.",
    answer:   "predators",
    options:  ["settlers", "predators", "graziers", "descendants"]
  },
  {
    sentence: "Farmers in the region lost a third of their _____ during the unusually harsh winter.",
    answer:   "livestock",
    options:  ["livestock", "territories", "mammals", "fences"]
  },
  {
    sentence: "The island was overrun by _____ cats that had escaped from settlers decades ago.",
    answer:   "feral",
    options:  ["solitary", "native", "feral", "dwindling"]
  },
  {
    sentence: "The prolonged _____ caused rivers to dry up and crops to fail across the entire region.",
    answer:   "drought",
    options:  ["drought", "baiting", "interaction", "pattern"]
  },
  {
    sentence: "It took a _____ effort from the whole community to restore the damaged wetland.",
    answer:   "sustained",
    options:  ["sustained", "unleashed", "arid", "aggressive"]
  },
  {
    sentence: "An _____ of rainfall this spring meant the valley was greener than anyone could remember.",
    answer:   "abundance",
    options:  ["dwindling", "abundance", "scarce", "response"]
  },
  {
    sentence: "The _____ road conditions made travel dangerous after weeks of heavy rain.",
    answer:   "deteriorating",
    options:  ["deteriorating", "solitary", "counter-productive", "sustained"]
  },
  {
    sentence: "Unlike wolves, leopards are largely _____ animals that hunt and live alone.",
    answer:   "solitary",
    options:  ["mammalian", "fertile", "solitary", "wealthy"]
  },
  {
    sentence: "Male lions patrol their _____ constantly to drive off rival packs.",
    answer:   "territories",
    options:  ["territories", "packs", "livelihoods", "mainland"]
  },
  // ── Add more questions below this line ──
];

// How many fill-in-the-blank questions to show per session
const FILL_QUESTIONS_PER_SESSION = 5;

function startReviewSession() {
  // Reset fill state
  currentFillIndex = 0;
  fillCorrectCount = 0;
  fillWrongCount   = 0;
  fillAnswered     = false;

  // Shuffle and pick a subset of questions
  shuffledFillQueue = [...fillSentences]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(FILL_QUESTIONS_PER_SESSION, fillSentences.length));

  showScreen('review-screen');
  showFillQuestion();
}

function showFillQuestion() {
  const total = shuffledFillQueue.length;

  if (currentFillIndex >= total) {
    showFinalSummary();
    return;
  }

  fillAnswered = false;
  const q = shuffledFillQueue[currentFillIndex];

  // Progress
  document.getElementById('review-progress').textContent =
    `Question ${currentFillIndex + 1} of ${total}`;

  // Sentence with styled blank
  const rendered = q.sentence.replace(
    '_____',
    `<span class="fill-blank">___________</span>`
  );
  document.getElementById('fill-paragraph').innerHTML = rendered;

  // Clear feedback
  document.getElementById('fill-feedback').innerHTML = '';

  // Build shuffled MC options
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
  const optionsDiv = document.getElementById('fill-options');
  optionsDiv.innerHTML = '';
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'fill-option';
    btn.textContent = opt;
    btn.onclick = () => handleFillAnswer(btn, opt, q.answer, q.sentence);
    optionsDiv.appendChild(btn);
  });

  // Hide next button until answered
  document.getElementById('fill-next-btn').classList.add('hidden');
}

function handleFillAnswer(btn, selected, correct, sentence) {
  if (fillAnswered) return;
  fillAnswered = true;

  const isCorrect = selected === correct;
  const fb = document.getElementById('fill-feedback');
  const optionsDiv = document.getElementById('fill-options');

  // Style all buttons
  optionsDiv.querySelectorAll('.fill-option').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) {
      b.classList.add('fill-opt-correct');
    } else if (b === btn && !isCorrect) {
      b.classList.add('fill-opt-wrong');
    }
  });

  if (isCorrect) {
    fillCorrectCount++;
    fb.innerHTML = `<span style="color:#e04a7e;">🌸 Correct!</span>`;
    createPetalBurst();
  } else {
    fillWrongCount++;
    // Show the correct answer in context
    const revealed = sentence.replace(
      '_____',
      `<strong style="color:#ff4d7a;">${correct}</strong>`
    );
    fb.innerHTML = `<span style="color:#ff6b6b;">Wrong — answer: <strong>${correct}</strong></span>`;
  }

  document.getElementById('fill-next-btn').classList.remove('hidden');
}

function nextFillQuestion() {
  currentFillIndex++;
  showFillQuestion();
}

// ====================== FINAL SUMMARY ======================
function showFinalSummary() {
  const quizAccuracy = (totalCorrect + totalWrong) > 0
    ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100)
    : 0;

  const fillTotal    = fillCorrectCount + fillWrongCount;
  const fillAccuracy = fillTotal > 0
    ? Math.round((fillCorrectCount / fillTotal) * 100)
    : 0;

  const elapsedMs = sessionStartTime ? Date.now() - sessionStartTime : 0;
  const totalSecs = Math.floor(elapsedMs / 1000);
  const mins      = Math.floor(totalSecs / 60);
  const secs      = totalSecs % 60;
  const timeStr   = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  const dateStr = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  // Build fill result rows from the questions answered
  let fillRows = '';
  const answered = shuffledFillQueue.slice(0, currentFillIndex);
  answered.forEach((q, i) => {
    // We don't track per-question in state, so just show correct answer for each
    fillRows += `
      <div style="text-align:left; padding:10px 0; border-bottom:1px solid #ffd6e7;">
        <span style="font-size:0.85rem; color:#aaa;">Q${i + 1}</span>
        <div style="font-size:0.95rem; color:#555; margin:3px 0;">
          ${q.sentence.replace('_____', `<strong style="color:#c0266e;">${q.answer}</strong>`)}
        </div>
      </div>`;
  });

  const resultScreen = document.getElementById('result-screen');
  resultScreen.innerHTML = `
    <div style="text-align:center; padding:30px 20px;">
      <p style="font-size:0.9rem; color:#bbb; margin-bottom:4px;">📅 ${dateStr}</p>
      <h2 style="color:#e04a7e; font-size:2rem; margin-bottom:28px;">🌸 Daily Summary</h2>

      <!-- Paragraph Quiz -->
      <div class="summary-card">
        <h3 class="summary-card-title">📖 Paragraph Quiz</h3>
        <div class="summary-stats">
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#e04a7e;">${totalCorrect}</span>
            <span class="summary-stat-label">Correct</span>
          </div>
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#ff6b6b;">${totalWrong}</span>
            <span class="summary-stat-label">Wrong</span>
          </div>
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#c0266e;">${quizAccuracy}%</span>
            <span class="summary-stat-label">Accuracy</span>
          </div>
        </div>
        <p style="color:#aaa; font-size:0.9rem; margin-top:12px;">
          🔥 Best streak: ${maxStreakToday.toFixed(1)}x &nbsp;|&nbsp; ⏱ ${timeStr}
        </p>
      </div>

      <!-- Fill in the Blank -->
      <div class="summary-card">
        <h3 class="summary-card-title">✏️ Fill in the Blank</h3>
        <div class="summary-stats">
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#e04a7e;">${fillCorrectCount}</span>
            <span class="summary-stat-label">Correct</span>
          </div>
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#ff6b6b;">${fillWrongCount}</span>
            <span class="summary-stat-label">Wrong</span>
          </div>
          <div class="summary-stat">
            <span class="summary-stat-num" style="color:#c0266e;">${fillAccuracy}%</span>
            <span class="summary-stat-label">Accuracy</span>
          </div>
        </div>
        ${fillRows
          ? `<div style="margin-top:18px; font-size:0.9rem;">${fillRows}</div>`
          : ''}
      </div>

      <p style="color:#e04a7e; font-size:1.05rem; margin:24px 0 20px;">
        ${quizAccuracy >= 85 && fillAccuracy >= 80
          ? "Outstanding! You're mastering this vocabulary 🌸"
          : "Great session! Keep pushing forward 🌸"}
      </p>

      <button onclick="localStorage.removeItem('wordSniperDaily'); location.reload();">
        Come Back Tomorrow 🌸
      </button>
    </div>
  `;

  showScreen('result-screen');
  createPetalBurst();
}

// ====================== UTILITY ======================
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ====================== INIT ======================
document.addEventListener('DOMContentLoaded', () => {
  loadDailyStats();

  if (dailyPlayed >= 2) {
    // Already finished both paragraphs today — go straight to review
    startReviewSession();
  } else {
    currentParaIndex = getNextParagraphIndex();
    startNewRound();
  }
});