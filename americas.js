const NORTH_AMERICA_COUNTRIES = [
     {
          name: "Antigua and Barbuda", code: "ag", continent: "North America", capital: "Saint John's", population: "100K", area: "443 km²",
          languages: ["English"], currency: "East Caribbean Dollar",
          people: "Black/African Caribbean, British-Antiguan, mixed",
          culture: "Cricket nation; sailing tradition; annual Carnival; colonial sugar plantation heritage.",
          tourist_spots: ["English Harbour & Nelson's Dockyard", "Shirley Heights", "Dickenson Bay", "Half Moon Bay", "Devil's Bridge"],
          uniqueness: "Antigua has 365 beaches — one for each day of the year.",
          fun_facts: ["Antigua & Barbuda was the first Caribbean nation to legalize gay unions.", "Viv Richards, one of cricket's greatest, was born in Antigua."],
          photo_query: "antigua caribbean beach harbor"
     },
     {
          name: "Bahamas", code: "bs", continent: "North America", capital: "Nassau", population: "410K", area: "13,943 km²",
          languages: ["English"], currency: "Bahamian Dollar",
          people: "Afro-Bahamian (90%), Euro-Bahamian",
          culture: "Junkanoo festival; rake-and-scrape music; conch food culture; slavery liberation heritage.",
          tourist_spots: ["Exuma Cays swimming pigs", "Nassau Atlantis Resort", "Nassau Harbour", "Blue Holes", "Pink Sands Beach Harbour Island"],
          uniqueness: "The Bahamas has swimming pigs on Pig Island (Big Major Cay) — a global social media sensation.",
          fun_facts: ["The Bahamas has 700+ islands but only 30 are inhabited.", "Christopher Columbus made his first landfall in the New World in the Bahamas (1492)."],
          photo_query: "bahamas swimming pigs pink beach exuma"
     },
     {
          name: "Barbados", code: "bb", continent: "North America", capital: "Bridgetown", population: "300K", area: "431 km²",
          languages: ["English", "Bajan Creole"], currency: "Barbadian Dollar",
          people: "Afro-Barbadian (90%), White Barbadian, South Asian",
          culture: "Cricket heritage; rum culture (birthplace of rum); Crop Over festival; Rihanna's homeland.",
          tourist_spots: ["Harrison's Cave", "Bridgetown", "Carlisle Bay", "Oistins Fish Market", "Bathsheba Soup Bowl surf"],
          uniqueness: "Barbados is the birthplace of rum; Rihanna is officially Barbados's first National Hero.",
          fun_facts: ["Rum was invented in Barbados in the 1620s.", "Rihanna was appointed Barbados's first National Hero in 2021."],
          photo_query: "barbados rum beach bridgetown harrison cave"
     },
     {
          name: "Belize", code: "bz", continent: "North America", capital: "Belmopan", population: "430K", area: "22,966 km²",
          languages: ["English", "Belizean Kriol", "Spanish", "Garifuna", "Maya"], currency: "Belize Dollar",
          people: "Creole, Mestizo, Maya, Garifuna, East Indian, Mennonite",
          culture: "Ancient Maya civilization ruins; Garifuna drumming (UNESCO); reef diving culture; Mennonite farming enclaves.",
          tourist_spots: ["Great Blue Hole", "Actun Tunichil Muknal Maya cave", "Caracol Maya ruins", "Ambergris Caye", "Belize Barrier Reef"],
          uniqueness: "Belize has the world's second-largest barrier reef; the Great Blue Hole is one of the world's top diving sites.",
          fun_facts: ["Belize is the only Central American country where English is the official language.", "The Great Blue Hole is 305 m wide and 125 m deep."],
          photo_query: "belize great blue hole barrier reef maya"
     },
     {
          name: "Canada", code: "ca", continent: "North America", capital: "Ottawa", population: "40M", area: "9,984,670 km²",
          languages: ["English", "French"], currency: "Canadian Dollar",
          people: "English-Canadian, French-Canadian (Québécois), Indigenous (First Nations, Métis, Inuit), immigrant communities",
          culture: "Multicultural mosaic; hockey culture; maple syrup; poutine; First Nations art and totem pole traditions; wilderness ethos.",
          tourist_spots: ["Niagara Falls", "Banff National Park", "CN Tower Toronto", "Quebec Old City", "Vancouver Stanley Park", "Northern Lights", "PEI red beaches"],
          uniqueness: "Canada is the world's second-largest country by area; has the longest coastline of any country (202,080 km).",
          fun_facts: ["Canada has more lakes than every other country combined.", "Canada invented basketball (James Naismith, a Canadian, invented it in 1891).", "Canada apologizes more than any other country — 'Sorry' is a cultural trait.", "Poutine (fries, cheese curds, gravy) was invented in Quebec in the 1950s."],
          photo_query: "canada banff niagara falls northern lights rockies"
     },
     {
          name: "Costa Rica", code: "cr", continent: "North America", capital: "San José", population: "5.2M", area: "51,100 km²",
          languages: ["Spanish"], currency: "Costa Rican Colón",
          people: "White/Mestizo (83%), Mulatto, Indigenous, Black/Afro-Caribbean",
          culture: "'Pura Vida' (Pure Life) philosophy as a way of life; biodiversity tourism (ecotourism pioneer); no army since 1948.",
          tourist_spots: ["Arenal Volcano", "Manuel Antonio National Park", "Monteverde Cloud Forest", "Tortuguero sea turtle nesting", "Cocos Island"],
          uniqueness: "Costa Rica has no military and runs on 99% renewable energy; holds 6% of the world's biodiversity on 0.03% of land.",
          fun_facts: ["Costa Rica abolished its military in 1948 and used the budget for education and healthcare.", "5% of all known species on Earth live in Costa Rica.", "The sloth is Costa Rica's most beloved animal."],
          photo_query: "costa rica arenal volcano monteverde sloth"
     },
     {
          name: "Cuba", code: "cu", continent: "North America", capital: "Havana", population: "11M", area: "109,884 km²",
          languages: ["Spanish"], currency: "Cuban Peso",
          people: "White Cuban, Afro-Cuban, Mulatto/Mestizo",
          culture: "Classic cars; Salsa and Son music; cigar rolling culture; revolutionary art; Havana's art deco and Baroque architecture.",
          tourist_spots: ["Havana Malecón", "Viñales Valley tobacco farms", "Trinidad colonial city", "Varadero Beach", "Hemmingway's Havana", "Sierra Maestra"],
          uniqueness: "Cuba is the only country where you can still see original 1950s American cars on the road — the US embargo froze time.",
          fun_facts: ["Cuba has one of the highest literacy rates in Latin America (99.8%).", "Havana has more vintage 1950s American cars than anywhere in the world.", "Cuba produces ~8% of the world's premium cigars."],
          photo_query: "cuba havana vintage cars malecón trinidad"
     },
     {
          name: "Dominica", code: "dm", continent: "North America", capital: "Roseau", population: "72K", area: "751 km²",
          languages: ["English", "Dominican Creole French"], currency: "East Caribbean Dollar",
          people: "Black/African Caribbean, Mixed, Kalinago indigenous",
          culture: "Called 'Nature Island of the Caribbean'; last remaining pre-Columbian Kalinago people; Creole/French-influenced cuisine.",
          tourist_spots: ["Boiling Lake", "Morne Trois Pitons National Park", "Trafalgar Falls", "Champagne Beach snorkeling", "Indian River"],
          uniqueness: "Dominica is home to the world's second-largest boiling lake; the Kalinago are the last remaining pre-Columbian people in the Caribbean.",
          fun_facts: ["Christopher Columbus named the island after the Latin for Sunday (Dominica dies).", "Dominica has no flat land — entirely covered by mountains and rainforest."],
          photo_query: "dominica boiling lake morne trois pitons nature"
     },
     {
          name: "Dominican Republic", code: "do", continent: "North America", capital: "Santo Domingo", population: "11M", area: "48,671 km²",
          languages: ["Spanish"], currency: "Dominican Peso",
          people: "Mestizo/Mixed (73%), White, Black/Afro-Dominican",
          culture: "Merengue (national music/dance, UNESCO); Bachata music origin (Juan Luis Guerra); Baseball obsession.",
          tourist_spots: ["Punta Cana", "Santo Domingo Colonial Zone", "Samaná Peninsula", "Jarabacoa", "Los Haitises National Park"],
          uniqueness: "Santo Domingo's Colonial Zone contains the first European city in the Americas — built in 1498.",
          fun_facts: ["Merengue and Bachata both originated in the Dominican Republic.", "More Dominican players have made it to MLB than from any other country outside the US."],
          photo_query: "dominican republic punta cana santo domingo merengue"
     },
     {
          name: "El Salvador", code: "sv", continent: "North America", capital: "San Salvador", population: "6.5M", area: "21,041 km²",
          languages: ["Spanish"], currency: "US Dollar / Bitcoin",
          people: "Mestizo (86%), White, Indigenous Pipil",
          culture: "Pupusas (stuffed corn flatbread) are the national dish (UNESCO); surf culture; Náhuat indigenous heritage.",
          tourist_spots: ["Ruta de las Flores flower route", "Lake Coatepeque", "Joya de Cerén Maya site", "La Libertad Beach surf", "Santa Ana Volcano"],
          uniqueness: "El Salvador became the world's first country to adopt Bitcoin as legal tender (2021).",
          fun_facts: ["El Salvador is the smallest and most densely populated country in Central America.", "Joya de Cerén is called the 'Pompeii of the Americas' — a Maya village preserved in volcanic ash."],
          photo_query: "el salvador volcanoes pupusas beach surf"
     },
     {
          name: "Grenada", code: "gd", continent: "North America", capital: "Saint George's", population: "125K", area: "344 km²",
          languages: ["English"], currency: "East Caribbean Dollar",
          people: "Black/African Caribbean (82%), Mixed, East Indian",
          culture: "Called the 'Spice Island'; nutmeg and mace production central to economy; Carnival; cricket tradition.",
          tourist_spots: ["Grand Anse Beach", "Fort George", "Underwater Sculpture Park", "Levera National Park", "Carenage Harbour"],
          uniqueness: "Grenada grows the most nutmeg per capita of any country — it appears on the national flag.",
          fun_facts: ["Grenada's flag is the only national flag with a nutmeg on it.", "The Underwater Sculpture Park off Grenada is the world's first underwater sculpture museum."],
          photo_query: "grenada spice island beach nutmeg"
     },
     {
          name: "Guatemala", code: "gt", continent: "North America", capital: "Guatemala City", population: "18M", area: "108,889 km²",
          languages: ["Spanish", "22 Maya languages including K'iche', Mam, Q'eqchi'"], currency: "Guatemalan Quetzal",
          people: "Mestizo (Ladino), K'iche', Kaqchikel, Mam, Q'eqchi' Maya, Xinca, Garifuna",
          culture: "Maya civilization heart; Semana Santa (Easter) processions most spectacular in the world; weaving and huipil textile art.",
          tourist_spots: ["Tikal Maya ruins", "Antigua Guatemala", "Lake Atitlán", "Chichicastenango Market", "Acatenango Volcano", "Semuc Champey"],
          uniqueness: "Tikal's temples rise above the jungle canopy at 70 m — once the greatest Maya city with 100,000+ people.",
          fun_facts: ["Guatemala has 37 volcanoes — 3 currently active.", "The quetzal bird on Guatemala's flag is one of the world's most beautiful birds.", "Lake Atitlán is called the world's most beautiful lake."],
          photo_query: "guatemala tikal maya ruins lake atitlan antigua"
     },
     {
          name: "Haiti", code: "ht", continent: "North America", capital: "Port-au-Prince", population: "12M", area: "27,750 km²",
          languages: ["Haitian Creole", "French"], currency: "Haitian Gourde",
          people: "Black (95%), Mixed, White",
          culture: "First Black republic in the world (1804); Vodou spiritual tradition; vibrant naive painting art; kompa music.",
          tourist_spots: ["Citadelle Laferrière (mountain fortress)", "Sans-Souci Palace", "Bassin Bleu waterfalls", "Cap-Haïtien", "Haiti Art Center"],
          uniqueness: "Haiti was the first Black republic in the world and first Caribbean nation to gain independence (1804); defeated Napoleon's forces.",
          fun_facts: ["Haiti's Citadelle Laferrière is the largest fortress in the Western Hemisphere.", "Haiti's slave revolution (1804) inspired liberation movements worldwide."],
          photo_query: "haiti citadelle sans souci fortress"
     },
     {
          name: "Honduras", code: "hn", continent: "North America", capital: "Tegucigalpa", population: "10.5M", area: "112,492 km²",
          languages: ["Spanish"], currency: "Honduran Lempira",
          people: "Mestizo (90%), Lenca, Miskito, Garifuna, Ch'orti' Maya",
          culture: "Ancient Maya civilization (Copán); Garifuna drumming; punta music; marimba tradition.",
          tourist_spots: ["Copán Maya ruins", "Roatán Island Bay Islands", "Celaque National Park", "Lake Yojoa", "Pico Bonito", "Cayos Cochinos"],
          uniqueness: "Copán's hieroglyphic stairway is the longest known Maya hieroglyphic inscription in the world.",
          fun_facts: ["Honduras's Bay Islands (Roatán) have some of the world's cheapest scuba diving.", "The Copán Hieroglyphic Stairway has 2,000 glyphs."],
          photo_query: "honduras copan maya ruins roatan bay islands"
     },
     {
          name: "Jamaica", code: "jm", continent: "North America", capital: "Kingston", population: "3M", area: "10,991 km²",
          languages: ["English", "Jamaican Patois"], currency: "Jamaican Dollar",
          people: "Black (92.1%), Mixed, East Indian, Chinese, White",
          culture: "Reggae music (UNESCO); Rastafarianism; Bob Marley; Usain Bolt speed; jerk cooking; Blue Mountain coffee.",
          tourist_spots: ["Dunn's River Falls", "Blue Mountains", "Negril 7 Mile Beach", "Bob Marley Museum", "YS Falls", "Black River Crocodile Safari"],
          uniqueness: "Jamaica produced Bob Marley and Usain Bolt — the world's most iconic musician and fastest human of all time.",
          fun_facts: ["Reggae was invented in Jamaica — now UNESCO heritage.", "Usain Bolt is the fastest human ever — 9.58 seconds for 100m.", "Jamaica was the first Caribbean country to compete in the Winter Olympics.", "Jamaicans hold more world records per capita in sprinting than any other nation."],
          photo_query: "jamaica reggae bob marley beach dunn falls"
     },
     {
          name: "Mexico", code: "mx", continent: "North America", capital: "Mexico City", population: "130M", area: "1,964,375 km²",
          languages: ["Spanish", "68 indigenous languages including Nahuatl, Maya, Mixtec, Zapotec"],
          currency: "Mexican Peso",
          people: "Mestizo, Indigenous (Nahua, Maya, Zapotec, Mixtec), White, Black-Mexican",
          culture: "Aztec and Maya civilization heritage; Day of the Dead (Día de Muertos, UNESCO); Mariachi music; tequila and mezcal.",
          tourist_spots: ["Chichen Itza", "Teotihuacan pyramids", "Mexico City Historic Center", "Copper Canyon", "Cancún", "Palenque", "Oaxaca", "Tulum"],
          uniqueness: "Mexico City was built on the ruins of Aztec Tenochtitlan — one of the world's largest ancient cities; home of avocado, chocolate, and corn.",
          fun_facts: ["Chocolate, avocado, corn, and chipotle were all first cultivated in Mexico.", "The ancient city of Teotihuacan was the 6th largest city in the world in 500 AD.", "Chichen Itza's pyramid aligns perfectly with the sun on spring and autumn equinox.", "Mexico is the most biodiverse country in North America."],
          photo_query: "mexico chichen itza teotihuacan día muertos oaxaca"
     },
     {
          name: "Nicaragua", code: "ni", continent: "North America", capital: "Managua", population: "7M", area: "130,373 km²",
          languages: ["Spanish", "Miskito", "Creole English"], currency: "Nicaraguan Córdoba",
          people: "Mestizo (69%), White, Black-Caribbean (Creole, Garifuna), Miskito",
          culture: "Central America's largest country; revolutionary tradition (Sandinistas); marimba music; surfing on volcanic ash beaches.",
          tourist_spots: ["Ometepe Island (twin volcanoes)", "Masaya Volcano active lava lake", "León colonial city", "San Juan del Sur Beach", "Corn Islands", "Granada"],
          uniqueness: "Masaya Volcano is one of the few places in the world where you can look directly into an active lava lake.",
          fun_facts: ["Ometepe Island has two volcanoes and is home to some of the world's oldest petroglyphs.", "León has more colonial churches than any city in Latin America."],
          photo_query: "nicaragua ometepe island masaya volcano granada"
     },
     {
          name: "Panama", code: "pa", continent: "North America", capital: "Panama City", population: "4.4M", area: "75,417 km²",
          languages: ["Spanish", "English (Caribbean coast)"], currency: "Balboa / US Dollar",
          people: "Mestizo (65%), Indigenous (Ngäbe, Kuna, Emberá), Black-Panamanian, White",
          culture: "Panama Canal as engineering marvel; Mola textile art (Kuna people); international financial hub; biodiversity crossroads.",
          tourist_spots: ["Panama Canal", "Bocas del Toro", "San Blas Islands (Kuna Yala)", "Boquete cloud forest", "Casco Viejo old city", "Darién jungle"],
          uniqueness: "The Panama Canal revolutionized global trade; Panama City is the only world capital city with a rainforest within its city limits.",
          fun_facts: ["The Panama Canal saves ships 12,875 km of sailing around South America.", "Panama City has the only tropical rainforest within a city (Metropolitan Nature Park).", "The Panama hat actually comes from Ecuador, not Panama."],
          photo_query: "panama canal san blas kuna yala bocas del toro"
     },
     {
          name: "Saint Kitts and Nevis", code: "kn", continent: "North America", capital: "Basseterre", population: "55K", area: "261 km²",
          languages: ["English"], currency: "East Caribbean Dollar",
          people: "Afro-Caribbean (90%), Mixed, White",
          culture: "Sugar plantation heritage (abolished 2005 — last Caribbean producer); Nevis's Alexander Hamilton birthplace.",
          tourist_spots: ["Brimstone Hill Fortress UNESCO", "St. Kitts Scenic Railway", "Pinney's Beach", "Nevis Peak", "Timothy Hill"],
          uniqueness: "Nevis is the birthplace of Alexander Hamilton — America's Founding Father featured on the $10 bill.",
          fun_facts: ["Brimstone Hill Fortress is the Caribbean's 'Gibraltar'.", "Saint Kitts and Nevis is the smallest country in the Western Hemisphere."],
          photo_query: "saint kitts nevis brimstone hill fortress beach"
     },
     {
          name: "Saint Lucia", code: "lc", continent: "North America", capital: "Castries", population: "185K", area: "616 km²",
          languages: ["English", "Saint Lucian Creole"], currency: "East Caribbean Dollar",
          people: "Black/African Caribbean (85%), Mixed, South Asian",
          culture: "Nobel Prize island — two Nobel Laureates (St. Lucia has more Nobels per capita than any country); jazz festival.",
          tourist_spots: ["Pitons UNESCO World Heritage", "Sulphur Springs drive-in volcano", "Jade Mountain resort", "Tet Paul Nature Trail", "Marigot Bay"],
          uniqueness: "St. Lucia has two Nobel Prize winners per capita — more than any other country in the world.",
          fun_facts: ["The Pitons (two volcanic spires) are St. Lucia's most iconic landmark.", "Saint Lucia has a drive-in volcano — you can bathe in volcanic pools."],
          photo_query: "saint lucia pitons volcanic beach caribbean"
     },
     {
          name: "Saint Vincent and the Grenadines", code: "vc", continent: "North America", capital: "Kingstown", population: "110K", area: "389 km²",
          languages: ["English"], currency: "East Caribbean Dollar",
          people: "Black/African Caribbean (66%), Mixed, East Indian, Carib",
          culture: "Vincentian folk traditions; Black Carib (Garifuna) heritage; Vincy Mas carnival; fishing culture.",
          tourist_spots: ["Mustique Island", "The Falls of Baleine", "La Soufrière Volcano", "Bequia Island", "Tobago Cays Marine Park"],
          uniqueness: "The Pirates of the Caribbean films were largely filmed in St. Vincent's Tobago Cays.",
          fun_facts: ["Pirates of the Caribbean was filmed near St. Vincent.", "The Grenadines include the exclusive island of Mustique, retreat of royals."],
          photo_query: "saint vincent grenadines pitons mustique beach"
     },
     {
          name: "Trinidad and Tobago", code: "tt", continent: "North America", capital: "Port of Spain", population: "1.4M", area: "5,130 km²",
          languages: ["English", "Trinidad English Creole", "Spanish", "French Creole"],
          currency: "Trinidad and Tobago Dollar",
          people: "Indo-Trinidadian, Afro-Trinidadian, Mixed, Chinese, White",
          culture: "Birthplace of Calypso, Steelpan (UNESCO), and Soca music; most elaborate Caribbean Carnival.",
          tourist_spots: ["Trinidad Carnival", "Asa Wright Nature Centre", "Pitch Lake (world's largest natural asphalt lake)", "Tobago Reef", "Caroni Bird Sanctuary"],
          uniqueness: "Trinidad invented the steelpan drum — the only acoustic instrument invented in the 20th century.",
          fun_facts: ["The steelpan was invented in Trinidad in the 1930s from biscuit tins.", "Trinidad hosts the Caribbean's most elaborate Carnival next to Rio.", "Pitch Lake (La Brea) is the world's largest natural deposit of asphalt."],
          photo_query: "trinidad carnival steelpan tobago reef"
     },
     {
          name: "United States", code: "us", continent: "North America", capital: "Washington D.C.", population: "340M", area: "9,833,517 km²",
          languages: ["English", "Spanish (widely spoken)"], currency: "US Dollar",
          people: "White non-Hispanic, Hispanic/Latino, Black/African American, Asian American, Native American, Pacific Islander",
          culture: "Hollywood global pop culture; jazz, blues, hip-hop, rock music; Super Bowl; Thanksgiving; diverse immigrant melting pot.",
          tourist_spots: ["Grand Canyon", "Times Square New York", "Yellowstone National Park", "Statue of Liberty", "Golden Gate Bridge", "Disney World", "National Mall D.C.", "Las Vegas"],
          uniqueness: "The US has the world's largest economy and most powerful military; it created the internet, Hollywood, and landed humans on the Moon.",
          fun_facts: ["The US has the world's largest number of tornadoes.", "More people move to the US each year than any other country.", "The US Interstate Highway System was inspired by Germany's Autobahn after WWII.", "America has 63 National Parks — more than any other country."],
          photo_query: "usa grand canyon statue of liberty yellowstone nyc"
     }
];

const SOUTH_AMERICA_COUNTRIES = [
     {
          name: "Argentina", code: "ar", continent: "South America", capital: "Buenos Aires", population: "47M", area: "2,780,400 km²",
          languages: ["Spanish"], currency: "Argentine Peso",
          people: "White/European-origin (mostly Italian and Spanish), Mestizo, Indigenous (Mapuche, Quechua, Guaraní)",
          culture: "Tango dance and music (UNESCO); mate tea culture; asado (BBQ); Messi's football nation; Patagonia wilderness.",
          tourist_spots: ["Iguazú Falls", "Patagonia Glaciers (Perito Moreno)", "Buenos Aires", "Mendoza vineyards", "Ushuaia End of the World", "Salta colorful mountains"],
          uniqueness: "Argentina has the world's southernmost city (Ushuaia); Iguazú Falls is wider than Niagara Falls and Victoria Falls combined.",
          fun_facts: ["Tango originated in Buenos Aires brothels in the 1880s.", "Argentina has won the most FIFA World Cups along with Italy in 2022 count (3).", "Patagonia's Perito Moreno Glacier advances 2 meters per day."],
          photo_query: "argentina buenos aires tango perito moreno iguazu"
     },
     {
          name: "Bolivia", code: "bo", continent: "South America", capital: "Sucre / La Paz (seat of govt)", population: "12M", area: "1,098,581 km²",
          languages: ["Spanish", "Quechua", "Aymara", "Guaraní", "36 others"], currency: "Bolivian Boliviano",
          people: "Indigenous (62% — Quechua, Aymara, Chiquitano), Mestizo, White",
          culture: "Andean indigenous cultures central; Carnival of Oruro (UNESCO); cholita wrestling; Tiwanaku ancient civilization.",
          tourist_spots: ["Salar de Uyuni (world's largest salt flat)", "Lake Titicaca", "Tiwanaku ruins", "Amazon Rainforest", "Valley of the Moon La Paz", "Colchani"],
          uniqueness: "Salar de Uyuni is the world's largest salt flat (10,582 km²) and creates perfect mirror reflections in the wet season.",
          fun_facts: ["Bolivia is one of the world's few landlocked countries that still has a navy (on Lake Titicaca).", "Salar de Uyuni holds 50-70% of the world's lithium reserves.", "Lake Titicaca is the world's highest navigable lake at 3,812 m."],
          photo_query: "bolivia salar uyuni salt flat lake titicaca"
     },
     {
          name: "Brazil", code: "br", continent: "South America", capital: "Brasília", population: "215M", area: "8,515,767 km²",
          languages: ["Portuguese"], currency: "Brazilian Real",
          people: "White, Multiracial (Pardo), Black/Afro-Brazilian, Indigenous, East Asian (Japanese community — world's largest outside Japan)",
          culture: "Rio Carnival (world's largest); football (futebol) religion; samba and bossa nova; capoeira; Amazon rainforest culture.",
          tourist_spots: ["Christ the Redeemer", "Iguaçu Falls", "Rio de Janeiro", "Amazon Rainforest", "Salvador da Bahia", "Fernando de Noronha", "Lençóis Maranhenses"],
          uniqueness: "Brazil contains 60% of the Amazon Rainforest — Earth's largest tropical forest and biggest biodiversity reservoir.",
          fun_facts: ["Brazil won the FIFA World Cup 5 times — more than any other nation.", "Brazil is the world's largest Portuguese-speaking country — 220 million speakers.", "The Amazon River discharges 20% of ALL fresh water entering Earth's oceans.", "Brazil has 60% more species of freshwater fish than any other country."],
          photo_query: "brazil rio carnival christ redeemer amazon iguassu"
     },
     {
          name: "Chile", code: "cl", continent: "South America", capital: "Santiago", population: "19.5M", area: "756,102 km²",
          languages: ["Spanish"], currency: "Chilean Peso",
          people: "Mestizo and European descent (95%), Mapuche indigenous, Rapa Nui",
          culture: "Longest thin country (4,300 km north to south); wine culture; empanadas; Atacama observatory astronomy; Mapuche resilience.",
          tourist_spots: ["Torres del Paine", "Easter Island (Rapa Nui)", "Atacama Desert", "Valle de la Luna", "Marble Caves", "Santiago wine valleys"],
          uniqueness: "Chile's Atacama Desert is the driest non-polar desert on Earth; Easter Island's Moai statues are one of archaeology's greatest mysteries.",
          fun_facts: ["Chile is the world's longest country (4,300 km from north to south).", "Easter Island's Moai statues were built 900–1500 AD — no one fully knows how.", "The Atacama has stargazing so clear it hosts the world's largest astronomical observatories."],
          photo_query: "chile torres del paine easter island moai atacama"
     },
     {
          name: "Colombia", code: "co", continent: "South America", capital: "Bogotá", population: "52M", area: "1,141,748 km²",
          languages: ["Spanish"], currency: "Colombian Peso",
          people: "Mestizo and White (84%), Afro-Colombian, Indigenous (Wayuu, Embera, Nasa), Romani",
          culture: "Gabriel García Márquez (magical realism); cumbia/vallenato music (UNESCO); coffee culture; emerald production; Cartagena carnival.",
          tourist_spots: ["Cartagena walled city", "Cocora Valley wax palms", "Tayrona National Park", "Coffee Region (Eje Cafetero)", "San Agustín statues", "Colombia Amazon"],
          uniqueness: "Colombia is the world's only megadiverse country with both Caribbean and Pacific coasts; second-most biodiverse country in the world.",
          fun_facts: ["Colombia produces 15% of the world's coffee — and has the world's best quality Arabica.", "Colombia has 1,900 bird species — more than any other country.", "Gabriel García Márquez invented 'Magical Realism' as a literary genre here."],
          photo_query: "colombia cartagena coffee region tayrona garcia marquez"
     },
     {
          name: "Ecuador", code: "ec", continent: "South America", capital: "Quito", population: "18M", area: "283,561 km²",
          languages: ["Spanish", "Kichwa", "Shuar"], currency: "US Dollar",
          people: "Mestizo (71%), Montubio, Afro-Ecuadorian, Indigenous (Kichwa, Shuar), Whites",
          culture: "Galápagos Islands scientific heritage; Panama hat origin (Ecuador, not Panama!); shrunken head (tsantsa) Shuar tradition.",
          tourist_spots: ["Galápagos Islands", "Avenue of the Volcanoes", "Quito Historic Center", "Amazon region", "Quilotoa Crater Lake", "Ingapirca Inca ruins"],
          uniqueness: "The Galápagos Islands inspired Darwin's Theory of Evolution — each island has uniquely evolved species found nowhere else.",
          fun_facts: ["The Panama hat is actually from Ecuador.", "Ecuador sits on the equator — Quito is one of the highest capitals in the world (2,850 m).", "Galápagos marine iguanas are the only sea-going lizards on Earth."],
          photo_query: "ecuador galapagos islands iguanas darwin quito"
     },
     {
          name: "Guyana", code: "gy", continent: "South America", capital: "Georgetown", population: "800K", area: "214,969 km²",
          languages: ["English", "Creolese Guyanese", "Hindi"], currency: "Guyanese Dollar",
          people: "Indo-Guyanese, Afro-Guyanese, Mixed, Indigenous Amerindian",
          culture: "Only English-speaking country in South America; unique Indo-Caribbean heritage; mangrove and rainforest culture.",
          tourist_spots: ["Kaieteur Falls", "Iwokrama Rainforest", "Georgetown wooden colonial architecture", "Shell Beach", "Rupununi Savannah"],
          uniqueness: "Kaieteur Falls is the world's most powerful waterfall by flow volume relative to its height at 226 m.",
          fun_facts: ["Guyana found oil offshore in 2015 — transforming into one of the world's fastest-growing economies.", "The Guyanese rainforest is one of the few pristine Amazon areas remaining."],
          photo_query: "guyana kaieteur falls rainforest"
     },
     {
          name: "Paraguay", code: "py", continent: "South America", capital: "Asunción", population: "7.4M", area: "406,752 km²",
          languages: ["Spanish", "Guaraní"], currency: "Paraguayan Guaraní",
          people: "Mestizo (95%), Indigenous (Guaraní, Ava Guaraní, Nivaclé), White",
          culture: "Unique bilingual nation — Spanish and Guaraní both official; harp music (arpa paraguaya); terere drink culture.",
          tourist_spots: ["Jesuit Ruins of La Santísima Trinidad", "Itaipu Dam", "Ybycuí National Park", "Cerro Corá", "Encarnación Carnival"],
          uniqueness: "Paraguay is one of very few countries where an indigenous language (Guaraní) is spoken by the majority.",
          fun_facts: ["Itaipu Dam was the world's largest power plant by output for many years (shared with Brazil).", "Guaraní is spoken by 90% of Paraguayans — a remarkably preserved indigenous tongue."],
          photo_query: "paraguay jesuit ruins itaipu dam guarani"
     },
     {
          name: "Peru", code: "pe", continent: "South America", capital: "Lima", population: "33M", area: "1,285,216 km²",
          languages: ["Spanish", "Quechua", "Aymara"], currency: "Peruvian Sol",
          people: "Mestizo, Quechua, Aymara, White, Afro-Peruvian, Japanese-Peruvian (3rd largest outside Japan)",
          culture: "Inca Empire cradle; Machu Picchu; ceviche (UNESCO) cuisine; Marinera dance; Nazca Lines mystery.",
          tourist_spots: ["Machu Picchu", "Nazca Lines", "Lake Titicaca", "Colca Canyon", "Amazon Iquitos", "Lima food scene", "Cusco", "Sacred Valley"],
          uniqueness: "Peru's Machu Picchu is one of the New 7 Wonders of the World; Lima is Latin America's food capital.",
          fun_facts: ["The potato was first domesticated in Peru 7,000 years ago.", "Peru has the world's deepest canyon — Cotahuasi (3,354 m) — twice as deep as the Grand Canyon.", "Lima has more restaurants than Paris per capita.", "The Nazca Lines were made 2,000 years ago — best seen from the air."],
          photo_query: "peru machu picchu nazca lines lake titicaca lima"
     },
     {
          name: "Suriname", code: "sr", continent: "South America", capital: "Paramaribo", population: "620K", area: "163,820 km²",
          languages: ["Dutch", "Sranan Tongo", "Sarnami Hindustani", "Javanese Surinamese"], currency: "Surinamese Dollar",
          people: "Hindustani, Creole (Afro-Surinamese), Javanese, Maroon, Indigenous Amerindian",
          culture: "Most ethnically diverse country in South America; one of only two Dutch-speaking countries in the Americas.",
          tourist_spots: ["Paramaribo Historic Inner City", "Central Suriname Nature Reserve", "Brownsberg Nature Park", "Galibi Nature Reserve (sea turtles)", "Raleighvallen"],
          uniqueness: "Suriname is the most forested country in the world — 93% covered by Amazon rainforest.",
          fun_facts: ["Suriname is the only Dutch-speaking country in South America.", "93% of Suriname is pristine rainforest."],
          photo_query: "suriname paramaribo rainforest central reserve"
     },
     {
          name: "Uruguay", code: "uy", continent: "South America", capital: "Montevideo", population: "3.5M", area: "176,215 km²",
          languages: ["Spanish"], currency: "Uruguayan Peso",
          people: "Uruguayan (White European descent 88%, Afro-Uruguayan)",
          culture: "Tango birthplace alongside Argentina; mate culture; grill/asado culture; progressive politics; candombe drumming.",
          tourist_spots: ["Punta del Este", "Colonia del Sacramento UNESCO", "Montevideo Old City", "Cabo Polonio", "Casapueblo", "Rocha beaches"],
          uniqueness: "Uruguay was the first country to fully legalize marijuana (2013) and one of the first to legalize same-sex marriage.",
          fun_facts: ["Uruguay produced the world's best football player ratio per capita.", "Mate isn't just Argentinian — Uruguayans drink even more mate on average."],
          photo_query: "uruguay punta del este colonia montevideo beaches"
     },
     {
          name: "Venezuela", code: "ve", continent: "South America", capital: "Caracas", population: "29M", area: "916,445 km²",
          languages: ["Spanish"], currency: "Venezuelan Bolívar",
          people: "Mestizo (51%), White, Black/Afro-Venezuelan, Indigenous (Wayuu, Pemón, Yanomamo)",
          culture: "Beauty pageant culture (most Miss Universe/World wins); telenovela industry; joropo music (UNESCO); Orinoco river culture.",
          tourist_spots: ["Angel Falls (world's highest)", "Canaima National Park", "Los Roques Archipelago", "Morrocoy Beach", "Mérida cable car", "Gran Sabana tepuis"],
          uniqueness: "Angel Falls (979 m) in Venezuela is the world's highest uninterrupted waterfall — 15x taller than Niagara Falls.",
          fun_facts: ["Venezuela has the world's largest proven oil reserves.", "Venezuela has won more Miss Universe titles than any other country.", "Angel Falls drops from a tepui (table-top mountain) into the jungle below uninterrupted."],
          photo_query: "venezuela angel falls canaima tepui gran sabana"
     }
];
