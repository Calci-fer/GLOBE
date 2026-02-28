const EUROPE_COUNTRIES = [
     {
          name: "Albania", code: "al", continent: "Europe", capital: "Tirana", population: "2.8M", area: "28,748 km²",
          languages: ["Albanian"], currency: "Albanian Lek",
          people: "Albanian, Greek, Macedonian, Roma, Aromanian",
          culture: "Bektashi Muslim and Orthodox Christian coexistence; iso-polyphony (UNESCO music); sworn virgins tradition.",
          tourist_spots: ["Butrint ruins", "Gjirokastër", "Berat (City of a Thousand Windows)", "Albanian Riviera", "Lake Ohrid"],
          uniqueness: "Albania's iso-polyphony folk singing is a UNESCO Masterpiece of Intangible Heritage.",
          fun_facts: ["Albania nods mean 'no' and shakes mean 'yes' — opposite of most cultures.", "Bunkers: Albania has 750,000 bunkers built by communist dictator Hoxha."],
          photo_query: "albania berat gjirokaster riviera"
     },
     {
          name: "Andorra", code: "ad", continent: "Europe", capital: "Andorra la Vella", population: "79K", area: "468 km²",
          languages: ["Catalan"], currency: "Euro",
          people: "Andorran, Spanish, French, Portuguese",
          culture: "Medieval co-principality; skiing culture; duty-free shopping tradition; Romanesque architecture.",
          tourist_spots: ["Vallnord Ski Resort", "Caldea Spa", "Casa de la Vall Parliament", "Meritxell Shrine", "Naturlandia"],
          uniqueness: "Andorra is the only co-principality in the world — jointly ruled by the French President and Spanish Bishop.",
          fun_facts: ["Andorra la Vella is the highest capital in Europe (1,023 m).", "Andorra has one of the world's highest life expectancies."],
          photo_query: "andorra pyrenees ski mountains"
     },
     {
          name: "Austria", code: "at", continent: "Europe", capital: "Vienna", population: "9M", area: "83,879 km²",
          languages: ["German"], currency: "Euro",
          people: "Austrians (German-speaking), Serb, Turk, Croatian minorities",
          culture: "Classical music capital (Mozart, Beethoven, Strauss); coffee house culture (UNESCO); Sound of Music; Vienna Philharmonic.",
          tourist_spots: ["Vienna Schönbrunn Palace", "Hallstatt", "Salzburg Mozart birthplace", "Austrian Alps", "Vienna Opera House", "Hohensalzburg Castle"],
          uniqueness: "Vienna is the world capital of classical music; the Vienna Philharmonic New Year's Concert is broadcast to 90 countries.",
          fun_facts: ["Mozart was born in Salzburg, Austria.", "The croissant was invented in Vienna, not France.", "Austria gave the world Red Bull, Sigmund Freud, and the phrase 'Kindergarten'."],
          photo_query: "austria vienna hallstatt salzburg alps"
     },
     {
          name: "Belarus", code: "by", continent: "Europe", capital: "Minsk", population: "9.4M", area: "207,600 km²",
          languages: ["Belarusian", "Russian"], currency: "Belarusian Ruble",
          people: "Belarusians, Russian, Polish, Ukrainian",
          culture: "Slavic folk traditions; straw weaving (UNESCO); Kupala summer festival; Minsk impressive Soviet architecture.",
          tourist_spots: ["Białowieża Forest (last European primeval forest)", "Mir Castle", "Nesvizh Castle", "Brest Fortress", "Minsk city"],
          uniqueness: "Białowieża Forest straddles Belarus and Poland — Europe's last primeval old-growth forest, home to European bison.",
          fun_facts: ["Belarus is home to the last population of wild European bison.", "Chernobyl fallout affected ~20% of Belarus's territory."],
          photo_query: "belarus mir castle bialowieza forest"
     },
     {
          name: "Belgium", code: "be", continent: "Europe", capital: "Brussels", population: "11.6M", area: "30,528 km²",
          languages: ["Dutch (Flemish)", "French", "German"], currency: "Euro",
          people: "Flemish (Dutch), Walloon (French), German-speaking, immigrant communities",
          culture: "Beer capital of the world (1,500+ beer varieties); Belgian chocolate and waffles; carnival carnival traditions (UNESCO).",
          tourist_spots: ["Grand Place Brussels", "Bruges medieval city", "Ghent canals", "Waterloo Battlefield", "Antwerp Cathedral", "Belgian Coast"],
          uniqueness: "Belgium has more beer varieties than any country on Earth; Brussels hosts the EU and NATO headquarters.",
          fun_facts: ["Belgium invented fries (not France).", "Belgium is the world's largest exporter of chocolate.", "The 'Belgian waffle' is actually called 'Brussels waffle' in Belgium."],
          photo_query: "belgium bruges grand place brussels chocolate"
     },
     {
          name: "Bosnia and Herzegovina", code: "ba", continent: "Europe", capital: "Sarajevo", population: "3.3M", area: "51,197 km²",
          languages: ["Bosnian", "Croatian", "Serbian"], currency: "Convertible Mark",
          people: "Bosniaks (Bosnian Muslims), Serbs, Croats",
          culture: "Ottoman and Austro-Hungarian blend; Baščaršija bazaar culture; Sevdah music; Stari Most bridge tradition.",
          tourist_spots: ["Stari Most Bridge Mostar", "Sarajevo old town", "Kravice Waterfalls", "Una National Park", "Blagaj Tekke monastery"],
          uniqueness: "Stari Most (Old Bridge) in Mostar is one of Europe's most iconic bridges — rebuilt after being destroyed in 1993 war.",
          fun_facts: ["The assassination in Sarajevo (1914) triggered World War I.", "Sarajevo hosted the 1984 Winter Olympics."],
          photo_query: "bosnia mostar stari most bridge sarajevo"
     },
     {
          name: "Bulgaria", code: "bg", continent: "Europe", capital: "Sofia", population: "6.5M", area: "110,879 km²",
          languages: ["Bulgarian"], currency: "Bulgarian Lev",
          people: "Bulgarians, Turkish, Roma",
          culture: "Yogurt culture (longest tradition); Bulgarian rose oil (world's largest producer); Nestinarstvo fire dancing (Thrace).",
          tourist_spots: ["Rila Monastery", "Plovdiv old town", "Black Sea Coast", "Belogradchik Rocks", "Sofia Alexander Nevsky Cathedral"],
          uniqueness: "Bulgaria produces 70-85% of the world's rose oil used in perfumes; Cyrillic alphabet was created by Bulgarian monks.",
          fun_facts: ["The Cyrillic alphabet was invented by Saints Cyril and Methodius in 9th century Bulgaria.", "Bulgaria gives head-shaking for 'yes' and nodding for 'no' — same as Albania."],
          photo_query: "bulgaria rila monastery plovdiv black sea"
     },
     {
          name: "Croatia", code: "hr", continent: "Europe", capital: "Zagreb", population: "3.9M", area: "56,594 km²",
          languages: ["Croatian"], currency: "Euro",
          people: "Croats, Serbs, Bosniak minorities",
          culture: "Dalmatian coast culture; Game of Thrones filming locations; klapa polyphonic singing (UNESCO); necktie origin.",
          tourist_spots: ["Dubrovnik old city walls", "Plitvice Lakes", "Hvar Island", "Split Diocletian's Palace", "Rovinj", "Krka Waterfalls"],
          uniqueness: "Croatia invented the necktie — 'Cravat' comes from the French word for Croatian (Croate).",
          fun_facts: ["Dubrovnik's city walls served as King's Landing in Game of Thrones.", "Plitvice Lakes National Park has 16 terraced lakes connected by waterfalls.", "The necktie originated in Croatia in the 17th century."],
          photo_query: "croatia dubrovnik plitvice lakes hvar"
     },
     {
          name: "Czech Republic (Czechia)", code: "cz", continent: "Europe", capital: "Prague", population: "10.9M", area: "78,866 km²",
          languages: ["Czech"], currency: "Czech Koruna",
          people: "Czech, Slovak, Ukrainian, Vietnamese, German",
          culture: "Beer culture (highest per capita consumption); Prague baroque architecture; Bohemian Crystal; Kafka literary heritage.",
          tourist_spots: ["Prague Castle", "Charles Bridge", "Český Krumlov", "Kutná Hora bone church", "Bohemian Switzerland"],
          uniqueness: "Czechia has the world's highest beer consumption per capita; Prague's Old Town is one of Europe's best-preserved medieval cities.",
          fun_facts: ["Robot was coined by Czech writer Karel Čapek.", "Pilsner beer was invented in Plzeň, Czech Republic.", "Prague's Astronomical Clock (1410) is the world's oldest still-operating."],
          photo_query: "czech republic prague castle charles bridge"
     },
     {
          name: "Denmark", code: "dk", continent: "Europe", capital: "Copenhagen", population: "5.9M", area: "42,924 km²",
          languages: ["Danish"], currency: "Danish Krone",
          people: "Danes, immigrants (Turkish, Polish, Syrian, Somali)",
          culture: "Happiest country in the world; hygge (cozy living) philosophy; Noma restaurant (world's best); Viking heritage.",
          tourist_spots: ["Tivoli Gardens", "Nyhavn Copenhagen", "Hamlet's Castle Kronborg", "Legoland Billund", "Ribe Viking Museum", "Faroe Islands"],
          uniqueness: "Denmark consistently ranks #1 in world happiness; LEGO was invented here in 1932.",
          fun_facts: ["LEGO is Danish (Leg Godt means 'Play well').", "Denmark has more pigs than people.", "The Faroe Islands belong to Denmark but are self-governing."],
          photo_query: "denmark copenhagen nyhavn vikings lego"
     },
     {
          name: "Estonia", code: "ee", continent: "Europe", capital: "Tallinn", population: "1.3M", area: "45,228 km²",
          languages: ["Estonian"], currency: "Euro",
          people: "Estonian, Russian",
          culture: "Digital state — most advanced e-governance in world; Song Festival tradition (UNESCO); Hanseatic old town.",
          tourist_spots: ["Tallinn Old Town", "Lahemaa National Park", "Tartu university city", "Saaremaa Island", "Pärnu Beach"],
          uniqueness: "Estonia is the world's most digitally advanced society — you can vote, pay taxes, and form a company online in minutes.",
          fun_facts: ["Skype was invented in Estonia.", "Estonia has one of the world's highest literacy rates.", "Tallinn's medieval old town is a UNESCO World Heritage Site."],
          photo_query: "estonia tallinn old town medieval"
     },
     {
          name: "Finland", code: "fi", continent: "Europe", capital: "Helsinki", population: "5.5M", area: "338,145 km²",
          languages: ["Finnish", "Swedish"], currency: "Euro",
          people: "Finns, Sweden-Finns, Sami indigenous people",
          culture: "World's happiest country (#1 multiple years); sauna culture (UNESCO); Northern Lights; Midsummer celebrations.",
          tourist_spots: ["Northern Lights Lapland", "Rovaniemi Santa's home", "Helsinki Cathedral", "Turku Castle", "Nuuksio National Park", "Finnish archipelago"],
          uniqueness: "Finland has the world's highest coffee consumption per capita; Helsinki's Santa Claus village draws visitors globally.",
          fun_facts: ["Finland has 3.2 million saunas for 5.5 million people.", "Finland is home to ~190,000 lakes.", "The Sami people are Finland's indigenous Arctic reindeer herders."],
          photo_query: "finland northern lights lapland sauna"
     },
     {
          name: "France", code: "fr", continent: "Europe", capital: "Paris", population: "68M", area: "551,695 km²",
          languages: ["French"], currency: "Euro",
          people: "French (Celtic, Latin, Teutonic, Slavic origins), Arab-Berber, African, Portuguese",
          culture: "Haute cuisine (UNESCO); fashion capital; Impressionist art; Enlightenment philosophy; wine culture.",
          tourist_spots: ["Eiffel Tower", "Louvre Museum", "Palace of Versailles", "Mont Saint-Michel", "French Riviera", "Château de Chambord", "D-Day Beaches Normandy"],
          uniqueness: "France is the world's most visited country (90M+ tourists/year); home of human rights philosophy and haute cuisine.",
          fun_facts: ["France produces over 1,200 types of cheese.", "The Louvre is the world's most visited museum.", "France has won more Nobel Prizes in literature than any other country.", "The metric system was invented in France."],
          photo_query: "france paris eiffel tower versailles louvre"
     },
     {
          name: "Germany", code: "de", continent: "Europe", capital: "Berlin", population: "84M", area: "357,114 km²",
          languages: ["German"], currency: "Euro",
          people: "Germans, Turkish, Syrian, Polish, Italian communities",
          culture: "Beer and Oktoberfest culture; Classical music (Bach, Beethoven, Brahms); Bauhaus design; Carnival (Karneval).",
          tourist_spots: ["Neuschwanstein Castle", "Brandenburg Gate Berlin", "Cologne Cathedral", "Black Forest", "Bavaria", "Rhine Valley", "Berlin Wall memorial"],
          uniqueness: "Germany gave the world the printing press (Gutenberg 1440), the car (Benz 1885), aspirin, and MP3.",
          fun_facts: ["Germany has the most Autobahn (highway) with no speed limit.", "Germany has 1,500 different types of beer.", "The Berlin Wall fell in 1989 — reunifying East and West Germany.", "Kindergarten, Aspirin, and MP3 were all invented in Germany."],
          photo_query: "germany neuschwanstein castle berlin cologne oktoberfest"
     },
     {
          name: "Greece", code: "gr", continent: "Europe", capital: "Athens", population: "10.7M", area: "131,957 km²",
          languages: ["Greek"], currency: "Euro",
          people: "Greeks, Albanian immigrants, Romani",
          culture: "Birthplace of Western civilization; democracy, philosophy, Olympics; Mediterranean food culture; island café life.",
          tourist_spots: ["Acropolis Athens", "Santorini", "Meteora monasteries", "Delphi", "Rhodes Old Town", "Mykonos", "Olympia ruins"],
          uniqueness: "Greece is the birthplace of democracy, philosophy, the Olympic Games, and Western civilization as we know it.",
          fun_facts: ["Greece has the world's longest coastline in Europe (13,676 km).", "Ancient Greeks invented the first computer (Antikythera Mechanism, 205 BC).", "Greece has more archaeological museums than any other country."],
          photo_query: "greece santorini acropolis athens islands"
     },
     {
          name: "Hungary", code: "hu", continent: "Europe", capital: "Budapest", population: "9.7M", area: "93,028 km²",
          languages: ["Hungarian (Magyar)"], currency: "Hungarian Forint",
          people: "Hungarians, Roma, German, Slovak, Romanian",
          culture: "Thermal bath culture; Tokaj wine; Rubik's Cube was invented here; folk embroidery and Baroque architecture.",
          tourist_spots: ["Budapest Parliament", "Fisherman's Bastion", "Széchenyi Thermal Bath", "Lake Balaton", "Eger Castle", "Buda Castle"],
          uniqueness: "Budapest is sometimes called the 'Paris of the East'; the Rubik's Cube was invented by Hungarian Ernő Rubik.",
          fun_facts: ["Hungary invented the Rubik's Cube (1974).", "Budapest (Buda + Pest) was two separate cities until 1873.", "Hungary has 13 UNESCO World Heritage Sites."],
          photo_query: "hungary budapest parliament buda castle bath"
     },
     {
          name: "Iceland", code: "is", continent: "Europe", capital: "Reykjavik", population: "380K", area: "103,000 km²",
          languages: ["Icelandic"], currency: "Icelandic Króna",
          people: "Icelanders (Norse and Celtic descent), small Polish community",
          culture: "Viking heritage; sagas literature; Northern Lights viewing; geothermal spa culture (Blue Lagoon).",
          tourist_spots: ["Northern Lights", "Blue Lagoon", "Vatnajökull Glacier", "Golden Circle", "Geysir", "Skógafoss Waterfall", "Puffin colonies"],
          uniqueness: "Iceland runs on 100% renewable geothermal and hydro energy; has no army and hasn't had war in centuries.",
          fun_facts: ["Iceland was the world's first country to have a female president (1980).", "Icelanders still use a patronymic naming system, not family surnames.", "Iceland uses phone books sorted by first name."],
          photo_query: "iceland northern lights blue lagoon glacier"
     },
     {
          name: "Ireland", code: "ie", continent: "Europe", capital: "Dublin", population: "5.1M", area: "70,273 km²",
          languages: ["English", "Irish (Gaelic)"], currency: "Euro",
          people: "Irish, Irish Travellers, Polish, UK nationals",
          culture: "Celtic heritage; pub culture (craic); St. Patrick's Day; traditional music (uilleann pipes, fiddles); storytelling.",
          tourist_spots: ["Cliffs of Moher", "Giant's Causeway", "Ring of Kerry", "Rock of Cashel", "Dublin Temple Bar", "Skellig Michael"],
          uniqueness: "Ireland gave the world whiskey (not Scotland), Guinness, and St. Patrick's Day — the most globally celebrated national day.",
          fun_facts: ["Whiskey was invented in Ireland (before Scotland adopted it).", "Ireland has no snakes — banished by St. Patrick according to legend.", "Halloween (Samhain) originated in ancient Celtic Ireland."],
          photo_query: "ireland cliffs of moher giant causeway dublin"
     },
     {
          name: "Italy", code: "it", continent: "Europe", capital: "Rome", population: "60M", area: "301,340 km²",
          languages: ["Italian"], currency: "Euro",
          people: "Italians; German-speaking South Tyrol; Sardinian, Friulian minorities",
          culture: "Roman Empire legacy; Renaissance art (Leonardo, Michelangelo); opera; fashion; coffee culture; pasta and pizza.",
          tourist_spots: ["Colosseum Rome", "Vatican City", "Amalfi Coast", "Venice canals", "Florence Uffizi Gallery", "Pompeii", "Tuscany", "Cinque Terre"],
          uniqueness: "Italy has the most UNESCO World Heritage Sites in the world (58); birthplace of the Renaissance and Roman civilization.",
          fun_facts: ["Italy has 58 UNESCO World Heritage Sites — the most in the world.", "Pizza was invented in Naples in the 1800s.", "Rome has more than 900 churches.", "Italian is the official language of music: allegro, forte, piano are all Italian."],
          photo_query: "italy rome colosseum venice amalfi coast"
     },
     {
          name: "Kosovo", code: "xk", continent: "Europe", capital: "Pristina", population: "1.8M", area: "10,887 km²",
          languages: ["Albanian", "Serbian"], currency: "Euro",
          people: "Albanians (majority), Serbs, Bosniaks, Roma, Turkish",
          culture: "Young nation with vibrant café culture; Newborn sculpture symbol; Dardanian ancient history.",
          tourist_spots: ["Pristina NEWBORN sculpture", "Prizren Old Town", "Rugova Canyon", "Decani Monastery", "Gazivoda Lake"],
          uniqueness: "Kosovo declared independence in 2008 — one of the world's newest countries; Pristina's Newborn sculpture is an iconic symbol.",
          fun_facts: ["Kosovo is recognized by over 100 UN member states.", "Kosovo has the youngest population in Europe."],
          photo_query: "kosovo pristina prizren old town"
     },
     {
          name: "Latvia", code: "lv", continent: "Europe", capital: "Riga", population: "1.8M", area: "64,589 km²",
          languages: ["Latvian"], currency: "Euro",
          people: "Latvians, Russian (25%), Belarusian, Ukrainian",
          culture: "Song and Dance Celebration (UNESCO); Art Nouveau architecture in Riga; Jāņi midsummer festival.",
          tourist_spots: ["Riga Old Town", "Jūrmala Beach", "Gauja National Park", "Rundale Palace", "Cape Kolka"],
          uniqueness: "Riga has the most Art Nouveau buildings of any city in the world — a UNESCO World Heritage marvel.",
          fun_facts: ["Riga's Old Town is a UNESCO World Heritage Site.", "Latvia's Song and Dance Celebration brings 40,000 performers every 5 years."],
          photo_query: "latvia riga art nouveau old town"
     },
     {
          name: "Liechtenstein", code: "li", continent: "Europe", capital: "Vaduz", population: "39K", area: "160 km²",
          languages: ["German"], currency: "Swiss Franc",
          people: "Liechtensteinisch, Swiss, Austrian, German",
          culture: "Alpine castle culture; royal family tradition; wine production; financial hub.",
          tourist_spots: ["Vaduz Castle", "Gutenberg Castle", "Kunstmuseum", "Rhine River valley", "Malbun Ski Resort"],
          uniqueness: "Liechtenstein is one of only two doubly landlocked countries in the world (surrounded by landlocked countries).",
          fun_facts: ["Liechtenstein is 25 km long and 6 km wide.", "You can rent the entire country of Liechtenstein for corporate events (~$83,000/night)."],
          photo_query: "liechtenstein vaduz castle alps"
     },
     {
          name: "Lithuania", code: "lt", continent: "Europe", capital: "Vilnius", population: "2.8M", area: "65,300 km²",
          languages: ["Lithuanian"], currency: "Euro",
          people: "Lithuanians, Polish, Russian",
          culture: "Baltic pagan traditions (Romuva); amber jewelry; singing traditions; Hill of Crosses symbol of resistance.",
          tourist_spots: ["Hill of Crosses Šiauliai", "Vilnius baroque old town", "Trakai Island Castle", "Curonian Spit", "Aukštaitija National Park"],
          uniqueness: "Hill of Crosses: over 200,000 crosses mysteriously placed — Soviet bulldozers removed them; pilgrims rebuilt overnight.",
          fun_facts: ["Lithuanian is considered one of the oldest living Indo-European languages.", "The Hill of Crosses defied Soviet occupation through religious perseverance."],
          photo_query: "lithuania hill of crosses vilnius trakai"
     },
     {
          name: "Luxembourg", code: "lu", continent: "Europe", capital: "Luxembourg City", population: "670K", area: "2,586 km²",
          languages: ["Luxembourgish", "French", "German"], currency: "Euro",
          people: "Luxembourgers, Portuguese, French, Belgian, German",
          culture: "Three official languages; financial center of Europe; fortified city heritage; wine route along the Moselle.",
          tourist_spots: ["Luxembourg City Casemates", "Vianden Castle", "Moselle Valley wines", "Mullerthal Trail", "Bourscheid Castle"],
          uniqueness: "Luxembourg has the world's highest GDP per capita (PPP); its citizens speak 3 languages on average.",
          fun_facts: ["Luxembourg City's casemates (underground fortifications) are UNESCO listed.", "~45% of Luxembourg's workforce commutes from neighboring countries daily."],
          photo_query: "luxembourg city castle casemates moselle"
     },
     {
          name: "Malta", code: "mt", continent: "Europe", capital: "Valletta", population: "530K", area: "316 km²",
          languages: ["Maltese", "English"], currency: "Euro",
          people: "Maltese (mixed Arab, Norman, Italian, British descent)",
          culture: "Valletta is Europe's smallest capital and a UNESCO city; Knights of St. John heritage; unique Maltese lace and glass.",
          tourist_spots: ["Valletta", "Mdina Silent City", "Ħaġar Qim megalithic temples", "Blue Lagoon Comino", "St. John's Co-Cathedral", "Azure Window (collapsed 2017)"],
          uniqueness: "Malta's megalithic temples are the world's oldest freestanding structures (5,500 years old) — older than Stonehenge and the Pyramids.",
          fun_facts: ["Maltese is the only Semitic language written in the Latin alphabet.", "Malta's Ħaġar Qim and Mnajdra temples predate the Egyptian pyramids."],
          photo_query: "malta valletta blue lagoon comino medieval"
     },
     {
          name: "Moldova", code: "md", continent: "Europe", capital: "Chișinău", population: "2.6M", area: "33,846 km²",
          languages: ["Romanian", "Russian", "Gagauz"], currency: "Moldovan Leu",
          people: "Moldovans/Romanians, Ukrainians, Russians, Gagauz",
          culture: "Wine culture at its heart — deep wine cellar Cricova holds 200 km of underground wine roads; folk weaving.",
          tourist_spots: ["Cricova Wine Cellars", "Orheiul Vechi Monastery", "Chisinau Old Town", "Soroca Fortress", "Tipova Monastery"],
          uniqueness: "Cricova underground wine city has 200 km of wine roads — one of Europe's largest wine cellars.",
          fun_facts: ["Moldova is one of the least-visited countries in Europe.", "Moldova was once part of the Romanian Principality of Moldavia."],
          photo_query: "moldova cricova wine cellar orheiul vechi"
     },
     {
          name: "Monaco", code: "mc", continent: "Europe", capital: "Monaco-Ville", population: "36K", area: "2.02 km²",
          languages: ["French"], currency: "Euro",
          people: "French (majority), Monégasque, Italian",
          culture: "Formula 1 Grand Prix glamour; Casino Monte-Carlo; luxury yachts; Prince's Palace tradition.",
          tourist_spots: ["Casino Monte-Carlo", "Prince Albert II Palace", "Monaco Grand Prix Circuit", "Oceanographic Museum", "Monte-Carlo Opera"],
          uniqueness: "Monaco is the world's second-smallest country (2.02 km²) and the world's most densely populated.",
          fun_facts: ["Monaco's casino generates so much revenue that Monaco residents pay no income tax.", "The Monaco Grand Prix is the world's most glamorous F1 race."],
          photo_query: "monaco monte carlo casino formula one yachts"
     },
     {
          name: "Montenegro", code: "me", continent: "Europe", capital: "Podgorica", population: "620K", area: "13,812 km²",
          languages: ["Montenegrin", "Serbian"], currency: "Euro",
          people: "Montenegrins, Serbs, Bosniaks, Albanians",
          culture: "Adriatic coastal culture; Stefan Nemanja Orthodox monastic tradition; wild mountain culture.",
          tourist_spots: ["Kotor walled town", "Bay of Kotor", "Durmitor National Park", "Sveti Stefan island", "Tara River Canyon"],
          uniqueness: "Tara River Canyon is Europe's deepest canyon (1,300 m) — deeper than the Grand Canyon in places.",
          fun_facts: ["Montenegro means 'Black Mountain'.", "Montenegro became independent in 2006 after a referendum."],
          photo_query: "montenegro kotor bay sveti stefan"
     },
     {
          name: "Netherlands", code: "nl", continent: "Europe", capital: "Amsterdam", population: "17.9M", area: "41,543 km²",
          languages: ["Dutch"], currency: "Euro",
          people: "Dutch, Moroccan, Turkish, Surinamese, Indonesian communities",
          culture: "Windmills, tulips, and canals; Golden Age painting (Rembrandt, Van Gogh); cycling culture; liberal traditions.",
          tourist_spots: ["Amsterdam canals", "Keukenhof tulip gardens", "Kinderdijk windmills", "Rijksmuseum", "Anne Frank House", "The Hague"],
          uniqueness: "The Netherlands reclaimed 17% of its land from the sea; Dutch people are the world's tallest on average.",
          fun_facts: ["There are more bicycles than people in the Netherlands.", "The Dutch invented the stock market (Amsterdam, 1602).", "The Netherlands is so flat that half the country is below sea level."],
          photo_query: "netherlands amsterdam canals windmills tulips"
     },
     {
          name: "North Macedonia", code: "mk", continent: "Europe", capital: "Skopje", population: "2M", area: "25,713 km²",
          languages: ["Macedonian", "Albanian"], currency: "Macedonian Denar",
          people: "Macedonians, Albanians, Turks, Roma, Serbs",
          culture: "Ancient Macedonian heritage (Alexander the Great); Byzantine church frescoes; Lake Ohrid civilizational heart.",
          tourist_spots: ["Ohrid UNESCO city", "Old Skopje bazaar", "Mavrovo National Park", "Kokino megalithic observatory", "Matka Canyon"],
          uniqueness: "Lake Ohrid is one of Europe's deepest and oldest lakes (10 million years) and a UNESCO dual heritage site.",
          fun_facts: ["Alexander the Great was from Macedonia.", "Lake Ohrid is considered the 'cradle of Slavic literacy' — Cyrillic alphabet spread from here."],
          photo_query: "north macedonia ohrid lake skopje"
     },
     {
          name: "Norway", code: "no", continent: "Europe", capital: "Oslo", population: "5.4M", area: "323,802 km²",
          languages: ["Norwegian", "Sami"], currency: "Norwegian Krone",
          people: "Norwegian, Sami indigenous, immigrant communities (Polish, Swedish, Somali)",
          culture: "Viking heritage; fjord exploration; Northern Lights; midnight sun; Edvard Munch ('The Scream'); friluftsliv (outdoor living).",
          tourist_spots: ["Norway Fjords (Geirangerfjord)", "Northern Lights Tromsø", "Lofoten Islands", "Bergen Bryggen", "Preikestolen Cliff", "Oslo Viking Ship Museum"],
          uniqueness: "Norway has the world's longest UNESCO-listed fjords; consistently ranked most livable country on Earth.",
          fun_facts: ["Norway produces 99% of its electricity from renewable hydropower.", "Salmon sushi was a Norwegian invention — sold to Japan.", "Norway has the world's most tunnel roads."],
          photo_query: "norway fjords northern lights lofoten"
     },
     {
          name: "Poland", code: "pl", continent: "Europe", capital: "Warsaw", population: "37.7M", area: "312,696 km²",
          languages: ["Polish"], currency: "Polish Zloty",
          people: "Poles, Ukrainians, Belarusians, Germans, Roma minorities",
          culture: "Baroque and Gothic architecture; Chopin and Copernicus heritage; pierogi food culture; strong Catholic traditions.",
          tourist_spots: ["Kraków Old Town", "Auschwitz-Birkenau", "Wieliczka Salt Mine", "Warsaw Old Town", "Białowieża Forest", "Zakopane mountains"],
          uniqueness: "The Wieliczka Salt Mine has underground chapels, lakes, and sculptures — all carved in salt over 700 years.",
          fun_facts: ["Copernicus (Poland) discovered Earth revolves around the Sun.", "Marie Curie was Polish — first woman Nobel Prize winner.", "Poland's constitution (1791) was Europe's first modern constitution."],
          photo_query: "poland krakow wieliczka salt mine warsaw"
     },
     {
          name: "Portugal", code: "pt", continent: "Europe", capital: "Lisbon", population: "10.2M", area: "92,212 km²",
          languages: ["Portuguese"], currency: "Euro",
          people: "Portuguese, Cape Verdean, Brazilian, Angolan, Mozambican diaspora",
          culture: "Fado music (UNESCO); Age of Exploration legacy; azulejo tile art; pasteis de nata; surfing culture.",
          tourist_spots: ["Sintra palaces", "Lisbon Alfama", "Douro Valley vineyards", "Algarve coast", "Porto", "Pena Palace", "Belém Tower"],
          uniqueness: "Portugal's Age of Exploration (1415–1600) opened all the world's sea routes — making it the first global empire.",
          fun_facts: ["Portuguese is spoken by 260 million people on 5 continents.", "Portugal is the world's largest cork producer.", "Portuguese explorers were the first Europeans to reach Japan, Brazil, and India."],
          photo_query: "portugal lisbon sintra porto fado"
     },
     {
          name: "Romania", code: "ro", continent: "Europe", capital: "Bucharest", population: "19M", area: "238,397 km²",
          languages: ["Romanian"], currency: "Romanian Leu",
          people: "Romanians, Hungarians, Roma, Germans (Transylvanian Saxons)",
          culture: "Dracula mythology (Vlad the Impaler); Transylvania medieval castles; folk pottery and traditional textiles.",
          tourist_spots: ["Bran Castle (Dracula Castle)", "Painted Monasteries of Bucovina", "Peles Castle", "Transfăgărășan", "Danube Delta", "Sibiu"],
          uniqueness: "Romania's Danube Delta is Europe's largest river delta and one of the world's most biodiverse wetlands.",
          fun_facts: ["Dracula is based on Vlad the Impaler — a real Romanian prince.", "Romania's Danube Delta has 300 bird species and is a UNESCO site.", "Romania has the largest underground glacier in Europe at Scarisoara Cave."],
          photo_query: "romania bran castle transylvania bucovina monastery"
     },
     {
          name: "Russia", code: "ru", continent: "Europe", capital: "Moscow", population: "144M", area: "17,098,242 km²",
          languages: ["Russian"], currency: "Russian Ruble",
          people: "Russian (77%), Tatar, Bashkir, Chechen, Chuvash, Armenian; 190+ ethnic groups",
          culture: "Tsarist and Soviet heritage; ballet (Bolshoi, Mariinsky); classical music (Tchaikovsky); Fabergé eggs; vodka culture.",
          tourist_spots: ["Red Square Moscow", "St. Petersburg Hermitage", "Lake Baikal", "Trans-Siberian Railway", "Moscow Kremlin", "Peterhof Palace"],
          uniqueness: "Russia is the world's largest country by area (11 time zones); Lake Baikal holds 20% of Earth's fresh surface water.",
          fun_facts: ["Russia spans 11 time zones — if you fly east across Russia, you gain a whole day.", "Lake Baikal is the world's deepest lake (1,642 m) and oldest (25 million years).", "Tetris was invented by a Russian (Alexey Pajitnov, 1984)."],
          photo_query: "russia red square moscow saint petersburg hermitage"
     },
     {
          name: "San Marino", code: "sm", continent: "Europe", capital: "San Marino City", population: "34K", area: "61 km²",
          languages: ["Italian"], currency: "Euro",
          people: "Sammarinese, Italian",
          culture: "World's oldest republic; medieval tower castles; crossbow traditions; mountain fortresses.",
          tourist_spots: ["Three Towers of San Marino", "Guaita Tower", "State Museum", "Monte Titano", "Piazza della Libertà"],
          uniqueness: "San Marino is the world's oldest surviving republic (301 AD) and one of the world's smallest countries.",
          fun_facts: ["San Marino claims to be the world's oldest constitutional republic.", "San Marino has more cars than people.", "San Marino is entirely surrounded by Italy."],
          photo_query: "san marino towers medieval mountain"
     },
     {
          name: "Serbia", code: "rs", continent: "Europe", capital: "Belgrade", population: "6.8M", area: "77,474 km²",
          languages: ["Serbian"], currency: "Serbian Dinar",
          people: "Serbs, Hungarians, Romani, Bosniaks",
          culture: "Belgrade's vibrant nightlife (splavovi floating clubs); turbo-folk music; Orthodox church tradition; Nikola Tesla birthplace.",
          tourist_spots: ["Belgrade Kalemegdan Fortress", "Novi Sad Petrovaradin fortress (EXIT festival)", "Đavolja Varoš rock formation", "Studenica Monastery", "Uvac Canyon"],
          uniqueness: "Nikola Tesla was born in Serbia; Belgrade is famous for Europe's legendary nightlife — boat clubs on the Danube.",
          fun_facts: ["Nikola Tesla (AC electricity inventor) was born in Smiljan, Serbia (then Austrian Empire).", "Serbia is one of the world's largest raspberry exporters.", "The EXIT Music Festival held at Novi Sad Fortress is one of Europe's best."],
          photo_query: "serbia belgrade kalemegdan nikola tesla"
     },
     {
          name: "Slovakia", code: "sk", continent: "Europe", capital: "Bratislava", population: "5.5M", area: "49,035 km²",
          languages: ["Slovak"], currency: "Euro",
          people: "Slovaks, Hungarians, Roma, Czech",
          culture: "Castle-dense country; Čičmany folk textile patterns; folk music (cimbal); Slovak cuisine centered on bryndzové halušky.",
          tourist_spots: ["Spiš Castle (UNESCO)", "High Tatras mountain", "Bratislava Old Town", "Bojnice Castle", "Slovak Karst caves"],
          uniqueness: "Slovakia has the highest number of castles and castle ruins per capita of any country in the world.",
          fun_facts: ["Slovakia has over 180 castles and castle ruins.", "Slovakia shares the Danube River with Austria and Hungary."],
          photo_query: "slovakia spis castle high tatras bratislava"
     },
     {
          name: "Slovenia", code: "si", continent: "Europe", capital: "Ljubljana", population: "2.1M", area: "20,273 km²",
          languages: ["Slovenian"], currency: "Euro",
          people: "Slow, Italian, Hungarian, Croatian minorities",
          culture: "Green and sustainable tourism model; Kranjska Klobasas sausage; apiculture (beekeeping) tradition.",
          tourist_spots: ["Lake Bled island church", "Predjama Castle", "Triglav National Park", "Postojna Cave", "Ljubljana old town"],
          uniqueness: "Lake Bled with its island church is one of Europe's most photographed spots; Slovenia was the first ex-Yugoslav country in the EU and NATO.",
          fun_facts: ["Slovenia has the largest cave system in Europe (Postojna Cave).", "Lake Bled's island church has 99 steps — newlyweds carry brides up."],
          photo_query: "slovenia lake bled predjama castle"
     },
     {
          name: "Spain", code: "es", continent: "Europe", capital: "Madrid", population: "47.4M", area: "505,990 km²",
          languages: ["Spanish (Castilian)", "Catalan", "Galician", "Basque", "Valencian"],
          currency: "Euro",
          people: "Castilian, Catalan, Andalusian, Basque, Galician, Valencia, Romani; North African immigrants",
          culture: "Flamenco dance and bullfighting; Camino de Santiago pilgrimage; Siesta tradition; Gaudí architecture; tapas culture.",
          tourist_spots: ["Sagrada Família Barcelona", "Alhambra Granada", "Park Güell", "Prado Museum Madrid", "Ibiza", "Santiago de Compostela", "Seville Cathedral"],
          uniqueness: "Spain's Alhambra Palace is the finest example of Moorish architecture; Spain has the 3rd most UNESCO sites after Italy and China.",
          fun_facts: ["The Running of the Bulls (San Fermín) in Pamplona is famous worldwide.", "Spain has 50 UNESCO World Heritage Sites — 3rd most in the world.", "Paella was invented in Valencia, not all of Spain.", "The Spanish language is the world's 2nd most spoken by native speakers."],
          photo_query: "spain barcelona sagrada familia alhambra flamenco"
     },
     {
          name: "Sweden", code: "se", continent: "Europe", capital: "Stockholm", population: "10.4M", area: "450,295 km²",
          languages: ["Swedish", "Sami"], currency: "Swedish Krona",
          people: "Swedes, Finns, Sami indigenous, Syrian and Somali immigrant communities",
          culture: "ABBA, IKEA, Spotify, Volvo — innovations defining modern life; Midsommar celebration; smörgåsbord food culture.",
          tourist_spots: ["Stockholm Old Town Gamla Stan", "ABBA Museum", "Aurora Borealis Lapland", "Vasa Museum (17th century warship)", "Gothenburg", "Dalarna region"],
          uniqueness: "Sweden invented the zipper, pacemaker, and the adjustable wrench; ABBA's music still generates massive global revenue.",
          fun_facts: ["Sweden gave the world IKEA, Spotify, Minecraft, and ABBA.", "Sweden has 'Allemansrätten' (Freedom to Roam) — everyone can walk anywhere in nature including private land.", "Nobel Prize was established by Swedish inventor Alfred Nobel."],
          photo_query: "sweden stockholm northern lights abba"
     },
     {
          name: "Switzerland", code: "ch", continent: "Europe", capital: "Bern", population: "8.7M", area: "41,285 km²",
          languages: ["German", "French", "Italian", "Romansh"], currency: "Swiss Franc",
          people: "Swiss German, Swiss French, Swiss Italian, Romansh; large expat communities",
          culture: "Alphorn tradition; Fondue and Raclette cheese culture; Swiss neutrality; watchmaking precision; banking secrecy.",
          tourist_spots: ["Matterhorn", "Interlaken", "Lake Geneva", "Lucerne", "Jungfraujoch", "Bern Old Town", "Zurich"],
          uniqueness: "Switzerland has never been invaded or conquered — permanent neutrality since 1815; also hosts the UN and Red Cross HQ.",
          fun_facts: ["Switzerland has 4 official languages.", "Swiss chocolate and cheese are globally iconic.", "Switzerland's direct democracy allows citizens to vote on almost everything.", "The Red Cross was founded in Geneva, Switzerland."],
          photo_query: "switzerland matterhorn interlaken alps fondue"
     },
     {
          name: "Ukraine", code: "ua", continent: "Europe", capital: "Kyiv", population: "44M", area: "603,550 km²",
          languages: ["Ukrainian", "Russian"], currency: "Ukrainian Hryvnia",
          people: "Ukrainians (77%), Russians, Belarusians, Moldovans, Crimean Tatars",
          culture: "Pysanka (painted Easter egg) art; bandura folk music; Cossack warrior heritage; Borsch cuisine (UNESCO).",
          tourist_spots: ["Kyiv Pechersk Lavra Monastery", "Lviv Old Town", "Odessa port city", "Kamianets-Podilskyi fortress", "Carpathian Mountains"],
          uniqueness: "Ukraine has the world's second-largest arable land area; the Cossack Hetmanate was one of Europe's unique governance models.",
          fun_facts: ["Ukraine gave the world Borsch soup (UNESCO Intangible Heritage).", "The world's largest aircraft (Antonov AN-225) was built in Ukraine.", "Ukraine covers an area larger than France."],
          photo_query: "ukraine kyiv pechersk lavra lviv"
     },
     {
          name: "United Kingdom", code: "gb", continent: "Europe", capital: "London", population: "67M", area: "242,495 km²",
          languages: ["English", "Welsh", "Scottish Gaelic"], currency: "British Pound Sterling",
          people: "English, Scottish, Welsh, Northern Irish, South Asian, Caribbean, African communities",
          culture: "Royal family pageantry; Beatles and Rolling Stones rock heritage; afternoon tea; Premier League football; Shakespeare.",
          tourist_spots: ["Tower of London", "Buckingham Palace", "Stonehenge", "Scottish Highlands", "Oxford", "Edinburgh Castle", "Lake District"],
          uniqueness: "The UK created the world's first industrial revolution, the World Wide Web (Tim Berners-Lee), and the English language spoken by 1.5 billion people.",
          fun_facts: ["The UK invented football (soccer), cricket, rugby, and golf.", "The World Wide Web was invented by a British scientist (Tim Berners-Lee, 1989).", "Big Ben isn't the clock tower — it's the bell inside.", "The UK has driven on the left side of the road since the 1700s."],
          photo_query: "uk london tower bridge buckingham stonehenge"
     },
     {
          name: "Vatican City", code: "va", continent: "Europe", capital: "Vatican City", population: "800", area: "0.44 km²",
          languages: ["Latin", "Italian"], currency: "Euro",
          people: "Clergy, Swiss Guard, and staff (no permanent civilian residents ethnically distinct)",
          culture: "Headquarters of the Catholic Church; Sistine Chapel; St. Peter's Basilica; Papal traditions.",
          tourist_spots: ["St. Peter's Basilica", "Sistine Chapel", "Vatican Museums", "St. Peter's Square", "Apostolic Palace"],
          uniqueness: "Vatican City is the world's smallest sovereign state by both area (0.44 km²) and population (~800 people).",
          fun_facts: ["The Vatican has its own post office, radio station, and fire brigade.", "Michelangelo painted the Sistine Chapel lying on his back for 4 years.", "The Vatican has the world's lowest crime rate (mostly thefts by tourists)."],
          photo_query: "vatican city sistine chapel st peters basilica"
     }
];
