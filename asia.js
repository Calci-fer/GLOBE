const ASIA_COUNTRIES = [
     {
          name: "Afghanistan", code: "af", continent: "Asia", capital: "Kabul", population: "41M", area: "652,230 km²",
          languages: ["Dari (Persian)", "Pashto"], currency: "Afghan Afghani",
          people: "Pashtun, Tajik, Hazara, Uzbek, Aimak, Turkmen",
          culture: "Ancient Silk Road culture; renowned for intricate carpet weaving, lapis lazuli crafts, and oral poetry (Landay).",
          tourist_spots: ["Band-e-Amir lakes", "Bamiyan Valley", "Minaret of Jam", "Wakhan Corridor", "Herat citadel"],
          uniqueness: "Band-e-Amir was Afghanistan's first national park — stunning turquoise lakes in the Hindu Kush.",
          fun_facts: ["Afghanistan was the crossroads of ancient empires: Persian, Greek, Mongol.", "Lapis lazuli from Afghanistan decorated Egyptian pharaohs' tombs."],
          photo_query: "afghanistan band-e-amir lakes blue"
     },
     {
          name: "Armenia", code: "am", continent: "Asia", capital: "Yerevan", population: "3M", area: "29,743 km²",
          languages: ["Armenian"], currency: "Armenian Dram",
          people: "Armenian; small minorities of Yezidi, Russians, Greeks",
          culture: "One of the world's oldest Christian nations (301 AD); ancient monastery culture; lavash bread UNESCO heritage.",
          tourist_spots: ["Geghard Monastery", "Tatev Monastery (world's longest cable car)", "Lake Sevan", "Garni Temple", "Noravank"],
          uniqueness: "Armenia was the world's first nation to adopt Christianity as a state religion (301 AD).",
          fun_facts: ["The Armenian alphabet (invented 405 AD) is still in use today.", "Tatev Monastery is reached by the world's longest non-urban cable car (5.7 km)."],
          photo_query: "armenia geghard monastery lake sevan"
     },
     {
          name: "Azerbaijan", code: "az", continent: "Asia", capital: "Baku", population: "10M", area: "86,600 km²",
          languages: ["Azerbaijani"], currency: "Azerbaijani Manat",
          people: "Azerbaijani (Turkic), Lezgian, Russian, Armenian",
          culture: "Mugham music (UNESCO); carpet weaving; Ateshgah Fire Temple; Land of Fire nickname.",
          tourist_spots: ["Old City Baku (Icheri Sheher)", "Flame Towers", "Gobustan Petroglyphs", "Mud Volcanoes", "Sheki Palace"],
          uniqueness: "Baku is the lowest capital city in the world at −28 m below sea level; known as the 'Land of Fire'.",
          fun_facts: ["Azerbaijan hosted the Formula One Grand Prix on Baku's city circuit.", "Gobustan has over 6,000 rock carvings dating back 40,000 years."],
          photo_query: "azerbaijan baku flame towers old city"
     },
     {
          name: "Bahrain", code: "bh", continent: "Asia", capital: "Manama", population: "1.7M", area: "765 km²",
          languages: ["Arabic"], currency: "Bahraini Dinar",
          people: "Bahraini Arab, South Asian expats, Iranian",
          culture: "Pearl diving heritage; ancient Dilmun civilization; Formula 1 Grand Prix host; liberal Gulf state.",
          tourist_spots: ["Bahrain Fort (Qal'at al-Bahrain)", "Tree of Life", "Manama Souq", "King Fahd Causeway", "Al-Areen Wildlife Park"],
          uniqueness: "Bahrain was the center of the ancient Dilmun civilization; the mysterious 'Tree of Life' survives alone in the desert.",
          fun_facts: ["Bahrain is an island nation — the smallest Arab state.", "Dilmun (Bahrain) is mentioned in ancient Sumerian texts as a paradise."],
          photo_query: "bahrain manama modern city pearl"
     },
     {
          name: "Bangladesh", code: "bd", continent: "Asia", capital: "Dhaka", population: "173M", area: "147,570 km²",
          languages: ["Bengali (Bangla)"], currency: "Bangladeshi Taka",
          people: "Bengali majority; Chakma, Marma, Garo, Santali indigenous groups",
          culture: "Muslin fabric heritage; Pohela Boishakh (Bengali New Year); Baul folk music; mangrove boat culture.",
          tourist_spots: ["Sundarbans Mangrove Forest", "Cox's Bazar (world's longest beach)", "Srimangal tea gardens", "Paharpur Buddhist Vihara", "Sixty Dome Mosque"],
          uniqueness: "Cox's Bazar is the world's longest natural sea beach (120 km); the Sundarbans is the world's largest mangrove forest.",
          fun_facts: ["The Bengal tiger is Bangladesh's national animal.", "Bangladesh emerged as an independent nation in 1971 after a liberation war."],
          photo_query: "bangladesh sundarbans cox bazar beach"
     },
     {
          name: "Bhutan", code: "bt", continent: "Asia", capital: "Thimphu", population: "800K", area: "38,394 km²",
          languages: ["Dzongkha"], currency: "Bhutanese Ngultrum",
          people: "Ngalop, Sharchop, Lhotshampa (Nepali-origin)",
          culture: "Gross National Happiness (GNH) philosophy; Vajrayana Buddhism; Tshechu mask festivals; traditional architecture.",
          tourist_spots: ["Tiger's Nest Monastery (Paro Taktsang)", "Punakha Dzong", "Dochula Pass", "Haa Valley", "Rinpung Dzong"],
          uniqueness: "Bhutan measures success by Gross National Happiness, not GDP; only carbon-negative country on Earth.",
          fun_facts: ["Bhutan was the last country to introduce TV (1999).", "Tourism is limited to maintain cultural preservation.", "Bhutan absorbs more CO2 than it emits — a carbon-negative nation."],
          photo_query: "bhutan tigers nest monastery"
     },
     {
          name: "Brunei", code: "bn", continent: "Asia", capital: "Bandar Seri Begawan", population: "450K", area: "5,765 km²",
          languages: ["Malay", "English"], currency: "Brunei Dollar",
          people: "Malay, Chinese, indigenous groups (Iban, Kadazan, Bisaya)",
          culture: "Sultanate culture; lavish Sultan's Palace (Istana Nurul Iman); Islamic architecture; water village life.",
          tourist_spots: ["Omar Ali Saifuddien Mosque", "Kampong Ayer water village", "Ulu Temburong National Park", "Istana Nurul Iman", "Royal Regalia Museum"],
          uniqueness: "Istana Nurul Iman is the world's largest residential palace with 1,788 rooms and 257 bathrooms.",
          fun_facts: ["Brunei is an oil-rich sultanate where residents pay no income tax.", "Kampong Ayer is the world's largest water village (over 30,000 residents)."],
          photo_query: "brunei mosque water village sultan"
     },
     {
          name: "Cambodia", code: "kh", continent: "Asia", capital: "Phnom Penh", population: "17M", area: "181,035 km²",
          languages: ["Khmer"], currency: "Cambodian Riel",
          people: "Khmer (95%), Vietnamese, Chinese, Cham",
          culture: "Ancient Khmer Empire; Apsara dance (UNESCO); Pchum Ben ancestor festival; sampot traditional clothing.",
          tourist_spots: ["Angkor Wat", "Angkor Thom", "Phnom Penh Royal Palace", "Koh Rong Island", "Kulen Mountain", "Tonle Sap Lake"],
          uniqueness: "Angkor Wat is the world's largest religious monument — a masterpiece of Khmer architecture.",
          fun_facts: ["Angkor Wat faces west (unusual for Hindu temples) possibly symbolizing death.", "Cambodians use both the dollar and riel as currency.", "The Khmer Rouge genocide (1975-79) killed ~25% of Cambodia's population."],
          photo_query: "cambodia angkor wat temple sunrise"
     },
     {
          name: "China", code: "cn", continent: "Asia", capital: "Beijing", population: "1.4B", area: "9,596,960 km²",
          languages: ["Mandarin Chinese"], currency: "Chinese Yuan Renminbi",
          people: "Han Chinese (91.6%), Zhuang, Hui, Manchu, Uyghur, Miao, Yi, Tibetan, Mongolian, and 50+ more",
          culture: "5,000-year civilization; Confucian values; tea ceremony; Peking Opera; Lunar New Year; kung fu; silk making.",
          tourist_spots: ["Great Wall of China", "Forbidden City", "Terracotta Army", "Li River Guilin", "Zhangjiajie Avatar Mountains", "West Lake Hangzhou", "Potala Palace Lhasa"],
          uniqueness: "China is the world's most populous country (until 2023); home to 4 of the world's 6 oldest continuous civilizations.",
          fun_facts: ["China invented paper, printing, gunpowder, and the compass.", "The Great Wall is over 21,000 km long.", "China has 56 officially recognized ethnic groups.", "Ice cream was invented in China around 200 BC."],
          photo_query: "china great wall beijing terracotta"
     },
     {
          name: "Cyprus", code: "cy", continent: "Asia", capital: "Nicosia", population: "1.2M", area: "9,251 km²",
          languages: ["Greek", "Turkish"], currency: "Euro",
          people: "Greek Cypriot, Turkish Cypriot",
          culture: "Birthplace of Aphrodite (Greek mythology); divided island culture; halloumi cheese; Meze food tradition.",
          tourist_spots: ["Aphrodite's Rock", "Troodos Mountains", "Kourion archaeological site", "Paphos mosaic", "Kyrenia castle", "Ayia Napa"],
          uniqueness: "Nicosia is the only divided capital city in the world — split between Greek and Turkish sections.",
          fun_facts: ["Cyprus is the mythological birthplace of Aphrodite.", "Halloumi (the famous grillable cheese) originates from Cyprus."],
          photo_query: "cyprus paphos aphrodite beach"
     },
     {
          name: "Georgia", code: "ge", continent: "Asia", capital: "Tbilisi", population: "3.7M", area: "69,700 km²",
          languages: ["Georgian"], currency: "Georgian Lari",
          people: "Georgian, Azeri, Armenian, Russian, Ossetian, Abkhazian",
          culture: "Ancient wine-making (8,000-year tradition); unique Georgian polyphonic singing (UNESCO); cave city of Vardzia.",
          tourist_spots: ["Old Tbilisi", "Gergeti Trinity Church", "Cave City Vardzia", "Kazbegi mountains", "Sighnaghi wine town", "Svaneti towers"],
          uniqueness: "Georgia is the world's oldest wine-making country — 8,000 years of winemaking in clay qvevri vessels (UNESCO heritage).",
          fun_facts: ["The Georgian script is one of the world's 14 unique alphabets.", "Georgia invented wine before any other culture.", "The world's deepest cave (Veryovkina, 2,212 m) is in Georgia."],
          photo_query: "georgia tbilisi gergeti church mountains"
     },
     {
          name: "India", code: "in", continent: "Asia", capital: "New Delhi", population: "1.43B", area: "3,287,263 km²",
          languages: ["Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Kannada", "Gujarati", "Malayalam +18 more"],
          currency: "Indian Rupee",
          people: "Indo-Aryan, Dravidian, Tibeto-Burman, Austroasiatic; over 2,000 ethnic groups",
          culture: "Ancient Vedic civilization; yoga; Bollywood; vibrant festivals (Holi, Diwali, Eid); classical dance forms; spice culture.",
          tourist_spots: ["Taj Mahal", "Varanasi Ghats", "Rajasthan palaces", "Kerala backwaters", "Goa beaches", "Hampi ruins", "Himalayas", "Ranthambore tigers"],
          uniqueness: "India is the world's most populous democracy; birthplace of four world religions (Hinduism, Buddhism, Jainism, Sikhism).",
          fun_facts: ["India invented chess (Chaturanga, 6th century).", "Zero was invented by Indian mathematician Brahmagupta.", "India has more post offices than any other country.", "Bollywood produces the most films per year of any film industry."],
          photo_query: "india taj mahal varanasi holi festival"
     },
     {
          name: "Indonesia", code: "id", continent: "Asia", capital: "Jakarta (moving to Nusantara)", population: "277M", area: "1,904,569 km²",
          languages: ["Indonesian (Bahasa Indonesia)", "Javanese", "Sundanese", "Balinese +700 more"],
          currency: "Indonesian Rupiah",
          people: "Javanese, Sundanese, Malay, Batak, Maduranese, Betawi, Minangkabau; over 300 distinct groups",
          culture: "World's largest archipelago nation; Batik textile (UNESCO); Gamelan music; Wayang shadow puppetry; Balinese Hinduism.",
          tourist_spots: ["Bali temples and rice terraces", "Borobudur Buddhist Temple", "Komodo Dragons", "Raja Ampat islands", "Bromo Volcano", "Yogyakarta"],
          uniqueness: "Indonesia is the world's largest archipelago (17,000+ islands) and has the largest Muslim population on Earth.",
          fun_facts: ["Indonesia spans 3 time zones.", "Borobudur is the world's largest Buddhist temple.", "The Komodo dragon is the world's largest lizard, found only in Indonesia.", "Indonesia has about 130 active volcanoes."],
          photo_query: "indonesia bali temple rice terrace borobudur"
     },
     {
          name: "Iran", code: "ir", continent: "Asia", capital: "Tehran", population: "87M", area: "1,648,195 km²",
          languages: ["Persian (Farsi)", "Azerbaijani", "Kurdish", "Arabic", "Balochi"],
          currency: "Iranian Rial",
          people: "Persian, Azerbaijani, Kurd, Lor, Mazanderani, Gilaki, Arab, Baloch",
          culture: "Ancient Persian civilization (Achaemenid, Sassanid); Persian poetry (Rumi, Hafez, Omar Khayyam); carpet weaving; polo.",
          tourist_spots: ["Persepolis", "Isfahan Naqsh-e Jahan Square", "Shiraz Nasir al-Mulk Mosque", "Yazd Wind Towers", "Golestan Palace Tehran"],
          uniqueness: "Persian civilization is one of the world's oldest (2,600+ years); Polo was invented in Persia.",
          fun_facts: ["Iran invented the game of Polo.", "Naqsh-e Jahan Square in Isfahan is one of the world's largest city squares.", "Persian cats originated in Iran.", "The word 'paradise' comes from the Old Persian word for garden (pairidaeza)."],
          photo_query: "iran persepolis isfahan colorful mosque"
     },
     {
          name: "Iraq", code: "iq", continent: "Asia", capital: "Baghdad", population: "42M", area: "438,317 km²",
          languages: ["Arabic", "Kurdish"], currency: "Iraqi Dinar",
          people: "Arab, Kurd, Turkmen, Assyrian, Shabak, Yazidi",
          culture: "Birthplace of civilization (Mesopotamia); Sumerian cuneiform writing; ancient Babylon; Mesopotamian art.",
          tourist_spots: ["Babylon ruins", "Ziggurat of Ur", "Erbil Citadel", "Hatra ruins", "Marshlands of southern Iraq", "Lalish Yazidi shrine"],
          uniqueness: "Iraq is the cradle of civilization — ancient Mesopotamia gave humanity writing, law, and cities.",
          fun_facts: ["The world's first written language (Sumerian cuneiform) was invented in Iraq.", "The world's first code of laws (Code of Hammurabi) originated in Babylon.", "Iraq's southern marshes are the legendary Garden of Eden."],
          photo_query: "iraq mesopotamia babylon ruins ancient"
     },
     {
          name: "Israel", code: "il", continent: "Asia", capital: "Jerusalem", population: "10M", area: "20,770 km²",
          languages: ["Hebrew", "Arabic"], currency: "Israeli New Shekel",
          people: "Jewish (Ashkenazi, Sephardic, Mizrahi, Ethiopian, other), Arab, Druze, Bedouin",
          culture: "Crossroads of Judaism, Christianity, and Islam; Middle Eastern cuisine (hummus, falafel); start-up nation tech culture.",
          tourist_spots: ["Western Wall Jerusalem", "Church of the Holy Sepulchre", "Dome of the Rock", "Dead Sea", "Masada", "Tel Aviv beaches", "Petra (Jordan nearby)"],
          uniqueness: "Jerusalem is the holy city for three of the world's major religions; Israel is Asia's tech 'start-up nation'.",
          fun_facts: ["The Dead Sea is Earth's lowest point at −430 m.", "You can float in the Dead Sea without trying due to extreme salinity.", "Israel has more museums per capita than any other country."],
          photo_query: "israel jerusalem western wall dome rock"
     },
     {
          name: "Japan", code: "jp", continent: "Asia", capital: "Tokyo", population: "125M", area: "377,975 km²",
          languages: ["Japanese"], currency: "Japanese Yen",
          people: "Japanese (98.5%); Korean, Chinese, Brazilian-Japanese minorities",
          culture: "Samurai and shogunate history; tea ceremony; Kabuki theater; cherry blossoms (Sakura); anime/manga; Shinto/Buddhism.",
          tourist_spots: ["Mount Fuji", "Tokyo Shibuya", "Kyoto temples & geisha", "Hiroshima Peace Memorial", "Osaka Castle", "Arashiyama Bamboo Grove", "Nara deer park"],
          uniqueness: "Japan has more 100-year-old citizens per capita than any other country; inventor of modern emoji, sushi, and anime.",
          fun_facts: ["Japan has 127 UNESCO World Heritage Sites.", "Japan invented the bullet train (Shinkansen) in 1964.", "There are more vending machines in Japan than in the entire US.", "Japan has the world's oldest company (Kongō Gumi, founded 578 AD)."],
          photo_query: "japan fuji cherry blossom kyoto temple"
     },
     {
          name: "Jordan", code: "jo", continent: "Asia", capital: "Amman", population: "10M", area: "89,342 km²",
          languages: ["Arabic"], currency: "Jordanian Dinar",
          people: "Jordanian Arabs, Palestinian Arabs, Bedouin, Circassian, Armenian",
          culture: "Bedouin hospitality culture; Nabataean heritage; Mansaf (lamb dish) is national pride; Petra carved-city tradition.",
          tourist_spots: ["Petra (Rose City)", "Wadi Rum desert", "Dead Sea", "Jerash Roman City", "Aqaba coral reef", "Amman Citadel"],
          uniqueness: "Petra, the 'Rose City', is one of the New 7 Wonders of the World — carved entirely into pink sandstone cliffs.",
          fun_facts: ["Wadi Rum was used as a filming location for The Martian, Lawrence of Arabia.", "Jordan hosts more refugees per capita than almost any other country.", "Mansaf (lamb in fermented yogurt) is served communally on large trays."],
          photo_query: "jordan petra rose city wadi rum"
     },
     {
          name: "Kazakhstan", code: "kz", continent: "Asia", capital: "Astana (Nur-Sultan)", population: "20M", area: "2,724,900 km²",
          languages: ["Kazakh", "Russian"], currency: "Kazakhstani Tenge",
          people: "Kazakh, Russian, Uzbek, Ukrainian, Uyghur, Tatar",
          culture: "Nomadic steppe culture; felt-making; eagle hunting; Dombra music; kumiss (fermented mare's milk).",
          tourist_spots: ["Charyn Canyon", "Altai Mountains", "Baikonur Cosmodrome", "Burabay National Park", "Astana futuristic skyline"],
          uniqueness: "Kazakhstan is the world's largest landlocked country; Baikonur Cosmodrome launched the first human (Gagarin) into space.",
          fun_facts: ["Apples originated in Kazakhstan — the Tian Shan mountains are the apple's ancestral homeland.", "Kazakhstan was the USSR's nuclear testing site (456 tests).", "Borat's Kazakhstan is fictional; the real country is vast and modern."],
          photo_query: "kazakhstan steppe astana charyn canyon"
     },
     {
          name: "Kuwait", code: "kw", continent: "Asia", capital: "Kuwait City", population: "4.7M", area: "17,818 km²",
          languages: ["Arabic"], currency: "Kuwaiti Dinar",
          people: "Kuwaiti Arab, South Asian expats, Egyptian, other Arab",
          culture: "Bedouin heritage, pearl-diving history, modernized Gulf culture; famous for dhow boats and the Kuwait Towers.",
          tourist_spots: ["Kuwait Towers", "The Avenues Mall", "Grand Mosque", "Al Ahmadi", "Failaka Island", "Souk Mubarakiya"],
          uniqueness: "The Kuwaiti Dinar is the world's highest-valued currency; discovered oil in 1938 and transformed into a wealthy state.",
          fun_facts: ["Kuwait has no rivers or lakes whatsoever.", "Kuwait's oil reserves were the spark of the 1990 Gulf War."],
          photo_query: "kuwait towers city desert"
     },
     {
          name: "Kyrgyzstan", code: "kg", continent: "Asia", capital: "Bishkek", population: "7M", area: "199,951 km²",
          languages: ["Kyrgyz", "Russian"], currency: "Kyrgyzstani Som",
          people: "Kyrgyz, Uzbek, Russian, Dungan, Uyghur",
          culture: "Nomadic yurt culture; Manas Epic (world's longest oral epic); eagle hunting; horse games (Kok-Boru).",
          tourist_spots: ["Lake Issyk-Kul (2nd largest alpine lake)", "Tian Shan Mountains", "Song-Kol Lake", "Burana Tower", "Ala Archa National Park"],
          uniqueness: "The Manas Epic is the world's longest oral epic poem, 20x longer than Homer's Odyssey.",
          fun_facts: ["70% of Kyrgyzstan is above 2,500 m altitude.", "The Kyrgyz have a tradition of 'ala kachuu' — bride kidnapping, now increasingly illegal."],
          photo_query: "kyrgyzstan issyk-kul lake mountains yurt"
     },
     {
          name: "Laos", code: "la", continent: "Asia", capital: "Vientiane", population: "7.5M", area: "236,800 km²",
          languages: ["Lao"], currency: "Lao Kip",
          people: "Lao Loum, Lao Theung, Lao Soung (Hmong, Yao) — 49 ethnic groups",
          culture: "Buddhist temple culture; Boun Bang Fai (rocket festival); sticky rice staple; French colonial café culture.",
          tourist_spots: ["Luang Prabang", "Plain of Jars", "Vat Phou Temple", "Kuang Si Falls", "Si Phan Don (4,000 Islands)", "The Bolaven Plateau"],
          uniqueness: "Laos is the most bombed country per capita in history (from Vietnam War); Plain of Jars is a mysterious ancient site.",
          fun_facts: ["Laos is the only landlocked country in Southeast Asia.", "The Plain of Jars has thousands of ancient stone jars of unknown origin.", "Sticky rice is eaten at every meal, often with hands."],
          photo_query: "laos luang prabang temple kuang si falls"
     },
     {
          name: "Lebanon", code: "lb", continent: "Asia", capital: "Beirut", population: "5.5M", area: "10,452 km²",
          languages: ["Arabic", "French", "English"], currency: "Lebanese Pound",
          people: "Arab Lebanese (Maronite, Sunni, Shia, Druze), Armenian, Kurdish",
          culture: "One of the ancient world's greatest trading civilizations (Phoenician); Beirut is Middle East's cultural capital.",
          tourist_spots: ["Byblos (oldest continually inhabited city)", "Baalbek Roman temples", "Beirut Corniche", "Jeita Grotto", "Cedars of Lebanon"],
          uniqueness: "Lebanon (ancient Phoenicia) gave the world the alphabet — the Phoenician alphabet is the ancestor of all modern alphabets.",
          fun_facts: ["Lebanese diaspora (~15M) outnumbers Lebanon's actual population (~6M).", "The Cedars of Lebanon are mentioned in the oldest written epics (Epic of Gilgamesh).", "Byblos is one of the world's oldest continuously inhabited cities."],
          photo_query: "lebanon baalbek cedars byblos beirut"
     },
     {
          name: "Malaysia", code: "my", continent: "Asia", capital: "Kuala Lumpur", population: "33M", area: "329,847 km²",
          languages: ["Malay (Bahasa Malaysia)", "English", "Chinese dialects", "Tamil"],
          currency: "Malaysian Ringgit",
          people: "Malay (Bumiputera), Chinese, Indian, indigenous Orang Asli and Dayak",
          culture: "Multicultural 'Malaysia Boleh' culture; Petronas Towers symbol; Batik; Bollywood and K-pop influences; Mamak culture.",
          tourist_spots: ["Petronas Twin Towers", "Langkawi Island", "Mount Kinabalu", "Borneo Rainforest", "Penang Heritage City", "Cameron Highlands"],
          uniqueness: "Malaysia's Borneo rainforest is one of the world's oldest (130 million years); Mount Kinabalu is the highest peak in Southeast Asia.",
          fun_facts: ["The Petronas Towers were the world's tallest buildings 1998–2004.", "Malaysia has over 200 islands.", "Orangutans only exist in Borneo and Sumatra."],
          photo_query: "malaysia petronas towers langkawi borneo"
     },
     {
          name: "Maldives", code: "mv", continent: "Asia", capital: "Malé", population: "540K", area: "298 km²",
          languages: ["Dhivehi"], currency: "Maldivian Rufiyaa",
          people: "Maldivian (South Asian, Arab, East African descent)",
          culture: "Islamic culture; traditional Bodu Beru drumming; lacquerware crafts; fishing heritage.",
          tourist_spots: ["Overwater bungalows", "Ari Atoll snorkeling", "Male Fish Market", "HP Reef", "Banana Reef diving", "Vaadhoo bioluminescent beach"],
          uniqueness: "Maldives is the world's flattest country (average elevation 1.5 m) and most at-risk from sea-level rise.",
          fun_facts: ["The Maldives held an underwater cabinet meeting in 2009 to raise climate awareness.", "Vaadhoo Beach glows blue at night due to bioluminescent plankton."],
          photo_query: "maldives overwater bungalow turquoise lagoon"
     },
     {
          name: "Mongolia", code: "mn", continent: "Asia", capital: "Ulaanbaatar", population: "3.4M", area: "1,564,116 km²",
          languages: ["Mongolian"], currency: "Mongolian Tögrög",
          people: "Khalkha Mongols (86%), Kazakh, Buryat, Tsaatan",
          culture: "Nomadic horse culture; Genghis Khan heritage; Ger (yurt) living; throat-singing (khoomei); Naadam festival.",
          tourist_spots: ["Gobi Desert", "Genghis Khan Statute Complex", "Khövsgöl Lake", "Flaming Cliffs", "Orkhon Valley", "Terelj National Park"],
          uniqueness: "Mongolia is the world's most sparsely populated country; the Mongol Empire was the largest contiguous empire in history.",
          fun_facts: ["The Mongolian Empire at its peak covered 24 million km² — 22% of Earth's land.", "Mongolian traditional music (khoomei, or throat singing) is UNESCO heritage.", "Mongolians use a GPS-free navigation system based on stars and landmarks."],
          photo_query: "mongolia gobi desert ger nomad"
     },
     {
          name: "Myanmar (Burma)", code: "mm", continent: "Asia", capital: "Naypyidaw", population: "55M", area: "676,578 km²",
          languages: ["Burmese"], currency: "Myanmar Kyat",
          people: "Bamar, Shan, Karen, Rakhine, Kachin, Chin, Kayah, Mon",
          culture: "Theravada Buddhist culture; Burmese lacquerware and weaving; Mandalay marionette theater; Thanaka face paste.",
          tourist_spots: ["Bagan pagodas (4,000+)", "Inle Lake floating villages", "Shwedagon Pagoda", "Mandalay Hill", "Golden Rock Kyaiktiyo"],
          uniqueness: "Bagan contains more than 4,000 ancient Buddhist temples and pagodas — one of Asia's greatest archaeological sites.",
          fun_facts: ["Myanmar is one of only three countries that don't officially use the metric system.", "The Golden Rock of Kyaiktiyo appears to defy gravity.", "Myanmar uses its own time zone: GMT+6:30."],
          photo_query: "myanmar bagan pagodas sunrise hot air balloon"
     },
     {
          name: "Nepal", code: "np", continent: "Asia", capital: "Kathmandu", population: "30M", area: "147,181 km²",
          languages: ["Nepali", "Maithili", "Bhojpuri", "Tharu"], currency: "Nepalese Rupee",
          people: "Chhettri, Brahman-Hill, Magar, Tharu, Tamang, Newar, Sherpa",
          culture: "Birthplace of Buddha; living goddess (Kumari) tradition; Sherpa mountaineering culture; Hindu-Buddhist coexistence.",
          tourist_spots: ["Everest Base Camp", "Kathmandu Durbar Square", "Pokhara Lakeside", "Chitwan National Park", "Lumbini (birthplace of Buddha)", "Annapurna Circuit"],
          uniqueness: "Nepal contains 8 of the world's 10 highest peaks; birthplace of Siddhartha Gautama (the Buddha).",
          fun_facts: ["Mount Everest (8,849 m) is the world's highest peak.", "Nepal's flag is the only national flag that is not rectangular.", "The word 'Sherpa' is synonymous with mountain guiding — a Sherpa ethnic group skill."],
          photo_query: "nepal everest base camp kathmandu mountains"
     },
     {
          name: "North Korea", code: "kp", continent: "Asia", capital: "Pyongyang", population: "26M", area: "120,538 km²",
          languages: ["Korean"], currency: "North Korean Won",
          people: "Korean (homogeneous)",
          culture: "Juche ideology; Mass Games spectacle; martial arts (Taekwondo co-origin); traditional court music.",
          tourist_spots: ["Pyongyang skyline", "Kumsusan Palace", "DMZ (38th Parallel)", "Mount Paektu", "Kaesong UNESCO Ancient Tombs"],
          uniqueness: "One of the world's most isolated nations; the DMZ at the 38th parallel is one of the most fortified borders on Earth.",
          fun_facts: ["Mount Paektu is a sacred volcano in Korean mythology.", "North Korea uses its own calendar system (Juche) — 2026 is Juche 115.", "The border with South Korea (DMZ) is now a wildlife sanctuary due to zero human activity."],
          photo_query: "north korea pyongyang skyline dmt"
     },
     {
          name: "Oman", code: "om", continent: "Asia", capital: "Muscat", population: "4.6M", area: "309,500 km²",
          languages: ["Arabic"], currency: "Omani Rial",
          people: "Omani Arab, South Asian, East African (Zanzibari origin)",
          culture: "Ancient maritime trading culture; Frankincense heritage; traditional khanjar dagger; falconry.",
          tourist_spots: ["Wahiba Sands Desert", "Mutrah Souq", "Wadi Shab", "Jebel Akhdar", "Nizwa Fort", "Musandam Fjords"],
          uniqueness: "Oman was the world's greatest maritime trading empire in the 18th–19th century; produces the world's finest frankincense.",
          fun_facts: ["Frankincense trees grow only in Oman (and a few neighboring countries).", "Oman remained Islamic and neutral during both World Wars."],
          photo_query: "oman muscat wahiba desert fjord"
     },
     {
          name: "Pakistan", code: "pk", continent: "Asia", capital: "Islamabad", population: "230M", area: "881,913 km²",
          languages: ["Urdu", "English", "Punjabi", "Sindhi", "Pashto", "Balochi"],
          currency: "Pakistani Rupee",
          people: "Punjabi, Sindhi, Pashtun, Baloch, Muhajir, Kashmiri",
          culture: "Mughal heritage; Sufi qawwali music (Nusrat Fateh Ali Khan); truck art culture; polo (introduced to the world from this region).",
          tourist_spots: ["K2 Base Camp", "Lahore Mughal Fort & Badshahi Mosque", "Mohenjo-daro", "Karakoram Highway", "Hunza Valley", "Deosai Plains"],
          uniqueness: "Pakistan's Karakoram mountain range has more peaks above 8,000 m than anywhere else, including four 8,000m+ peaks (K2, Nanga Parbat, Gasherbrum I & II).",
          fun_facts: ["K2 (8,611 m) is the world's second-highest and technically most dangerous peak.", "The Indus Valley Civilization (Mohenjo-daro, Harappa) is one of the world's oldest cities at 4,500 years old.", "The Karakoram Highway is called the 'Eighth Wonder of the World'."],
          photo_query: "pakistan k2 hunza valley lahore"
     },
     {
          name: "Palestine", code: "ps", continent: "Asia", capital: "Ramallah (de facto)", population: "5.3M", area: "6,220 km²",
          languages: ["Arabic"], currency: "Israeli Shekel / Jordanian Dinar",
          people: "Palestinian Arabs, Bedouin",
          culture: "Ancient Canaanite and Abrahamic heritage; embroidery (tatreez/cross-stitch) is UNESCO cultural heritage; olive oil culture.",
          tourist_spots: ["Church of the Nativity Bethlehem", "Haram al-Sharif Jerusalem", "Jericho (world's oldest city)", "Dead Sea", "Ramallah", "Hebron Old City"],
          uniqueness: "Jericho is believed to be the world's oldest continuously inhabited city (10,000+ years).",
          fun_facts: ["Palestinian tatreez (embroidery) is UNESCO listed intangible heritage.", "The olive tree has been central to Palestinian culture for thousands of years."],
          photo_query: "palestine bethlehem church nativity jerusalem"
     },
     {
          name: "Philippines", code: "ph", continent: "Asia", capital: "Manila", population: "115M", area: "343,448 km²",
          languages: ["Filipino (Tagalog)", "English"], currency: "Philippine Peso",
          people: "Tagalog, Bisaya/Visayan, Ilocano, Bikol, Kapampangan, Maranao, Tausug, Lumad indigenous groups",
          culture: "Spanish-American hybrid culture; fiestas; bayanihan (communal unity); lechon roasting; boxing (Manny Pacquiao).",
          tourist_spots: ["Palawan Island", "Chocolate Hills Bohol", "Ifugao Rice Terraces", "Mayon Volcano", "Tubbataha Reef", "Intramuros Manila"],
          uniqueness: "The Philippines has the world's longest Christmas season (starts in September!); Palawan is consistently voted the world's best island.",
          fun_facts: ["Yo-yo was invented in the Philippines.", "The Philippines has over 7,100 islands.", "The Ifugao Rice Terraces are 2,000 years old and called the 'Eighth Wonder of the World'."],
          photo_query: "philippines palawan chocolate hills rice terraces"
     },
     {
          name: "Qatar", code: "qa", continent: "Asia", capital: "Doha", population: "2.9M", area: "11,586 km²",
          languages: ["Arabic"], currency: "Qatari Riyal",
          people: "Qatari Arab, South Asian, Filipino, Arab expat",
          culture: "Bedouin heritage meets ultra-modern; falconry (UNESCO); pearl diving history; Al Jazeera media hub; FIFA 2022 host.",
          tourist_spots: ["Souq Waqif", "Museum of Islamic Art", "Al Wakrah", "The Pearl-Qatar", "Katara Cultural Village", "Zekreet desert"],
          uniqueness: "Qatar has the world's highest GDP per capita; hosted the first FIFA World Cup in the Middle East (2022).",
          fun_facts: ["Qatar was a tiny pearl-fishing village before oil discovery in 1939.", "95% of Qatar's water comes from desalination plants.", "Qatar has the world's largest natural gas reserves (shared with Iran)."],
          photo_query: "qatar doha skyline souq waqif"
     },
     {
          name: "Saudi Arabia", code: "sa", continent: "Asia", capital: "Riyadh", population: "36M", area: "2,149,690 km²",
          languages: ["Arabic"], currency: "Saudi Riyal",
          people: "Saudi Arab, Bedouin, immigrant workers from South Asia and other regions",
          culture: "Birthplace of Islam; Mecca and Medina (holiest cities in Islam); Ardah sword dance; Arabian coffee culture.",
          tourist_spots: ["Mecca Grand Mosque", "Medina Al-Masjid an-Nabawi", "AlUla & Hegra Nabataean ruins", "Edge of the World cliff", "Diriyah", "Asir Mountains"],
          uniqueness: "Saudi Arabia contains Mecca — Islam's holiest city visited by over 2 million pilgrims annually for Hajj.",
          fun_facts: ["Saudi Arabia is the world's largest oil exporter.", "Women were only allowed to drive in 2018.", "AlUla's Hegra is Saudi Arabia's first UNESCO site — ancient Nabataean city carved in rock."],
          photo_query: "saudi arabia mecca hegra alula desert"
     },
     {
          name: "Singapore", code: "sg", continent: "Asia", capital: "Singapore City", population: "5.9M", area: "728 km²",
          languages: ["English", "Mandarin", "Malay", "Tamil"], currency: "Singapore Dollar",
          people: "Chinese, Malay, Indian, Eurasian",
          culture: "Garden city ethos; hawker food culture (UNESCO); Lee Kuan Yew's economic miracle model; multicultural harmony.",
          tourist_spots: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Chinatown", "Little India", "Singapore Zoo", "Hawker Centers"],
          uniqueness: "Singapore transformed from a fishing village to one of the world's richest nations in one generation.",
          fun_facts: ["Singapore is one of only three city-states in the world.", "Chewing gum is banned in Singapore (except for medical purposes).", "Singapore has the world's most expensive real estate.", "It rains almost every day due to equatorial climate."],
          photo_query: "singapore marina bay sands gardens by bay"
     },
     {
          name: "South Korea", code: "kr", continent: "Asia", capital: "Seoul", population: "51M", area: "100,363 km²",
          languages: ["Korean"], currency: "South Korean Won",
          people: "Korean (homogeneous), small Chinese minority",
          culture: "K-pop and K-drama global phenomenon (BTS, BLACKPINK, Parasite, Squid Game); kimchi culture; jimjilbang bathhouse tradition.",
          tourist_spots: ["Gyeongbokgung Palace", "Jeju Island", "Bukchon Hanok Village", "Seoraksan National Park", "Namsan Tower", "DMZ"],
          uniqueness: "South Korea rose from rubble after Korean War (1953) to become the world's 10th largest economy in 70 years.",
          fun_facts: ["South Korea has the world's fastest internet speeds.", "BTS generates more than $5 billion per year for South Korea's economy.", "Koreans are considered 1 year old at birth in traditional counting.", "Taekwondo is Korea's national martial art."],
          photo_query: "south korea seoul palace bts culture hanbok"
     },
     {
          name: "Sri Lanka", code: "lk", continent: "Asia", capital: "Sri Jayawardenepura Kotte / Colombo", population: "22M", area: "65,610 km²",
          languages: ["Sinhala", "Tamil"], currency: "Sri Lankan Rupee",
          people: "Sinhalese, Tamil, Sri Lankan Moor, Burgher",
          culture: "Ancient Buddhist civilization; tea culture; kandyan dance; elephant processions (Esala Perahera); spice heritage.",
          tourist_spots: ["Sigiriya Lion Rock", "Temple of the Tooth Relic", "Galle Fort", "Yala National Park", "Adam's Peak", "Pinnawala Elephant Orphanage", "Tea estates"],
          uniqueness: "Sri Lanka was known as Serendib — origin of the word 'serendipity'; Sigiriya is a 5th-century rock fortress palace.",
          fun_facts: ["Serendipity comes from Serendib, the Arabic name for Sri Lanka.", "Sri Lanka has a documented history of 3,000+ years.", "Leopard density in Yala National Park is the world's highest."],
          photo_query: "sri lanka sigiriya tea plantation elephant"
     },
     {
          name: "Syria", code: "sy", continent: "Asia", capital: "Damascus", population: "22M", area: "185,180 km²",
          languages: ["Arabic", "Kurdish"], currency: "Syrian Pound",
          people: "Arab, Kurdish, Armenian, Assyrian, Turkmen, Druze",
          culture: "Damascus is one of the world's oldest continually inhabited cities; Umayyad Mosque; Souq al-Hamidiyya; mosaic arts.",
          tourist_spots: ["Old City Damascus", "Umayyad Mosque", "Palmyra ruins", "Krak des Chevaliers Crusader castle", "Aleppo Souk"],
          uniqueness: "Damascus is one of the oldest continuously inhabited cities in the world (11,000+ years).",
          fun_facts: ["The Damascus steel (famous for sword-making) was produced here for centuries.", "Palmyra was once called 'Bride of the Desert' — a wealthy silk road oasis city."],
          photo_query: "syria damascus umayyad mosque palmyra"
     },
     {
          name: "Taiwan", code: "tw", continent: "Asia", capital: "Taipei", population: "23M", area: "36,193 km²",
          languages: ["Mandarin Chinese", "Taiwanese (Hokkien)", "Hakka"],
          currency: "New Taiwan Dollar",
          people: "Han Chinese (Hoklo, Hakka), indigenous Austronesian peoples (Amis, Atayal, Paiwan, etc.)",
          culture: "Night market culture, bubble tea birthplace, Taiwanese opera, lantern festivals, indigenous tribal traditions.",
          tourist_spots: ["Taipei 101", "Taroko Gorge", "Sun Moon Lake", "Jiufen Old Street", "Alishan Forest Railway", "Kenting National Park"],
          uniqueness: "Taiwan invented bubble tea (1980s Taichung) — now a global sensation; Taroko Gorge is one of Asia's most dramatic landscapes.",
          fun_facts: ["Taiwan was the first Asian country to legalize same-sex marriage (2019).", "Taiwan is the world's largest producer of computer chips (TSMC).", "Bubble tea was invented here in the 1980s."],
          photo_query: "taiwan taipei 101 taroko gorge lantern"
     },
     {
          name: "Tajikistan", code: "tj", continent: "Asia", capital: "Dushanbe", population: "10M", area: "143,100 km²",
          languages: ["Tajik", "Russian"], currency: "Tajikistani Somoni",
          people: "Tajik (80%), Uzbek, Russian, Kyrgyz",
          culture: "Persian-Tajik cultural heritage; Nowruz (Persian New Year); traditional ikat weaving; Shashmaqam classical music.",
          tourist_spots: ["Pamir Highway (world's 2nd highest road)", "Iskanderkul Lake", "Yagnob Valley", "Wakhan Corridor", "Fann Mountains"],
          uniqueness: "The Pamir Highway is one of the world's highest and most dramatic roads (avg. 4,655 m altitude).",
          fun_facts: ["Tajikistan is a mountainous country — 93% of its territory is covered by mountains.", "The Tajik language is closely related to Persian/Farsi."],
          photo_query: "tajikistan pamir highway mountains"
     },
     {
          name: "Thailand", code: "th", continent: "Asia", capital: "Bangkok", population: "70M", area: "513,120 km²",
          languages: ["Thai"], currency: "Thai Baht",
          people: "Thai, Lao, Chinese, Malay, Khmer, Karen, Hmong, Mon",
          culture: "Theravada Buddhism; Muay Thai; Songkran water festival; Loy Krathong lantern festival; vibrant street food culture.",
          tourist_spots: ["Grand Palace Bangkok", "Wat Phra Kaew", "Chiang Mai temples", "Phi Phi Islands", "Railay Beach", "Ayutthaya ruins", "Elephant Sanctuaries"],
          uniqueness: "Thailand is the only Southeast Asian nation never colonized by Europeans; home of Muay Thai and Thai massage.",
          fun_facts: ["Thailand is the world's largest rice exporter.", "The Thai smile culture is globally famous — Thailand is the 'Land of Smiles'.", "Thai New Year (Songkran) is the world's largest water fight."],
          photo_query: "thailand grand palace bangkok phi phi islands"
     },
     {
          name: "Timor-Leste", code: "tl", continent: "Asia", capital: "Dili", population: "1.4M", area: "14,874 km²",
          languages: ["Tetum", "Portuguese"], currency: "US Dollar",
          people: "Tetum, Mambae, Tukudede, Galole, Kemak, Baikeno",
          culture: "Catholic faith deeply embedded after Portuguese colonization; traditional tais weaving; lia fuan oral traditions.",
          tourist_spots: ["Cristo Rei of Dili", "Atauro Island", "Nino Konis Santana National Park", "Jaco Island", "Maubisse Highlands"],
          uniqueness: "Timor-Leste is one of the world's newest nations (independence in 2002) and one of Asia's youngest democracies.",
          fun_facts: ["East Timor was occupied by Indonesia from 1975 to 1999.", "Atauro Island has the world's highest fish biodiversity."],
          photo_query: "timor leste dili atauro island"
     },
     {
          name: "Turkey", code: "tr", continent: "Asia", capital: "Ankara", population: "85M", area: "783,562 km²",
          languages: ["Turkish"], currency: "Turkish Lira",
          people: "Turks (70-75%), Kurds (18%), Armenians, Greeks, Laz, Romani",
          culture: "Ottoman Empire heritage, Sufi whirling dervishes, hamam (Turkish bath), baklava, carpets, folk music.",
          tourist_spots: ["Hagia Sophia Istanbul", "Blue Mosque", "Cappadocia hot air balloons", "Pamukkale travertines", "Ephesus ruins", "Göbekli Tepe", "Topkapi Palace"],
          uniqueness: "Göbekli Tepe in Turkey is the world's oldest temple (11,600 years old) — predating Stonehenge by 6,000 years.",
          fun_facts: ["Istanbul bridges two continents — Europe and Asia.", "Göbekli Tepe rewrote human history — civilization predates agriculture.", "Coffee was introduced to Europe via Turkey.", "The Trojan War took place in what is now Turkey (Troy ruins still exist)."],
          photo_query: "turkey cappadocia istanbul hagia sophia"
     },
     {
          name: "Turkmenistan", code: "tm", continent: "Asia", capital: "Ashgabat", population: "6M", area: "488,100 km²",
          languages: ["Turkmen", "Russian"], currency: "Turkmenian Manat",
          people: "Turkmen, Uzbek, Russian",
          culture: "Carpet weaving (UNESCO); Akhal-Teke horses (most beautiful horse breed); Nowruz festival; tribal Yomut culture.",
          tourist_spots: ["Darvaza Gas Crater (Door to Hell)", "Ancient Merv city", "Ashgabat marble city", "Yangykala Canyon", "Köw-Ata Underground Lake"],
          uniqueness: "The Darvaza Gas Crater ('Door to Hell') has been continuously burning since 1971 when a Soviet drillsite collapsed.",
          fun_facts: ["Ashgabat has more white marble buildings than any other city — in the Guinness World Records.", "Turkmenistan is one of the world's most closed societies."],
          photo_query: "turkmenistan darvaza gas crater door hell"
     },
     {
          name: "United Arab Emirates", code: "ae", continent: "Asia", capital: "Abu Dhabi", population: "10M", area: "83,600 km²",
          languages: ["Arabic"], currency: "UAE Dirham",
          people: "Emirati Arab (12%), South Asian, Filipino, Arab expat",
          culture: "Bedouin heritage modernized; falconry (UNESCO); camel racing; traditional souks meet ultra-modern malls.",
          tourist_spots: ["Burj Khalifa Dubai", "Sheikh Zayed Grand Mosque Abu Dhabi", "Palm Jumeirah", "Louvre Abu Dhabi", "Desert Safaris", "Dubai Frame"],
          uniqueness: "Burj Khalifa (828 m) is the world's tallest building; Dubai transformed from desert to one of the world's most visited cities in 50 years.",
          fun_facts: ["UAE has no income tax.", "Dubai has 140 nationalities living in it — one of the world's most diverse cities.", "The Sheikh Zayed Grand Mosque has the world's largest hand-knotted carpet."],
          photo_query: "uae dubai burj khalifa sheikh zayed mosque"
     },
     {
          name: "Uzbekistan", code: "uz", continent: "Asia", capital: "Tashkent", population: "36M", area: "447,400 km²",
          languages: ["Uzbek", "Russian", "Tajik"], currency: "Uzbekistani Sum",
          people: "Uzbek, Russian, Tajik, Kazakh, Karakalpak",
          culture: "Silk Road civilization; Timurid architecture; Plov (pilaf — UNESCO Uzbek dish); Samarkand's azure domes.",
          tourist_spots: ["Registan Square Samarkand", "Shah-i-Zinda necropolis", "Bibi-Khanym Mosque", "Khiva old city", "Bukhara", "Aral Sea", "Tashkent metro"],
          uniqueness: "Samarkand's Registan Square is one of the most beautiful in the world; Uzbekistan sits at the heart of the ancient Silk Road.",
          fun_facts: ["Samarkand was the jewel of the ancient Silk Road.", "Uzbekistan is doubly landlocked — surrounded by landlocked countries.", "Tamerlane (Timur) made Samarkand his capital in the 14th century."],
          photo_query: "uzbekistan samarkand registan square silk road"
     },
     {
          name: "Vietnam", code: "vn", continent: "Asia", capital: "Hanoi", population: "98M", area: "331,212 km²",
          languages: ["Vietnamese"], currency: "Vietnamese Dong",
          people: "Viet (Kinh) 86%, 53 other ethnic groups: Tay, Thai, Muong, Khmer, Mong",
          culture: "Confucian family values; Ao Dai national dress; Tet lunar new year; Water puppetry; Pho food culture.",
          tourist_spots: ["Ha Long Bay", "Hoi An Ancient Town", "Phong Nha Caves", "Sapa rice terraces", "Ho Chi Minh City", "Hue Imperial Citadel"],
          uniqueness: "Ha Long Bay has 1,969 limestone islands and islets — one of the New 7 Natural Wonders; home of the world's largest cave (Son Doong).",
          fun_facts: ["Son Doong Cave is so large a Boeing 747 could fly through it.", "Vietnam is the world's 2nd largest coffee exporter.", "Vietnam has one of the world's fastest-growing economies."],
          photo_query: "vietnam ha long bay hoi an sapa"
     },
     {
          name: "Yemen", code: "ye", continent: "Asia", capital: "Sana'a", population: "34M", area: "527,968 km²",
          languages: ["Arabic"], currency: "Yemeni Rial",
          people: "Arab, Afro-Arab, South Asian, European",
          culture: "Ancient Arab civilization (Queen of Sheba legend); tower house architecture; frankincense trade heritage; Sana'a Old City.",
          tourist_spots: ["Old Sana'a City", "Socotra Island", "Shibam Skyscrapers", "Wadi Hadhramaut", "Al-Saleh Mosque", "Marib Dam ruins"],
          uniqueness: "Socotra Island is called 'The Galápagos of the Indian Ocean' — 37% of its plant species are found nowhere else on Earth.",
          fun_facts: ["Socotra's Dragon Blood Tree looks like an alien umbrella and bleeds red sap.", "Shibam (5th century) is called the 'Manhattan of the desert' — world's oldest skyscraper city.", "Yemen is the ancient land of the Queen of Sheba."],
          photo_query: "yemen socotra dragon blood tree shibam"
     }
];
