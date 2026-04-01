// ══════════════════════════════════════════════════
//  WORDLE — Bao's Edition
//  • 3 plays per day (localStorage)
//  • Only real English words accepted
// ══════════════════════════════════════════════════

// ── Answer pool (words the game picks from) ────────
const ANSWERS = [
   "CRANE","ABOUT","BLEND","CRISP","DANCE","EAGLE","FABLE","GHOST","HANDY","IDEAL",
   "PANDA","KNIFE","LIGHT","MAGIC","NIGHT","OLIVE","PLANT","QUEEN","RIVER","STORM",
   "TRUNK","VOGUE","WATCH","YACHT","ZEBRA","SWORD","BLAZE","CLAMP","DROVE","COLOR",
   "APPLE","ANGER","SNAKE","INPUT","JEWEL","KARMA","LEMON","MOIST","NOBLE","OCEAN",
   "PRIDE","QUEST","RAVEN","SNARE","TOAST","ULTRA","VAPOR","WASTE","BRAID","CHANT",
   "DRAFT","EVOKE","FLAME","GRIND","HEIST","INFER","JOKER","KNEEL","LUNAR","MARSH",
   "NERVE","ORBIT","PROXY","QUILL","REIGN","SLATE","THUMP","UNITE","VIGOR","WRATH",
   "YIELD","ABIDE","BLUNT","CHARM","DRUNK","ELBOW","FRAIL","GLOOM","HAUNT","IMPLY",
   "KNACK","LATCH","MANOR","OPTIC","PRUNE","QUIRK","RISKY","SCOUT","TAUNT","USHER",
   "VENOM","WEARY","ALOFT","BASIN","CINCH","DAISY","ERUPT","FROTH","GLINT","HINGE",
   "IRATE","LEDGE","MIRTH","NOTCH","OUNCE","PERCH","ROGUE","SHAWL","THORN",
   "VOUCH","WHIRL","BALMY","CHASM","DITCH","EXPEL","FEIGN","GRAFT","HARDY",
   "BRISK","SCAMP","TROUT","SWAMP","PIVOT","LUNGE","CRAVE","SMEAR",
   "BROOD","CLEFT","ENVOY","FLUTE","GUILE","INEPT","LAPEL","NUDGE","PLEAT",
   "RASPY","TABBY","WHACK","BIRCH","CLOVE","DEPOT","ENDOW","FERAL","GUSTO",
   "HUSKY","INLAY","LIBEL","MUSTY","NIFTY","OTTER","PIQUE","SCALP","ULCER",
   "VEXED","WINDY","BRAWN","CLASP","DOWRY","ETHOS","FORAY","JUMPY","KITTY",
   "LUSTY","NIPPY","OUTDO","POUCH","SHIRE","TACIT","EMBER","GROVE","SWIRL",
   "FLORA","SIREN","CREST","TROVE","SPIRE","CAULK","BLAND","AFOOT","STOMP",
   "CLING","CLOUT","PLUMB","SCOFF","SCOLD","STILT","SWOON","SMITE","SPUNK","SNOUT",
   "STOKE","SKIMP","SLUNG","STRUT","SMOKY","SNIFF","STIFF","SCANT","SHEEN","SWEPT",
   "SNEAK","SKUNK","SLUMP","SPORE","STRAY","STUNT","GRUFF","GROAN","GLOAT","GNASH",
   "GAUDY","GAUZE","GLEAN","GUPPY","GUAVA","PIXEL","PLANK","PLAZA","PLUSH","POKER",
   "POLKA","POLYP","POPPY","PORCH","POUTY","PRIMP","PUDGY","LYMPH","LYRIC","MAXIM",
   "MAUVE","MEALY","MELEE","MERCY","MESSY","MIDWAY","MILKY","MINCE","MOCHA","MOGUL",
   "MOLDY","MONEY","MONTH","MOODY","MOTTO","MUDDY","MULCH","MURKY","MUSHY","NAVEL",
   "NEEDY","NEWSY","NINNY","NOISY","NOMAD","NOVEL","NUDGE","UNZIP","USURP",
   "UNWED","UNIFY","UNFED","UMBRA","TWIRL","TWEED","TWEET","TRYST","TRUCE","TRICE",
   "TRIAD","TRICK","TRIED","TRILL","THYME","TIARA","TIDAL","TIMID","TIPSY","TITAN",
   "TOADY","TOPAZ","TOXIC","TRACE","TRACK","TRADE","TRAIL","PHONE","PILOT","LEMON",
   "WASTE","PLANT","SNAKE","LIGHT","NAIVE",

   // === Added/prioritized B2-C1 IELTS vocabulary (useful for learning) ===
   "ADAPT","ASSET","AWARE","BASIC","BRIEF","CAUSE","CIVIC","CRISIS","DEBATE","ETHIC",
   "FOCUS","HABIT","IMPACT","ISSUE","LOGIC","MAJOR","MEDIA","MINOR","MORAL",
   "OFFER","PHASE","PROOF","QUERY","RANGE","ROUTE","SCALE","SCENE","SHIFT","SKILL",
   "SOLVE","STAGE","THEME","TOPIC","TOTAL","TRACE","TREND","UNION","URBAN","VALUE",
   "VITAL","YOUTH","ABOVE","ACUTE","ADULT","ALERT","ALLOW","APPLY","ARGUE","ARISE",
   "AVOID","AWAIT","BASIC","BELOW","BLAME","BOOST","BROAD","BUILD","BURST","CATCH",
   "CHAIN","CHIEF","CLAIM","CLEAR","CLIMB","CLOSE","COUNT","COURT","COVER","CRAZY",
   "CREAM","CRIME","CROSS","CROWD","CROWN","CRUDE","CRUEL","CYCLE","DAILY","DELAY",
   "DEPTH","DOUBT","DREAM","DRIVE","EARLY","EARTH","EIGHT","EMPTY","ENEMY","ENJOY",
   "EQUAL","ERROR","EVENT","EXACT","EXIST","EXTRA","FAITH","FAULT","FIFTH","FIGHT",
   "FINAL","FIRST","FLAME","FLESH","FLOOD","FLOOR","FLUID","FORCE","FORTH","FORTY",
   "FOUND","FRAME","FRESH","FRONT","FROST","FRUIT","GIANT","GIVEN","GLASS","GLOBE",
   "GRACE","GRADE","GRAIN","GRAND","GRANT","GRASP","GRAVE","GREAT","GREEN","GRIEF",
   "GRILL","GRIND","GROSS","GROUP","GROWN","GUARD","GUESS","GUEST","GUIDE","GUILT",
   "HABIT","HEART","HEAVY","HENCE","HONEY","HONOR","HORSE","HOUSE","HUMAN","HUMOR",
   "IDEAL","IMAGE","IMPLY","INFER","INNER","INPUT","IRONY","JOINT","JUDGE","JUNIOR",
   "KNOCK","LABEL","LARGE","LATER","LAUGH","LAYER","LEARN","LEAST","LEAVE","LEGAL",
   "LEMON","LEVEL","LIGHT","LIMIT","LOCAL","LOGIC","LOOSE","LOWER","LUCKY","MAJOR",
   "MAKER","MATCH","MAYBE","MEANT","MEDIA","MERIT","MERRY","METAL","MIGHT","MINOR",
   "MIXED","MODEL","MONEY","MONTH","MORAL","MOTOR","MOUNT","MOUSE","MOUTH","MOVIE",
   "MUSIC","NEVER","NIGHT","NOBLE","NOISE","NORTH","NOVEL","NURSE","OCEAN","OFFER",
   "OFTEN","ORDER","OTHER","OUTER","OWNER","PAINT","PAPER","PARTY","PEACE","PHASE",
   "PHONE","PIECE","PILOT","PLACE","PLAIN","PLANE","PLANT","PLATE","POINT","POWER",
   "PRESS","PRICE","PRIDE","PRINT","PRIOR","PRIZE","PROOF","PROUD","PROVE","PULSE",
   "PUNCH","QUERY","QUICK","QUIET","QUITE","QUOTE","RADIO","RAISE","RANGE","RAPID",
   "REACH","REACT","READY","REALM","REBEL","RENEW","REPLY","RESET","RESIN","RESTS",
   "RHYME","RIDER","RIGHT","RIGID","RISEN","RIVER","ROAST","ROMAN","ROUGH","ROUND",
   "ROUTE","ROYAL","RURAL","SCALE","SCENE","SCOPE","SCORE","SCOUT","SEIZE","SENSE",
   "SERVE","SEVEN","SHAPE","SHARE","SHARP","SHEEP","SHEER","SHEET","SHELF","SHELL",
   "SHIFT","SHINE","SHOCK","SHORE","SHORT","SHOUT","SHOWN","SIGHT","SILKY","SIXTH",
   "SKILL","SLACK","SLAIN","SLANT","SLEEP","SLICE","SLIDE","SMALL","SMART","SMELL",
   "SMILE","SMOKE","SNAKE","SNEAK","SOLID","SOLVE","SORRY","SOUND","SOUTH","SPACE",
   "SPARE","SPEAK","SPEAR","SPEED","SPELL","SPEND","SPICE","SPILL","SPINE","SPITE",
   "SPOIL","SPOKE","SPORT","SPRAY","STAGE","STAIN","STAKE","STALE","STALL","STAMP",
   "STAND","STARE","START","STATE","STEAD","STEAM","STEEL","STEEP","STEER","STERN",
   "STICK","STOCK","STONE","STORE","STORM","STORY","STOUT","STOVE","STRAY","STUCK",
   "STUDY","STUFF","STYLE","SUGAR","SUITE","SUPER","SWEET","SWIFT","SWING","SWIPE",
   "SWORD","TABLE","TASTE","TEACH","TEMPO","TENSE","THANK","THEME","THERE","THESE",
   "THICK","THIEF","THIRD","THREE","THROW","THUMB","TIGER","TIGHT","TIMER","TIRED",
   "TITLE","TODAY","TOKEN","TOTAL","TOUCH","TOUGH","TOWER","TRACE","TRACK","TRADE",
   "TRAIL","TRAIN","TREAT","TREND","TRIAL","TRIBE","TRICK","TRIED","TRULY","TRUST",
   "TRUTH","TWICE","TWIST","UNCLE","UNDER","UNION","UNITE","UPPER","URBAN","USAGE",
   "USUAL","UTTER","VALUE","VIDEO","VIRUS","VISIT","VITAL","VOICE","VOTER","WASTE",
   "WATCH","WATER","WHEAT","WHERE","WHICH","WHILE","WHITE","WHOLE","WOMAN","WORLD",
   "WORRY","WORSE","WORST","WORTH","WOULD","WOUND","WRITE","WRONG","YOUNG","YOUTH",
   "ZONAL"
];

// ── Valid guesses (full dictionary — every real 5-letter word) ────────────────
// Large curated list of valid English 5-letter words
const VALID_WORDS = new Set([
   // Include all answers first
   ...ANSWERS,
   // Additional valid English words
   "AAHED","AALII","ABACI","ABACK","ABASE","ABASH","ABATE","ABBEY","ABBOT","ABHOR",
   "ABIDE","ABLER","ABODE","ABOON","ABOVE","ABUSE","ABYSS","ACIDS","ACORN","ACRES",
   "ACTED","ACUTE","ADAGE","ADAPT","ADDER","ADEPT","ADHERE","ADIEU","ADIOS","ADMAN",
   "ADMIN","ADMIT","ADOBE","ADOPT","ADORE","ADORN","ADULT","AEGIS","AEONS","AFFIX",
   "AFIRE","AFOOT","AFOUL","AFTER","AGAIN","AGATE","AGAVE","AGAZE","AGEING","AGILE",
   "AGING","AGLOW","AGONY","AGREE","AHEAD","AIDED","AIMER","AIRED","AISLE","ALBUM",
   "ALDER","ALLAY","ALLEY","ALLOT","ALLOW","ALLOY","ALMOND","ALOFT","ALONE","ALONG",
   "ALOOF","ALOUD","ALUMS","AMAZE","AMBRY","AMEND","AMISS","AMPLE","AMUSE","ANGEL",
   "ANGER","ANGLE","ANGRY","ANGST","ANIME","ANISE","ANKLE","ANNEX","ANNOY","ANTIC",
   "ANVIL","AORTA","APPEASE","APPLE","APPLY","APRON","APTLY","ARBOR","ARDOR","ARENA",
   "ARGUE","ARISE","ARMOR","AROMA","AROSE","ATONE","ATTIC","AUDIO","AUDIT","AUGUR",
   "AVAIL","AVANT","AVERT","AVIAN","AVID","AVOID","AWAIT","AWOKE","AXIAL","AZURE",
   "BABEL","BAGEL","BAGGY","BANAL","BANDY","BASTE","BATCH","BATHE","BAYOU","BEARD",
   "BEECH","BEING","BELAY","BELLE","BELOW","BENCH","BEVEL","BIBLE","BICEP","BIDET",
   "BILGE","BINGE","BIOME","BLACK","BLADE","BLAND","BLANK","BLARE","BLEED","BLESS",
   "BLIMP","BLIND","BLINK","BLISS","BLOKE","BLOOD","BLOOM","BLOWN","BLUFF","BLURB",
   "BLURT","BOAST","BOGGY","BOOZE","BORAX","BOSSY","BOTCH","BRACE","BRAVE","BRAVO",
   "BRAWL","BREAK","BREED","BRIBE","BRICK","BRIDE","BRIEF","BRINE","BRING","BRINK",
   "BROIL","BROOK","BROTH","BROWN","BROWS","BRUIT","BUILD","BUILT","BULGE","BUMPY",
   "BUNCH","BURLY","BURST","BUSHY","BUTCH","BYLAW","CABAL","CACHE","CADGE","CAMEL",
   "CARGO","CAROL","CARRY","CARVE","CAUSE","CAULK","CEASE","CHAFE","CHAFF","CHAIR",
   "CHALK","CHARD","CHASE","CHEAP","CHEAT","CHECK","CHEEK","CHEER","CHESS","CHEST",
   "CHIEF","CHILD","CHILL","CHIMP","CHIVE","CHOIR","CHOSE","CHUCK","CHURN","CIVIC",
   "CIVIL","CLAIM","CLAMP","CLANG","CLASH","CLASS","CLAVE","CLEAN","CLEAR","CLERK",
   "CLIMB","CLINK","CLOUD","CLOVE","CLOWN","COACH","COALS","COBRA","COMET","COMIC",
   "COMMA","CONCH","CORAL","COUCH","COUGH","COULD","COUNT","COURT","COVER","COVET",
   "CRACK","CRAFT","CRAMP","CRASH","CREAK","CREED","CREEK","CREEP","CRIME","CRIMP",
   "CRONE","CROOK","CROSS","CROWD","CROWN","CRUDE","CRUEL","CRUSH","CRYPT","CUCKOO",
   "CURLY","CURRY","CYCLE","CYNIC","DECAL","DECAY","DECOY","DECRY","DETER","DETOX",
   "DEVIL","DIARY","DICEY","DIMLY","DINER","DIODE","DIRELY","DIRTY","DISCO","DIVER",
   "DIZZY","DODGE","DOGMA","DOING","DOLLY","DONOR","DOUBT","DOUGH","DOUR","DOWDY",
   "DRAIN","DRANK","DRAWL","DRAWN","DREAD","DREAM","DREGS","DRESS","DRINK","DRIVE",
   "DRONE","DROOL","DROP","DROSS","DROVE","DROWN","DRUID","DRUNK","DRYLY","DUCHY",
   "DULLY","DUNNO","DUPED","DUSTY","DWARF","DWELL","DYING","EARLY","EARTHY","EASEL",
   "ECLAT","EDGED","EIGHT","EJECT","ELEGY","ELITE","EMAIL","ENACT","ENVY","EPOXY",
   "EQUAL","EQUIP","ERODE","ERROR","ETHIC","EVENT","EVERY","EXACT","EXALT","EXERT",
   "EXILE","EXIST","EXPEL","EXTRA","FAINT","FAIRY","FAITH","FALSE","FANCY","FARCE",
   "FAULT","FEAST","FEVER","FEWER","FIELD","FIEND","FIERY","FIFTH","FIFTY","FIGHT",
   "FILTH","FINCH","FIRST","FIZZY","FLANK","FLASH","FLASK","FLEECE","FLESH","FLICK",
   "FLING","FLINT","FLIRT","FLOCK","FLOOD","FLOSS","FLOW","FLOWN","FLUNK","FLURRY",
   "FOCUS","FOGGY","FOLIO","FOLLY","FORCE","FORGE","FORTE","FORTY","FOUND","FRANK",
   "FRAUD","FREAK","FREED","FRESH","FRIGHT","FRONT","FROND","FROZE","FUDGE","FUGUE",
   "FULLY","FUNGI","FUNKY","GABBY","GAMUT","GAUZE","GAVEL","GAWKY","GIRTH","GIVEN",
   "GLAND","GLAZE","GLEAM","GLIB","GLIDE","GLOOM","GLOVE","GLYPH","GOING","GOLLY",
   "GOOEY","GOUGE","GOURD","GRACE","GRADE","GRAIN","GRAND","GRANT","GRASP","GRASS",
   "GRATE","GRAVE","GRAZE","GREED","GREEN","GREET","GRIEF","GRILL","GRIPE","GROAN",
   "GROUT","GROVE","GROWL","GRUEL","GRUMP","GRUNT","GUILD","GUISE","GULCH","GULLY",
   "GUMBO","GUSHY","GUILE","HABIT","HARPY","HASTE","HATCH","HAVEN","HAVOC","HEDGE",
   "HELIX","HENCE","HERON","HIPPO","HOARD","HOBBY","HOLLY","HOMER","HONEY","HONOR",
   "HOVEL","HOVER","HURDLE","HURRY","HYENA","HYPNO","ICICLE","ICILY","IMAGE","IMPEL",
   "INDEX","INDIE","INEPT","INFER","INLET","INNER","INTER","INTRO","IONIC","IRATE",
   "IRONY","ISSUE","IVORY","JAUNT","JAZZY","JIFFY","JOINT","JOIST","JOKER","JOLLY",
   "JUDGE","JUICE","JUICY","JUMBO","KEENLY","KNAVE","KNEEL","KNELT","KNOB","KNOCK",
   "KNOLL","KNOWN","KUDOS","LACED","LANKY","LARGE","LASER","LATER","LAXLY","LAYER",
   "LEACH","LEAFY","LEAKY","LEARN","LEAST","LEFTY","LEGAL","LEMON","LETHAL","LEVEL",
   "LIVER","LOCAL","LODGE","LOGIC","LORRY","LOFTY","LOOSE","LOYAL","LUCID","LUCKY",
   "LYRICAL","MAGIC","MAIZE","MAJOR","MAKER","MANGA","MANGY","MANLY","MAPLE","MARCH",
   "MARRY","MATCH","MAVEN","MEALY","MEANT","MELON","MERCY","METAL","MELEE","MIDST",
   "MIRTH","MISTY","MIXED","MODEL","MOOSE","MORPH","MOSSY","MOTOR","MOUND","MOUNT",
   "MOURN","MOUSY","MURAL","MISER","NAIVE","NANNY","NASTY","NAVAL","NUTTY","NYMPH",
   "OBESE","ODDLY","OFFAL","OFTEN","ONSET","ORDER","OTHER","OUGHT","OUTER","OXIDE",
   "OZONE","PAGAN","PANIC","PAPAL","PARTY","PASTE","PATSY","PAYOFF","PEACH","PENAL",
   "PENNY","PHASE","PHONE","PHOTO","PIANO","PITCH","PIXEL","PLAID","PLAIN","PLANE",
   "PLANK","PLATE","PLAZA","PLEAD","PLUCK","PLUMB","PLUMP","PLUNK","POACH","PODGY",
   "POINT","POISE","POKEY","POLAR","POLKA","POUTY","POWER","PRESS","PRICE","PRICK",
   "PRIMP","PRINT","PRIZE","PROBE","PRONE","PROOF","PROSE","PROUD","PRUDE","PULSE",
   "PUNCH","PUNKY","PUPIL","PURGE","PUSHY","PUTTY","QUAKE","QUALM","QUASI","QUAFF",
   "QUERY","QUEUE","QUIFF","RABBI","RABID","RADIX","RALLY","REALM","REBEL","REFER",
   "RELAX","RENEW","REPEL","REPAY","REPEL","RERUN","RESET","RESIN","REUSE","REVEL",
   "RHYME","RIDER","RIFLE","RIGHT","RIGID","RIVET","ROAST","ROMAN","ROOMY","ROUGH",
   "ROUND","ROUSE","ROWDY","ROYAL","RUDDY","RUGBY","RULER","RUSTY","SADLY","SAGE",
   "SAINT","SALAD","SALINE","SALLY","SALTY","SALVE","SANDY","SAUCE","SAUCY","SAVOR",
   "SAVVY","SCALD","SCALY","SCARY","SCENE","SCENT","SCONE","SCORE","SCOUR","SCOUT",
   "SCOWL","SCRAM","SCRAP","SCRUB","SEEDY","SEIZE","SERUM","SERVE","SETUP","SEVEN",
   "SHAPE","SHARE","SHARK","SHARP","SHEAF","SHELF","SHELL","SHIFT","SHINE","SHOCK",
   "SHORE","SHORT","SHOUT","SHOVE","SHOWN","SHRED","SHRUB","SHRUG","SHUN","SIEGE",
   "SIGHT","SILKY","SISSY","SIXTH","SIXTY","SIZED","SKILL","SKIMP","SKULL","SLACK",
   "SLAIN","SLANT","SLASH","SLEEK","SLEET","SLICK","SLIDE","SLIMY","SLINK","SLOSH",
   "SLOTH","SLUSH","SLYLY","SMACK","SMALL","SMART","SMASH","SMELL","SMILE","SMOCK",
   "SMOKE","SNACK","SNAIL","SNAKE","SNAKY","SNEER","SNIDE","SNORE","SNORT","SNOWY",
   "SOAPY","SOLID","SOLVE","SONNY","SORRY","SOUND","SOUTH","SPACE","SPADE","SPARE",
   "SPARK","SPAWN","SPEAK","SPEAR","SPECK","SPEED","SPELL","SPEND","SPICE","SPILL",
   "SPINE","SPINY","SPITE","SPOIL","SPOKE","SPOOF","SPOON","SPORT","SPRAY","SQUAD",
   "SQUAT","SQUIB","STACK","STAGE","STAIN","STALE","STALL","STAMP","STAND","STARE",
   "STARK","START","STASH","STEAD","STEAM","STEEL","STEEP","STEER","STERN","STICK",
   "STOIC","STONE","STOOD","STOOL","STORE","STARK","STRAP","STRAW","STRAY","STRIP",
   "STROBE","STUCK","STUDY","STUMP","SUGAR","SUITE","SUMMON","SUNNY","SUPER","SWAMP",
   "SWEAR","SWEAT","SWEEP","SWEET","SWIFT","SWILL","SWING","SWIPE","SWORE","SWUNG",
   "SWORD","SYNTH","TABLE","TALON","TAUNT","TEASE","THANK","THERE","THESE","THINK",
   "THIRD","THREE","THREW","THROW","THUMB","TIGER","TITHE","TODAY","TOKEN","TOUCH",
   "TOUGH","TOWER","TRACE","TRAMP","TRAWL","TREAD","TREAT","TREMBLE","TREND","TRICE",
   "TRICK","TRITE","TRIVIAL","TROOP","TROTH","TROUSSEAU","TRUMP","TRUST","TRUTH","TUMMY",
   "TUMOR","TUNER","TUNIC","TURBO","TWANG","TWICE","TWITCH","TYPIC","UGLY","ULCER",
   "UMBER","UNIFY","UNITE","UNLIT","UNMET","UNPIN","UNSET","UNTIL","UNZIP","UPEND",
   "UPSET","USURP","UTTER","VAGUE","VALID","VALVE","VAUNT","VICAR","VIPER","VIRAL",
   "VAULT","VISIT","VITAL","VIVID","VIXEN","VOCAL","VODKA","VOMIT","VOTED","VOILA",
   "WAGER","WALTZ","WAND","WARTY","WATERY","WEAVE","WEDGE","WEEDY","WHILE","WHIM",
   "WHINE","WHINY","WISPY","WITCH","WITTY","WOODY","WORLD","WORMY","WORSE","WORST",
   "WOULD","WOUND","WOVEN","WRING","WROTE","YEARN","YOUNG","YOURS","YUCKY","ZESTY",
   "ZILCH","ZONAL","ZOOMS","EERIE","SOOTH","SPRIG","SKIRT","SMELT","SNIFF","SKIMP",
   "TORSO","RABBI","RAINY","GOOFY","BOOBY","BOOTH","BUFFY","BOOZE","BOPPY","GROOM",
   "FROWN","PRAWN","SPAWN","DRAWN","BRAWN","YAWN","YAWNS","FAWNS","LAWNS","DAWNS",
   "PRANK","FRANC","PLANK","BLANK","CLANK","FLANK","THANK","SWANK","FRANK","CRANK",
   "SNORT","SPORT","ABORT","SHORT","EXERT","INERT","OVERT","AVERT","DIVERT","EVERT",
   "CHEST","CREST","UNREST","ATTEST","INVEST","DIVEST","MODEST","HONEST","FOREST",
   "MOURN","ADORN","CHURN","INURN","BURNT","FRONT","BLUNT","GRUNT","STUNT","SPURT",
   "SPOOK","CROOK","BROOK","SHOOK","STOOD","FLOOD","BLOOD","BROOD","SWOON","DROOL",
   "BROOM","BLOOM","GLOOM","PROOF","SPOOF","TROOP","STOOL","DROOL","SPOOL","STOOP","VOGUE","MUSIC",
   // 4-letter noun plurals
   "ACIDS","ACRES","ARCHS","AREAS","AUNTS","BACKS","BALES","BALLS","BANDS","BANKS",
   "BARNS","BATHS","BEADS","BEAKS","BEANS","BEARS","BEATS","BELLS","BELTS","BENDS",
   "BIKES","BILLS","BIRDS","BITES","BLOBS","BOLTS","BONDS","BONES","BOOKS","BOOTS",
   "BORES","BOWLS","BROWS","BURNS","BURPS","BYTES","CAGES","CAKES","CALLS","CANES",
   "CARDS","CARES","CARTS","CAVES","CELLS","CHIPS","CLAMS","CLANS","CLIPS","CLOGS",
   "CLUBS","CLUES","COATS","CODES","COILS","COINS","COLDS","CONES","CORES","CORNS",
   "COSTS","COVES","CRABS","CRIBS","CROPS","CURBS","CURES","CURLS","DALES","DATES",
   "DEALS","DEANS","DEBTS","DECKS","DEEDS","DENTS","DESKS","DIALS","DIETS","DIMES",
   "DISCS","DISKS","DIVES","DOCKS","DOLLS","DOORS","DORMS","DOSES","DOVES","DRUMS",
   "DUCKS","DUNES","EARNS","EAVES","EDGES","EPICS","EUROS","EXAMS","FACES","FAKES",
   "FALLS","FARMS","FAWNS","FEATS","FERNS","FEUDS","FILES","FILLS","FILMS","FIRES",
   "FISTS","FLAGS","FLAPS","FLEAS","FLIPS","FLOES","FOALS","FOAMS","FOLDS","FOLKS",
   "FONTS","FOOLS","FORKS","FORMS","FUELS","FUMES","FUNDS","GALES","GAMES","GANGS",
   "GATES","GENES","GIFTS","GIRLS","GLOBS","GOALS","GOATS","GULFS","GULLS","GUSTS",
   "HALLS","HALTS","HANDS","HEAPS","HEELS","HERDS","HINTS","HOLES","HOODS","HOOKS",
   "HORNS","HOURS","HULLS","HUNTS","ICONS","IDEAS","IRONS","ISLES","ITEMS","JAILS",
   "JESTS","JUMPS","JUNKS","KEELS","KICKS","KILNS","KINGS","KNOBS","KNOTS","LACES",
   "LAKES","LANES","LARKS","LEAFS","LEAKS","LEAPS","LIFTS","LIMES","LINES","LINKS",
   "LIONS","LISTS","LOADS","LOANS","LOCKS","LOFTS","LOOPS","LORDS","MAIDS","MAILS",
   "MANES","MARKS","MASTS","MESAS","MILLS","MINDS","MINES","MINKS","MOATS","MOLES",
   "MONKS","MOODS","MOONS","MOORS","MOTHS","MOVES","NAILS","NAMES","NAPES","NECKS",
   "NEEDS","NESTS","NEWTS","NOOKS","NORMS","NOTES","NOUNS","NUKES","OPALS","ORCAS",
   "OVALS","OVENS","PACKS","PAGES","PAILS","PAIRS","PALMS","PARKS","PARTS","PATHS",
   "PAWNS","PEAKS","PEARS","PEERS","PILLS","PINES","PIPES","PLANS","PLAYS","PLOTS",
   "PLOWS","PLUGS","PLUMS","POEMS","POLES","PONDS","POOLS","PORES","PORTS","POSTS",
   "PREYS","PRODS","PROPS","PROWS","PUFFS","PULPS","PUMPS","QUADS","QUAYS","RAFTS",
   "RAGES","RAIDS","RAILS","RAMPS","REEDS","REEFS","REINS","RENTS","RIFTS","RINGS",
   "ROADS","ROCKS","ROLES","ROLLS","ROOFS","ROOKS","ROOMS","ROOTS","ROPES","ROSES",
   "RUINS","RULES","RUNES","RUSES","RUSTS","SAGAS","SAGES","SAILS","SALTS","SANDS",
   "SAVES","SCARS","SEEDS","SEEPS","SERFS","SHEDS","SHIPS","SHOTS","SHOWS","SIGNS",
   "SILTS","SINKS","SITES","SIZES","SLABS","SLAGS","SLEDS","SLIPS","SLOGS","SLOTS",
   "SLUGS","SLUMS","SMOGS","SNAGS","SNAPS","SNOBS","SOFAS","SOILS","SONGS","SOULS",
   "SPANS","SPATS","SPECS","SPITS","SPOTS","SPUDS","STAGS","STEMS","STEPS","STIRS",
   "STOPS","STUBS","SWANS","SWAPS","TACKS","TALES","TALKS","TARPS","TASKS","TEARS",
   "TERMS","TESTS","TEXTS","TIDES","TILES","TIMES","TIRES","TOADS","TONES","TOOLS",
   "TOWNS","TRAPS","TREES","TRIPS","TUBES","TUNES","TURFS","TURNS","TWIGS","TYPES",
   "UNITS","VALES","VANES","VEINS","VENTS","VERBS","VESTS","VIEWS","VINES","VOLTS",
   "VOTES","WADES","WAFTS","WAIFS","WALKS","WALLS","WANTS","WASPS","WAVES","WEEKS",
   "WELLS","WELTS","WICKS","WINDS","WINGS","WIRES","WISPS","WORDS","WORKS","WORMS",
   "YARDS","YEARS","YOKES","YOLKS","ZINCS","ZONES","BLEAT","TROLL","PRONE","VOUCH","LOUSE","SCOUR","APRON","SWEEP","SPINE","SHOUT","CLASH",
]);


// ══════════════════════════════════════════════════
//  i18n — Language system (VI default, EN toggle)
// ══════════════════════════════════════════════════
const LANG_KEY = "bao_wordle_lang";
let currentLang = localStorage.getItem(LANG_KEY) || "vi";

const STRINGS = {
   vi: {
      playsLabel:    "lượt hôm nay",
      npTitle:       "quay lại vào ngày mai nhé keke",
      npMsg:         "tạm biệt nga, quay lại khi cái đồng hồ này đếm xong nè &#8595;",
      helpTitle:     "Hướng dẫn.... (không ai cần đọc cái này đâu he)",
      helpDesc:      "đoán 1 từ tiếng anh 5 chữ cái nhen.",
      legendCorrect: "<strong>đúng nè</strong> — đúng chữ, đúng chỗ",
      legendPresent: "<strong>gần rồi</strong> — đúng chữ, sai chỗ",
      legendAbsent:  "<strong>èeeeee</strong> — sai gồi ní",
      helpRule:      "Bạn sẽ có <strong>2 lượt chơi mỗi ngày :&gt;</strong> quay lại vào ngày mai nếu hết lượt nhen",
      btnNext:       "Chơi tiếp",
      btnBack:       "Quay lại",
      msgNotEnough:  "Chưa đủ 5 chữ cái",
      msgNotValid:   "Không phải từ hợp lệ",
      statPlayed:    "Đã chơi",
      statWins:      "Thắng",
      statStreak:    "Chuỗi",
      statBest:      "Tốt nhất",
      winMsgs:       ["Thiên tài!!! 🧠", "Xuất sắc! ✨", "Tuyệt vời quá ní!", "Giỏi ghê!", "Ổn đó ní!", "gùa thôi!"], 
      loseMsg:       "chúc bạn may mắn lần sau :<",
      resultGuesses: function(n){ return n + "/6 lượt đoán"; },
      resultAnswer:  function(w){ return "Đáp án là: " + w; },
      noPlaysBtn:    "Hết lượt rồi",
      noPlaysInfo:   "Đã dùng hết 2 lượt · quay lại ngày mai nhe",
      playsLeftInfo: function(n){ return "Còn " + n + " lượt chơi hôm nay"; },
      nextGameBtn:   function(n){ return "Chơi tiếp (còn " + n + ")"; },
      langBtnLabel:  "🇺🇸 EN",
   },
   en: {
      playsLabel:    "plays today",
      npTitle:       "Come back tomorrow!",
      npMsg:         "You've used all your plays for today.<br>See you tomorrow!",
      helpTitle:     "How to Play",
      helpDesc:      "Guess the 5-letter English word in 6 tries.",
      legendCorrect: "<strong>Correct</strong> — right letter, right spot",
      legendPresent: "<strong>Present</strong> — right letter, wrong spot",
      legendAbsent:  "<strong>Absent</strong> — letter not in the word",
      helpRule:      "You get <strong>2 plays per day</strong>. Resets at midnight.",
      btnNext:       "Next Game",
      btnBack:       "Back to site",
      msgNotEnough:  "Not enough letters",
      msgNotValid:   "Not a valid word",
      statPlayed:    "Played",
      statWins:      "Wins",
      statStreak:    "Streak",
      statBest:      "Best",
      winMsgs:       ["Genius! 🧠", "Magnificent! ✨", "Impressive!", "Splendid!", "Great job!", "Phew! 😅"],
      loseMsg:       "Better luck next time!",
      resultGuesses: function(n){ return n + "/6 guesses"; },
      resultAnswer:  function(w){ return "The word was: " + w; },
      noPlaysBtn:    "No plays left today",
      noPlaysInfo:   "All 2 plays used · come back tomorrow",
      playsLeftInfo: function(n){ return n + " play" + (n !== 1 ? "s" : "") + " remaining today"; },
      nextGameBtn:   function(n){ return "Next Game (" + n + " left)"; },
      langBtnLabel:  "🇻🇳 VI",
   }
};

function t(key, arg) {
   var val = STRINGS[currentLang][key];
   return typeof val === "function" ? val(arg) : val;
}

function applyLanguage() {
   document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var key = el.dataset.i18n;
      if (STRINGS[currentLang][key] !== undefined) {
         el.innerHTML = t(key);
      }
   });
   var btn = document.getElementById("langBtn");
   if (btn) {
      btn.textContent = t("langBtnLabel");
      btn.classList.toggle("vi-active", currentLang === "vi");
   }
}

function toggleLanguage() {
   currentLang = currentLang === "vi" ? "en" : "vi";
   try { localStorage.setItem(LANG_KEY, currentLang); } catch(e) {}
   applyLanguage();
}

// ── Constants ─────────────────────────────────────
const MAX_PLAYS_PER_DAY = 2;
const MAX_GUESSES = 6;
const WORD_LENGTH = 5;
const STORAGE_KEY = "bao_wordle_v2";

const KEYBOARD_ROWS = [
   ["Q","W","E","R","T","Y","U","I","O","P"],
   ["A","S","D","F","G","H","J","K","L"],
   ["ENTER","Z","X","C","V","B","N","M","⌫"]
];

// ── State ─────────────────────────────────────────
let state = {
   targetWord: "", guesses: [], currentGuess: "",
   gameOver: false, row: 0, letterStates: {}
};

// ── Persistence ───────────────────────────────────
function getTodayStr() {
   const d = new Date();
   return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
function loadStorage() {
   try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
   catch { return {}; }
}
function saveStorage(data) {
   try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}
function getPlaysToday() {
   const data = loadStorage(), today = getTodayStr();
   return (data.date === today) ? (data.playsToday || 0) : 0;
}
function recordPlay() {
   const data = loadStorage(), today = getTodayStr();
   const count = (data.date === today) ? (data.playsToday || 0) : 0;
   saveStorage({ ...data, date: today, playsToday: count + 1 });
}
function getTotalStats() {
   const d = loadStorage();
   return { played: d.played||0, wins: d.wins||0, streak: d.streak||0, bestStreak: d.bestStreak||0 };
}
function recordResult(won) {
   const data = loadStorage(), s = getTotalStats();
   const newStreak = won ? s.streak + 1 : 0;
   saveStorage({ ...data, played: s.played+1, wins: won ? s.wins+1 : s.wins,
      streak: newStreak, bestStreak: Math.max(newStreak, s.bestStreak) });
}

// ── DOM helpers ───────────────────────────────────
function getTile(row, col) { return document.getElementById("grid").children[row * WORD_LENGTH + col]; }
function getKbKey(letter)  { return document.querySelector(`.kb-key[data-key="${letter}"]`); }

function showMessage(msg, type = "", duration = 1800) {
   const bar = document.getElementById("messageBar");
   bar.textContent = msg;
   bar.className = "message-bar" + (type ? ` ${type}` : "");
   if (duration > 0) setTimeout(() => { if (bar.textContent === msg) bar.textContent = ""; }, duration);
}

function updatePlaysDisplay() {
   const left = MAX_PLAYS_PER_DAY - getPlaysToday();
   document.getElementById("playsLeft").textContent = Math.max(0, left);
}

// ── Countdown ─────────────────────────────────────
function startCountdown() {
   function tick() {
      const now = new Date(), midnight = new Date(now);
      midnight.setHours(24,0,0,0);
      const diff = midnight - now;
      const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
      const p = n => String(n).padStart(2,"0");
      document.getElementById("npCountdown").textContent = `${p(h)}:${p(m)}:${p(s)}`;
   }
   tick(); setInterval(tick, 1000);
}

// ── Build UI ──────────────────────────────────────
function buildGrid() {
   const grid = document.getElementById("grid");
   grid.innerHTML = "";
   for (let r = 0; r < MAX_GUESSES; r++)
      for (let c = 0; c < WORD_LENGTH; c++) {
         const tile = document.createElement("div");
         tile.className = "tile";
         grid.appendChild(tile);
      }
}

function buildKeyboard() {
   KEYBOARD_ROWS.forEach((row, i) => {
      const rowEl = document.getElementById(`kbRow${i}`);
      rowEl.innerHTML = "";
      row.forEach(key => {
         const btn = document.createElement("button");
         btn.className = "kb-key" + (key === "ENTER" || key === "⌫" ? " wide" : "");
         btn.textContent = key;
         btn.dataset.key = key;
         btn.addEventListener("click", () => handleKey(key));
         rowEl.appendChild(btn);
      });
   });
}

function highlightRow(row) {
   for (let c = 0; c < WORD_LENGTH; c++) getTile(row, c).classList.add("active-row");
}
function clearRowHighlight(row) {
   for (let c = 0; c < WORD_LENGTH; c++) getTile(row, c).classList.remove("active-row");
}

// ── Input handling ────────────────────────────────
function handleKey(key) {
   if (state.gameOver) return;
   if (key === "⌫" || key === "BACKSPACE") {
      if (state.currentGuess.length > 0) {
         const col = state.currentGuess.length - 1;
         state.currentGuess = state.currentGuess.slice(0, -1);
         const tile = getTile(state.row, col);
         tile.textContent = "";
         tile.classList.remove("filled");
      }
   } else if (key === "ENTER") {
      submitGuess();
   } else if (/^[A-Z]$/.test(key) && state.currentGuess.length < WORD_LENGTH) {
      const col = state.currentGuess.length;
      state.currentGuess += key;
      const tile = getTile(state.row, col);
      tile.textContent = key;
      tile.classList.add("filled");
   }
}

window.addEventListener("keydown", e => {
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   const k = e.key.toUpperCase();
   if (k === "BACKSPACE") handleKey("⌫");
   else if (k === "ENTER") handleKey("ENTER");
   else if (/^[A-Z]$/.test(k)) handleKey(k);
});

// ── Guess evaluation ──────────────────────────────
function evaluateGuess(guess, target) {
   const result = Array(WORD_LENGTH).fill("absent");
   const tArr = target.split(""), used = Array(WORD_LENGTH).fill(false);
   // Pass 1: correct
   for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === tArr[i]) { result[i] = "correct"; used[i] = true; }
   }
   // Pass 2: present
   for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i] === "correct") continue;
      for (let j = 0; j < WORD_LENGTH; j++) {
         if (!used[j] && guess[i] === tArr[j]) { result[i] = "present"; used[j] = true; break; }
      }
   }
   return result;
}

function submitGuess() {
   if (state.currentGuess.length < WORD_LENGTH) {
      shakeRow(state.row);
      showMessage(t("msgNotEnough"), "error");
      return;
   }

   // ── Dictionary check ──
   if (!VALID_WORDS.has(state.currentGuess)) {
      shakeRow(state.row);
      showMessage(t("msgNotValid"), "error");
      return;
   }

   const guess = state.currentGuess;
   const result = evaluateGuess(guess, state.targetWord);
   state.guesses.push(guess);
   clearRowHighlight(state.row);

   revealRow(state.row, guess, result, () => {
      // Update keyboard states
      result.forEach((res, i) => {
         const letter = guess[i];
         const cur = state.letterStates[letter];
         if (cur !== "correct") {
            if (res === "correct" || (res === "present" && cur !== "correct") || (res === "absent" && !cur)) {
               state.letterStates[letter] = res;
            }
         }
         const key = getKbKey(letter);
         if (key) key.className = `kb-key${(letter.length > 1) ? " wide" : ""} ${state.letterStates[letter]}`;
      });

      const won = result.every(r => r === "correct");
      state.row++;
      state.currentGuess = "";

      if (won) {
         state.gameOver = true;
         recordPlay();
         recordResult(true);
         updatePlaysDisplay();
         bounceRow(state.row - 1);
         setTimeout(() => showResultModal(true, state.row - 1), 900);
      } else if (state.row >= MAX_GUESSES) {
         state.gameOver = true;
         recordResult(false);
         setTimeout(() => showResultModal(false, state.row), 700);
      } else {
         highlightRow(state.row);
      }
   });
}

function revealRow(row, guess, result, cb) {
   const DELAY = 280;
   for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = getTile(row, c);
      setTimeout(() => {
         tile.classList.add("flipping");
         setTimeout(() => { tile.classList.remove("flipping"); tile.classList.add(result[c]); }, DELAY / 2);
      }, c * DELAY);
   }
   setTimeout(cb, WORD_LENGTH * DELAY + 120);
}

function shakeRow(row) {
   for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = getTile(row, c);
      tile.classList.add("shake");
      tile.addEventListener("animationend", () => tile.classList.remove("shake"), { once: true });
   }
}

function bounceRow(row) {
   for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = getTile(row, c);
      setTimeout(() => {
         tile.classList.add("bounce");
         tile.addEventListener("animationend", () => tile.classList.remove("bounce"), { once: true });
      }, c * 80);
   }
}

// ── Vietnamese meanings (Option A — hardcoded) ───────
const VN_MEANINGS = {
   // ── Core words ──
   "CRANE": "con cò; cần cẩu",
   "ABOUT": "về, khoảng, xung quanh",
   "BLEND": "pha trộn, hòa lẫn",
   "CRISP": "giòn, sắc nét, mát lạnh",
   "DANCE": "nhảy múa, vũ điệu",
   "EAGLE": "con đại bàng",
   "FABLE": "truyện ngụ ngôn",
   "GHOST": "con ma, hồn ma",
   "HANDY": "tiện lợi, khéo tay",
   "IDEAL": "lý tưởng, hoàn hảo",
   "PANDA": "con gấu trúc",
   "KNIFE": "con dao",
   "LIGHT": "ánh sáng; nhẹ; sáng",
   "MAGIC": "phép thuật, ma thuật",
   "NIGHT": "ban đêm, đêm tối",
   "OLIVE": "quả ô liu; màu xanh olive",
   "PLANT": "cây cối; nhà máy; trồng cây",
   "QUEEN": "nữ hoàng, hoàng hậu",
   "RIVER": "con sông",
   "STORM": "cơn bão, giông tố",
   "TRUNK": "thân cây; va-li; vòi voi",
   "VOGUE": "mốt thời thượng, xu hướng",
   "WATCH": "đồng hồ đeo tay; xem, canh gác",
   "YACHT": "du thuyền",
   "ZEBRA": "con ngựa vằn",
   "SWORD": "thanh kiếm",
   "BLAZE": "ngọn lửa bừng cháy",
   "CLAMP": "kẹp, cái kẹp chặt",
   "DROVE": "lùa (gia súc); đã lái",
   "COLOR": "màu sắc",
   "APPLE": "quả táo",
   "ANGER": "cơn giận, sự tức giận",
   "SNAKE": "con rắn",
   "INPUT": "đầu vào, dữ liệu nhập",
   "JEWEL": "đồ trang sức, viên đá quý",
   "KARMA": "nghiệp, nhân quả",
   "LEMON": "quả chanh vàng",
   "MOIST": "ẩm ướt, hơi ướt",
   "NOBLE": "cao quý, quý tộc",
   "OCEAN": "đại dương",
   "PRIDE": "lòng tự hào; đàn sư tử",
   "QUEST": "cuộc tìm kiếm, hành trình",
   "RAVEN": "con quạ đen",
   "SNARE": "bẫy, cạm bẫy",
   "TOAST": "bánh mì nướng; nâng cốc chúc mừng",
   "ULTRA": "cực độ, siêu, vượt mức",
   "VAPOR": "hơi nước, hơi bốc",
   "WASTE": "lãng phí; rác thải",
   "BRAID": "tết bím tóc; dây thừng bện",
   "CHANT": "tụng kinh; hát điệp khúc",
   "DRAFT": "bản nháp; gió lùa; tuyển quân",
   "EVOKE": "gợi lên, khơi dậy",
   "FLAME": "ngọn lửa",
   "GRIND": "nghiền, mài, xay",
   "HEIST": "vụ cướp có tổ chức",
   "INFER": "suy luận, kết luận",
   "JOKER": "người hay đùa; lá bài joker",
   "KNEEL": "quỳ gối",
   "LUNAR": "thuộc về mặt trăng",
   "MARSH": "đầm lầy",
   "NERVE": "dây thần kinh; can đảm",
   "ORBIT": "quỹ đạo; xoay quanh",
   "PROXY": "đại diện, ủy quyền",
   "QUILL": "lông vũ; bút lông",
   "REIGN": "trị vì, thời trị vì",
   "SLATE": "tấm đá phiến; bảng đen",
   "THUMP": "đánh mạnh, tiếng đập thình thịch",
   "UNITE": "đoàn kết, thống nhất",
   "VIGOR": "sức mạnh, sinh lực",
   "WRATH": "cơn thịnh nộ, cơn giận dữ",
   "YIELD": "sản lượng; nhường, đầu hàng",
   "ABIDE": "chịu đựng; tuân theo",
   "BLUNT": "cùn, thẳng thắn đến mức thô",
   "CHARM": "sức quyến rũ; bùa hộ mệnh",
   "DRUNK": "say rượu",
   "ELBOW": "khuỷu tay",
   "FRAIL": "yếu ớt, mong manh",
   "GLOOM": "u ám, tối tăm, ảm đạm",
   "HAUNT": "ám ảnh; nơi thường lui tới",
   "IMPLY": "ngụ ý, ám chỉ",
   "KNACK": "tài năng, khéo léo",
   "LATCH": "then cài cửa; móc vào",
   "MANOR": "trang trại lớn, điền trang",
   "OPTIC": "liên quan đến thị giác, quang học",
   "PRUNE": "tỉa cành; quả mận khô",
   "QUIRK": "tính lạ, nét kỳ quặc",
   "RISKY": "mạo hiểm, rủi ro",
   "SCOUT": "trinh sát; hướng đạo sinh",
   "TAUNT": "chế giễu, khiêu khích",
   "USHER": "người hướng dẫn; dẫn đường",
   "VENOM": "nọc độc; lời độc ác",
   "WEARY": "mệt mỏi, chán ngán",
   "ALOFT": "trên cao, lên cao",
   "BASIN": "bồn rửa tay; lưu vực sông",
   "CINCH": "việc dễ như bỡn; thắt chặt",
   "DAISY": "hoa cúc trắng",
   "ERUPT": "phun trào; bùng phát",
   "FROTH": "bọt, sủi bọt",
   "GLINT": "tia sáng lấp lánh",
   "HINGE": "bản lề cửa; phụ thuộc vào",
   "IRATE": "tức giận, phẫn nộ",
   "LEDGE": "gờ đá; bệ cửa sổ",
   "MIRTH": "niềm vui, tiếng cười",
   "NOTCH": "khía, rãnh; bậc, mức độ",
   "OUNCE": "đơn vị ounce (28g)",
   "PERCH": "đậu (chim); cá rô",
   "ROGUE": "kẻ lưu manh; bất thường",
   "SHAWL": "khăn choàng",
   "THORN": "gai cây, cái gai",
   "VOUCH": "bảo đảm, xác nhận",
   "WHIRL": "xoay tròn, quay vòng",
   "BALMY": "ấm áp dễ chịu; hơi điên",
   "CHASM": "vực sâu, hố sâu",
   "DITCH": "rãnh thoát nước; bỏ rơi",
   "EXPEL": "trục xuất, đuổi ra",
   "FEIGN": "giả vờ, giả bộ",
   "GRAFT": "ghép cây; tham nhũng",
   "HARDY": "cứng cáp, chịu đựng giỏi",
   "BRISK": "nhanh nhẹn, sảng khoái",
   "SCAMP": "đứa trẻ tinh nghịch; làm ẩu",
   "TROUT": "cá hồi vân",
   "SWAMP": "đầm lầy; ngập lụt",
   "PIVOT": "trục xoay; điểm then chốt",
   "LUNGE": "lao tới, đâm tới",
   "CRAVE": "thèm muốn, khao khát",
   "SMEAR": "bôi, trát; bôi nhọ",
   "BROOD": "ủ ấp; nghĩ ngợi buồn rầu",
   "CLEFT": "khe nứt, chỗ tách đôi",
   "ENVOY": "đặc phái viên, sứ giả",
   "FLUTE": "sáo (nhạc cụ); rãnh cột",
   "GUILE": "sự xảo quyệt, mánh khóe",
   "INEPT": "vụng về, không có năng lực",
   "LAPEL": "ve áo",
   "NUDGE": "huých nhẹ, thúc giục nhẹ",
   "PLEAT": "nếp gấp (vải), ly quần",
   "RASPY": "khàn khàn, thô ráp",
   "TABBY": "mèo vằn; vải taffeta",
   "WHACK": "đánh mạnh, vụt",
   "BIRCH": "cây bạch dương",
   "CLOVE": "đinh hương (gia vị)",
   "DEPOT": "kho hàng; bến xe, ga tàu",
   "ENDOW": "trao tặng, phú cho",
   "FERAL": "hoang dã, không thuần hóa",
   "GUSTO": "sự hăng hái, thích thú",
   "HUSKY": "khàn giọng; chó Husky; khỏe mạnh",
   "INLAY": "khảm, cẩn (trang trí)",
   "LIBEL": "vu khống bằng văn bản",
   "MUSTY": "mốc, ẩm mốc, hôi mùi cũ",
   "NIFTY": "khéo léo, tiện ích, ngầu",
   "OTTER": "con rái cá",
   "PIQUE": "tự ái, bực bội; kích thích tò mò",
   "SCALP": "da đầu; lột da đầu",
   "ULCER": "vết loét, ổ loét",
   "VEXED": "bực bội, khó chịu",
   "WINDY": "nhiều gió, thổi gió mạnh",
   "BRAWN": "bắp thịt, cơ bắp",
   "CLASP": "cái khóa; nắm chặt, ôm chặt",
   "DOWRY": "của hồi môn",
   "ETHOS": "đặc trưng tinh thần, tinh thần cộng đồng",
   "FORAY": "cuộc đột kích; lấn sang lĩnh vực mới",
   "JUMPY": "dễ giật mình, bồn chồn",
   "KITTY": "mèo con; quỹ chung",
   "LUSTY": "tràn đầy sức sống, mạnh mẽ",
   "NIPPY": "lạnh buốt; nhanh nhẹn",
   "OUTDO": "làm tốt hơn, vượt trội",
   "POUCH": "túi nhỏ, túi kangaroo",
   "SHIRE": "hạt (đơn vị hành chính Anh)",
   "TACIT": "ngầm hiểu, không nói ra",
   "EMBER": "than hồng, tàn lửa",
   "GROVE": "rừng cây nhỏ, vườn cây",
   "SWIRL": "xoáy, xoay vòng",
   "FLORA": "hệ thực vật",
   "SIREN": "còi báo động; nàng tiên cá cám dỗ",
   "CREST": "đỉnh sóng; huy hiệu; mào",
   "TROVE": "kho báu, kho tàng",
   "SPIRE": "tháp nhọn nhà thờ",
   "CAULK": "trám kín khe hở",
   "BLAND": "nhạt nhẽo, vô vị",
   "AFOOT": "đang diễn ra, đang tiến hành",
   "STOMP": "giậm chân mạnh",
   "CLING": "bám chặt, ôm chặt",
   "CLOUT": "ảnh hưởng, quyền lực; đánh mạnh",
   "PLUMB": "dây dọi; thẳng đứng; thăm dò",
   "SCOFF": "chế nhạo, nhạo báng",
   "SCOLD": "mắng mỏ, la rầy",
   "STILT": "cà kheo; cột chống",
   "SWOON": "ngất xỉu; mê mẩn",
   "SMITE": "đánh mạnh; làm say mê",
   "SPUNK": "tinh thần dũng cảm; gan dạ",
   "SNOUT": "mõm (thú vật)",
   "STOKE": "thêm than lửa; kích động",
   "SKIMP": "tiết kiệm quá mức, làm ẩu",
   "SLUNG": "ném (quá khứ của sling)",
   "STRUT": "đi vênh vang; thanh chống",
   "SMOKY": "đầy khói, mùi khói",
   "SNIFF": "hít hơi, ngửi; coi thường",
   "STIFF": "cứng, cứng nhắc; khó khăn",
   "SCANT": "thiếu, không đủ, ít ỏi",
   "SHEEN": "độ bóng sáng, ánh sáng mờ",
   "SWEPT": "đã quét (quá khứ của sweep)",
   "SNEAK": "lén lút; kẻ hèn nhát",
   "SKUNK": "con chồn hôi",
   "SLUMP": "sụt giảm mạnh; ngồi thụp xuống",
   "SPORE": "bào tử (thực vật)",
   "STRAY": "lạc đường; vật nuôi lạc",
   "STUNT": "màn nhào lộn nguy hiểm; kìm hãm tăng trưởng",
   "GRUFF": "cộc lốc, giọng trầm thô",
   "GROAN": "rên rỉ, kêu rên",
   "GLOAT": "đắc ý, hả hê",
   "GNASH": "nghiến răng",
   "GAUDY": "loè loẹt, sặc sỡ quá mức",
   "GAUZE": "vải gạc, vải mỏng",
   "GLEAN": "thu thập dần dần, mót lúa",
   "GUPPY": "cá bảy màu",
   "GUAVA": "quả ổi",
   "PIXEL": "điểm ảnh (màn hình)",
   "PLANK": "tấm ván gỗ",
   "PLAZA": "quảng trường, khu mua sắm",
   "PLUSH": "sang trọng; nhung mềm",
   "POKER": "que khều lửa; bài poker",
   "POLKA": "điệu nhảy polka",
   "POLYP": "con sứa san hô; u polyp",
   "POPPY": "hoa anh túc",
   "PORCH": "hiên nhà, mái hiên",
   "POUTY": "phụng phịu, chu môi",
   "PRIMP": "chải chuốt, chỉnh sửa vẻ ngoài",
   "PUDGY": "mũm mĩm, mập tròn",
   "LYMPH": "bạch huyết",
   "LYRIC": "lời bài hát; trữ tình",
   "MAXIM": "châm ngôn, phương châm",
   "MAUVE": "màu tím nhạt",
   "MEALY": "bột bột, mịn như bột",
   "MELEE": "hỗn chiến, đám đông hỗn loạn",
   "MERCY": "lòng thương xót, sự tha thứ",
   "MESSY": "lộn xộn, bừa bãi",
   "MILKY": "trắng sữa, có sữa",
   "MINCE": "băm nhỏ; đi bước nhỏ",
   "MOCHA": "cà phê mocha; màu nâu đậm",
   "MOGUL": "ông trùm, người quyền lực",
   "MOLDY": "bị mốc, ẩm mốc",
   "MONEY": "tiền bạc",
   "MONTH": "tháng",
   "MOODY": "hay thay đổi tâm trạng, u uất",
   "MOTTO": "khẩu hiệu, phương châm sống",
   "MUDDY": "bùn lầy, đục ngầu",
   "MULCH": "lớp phủ đất (rơm, lá cây)",
   "MURKY": "tối tăm, đục ngầu, bí ẩn",
   "MUSHY": "nhũn ra, ủy mị",
   "NAVEL": "rốn; tâm điểm",
   "NEEDY": "nghèo túng, thiếu thốn",
   "NINNY": "người ngốc nghếch",
   "NOISY": "ồn ào, náo động",
   "NOMAD": "người du mục",
   "NOVEL": "tiểu thuyết; mới lạ",
   "UNZIP": "kéo khóa kéo ra; giải nén file",
   "USURP": "cướp quyền, chiếm đoạt",
   "UNWED": "chưa kết hôn, độc thân",
   "UNIFY": "thống nhất, hợp nhất",
   "UNFED": "chưa được cho ăn",
   "UMBRA": "bóng tối hoàn toàn (thiên văn)",
   "TWIRL": "xoay vòng, quay tròn",
   "TWEED": "vải tweed (len thô)",
   "TWEET": "tiếng chim hót; tweet mạng xã hội",
   "TRYST": "cuộc hẹn hò bí mật",
   "TRUCE": "lệnh ngừng bắn, đình chiến",
   "TRICE": "chớp mắt, thoáng chốc",
   "TRIAD": "bộ ba, tam vị nhất thể",
   "TRICK": "mánh lừa, trò đùa; ảo thuật",
   "TRIED": "đã thử; được thử thách",
   "TRILL": "âm thanh rung; tiếng chim líu lo",
   "THYME": "cây xạ hương (gia vị)",
   "TIARA": "vương miện nhỏ",
   "TIDAL": "thuộc về thủy triều",
   "TIMID": "nhút nhát, rụt rè",
   "TIPSY": "hơi say, ngà say",
   "TITAN": "người khổng lồ; nhân vật vĩ đại",
   "TOADY": "kẻ nịnh hót, nịnh bợ",
   "TOPAZ": "đá topaz (đá quý)",
   "TOXIC": "độc hại",
   "TRACE": "dấu vết; vẽ theo; truy tìm",
   "TRACK": "đường ray; theo dõi; bản nhạc",
   "TRADE": "thương mại, trao đổi",
   "TRAIL": "đường mòn; dấu vết; theo sau",
   "PHONE": "điện thoại",
   "PILOT": "phi công; thí điểm",
   "NAIVE": "ngây thơ, cả tin",
   // ── IELTS vocab ──
   "ADAPT": "thích nghi, điều chỉnh",
   "ASSET": "tài sản, lợi thế",
   "AWARE": "nhận thức được, biết rõ",
   "BASIC": "cơ bản, căn bản",
   "BRIEF": "ngắn gọn; tóm tắt; quần lót",
   "CAUSE": "nguyên nhân; gây ra",
   "CIVIC": "thuộc về công dân, dân sự",
   "FOCUS": "tập trung; tiêu điểm",
   "HABIT": "thói quen",
   "ISSUE": "vấn đề; số phát hành; phát ra",
   "LOGIC": "logic, lý luận",
   "MAJOR": "chuyên ngành; lớn; thiếu tá",
   "MEDIA": "phương tiện truyền thông",
   "MINOR": "nhỏ, thứ yếu; vị thành niên",
   "MORAL": "đạo đức; bài học đạo đức",
   "OFFER": "đề nghị, cung cấp",
   "PHASE": "giai đoạn, pha",
   "PROOF": "bằng chứng; chống thấm",
   "QUERY": "câu hỏi, thắc mắc",
   "RANGE": "phạm vi; dãy núi; bếp lò",
   "ROUTE": "tuyến đường, lộ trình",
   "SCALE": "quy mô; cân; vảy cá; leo trèo",
   "SCENE": "cảnh, hiện trường; cảnh phim",
   "SHIFT": "ca làm việc; thay đổi; dịch chuyển",
   "SKILL": "kỹ năng, tay nghề",
   "SOLVE": "giải quyết, giải (bài toán)",
   "STAGE": "sân khấu; giai đoạn; tổ chức",
   "THEME": "chủ đề",
   "TOPIC": "chủ đề, đề tài",
   "TOTAL": "tổng cộng; hoàn toàn",
   "TREND": "xu hướng",
   "UNION": "liên minh; công đoàn",
   "URBAN": "đô thị, thành thị",
   "VALUE": "giá trị; định giá",
   "VITAL": "thiết yếu, sống còn",
   "YOUTH": "tuổi trẻ; thanh niên",
   "ABOVE": "ở trên, hơn",
   "ACUTE": "cấp tính; sắc bén; góc nhọn",
   "ADULT": "người lớn, trưởng thành",
   "ALERT": "cảnh báo; tỉnh táo; cảnh giác",
   "ALLOW": "cho phép",
   "APPLY": "nộp đơn; áp dụng; thoa (kem)",
   "ARGUE": "tranh luận, lập luận",
   "ARISE": "nảy sinh, xuất hiện",
   "AVOID": "tránh, né tránh",
   "AWAIT": "chờ đợi",
   "BELOW": "ở dưới, thấp hơn",
   "BLAME": "đổ lỗi, trách móc",
   "BOOST": "tăng cường, đẩy mạnh",
   "BROAD": "rộng lớn, bao quát",
   "BUILD": "xây dựng",
   "BURST": "nổ tung, vỡ tung",
   "CATCH": "bắt được; vụ thu hoạch",
   "CHAIN": "xích; chuỗi; dây chuyền",
   "CHIEF": "trưởng, thủ lĩnh; chính yếu",
   "CLAIM": "tuyên bố; khiếu nại; đòi",
   "CLEAR": "rõ ràng; trong sáng; xóa",
   "CLIMB": "leo trèo, trèo lên",
   "CLOSE": "đóng lại; gần; kết thúc",
   "COUNT": "đếm; bá tước; tính đến",
   "COURT": "tòa án; sân (thể thao); tán tỉnh",
   "COVER": "bìa sách; che phủ; đề cập",
   "CRAZY": "điên rồ, cực kỳ",
   "CREAM": "kem; màu kem; tinh hoa",
   "CRIME": "tội phạm, tội ác",
   "CROSS": "chữ thập; tức giận; băng qua",
   "CROWD": "đám đông",
   "CROWN": "vương miện; đỉnh đầu",
   "CRUDE": "thô, chưa tinh chế; thô tục",
   "CRUEL": "tàn nhẫn, độc ác",
   "CYCLE": "chu kỳ; xe đạp",
   "DAILY": "hàng ngày",
   "DELAY": "sự chậm trễ; trì hoãn",
   "DEPTH": "chiều sâu",
   "DOUBT": "nghi ngờ, hoài nghi",
   "DREAM": "giấc mơ; mơ ước",
   "DRIVE": "lái xe; động lực; ổ đĩa",
   "EARLY": "sớm, đầu tiên",
   "EARTH": "trái đất; đất",
   "EIGHT": "số tám",
   "EMPTY": "trống rỗng; làm trống",
   "ENEMY": "kẻ thù",
   "ENJOY": "thưởng thức, tận hưởng",
   "EQUAL": "bằng nhau; bình đẳng",
   "ERROR": "lỗi, sai sót",
   "EVENT": "sự kiện",
   "EXACT": "chính xác",
   "EXIST": "tồn tại",
   "EXTRA": "thêm, phụ; diễn viên phụ",
   "FAITH": "đức tin; niềm tin",
   "FAULT": "lỗi; sai lầm; đứt gãy địa chất",
   "FIFTH": "thứ năm; một phần năm",
   "FIGHT": "chiến đấu, đánh nhau",
   "FINAL": "cuối cùng; trận chung kết",
   "FIRST": "đầu tiên",
   "FLESH": "thịt (cơ thể); da thịt",
   "FLOOD": "lũ lụt",
   "FLOOR": "sàn nhà; tầng",
   "FLUID": "chất lỏng; linh hoạt",
   "FORCE": "lực; bắt buộc",
   "FORTH": "về phía trước",
   "FORTY": "số bốn mươi",
   "FOUND": "tìm thấy; thành lập",
   "FRAME": "khung; đóng khung; dàn dựng",
   "FRESH": "tươi; mới mẻ",
   "FRONT": "mặt trước; mặt trận",
   "FROST": "băng giá; sương giá",
   "FRUIT": "trái cây; kết quả",
   "GIANT": "người khổng lồ; khổng lồ",
   "GIVEN": "cho trước; đã cho; chiếu theo",
   "GLASS": "kính; ly thủy tinh",
   "GLOBE": "địa cầu; quả cầu",
   "GRACE": "ân sủng; duyên dáng; ban phúc",
   "GRADE": "điểm số; cấp độ; phân loại",
   "GRAIN": "ngũ cốc; hạt; thớ gỗ",
   "GRAND": "hoành tráng; đại; vĩ đại",
   "GRANT": "cấp phép; học bổng; thừa nhận",
   "GRASP": "nắm chặt; lĩnh hội",
   "GRAVE": "ngôi mộ; nghiêm trọng",
   "GREAT": "vĩ đại; tuyệt vời",
   "GREEN": "màu xanh lá; chưa chín; thân thiện môi trường",
   "GRIEF": "nỗi đau buồn, tang thương",
   "GRILL": "vỉ nướng; nướng; thẩm vấn",
   "GROSS": "tổng; ghê tởm; thô thiển",
   "GROUP": "nhóm",
   "GROWN": "đã trưởng thành; đã lớn",
   "GUARD": "bảo vệ; lính gác",
   "GUESS": "đoán",
   "GUEST": "khách",
   "GUIDE": "hướng dẫn viên; chỉ dẫn",
   "GUILT": "cảm giác tội lỗi",
   "HEART": "trái tim",
   "HEAVY": "nặng nề",
   "HENCE": "vì vậy, do đó",
   "HONEY": "mật ong; người yêu (cưng)",
   "HONOR": "danh dự; tôn vinh",
   "HORSE": "con ngựa",
   "HOUSE": "ngôi nhà; chứa; Hạ viện",
   "HUMAN": "con người; nhân loại",
   "HUMOR": "hài hước; thể dịch cơ thể",
   "IMAGE": "hình ảnh",
   "INNER": "bên trong, nội tâm",
   "IRONY": "sự mỉa mai; điều trái khoáy",
   "JOINT": "khớp xương; cùng nhau",
   "JUDGE": "thẩm phán; phán xét",
   "KNOCK": "gõ cửa; đánh",
   "LABEL": "nhãn dán; dán nhãn",
   "LARGE": "lớn, to",
   "LATER": "sau đó, muộn hơn",
   "LAUGH": "cười",
   "LAYER": "lớp; tầng lớp",
   "LEARN": "học hỏi",
   "LEAST": "ít nhất",
   "LEAVE": "rời đi; kỳ nghỉ; để lại",
   "LEGAL": "hợp pháp; pháp lý",
   "LEVEL": "mức độ; bằng phẳng; tầng",
   "LIMIT": "giới hạn",
   "LOCAL": "địa phương; người địa phương",
   "LOOSE": "lỏng lẻo; thả ra",
   "LOWER": "thấp hơn; hạ xuống",
   "LUCKY": "may mắn",
   "MAKER": "người tạo ra, nhà sản xuất",
   "MATCH": "trận đấu; diêm; hợp với",
   "MAYBE": "có thể, có lẽ",
   "MEANT": "có nghĩa là; dự định",
   "MERIT": "công lao; xứng đáng",
   "MERRY": "vui vẻ, hân hoan",
   "METAL": "kim loại",
   "MIGHT": "có thể; sức mạnh",
   "MIXED": "pha trộn; hỗn hợp",
   "MODEL": "mô hình; người mẫu",
   "MORAL": "đạo đức",
   "MOTOR": "động cơ; lái xe",
   "MOUNT": "leo lên; núi; gắn lên",
   "MOUSE": "con chuột; chuột máy tính",
   "MOUTH": "miệng",
   "MOVIE": "bộ phim",
   "MUSIC": "âm nhạc",
   "NEVER": "không bao giờ",
   "NOBLE": "cao quý; quý tộc",
   "NOISE": "tiếng ồn",
   "NORTH": "phía bắc",
   "NURSE": "y tá; điều dưỡng; chăm sóc",
   "OFTEN": "thường xuyên",
   "ORDER": "trật tự; đặt hàng; mệnh lệnh",
   "OTHER": "khác, cái khác",
   "OUTER": "bên ngoài, ngoại",
   "OWNER": "chủ sở hữu",
   "PAINT": "sơn; vẽ tranh",
   "PAPER": "giấy; báo; bài luận",
   "PARTY": "bữa tiệc; đảng phái",
   "PEACE": "hòa bình",
   "PIECE": "mảnh; tác phẩm",
   "PLACE": "nơi chốn; đặt vào",
   "PLAIN": "đồng bằng; rõ ràng; đơn giản",
   "PLANE": "máy bay; mặt phẳng",
   "PLATE": "đĩa; tấm kim loại",
   "POINT": "điểm; mũi nhọn; chỉ vào",
   "POWER": "quyền lực; năng lượng",
   "PRESS": "báo chí; nhấn; ép",
   "PRICE": "giá cả",
   "PRINT": "in; dấu in; bản in",
   "PRIOR": "trước đó; tu sĩ",
   "PRIZE": "giải thưởng; trân trọng",
   "PROUD": "tự hào",
   "PROVE": "chứng minh",
   "PULSE": "mạch đập; nhịp; cây họ đậu",
   "PUNCH": "đấm; cú đấm; nước punch",
   "QUICK": "nhanh chóng",
   "QUIET": "yên tĩnh; im lặng",
   "QUITE": "khá, hoàn toàn",
   "QUOTE": "trích dẫn; báo giá",
   "RADIO": "đài phát thanh",
   "RAISE": "nâng lên; tăng; nuôi dưỡng",
   "RAPID": "nhanh chóng",
   "REACH": "với tới; đạt đến",
   "REACT": "phản ứng",
   "READY": "sẵn sàng",
   "REALM": "vương quốc; lĩnh vực",
   "REBEL": "nổi loạn; kẻ phản loạn",
   "RENEW": "đổi mới; gia hạn",
   "REPLY": "trả lời",
   "RESET": "đặt lại, khởi động lại",
   "RHYME": "vần thơ; hiệp vần",
   "RIDER": "người cưỡi ngựa; điều khoản phụ",
   "RIGHT": "đúng; phải (chiều); quyền",
   "RIGID": "cứng nhắc; nghiêm ngặt",
   "RISEN": "đã mọc lên; đã nổi dậy",
   "ROAST": "nướng; rang; chế nhạo",
   "ROUGH": "thô ráp; gồ ghề",
   "ROUND": "tròn; vòng; xung quanh",
   "ROYAL": "hoàng gia; vương giả",
   "RURAL": "nông thôn, miền quê",
   "SCOPE": "phạm vi; kính viễn vọng",
   "SCORE": "điểm số; ghi điểm",
   "SEIZE": "chiếm lấy; nắm lấy",
   "SENSE": "giác quan; ý nghĩa; cảm nhận",
   "SERVE": "phục vụ; giao bóng",
   "SEVEN": "số bảy",
   "SHAPE": "hình dạng; định hình",
   "SHARE": "chia sẻ; cổ phần",
   "SHARP": "sắc bén; nhọn; tinh tế",
   "SHEEP": "con cừu",
   "SHELF": "kệ sách, ngăn kệ",
   "SHELL": "vỏ sò; đạn pháo; vỏ bọc",
   "SHINE": "tỏa sáng; đánh bóng",
   "SHOCK": "cú sốc; gây sốc; điện giật",
   "SHORE": "bờ biển",
   "SHORT": "ngắn; thiếu",
   "SHOUT": "hét lên, la to",
   "SHOWN": "đã cho thấy",
   "SIGHT": "thị giác; cảnh vật; ngắm",
   "SIXTH": "thứ sáu",
   "SLACK": "chùng; lơ là; than củi",
   "SLEEP": "ngủ; giấc ngủ",
   "SLICE": "lát cắt; cắt lát",
   "SLIDE": "trượt; cầu trượt; slide bài",
   "SMALL": "nhỏ bé",
   "SMART": "thông minh; đau nhói; ăn mặc lịch sự",
   "SMELL": "mùi; ngửi",
   "SMILE": "nụ cười; mỉm cười",
   "SMOKE": "khói; hút thuốc",
   "SNEAK": "lén lút; đôi giày sneaker",
   "SOLID": "chắc chắn; vững chắc; chất rắn",
   "SORRY": "xin lỗi; tiếc",
   "SOUND": "âm thanh; lành mạnh; ngủ say",
   "SOUTH": "phía nam",
   "SPACE": "không gian; khoảng trống",
   "SPARE": "dự phòng; tha; rảnh rỗi",
   "SPEAK": "nói chuyện",
   "SPEAR": "cái giáo; đâm bằng giáo",
   "SPEED": "tốc độ; tăng tốc",
   "SPELL": "đánh vần; thời gian; bùa phép",
   "SPEND": "chi tiêu; dành thời gian",
   "SPICE": "gia vị; thêm hương vị",
   "SPILL": "đổ tràn; tiết lộ",
   "SPINE": "cột sống; gai; gáy sách",
   "SPITE": "ác ý; bất chấp",
   "SPOIL": "làm hỏng; cướp bóc",
   "SPOKE": "đã nói",
   "SPORT": "thể thao",
   "SPRAY": "tia nước; xịt; bình xịt",
   "STAGE": "sân khấu; giai đoạn",
   "STAIN": "vết bẩn; làm bẩn",
   "STAKE": "cọc; cược; cổ phần",
   "STALE": "cũ; ôi thiu; nhàm chán",
   "STALL": "gian hàng; đình chệ; chuồng",
   "STAMP": "tem thư; đóng dấu; giậm chân",
   "STAND": "đứng; chịu đựng; quầy",
   "STARE": "nhìn chằm chằm",
   "START": "bắt đầu; khởi động",
   "STATE": "trạng thái; bang; phát biểu",
   "STEAM": "hơi nước; bốc hơi",
   "STEEL": "thép; ý chí kiên cường",
   "STEEP": "dốc đứng; ngâm; đắt",
   "STEER": "lái; điều hướng; bò đực thiến",
   "STERN": "nghiêm khắc; đuôi tàu",
   "STICK": "cái gậy; dán; bám",
   "STOCK": "hàng tồn kho; cổ phiếu; canh hầm",
   "STONE": "đá; ném đá; hạt (quả)",
   "STORE": "cửa hàng; lưu trữ",
   "STORY": "câu chuyện; tầng nhà",
   "STOUT": "mập; dũng cảm; bia đen",
   "STOVE": "bếp lò",
   "STUCK": "mắc kẹt",
   "STUDY": "học tập; nghiên cứu; phòng đọc sách",
   "STUFF": "đồ đạc; nhồi; chất liệu",
   "STYLE": "phong cách; kiểu",
   "SUGAR": "đường",
   "SUITE": "dãy phòng; bộ đồ nội thất",
   "SUPER": "siêu; tuyệt vời",
   "SWEET": "ngọt ngào; kẹo",
   "SWIFT": "nhanh như chớp; chim yến",
   "SWING": "xích đu; đu đưa; làn sóng",
   "SWIPE": "vuốt (điện thoại); đánh ngang",
   "TABLE": "bàn; bảng; trình bày",
   "TASTE": "vị giác; hương vị; thưởng thức",
   "TEACH": "dạy học",
   "TEMPO": "nhịp độ, tốc độ (nhạc)",
   "TENSE": "thì (ngữ pháp); căng thẳng",
   "THANK": "cảm ơn",
   "THEME": "chủ đề",
   "THICK": "dày; đặc; ngu",
   "THIEF": "tên trộm",
   "THIRD": "thứ ba",
   "THREE": "số ba",
   "THROW": "ném; cú ném",
   "THUMB": "ngón tay cái",
   "TIGER": "con hổ",
   "TIGHT": "chật; căng; keo kiệt",
   "TIMER": "đồng hồ bấm giờ",
   "TIRED": "mệt mỏi",
   "TITLE": "tiêu đề; chức danh; chức vô địch",
   "TODAY": "hôm nay",
   "TOKEN": "biểu tượng; xu; mã thông báo",
   "TOUCH": "chạm vào; cảm xúc; liên lạc",
   "TOUGH": "cứng rắn; khó khăn; dai",
   "TOWER": "tháp; cao vút",
   "TRAIN": "tàu hỏa; huấn luyện",
   "TREAT": "thết đãi; điều trị; coi như",
   "TRIAL": "phiên tòa; thử nghiệm",
   "TRIBE": "bộ lạc",
   "TRULY": "thật sự, thực sự",
   "TRUST": "tin tưởng; lòng tin",
   "TRUTH": "sự thật",
   "TWICE": "hai lần",
   "TWIST": "vặn xoắn; bước ngoặt",
   "UNCLE": "chú, bác, cậu, dượng",
   "UNDER": "ở dưới; chưa đủ",
   "UPPER": "trên; phần trên; kích thích",
   "USAGE": "cách dùng; sử dụng",
   "USUAL": "thông thường, bình thường",
   "UTTER": "hoàn toàn; thốt ra",
   "VIDEO": "video; băng hình",
   "VIRUS": "vi-rút",
   "VISIT": "thăm viếng",
   "VOICE": "giọng nói; tiếng nói",
   "VOTER": "cử tri",
   "WATER": "nước; tưới nước",
   "WHEAT": "lúa mì",
   "WHILE": "trong khi; một lúc",
   "WHITE": "màu trắng",
   "WHOLE": "toàn bộ; nguyên vẹn",
   "WOMAN": "người phụ nữ",
   "WORLD": "thế giới",
   "WORRY": "lo lắng",
   "WORSE": "tệ hơn",
   "WORST": "tệ nhất",
   "WORTH": "giá trị; xứng đáng",
   "WOULD": "sẽ (điều kiện); đã từng",
   "WOUND": "vết thương; làm bị thương",
   "WRITE": "viết",
   "WRONG": "sai; điều sai",
   "YOUNG": "trẻ tuổi",
   "ZONAL": "thuộc về vùng, khu vực",
};

// ── Show VN meaning (instant lookup) ─────────────
function showVNMeaning(word) {
   const card    = document.getElementById("meaningCard");
   const wordEl  = document.getElementById("meaningWordEn");
   const textEl  = document.getElementById("meaningText");
   const meaning = VN_MEANINGS[word];
   wordEl.textContent = word;
   textEl.textContent = meaning || "—";
   card.style.display = "flex";
}

// ── Result Modal ──────────────────────────────────
function showResultModal(won, guessCount) {
   const stats = getTotalStats();
   const playsLeft = MAX_PLAYS_PER_DAY - getPlaysToday();
   const winMsgs = t("winMsgs");

   document.getElementById("resultEmoji").textContent = won ? "🎉" : "😔";
   document.getElementById("resultTitle").textContent = won
      ? winMsgs[Math.min(guessCount - 1, winMsgs.length - 1)]
      : t("loseMsg");
   document.getElementById("resultWord").textContent = won
      ? t("resultGuesses", guessCount)
      : t("resultAnswer", state.targetWord);

   document.getElementById("resultStats").innerHTML = `
      <div class="stat-box"><div class="stat-num">${stats.played}</div><div class="stat-lbl">${t("statPlayed")}</div></div>
      <div class="stat-box"><div class="stat-num">${stats.wins}</div><div class="stat-lbl">${t("statWins")}</div></div>
      <div class="stat-box"><div class="stat-num">${stats.streak}</div><div class="stat-lbl">${t("statStreak")}</div></div>
      <div class="stat-box"><div class="stat-num">${stats.bestStreak}</div><div class="stat-lbl">${t("statBest")}</div></div>
   `;

   const nextBtn = document.getElementById("nextGameBtn");
   if (playsLeft <= 0) {
      nextBtn.disabled = true;
      nextBtn.textContent = t("noPlaysBtn");
      document.getElementById("resultPlaysLeft").textContent = t("noPlaysInfo");
   } else {
      nextBtn.disabled = false;
      nextBtn.textContent = t("nextGameBtn", playsLeft);
      document.getElementById("resultPlaysLeft").textContent = t("playsLeftInfo", playsLeft);
   }

   document.getElementById("resultModal").classList.remove("hidden");

   // Show VN meaning
   showVNMeaning(state.targetWord);
}

// ── New Game ──────────────────────────────────────
function startNewGame() {
   const playsUsed = getPlaysToday();
   if (playsUsed >= MAX_PLAYS_PER_DAY) {
      document.getElementById("gameArea").classList.add("hidden");
      document.getElementById("noPlaysScreen").classList.remove("hidden");
      startCountdown();
      updatePlaysDisplay();
      return;
   }

   // Pick random answer
   state.targetWord = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
   state.guesses = []; state.currentGuess = "";
   state.gameOver = false; state.row = 0; state.letterStates = {};

   buildGrid();
   buildKeyboard();
   highlightRow(0);
   showMessage("", "", 0);

   document.getElementById("gameArea").classList.remove("hidden");
   document.getElementById("noPlaysScreen").classList.add("hidden");
}

// ── Init ──────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
   document.getElementById("helpBtn").addEventListener("click", () => {
      document.getElementById("helpModal").classList.remove("hidden");
   });
   document.getElementById("helpClose").addEventListener("click", () => {
      document.getElementById("helpModal").classList.add("hidden");
   });
   document.getElementById("helpModal").addEventListener("click", e => {
      if (e.target === document.getElementById("helpModal"))
         document.getElementById("helpModal").classList.add("hidden");
   });

   document.getElementById("nextGameBtn").addEventListener("click", () => {
      document.getElementById("resultModal").classList.add("hidden");
      startNewGame();
   });
   document.getElementById("resultMenuBtn").addEventListener("click", () => {
      try { window.close(); } catch {}
      window.location.href = "index.html";
   });

   // Language toggle
   document.getElementById("langBtn").addEventListener("click", toggleLanguage);

   // Apply saved language on load
   applyLanguage();
   updatePlaysDisplay();
   startNewGame();
});