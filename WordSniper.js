// ==================== WORD SNIPER - SAKURA EDITION ====================

const paragraphs = [
  // ==================== 1. Climate Change & Coral Reefs (218 words) ====================
  {
    text: "In recent decades, climate change has accelerated at an unprecedented rate, driven largely by anthropogenic activities including widespread fossil fuel combustion, deforestation, and rapid industrial expansion across developing and developed nations alike. One of the most alarming and visible consequences is the rapid degradation of coral reefs, which function as critical habitats supporting an immense variety of marine biodiversity and providing essential ecosystem services to coastal communities. Scientists warn that if global temperatures continue to surge without immediate and coordinated intervention, many reef systems could face irreversible damage by 2050, potentially triggering a catastrophic collapse of entire marine food webs. In response, conservationists strongly advocate for the mitigation of carbon emissions through the widespread adoption of renewable energy technologies, large-scale reforestation projects, and the implementation of effective international carbon pricing mechanisms. However, some critics contend that these measures alone may prove insufficient without deeper systemic economic reforms and genuine long-term international collaboration that transcends political and economic boundaries.",
    words: [
      { word: "anthropogenic", correct: "Originating from human activity", options: ["Originating from human activity", "Caused by natural climate cycles", "Resulting from volcanic activity", "Driven by cosmic radiation"] },
      { word: "degradation", correct: "Gradual destruction or decline in quality", options: ["Gradual destruction or decline in quality", "Sudden ecological revitalization", "Rapid habitat expansion", "Complete long-term preservation"] },
      { word: "surge", correct: "Increase suddenly and strongly", options: ["Increase suddenly and strongly", "Decline gradually over time", "Remain stable for decades", "Disappear without any trace"] },
      { word: "irreversible", correct: "Impossible to undo or reverse", options: ["Impossible to undo or reverse", "Easily reversible with technology", "Temporarily paused by policy", "Partially recoverable within years"] },
      { word: "mitigation", correct: "Reduction or lessening of something harmful", options: ["Reduction or lessening of something harmful", "Complete and permanent elimination", "Intensification of the original problem", "Only systematic scientific measurement"] },
      { word: "adoption", correct: "The act of accepting or starting to use something new", options: ["The act of accepting or starting to use something new", "Outright rejection of new ideas", "Temporary short-term experimentation", "Forced governmental imposition"] },
      { word: "reforestation", correct: "Planting trees in areas previously cleared of forest", options: ["Planting trees in areas previously cleared of forest", "Large-scale commercial deforestation", "Rapid urban sprawl development", "Conversion to intensive agriculture"] },
      { word: "collaboration", correct: "Working together with others toward a common goal", options: ["Working together with others toward a common goal", "Fierce economic and political competition", "Complete diplomatic isolation", "Open international conflict"] },
      { word: "catastrophic", correct: "Causing sudden and widespread damage", options: ["Causing sudden and widespread damage", "Mild and easily manageable", "Beneficial in the long run", "Gradual and barely noticeable"] },
      { word: "transcends", correct: "Goes beyond the limits of something", options: ["Goes beyond the limits of something", "Remains strictly within boundaries", "Slightly improves existing systems", "Completely ignores differences"] }
    ]
  },

  // ==================== 2. Artificial Intelligence (192 words) ====================
  {
    text: "Artificial intelligence has profoundly transformed numerous industries ranging from healthcare diagnostics and autonomous transportation to financial services and creative content generation. Yet its rapid proliferation continues to raise significant ethical concerns among policymakers, researchers, and the general public. Many experts believe that without robust regulatory frameworks and careful oversight, AI could lead to widespread job displacement, especially in routine cognitive and manual tasks, while also exacerbating existing social and economic inequality across different demographic groups. Nevertheless, strong proponents argue that its potential to dramatically enhance productivity, accelerate groundbreaking scientific discoveries, and help solve complex global problems far outweighs the associated risks, provided that development proceeds responsibly with transparent governance, ethical guidelines, and inclusive stakeholder involvement from the very beginning.",
    words: [
      { word: "proliferation", correct: "Rapid spread or increase in number", options: ["Rapid spread or increase in number", "Strict governmental regulation", "Gradual and controlled decline", "Total disappearance from daily life"] },
      { word: "displacement", correct: "Forcing people out of their jobs or traditional roles", options: ["Forcing people out of their jobs or traditional roles", "Massive new job creation", "Significant career advancement", "Comprehensive skill enhancement programs"] },
      { word: "exacerbate", correct: "Make a problem or situation worse", options: ["Make a problem or situation worse", "Significantly improve overall conditions", "Completely resolve the underlying issue", "Temporarily set aside the effects"] },
      { word: "enhance", correct: "Improve or increase the quality or value", options: ["Improve or increase the quality or value", "Drastically reduce effectiveness", "Maintain exactly at current levels", "Completely undermine existing progress"] },
      { word: "regulatory", correct: "Related to official rules or laws", options: ["Related to official rules or laws", "Entirely voluntary industry guidelines", "Informal community-based standards", "Purely market-driven forces"] },
      { word: "transparent", correct: "Open and easy to understand", options: ["Open and easy to understand", "Highly secretive and opaque", "Completely chaotic", "Temporarily hidden from view"] },
      { word: "governance", correct: "The way that something is managed", options: ["The way that something is managed", "Total lack of control", "Random decision making", "Short-term profit focus"] },
      { word: "stakeholder", correct: "A person or group with an interest in something", options: ["A person or group with an interest in something", "Only company executives", "Government officials exclusively", "Uninvolved external observers"] },
      { word: "profoundly", correct: "In a way that has a very great effect", options: ["In a way that has a very great effect", "Only slightly changed", "Temporarily affected", "Completely reversed"] },
      { word: "inclusive", correct: "Including everyone or everything", options: ["Including everyone or everything", "Excluding certain groups", "Limited to experts only", "Focused on short-term gains"] }
    ]
  },

    // ==================== 3. Urbanization & Society (205 words) ====================
  {
    text: "The phenomenon of rapid urbanization has led to unprecedented economic growth in many developing nations over the past few decades. However, this explosive expansion frequently results in the proliferation of informal settlements on the outskirts of major metropolitan areas, where residents often endure chronic overcrowding, inadequate sanitation infrastructure, limited access to clean water, and insufficient public services such as healthcare and education. Governments are increasingly compelled to implement sustainable urban planning policies that effectively balance robust economic development with core principles of social equity and long-term environmental preservation. At the same time, these policies must address the growing challenges posed by climate vulnerability in densely populated urban zones, including flooding, heat islands, and resource scarcity, while ensuring that marginalized communities are not left behind in the pursuit of modern city infrastructure.",
    words: [
      { word: "phenomenon", correct: "A fact or situation that is observed to exist or happen", options: ["A fact or situation that is observed to exist or happen", "A minor temporary trend", "A complete societal solution", "An imaginary occurrence"] },
      { word: "proliferation", correct: "Rapid spread or increase in number", options: ["Rapid spread or increase in number", "Sudden and sharp decrease", "Careful and controlled growth", "Total elimination"] },
      { word: "chronic", correct: "Persistent and long-lasting in nature", options: ["Persistent and long-lasting in nature", "Short-term and temporary", "Occasional and mild", "Beneficial and positive"] },
      { word: "inadequate", correct: "Not sufficient or not good enough for a purpose", options: ["Not sufficient or not good enough for a purpose", "More than sufficient", "Perfectly suitable and ideal", "Temporarily delayed"] },
      { word: "implement", correct: "To put a plan or decision into effect or action", options: ["To put a plan or decision into effect or action", "To reject completely", "To discuss endlessly without action", "To delay indefinitely"] },
      { word: "equity", correct: "Fairness and justice in treatment or distribution", options: ["Fairness and justice in treatment or distribution", "Pure economic growth only", "Social division and inequality", "Environmental exploitation"] },
      { word: "sustainable", correct: "Able to be maintained at a steady level without depletion", options: ["Able to be maintained at a steady level without depletion", "Short-term profit focused", "Rapid and unchecked expansion", "Completely resource intensive"] },
      { word: "marginalized", correct: "Treated as insignificant or peripheral", options: ["Treated as insignificant or peripheral", "Highly privileged", "Fully integrated", "Temporarily supported"] },
      { word: "vulnerability", correct: "The state of being exposed to harm", options: ["The state of being exposed to harm", "Complete protection", "Strong resilience", "Temporary stability"] },
      { word: "infrastructure", correct: "Basic physical and organizational structures", options: ["Basic physical and organizational structures", "Luxury amenities only", "Temporary makeshift setups", "Digital services exclusively"] }
    ]
  },

  // ==================== 4. Biodiversity & Conservation (198 words) ====================
  {
    text: "Biodiversity loss is now widely regarded as one of the most pressing environmental issues confronting humanity in the twenty-first century. Habitat fragmentation caused by relentless human encroachment into natural wilderness areas has significantly diminished the resilience of countless ecosystems worldwide. Conservation biologists strongly emphasize the urgent importance of establishing expansive protected areas and promoting the creation of ecological corridors designed to facilitate gene flow between previously isolated wildlife populations. These measures aim to enhance overall species survival rates amid accelerating climate pressures and human-induced environmental changes. Without decisive action, the continued decline in genetic diversity could lead to irreversible consequences for ecosystem stability and the services they provide to human societies.",
    words: [
      { word: "fragmentation", correct: "The process of breaking something into smaller disconnected parts", options: ["The process of breaking something into smaller disconnected parts", "Complete unification of areas", "Rapid and continuous expansion", "Natural organic growth"] },
      { word: "encroachment", correct: "Gradual intrusion into an area that belongs to someone else", options: ["Gradual intrusion into an area that belongs to someone else", "Peaceful long-term coexistence", "Mutual beneficial partnership", "Complete and voluntary withdrawal"] },
      { word: "resilience", correct: "The ability to recover quickly from difficulties or setbacks", options: ["The ability to recover quickly from difficulties or setbacks", "Permanent structural weakness", "Total and irreversible collapse", "Slow and steady decline"] },
      { word: "facilitate", correct: "To make an action or process easier or more likely to occur", options: ["To make an action or process easier or more likely to occur", "To completely prevent from happening", "To make significantly more difficult", "To ignore entirely"] },
      { word: "gene flow", correct: "The transfer of genetic material between separate populations", options: ["The transfer of genetic material between separate populations", "Complete genetic isolation", "Rapid uncontrolled mutation", "Species-wide extinction event"] },
      { word: "biodiversity", correct: "The variety of plant and animal life in a particular habitat", options: ["The variety of plant and animal life in a particular habitat", "Uniform single-species dominance", "Artificial laboratory creation", "Seasonal population fluctuation"] },
      { word: "diminished", correct: "Made smaller or less important", options: ["Made smaller or less important", "Greatly strengthened", "Completely restored", "Temporarily enhanced"] },
      { word: "ecological", correct: "Related to the relationships between living organisms and their environment", options: ["Related to the relationships between living organisms and their environment", "Purely economic factors", "Strictly political issues", "Technological developments only"] },
      { word: "corridors", correct: "Passages connecting separated areas", options: ["Passages connecting separated areas", "Barriers preventing movement", "Isolated protected zones", "Artificial breeding facilities"] },
      { word: "irreversible", correct: "Impossible to undo or reverse", options: ["Impossible to undo or reverse", "Easily fixable", "Temporarily paused", "Partially recoverable"] }
    ]
  },

  // ==================== 5. Technology & Ethics (182 words) ====================
  {
    text: "The exponential advancement of emerging technologies has revolutionized global communication, commerce, and scientific research in ways previously unimaginable only a few decades ago. Yet this relentless progress also poses profound ethical dilemmas regarding data privacy, algorithmic bias, surveillance capabilities, and the potential for autonomous systems to operate beyond meaningful human oversight. Scholars and ethicists argue that without comprehensive ethical guidelines and broad international consensus on governance frameworks, society risks undermining fundamental human rights while aggressively pursuing unchecked innovation at any cost. Balancing the tremendous benefits of technological progress with responsible development remains one of the central challenges of our time.",
    words: [
      { word: "exponential", correct: "Growing or increasing at an increasingly rapid rate", options: ["Growing or increasing at an increasingly rapid rate", "Slow and steady linear growth", "Completely stagnant development", "Gradual decline over time"] },
      { word: "dilemmas", correct: "Difficult choices between two or more undesirable options", options: ["Difficult choices between two or more undesirable options", "Simple straightforward decisions", "Obvious moral certainties", "Irrelevant minor issues"] },
      { word: "algorithmic", correct: "Related to the rules or procedures followed by computers", options: ["Related to the rules or procedures followed by computers", "Entirely human decision-making", "Random chance-based systems", "Traditional manual processes"] },
      { word: "autonomous", correct: "Able to operate independently without external control", options: ["Able to operate independently without external control", "Fully dependent on human input", "Partially guided by rules", "Completely unpredictable"] },
      { word: "surveillance", correct: "Close observation or monitoring", options: ["Close observation or monitoring", "Complete privacy protection", "Casual social interaction", "Public transparency only"] },
      { word: "profound", correct: "Very great or intense in degree", options: ["Very great or intense in degree", "Slight and superficial", "Temporary and minor", "Completely neutral"] },
      { word: "consensus", correct: "General agreement among a group", options: ["General agreement among a group", "Strong disagreement", "Individual opinions only", "Temporary compromise"] },
      { word: "governance", correct: "The way that something is managed or controlled", options: ["The way that something is managed or controlled", "Total lack of rules", "Random decision making", "Short-term profit focus"] },
      { word: "undermining", correct: "Gradually weakening or damaging", options: ["Gradually weakening or damaging", "Strongly supporting", "Completely restoring", "Temporarily pausing"] },
      { word: "unchecked", correct: "Not controlled or limited", options: ["Not controlled or limited", "Strictly regulated", "Carefully balanced", "Completely stopped"] }
    ]
  },

  // ==================== 6. Global Economy (175 words) ====================
  {
    text: "Globalization has interconnected economies across continents, fostering unprecedented levels of trade, investment, cultural exchange, and technological transfer. Nevertheless, this intricate web of interdependence has also amplified economic volatility, with supply chain disruptions capable of triggering widespread repercussions far beyond the original event. Economists advocate for diversified production strategies, resilient infrastructure development, and stronger international cooperation to mitigate risks associated with geopolitical tensions and unforeseen global crises such as pandemics or natural disasters.",
    words: [
      { word: "interconnected", correct: "Mutually linked or dependent on one another", options: ["Mutually linked or dependent on one another", "Completely independent", "Weakly associated only", "Temporarily aligned"] },
      { word: "interdependence", correct: "The state of being mutually reliant", options: ["The state of being mutually reliant", "Total self-sufficiency", "One-sided dominance", "Complete isolation"] },
      { word: "volatility", correct: "Liability to change rapidly and unpredictably", options: ["Liability to change rapidly and unpredictably", "Absolute stability", "Slow predictable growth", "Permanent decline"] },
      { word: "repercussions", correct: "Unintended consequences or effects", options: ["Unintended consequences or effects", "Planned beneficial outcomes", "Immediate positive results", "Irrelevant side issues"] },
      { word: "mitigate", correct: "To make something less severe or harmful", options: ["To make something less severe or harmful", "To intensify dramatically", "To completely ignore", "To accelerate further"] },
      { word: "diversified", correct: "Made more varied or spread out", options: ["Made more varied or spread out", "Highly concentrated", "Completely uniform", "Temporarily reduced"] },
      { word: "resilient", correct: "Able to withstand or recover from difficulties", options: ["Able to withstand or recover from difficulties", "Extremely fragile", "Permanently damaged", "Slow to adapt"] },
      { word: "geopolitical", correct: "Related to politics and geography between countries", options: ["Related to politics and geography between countries", "Purely domestic issues", "Only economic factors", "Entirely cultural matters"] },
      { word: "cooperation", correct: "Working together for a common purpose", options: ["Working together for a common purpose", "Fierce competition", "Complete isolation", "Open conflict"] },
      { word: "unforeseen", correct: "Not anticipated or expected", options: ["Not anticipated or expected", "Carefully planned", "Completely predictable", "Easily avoided"] }
    ]
  },

  // ==================== 7. Mental Health in Digital Age (218 words) ====================
  {
    text: "The digital age has ushered in unprecedented connectivity, enabling instantaneous communication and access to vast repositories of information across the globe. Yet this remarkable technological leap has also contributed to a pronounced surge in mental health challenges, particularly among younger generations who have grown up immersed in these platforms from an early age. Constant exposure to carefully curated and often idealized representations of life on social media can profoundly distort self-perception, fostering chronic feelings of inadequacy, anxiety, social comparison, and even depression that were far less prevalent in previous eras. Psychologists and public health experts now recommend a multifaceted approach, including the cultivation of emotional resilience through regular mindfulness practices, the establishment of balanced digital hygiene routines, greater awareness of algorithmic influences that shape online experiences, and stronger support systems within families and educational institutions. Without deliberate and sustained intervention at both individual and societal levels, these pervasive effects risk undermining long-term psychological well-being on a broad scale.",
    words: [
      { word: "ushered", correct: "To cause or mark the start of something new", options: ["To cause or mark the start of something new", "To completely end an era", "To slow down progress significantly", "To reverse previous trends"] },
      { word: "unprecedented", correct: "Never done or known before", options: ["Never done or known before", "Common and ordinary", "Slightly improved", "Temporarily increased"] },
      { word: "surge", correct: "A sudden powerful increase", options: ["A sudden powerful increase", "A gradual decrease", "A stable plateau", "A complete disappearance"] },
      { word: "idealized", correct: "Represented as better than reality", options: ["Represented as better than reality", "Shown in accurate detail", "Deliberately hidden", "Completely neutral"] },
      { word: "distort", correct: "To give a misleading or false impression", options: ["To give a misleading or false impression", "To accurately represent", "To enhance positively", "To ignore completely"] },
      { word: "chronic", correct: "Persistent and long-lasting", options: ["Persistent and long-lasting", "Short-term and temporary", "Occasional and mild", "Beneficial overall"] },
      { word: "resilience", correct: "The ability to recover quickly from difficulties", options: ["The ability to recover quickly from difficulties", "Permanent emotional weakness", "Total psychological collapse", "Slow inevitable decline"] },
      { word: "pervasive", correct: "Present or noticeable throughout an entire area", options: ["Present or noticeable throughout an entire area", "Rare and localized", "Temporary and fleeting", "Completely absent"] },
      { word: "multifaceted", correct: "Having many different aspects", options: ["Having many different aspects", "Simple and straightforward", "Single-focused only", "Completely ineffective"] },
      { word: "algorithmic", correct: "Related to computer algorithms", options: ["Related to computer algorithms", "Purely human judgment", "Random chance", "Traditional methods"] }
    ]
  },

  // ==================== 8. Education & Innovation (185 words) ====================
  {
    text: "Modern educational paradigms are shifting toward experiential learning models that prioritize critical thinking, problem-solving skills, and creativity over traditional rote memorization. This pedagogical evolution aims to equip students with the adaptability and resilience required to thrive in an ever-changing global job market characterized by rapid technological disruption. However, successfully implementing such ambitious reforms demands substantial investment in teacher training programs, curriculum redesign, updated assessment methods, and digital infrastructure to ensure equitable access across diverse socioeconomic backgrounds and geographic regions.",
    words: [
      { word: "paradigms", correct: "Typical patterns or models of something", options: ["Typical patterns or models of something", "Random experimental approaches", "Outdated traditional methods", "Temporary fads"] },
      { word: "pedagogical", correct: "Related to the method and practice of teaching", options: ["Related to the method and practice of teaching", "Focused solely on testing", "Entirely recreational", "Purely administrative"] },
      { word: "adaptability", correct: "The ability to adjust to new conditions", options: ["The ability to adjust to new conditions", "Rigid resistance to change", "Complete dependence", "Short-term memory"] },
      { word: "equitable", correct: "Fair and impartial in distribution", options: ["Fair and impartial in distribution", "Strictly competitive", "Randomly allocated", "Favoring specific groups"] },
      { word: "experiential", correct: "Based on hands-on experience", options: ["Based on hands-on experience", "Purely theoretical", "Only lecture-based", "Completely passive"] },
      { word: "resilience", correct: "The ability to recover from difficulties", options: ["The ability to recover from difficulties", "Permanent weakness", "Total collapse", "Slow decline"] },
      { word: "disruption", correct: "Sudden disturbance or interruption", options: ["Sudden disturbance or interruption", "Smooth continuous progress", "Complete stability", "Gradual improvement"] },
      { word: "substantial", correct: "Of considerable size or importance", options: ["Of considerable size or importance", "Minimal and insignificant", "Temporary and fleeting", "Irrelevant to the outcome"] },
      { word: "curriculum", correct: "The subjects comprising a course of study", options: ["The subjects comprising a course of study", "Only extracurricular activities", "Random selection of topics", "Outdated content only"] },
      { word: "socioeconomic", correct: "Related to social and economic factors", options: ["Related to social and economic factors", "Purely cultural issues", "Strictly geographic", "Only technological"] }
    ]
  },

  // ==================== 9. Space Exploration (172 words) ====================
  {
    text: "The renewed interest in space exploration has reignited international ambitions to establish permanent human presence on other celestial bodies such as the Moon and Mars. Advances in propulsion technology, life-support systems, and reusable spacecraft have rendered long-duration missions increasingly feasible. Nevertheless, formidable challenges related to radiation exposure, psychological isolation, microgravity effects on the human body, and sustainable resource utilization remain significant obstacles that must be surmounted before sustainable extraterrestrial colonization can become a realistic prospect for humanity.",
    words: [
      { word: "reignited", correct: "Revived or started again with new energy", options: ["Revived or started again with new energy", "Completely extinguished", "Temporarily paused", "Gradually faded"] },
      { word: "propulsion", correct: "The force that moves something forward", options: ["The force that moves something forward", "Static positioning system", "Manual steering mechanism", "Passive drifting"] },
      { word: "formidable", correct: "Inspiring fear or respect through being large or powerful", options: ["Inspiring fear or respect through being large or powerful", "Trivial and insignificant", "Easily overcome", "Completely harmless"] },
      { word: "surmounted", correct: "Successfully overcome a difficulty", options: ["Successfully overcome a difficulty", "Ignored without consequence", "Exacerbated further", "Accepted as permanent"] },
      { word: "celestial", correct: "Relating to the sky or outer space", options: ["Relating to the sky or outer space", "Limited to Earth only", "Entirely terrestrial", "Purely biological"] },
      { word: "feasible", correct: "Possible to do easily or conveniently", options: ["Possible to do easily or conveniently", "Completely impossible", "Temporarily delayed", "Extremely risky"] },
      { word: "isolation", correct: "The state of being alone or separated", options: ["The state of being alone or separated", "Strong social connection", "Complete integration", "Temporary grouping"] },
      { word: "microgravity", correct: "Very weak gravitational force", options: ["Very weak gravitational force", "Strong Earth-like gravity", "Complete absence of gravity", "Normal planetary conditions"] },
      { word: "extraterrestrial", correct: "Existing outside Earth", options: ["Existing outside Earth", "Limited to Earth only", "Entirely human-made", "Purely theoretical"] },
      { word: "colonization", correct: "The act of establishing a settlement", options: ["The act of establishing a settlement", "Complete abandonment", "Temporary visitation", "Scientific observation only"] }
    ]
  },

  // ==================== 10. Cultural Preservation (168 words) ====================
  {
    text: "In an era of rapid globalization and technological homogenization, the preservation of indigenous languages and traditional cultural practices has emerged as a critical priority for many communities around the world. Linguistic diversity represents an invaluable repository of human knowledge, wisdom, and unique worldviews accumulated over millennia. Efforts to revitalize endangered dialects through immersive education programs, community-led initiatives, and digital archiving technologies are gaining momentum. Yet they continue to face formidable resistance from dominant mainstream cultural narratives and economic pressures that favor standardization.",
    words: [
      { word: "indigenous", correct: "Native to a particular region or country", options: ["Native to a particular region or country", "Recently introduced species", "Universally adopted", "Artificially created"] },
      { word: "repository", correct: "A place or container where things are stored", options: ["A place or container where things are stored", "A temporary display area", "A disposable waste site", "A commercial marketplace"] },
      { word: "revitalize", correct: "To give new life or vigor to something", options: ["To give new life or vigor to something", "To permanently abandon", "To accelerate decline", "To maintain status quo"] },
      { word: "formidable", correct: "Inspiring fear or respect through being large or powerful", options: ["Inspiring fear or respect through being large or powerful", "Trivial and insignificant", "Easily overcome", "Completely harmless"] },
      { word: "homogenization", correct: "The process of making things uniform", options: ["The process of making things uniform", "Increasing diversity", "Temporary variation", "Complete separation"] },
      { word: "linguistic", correct: "Related to language", options: ["Related to language", "Purely cultural only", "Strictly economic", "Entirely technological"] },
      { word: "immersive", correct: "Providing deep involvement", options: ["Providing deep involvement", "Superficial and brief", "Completely passive", "Highly theoretical"] },
      { word: "endangered", correct: "At risk of disappearing", options: ["At risk of disappearing", "Fully secure", "Rapidly expanding", "Completely dominant"] },
      { word: "momentum", correct: "The strength or force gained while moving", options: ["The strength or force gained while moving", "Complete standstill", "Gradual slowdown", "Sudden reversal"] },
      { word: "standardization", correct: "The process of making things conform to a standard", options: ["The process of making things conform to a standard", "Increasing variety", "Complete chaos", "Temporary flexibility"] }
    ]
  },

  // ==================== 11. Renewable Energy (179 words) ====================
  {
    text: "The transition toward renewable energy sources has become imperative in the global effort to combat climate change and reduce dependence on fossil fuels. Solar, wind, hydroelectric, and geothermal power offer viable alternatives, yet their intermittent nature necessitates substantial advancements in energy storage technologies, smart grid systems, and infrastructure modernization. Policymakers must navigate complex trade-offs between clear environmental benefits, economic feasibility, job creation potential, and social acceptance when designing effective incentives for widespread infrastructure deployment across different regions.",
    words: [
      { word: "imperative", correct: "Of vital importance or essential", options: ["Of vital importance or essential", "Merely optional", "Completely unnecessary", "Temporarily convenient"] },
      { word: "intermittent", correct: "Occurring at irregular intervals", options: ["Occurring at irregular intervals", "Constant and uninterrupted", "Completely predictable", "Permanently absent"] },
      { word: "substantial", correct: "Of considerable size or importance", options: ["Of considerable size or importance", "Minimal and insignificant", "Temporary and fleeting", "Irrelevant to the outcome"] },
      { word: "deployment", correct: "The action of bringing something into effective action", options: ["The action of bringing something into effective action", "Complete withdrawal", "Theoretical planning only", "Accidental occurrence"] },
      { word: "viable", correct: "Capable of working successfully", options: ["Capable of working successfully", "Completely unworkable", "Temporarily useful", "Highly risky"] },
      { word: "infrastructure", correct: "Basic physical and organizational structures", options: ["Basic physical and organizational structures", "Luxury amenities only", "Temporary setups", "Digital services exclusively"] },
      { word: "modernization", correct: "The process of making something more modern", options: ["The process of making something more modern", "Complete abandonment", "Preservation of old systems", "Sudden reversal"] },
      { word: "feasibility", correct: "The state of being possible", options: ["The state of being possible", "Complete impossibility", "Temporary delay", "High risk only"] },
      { word: "incentives", correct: "Things that encourage action", options: ["Things that encourage action", "Strong deterrents", "Complete restrictions", "Random requirements"] },
      { word: "trade-offs", correct: "Compromises between competing factors", options: ["Compromises between competing factors", "Perfect win-win situations", "No consequences", "Complete dominance of one side"] }
    ]
  },

  // ==================== 12. Ocean Conservation (181 words) ====================
  {
    text: "The world's oceans are experiencing profound transformations due to plastic pollution, overfishing, and ocean acidification caused by rising atmospheric carbon levels. Marine biologists have documented alarming declines in keystone species populations that play pivotal roles in maintaining ecosystem balance and supporting global food chains. International treaties aimed at reducing single-use plastics, regulating fishing practices, and establishing large marine protected areas represent crucial steps forward. However, effective enforcement remains a persistent challenge across vast oceanic jurisdictions that span multiple national boundaries and international waters.",
    words: [
      { word: "profound", correct: "Very great or intense in degree", options: ["Very great or intense in degree", "Slight and superficial", "Temporary and minor", "Completely neutral"] },
      { word: "acidification", correct: "The process of becoming more acidic", options: ["The process of becoming more acidic", "The process of becoming alkaline", "Sudden neutralization", "Natural pH stability"] },
      { word: "keystone", correct: "Of central importance to the structure of something", options: ["Of central importance to the structure of something", "Peripheral and unimportant", "Temporary and replaceable", "Artificially introduced"] },
      { word: "pivotal", correct: "Of crucial importance in determining the outcome", options: ["Of crucial importance in determining the outcome", "Marginal and secondary", "Irrelevant to success", "Easily substituted"] },
      { word: "overfishing", correct: "Catching too many fish", options: ["Catching too many fish", "Sustainable fishing practices", "Complete fishing ban", "Artificial fish farming only"] },
      { word: "jurisdictions", correct: "Areas of legal authority", options: ["Areas of legal authority", "Complete lawlessness", "Temporary zones", "Private property only"] },
      { word: "enforcement", correct: "The act of ensuring rules are followed", options: ["The act of ensuring rules are followed", "Voluntary compliance only", "Complete ignorance", "Symbolic gestures"] },
      { word: "transformations", correct: "Significant changes in form or nature", options: ["Significant changes in form or nature", "Minor adjustments", "Complete stability", "Temporary fluctuations"] },
      { word: "documented", correct: "Recorded with evidence", options: ["Recorded with evidence", "Merely speculated", "Completely denied", "Temporarily observed"] },
      { word: "ecosystem", correct: "A community of living organisms and their environment", options: ["A community of living organisms and their environment", "Isolated species only", "Artificial laboratory setting", "Purely physical landscape"] }
    ]
  },

  // ==================== 13. Sustainable Agriculture (177 words) ====================
  {
    text: "Sustainable agriculture practices are essential for ensuring long-term food security amid a growing global population and diminishing arable land resources due to urbanization and climate change. Techniques such as crop rotation, precision irrigation, integrated pest management, and agroforestry help preserve soil fertility while minimizing environmental degradation and chemical runoff. However, the widespread adoption of these methods requires overcoming entrenched conventional farming paradigms, providing adequate financial and technical support to smallholder farmers worldwide, and addressing market pressures that often favor short-term yields over long-term ecological health.",
    words: [
      { word: "arable", correct: "Suitable for growing crops", options: ["Suitable for growing crops", "Completely barren", "Permanently flooded", "Urban development only"] },
      { word: "fertility", correct: "The ability to produce abundant growth", options: ["The ability to produce abundant growth", "Complete infertility", "Temporary nutrient loss", "Artificial chemical dependency"] },
      { word: "degradation", correct: "Gradual destruction or decline", options: ["Gradual destruction or decline", "Sudden improvement", "Rapid expansion", "Complete preservation"] },
      { word: "entrenched", correct: "Firmly established and difficult to change", options: ["Firmly established and difficult to change", "Easily adaptable", "Newly introduced", "Completely obsolete"] },
      { word: "agroforestry", correct: "Integration of trees with crops or livestock", options: ["Integration of trees with crops or livestock", "Monoculture farming only", "Complete deforestation", "Urban gardening"] },
      { word: "precision", correct: "Exact and accurate", options: ["Exact and accurate", "Rough and approximate", "Random and uncontrolled", "Traditional manual"] },
      { word: "smallholder", correct: "Small-scale farmers", options: ["Small-scale farmers", "Large industrial corporations", "Government-owned farms", "Urban hobby gardeners"] },
      { word: "paradigms", correct: "Typical patterns or models", options: ["Typical patterns or models", "Random approaches", "Outdated methods", "Temporary fads"] },
      { word: "ecological", correct: "Related to living organisms and environment", options: ["Related to living organisms and environment", "Purely economic", "Strictly political", "Technological only"] },
      { word: "security", correct: "The state of being free from danger", options: ["The state of being free from danger", "Complete vulnerability", "Temporary shortage", "Artificial abundance"] }
    ]
  },

  // ==================== 14. Artificial Intelligence in Medicine (183 words) ====================
  {
    text: "Artificial intelligence is revolutionizing diagnostic accuracy in medicine by analyzing complex medical imaging data with remarkable precision and speed. Machine learning algorithms can now detect subtle anomalies that might elude even the most experienced radiologists. Despite these impressive breakthroughs, serious concerns persist regarding the explainability of AI decisions, potential algorithmic bias, data privacy issues, and the risk of perpetuating healthcare disparities among underrepresented patient populations. Responsible integration of AI into clinical practice requires careful validation, transparent methodologies, and ongoing human oversight.",
    words: [
      { word: "revolutionizing", correct: "Changing something fundamentally and dramatically", options: ["Changing something fundamentally and dramatically", "Slightly modifying", "Completely halting", "Temporarily pausing"] },
      { word: "anomalies", correct: "Things that deviate from what is standard or expected", options: ["Things that deviate from what is standard or expected", "Perfectly normal occurrences", "Expected routine findings", "Irrelevant background noise"] },
      { word: "elude", correct: "To escape or avoid detection", options: ["To escape or avoid detection", "To be immediately obvious", "To be fully explained", "To remain unchanged"] },
      { word: "perpetuate", correct: "To make something continue indefinitely", options: ["To make something continue indefinitely", "To completely eliminate", "To temporarily reduce", "To reverse entirely"] },
      { word: "disparities", correct: "Significant differences or inequalities", options: ["Significant differences or inequalities", "Complete equality", "Minor variations", "Temporary fluctuations"] },
      { word: "explainability", correct: "The quality of being understandable", options: ["The quality of being understandable", "Complete opacity", "Random behavior", "Temporary confusion"] },
      { word: "integration", correct: "The process of combining into a unified whole", options: ["The process of combining into a unified whole", "Complete separation", "Temporary coexistence", "Forced imposition"] },
      { word: "validation", correct: "The process of checking accuracy", options: ["The process of checking accuracy", "Blind acceptance", "Complete rejection", "Symbolic approval"] },
      { word: "methodologies", correct: "Systems of methods used in a field", options: ["Systems of methods used in a field", "Random techniques", "Traditional habits", "Pure intuition"] },
      { word: "oversight", correct: "Supervision or watchful care", options: ["Supervision or watchful care", "Complete absence of control", "Temporary neglect", "Symbolic monitoring"] }
    ]
  },

  // ==================== 15. Migration & Demography (176 words) ====================
  {
    text: "International migration patterns have become increasingly complex due to economic disparities, political instability, armed conflicts, and environmental pressures such as climate-induced displacement. Demographic shifts resulting from these movements are reshaping labor markets, social structures, and cultural landscapes in both sending and receiving countries. Effective integration policies are crucial for harnessing the potential economic and cultural benefits of migration while addressing associated challenges such as cultural assimilation, resource allocation, social cohesion, and public service strain.",
    words: [
      { word: "disparities", correct: "Significant differences or inequalities", options: ["Significant differences or inequalities", "Complete equality", "Minor variations", "Temporary fluctuations"] },
      { word: "demographic", correct: "Related to the structure of populations", options: ["Related to the structure of populations", "Focused on individual behavior", "Entirely economic factors", "Purely political issues"] },
      { word: "integration", correct: "The process of combining into a unified whole", options: ["The process of combining into a unified whole", "Complete separation", "Temporary coexistence", "Forced assimilation"] },
      { word: "assimilation", correct: "The process of becoming similar to a dominant culture", options: ["The process of becoming similar to a dominant culture", "Preservation of original identity", "Complete cultural rejection", "Rapid cultural exchange"] },
      { word: "displacement", correct: "Forcing people out of their homes or roles", options: ["Forcing people out of their homes or roles", "Voluntary relocation", "Career advancement", "Skill development"] },
      { word: "cohesion", correct: "The state of sticking together", options: ["The state of sticking together", "Social division", "Complete isolation", "Temporary alliance"] },
      { word: "harnessing", correct: "Making use of something effectively", options: ["Making use of something effectively", "Completely wasting", "Ignoring entirely", "Temporarily delaying"] },
      { word: "instability", correct: "Lack of stability", options: ["Lack of stability", "Complete peace", "Strong security", "Temporary calm"] },
      { word: "patterns", correct: "Regular or repeated arrangements", options: ["Regular or repeated arrangements", "Random occurrences", "Single events only", "Completely unpredictable"] },
      { word: "landscapes", correct: "The visible features of an area", options: ["The visible features of an area", "Hidden underground elements", "Purely abstract concepts", "Temporary changes"] }
    ]
  },

  // ==================== 16. Quantum Computing (189 words) ====================
  {
    text: "Quantum computing represents a paradigm shift in computational capabilities, promising to solve complex problems that are currently intractable for even the most powerful classical computers. By harnessing the principles of superposition and entanglement, these machines could revolutionize fields ranging from cryptography and materials science to drug discovery and climate modeling. However, significant technical hurdles related to error correction, qubit stability, scalability, and maintaining extremely low temperatures must be overcome before practical quantum supremacy becomes a widespread reality accessible to researchers and industries.",
    words: [
      { word: "paradigm", correct: "A typical example or pattern of something", options: ["A typical example or pattern of something", "A random deviation", "An obsolete model", "A temporary trend"] },
      { word: "intractable", correct: "Hard to control or deal with", options: ["Hard to control or deal with", "Easily solvable", "Completely predictable", "Irrelevant to progress"] },
      { word: "superposition", correct: "The ability of a quantum system to exist in multiple states simultaneously", options: ["The ability of a quantum system to exist in multiple states simultaneously", "A single fixed state only", "Classical binary logic", "Random probability distribution"] },
      { word: "entanglement", correct: "A quantum phenomenon where particles remain connected regardless of distance", options: ["A quantum phenomenon where particles remain connected regardless of distance", "Complete independence of particles", "Classical physical linkage", "Temporary interaction only"] },
      { word: "scalability", correct: "The ability to be enlarged or expanded", options: ["The ability to be enlarged or expanded", "Permanent limitation", "Complete collapse", "Temporary phase"] },
      { word: "cryptography", correct: "The practice of secure communication", options: ["The practice of secure communication", "Open public broadcasting", "Casual conversation", "Simple data storage"] },
      { word: "supremacy", correct: "The state of being superior", options: ["The state of being superior", "Equal performance", "Complete inferiority", "Temporary advantage"] },
      { word: "hurdles", correct: "Obstacles or difficulties", options: ["Obstacles or difficulties", "Easy advantages", "Complete absence of problems", "Minor inconveniences"] },
      { word: "harnessing", correct: "Making use of something effectively", options: ["Making use of something effectively", "Completely wasting", "Ignoring entirely", "Temporarily delaying"] },
      { word: "revolutionize", correct: "To change something radically", options: ["To change something radically", "Slightly modify", "Maintain status quo", "Gradually decline"] }
    ]
  },

  // ==================== 17. Renewable Resources Management (174 words) ====================
  {
    text: "Effective management of renewable resources is vital for maintaining ecological balance in the face of escalating human demands and population growth. Overexploitation of fisheries, forests, and freshwater sources has already led to widespread depletion in many regions, threatening long-term sustainability. Multilateral agreements and community-based conservation initiatives offer promising pathways toward sustainable utilization, provided that enforcement mechanisms are strengthened and local stakeholders are meaningfully engaged in decision-making processes.",
    words: [
      { word: "escalating", correct: "Increasing rapidly in intensity or severity", options: ["Increasing rapidly in intensity or severity", "Gradually decreasing", "Remaining stable", "Completely resolved"] },
      { word: "overexploitation", correct: "Using a resource excessively to the point of damage", options: ["Using a resource excessively to the point of damage", "Careful sustainable use", "Complete non-utilization", "Natural regeneration"] },
      { word: "depletion", correct: "Reduction in the quantity or amount of something", options: ["Reduction in the quantity or amount of something", "Abundant accumulation", "Rapid expansion", "Permanent stability"] },
      { word: "multilateral", correct: "Involving three or more parties or countries", options: ["Involving three or more parties or countries", "Bilateral only", "Unilateral decision-making", "Domestic policy alone"] },
      { word: "sustainability", correct: "The ability to be maintained long-term", options: ["The ability to be maintained long-term", "Short-term profit focus", "Rapid depletion", "Complete abandonment"] },
      { word: "stakeholders", correct: "People or groups with an interest", options: ["People or groups with an interest", "Only government officials", "External observers only", "Company executives exclusively"] },
      { word: "enforcement", correct: "Ensuring rules are followed", options: ["Ensuring rules are followed", "Voluntary compliance", "Complete ignorance", "Symbolic gestures"] },
      { word: "initiatives", correct: "New plans or projects", options: ["New plans or projects", "Old traditional methods", "Complete inaction", "Temporary experiments"] },
      { word: "utilization", correct: "The action of making practical use of something", options: ["The action of making practical use of something", "Complete waste", "Total preservation", "Random distribution"] },
      { word: "ecological", correct: "Related to living organisms and environment", options: ["Related to living organisms and environment", "Purely economic", "Strictly political", "Technological only"] }
    ]
  },

  // ==================== 18. Neuroscience & Learning (171 words) ====================
  {
    text: "Recent breakthroughs in neuroscience have illuminated the remarkable plasticity of the human brain throughout the entire lifespan. This neuroplasticity enables continuous learning, adaptation, and recovery even in adulthood following injury or disease. Educational strategies that incorporate spaced repetition, active recall techniques, and varied practice can significantly enhance long-term retention by leveraging the brain’s natural memory consolidation processes. These findings challenge traditional views about fixed intelligence and critical learning periods.",
    words: [
      { word: "plasticity", correct: "The ability to change or adapt", options: ["The ability to change or adapt", "Rigid inflexibility", "Complete stagnation", "Temporary weakness"] },
      { word: "neuroplasticity", correct: "The brain's ability to reorganize itself by forming new neural connections", options: ["The brain's ability to reorganize itself by forming new neural connections", "Fixed brain structure from birth", "Declining cognitive function", "Purely genetic determination"] },
      { word: "consolidation", correct: "The process of making something stronger or more solid", options: ["The process of making something stronger or more solid", "Complete dissolution", "Temporary storage", "Random scattering"] },
      { word: "retention", correct: "The continued possession or control", options: ["The continued possession or control", "Complete forgetting", "Temporary recall", "Rapid loss"] },
      { word: "leveraging", correct: "Using something to maximum advantage", options: ["Using something to maximum advantage", "Completely wasting", "Ignoring entirely", "Temporarily delaying"] },
      { word: "breakthroughs", correct: "Important discoveries or developments", options: ["Important discoveries or developments", "Minor adjustments", "Complete failures", "Temporary setbacks"] },
      { word: "illuminated", correct: "Made clearer or easier to understand", options: ["Made clearer or easier to understand", "Completely obscured", "Temporarily hidden", "Slightly confused"] },
      { word: "adaptation", correct: "The process of changing to suit new conditions", options: ["The process of changing to suit new conditions", "Rigid resistance", "Complete dependence", "Sudden collapse"] },
      { word: "strategies", correct: "Plans of action", options: ["Plans of action", "Random actions", "Complete inaction", "Traditional habits"] },
      { word: "cognitive", correct: "Related to mental processes of thinking", options: ["Related to mental processes of thinking", "Purely physical", "Emotional only", "Social behavior"] }
    ]
  },

  // ==================== 19. Global Governance (192 words) ====================
  {
    text: "The architecture of global governance faces mounting pressure to adapt to transnational challenges such as pandemics, cyber threats, climate migration, and economic instability. Traditional nation-state frameworks often prove inadequate when confronting issues that transcend national borders and require coordinated responses. Strengthened supranational institutions, enhanced diplomatic multilateralism, and more inclusive decision-making processes are essential for fostering collective resilience and equitable solutions in an increasingly interdependent world order. Without meaningful reform, fragmented responses risk exacerbating global inequalities and undermining collective security.",
    words: [
      { word: "architecture", correct: "The underlying structure or organization of something", options: ["The underlying structure or organization of something", "Random disorganized system", "Temporary makeshift arrangement", "Completely obsolete model"] },
      { word: "transnational", correct: "Extending or operating across national boundaries", options: ["Extending or operating across national boundaries", "Strictly domestic only", "Purely regional", "Entirely virtual"] },
      { word: "inadequate", correct: "Not sufficient or not good enough", options: ["Not sufficient or not good enough", "More than sufficient", "Perfectly adequate", "Temporarily delayed"] },
      { word: "supranational", correct: "Having power or influence above the level of individual nations", options: ["Having power or influence above the level of individual nations", "Limited to national level", "Completely decentralized", "Purely advisory"] },
      { word: "multilateralism", correct: "The principle of cooperation among multiple nations", options: ["The principle of cooperation among multiple nations", "Unilateral action only", "Bilateral agreements exclusively", "Isolationist policies"] },
      { word: "resilience", correct: "The ability to recover from difficulties", options: ["The ability to recover from difficulties", "Permanent vulnerability", "Total collapse", "Slow deterioration"] },
      { word: "equitable", correct: "Fair and impartial", options: ["Fair and impartial", "Strictly competitive", "Randomly allocated", "Favoring powerful groups"] },
      { word: "interdependent", correct: "Mutually dependent on each other", options: ["Mutually dependent on each other", "Completely independent", "One-sided reliance", "Temporary alignment"] },
      { word: "exacerbating", correct: "Making a problem worse", options: ["Making a problem worse", "Significantly improving", "Completely solving", "Temporarily ignoring"] },
      { word: "undermining", correct: "Gradually weakening", options: ["Gradually weakening", "Strongly supporting", "Completely restoring", "Temporarily pausing"] }
    ]
  },

  // ==================== 20. Final Paragraph - Environmental Policy (199 words) ====================
  {
    text: "Effective environmental policy formulation requires balancing immediate economic interests with the long-term imperative of planetary sustainability. Policymakers face the challenging task of designing regulations that incentivize innovation in green technologies while simultaneously protecting vulnerable ecosystems and communities from the adverse effects of industrial activities. International cooperation is indispensable because environmental problems such as climate change, biodiversity loss, and pollution do not respect national borders. Successful policies typically combine market-based mechanisms like carbon trading with regulatory standards, public education campaigns, and substantial investment in research and development.",
    words: [
      { word: "formulation", correct: "The process of creating or devising something", options: ["The process of creating or devising something", "Complete rejection", "Random implementation", "Temporary delay"] },
      { word: "imperative", correct: "Of vital importance", options: ["Of vital importance", "Merely optional", "Completely unnecessary", "Temporarily convenient"] },
      { word: "sustainability", correct: "The ability to be maintained long-term", options: ["The ability to be maintained long-term", "Short-term profit focus", "Rapid depletion", "Complete abandonment"] },
      { word: "incentivize", correct: "To encourage or motivate", options: ["To encourage or motivate", "To strongly discourage", "To completely prohibit", "To ignore entirely"] },
      { word: "adverse", correct: "Preventing success or development", options: ["Preventing success or development", "Highly beneficial", "Completely neutral", "Temporarily helpful"] },
      { word: "indispensable", correct: "Absolutely necessary", options: ["Absolutely necessary", "Completely optional", "Temporarily useful", "Easily replaced"] },
      { word: "mechanisms", correct: "Systems or methods that achieve results", options: ["Systems or methods that achieve results", "Random actions", "Symbolic gestures", "Complete inaction"] },
      { word: "regulatory", correct: "Related to official rules", options: ["Related to official rules", "Entirely voluntary", "Informal standards", "Market forces only"] },
      { word: "vulnerable", correct: "Exposed to the possibility of harm", options: ["Exposed to the possibility of harm", "Completely protected", "Highly resilient", "Temporarily stable"] },
      { word: "cooperation", correct: "Working together for mutual benefit", options: ["Working together for mutual benefit", "Fierce competition", "Complete isolation", "Open conflict"] }
    ]
  }
];

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
let sessionStartTime = null;

// Vietnamese meanings for all words (add more as needed)
const vietnameseMeanings = {
  "anthropogenic": "Do con người gây ra",
  "degradation": "Suy thoái dần dần",
  "surge": "Tăng đột ngột và mạnh mẽ",
  "irreversible": "Không thể đảo ngược",
  "mitigation": "Giảm nhẹ hoặc làm giảm cái gì đó có hại",
  "adoption": "Việc chấp nhận hoặc bắt đầu sử dụng cái gì đó",
  "reforestation": "Trồng rừng lại ở khu vực đã bị chặt phá",
  "collaboration": "Làm việc cùng nhau với người khác",
  "catastrophic": "Gây thiệt hại đột ngột và nghiêm trọng",
  "transcends": "Vượt qua giới hạn của cái gì đó",
  "proliferation": "Lan rộng nhanh chóng",
  "displacement": "Thay thế hoặc đẩy người ra khỏi việc làm",
  "exacerbate": "Làm cho tình hình tồi tệ hơn",
  "enhance": "Cải thiện hoặc tăng chất lượng",
  "regulatory": "Liên quan đến quy định pháp lý",
  "transparent": "Minh bạch, dễ hiểu",
  "governance": "Cách quản trị hoặc điều hành",
  "stakeholder": "Các bên liên quan",
  "profoundly": "Một cách sâu sắc, mạnh mẽ",
  "inclusive": "Bao gồm tất cả mọi người",
  "phenomenon": "Hiện tượng được quan sát thấy",
  "chronic": "Mãn tính, kéo dài",
  "inadequate": "Không đủ hoặc không tốt",
  "implement": "Thực thi hoặc đưa vào thực hiện",
  "equity": "Sự công bằng",
  "sustainable": "Bền vững",
  "marginalized": "Bị đẩy ra rìa, bị coi nhẹ",
  "vulnerability": "Tính dễ bị tổn thương",
  "infrastructure": "Hạ tầng cơ sở",
  "fragmentation": "Sự phân mảnh",
  "encroachment": "Sự xâm lấn",
  "resilience": "Khả năng phục hồi",
  "facilitate": "Làm cho dễ dàng hơn",
  "gene flow": "Dòng gen",
  "biodiversity": "Đa dạng sinh học",
  "ushered": "Mở ra (kỷ nguyên mới)",
  "unprecedented": "Chưa từng có",
  "idealized": "Được lý tưởng hóa",
  "distort": "Làm méo mó",
  "pervasive": "Lan tỏa khắp nơi",
  "multifaceted": "Đa diện, nhiều khía cạnh",
  "paradigms": "Mô hình điển hình",
  "pedagogical": "Thuộc về sư phạm",
  "adaptability": "Khả năng thích ứng",
  "equitable": "Công bằng",
  "reignited": "Khơi lại",
  "propulsion": "Sức đẩy",
  "formidable": "Khó khăn to lớn",
  "surmounted": "Vượt qua",
  "indigenous": "Thổ dân, bản địa",
  "repository": "Kho lưu trữ",
  "revitalize": "Làm hồi sinh",
  "imperative": "Cực kỳ quan trọng",
  "intermittent": "Không liên tục",
  "deployment": "Triển khai",
  "keystone": "Then chốt",
  "pivotal": "Quan trọng then chốt",
  "arable": "Có thể canh tác",
  "fertility": "Độ màu mỡ",
  "entrenched": "Ăn sâu bám rễ",
  "revolutionizing": "Cách mạng hóa",
  "anomalies": "Sự bất thường",
  "elude": "Tránh né, lảng tránh",
  "perpetuate": "Kéo dài mãi mãi",
  "disparities": "Sự chênh lệch",
  "paradigm": "Mô hình",
  "intractable": "Khó giải quyết",
  "superposition": "Trạng thái chồng chập",
  "entanglement": "Sự vướng víu lượng tử",
  "escalating": "Leo thang",
  "overexploitation": "Khai thác quá mức",
  "depletion": "Sự cạn kiệt",
  "plasticity": "Tính dẻo",
  "neuroplasticity": "Tính dẻo thần kinh",
  "consolidation": "Củng cố",
  "architecture": "Kiến trúc (cấu trúc)",
  "transnational": "Xuyên quốc gia",
  "supranational": "Siêu quốc gia",
  "multilateralism": "Chủ nghĩa đa phương",
  "formulation": "Quá trình xây dựng / lập kế hoạch",
  "incentivize": "Khuyến khích",
  "adverse": "Có hại, bất lợi",
  "indispensable": "Không thể thiếu",
  "mechanisms": "Cơ chế",
  "vulnerable": "Dễ bị tổn thương",
  // Para 4 - Biodiversity
  "diminished": "Bị thu nhỏ hoặc giảm bớt",
  "ecological": "Thuộc về sinh thái học",
  "corridors": "Hành lang kết nối",
  // Para 5 - Technology & Ethics
  "exponential": "Tăng trưởng theo cấp số nhân",
  "dilemmas": "Những tình huống khó xử",
  "algorithmic": "Liên quan đến thuật toán máy tính",
  "autonomous": "Tự hoạt động độc lập",
  "surveillance": "Giám sát hoặc theo dõi chặt chẽ",
  "profound": "Sâu sắc, ở mức độ rất lớn",
  "consensus": "Sự đồng thuận chung",
  "undermining": "Làm suy yếu dần dần",
  "unchecked": "Không bị kiểm soát hoặc giới hạn",
  // Para 6 - Global Economy
  "interconnected": "Liên kết hoặc phụ thuộc lẫn nhau",
  "interdependence": "Trạng thái phụ thuộc lẫn nhau",
  "volatility": "Tính biến động nhanh và khó đoán",
  "repercussions": "Hậu quả không mong muốn",
  "mitigate": "Làm giảm bớt mức độ nghiêm trọng",
  "diversified": "Được đa dạng hóa",
  "resilient": "Có khả năng chịu đựng và phục hồi",
  "geopolitical": "Liên quan đến địa chính trị",
  "cooperation": "Sự hợp tác vì mục tiêu chung",
  "unforeseen": "Không được dự đoán trước",
  // Para 8 - Education
  "experiential": "Dựa trên trải nghiệm thực tế",
  "disruption": "Sự gián đoạn hoặc xáo trộn đột ngột",
  "substantial": "Đáng kể, có tầm quan trọng lớn",
  "curriculum": "Chương trình học",
  "socioeconomic": "Liên quan đến yếu tố xã hội và kinh tế",
  // Para 9 - Space Exploration
  "celestial": "Thuộc về bầu trời hoặc vũ trụ",
  "feasible": "Có thể thực hiện được",
  "isolation": "Trạng thái bị tách biệt hoặc cô đơn",
  "microgravity": "Lực hấp dẫn rất yếu",
  "extraterrestrial": "Tồn tại bên ngoài Trái Đất",
  "colonization": "Việc thiết lập khu định cư mới",
  // Para 10 - Cultural Preservation
  "homogenization": "Quá trình làm đồng nhất mọi thứ",
  "linguistic": "Liên quan đến ngôn ngữ",
  "immersive": "Tạo ra sự đắm chìm sâu sắc",
  "endangered": "Có nguy cơ biến mất",
  "momentum": "Đà tiến, sức mạnh tích lũy",
  "standardization": "Quá trình tiêu chuẩn hóa",
  // Para 11 - Renewable Energy
  "viable": "Có khả năng hoạt động thành công",
  "modernization": "Quá trình hiện đại hóa",
  "feasibility": "Tính khả thi",
  "incentives": "Những điều khuyến khích hành động",
  "trade-offs": "Sự đánh đổi giữa các yếu tố cạnh tranh",
  // Para 12 - Ocean Conservation
  "acidification": "Quá trình axit hóa",
  "overfishing": "Đánh bắt cá quá mức",
  "jurisdictions": "Vùng có thẩm quyền pháp lý",
  "transformations": "Những thay đổi đáng kể về hình thái",
  "documented": "Được ghi chép lại với bằng chứng",
  "ecosystem": "Hệ sinh thái",
  // Para 13 - Sustainable Agriculture
  "agroforestry": "Nông lâm kết hợp",
  "precision": "Sự chính xác, tỉ mỉ",
  "smallholder": "Nông dân sản xuất quy mô nhỏ",
  "security": "Trạng thái an toàn, không bị nguy hiểm",
  // Para 14 - AI in Medicine
  "explainability": "Khả năng giải thích được",
  "integration": "Quá trình kết hợp thành một thể thống nhất",
  "validation": "Quá trình kiểm tra tính chính xác",
  "methodologies": "Các hệ thống phương pháp trong một lĩnh vực",
  "oversight": "Sự giám sát hoặc quản lý cẩn thận",
  // Para 15 - Migration
  "demographic": "Liên quan đến cấu trúc dân số",
  "assimilation": "Quá trình hòa nhập vào văn hóa chủ đạo",
  "cohesion": "Trạng thái gắn kết với nhau",
  "instability": "Sự thiếu ổn định",
  "patterns": "Những sắp xếp hoặc cách thức lặp lại",
  "landscapes": "Những đặc điểm nổi bật của một khu vực",
  // Para 17 - Renewable Resources
  "multilateral": "Liên quan đến ba hoặc nhiều bên",
  "stakeholders": "Những người hoặc nhóm có liên quan",
  "enforcement": "Việc đảm bảo các quy tắc được tuân thủ",
  "initiatives": "Các kế hoạch hoặc dự án mới",
  "utilization": "Hành động sử dụng thực tế",
  // Para 18 - Neuroscience
  "retention": "Sự lưu giữ, duy trì",
  "leveraging": "Tận dụng tối đa lợi thế",
  "breakthroughs": "Những khám phá hoặc bước tiến quan trọng",
  "illuminated": "Được làm sáng tỏ, dễ hiểu hơn",
  "adaptation": "Quá trình thích nghi với điều kiện mới",
  "strategies": "Các kế hoạch hành động",
  "cognitive": "Liên quan đến quá trình tư duy",
  // Para 19 - Global Governance
  "interdependent": "Phụ thuộc lẫn nhau",
  "exacerbating": "Làm cho tình trạng tồi tệ hơn",
  // Para 20 - Environmental Policy
  "sustainability": "Khả năng được duy trì lâu dài"
};

function loadDailyStats() {
  const today = new Date().toISOString().split('T')[0];
  const saved = localStorage.getItem('wordSniperDaily');

  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      dailyPlayed = data.played || 0;
      totalCorrect = data.correct || 0;
      totalWrong = data.wrong || 0;
      usedToday = data.used || [];
      maxStreakToday = data.maxStreak || 0;
    } else {
      resetDailyStats(today);
    }
  } else {
    resetDailyStats(today);
  }
}

function saveDailyStats() {
  const today = new Date().toISOString().split('T')[0];
  localStorage.setItem('wordSniperDaily', JSON.stringify({
    date: today,
    played: dailyPlayed,
    correct: totalCorrect,
    wrong: totalWrong,
    used: usedToday,
    maxStreak: maxStreakToday
  }));
}

function resetDailyStats(today) {
  dailyPlayed = 0;
  totalCorrect = 0;
  totalWrong = 0;
  usedToday = [];
  maxStreakToday = 0;
  localStorage.setItem('wordSniperDaily', JSON.stringify({ 
    date: today, played: 0, correct: 0, wrong: 0, used: [], maxStreak: 0 
  }));
}

function getNextParagraphIndex() {
  let available = [];
  for (let i = 0; i < paragraphs.length; i++) {
    if (!usedToday.includes(i)) {
      available.push(i);
    }
  }
  const chosenIndex = available[Math.floor(Math.random() * available.length)];
  usedToday.push(chosenIndex);
  saveDailyStats();
  return chosenIndex;
}

function createPetalBurst() {
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.textContent = '🌸';
    petal.style.position = 'fixed';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-40px';
    petal.style.fontSize = (18 + Math.random() * 22) + 'px';
    petal.style.opacity = '0.85';
    petal.style.zIndex = '1000';
    petal.style.pointerEvents = 'none';
    document.body.appendChild(petal);

    const duration = 1800 + Math.random() * 1500;
    petal.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 0.9 },
      { transform: `translateY(${window.innerHeight + 150}px) rotate(${Math.random() * 800 - 400}deg)`, opacity: 0 }
    ], { duration: duration, easing: 'ease-out' });

    setTimeout(() => petal.remove(), duration + 100);
  }
}

function showFeedback(text, isCorrect) {
  const fb = document.getElementById('feedback');
  fb.textContent = text;
  fb.style.color = isCorrect ? '#e04a7e' : '#ff6b6b';
  if (isCorrect) createPetalBurst();
}

function showVietnameseHint(word, isCorrect = false) {
  const existing = document.getElementById('viet-hint');
  if (existing) existing.remove();

  const meaning = vietnameseMeanings[word] || "Đang cập nhật...";

  const hintHTML = `
    <div id="viet-hint" class="${isCorrect ? 'correct-hint' : ''}">
      <strong>${isCorrect ? '🌸 Tuyệt vời! Nghĩa tiếng Việt:' : '🌸 Nghĩa tiếng Việt:'}</strong><br><br>
      <span>${meaning}</span>
      <br><br>
      <button id="next-after-hint">Tiếp tục 🌸</button>
    </div>
  `;

  const optionsDiv = document.getElementById('options');
  optionsDiv.insertAdjacentHTML('afterend', hintHTML);

  createPetalBurst();

  document.getElementById('next-after-hint').onclick = () => {
    document.getElementById('viet-hint').remove();
    currentWordIndex++;
    document.getElementById('progress').textContent = `${currentWordIndex}/${paragraphs[currentParaIndex].words.length}`;
    showNextWord();
  };
}

function loadParagraph() {
  const para = paragraphs[currentParaIndex];

  // Sort words by order of appearance in the text
  para.words.sort((a, b) => {
    const posA = para.text.toLowerCase().indexOf(a.word.toLowerCase());
    const posB = para.text.toLowerCase().indexOf(b.word.toLowerCase());
    return posA - posB;
  });

  let htmlText = para.text;
  para.words.forEach(w => {
    const regex = new RegExp(`\\b${w.word}\\b`, 'gi');
    htmlText = htmlText.replace(regex, `<span class="highlight">${w.word}</span>`);
  });
  document.getElementById('paragraph').innerHTML = htmlText;
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
  document.getElementById('target-word').textContent = wordData.word;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  const shuffled = [...wordData.options].sort(() => Math.random() - 0.5);
  shuffled.forEach(optionText => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = optionText;
    div.onclick = () => handleAnswer(optionText, wordData.correct, wordData.word);
    optionsDiv.appendChild(div);
  });
}

function handleAnswer(selected, correct, currentWord) {
  const isCorrect = selected === correct;
  const options = document.querySelectorAll('.option');

  options.forEach(opt => {
    if (opt.textContent === correct) opt.classList.add('correct');
    else if (opt.textContent === selected) opt.classList.add('wrong');
    opt.style.pointerEvents = 'none';
  });

  if (isCorrect) {
    const points = Math.round(100 * streak);
    score += points;
    correctCount++;
    streak = Math.min(streak + 0.5, 3);
    if (streak > maxStreakToday) maxStreakToday = streak;

    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak.toFixed(1);
    showFeedback("🌸 Beautiful shot!", true);

    // Reset to light theme on correct answer
    resetPunishment();

    setTimeout(() => {
      document.getElementById('feedback').textContent = '';
      showVietnameseHint(currentWord, true);
    }, 1350);
  } else {
    streak = 1;
    document.getElementById('streak').textContent = '1';
    showFeedback("Missed it... Punishment increased 🌸", false);

    applyPunishment();        // Make screen darker
    showVietnameseHint(currentWord, false);
  }
}

function startNewRound() {
  if (!sessionStartTime) sessionStartTime = Date.now();
  score = 0;
  streak = 1;
  correctCount = 0;
  currentWordIndex = 0;
  resetPunishment();                    // Reset to light theme

  document.getElementById('score').textContent = '0';
  document.getElementById('streak').textContent = '1';

  // Hide the next paragraph button when entering a new round
  const nextBtn = document.getElementById('play-again');
  if (nextBtn) nextBtn.style.display = 'none';

  document.getElementById('game-screen').classList.remove('hidden');
  document.getElementById('result-screen').classList.add('hidden');

  loadParagraph();
  showNextWord();
}

function endRound() {
  const totalWords = paragraphs[currentParaIndex].words.length;
  updateDailyAfterRound(correctCount, totalWords - correctCount);

  document.getElementById('game-screen').classList.add('hidden');
  const resultScreen = document.getElementById('result-screen');
  resultScreen.classList.remove('hidden');

  if (dailyPlayed >= 2) {
    showDailySummary(); // This will handle showing the final state
    return;
  }

  // Only show these if the day isn't over
  const isPerfect = correctCount === totalWords;
  document.getElementById('round-result').textContent = isPerfect ? "🎯 PERFECT ROUND!" : "Round Complete";
  document.getElementById('final-score').textContent = `Final Score: ${score} points`;
  
  const powerMsg = document.getElementById('powerup-message');
  powerMsg.textContent = isPerfect ? "🌸 Power-up Unlocked for the next paragraph!" : "";
  if (isPerfect) createPetalBurst();

  // Create the button ONLY when the round ends
  let nextBtn = document.getElementById('play-again');
  if (!nextBtn) {
    nextBtn = document.createElement('button');
    nextBtn.id = 'play-again';
    resultScreen.appendChild(nextBtn);
  }
  
  nextBtn.textContent = "Play Next Paragraph 🌸";
  nextBtn.style.display = "inline-block";
  nextBtn.onclick = () => {
    currentParaIndex = getNextParagraphIndex();
    startNewRound();
  };
}

function updateDailyAfterRound(correctInRound, wrongInRound) {
  dailyPlayed++;
  totalCorrect += correctInRound;
  totalWrong += wrongInRound;
  saveDailyStats();
}

function showDailySummary() {
  const accuracy = (totalCorrect + totalWrong) > 0 
    ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
    : 0;

  const elapsedMs = sessionStartTime ? Date.now() - sessionStartTime : 0;
  const totalSecs = Math.floor(elapsedMs / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  const resultScreen = document.getElementById('result-screen');
  resultScreen.innerHTML = `
    <div style="text-align:center; padding:20px;">
      <h2 style="color:#e04a7e; margin: 20px 0 25px;">🌸 Daily Summary</h2>
      <p><strong>Paragraphs completed:</strong> ${dailyPlayed}/2</p>
      <p><strong>✅ Correct answers:</strong> ${totalCorrect}</p>
      <p><strong>❌ Wrong answers:</strong> ${totalWrong}</p>
      <p><strong>🎯 Accuracy:</strong> ${accuracy}%</p>
      <p><strong>🔥 Highest Streak:</strong> ${maxStreakToday}x</p>
      <p><strong>⏱ Time taken:</strong> ${timeStr}</p>
      <p style="margin-top:30px; color:#e04a7e;">
        ${accuracy >= 85 ? "Amazing work! Keep mastering IELTS vocabulary 🌸" : "Great progress! Keep going."}
      </p>
      <button id="end-session-btn" style="margin-top:35px;">Come Back Tomorrow 🌸</button>
    </div>
  `;

  document.getElementById('end-session-btn').onclick = () => {
    alert("You've completed your 2 paragraphs for today! 🌸");
  };
}

function applyPunishment() {
  punishmentLevel = Math.min(punishmentLevel + 1, 3);
  document.body.classList.remove('light', 'punish-1', 'punish-2', 'punish-3');
  document.body.classList.add(`punish-${punishmentLevel}`);
}

function resetPunishment() {
  punishmentLevel = 0;
  document.body.classList.remove('punish-1', 'punish-2', 'punish-3');
  document.body.classList.add('light');
}

// ====================== INITIALIZE ======================
loadDailyStats();

if (dailyPlayed >= 2) {
  showDailySummary();
} else {
  currentParaIndex = getNextParagraphIndex();   // Changed here
  startNewRound();
}