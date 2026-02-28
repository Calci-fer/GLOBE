const AFRICA_COUNTRIES = [
     {
          name: "Algeria", code: "dz", continent: "Africa", capital: "Algiers", population: "45M", area: "2,381,741 km²",
          languages: ["Arabic", "Tamazight", "French"], currency: "Algerian Dinar",
          people: "Berber-Arab mix; Berbers (Amazigh) are the indigenous people; Arab-Berber majority",
          culture: "A blend of Berber, Arab, and Mediterranean cultures; famous for Rai music, intricate tilework, and traditional hammams.",
          tourist_spots: ["Sahara Desert", "Timgad Roman ruins", "Casbah of Algiers", "Tassili n'Ajjer", "Ghardaïa"],
          uniqueness: "Home to the largest country in Africa and one of the world's largest deserts.",
          fun_facts: ["Algeria occupies 7% of Africa's total area.", "Tassili n'Ajjer has over 15,000 prehistoric rock engravings."],
          photo_query: "algeria sahara desert"
     },
     {
          name: "Angola", code: "ao", continent: "Africa", capital: "Luanda", population: "35M", area: "1,246,700 km²",
          languages: ["Portuguese", "Umbundu", "Kimbundu"], currency: "Kwanza",
          people: "Ovimbundu, Kimbundu, Bakongo, and other Bantu groups",
          culture: "Rich tradition of Samba de roda music, Semba dance (ancestor of Samba), vibrant verbal storytelling.",
          tourist_spots: ["Kalandula Falls", "Tundavala Fissure", "Kissama National Park", "Benguela Coast", "Luanda Bay"],
          uniqueness: "Birthplace of Semba music, ancestor of Brazilian Samba.",
          fun_facts: ["Angola has one of Africa's largest oil reserves.", "Kalandula Falls is among Africa's largest by volume."],
          photo_query: "angola kalandula falls"
     },
     {
          name: "Benin", code: "bj", continent: "Africa", capital: "Porto-Novo", population: "13M", area: "112,622 km²",
          languages: ["French", "Fon", "Yoruba"], currency: "West African CFA franc",
          people: "Fon, Adja, Yoruba, Bariba ethnicities",
          culture: "Birthplace of Vodun (Voodoo) religion; renowned for brass and bronze artworks from ancient Dahomey Kingdom.",
          tourist_spots: ["Royal Palaces of Abomey", "Pendjari National Park", "Ganvié lake village", "Ouidah slave port", "Cotonou Beach"],
          uniqueness: "Birthplace of Vodun (Voodoo), which spread globally through the slave trade.",
          fun_facts: ["Ganvié is a village built entirely on stilts over a lake.", "Benin's ancient Dahomey Kingdom had a unique all-female warrior unit called the Agojie."],
          photo_query: "benin africa dahomey"
     },
     {
          name: "Botswana", code: "bw", continent: "Africa", capital: "Gaborone", population: "2.6M", area: "581,730 km²",
          languages: ["Setswana", "English"], currency: "Botswana Pula",
          people: "Tswana, Kalanga, Basarwa (San), Kgalagadi",
          culture: "Famous for the San people's ancient click languages and rock paintings; cattle-herding central to culture.",
          tourist_spots: ["Okavango Delta", "Chobe National Park", "Central Kalahari Game Reserve", "Makgadikgadi Pans", "Tsodilo Hills"],
          uniqueness: "Okavango Delta is the world's largest inland delta — a UNESCO World Heritage Site.",
          fun_facts: ["Botswana went from one of the world's poorest to middle-income within decades.", "The Kalahari covers 70% of Botswana's land."],
          photo_query: "botswana okavango delta elephants"
     },
     {
          name: "Burkina Faso", code: "bf", continent: "Africa", capital: "Ouagadougou", population: "22M", area: "274,200 km²",
          languages: ["French", "Mooré", "Dioula"], currency: "West African CFA franc",
          people: "Mossi (majority), Fulani, Lobi, Bobo, Mande",
          culture: "Renowned for wooden masks and ritual dances; hosts FESPACO, Africa's largest film festival.",
          tourist_spots: ["Sindou Peaks", "Laongo Sculpture Symposium", "Ruins of Loropéni", "Banfora Waterfalls", "W National Park"],
          uniqueness: "Hosts FESPACO, Africa's most prestigious film festival, every two years.",
          fun_facts: ["Name means 'Land of Upright People'.", "The Mossi kingdoms have existed for over 600 years."],
          photo_query: "burkina faso sindou peaks"
     },
     {
          name: "Burundi", code: "bi", continent: "Africa", capital: "Gitega", population: "13M", area: "27,830 km²",
          languages: ["Kirundi", "French", "English"], currency: "Burundian Franc",
          people: "Hutu (majority), Tutsi, Twa",
          culture: "Famous for royal Ingoma drummers — Burundian drumming is UNESCO intangible heritage.",
          tourist_spots: ["Lake Tanganyika", "Kibira National Park", "Source of the Nile", "Gitega National Museum", "Rusizi Delta"],
          uniqueness: "Home to the source of the Nile River; royal drumming is a living cultural treasure.",
          fun_facts: ["Lake Tanganyika is the world's second deepest lake.", "Burundian royal drums are played only by specialists."],
          photo_query: "burundi lake tanganyika"
     },
     {
          name: "Cabo Verde", code: "cv", continent: "Africa", capital: "Praia", population: "600K", area: "4,033 km²",
          languages: ["Portuguese", "Cape Verdean Creole"], currency: "Cape Verdean Escudo",
          people: "Creole (mestiço), African, European descent",
          culture: "Morna music (UNESCO heritage), vibrant Creole culture blending African and Portuguese influences.",
          tourist_spots: ["Pico do Fogo Volcano", "Santa Maria Beach", "São Vicente Island", "Tarrafal Prison", "Mindelo Carnival"],
          uniqueness: "Birthplace of Morna, a melancholic musical genre related to the Portuguese Fado.",
          fun_facts: ["Cabo Verde is an archipelago of 10 islands in the Atlantic.", "Singer Cesária Évora put Cabo Verde on the world music map."],
          photo_query: "cabo verde beach volcanic island"
     },
     {
          name: "Cameroon", code: "cm", continent: "Africa", capital: "Yaoundé", population: "29M", area: "475,442 km²",
          languages: ["French", "English"], currency: "Central African CFA franc",
          people: "Over 200 ethnic groups: Bamileke, Fulani, Bassa, Beti, Baka Pygmies",
          culture: "Known as 'Africa in Miniature'; extraordinary linguistic diversity; famous for Makossa music.",
          tourist_spots: ["Mount Cameroon", "Waza National Park", "Kribi Beach", "Dja Faunal Reserve", "Ring Road"],
          uniqueness: "Called 'Africa in Miniature' for its extraordinary diversity of landscapes and cultures.",
          fun_facts: ["Cameroon has 280+ languages — more per capita than most African countries.", "Mount Cameroon is West Africa's highest peak at 4,095 m."],
          photo_query: "cameroon mount cameroon rainforest"
     },
     {
          name: "Central African Republic", code: "cf", continent: "Africa", capital: "Bangui", population: "5.5M", area: "622,984 km²",
          languages: ["French", "Sango"], currency: "Central African CFA franc",
          people: "Baya, Banda, Mandjia, Sara, Mboum, M'Baka, Yakoma",
          culture: "Rich in forest traditions with the Aka Pygmies known for polyphonic music.",
          tourist_spots: ["Dzanga-Sangha Reserve", "Manovo-Gounda St Floris Park", "Bangui River", "Boali Falls"],
          uniqueness: "Home to the Aka Pygmies, whose polyphonic music is one of the world's oldest musical traditions.",
          fun_facts: ["One of the world's least visited countries.", "The Dzanga-Sangha forest is home to forest elephants and western lowland gorillas."],
          photo_query: "central african republic rainforest gorilla"
     },
     {
          name: "Chad", code: "td", continent: "Africa", capital: "N'Djamena", population: "18M", area: "1,284,000 km²",
          languages: ["French", "Arabic"], currency: "Central African CFA franc",
          people: "Sara, Arab, Mayo-Kebbi, Kanem-Bornu, Ouaddaï (over 200 groups)",
          culture: "Diverse desert and Sahel cultures; Tibesti Mountains homeland of the Tebu people.",
          tourist_spots: ["Lake Chad", "Zakouma National Park", "Tibesti Mountains", "Ennedi Plateau", "N'Djamena Grand Mosque"],
          uniqueness: "Lake Chad was once one of Africa's largest lakes; it has shrunk by 90% due to climate change.",
          fun_facts: ["Chad borders 6 countries.", "The Ennedi Plateau has prehistoric rock art dating back 7,000 years."],
          photo_query: "chad lake chad sahara"
     },
     {
          name: "Comoros", code: "km", continent: "Africa", capital: "Moroni", population: "900K", area: "2,235 km²",
          languages: ["Comorian", "Arabic", "French"], currency: "Comorian Franc",
          people: "Comorian (mixed Bantu, Arab, Malay descent)",
          culture: "Islamic traditions blended with African and Arab customs; ylang-ylang perfume production.",
          tourist_spots: ["Mount Karthala Volcano", "Itsandra Beach", "Mohéli Marine Park", "Chironkamba Village"],
          uniqueness: "One of the world's largest producers of ylang-ylang essential oil used in perfumes like Chanel No. 5.",
          fun_facts: ["Comoros is an archipelago of three main islands.", "It has one of the highest rates of military coups per capita in the world."],
          photo_query: "comoros island beach volcano"
     },
     {
          name: "DR Congo", code: "cd", continent: "Africa", capital: "Kinshasa", population: "100M", area: "2,344,858 km²",
          languages: ["French", "Lingala", "Swahili", "Kikongo", "Tshiluba"], currency: "Congolese Franc",
          people: "Over 200 ethnic groups: Mongo, Luba, Kongo, Mangbetu-Azande",
          culture: "Rumba music (UNESCO heritage), bold Sapeur fashion movement, vibrant Kinshasa art scene.",
          tourist_spots: ["Virunga National Park", "Congo River", "Okapi Wildlife Reserve", "Garamba National Park", "Lola ya Bonobo"],
          uniqueness: "Home to the Congo River (world's deepest river) and more than half of Africa's rainforest.",
          fun_facts: ["DRC is home to the bonobo — our closest cousin alongside chimpanzees.", "Congolese Rumba is UNESCO listed intangible heritage."],
          photo_query: "dr congo virunga gorilla rainforest"
     },
     {
          name: "Republic of Congo", code: "cg", continent: "Africa", capital: "Brazzaville", population: "6M", area: "342,000 km²",
          languages: ["French", "Lingala", "Kituba"], currency: "Central African CFA franc",
          people: "Kongo, Sangha, M'Bochi, Teke",
          culture: "Brazzaville is a major center of Congolese Rumba and jazz; Sapeurs (Society of Ambiance Makers) culture.",
          tourist_spots: ["Odzala-Kokoua National Park", "Congo River", "Loufoulakari Falls", "Lesio-Louna Reserve"],
          uniqueness: "Brazzaville and Kinshasa (DRC) are the world's closest capital cities — separated only by the Congo River.",
          fun_facts: ["The Congo River here is the world's second-largest by discharge.", "Sapeurs dress in flamboyant French fashion as a cultural identity."],
          photo_query: "congo brazzaville river"
     },
     {
          name: "Djibouti", code: "dj", continent: "Africa", capital: "Djibouti", population: "1M", area: "23,200 km²",
          languages: ["French", "Arabic", "Somali", "Afar"], currency: "Djiboutian Franc",
          people: "Somali (Issa clan), Afar",
          culture: "Ancient nomadic traditions; gateway between Africa and Arabia; camel caravans still used in interior.",
          tourist_spots: ["Lake Assal", "Gulf of Tadjoura", "Day Forest National Park", "Ardoukoba Volcano", "Arta Beach"],
          uniqueness: "Lake Assal is Africa's lowest point (−155 m) and one of the world's saltiest lakes.",
          fun_facts: ["Djibouti hosts major US and Chinese military bases simultaneously.", "Lake Assal is 10x saltier than the ocean."],
          photo_query: "djibouti lake assal salt"
     },
     {
          name: "Egypt", code: "eg", continent: "Africa", capital: "Cairo", population: "105M", area: "1,002,450 km²",
          languages: ["Arabic"], currency: "Egyptian Pound",
          people: "Egyptian (Arab-Berber heritage), Nubian, Bedouin, Coptic Christians",
          culture: "One of the world's oldest civilizations (5,000+ years); pharaonic art, Islamic architecture, Sufi music.",
          tourist_spots: ["Pyramids of Giza", "Valley of the Kings", "Luxor Temple", "Abu Simbel", "Karnak Temple", "Red Sea"],
          uniqueness: "Home to the Great Pyramids of Giza — the only surviving Ancient Wonder of the World.",
          fun_facts: ["The Nile flows through Egypt for 1,545 km.", "Ancient Egyptians invented papyrus, the first writing material.", "Cleopatra lived closer in time to the Moon landing than to the building of the pyramids."],
          photo_query: "egypt pyramids giza cairo"
     },
     {
          name: "Equatorial Guinea", code: "gq", continent: "Africa", capital: "Malabo", population: "1.5M", area: "28,051 km²",
          languages: ["Spanish", "French", "Portuguese"], currency: "Central African CFA franc",
          people: "Fang (majority), Bubi, Ndowe, Annobon, Bujeba",
          culture: "Unique cultural mix of Spanish colonial and Bantu traditions; Bwiti spiritual ceremony.",
          tourist_spots: ["Bioko Island", "Monte Alén National Park", "Malabo Cathedral", "Pico Basile"],
          uniqueness: "Only Spanish-speaking country in Africa south of the Sahara.",
          fun_facts: ["Equatorial Guinea is one of Africa's largest oil producers per capita.", "The country has two parts: mainland and Bioko Island."],
          photo_query: "equatorial guinea bioko island"
     },
     {
          name: "Eritrea", code: "er", continent: "Africa", capital: "Asmara", population: "3.5M", area: "117,600 km²",
          languages: ["Tigrinya", "Arabic", "English"], currency: "Eritrean Nakfa",
          people: "Tigrinya, Tigre, Saho, Afar, Bilen",
          culture: "Modernist capital Asmara is a UNESCO city of Art Deco architecture; coffee ceremony tradition.",
          tourist_spots: ["Asmara city", "Massawa port", "Dahlak Archipelago", "Qohaito ruins", "Filfil Solomuna"],
          uniqueness: "Asmara has one of the best-preserved Art Deco city centers in the world, built during Italian colonization.",
          fun_facts: ["Eritrea won independence from Ethiopia in 1993 after 30 years of war.", "Asmara was called 'La piccola Roma' (Little Rome)."],
          photo_query: "eritrea asmara art deco"
     },
     {
          name: "Eswatini", code: "sz", continent: "Africa", capital: "Mbabane", population: "1.2M", area: "17,364 km²",
          languages: ["Swati", "English"], currency: "Lilangeni",
          people: "Swazi (Nguni Bantu people)",
          culture: "One of the world's last absolute monarchies; Umhlanga Reed Dance festival; traditional Swazi crafts.",
          tourist_spots: ["Hlane Royal National Park", "Mlilwane Wildlife Sanctuary", "Sibebe Rock", "Mantenga Cultural Village"],
          uniqueness: "One of the world's last absolute monarchies; King Mswati III rules with traditional authority.",
          fun_facts: ["Formerly called Swaziland, renamed Eswatini in 2018.", "Sibebe Rock is the world's second-largest exposed granite dome."],
          photo_query: "eswatini africa wildlife traditional"
     },
     {
          name: "Ethiopia", code: "et", continent: "Africa", capital: "Addis Ababa", population: "126M", area: "1,104,300 km²",
          languages: ["Amharic", "Oromo", "Tigrinya", "Somali"], currency: "Ethiopian Birr",
          people: "Oromo, Amhara, Somali, Tigray, Sidama (over 80 ethnic groups)",
          culture: "One of the oldest Christian nations; birthplace of coffee; unique Ge'ez script; Timkat and Meskel festivals.",
          tourist_spots: ["Lalibela rock-hewn churches", "Danakil Depression", "Simien Mountains", "Blue Nile Falls", "Omo Valley", "Aksum obelisks"],
          uniqueness: "Ethiopia is the only African country never colonized (except a 5-year Italian occupation); birthplace of coffee and humanity's oldest ancestors.",
          fun_facts: ["Ethiopia follows its own calendar — 7 years behind the Gregorian calendar.", "The Blue Nile originates from Ethiopia's Lake Tana.", "Lucy, a 3.2 million-year-old ancestor fossil, was found here."],
          photo_query: "ethiopia lalibela church danakil"
     },
     {
          name: "Gabon", code: "ga", continent: "Africa", capital: "Libreville", population: "2.4M", area: "267,668 km²",
          languages: ["French"], currency: "Central African CFA franc",
          people: "Fang, Myene, Nzebi, Bapounou, Bandjabi",
          culture: "Rich forest traditions; Bwiti spiritual ceremony; one of Africa's most forested nations.",
          tourist_spots: ["Lopé National Park", "Ivindo National Park", "Pointe Denis Beach", "Crystal Mountains", "Mandraka"],
          uniqueness: "80% of Gabon is covered by rainforest — one of Africa's most ecologically preserved nations.",
          fun_facts: ["Gabon emits very low CO2 due to its vast Carbon-storing forests.", "Forest elephants, western gorillas, and hippos roam the coastal beaches."],
          photo_query: "gabon rainforest gorilla"
     },
     {
          name: "Gambia", code: "gm", continent: "Africa", capital: "Banjul", population: "2.7M", area: "11,295 km²",
          languages: ["English", "Mandinka", "Wolof", "Fula"], currency: "Gambian Dalasi",
          people: "Mandinka, Fula, Wolof, Jola, Serahule",
          culture: "Known as the 'Smiling Coast of Africa'; Kora music is central; vibrant wrestling traditions.",
          tourist_spots: ["Kunta Kinteh Island", "Abuko Nature Reserve", "Bijilo Forest Park", "River Gambia", "Banjul Arch"],
          uniqueness: "The smallest country on mainland Africa; the Gambia River runs through its entire length.",
          fun_facts: ["Alex Haley's 'Roots' is set in Gambia.", "Gambia is entirely surrounded by Senegal except for its Atlantic coastline."],
          photo_query: "gambia river africa beach"
     },
     {
          name: "Ghana", code: "gh", continent: "Africa", capital: "Accra", population: "33M", area: "238,533 km²",
          languages: ["English", "Twi", "Ewe", "Ga", "Hausa"], currency: "Ghanaian Cedi",
          people: "Akan, Mole-Dagbon, Ewe, Ga-Dangme, Guan",
          culture: "Famous for Kente cloth weaving, Highlife music, and rich Ashanti kingdom traditions.",
          tourist_spots: ["Cape Coast Castle", "Kakum National Park", "Mole National Park", "Kumasi Ashanti palace", "Lake Volta"],
          uniqueness: "First sub-Saharan African country to gain independence (1957); largest manmade lake by area (Lake Volta).",
          fun_facts: ["Ghana produces about 2% of the world's gold.", "Lake Volta is the world's largest artificial reservoir by area.", "The Ashanti Kingdom's golden stool is still revered as a sacred relic."],
          photo_query: "ghana cape coast kente cloth accra"
     },
     {
          name: "Guinea", code: "gn", continent: "Africa", capital: "Conakry", population: "14M", area: "245,857 km²",
          languages: ["French", "Pular", "Mandinka", "Susu"], currency: "Guinean Franc",
          people: "Fulani (Pular), Mandinka, Soussou",
          culture: "Richly musical nation; Balafon xylophones and Djembe drumming originate here.",
          tourist_spots: ["Fouta Djallon highlands", "Mount Nimba", "Conakry Grand Mosque", "Îles de Los", "Kindia Falls"],
          uniqueness: "Called the 'water tower of West Africa' — most major West African rivers originate here.",
          fun_facts: ["Guinea has some of the world's largest bauxite reserves.", "The djembe drum, popular worldwide, originates from Guinea."],
          photo_query: "guinea fouta djallon highlands"
     },
     {
          name: "Guinea-Bissau", code: "gw", continent: "Africa", capital: "Bissau", population: "2M", area: "36,125 km²",
          languages: ["Portuguese", "Guinea-Bissau Creole"], currency: "West African CFA franc",
          people: "Balanta, Fula, Mandinka, Manjaco, Pepel",
          culture: "Known for Carnival, Gumbe music, and unique Bijagos Archipelago maritime traditions.",
          tourist_spots: ["Bijagós Archipelago", "Cacheu", "Orango Islands National Park", "João Vieira Marine Park"],
          uniqueness: "The Bijagós Archipelago is a UNESCO Biosphere Reserve with unique hippo and saltwater dolphins.",
          fun_facts: ["Cashew nuts are Guinea-Bissau's main export.", "Bijagós is one of the few matrilineal societies in West Africa."],
          photo_query: "guinea bissau bijagos islands"
     },
     {
          name: "Ivory Coast", code: "ci", continent: "Africa", capital: "Yamoussoukro", population: "28M", area: "322,463 km²",
          languages: ["French", "Dioula"], currency: "West African CFA franc",
          people: "Akan, Gur, Northern Mandes, Southern Mandes, Kru",
          culture: "World's largest cocoa producer; famous for Zouglou music and colorful Akan festivals.",
          tourist_spots: ["Basilica of Our Lady of Peace", "Tai National Park", "Man Region waterfalls", "Comoé National Park"],
          uniqueness: "Home to the world's largest basilica — the Basilica of Our Lady of Peace in Yamoussoukro.",
          fun_facts: ["Ivory Coast produces ~40% of the world's cocoa.", "Yamoussoukro's Basilica dome is slightly taller than St. Peter's Basilica in Rome."],
          photo_query: "ivory coast yamoussoukro basilica cocoa"
     },
     {
          name: "Kenya", code: "ke", continent: "Africa", capital: "Nairobi", population: "56M", area: "580,367 km²",
          languages: ["Swahili", "English"], currency: "Kenyan Shilling",
          people: "Kikuyu, Luo, Luhya, Kamba, Kalenjin, Maasai, Somali",
          culture: "The Maasai people are iconic; safari tourism culture; Nairobi is East Africa's largest city.",
          tourist_spots: ["Maasai Mara", "Mount Kenya", "Amboseli National Park", "Diani Beach", "Lamu Island", "Nairobi National Park"],
          uniqueness: "The Maasai Mara hosts the world's greatest wildlife migration; Kenya dominates long-distance running globally.",
          fun_facts: ["Kenya invented mobile money (M-Pesa) — adopted worldwide.", "The Great Rift Valley runs through Kenya.", "Kenyan runners have won more Olympic distance medals than any other nation."],
          photo_query: "kenya maasai mara safari elephant"
     },
     {
          name: "Lesotho", code: "ls", continent: "Africa", capital: "Maseru", population: "2.2M", area: "30,355 km²",
          languages: ["Sesotho", "English"], currency: "Lesotho Loti",
          people: "Sotho (Basotho) people",
          culture: "Renowned for Basotho blanket tradition, straw hats, and pony trekking culture in the mountains.",
          tourist_spots: ["Sani Pass", "Maluti-a-Phofung", "Maletsunyane Falls", "Katse Dam", "Ts'ehlanyane National Park"],
          uniqueness: "Lesotho is entirely surrounded by South Africa — one of only three countries in the world that are enclave nations.",
          fun_facts: ["Lesotho is the highest country in the world — its lowest point is 1,400 m above sea level.", "Maletsunyane Falls is one of the world's highest single-drop waterfalls."],
          photo_query: "lesotho mountains highlands basotho"
     },
     {
          name: "Liberia", code: "lr", continent: "Africa", capital: "Monrovia", population: "5.4M", area: "111,369 km²",
          languages: ["English"], currency: "Liberian Dollar",
          people: "Kpelle, Bassa, Grebo, Kru, Dan",
          culture: "Founded by freed American slaves; unique blend of American and indigenous West African traditions.",
          tourist_spots: ["Sapo National Park", "Kpatawee Waterfall", "Lake Piso", "Robertsport Beach", "Cavalla River"],
          uniqueness: "Liberia was Africa's first republic (1847), founded by freed American slaves.",
          fun_facts: ["Monrovia is named after US President James Monroe.", "Liberia drives on the right side of the road, unlike most of its neighbors."],
          photo_query: "liberia africa beach rainforest"
     },
     {
          name: "Libya", code: "ly", continent: "Africa", capital: "Tripoli", population: "7M", area: "1,759,540 km²",
          languages: ["Arabic"], currency: "Libyan Dinar",
          people: "Arab-Berber (Libyan), Amazigh, Tuareg, Tebu",
          culture: "Roman and ancient Libyan ruins blend with Islamic architecture; traditional Berber crafts.",
          tourist_spots: ["Leptis Magna Roman ruins", "Cyrene", "Sabratha Theater", "Fezzan rock art", "Tripoli Medina"],
          uniqueness: "Leptis Magna is considered one of the best-preserved Roman cities in the world.",
          fun_facts: ["Libya has the largest proven oil reserves in Africa.", "90% of Libya is desert."],
          photo_query: "libya leptis magna roman ruins"
     },
     {
          name: "Madagascar", code: "mg", continent: "Africa", capital: "Antananarivo", population: "30M", area: "587,041 km²",
          languages: ["Malagasy", "French"], currency: "Malagasy Ariary",
          people: "Merina, Betsimisaraka, Betsileo, Tsimihety, Sakalava (18 ethnic groups)",
          culture: "Unique island civilization with roots in Southeast Asia and Africa; Famadihana ('turning of the bones') ritual.",
          tourist_spots: ["Avenue of Baobabs", "Tsingy de Bemaraha", "Isalo National Park", "Nosy Be", "Ranomafana"],
          uniqueness: "~90% of Madagascar's wildlife is found nowhere else on Earth; 5th largest island in the world.",
          fun_facts: ["Madagascar broke off from India 88 million years ago.", "Lemurs only exist in Madagascar.", "The Avenue of Baobabs has trees over 1,000 years old."],
          photo_query: "madagascar baobab lemur"
     },
     {
          name: "Malawi", code: "mw", continent: "Africa", capital: "Lilongwe", population: "20M", area: "118,484 km²",
          languages: ["Chichewa", "English"], currency: "Malawian Kwacha",
          people: "Chewa, Tumbuka, Lomwe, Tonga, Yao",
          culture: "Lake Malawi culture central; known as the 'Warm Heart of Africa' for its hospitable people.",
          tourist_spots: ["Lake Malawi", "Liwonde National Park", "Majete Wildlife Reserve", "Nyika Plateau", "Cape Maclear"],
          uniqueness: "Lake Malawi contains more fish species than any other lake on Earth.",
          fun_facts: ["Malawi is one of the world's most densely populated countries.", "Lake Malawi has over 1,000 species of cichlid fish."],
          photo_query: "malawi lake malawi fish"
     },
     {
          name: "Mali", code: "ml", continent: "Africa", capital: "Bamako", population: "23M", area: "1,240,192 km²",
          languages: ["French", "Bambara"], currency: "West African CFA franc",
          people: "Bambara, Fulani, Dogon, Tuareg, Songhai",
          culture: "Ancient Mali Empire; Timbuktu as center of Islamic learning; Dogon mythology and dances.",
          tourist_spots: ["Djingareyber Mosque Timbuktu", "Djenné Great Mosque", "Bandiagara Escarpment", "Niger River", "Mopti"],
          uniqueness: "Timbuktu was the medieval world's greatest center of Islamic scholarship with over 25,000 students.",
          fun_facts: ["The Great Mosque of Djenné is the world's largest mud-brick building.", "Mali's Dogon people have intricate creation myths tied to the Sirius star system."],
          photo_query: "mali timbuktu djenne mosque"
     },
     {
          name: "Mauritania", code: "mr", continent: "Africa", capital: "Nouakchott", population: "4.7M", area: "1,030,700 km²",
          languages: ["Arabic", "French", "Pulaar", "Soninke", "Wolof"], currency: "Mauritanian Ouguiya",
          people: "Bidhan (Berber-Arab), Haratin, sub-Saharan Africans",
          culture: "Traditional Moorish culture; gateway between North and sub-Saharan Africa; Mauritanian tea ceremony.",
          tourist_spots: ["Banc d'Arguin National Park", "Chinguetti ancient city", "Ouadane", "Adrar Plateau", "Atar"],
          uniqueness: "Chinguetti was historically Islam's 7th holiest city; Banc d'Arguin hosts millions of migratory birds.",
          fun_facts: ["Mauritania officially abolished slavery only in 1981.", "Chinguetti's ancient libraries house thousands of medieval Islamic manuscripts."],
          photo_query: "mauritania sahara desert chinguetti"
     },
     {
          name: "Mauritius", code: "mu", continent: "Africa", capital: "Port Louis", population: "1.3M", area: "2,040 km²",
          languages: ["Mauritian Creole", "English", "French"], currency: "Mauritian Rupee",
          people: "Indo-Mauritian, Creole, Sino-Mauritian, Franco-Mauritian",
          culture: "Vibrant multicultural blend of African, Indian, Chinese, and French influences; Sega music.",
          tourist_spots: ["Blue Bay Marine Park", "Le Morne Brabant", "Chamarel Coloured Earth", "Black River Gorges", "Rodrigues Island"],
          uniqueness: "Home of the extinct Dodo bird; Chamarel's Seven Coloured Earths is one of the world's most unusual landscapes.",
          fun_facts: ["The Dodo once lived only in Mauritius.", "Mauritius was uninhabited until the Dutch arrived in 1638."],
          photo_query: "mauritius beach lagoon tropical"
     },
     {
          name: "Morocco", code: "ma", continent: "Africa", capital: "Rabat", population: "38M", area: "446,550 km²",
          languages: ["Arabic", "Amazigh (Berber)", "French"], currency: "Moroccan Dirham",
          people: "Arab-Berber majority; Amazigh (Berber) indigenous; Sahrawis in the south",
          culture: "Vibrant medina culture, Gnawa music, intricate mosaic zellige tilework, hammam baths.",
          tourist_spots: ["Jemaa el-Fna Marrakech", "Sahara Desert Merzouga", "Chefchaouen Blue City", "Fes Medina", "Hassan II Mosque", "Ait Benhaddou"],
          uniqueness: "Chefchaouen is painted entirely blue; Morocco has the world's largest traditional Islamic walled city in Fes.",
          fun_facts: ["Morocco has the world's oldest university (University of al-Qarawiyyin, 859 AD).", "Argan oil used in cosmetics globally comes only from Morocco."],
          photo_query: "morocco marrakech sahara chefchaouen blue"
     },
     {
          name: "Mozambique", code: "mz", continent: "Africa", capital: "Maputo", population: "33M", area: "801,590 km²",
          languages: ["Portuguese", "Makhuwa", "Tsonga"], currency: "Mozambican Metical",
          people: "Makhuwa, Tsonga, Makonde, Shona, Sena",
          culture: "Timbila wooden xylophone music (UNESCO); colorful capulana cloths; Arabic-Portuguese Swahili coast culture.",
          tourist_spots: ["Gorongosa National Park", "Bazaruto Archipelago", "Tofo Beach", "Ilha de Mozambique", "Quirimbas Archipelago"],
          uniqueness: "The Ilha de Mozambique (Island of Mozambique) is a UNESCO World Heritage Site — the entire island is a historic monument.",
          fun_facts: ["Mozambique has some of the world's best whale shark diving at Tofo Beach.", "Gorongosa is called Africa's 'Garden of Eden'."],
          photo_query: "mozambique bazaruto beach mozambique island"
     },
     {
          name: "Namibia", code: "na", continent: "Africa", capital: "Windhoek", population: "2.7M", area: "824,292 km²",
          languages: ["English", "Afrikaans", "German", "Oshiwambo"], currency: "Namibian Dollar",
          people: "Ovambo, Kavango, Herero, Damara, San Bushmen, Nama, Caprivian",
          culture: "San Bushmen (oldest human culture), Herero women's striking Victorian-era dress fashion.",
          tourist_spots: ["Sossusvlei sand dunes", "Fish River Canyon", "Etosha National Park", "Skeleton Coast", "Damaraland"],
          uniqueness: "Sossusvlei's sand dunes are among the world's tallest (up to 325 m); Fish River Canyon is Africa's largest canyon.",
          fun_facts: ["Namibia has the world's oldest desert — the Namib (55 million years old).", "The San Bushmen have lived in southern Africa for over 20,000 years."],
          photo_query: "namibia sossusvlei dunes etosha"
     },
     {
          name: "Niger", code: "ne", continent: "Africa", capital: "Niamey", population: "26M", area: "1,267,000 km²",
          languages: ["French", "Hausa", "Zarma"], currency: "West African CFA franc",
          people: "Hausa, Zarma-Songhai, Tuareg, Fulani, Kanuri",
          culture: "Tuareg silver jewelry, camel caravan culture, ancient Air Mountains traditions.",
          tourist_spots: ["W National Park", "Agadez Mosque", "Aïr Mountains", "Tenere Desert", "Niamey Grand Mosque"],
          uniqueness: "Niger is the world's largest landlocked country by area that is mostly desert.",
          fun_facts: ["Niger has the world's highest birth rate.", "The Aïr Mountains contain prehistoric rock art."],
          photo_query: "niger tuareg sahara agadez"
     },
     {
          name: "Nigeria", code: "ng", continent: "Africa", capital: "Abuja", population: "223M", area: "923,768 km²",
          languages: ["English", "Hausa", "Yoruba", "Igbo"], currency: "Nigerian Naira",
          people: "Hausa-Fulani, Yoruba, Igbo, and over 250 more ethnic groups",
          culture: "Africa's most populous nation; Nollywood (world's 2nd largest film industry); Afrobeats music global phenomenon.",
          tourist_spots: ["Olumo Rock", "Yankari National Park", "Zuma Rock", "Okanta Creek", "Lagos Beach", "Cross River Gorilla Sanctuary"],
          uniqueness: "Nigeria is Africa's largest economy and most populous country; Nollywood produces over 2,500 films/year.",
          fun_facts: ["Afrobeats (Wizkid, Burna Boy, Davido) is the world's fastest-growing music genre.", "Nigeria has more English speakers than the UK.", "The benin bronzes (now in European museums) were made in Nigeria 600+ years ago."],
          photo_query: "nigeria lagos afrobeats culture"
     },
     {
          name: "Rwanda", code: "rw", continent: "Africa", capital: "Kigali", population: "14M", area: "26,338 km²",
          languages: ["Kinyarwanda", "French", "English"], currency: "Rwandan Franc",
          people: "Hutu, Tutsi, Twa",
          culture: "Remarkable post-genocide reconciliation; Gorilla trekking tourism; Imigongo geometric cow-dung art.",
          tourist_spots: ["Volcanoes National Park (mountain gorillas)", "Lake Kivu", "Nyungwe Forest", "Kigali Genocide Memorial", "Akagera National Park"],
          uniqueness: "Rwanda recovered from genocide (1994) to become one of Africa's cleanest, safest, and most progressive nations.",
          fun_facts: ["Mountain gorillas in Volcanoes NP are one of tourism's most exclusive experiences (~$1,500/permit).", "Rwanda has the world's highest percentage of women in parliament (~60%)."],
          photo_query: "rwanda mountain gorillas volcanoes"
     },
     {
          name: "São Tomé and Príncipe", code: "st", continent: "Africa", capital: "São Tomé", population: "230K", area: "964 km²",
          languages: ["Portuguese", "Forro Creole"], currency: "São Tomé and Príncipe Dobra",
          people: "Forros, Angolares, Tongas, Europeans",
          culture: "Relaxed Creole island culture; distinctive Ússua and Socopé music styles; cacao plantation heritage.",
          tourist_spots: ["Pico Cão Grande", "Obo National Park", "Lagoa Azul", "Rolas Island (equator)", "Plantation houses"],
          uniqueness: "The equator runs through the country's southernmost island, Rolas — you can stand on the equator here.",
          fun_facts: ["São Tomé is one of the smallest African nations.", "The country was uninhabited before Portuguese colonization in 1470."],
          photo_query: "sao tome principe island tropical"
     },
     {
          name: "Senegal", code: "sn", continent: "Africa", capital: "Dakar", population: "18M", area: "196,722 km²",
          languages: ["French", "Wolof", "Pulaar", "Jola", "Mandinka"], currency: "West African CFA franc",
          people: "Wolof, Serer, Toucouleur, Fula, Diola, Mandinka",
          culture: "Teranga (hospitality) is core; Mbalax music (Youssou N'Dour); wrestling (Laamb) is the national sport.",
          tourist_spots: ["Dakar African Renaissance Monument", "Pink Lake (Lac Rose)", "Goree Island", "Casamance", "Bandia Reserve"],
          uniqueness: "Goree Island was the largest slave-trading post in West Africa — now a powerful memorial site.",
          fun_facts: ["Senegal has never had a military coup — remarkable stability in West Africa.", "Lac Rose (Pink Lake) turns pink due to algae and bacteria."],
          photo_query: "senegal dakar pink lake goree"
     },
     {
          name: "Sierra Leone", code: "sl", continent: "Africa", capital: "Freetown", population: "8M", area: "71,740 km²",
          languages: ["English", "Krio"], currency: "Sierra Leonean Leone",
          people: "Temne, Mende, Limba, Kono, Fulani, Krio",
          culture: "Krio culture (unique blend of freed slave returnees); vibrant gumbe music; natural diamond heritage.",
          tourist_spots: ["Tacugama Chimpanzee Sanctuary", "Bunce Island", "Outamba-Kilimi National Park", "River No. 2 Beach", "Tiwai Island"],
          uniqueness: "Freetown was founded as a home for freed slaves — one of Africa's oldest free settlements.",
          fun_facts: ["River No. 2 Beach was voted top 10 beaches in the world by Condé Nast.", "Sierra Leone has the world's third-largest natural harbor in Freetown."],
          photo_query: "sierra leone beach freetown"
     },
     {
          name: "Somalia", code: "so", continent: "Africa", capital: "Mogadishu", population: "18M", area: "637,657 km²",
          languages: ["Somali", "Arabic"], currency: "Somali Shilling",
          people: "Somali (Dir, Darood, Isaaq, Hawiye clans), Bantu Gosha",
          culture: "Ancient Punt civilization; unique Somali poetry (oral literature); Dhaanto and Buraanbur music.",
          tourist_spots: ["Laas Geel cave paintings", "Mogadishu old town", "Berbera Beach", "Hobyo", "Caluula cliffs"],
          uniqueness: "Laas Geel contains some of the oldest cave paintings on Earth (11,000 years old).",
          fun_facts: ["Somalia has the longest coastline in mainland Africa.", "Somali poetry is among the world's most sophisticated oral traditions."],
          photo_query: "somalia mogadishu coast"
     },
     {
          name: "South Africa", code: "za", continent: "Africa", capital: "Pretoria / Cape Town / Bloemfontein", population: "62M", area: "1,219,090 km²",
          languages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sotho", "Tswana", "Venda", "Tsonga", "Swati", "Ndebele", "Pedi"],
          currency: "South African Rand",
          people: "Black African (Zulu, Xhosa, Sotho, Tswana), Coloured, White, Indian/Asian",
          culture: "Rainbow Nation; Ubuntu philosophy; diverse music (Isicathamiya, Gqom, Amapiano); wine culture in Cape.",
          tourist_spots: ["Table Mountain", "Kruger National Park", "Cape Winelands", "Robben Island", "Garden Route", "Drakensberg"],
          uniqueness: "Has 11 official languages — the most of any country; birthplace of Ubuntu philosophy and Nelson Mandela.",
          fun_facts: ["South Africa is the only country to have 3 capitals.", "It has the world's largest platinum and chromite reserves.", "South Africa hosted FIFA World Cup 2010 — first African country to do so."],
          photo_query: "south africa table mountain cape town kruger"
     },
     {
          name: "South Sudan", code: "ss", continent: "Africa", capital: "Juba", population: "11M", area: "619,745 km²",
          languages: ["English", "Arabic", "Dinka", "Nuer"], currency: "South Sudanese Pound",
          people: "Dinka, Nuer, Azande, Bari, Kakwa",
          culture: "Rich cattle-herding traditions; Dinka people use cattle as currency and symbol of identity.",
          tourist_spots: ["Boma National Park", "Nimule National Park", "White Nile", "Sudd wetlands", "Central African Republic border"],
          uniqueness: "World's youngest country (independence in 2011); the Sudd is one of the world's largest tropical wetlands.",
          fun_facts: ["South Sudan became independent after a 2011 referendum.", "The Dinka people are among Africa's tallest, often exceeding 2 meters."],
          photo_query: "south sudan nile cattle herding"
     },
     {
          name: "Sudan", code: "sd", continent: "Africa", capital: "Khartoum", population: "46M", area: "1,861,484 km²",
          languages: ["Arabic", "English"], currency: "Sudanese Pound",
          people: "Arab Sudanese, Nubian, Beja, Fur, Nuba",
          culture: "Ancient Nubian kingdoms older than Egypt; home to more pyramids than Egypt.",
          tourist_spots: ["Meroe Pyramids", "Naqa Ruins", "Dinder National Park", "Kassala", "Kerma", "White/Blue Nile confluence"],
          uniqueness: "Sudan has more ancient pyramids than Egypt — over 200 pyramids in the Nubian Desert.",
          fun_facts: ["The Blue and White Nile meet in Khartoum.", "Ancient Kingdom of Kush (Sudan) ruled Egypt for a century."],
          photo_query: "sudan meroe pyramids nubian"
     },
     {
          name: "Tanzania", code: "tz", continent: "Africa", capital: "Dodoma", population: "65M", area: "945,087 km²",
          languages: ["Swahili", "English"], currency: "Tanzanian Shilling",
          people: "Sukuma, Chagga, Hehe, Makonde, Maasai, Arab-Swahili",
          culture: "Swahili coast culture; Tingatinga painting art; Zanzibar's spice island heritage.",
          tourist_spots: ["Serengeti National Park", "Kilimanjaro", "Ngorongoro Crater", "Zanzibar Island", "Selous Game Reserve", "Olduvai Gorge"],
          uniqueness: "Home to Africa's highest peak (Kilimanjaro) and the world's greatest wildlife spectacle (Serengeti migration).",
          fun_facts: ["The Ngorongoro Crater is the world's largest inactive volcanic caldera.", "Zanzibar's stone town is a UN World Heritage Site.", "Olduvai Gorge is where early humans lived 1.8 million years ago."],
          photo_query: "tanzania serengeti kilimanjaro zanzibar"
     },
     {
          name: "Togo", code: "tg", continent: "Africa", capital: "Lomé", population: "9M", area: "56,785 km²",
          languages: ["French", "Ewe", "Kabye"], currency: "West African CFA franc",
          people: "Ewe, Mina, Kabye, Gurma",
          culture: "Famous for Akodessewa Fetish Market (world's largest voodoo market); colorful festival traditions.",
          tourist_spots: ["Koutammakou UNESCO landscape", "Lomé Grand Market", "Fazao-Malfakassa National Park", "Akodessewa Fetish Market"],
          uniqueness: "Lomé is the only African capital city that borders another country directly on its western edge.",
          fun_facts: ["Togo's Koutammakou (Batammariba earthen architecture) is UNESCO listed.", "The Akodessewa market sells voodoo fetishes from across West Africa."],
          photo_query: "togo koutammakou landscape market"
     },
     {
          name: "Tunisia", code: "tn", continent: "Africa", capital: "Tunis", population: "12M", area: "163,610 km²",
          languages: ["Arabic", "French"], currency: "Tunisian Dinar",
          people: "Arab-Berber majority; Jewish minority in Djerba",
          culture: "Roman and Carthaginian ruins; Medinas; Star Wars filming locations; vibrant café culture.",
          tourist_spots: ["Carthage ruins", "Medina of Tunis", "Djerba Island", "Sahara at Douz", "Dougga Roman City", "Matmata Star Wars village"],
          uniqueness: "Tunisia hosted key Star Wars filming (Tatooine is a real place — Tataouine) and has some of the best-preserved Roman ruins.",
          fun_facts: ["'Tatooine' in Star Wars is based on Tataouine — a real Tunisian city.", "Carthage, now in Tunisia, was Rome's greatest rival 2,000 years ago."],
          photo_query: "tunisia carthage sahara blue door sidi bou said"
     },
     {
          name: "Uganda", code: "ug", continent: "Africa", capital: "Kampala", population: "48M", area: "241,559 km²",
          languages: ["English", "Swahili", "Luganda"], currency: "Ugandan Shilling",
          people: "Baganda, Banyakole, Basoga, Bakiga, Langi, Acholi",
          culture: "Called the 'Pearl of Africa' by Churchill; vibrant music scene; gorilla trekking.",
          tourist_spots: ["Bwindi Impenetrable Forest", "Murchison Falls", "Queen Elizabeth National Park", "Source of the Nile", "Lake Victoria"],
          uniqueness: "Bwindi Impenetrable Forest holds half the world's remaining mountain gorillas.",
          fun_facts: ["Uganda has the world's highest concentration of primates per km².", "The source of the Nile (Lake Victoria) is in Uganda.", "Uganda has the youngest population in the world — median age 15."],
          photo_query: "uganda gorilla bwindi murchison falls"
     },
     {
          name: "Zambia", code: "zm", continent: "Africa", capital: "Lusaka", population: "20M", area: "752,612 km²",
          languages: ["English", "Bemba", "Nyanja", "Tonga"], currency: "Zambian Kwacha",
          people: "Bemba, Tonga, Ngoni, Lozi, over 72 ethnic groups",
          culture: "Victoria Falls culture; traditional Kuomboka ceremony; vibrant music scene with Zamrock.",
          tourist_spots: ["Victoria Falls (Livingstone)", "South Luangwa National Park", "Kafue National Park", "Lower Zambezi", "Lake Bangweulu"],
          uniqueness: "Victoria Falls is the world's largest waterfall by combined width and height — over 1.7 km wide.",
          fun_facts: ["Victoria Falls is known locally as 'Mosi-oa-Tunya' — the smoke that thunders.", "Zambia has over 72 languages and tribal groups."],
          photo_query: "zambia victoria falls south luangwa"
     },
     {
          name: "Zimbabwe", code: "zw", continent: "Africa", capital: "Harare", population: "16M", area: "390,757 km²",
          languages: ["English", "Shona", "Ndebele", "16 official languages"], currency: "Zimbabwe Gold (ZiG)",
          people: "Shona (majority), Ndebele, Tonga, Venda, Kalanga",
          culture: "Great Zimbabwe stone city ruins; mbira music (UNESCO); Shona stone sculpture art internationally acclaimed.",
          tourist_spots: ["Victoria Falls", "Great Zimbabwe Ruins", "Hwange National Park", "Lake Kariba", "Matobo Hills rock art"],
          uniqueness: "Great Zimbabwe was sub-Saharan Africa's largest medieval city — now magnificent ruins — evidence of a powerful ancient civilization.",
          fun_facts: ["Zimbabwe once had the world's highest inflation (500 billion % in 2008).", "Great Zimbabwe gave the country its name.", "Hwange has one of Africa's largest elephant populations."],
          photo_query: "zimbabwe victoria falls great zimbabwe ruins"
     }
];
