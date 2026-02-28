const OCEANIA_COUNTRIES = [
     {
          name: "Australia", code: "au", continent: "Oceania", capital: "Canberra", population: "26M", area: "7,692,024 km²",
          languages: ["English", "Aboriginal languages (over 250 indigenous languages)"], currency: "Australian Dollar",
          people: "White Australian (Anglo-Celtic origin), Asian-Australian, Aboriginal and Torres Strait Islander, Multicultural",
          culture: "Surf culture; BBQ (barbie) culture; Cricket and AFL rules football; Aboriginal Dreamtime spirituality; laconic humor.",
          tourist_spots: ["Sydney Opera House", "Great Barrier Reef", "Uluru (Ayers Rock)", "Great Ocean Road", "Daintree Rainforest", "Kakadu National Park", "Whitsunday Islands"],
          uniqueness: "Australia is the world's only country-continent; has 80% of its plant and animal species found nowhere else on Earth.",
          fun_facts: ["Australia has the world's largest coral reef system — Great Barrier Reef (2,300 km).", "Australia has more kangaroos than humans.", "The Great Barrier Reef is the only living thing visible from space.", "Australia is home to 21 of the world's 25 most venomous snakes."],
          photo_query: "australia sydney opera house uluru great barrier reef"
     },
     {
          name: "Fiji", code: "fj", continent: "Oceania", capital: "Suva", population: "930K", area: "18,274 km²",
          languages: ["English", "Fijian", "Hindi"], currency: "Fijian Dollar",
          people: "iTaukei (indigenous Fijian), Fijian Indian, Rotuman, European",
          culture: "'Bula' spirit of hospitality; kava ceremony; meke traditional dance; fire-walking tradition.",
          tourist_spots: ["Yasawa Islands", "Mamanuca Islands", "Taveuni island (Garden of Eden)", "Suva Market", "Cloud 9 platform", "Sigatoka Sand Dunes"],
          uniqueness: "Fiji is considered one of the world's happiest nations; its fire-walking tradition is unique to the indigenous Sawau tribe.",
          fun_facts: ["Fijian fire-walking (vilavilairevo) is not a spiritual ritual — it's hereditary to one clan.", "Fiji's waters have the world's softest coral."],
          photo_query: "fiji yasawa islands palm beach cultural"
     },
     {
          name: "Kiribati", code: "ki", continent: "Oceania", capital: "South Tarawa", population: "120K", area: "811 km²",
          languages: ["English", "Gilbertese (I-Kiribati)"], currency: "Australian Dollar",
          people: "Micronesian I-Kiribati people",
          culture: "Traditional te maneaba meeting house culture; canoe-building; maneaba governance tradition.",
          tourist_spots: ["Christmas Island (Kiritimati)", "Tarawa Atoll WWII site", "Phoenix Islands Protected Area", "South Tarawa lagoon"],
          uniqueness: "Kiribati (pronounced Kiribas) is the first country to enter a new day as it straddles the International Date Line.",
          fun_facts: ["Kiribati is predicted to become uninhabitable within decades due to rising sea levels.", "Kiribati spans a larger ocean area than the US mainland."],
          photo_query: "kiribati atoll pacific island"
     },
     {
          name: "Marshall Islands", code: "mh", continent: "Oceania", capital: "Majuro", population: "42K", area: "181 km²",
          languages: ["Marshallese", "English"], currency: "US Dollar",
          people: "Marshallese (Micronesian)",
          culture: "Ancient stick chart navigation (rebbelib); Bikini Atoll nuclear testing legacy; traditional canoe culture.",
          tourist_spots: ["Bikini Atoll (UNESCO)", "Majuro Atoll", "Arno Atoll", "Laura Beach", "Mili Atoll WWII wrecks"],
          uniqueness: "Bikini Atoll was the site of 23 US nuclear bomb tests (1946–1958) — still radioactive; now an eerie UNESCO site.",
          fun_facts: ["The bikini swimsuit was named after Bikini Atoll (nuclear tests happened the same year, 1946).", "Marshall Islands navigators mapped ocean currents on stick charts 1,000 years ago."],
          photo_query: "marshall islands bikini atoll pacific nuclear"
     },
     {
          name: "Micronesia (Federated States)", code: "fm", continent: "Oceania", capital: "Palikir", population: "115K", area: "702 km²",
          languages: ["English", "Chuukese", "Pohnpeian", "Kosraean", "Yapese"], currency: "US Dollar",
          people: "Chuukese, Pohnpeian, Kosraean, Yapese Micronesian peoples",
          culture: "Yap's traditional stone money (Rai); ancient Nan Madol city; traditional navigation by stars.",
          tourist_spots: ["Nan Madol (Venice of the Pacific)", "Chuuk Lagoon WWII wreck diving", "Yap stone money", "Blue Hole Palau nearby", "Pohnpei waterfalls"],
          uniqueness: "Nan Madol is a 92-island ancient city built on a coral reef — the only ancient city built on the open ocean.",
          fun_facts: ["Yap uses giant stone coins (Rai) — the largest currency by size in the world.", "Chuuk Lagoon has the world's largest collection of WWII shipwrecks — a diver's paradise."],
          photo_query: "micronesia nan madol yap stone money"
     },
     {
          name: "Nauru", code: "nr", continent: "Oceania", capital: "Yaren (de facto)", population: "10.5K", area: "21 km²",
          languages: ["Nauruan", "English"], currency: "Australian Dollar",
          people: "Nauruan, Chinese, I-Kiribati, Tuvaluan",
          culture: "One of the world's smallest nations; former phosphate wealth turned to ruin; unique Australian-influenced traditions.",
          tourist_spots: ["Buada Lagoon", "Phosphate Remnants", "Command Ridge WWII site", "Anibare Bay", "Menen Hotel"],
          uniqueness: "Nauru is the world's smallest island nation and the third-smallest country by area.",
          fun_facts: ["Nauru was once the world's richest country per capita due to phosphate mining — now nearly bankrupt.", "Nauru has no official capital city."],
          photo_query: "nauru pacific island tiny nation beach"
     },
     {
          name: "New Zealand", code: "nz", continent: "Oceania", capital: "Wellington", population: "5.1M", area: "268,021 km²",
          languages: ["English", "Māori", "New Zealand Sign Language"], currency: "New Zealand Dollar",
          people: "New Zealand European (Pākehā), Māori, Pacific Islander, Asian",
          culture: "Māori haka culture; Lord of the Rings landscape; rugby (All Blacks); bungee jumping origin; Kiwi laid-back culture.",
          tourist_spots: ["Milford Sound", "Rotorua geothermal", "Hobbiton (Lord of the Rings)", "Franz Josef Glacier", "Bay of Islands", "Tongariro Alpine Crossing", "Queenstown adventure"],
          uniqueness: "New Zealand was the first country to give women the right to vote (1893); birthplace of bungee jumping.",
          fun_facts: ["NZ was the first country to grant women the right to vote (1893).", "New Zealand has more sheep than people (5:1 ratio).", "Bungee jumping was invented in New Zealand.", "The kiwi bird is the only bird with nostrils at the end of its beak."],
          photo_query: "new zealand milford sound hobbiton maori haka"
     },
     {
          name: "Palau", code: "pw", continent: "Oceania", capital: "Ngerulmud", population: "18K", area: "459 km²",
          languages: ["Palauan", "English"], currency: "US Dollar",
          people: "Palauan Micronesian, Filipino, Chinese",
          culture: "Traditional bai meeting houses; mermaid legends; shark conservation laws; unique Modekngei indigenous religion.",
          tourist_spots: ["Jellyfish Lake (swim with harmless jellyfish)", "Blue Corner dive site", "Rock Islands Southern Lagoon UNESCO", "Peleliu WWII Battlefield", "Ngardmau Waterfall"],
          uniqueness: "Palau's Jellyfish Lake has millions of golden jellyfish that have lost their sting — visitors swim among them freely.",
          fun_facts: ["Palau was the world's first country to create a shark sanctuary.", "The Rock Islands are one of the world's most stunning marine environments."],
          photo_query: "palau jellyfish lake rock islands diving"
     },
     {
          name: "Papua New Guinea", code: "pg", continent: "Oceania", capital: "Port Moresby", population: "10M", area: "462,840 km²",
          languages: ["Tok Pisin", "English", "Hiri Motu", "839+ indigenous languages"], currency: "Papua New Guinean Kina",
          people: "Over 800 distinct indigenous ethnic groups: Papuan, Melanesian, Negrito, Micronesian, Polynesian",
          culture: "World's most linguistically diverse country; Highland tribal culture; sing-sing festivals; elaborate face painting and headdresses.",
          tourist_spots: ["Kokoda Track", "Mount Wilhelm", "Sepik River", "Trobriand Islands", "Madang dive sites", "Hiri Moale Festival Port Moresby"],
          uniqueness: "Papua New Guinea has 839 living languages — more than one sixth of all human languages on Earth.",
          fun_facts: ["PNG has more languages than any other country (~839 languages).", "Ceremonial sing-sing gatherings bring together hundreds of decorated tribal groups.", "The star of David on the PNG flag represents the Southern Cross constellation."],
          photo_query: "papua new guinea tribe sing-sing headdress highlands"
     },
     {
          name: "Samoa", code: "ws", continent: "Oceania", capital: "Apia", population: "220K", area: "2,842 km²",
          languages: ["Samoan", "English"], currency: "Samoan Tālā",
          people: "Samoan (Polynesian)",
          culture: "Fa'a Samoa (Samoan way of life); elaborate tattoo (tatau) tradition; slit drum (pate); lotu church culture.",
          tourist_spots: ["To Sua Ocean Trench (giant natural swimming pool)", "Lalomanu Beach", "Piula Cave Pool", "Robert Louis Stevenson Museum", "Papaseea Sliding Rocks"],
          uniqueness: "Samoa is the birthplace of the Polynesian tattoo (tatau) — ancestor of the modern word 'tattoo'.",
          fun_facts: ["The word 'tattoo' comes from the Samoan word 'tatau'.", "Samoa changed its side of the road in 2009 — one of very few countries to do so.", "Samoa switched time zones in 2011 — jumping forward 24 hours."],
          photo_query: "samoa to sua ocean trench beach polynesian tattoo"
     },
     {
          name: "Solomon Islands", code: "sb", continent: "Oceania", capital: "Honiara", population: "720K", area: "28,896 km²",
          languages: ["English", "Solomon Islands Pijin", "over 70 indigenous languages"], currency: "Solomon Islands Dollar",
          people: "Melanesian (95%), Polynesian, Micronesian, European, Chinese",
          culture: "WWII historical significance (Guadalcanal battle); kastom (customary law) traditions; shell-money culture.",
          tourist_spots: ["Guadalcanal WWII sites", "Marovo Lagoon (world's largest saltwater lagoon)", "Munda Point", "Tetepare Island", "Tavanipupu Island"],
          uniqueness: "Marovo Lagoon is the world's largest saltwater lagoon — crystal clear waters, pristine reefs.",
          fun_facts: ["The Guadalcanal campaign (1942-43) was one of WWII's most significant Pacific battles.", "The Solomon Islands has 900+ islands."],
          photo_query: "solomon islands guadalcanal marovo lagoon wwii"
     },
     {
          name: "Tonga", code: "to", continent: "Oceania", capital: "Nukuʻalofa", population: "100K", area: "747 km²",
          languages: ["Tongan", "English"], currency: "Tongan Paʻanga",
          people: "Tongan Polynesian",
          culture: "Only Polynesian monarchy; female tapa cloth art; kava ceremony; Ha'amonga Trilithon ancient stone monument.",
          tourist_spots: ["Humpback whale swimming (July-Oct)", "Ha'amonga 'a Maui Trilithon", "Swallows' Cave", "Ene'io Botanical Garden", "Niuafo'ou volcano island"],
          uniqueness: "Tonga is the only Pacific island nation that was never colonized; the only remaining Polynesian monarchy.",
          fun_facts: ["Tonga is the only Pacific nation never colonized by Europeans.", "Tonga is the first place on Earth to see the New Year (just east of the Date Line).", "Swimming with humpback whales is one of Tonga's most unforgettable experiences."],
          photo_query: "tonga humpback whale polynesian island"
     },
     {
          name: "Tuvalu", code: "tv", continent: "Oceania", capital: "Funafuti", population: "11K", area: "26 km²",
          languages: ["Tuvaluan", "English"], currency: "Australian Dollar / Tuvaluan Dollar",
          people: "Tuvaluan Polynesian",
          culture: "Traditional fatele dance; canoe culture; fishing central to identity; rising sea levels threatening culture.",
          tourist_spots: ["Funafuti Conservation Area", "Funafuti lagoon", "Traditional village life", "WWII artifacts", "Fishing"],
          uniqueness: "Tuvalu is the world's fourth-smallest country and will likely be one of the first nations to disappear under rising sea levels.",
          fun_facts: ["Tuvalu earns significant income from licensing its '.tv' Internet domain.", "Tuvalu's highest point is only 4.5 m above sea level.", "Tuvalu may be entirely uninhabitable by 2050–2100 if sea levels continue rising."],
          photo_query: "tuvalu funafuti atoll pacific"
     },
     {
          name: "Vanuatu", code: "vu", continent: "Oceania", capital: "Port Vila", population: "330K", area: "12,189 km²",
          languages: ["Bislama", "English", "French", "113 indigenous languages"], currency: "Vanuatu Vatu",
          people: "Ni-Vanuatu Melanesian, European, Asian",
          culture: "Land diving (Naghol, Pentecost Island) — the original bungee jumping; custom village life; kava culture.",
          tourist_spots: ["Yasur Volcano (one of world's most accessible active volcanoes)", "Champagne Beach", "Blue Hole", "Millennium Cave", "Pentecost Land Dive"],
          uniqueness: "Vanuatu's Pentecost Island Land Diving is the original inspiration for bungee jumping — done with vines since the 12th century.",
          fun_facts: ["The Vanuatu Land Dive predates bungee jumping by 800 years.", "Vanuatu has 80+ islands, each with distinct culture and language.", "Yasur Volcano allows visitors to walk up to the crater rim."],
          photo_query: "vanuatu land diving yasur volcano pentecost island"
     }
];

const ANTARCTICA_TERRITORIES = [
     {
          name: "Antarctica", code: "aq", continent: "Antarctica", capital: "None (No permanent capital)", population: "~5,000 researchers (seasonal)", area: "14,200,000 km²",
          languages: ["No official language (English, Russian, Spanish widely spoken by researchers)"], currency: "None",
          people: "No indigenous population; staffed by scientists and researchers from 50+ nations",
          culture: "Scientific research culture; extreme survival expertise; international cooperation under the Antarctic Treaty System.",
          tourist_spots: ["Antarctic Peninsula", "Paradise Harbour", "Lemaire Channel", "Ross Ice Shelf", "South Pole Amundsen–Scott Station", "Deception Island volcanic hot springs"],
          uniqueness: "Antarctica is the world's largest desert (cold desert), coldest continent, and Earth's primary fresh water reservoir under its 1.9 km-thick ice sheet.",
          fun_facts: ["The coldest temperature ever recorded on Earth was −89.2°C at Vostok Station, Antarctica.", "Antarctica has no official country ownership — governed by 54 nations under the 1959 Antarctic Treaty.", "Underneath the ice lies Lake Vostok — a subglacial lake the size of Lake Ontario, sealed for 15 million years.", "Mount Erebus on Ross Island is the world's southernmost active volcano."],
          photo_query: "antarctica penguin ice berg southern pole"
     }
];
