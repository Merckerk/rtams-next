const attendanceMock = [
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2249" },
    "student": { "$oid": "65a76900fc13ae79abfa224a" },
    "studentName": "Skelly Rosenvasser",
    "courseCode": "GMC",
    "date": "5/1/2023",
    "term": "Parkway",
    "section": "Drive",
    "timeIn": "12:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa224b" },
    "student": { "$oid": "65a76900fc13ae79abfa224c" },
    "studentName": "Junina Baggiani",
    "courseCode": "Oldsmobile",
    "date": "7/23/2023",
    "term": "Point",
    "section": "Trail",
    "timeIn": "8:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa224d" },
    "student": { "$oid": "65a76900fc13ae79abfa224e" },
    "studentName": "Minette Massinger",
    "courseCode": "Suzuki",
    "date": "6/13/2023",
    "term": "Plaza",
    "section": "Hill",
    "timeIn": "15:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa224f" },
    "student": { "$oid": "65a76900fc13ae79abfa2250" },
    "studentName": "Kevin Bizzey",
    "courseCode": "Isuzu",
    "date": "10/6/2023",
    "term": "Circle",
    "section": "Parkway",
    "timeIn": "22:18"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2251" },
    "student": { "$oid": "65a76900fc13ae79abfa2252" },
    "studentName": "Rozina Vinker",
    "courseCode": "MINI",
    "date": "11/2/2023",
    "term": "Center",
    "section": "Pass",
    "timeIn": "4:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2253" },
    "student": { "$oid": "65a76900fc13ae79abfa2254" },
    "studentName": "Kareem Filipic",
    "courseCode": "Suzuki",
    "date": "7/7/2023",
    "term": "Hill",
    "section": "Crossing",
    "timeIn": "9:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2255" },
    "student": { "$oid": "65a76900fc13ae79abfa2256" },
    "studentName": "Shelby Bendig",
    "courseCode": "Plymouth",
    "date": "10/14/2023",
    "term": "Drive",
    "section": "Lane",
    "timeIn": "14:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2257" },
    "student": { "$oid": "65a76900fc13ae79abfa2258" },
    "studentName": "Buck Folk",
    "courseCode": "Chevrolet",
    "date": "6/19/2023",
    "term": "Place",
    "section": "Road",
    "timeIn": "22:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2259" },
    "student": { "$oid": "65a76900fc13ae79abfa225a" },
    "studentName": "Ignacio Braundt",
    "courseCode": "BMW",
    "date": "4/11/2023",
    "term": "Parkway",
    "section": "Center",
    "timeIn": "3:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa225b" },
    "student": { "$oid": "65a76900fc13ae79abfa225c" },
    "studentName": "Wakefield De Pero",
    "courseCode": "Mercury",
    "date": "12/24/2023",
    "term": "Park",
    "section": "Trail",
    "timeIn": "23:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa225d" },
    "student": { "$oid": "65a76900fc13ae79abfa225e" },
    "studentName": "Errol Carabine",
    "courseCode": "Pontiac",
    "date": "11/2/2023",
    "term": "Terrace",
    "section": "Crossing",
    "timeIn": "16:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa225f" },
    "student": { "$oid": "65a76900fc13ae79abfa2260" },
    "studentName": "Zebedee Vashchenko",
    "courseCode": "Mazda",
    "date": "6/8/2023",
    "term": "Terrace",
    "section": "Parkway",
    "timeIn": "21:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2261" },
    "student": { "$oid": "65a76900fc13ae79abfa2262" },
    "studentName": "Thaddeus Gozzard",
    "courseCode": "Land Rover",
    "date": "12/20/2023",
    "term": "Plaza",
    "section": "Trail",
    "timeIn": "4:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2263" },
    "student": { "$oid": "65a76900fc13ae79abfa2264" },
    "studentName": "Gordan Bernuzzi",
    "courseCode": "Subaru",
    "date": "9/9/2023",
    "term": "Place",
    "section": "Point",
    "timeIn": "21:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2265" },
    "student": { "$oid": "65a76900fc13ae79abfa2266" },
    "studentName": "Stanwood Galler",
    "courseCode": "Toyota",
    "date": "8/5/2023",
    "term": "Alley",
    "section": "Plaza",
    "timeIn": "21:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2267" },
    "student": { "$oid": "65a76900fc13ae79abfa2268" },
    "studentName": "Hynda Kach",
    "courseCode": "Toyota",
    "date": "11/18/2023",
    "term": "Circle",
    "section": "Circle",
    "timeIn": "14:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2269" },
    "student": { "$oid": "65a76900fc13ae79abfa226a" },
    "studentName": "Fancy Powdrill",
    "courseCode": "Lincoln",
    "date": "8/14/2023",
    "term": "Road",
    "section": "Junction",
    "timeIn": "19:18"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa226b" },
    "student": { "$oid": "65a76900fc13ae79abfa226c" },
    "studentName": "Stearn Raynard",
    "courseCode": "Suzuki",
    "date": "3/7/2023",
    "term": "Avenue",
    "section": "Drive",
    "timeIn": "15:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa226d" },
    "student": { "$oid": "65a76900fc13ae79abfa226e" },
    "studentName": "Myrle Gricks",
    "courseCode": "Pontiac",
    "date": "5/5/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "11:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa226f" },
    "student": { "$oid": "65a76900fc13ae79abfa2270" },
    "studentName": "Jeff Ruddin",
    "courseCode": "Toyota",
    "date": "6/28/2023",
    "term": "Pass",
    "section": "Street",
    "timeIn": "15:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2271" },
    "student": { "$oid": "65a76900fc13ae79abfa2272" },
    "studentName": "Janis Coppledike",
    "courseCode": "GMC",
    "date": "7/7/2023",
    "term": "Pass",
    "section": "Court",
    "timeIn": "21:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2273" },
    "student": { "$oid": "65a76900fc13ae79abfa2274" },
    "studentName": "Kerk Hawkings",
    "courseCode": "Audi",
    "date": "4/6/2023",
    "term": "Trail",
    "section": "Circle",
    "timeIn": "13:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2275" },
    "student": { "$oid": "65a76900fc13ae79abfa2276" },
    "studentName": "Nedi Cowgill",
    "courseCode": "Chevrolet",
    "date": "6/13/2023",
    "term": "Alley",
    "section": "Alley",
    "timeIn": "22:26"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2277" },
    "student": { "$oid": "65a76900fc13ae79abfa2278" },
    "studentName": "Chane Leer",
    "courseCode": "Mitsubishi",
    "date": "1/5/2023",
    "term": "Hill",
    "section": "Place",
    "timeIn": "13:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2279" },
    "student": { "$oid": "65a76900fc13ae79abfa227a" },
    "studentName": "Lucina Heinecke",
    "courseCode": "Chevrolet",
    "date": "3/23/2023",
    "term": "Place",
    "section": "Plaza",
    "timeIn": "6:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa227b" },
    "student": { "$oid": "65a76900fc13ae79abfa227c" },
    "studentName": "Aurea Hoffmann",
    "courseCode": "Chevrolet",
    "date": "3/8/2023",
    "term": "Plaza",
    "section": "Junction",
    "timeIn": "5:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa227d" },
    "student": { "$oid": "65a76900fc13ae79abfa227e" },
    "studentName": "Erminia Croom",
    "courseCode": "Ram",
    "date": "2/26/2023",
    "term": "Crossing",
    "section": "Court",
    "timeIn": "12:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa227f" },
    "student": { "$oid": "65a76900fc13ae79abfa2280" },
    "studentName": "Quent Sirett",
    "courseCode": "Ford",
    "date": "11/14/2023",
    "term": "Lane",
    "section": "Terrace",
    "timeIn": "21:58"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2281" },
    "student": { "$oid": "65a76900fc13ae79abfa2282" },
    "studentName": "Reidar Maplethorp",
    "courseCode": "Audi",
    "date": "2/13/2023",
    "term": "Way",
    "section": "Plaza",
    "timeIn": "2:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2283" },
    "student": { "$oid": "65a76900fc13ae79abfa2284" },
    "studentName": "Arleyne Parysiak",
    "courseCode": "Ford",
    "date": "2/20/2023",
    "term": "Point",
    "section": "Crossing",
    "timeIn": "7:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2285" },
    "student": { "$oid": "65a76900fc13ae79abfa2286" },
    "studentName": "Deina Fairbard",
    "courseCode": "Lexus",
    "date": "9/2/2023",
    "term": "Trail",
    "section": "Alley",
    "timeIn": "0:59"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2287" },
    "student": { "$oid": "65a76900fc13ae79abfa2288" },
    "studentName": "Anallese Mannagh",
    "courseCode": "Chevrolet",
    "date": "10/1/2023",
    "term": "Plaza",
    "section": "Parkway",
    "timeIn": "10:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2289" },
    "student": { "$oid": "65a76900fc13ae79abfa228a" },
    "studentName": "Cassandre Creaser",
    "courseCode": "Honda",
    "date": "8/19/2023",
    "term": "Park",
    "section": "Park",
    "timeIn": "22:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa228b" },
    "student": { "$oid": "65a76900fc13ae79abfa228c" },
    "studentName": "Lanny Dungee",
    "courseCode": "GMC",
    "date": "12/15/2023",
    "term": "Court",
    "section": "Place",
    "timeIn": "11:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa228d" },
    "student": { "$oid": "65a76900fc13ae79abfa228e" },
    "studentName": "Leonerd Copes",
    "courseCode": "Honda",
    "date": "4/10/2023",
    "term": "Park",
    "section": "Pass",
    "timeIn": "13:18"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa228f" },
    "student": { "$oid": "65a76900fc13ae79abfa2290" },
    "studentName": "Nat Thorius",
    "courseCode": "Oldsmobile",
    "date": "11/18/2023",
    "term": "Point",
    "section": "Terrace",
    "timeIn": "9:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2291" },
    "student": { "$oid": "65a76900fc13ae79abfa2292" },
    "studentName": "Meryl Cahan",
    "courseCode": "Mitsubishi",
    "date": "1/11/2024",
    "term": "Plaza",
    "section": "Avenue",
    "timeIn": "18:44"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2293" },
    "student": { "$oid": "65a76900fc13ae79abfa2294" },
    "studentName": "Odele Urpeth",
    "courseCode": "Suzuki",
    "date": "7/31/2023",
    "term": "Circle",
    "section": "Lane",
    "timeIn": "18:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2295" },
    "student": { "$oid": "65a76900fc13ae79abfa2296" },
    "studentName": "Gabby Gabala",
    "courseCode": "Buick",
    "date": "10/17/2023",
    "term": "Hill",
    "section": "Trail",
    "timeIn": "5:26"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2297" },
    "student": { "$oid": "65a76900fc13ae79abfa2298" },
    "studentName": "Lorelle Willmot",
    "courseCode": "Mazda",
    "date": "10/21/2023",
    "term": "Drive",
    "section": "Center",
    "timeIn": "2:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2299" },
    "student": { "$oid": "65a76900fc13ae79abfa229a" },
    "studentName": "Daryle Pochin",
    "courseCode": "Acura",
    "date": "1/3/2024",
    "term": "Pass",
    "section": "Court",
    "timeIn": "0:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa229b" },
    "student": { "$oid": "65a76900fc13ae79abfa229c" },
    "studentName": "Adriane Scarth",
    "courseCode": "Toyota",
    "date": "1/7/2023",
    "term": "Crossing",
    "section": "Circle",
    "timeIn": "14:22"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa229d" },
    "student": { "$oid": "65a76900fc13ae79abfa229e" },
    "studentName": "Truman Gonzalvo",
    "courseCode": "Volkswagen",
    "date": "3/21/2023",
    "term": "Junction",
    "section": "Crossing",
    "timeIn": "11:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa229f" },
    "student": { "$oid": "65a76900fc13ae79abfa22a0" },
    "studentName": "Fawn Boulton",
    "courseCode": "Audi",
    "date": "9/7/2023",
    "term": "Park",
    "section": "Crossing",
    "timeIn": "0:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22a1" },
    "student": { "$oid": "65a76900fc13ae79abfa22a2" },
    "studentName": "Emiline Geleman",
    "courseCode": "Porsche",
    "date": "9/8/2023",
    "term": "Center",
    "section": "Street",
    "timeIn": "20:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22a3" },
    "student": { "$oid": "65a76900fc13ae79abfa22a4" },
    "studentName": "Florina Dove",
    "courseCode": "Dodge",
    "date": "2/19/2023",
    "term": "Terrace",
    "section": "Avenue",
    "timeIn": "4:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22a5" },
    "student": { "$oid": "65a76900fc13ae79abfa22a6" },
    "studentName": "Stanton Epperson",
    "courseCode": "GMC",
    "date": "5/3/2023",
    "term": "Alley",
    "section": "Court",
    "timeIn": "13:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22a7" },
    "student": { "$oid": "65a76900fc13ae79abfa22a8" },
    "studentName": "Griffie Batteson",
    "courseCode": "Lincoln",
    "date": "10/31/2023",
    "term": "Lane",
    "section": "Park",
    "timeIn": "11:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22a9" },
    "student": { "$oid": "65a76900fc13ae79abfa22aa" },
    "studentName": "Austina Sudworth",
    "courseCode": "Honda",
    "date": "9/18/2023",
    "term": "Street",
    "section": "Street",
    "timeIn": "18:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22ab" },
    "student": { "$oid": "65a76900fc13ae79abfa22ac" },
    "studentName": "Padraic Vize",
    "courseCode": "Nissan",
    "date": "1/19/2023",
    "term": "Place",
    "section": "Junction",
    "timeIn": "6:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22ad" },
    "student": { "$oid": "65a76900fc13ae79abfa22ae" },
    "studentName": "Silvain Pllu",
    "courseCode": "Volkswagen",
    "date": "5/26/2023",
    "term": "Terrace",
    "section": "Place",
    "timeIn": "7:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22af" },
    "student": { "$oid": "65a76900fc13ae79abfa22b0" },
    "studentName": "Marylou Iffland",
    "courseCode": "Toyota",
    "date": "7/5/2023",
    "term": "Court",
    "section": "Alley",
    "timeIn": "19:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22b1" },
    "student": { "$oid": "65a76900fc13ae79abfa22b2" },
    "studentName": "Gwenora Dowyer",
    "courseCode": "Mazda",
    "date": "1/8/2023",
    "term": "Alley",
    "section": "Road",
    "timeIn": "14:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22b3" },
    "student": { "$oid": "65a76900fc13ae79abfa22b4" },
    "studentName": "Kerrill Entwhistle",
    "courseCode": "Chevrolet",
    "date": "7/28/2023",
    "term": "Road",
    "section": "Hill",
    "timeIn": "22:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22b5" },
    "student": { "$oid": "65a76900fc13ae79abfa22b6" },
    "studentName": "Mariele Cochern",
    "courseCode": "Toyota",
    "date": "3/22/2023",
    "term": "Circle",
    "section": "Pass",
    "timeIn": "7:04"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22b7" },
    "student": { "$oid": "65a76900fc13ae79abfa22b8" },
    "studentName": "Dian Caddick",
    "courseCode": "Ford",
    "date": "5/19/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "21:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22b9" },
    "student": { "$oid": "65a76900fc13ae79abfa22ba" },
    "studentName": "Bond Eddicott",
    "courseCode": "Geo",
    "date": "10/29/2023",
    "term": "Way",
    "section": "Junction",
    "timeIn": "2:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22bb" },
    "student": { "$oid": "65a76900fc13ae79abfa22bc" },
    "studentName": "Kennedy Hodgets",
    "courseCode": "Chevrolet",
    "date": "10/6/2023",
    "term": "Park",
    "section": "Hill",
    "timeIn": "0:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22bd" },
    "student": { "$oid": "65a76900fc13ae79abfa22be" },
    "studentName": "Orlando Fuster",
    "courseCode": "Ford",
    "date": "11/25/2023",
    "term": "Trail",
    "section": "Circle",
    "timeIn": "4:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22bf" },
    "student": { "$oid": "65a76900fc13ae79abfa22c0" },
    "studentName": "Raynor Cutress",
    "courseCode": "Buick",
    "date": "1/10/2023",
    "term": "Trail",
    "section": "Street",
    "timeIn": "17:52"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22c1" },
    "student": { "$oid": "65a76900fc13ae79abfa22c2" },
    "studentName": "Markos Dunkerly",
    "courseCode": "Ford",
    "date": "1/13/2024",
    "term": "Pass",
    "section": "Point",
    "timeIn": "9:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22c3" },
    "student": { "$oid": "65a76900fc13ae79abfa22c4" },
    "studentName": "Shalom Dunkley",
    "courseCode": "Ford",
    "date": "3/11/2023",
    "term": "Trail",
    "section": "Pass",
    "timeIn": "21:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22c5" },
    "student": { "$oid": "65a76900fc13ae79abfa22c6" },
    "studentName": "Sherie Malt",
    "courseCode": "Chevrolet",
    "date": "7/15/2023",
    "term": "Place",
    "section": "Avenue",
    "timeIn": "9:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22c7" },
    "student": { "$oid": "65a76900fc13ae79abfa22c8" },
    "studentName": "Georgy Sey",
    "courseCode": "BMW",
    "date": "1/1/2023",
    "term": "Hill",
    "section": "Terrace",
    "timeIn": "7:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22c9" },
    "student": { "$oid": "65a76900fc13ae79abfa22ca" },
    "studentName": "Gaylord Chatburn",
    "courseCode": "Lincoln",
    "date": "8/3/2023",
    "term": "Pass",
    "section": "Avenue",
    "timeIn": "15:22"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22cb" },
    "student": { "$oid": "65a76900fc13ae79abfa22cc" },
    "studentName": "Corrinne Robertis",
    "courseCode": "Audi",
    "date": "3/31/2023",
    "term": "Crossing",
    "section": "Avenue",
    "timeIn": "0:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22cd" },
    "student": { "$oid": "65a76900fc13ae79abfa22ce" },
    "studentName": "Cordey Mengue",
    "courseCode": "Lotus",
    "date": "12/14/2023",
    "term": "Drive",
    "section": "Alley",
    "timeIn": "22:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22cf" },
    "student": { "$oid": "65a76900fc13ae79abfa22d0" },
    "studentName": "Vitia Fareweather",
    "courseCode": "Mitsubishi",
    "date": "5/12/2023",
    "term": "Street",
    "section": "Pass",
    "timeIn": "3:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22d1" },
    "student": { "$oid": "65a76900fc13ae79abfa22d2" },
    "studentName": "Victoir Walklott",
    "courseCode": "Mercedes-Benz",
    "date": "10/24/2023",
    "term": "Court",
    "section": "Point",
    "timeIn": "3:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22d3" },
    "student": { "$oid": "65a76900fc13ae79abfa22d4" },
    "studentName": "Sydney Addeycott",
    "courseCode": "GMC",
    "date": "5/28/2023",
    "term": "Court",
    "section": "Street",
    "timeIn": "10:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22d5" },
    "student": { "$oid": "65a76900fc13ae79abfa22d6" },
    "studentName": "Emera Gowdie",
    "courseCode": "Buick",
    "date": "2/26/2023",
    "term": "Lane",
    "section": "Alley",
    "timeIn": "0:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22d7" },
    "student": { "$oid": "65a76900fc13ae79abfa22d8" },
    "studentName": "Sheba Eyckel",
    "courseCode": "Cadillac",
    "date": "10/2/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "22:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22d9" },
    "student": { "$oid": "65a76900fc13ae79abfa22da" },
    "studentName": "Mel Merrifield",
    "courseCode": "Subaru",
    "date": "12/3/2023",
    "term": "Crossing",
    "section": "Point",
    "timeIn": "15:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22db" },
    "student": { "$oid": "65a76900fc13ae79abfa22dc" },
    "studentName": "Hortensia Goretti",
    "courseCode": "Volvo",
    "date": "6/16/2023",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "19:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22dd" },
    "student": { "$oid": "65a76900fc13ae79abfa22de" },
    "studentName": "Benedicta McKinney",
    "courseCode": "Nissan",
    "date": "4/5/2023",
    "term": "Way",
    "section": "Plaza",
    "timeIn": "17:23"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22df" },
    "student": { "$oid": "65a76900fc13ae79abfa22e0" },
    "studentName": "Ladonna Carville",
    "courseCode": "Hyundai",
    "date": "4/6/2023",
    "term": "Drive",
    "section": "Drive",
    "timeIn": "21:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22e1" },
    "student": { "$oid": "65a76900fc13ae79abfa22e2" },
    "studentName": "Lexine Rumbold",
    "courseCode": "Acura",
    "date": "7/20/2023",
    "term": "Crossing",
    "section": "Way",
    "timeIn": "22:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22e3" },
    "student": { "$oid": "65a76900fc13ae79abfa22e4" },
    "studentName": "Ondrea Lortz",
    "courseCode": "Pontiac",
    "date": "10/21/2023",
    "term": "Hill",
    "section": "Road",
    "timeIn": "11:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22e5" },
    "student": { "$oid": "65a76900fc13ae79abfa22e6" },
    "studentName": "Kaitlynn Bernardeschi",
    "courseCode": "BMW",
    "date": "4/19/2023",
    "term": "Parkway",
    "section": "Point",
    "timeIn": "4:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22e7" },
    "student": { "$oid": "65a76900fc13ae79abfa22e8" },
    "studentName": "Gottfried Greatrakes",
    "courseCode": "Bentley",
    "date": "8/3/2023",
    "term": "Court",
    "section": "Hill",
    "timeIn": "20:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22e9" },
    "student": { "$oid": "65a76900fc13ae79abfa22ea" },
    "studentName": "Dinah Dell'Abbate",
    "courseCode": "Nissan",
    "date": "6/4/2023",
    "term": "Center",
    "section": "Lane",
    "timeIn": "0:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22eb" },
    "student": { "$oid": "65a76900fc13ae79abfa22ec" },
    "studentName": "Faythe Mullaney",
    "courseCode": "Pontiac",
    "date": "8/7/2023",
    "term": "Center",
    "section": "Plaza",
    "timeIn": "11:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22ed" },
    "student": { "$oid": "65a76900fc13ae79abfa22ee" },
    "studentName": "Ayn Liggett",
    "courseCode": "Saab",
    "date": "3/28/2023",
    "term": "Junction",
    "section": "Point",
    "timeIn": "15:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22ef" },
    "student": { "$oid": "65a76900fc13ae79abfa22f0" },
    "studentName": "Stearne Tremblay",
    "courseCode": "Nissan",
    "date": "1/4/2024",
    "term": "Trail",
    "section": "Alley",
    "timeIn": "1:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22f1" },
    "student": { "$oid": "65a76900fc13ae79abfa22f2" },
    "studentName": "Dionysus Cleare",
    "courseCode": "Volvo",
    "date": "1/1/2024",
    "term": "Avenue",
    "section": "Alley",
    "timeIn": "21:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22f3" },
    "student": { "$oid": "65a76900fc13ae79abfa22f4" },
    "studentName": "Kissie Frie",
    "courseCode": "Mercedes-Benz",
    "date": "4/26/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "17:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22f5" },
    "student": { "$oid": "65a76900fc13ae79abfa22f6" },
    "studentName": "Padgett Burberye",
    "courseCode": "Ford",
    "date": "8/22/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "20:04"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22f7" },
    "student": { "$oid": "65a76900fc13ae79abfa22f8" },
    "studentName": "Phebe Laybourne",
    "courseCode": "Chevrolet",
    "date": "3/2/2023",
    "term": "Way",
    "section": "Circle",
    "timeIn": "20:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22f9" },
    "student": { "$oid": "65a76900fc13ae79abfa22fa" },
    "studentName": "Ric Croasdale",
    "courseCode": "Honda",
    "date": "1/21/2023",
    "term": "Court",
    "section": "Street",
    "timeIn": "13:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22fb" },
    "student": { "$oid": "65a76900fc13ae79abfa22fc" },
    "studentName": "Adelaida Garretson",
    "courseCode": "Mercedes-Benz",
    "date": "9/18/2023",
    "term": "Plaza",
    "section": "Parkway",
    "timeIn": "3:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22fd" },
    "student": { "$oid": "65a76900fc13ae79abfa22fe" },
    "studentName": "Aigneis Cassey",
    "courseCode": "Volkswagen",
    "date": "4/13/2023",
    "term": "Center",
    "section": "Avenue",
    "timeIn": "2:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa22ff" },
    "student": { "$oid": "65a76900fc13ae79abfa2300" },
    "studentName": "Hamlin Dun",
    "courseCode": "Nissan",
    "date": "7/5/2023",
    "term": "Drive",
    "section": "Street",
    "timeIn": "20:52"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2301" },
    "student": { "$oid": "65a76900fc13ae79abfa2302" },
    "studentName": "Abrahan Buttress",
    "courseCode": "Mitsubishi",
    "date": "3/28/2023",
    "term": "Pass",
    "section": "Terrace",
    "timeIn": "5:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2303" },
    "student": { "$oid": "65a76900fc13ae79abfa2304" },
    "studentName": "Daisie Casaro",
    "courseCode": "Isuzu",
    "date": "2/13/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "9:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2305" },
    "student": { "$oid": "65a76900fc13ae79abfa2306" },
    "studentName": "Vyky Statersfield",
    "courseCode": "Volkswagen",
    "date": "10/13/2023",
    "term": "Way",
    "section": "Center",
    "timeIn": "19:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2307" },
    "student": { "$oid": "65a76900fc13ae79abfa2308" },
    "studentName": "Nahum Verny",
    "courseCode": "Ford",
    "date": "12/30/2023",
    "term": "Street",
    "section": "Street",
    "timeIn": "10:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2309" },
    "student": { "$oid": "65a76900fc13ae79abfa230a" },
    "studentName": "Rhonda Muckloe",
    "courseCode": "Lexus",
    "date": "2/6/2023",
    "term": "Court",
    "section": "Parkway",
    "timeIn": "17:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa230b" },
    "student": { "$oid": "65a76900fc13ae79abfa230c" },
    "studentName": "Koenraad Antczak",
    "courseCode": "Land Rover",
    "date": "8/6/2023",
    "term": "Place",
    "section": "Drive",
    "timeIn": "5:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa230d" },
    "student": { "$oid": "65a76900fc13ae79abfa230e" },
    "studentName": "Arv Manuaud",
    "courseCode": "Ferrari",
    "date": "3/17/2023",
    "term": "Junction",
    "section": "Street",
    "timeIn": "11:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa230f" },
    "student": { "$oid": "65a76900fc13ae79abfa2310" },
    "studentName": "Noll Antonignetti",
    "courseCode": "Bentley",
    "date": "10/18/2023",
    "term": "Crossing",
    "section": "Court",
    "timeIn": "0:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2311" },
    "student": { "$oid": "65a76900fc13ae79abfa2312" },
    "studentName": "Ailbert Klageman",
    "courseCode": "Saturn",
    "date": "3/16/2023",
    "term": "Pass",
    "section": "Terrace",
    "timeIn": "20:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2313" },
    "student": { "$oid": "65a76900fc13ae79abfa2314" },
    "studentName": "Sarene Cordsen",
    "courseCode": "Chevrolet",
    "date": "2/2/2023",
    "term": "Hill",
    "section": "Avenue",
    "timeIn": "23:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2315" },
    "student": { "$oid": "65a76900fc13ae79abfa2316" },
    "studentName": "Rodie Gorman",
    "courseCode": "Lincoln",
    "date": "10/30/2023",
    "term": "Way",
    "section": "Park",
    "timeIn": "0:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2317" },
    "student": { "$oid": "65a76900fc13ae79abfa2318" },
    "studentName": "Barth Aynscombe",
    "courseCode": "Ford",
    "date": "6/4/2023",
    "term": "Center",
    "section": "Plaza",
    "timeIn": "12:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2319" },
    "student": { "$oid": "65a76900fc13ae79abfa231a" },
    "studentName": "Rosamund Everton",
    "courseCode": "Nissan",
    "date": "1/16/2023",
    "term": "Park",
    "section": "Point",
    "timeIn": "8:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa231b" },
    "student": { "$oid": "65a76900fc13ae79abfa231c" },
    "studentName": "Renate Ugolotti",
    "courseCode": "Mitsubishi",
    "date": "3/10/2023",
    "term": "Place",
    "section": "Junction",
    "timeIn": "8:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa231d" },
    "student": { "$oid": "65a76900fc13ae79abfa231e" },
    "studentName": "Hollis Parnham",
    "courseCode": "Oldsmobile",
    "date": "12/3/2023",
    "term": "Terrace",
    "section": "Plaza",
    "timeIn": "2:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa231f" },
    "student": { "$oid": "65a76900fc13ae79abfa2320" },
    "studentName": "Caren Hudleston",
    "courseCode": "Lexus",
    "date": "1/6/2023",
    "term": "Road",
    "section": "Trail",
    "timeIn": "20:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2321" },
    "student": { "$oid": "65a76900fc13ae79abfa2322" },
    "studentName": "Gabriellia Morgon",
    "courseCode": "Maserati",
    "date": "1/13/2023",
    "term": "Point",
    "section": "Park",
    "timeIn": "23:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2323" },
    "student": { "$oid": "65a76900fc13ae79abfa2324" },
    "studentName": "Sadella Nelm",
    "courseCode": "Jaguar",
    "date": "5/23/2023",
    "term": "Alley",
    "section": "Street",
    "timeIn": "9:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2325" },
    "student": { "$oid": "65a76900fc13ae79abfa2326" },
    "studentName": "Antonella Skirven",
    "courseCode": "Jaguar",
    "date": "12/20/2023",
    "term": "Park",
    "section": "Hill",
    "timeIn": "6:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2327" },
    "student": { "$oid": "65a76900fc13ae79abfa2328" },
    "studentName": "Loy Bentke",
    "courseCode": "Porsche",
    "date": "5/5/2023",
    "term": "Crossing",
    "section": "Trail",
    "timeIn": "20:37"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2329" },
    "student": { "$oid": "65a76900fc13ae79abfa232a" },
    "studentName": "Hart Mankor",
    "courseCode": "Ford",
    "date": "1/8/2023",
    "term": "Point",
    "section": "Crossing",
    "timeIn": "9:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa232b" },
    "student": { "$oid": "65a76900fc13ae79abfa232c" },
    "studentName": "Jacynth Woodcock",
    "courseCode": "Dodge",
    "date": "9/6/2023",
    "term": "Plaza",
    "section": "Junction",
    "timeIn": "10:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa232d" },
    "student": { "$oid": "65a76900fc13ae79abfa232e" },
    "studentName": "Maurita Porkiss",
    "courseCode": "Toyota",
    "date": "9/2/2023",
    "term": "Parkway",
    "section": "Park",
    "timeIn": "7:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa232f" },
    "student": { "$oid": "65a76900fc13ae79abfa2330" },
    "studentName": "Tyler MacMeekan",
    "courseCode": "Suzuki",
    "date": "5/10/2023",
    "term": "Trail",
    "section": "Plaza",
    "timeIn": "7:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2331" },
    "student": { "$oid": "65a76900fc13ae79abfa2332" },
    "studentName": "Addi Bonnet",
    "courseCode": "Dodge",
    "date": "1/14/2024",
    "term": "Park",
    "section": "Court",
    "timeIn": "9:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2333" },
    "student": { "$oid": "65a76900fc13ae79abfa2334" },
    "studentName": "Laurette Bedson",
    "courseCode": "Maserati",
    "date": "1/2/2024",
    "term": "Way",
    "section": "Center",
    "timeIn": "1:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2335" },
    "student": { "$oid": "65a76900fc13ae79abfa2336" },
    "studentName": "Murdock Gietz",
    "courseCode": "Toyota",
    "date": "2/14/2023",
    "term": "Drive",
    "section": "Place",
    "timeIn": "13:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2337" },
    "student": { "$oid": "65a76900fc13ae79abfa2338" },
    "studentName": "Adrea Wernham",
    "courseCode": "Lincoln",
    "date": "1/1/2024",
    "term": "Terrace",
    "section": "Trail",
    "timeIn": "16:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2339" },
    "student": { "$oid": "65a76900fc13ae79abfa233a" },
    "studentName": "Sarine Langer",
    "courseCode": "Volkswagen",
    "date": "2/16/2023",
    "term": "Street",
    "section": "Drive",
    "timeIn": "14:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa233b" },
    "student": { "$oid": "65a76900fc13ae79abfa233c" },
    "studentName": "Gawain Shalloe",
    "courseCode": "Toyota",
    "date": "6/15/2023",
    "term": "Way",
    "section": "Drive",
    "timeIn": "20:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa233d" },
    "student": { "$oid": "65a76900fc13ae79abfa233e" },
    "studentName": "Aubine Berzons",
    "courseCode": "Nissan",
    "date": "9/14/2023",
    "term": "Avenue",
    "section": "Avenue",
    "timeIn": "21:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa233f" },
    "student": { "$oid": "65a76900fc13ae79abfa2340" },
    "studentName": "Minnaminnie Leaton",
    "courseCode": "Pontiac",
    "date": "9/2/2023",
    "term": "Road",
    "section": "Lane",
    "timeIn": "14:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2341" },
    "student": { "$oid": "65a76900fc13ae79abfa2342" },
    "studentName": "Niles Kitcherside",
    "courseCode": "Mitsubishi",
    "date": "1/9/2024",
    "term": "Park",
    "section": "Alley",
    "timeIn": "6:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2343" },
    "student": { "$oid": "65a76900fc13ae79abfa2344" },
    "studentName": "Amy Felton",
    "courseCode": "Chevrolet",
    "date": "11/23/2023",
    "term": "Drive",
    "section": "Place",
    "timeIn": "20:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2345" },
    "student": { "$oid": "65a76900fc13ae79abfa2346" },
    "studentName": "Trudi Cello",
    "courseCode": "Lotus",
    "date": "7/14/2023",
    "term": "Trail",
    "section": "Drive",
    "timeIn": "1:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2347" },
    "student": { "$oid": "65a76900fc13ae79abfa2348" },
    "studentName": "Vaughan Skitch",
    "courseCode": "Lexus",
    "date": "6/25/2023",
    "term": "Trail",
    "section": "Court",
    "timeIn": "21:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2349" },
    "student": { "$oid": "65a76900fc13ae79abfa234a" },
    "studentName": "Dasie Wrennall",
    "courseCode": "GMC",
    "date": "5/17/2023",
    "term": "Hill",
    "section": "Center",
    "timeIn": "23:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa234b" },
    "student": { "$oid": "65a76900fc13ae79abfa234c" },
    "studentName": "Nathanil Penniell",
    "courseCode": "Chevrolet",
    "date": "9/14/2023",
    "term": "Point",
    "section": "Park",
    "timeIn": "15:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa234d" },
    "student": { "$oid": "65a76900fc13ae79abfa234e" },
    "studentName": "Nanon Ridhole",
    "courseCode": "Mercury",
    "date": "12/27/2023",
    "term": "Crossing",
    "section": "Lane",
    "timeIn": "3:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa234f" },
    "student": { "$oid": "65a76900fc13ae79abfa2350" },
    "studentName": "Uriah Ivanusyev",
    "courseCode": "Ferrari",
    "date": "3/21/2023",
    "term": "Court",
    "section": "Street",
    "timeIn": "11:04"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2351" },
    "student": { "$oid": "65a76900fc13ae79abfa2352" },
    "studentName": "Nari Wapple",
    "courseCode": "Lamborghini",
    "date": "4/18/2023",
    "term": "Terrace",
    "section": "Center",
    "timeIn": "2:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2353" },
    "student": { "$oid": "65a76900fc13ae79abfa2354" },
    "studentName": "Willetta Sobey",
    "courseCode": "Chevrolet",
    "date": "9/29/2023",
    "term": "Terrace",
    "section": "Lane",
    "timeIn": "0:01"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2355" },
    "student": { "$oid": "65a76900fc13ae79abfa2356" },
    "studentName": "Lurleen Zelake",
    "courseCode": "Volkswagen",
    "date": "11/15/2023",
    "term": "Plaza",
    "section": "Pass",
    "timeIn": "20:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2357" },
    "student": { "$oid": "65a76900fc13ae79abfa2358" },
    "studentName": "Elset Lifsey",
    "courseCode": "Mitsubishi",
    "date": "12/24/2023",
    "term": "Terrace",
    "section": "Crossing",
    "timeIn": "13:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2359" },
    "student": { "$oid": "65a76900fc13ae79abfa235a" },
    "studentName": "Mikaela Alvy",
    "courseCode": "Ford",
    "date": "2/2/2023",
    "term": "Circle",
    "section": "Alley",
    "timeIn": "22:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa235b" },
    "student": { "$oid": "65a76900fc13ae79abfa235c" },
    "studentName": "Umberto Bramhall",
    "courseCode": "Lincoln",
    "date": "12/24/2023",
    "term": "Crossing",
    "section": "Parkway",
    "timeIn": "7:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa235d" },
    "student": { "$oid": "65a76900fc13ae79abfa235e" },
    "studentName": "Tobias Guiot",
    "courseCode": "Acura",
    "date": "8/30/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "9:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa235f" },
    "student": { "$oid": "65a76900fc13ae79abfa2360" },
    "studentName": "Fawnia Alders",
    "courseCode": "Mazda",
    "date": "3/13/2023",
    "term": "Crossing",
    "section": "Street",
    "timeIn": "1:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2361" },
    "student": { "$oid": "65a76900fc13ae79abfa2362" },
    "studentName": "Brook Bulward",
    "courseCode": "Chevrolet",
    "date": "2/20/2023",
    "term": "Center",
    "section": "Avenue",
    "timeIn": "9:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2363" },
    "student": { "$oid": "65a76900fc13ae79abfa2364" },
    "studentName": "Lars Deschlein",
    "courseCode": "Mercedes-Benz",
    "date": "8/17/2023",
    "term": "Hill",
    "section": "Terrace",
    "timeIn": "17:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2365" },
    "student": { "$oid": "65a76900fc13ae79abfa2366" },
    "studentName": "Annabell Dizlie",
    "courseCode": "Volkswagen",
    "date": "3/17/2023",
    "term": "Place",
    "section": "Point",
    "timeIn": "14:01"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2367" },
    "student": { "$oid": "65a76900fc13ae79abfa2368" },
    "studentName": "Britteny Lackemann",
    "courseCode": "BMW",
    "date": "4/6/2023",
    "term": "Road",
    "section": "Terrace",
    "timeIn": "12:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2369" },
    "student": { "$oid": "65a76900fc13ae79abfa236a" },
    "studentName": "Lorrie Todari",
    "courseCode": "Nissan",
    "date": "10/18/2023",
    "term": "Street",
    "section": "Plaza",
    "timeIn": "16:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa236b" },
    "student": { "$oid": "65a76900fc13ae79abfa236c" },
    "studentName": "Tracy Paaso",
    "courseCode": "Lincoln",
    "date": "8/27/2023",
    "term": "Crossing",
    "section": "Point",
    "timeIn": "14:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa236d" },
    "student": { "$oid": "65a76900fc13ae79abfa236e" },
    "studentName": "Jens Aspital",
    "courseCode": "Oldsmobile",
    "date": "6/12/2023",
    "term": "Circle",
    "section": "Hill",
    "timeIn": "15:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa236f" },
    "student": { "$oid": "65a76900fc13ae79abfa2370" },
    "studentName": "Aurelie Patek",
    "courseCode": "Mitsubishi",
    "date": "9/12/2023",
    "term": "Drive",
    "section": "Drive",
    "timeIn": "11:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2371" },
    "student": { "$oid": "65a76900fc13ae79abfa2372" },
    "studentName": "Hollie Feely",
    "courseCode": "Toyota",
    "date": "4/12/2023",
    "term": "Way",
    "section": "Place",
    "timeIn": "5:35"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2373" },
    "student": { "$oid": "65a76900fc13ae79abfa2374" },
    "studentName": "Carlin Todaro",
    "courseCode": "BMW",
    "date": "10/7/2023",
    "term": "Pass",
    "section": "Court",
    "timeIn": "5:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2375" },
    "student": { "$oid": "65a76900fc13ae79abfa2376" },
    "studentName": "Leeanne Filby",
    "courseCode": "GMC",
    "date": "2/3/2023",
    "term": "Parkway",
    "section": "Parkway",
    "timeIn": "23:23"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2377" },
    "student": { "$oid": "65a76900fc13ae79abfa2378" },
    "studentName": "Amabel Cowser",
    "courseCode": "Lamborghini",
    "date": "9/16/2023",
    "term": "Court",
    "section": "Drive",
    "timeIn": "23:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2379" },
    "student": { "$oid": "65a76900fc13ae79abfa237a" },
    "studentName": "Herculie Tichner",
    "courseCode": "Ford",
    "date": "10/23/2023",
    "term": "Road",
    "section": "Plaza",
    "timeIn": "4:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa237b" },
    "student": { "$oid": "65a76900fc13ae79abfa237c" },
    "studentName": "Karlene Petrelli",
    "courseCode": "Volkswagen",
    "date": "7/20/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "14:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa237d" },
    "student": { "$oid": "65a76900fc13ae79abfa237e" },
    "studentName": "Herold Johnson",
    "courseCode": "Mazda",
    "date": "12/13/2023",
    "term": "Alley",
    "section": "Street",
    "timeIn": "4:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa237f" },
    "student": { "$oid": "65a76900fc13ae79abfa2380" },
    "studentName": "Herve Sillwood",
    "courseCode": "Ford",
    "date": "12/28/2023",
    "term": "Road",
    "section": "Junction",
    "timeIn": "23:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2381" },
    "student": { "$oid": "65a76900fc13ae79abfa2382" },
    "studentName": "Aldridge Eddow",
    "courseCode": "GMC",
    "date": "5/4/2023",
    "term": "Plaza",
    "section": "Crossing",
    "timeIn": "13:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2383" },
    "student": { "$oid": "65a76900fc13ae79abfa2384" },
    "studentName": "Yorgo Duley",
    "courseCode": "Pontiac",
    "date": "5/3/2023",
    "term": "Crossing",
    "section": "Road",
    "timeIn": "18:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2385" },
    "student": { "$oid": "65a76900fc13ae79abfa2386" },
    "studentName": "Michal Rays",
    "courseCode": "Subaru",
    "date": "12/19/2023",
    "term": "Terrace",
    "section": "Alley",
    "timeIn": "2:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2387" },
    "student": { "$oid": "65a76900fc13ae79abfa2388" },
    "studentName": "Gustave Burdess",
    "courseCode": "Pontiac",
    "date": "8/16/2023",
    "term": "Junction",
    "section": "Point",
    "timeIn": "9:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2389" },
    "student": { "$oid": "65a76900fc13ae79abfa238a" },
    "studentName": "Glenine Goodburn",
    "courseCode": "Hyundai",
    "date": "11/15/2023",
    "term": "Circle",
    "section": "Avenue",
    "timeIn": "6:13"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa238b" },
    "student": { "$oid": "65a76900fc13ae79abfa238c" },
    "studentName": "Kimberlyn Hessing",
    "courseCode": "Hyundai",
    "date": "10/14/2023",
    "term": "Hill",
    "section": "Lane",
    "timeIn": "1:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa238d" },
    "student": { "$oid": "65a76900fc13ae79abfa238e" },
    "studentName": "Rolando Brinkworth",
    "courseCode": "Jaguar",
    "date": "4/24/2023",
    "term": "Road",
    "section": "Place",
    "timeIn": "22:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa238f" },
    "student": { "$oid": "65a76900fc13ae79abfa2390" },
    "studentName": "Odessa Shelmerdine",
    "courseCode": "Volvo",
    "date": "7/18/2023",
    "term": "Court",
    "section": "Terrace",
    "timeIn": "22:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2391" },
    "student": { "$oid": "65a76900fc13ae79abfa2392" },
    "studentName": "Yuri Nunn",
    "courseCode": "Lincoln",
    "date": "1/30/2023",
    "term": "Lane",
    "section": "Hill",
    "timeIn": "21:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2393" },
    "student": { "$oid": "65a76900fc13ae79abfa2394" },
    "studentName": "Anya Gabel",
    "courseCode": "Mazda",
    "date": "4/20/2023",
    "term": "Place",
    "section": "Park",
    "timeIn": "15:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2395" },
    "student": { "$oid": "65a76900fc13ae79abfa2396" },
    "studentName": "Jaymie MacSporran",
    "courseCode": "Land Rover",
    "date": "1/30/2023",
    "term": "Drive",
    "section": "Avenue",
    "timeIn": "7:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2397" },
    "student": { "$oid": "65a76900fc13ae79abfa2398" },
    "studentName": "Nealson Kulvear",
    "courseCode": "Land Rover",
    "date": "3/18/2023",
    "term": "Junction",
    "section": "Avenue",
    "timeIn": "17:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2399" },
    "student": { "$oid": "65a76900fc13ae79abfa239a" },
    "studentName": "Noah Steddall",
    "courseCode": "Chevrolet",
    "date": "12/19/2023",
    "term": "Junction",
    "section": "Hill",
    "timeIn": "21:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa239b" },
    "student": { "$oid": "65a76900fc13ae79abfa239c" },
    "studentName": "Ives Leckie",
    "courseCode": "Ford",
    "date": "7/15/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "6:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa239d" },
    "student": { "$oid": "65a76900fc13ae79abfa239e" },
    "studentName": "Robinet Chaman",
    "courseCode": "Chrysler",
    "date": "8/29/2023",
    "term": "Junction",
    "section": "Drive",
    "timeIn": "17:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa239f" },
    "student": { "$oid": "65a76900fc13ae79abfa23a0" },
    "studentName": "Linnell Roddy",
    "courseCode": "Oldsmobile",
    "date": "10/20/2023",
    "term": "Street",
    "section": "Park",
    "timeIn": "9:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23a1" },
    "student": { "$oid": "65a76900fc13ae79abfa23a2" },
    "studentName": "Chandal Arnaudin",
    "courseCode": "Chevrolet",
    "date": "9/1/2023",
    "term": "Alley",
    "section": "Center",
    "timeIn": "14:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23a3" },
    "student": { "$oid": "65a76900fc13ae79abfa23a4" },
    "studentName": "Drona Castelijn",
    "courseCode": "Mitsubishi",
    "date": "3/31/2023",
    "term": "Crossing",
    "section": "Center",
    "timeIn": "14:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23a5" },
    "student": { "$oid": "65a76900fc13ae79abfa23a6" },
    "studentName": "Helenelizabeth Isenor",
    "courseCode": "Ford",
    "date": "3/12/2023",
    "term": "Terrace",
    "section": "Lane",
    "timeIn": "7:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23a7" },
    "student": { "$oid": "65a76900fc13ae79abfa23a8" },
    "studentName": "Mile Dripps",
    "courseCode": "Suzuki",
    "date": "1/1/2024",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "5:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23a9" },
    "student": { "$oid": "65a76900fc13ae79abfa23aa" },
    "studentName": "Geoff Crighten",
    "courseCode": "Nissan",
    "date": "10/1/2023",
    "term": "Avenue",
    "section": "Crossing",
    "timeIn": "0:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23ab" },
    "student": { "$oid": "65a76900fc13ae79abfa23ac" },
    "studentName": "Eran Barck",
    "courseCode": "Audi",
    "date": "12/8/2023",
    "term": "Center",
    "section": "Way",
    "timeIn": "12:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23ad" },
    "student": { "$oid": "65a76900fc13ae79abfa23ae" },
    "studentName": "Casie Pollock",
    "courseCode": "Toyota",
    "date": "5/27/2023",
    "term": "Avenue",
    "section": "Trail",
    "timeIn": "1:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23af" },
    "student": { "$oid": "65a76900fc13ae79abfa23b0" },
    "studentName": "Rowan Dwire",
    "courseCode": "Pontiac",
    "date": "9/8/2023",
    "term": "Place",
    "section": "Alley",
    "timeIn": "5:52"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23b1" },
    "student": { "$oid": "65a76900fc13ae79abfa23b2" },
    "studentName": "Frasier Seabrook",
    "courseCode": "Chevrolet",
    "date": "4/6/2023",
    "term": "Terrace",
    "section": "Alley",
    "timeIn": "0:22"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23b3" },
    "student": { "$oid": "65a76900fc13ae79abfa23b4" },
    "studentName": "Marco Lared",
    "courseCode": "Hyundai",
    "date": "1/14/2023",
    "term": "Point",
    "section": "Center",
    "timeIn": "14:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23b5" },
    "student": { "$oid": "65a76900fc13ae79abfa23b6" },
    "studentName": "Brittney Cholwell",
    "courseCode": "Volkswagen",
    "date": "2/21/2023",
    "term": "Avenue",
    "section": "Street",
    "timeIn": "3:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23b7" },
    "student": { "$oid": "65a76900fc13ae79abfa23b8" },
    "studentName": "Vinnie Baterip",
    "courseCode": "GMC",
    "date": "6/2/2023",
    "term": "Pass",
    "section": "Lane",
    "timeIn": "4:59"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23b9" },
    "student": { "$oid": "65a76900fc13ae79abfa23ba" },
    "studentName": "Gisella Brabender",
    "courseCode": "Ford",
    "date": "12/20/2023",
    "term": "Center",
    "section": "Park",
    "timeIn": "8:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23bb" },
    "student": { "$oid": "65a76900fc13ae79abfa23bc" },
    "studentName": "Artemas Dillaway",
    "courseCode": "GMC",
    "date": "8/20/2023",
    "term": "Parkway",
    "section": "Center",
    "timeIn": "7:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23bd" },
    "student": { "$oid": "65a76900fc13ae79abfa23be" },
    "studentName": "Kiley Louder",
    "courseCode": "BMW",
    "date": "4/2/2023",
    "term": "Center",
    "section": "Plaza",
    "timeIn": "5:07"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23bf" },
    "student": { "$oid": "65a76900fc13ae79abfa23c0" },
    "studentName": "Port Hovel",
    "courseCode": "Lincoln",
    "date": "1/5/2024",
    "term": "Pass",
    "section": "Way",
    "timeIn": "21:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23c1" },
    "student": { "$oid": "65a76900fc13ae79abfa23c2" },
    "studentName": "Tuesday Dominik",
    "courseCode": "Lamborghini",
    "date": "7/24/2023",
    "term": "Road",
    "section": "Drive",
    "timeIn": "18:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23c3" },
    "student": { "$oid": "65a76900fc13ae79abfa23c4" },
    "studentName": "Skipton Merredy",
    "courseCode": "Lexus",
    "date": "6/1/2023",
    "term": "Terrace",
    "section": "Place",
    "timeIn": "10:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23c5" },
    "student": { "$oid": "65a76900fc13ae79abfa23c6" },
    "studentName": "Axe Elletson",
    "courseCode": "Ford",
    "date": "12/30/2023",
    "term": "Center",
    "section": "Crossing",
    "timeIn": "1:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23c7" },
    "student": { "$oid": "65a76900fc13ae79abfa23c8" },
    "studentName": "Ferrel Clatworthy",
    "courseCode": "Chrysler",
    "date": "4/19/2023",
    "term": "Avenue",
    "section": "Street",
    "timeIn": "16:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23c9" },
    "student": { "$oid": "65a76900fc13ae79abfa23ca" },
    "studentName": "Roi Dadge",
    "courseCode": "Chevrolet",
    "date": "12/25/2023",
    "term": "Terrace",
    "section": "Center",
    "timeIn": "11:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23cb" },
    "student": { "$oid": "65a76900fc13ae79abfa23cc" },
    "studentName": "Angelico Barribal",
    "courseCode": "Mazda",
    "date": "7/8/2023",
    "term": "Lane",
    "section": "Alley",
    "timeIn": "18:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23cd" },
    "student": { "$oid": "65a76900fc13ae79abfa23ce" },
    "studentName": "Maryl Larenson",
    "courseCode": "BMW",
    "date": "2/1/2023",
    "term": "Avenue",
    "section": "Junction",
    "timeIn": "4:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23cf" },
    "student": { "$oid": "65a76900fc13ae79abfa23d0" },
    "studentName": "Lorna Wardlow",
    "courseCode": "Toyota",
    "date": "1/7/2024",
    "term": "Way",
    "section": "Road",
    "timeIn": "9:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23d1" },
    "student": { "$oid": "65a76900fc13ae79abfa23d2" },
    "studentName": "Oralia Holmyard",
    "courseCode": "Plymouth",
    "date": "6/29/2023",
    "term": "Center",
    "section": "Terrace",
    "timeIn": "21:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23d3" },
    "student": { "$oid": "65a76900fc13ae79abfa23d4" },
    "studentName": "Kandy Rycroft",
    "courseCode": "Audi",
    "date": "10/8/2023",
    "term": "Trail",
    "section": "Lane",
    "timeIn": "21:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23d5" },
    "student": { "$oid": "65a76900fc13ae79abfa23d6" },
    "studentName": "Catrina MacFarland",
    "courseCode": "Volvo",
    "date": "6/20/2023",
    "term": "Trail",
    "section": "Drive",
    "timeIn": "9:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23d7" },
    "student": { "$oid": "65a76900fc13ae79abfa23d8" },
    "studentName": "Lulita Wynter",
    "courseCode": "Ford",
    "date": "7/21/2023",
    "term": "Place",
    "section": "Trail",
    "timeIn": "15:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23d9" },
    "student": { "$oid": "65a76900fc13ae79abfa23da" },
    "studentName": "Gare Wycliffe",
    "courseCode": "Audi",
    "date": "12/6/2023",
    "term": "Way",
    "section": "Alley",
    "timeIn": "23:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23db" },
    "student": { "$oid": "65a76900fc13ae79abfa23dc" },
    "studentName": "Alvina Warnock",
    "courseCode": "Lexus",
    "date": "10/13/2023",
    "term": "Hill",
    "section": "Center",
    "timeIn": "5:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23dd" },
    "student": { "$oid": "65a76900fc13ae79abfa23de" },
    "studentName": "Howie Androck",
    "courseCode": "BMW",
    "date": "3/21/2023",
    "term": "Parkway",
    "section": "Plaza",
    "timeIn": "0:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23df" },
    "student": { "$oid": "65a76900fc13ae79abfa23e0" },
    "studentName": "Les Manuelli",
    "courseCode": "Ford",
    "date": "5/7/2023",
    "term": "Parkway",
    "section": "Road",
    "timeIn": "0:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23e1" },
    "student": { "$oid": "65a76900fc13ae79abfa23e2" },
    "studentName": "Newton Wheatcroft",
    "courseCode": "Toyota",
    "date": "1/4/2024",
    "term": "Junction",
    "section": "Crossing",
    "timeIn": "19:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23e3" },
    "student": { "$oid": "65a76900fc13ae79abfa23e4" },
    "studentName": "Mark Merali",
    "courseCode": "Mitsubishi",
    "date": "9/29/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "9:35"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23e5" },
    "student": { "$oid": "65a76900fc13ae79abfa23e6" },
    "studentName": "Todd Windross",
    "courseCode": "Toyota",
    "date": "10/31/2023",
    "term": "Drive",
    "section": "Trail",
    "timeIn": "3:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23e7" },
    "student": { "$oid": "65a76900fc13ae79abfa23e8" },
    "studentName": "Zarla Stratz",
    "courseCode": "BMW",
    "date": "8/26/2023",
    "term": "Avenue",
    "section": "Parkway",
    "timeIn": "20:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23e9" },
    "student": { "$oid": "65a76900fc13ae79abfa23ea" },
    "studentName": "Claudie Ferrers",
    "courseCode": "BMW",
    "date": "10/5/2023",
    "term": "Trail",
    "section": "Drive",
    "timeIn": "0:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23eb" },
    "student": { "$oid": "65a76900fc13ae79abfa23ec" },
    "studentName": "Abba McKeating",
    "courseCode": "Chevrolet",
    "date": "7/30/2023",
    "term": "Trail",
    "section": "Center",
    "timeIn": "15:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23ed" },
    "student": { "$oid": "65a76900fc13ae79abfa23ee" },
    "studentName": "Cora Caudrey",
    "courseCode": "Hyundai",
    "date": "7/20/2023",
    "term": "Place",
    "section": "Road",
    "timeIn": "7:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23ef" },
    "student": { "$oid": "65a76900fc13ae79abfa23f0" },
    "studentName": "Lucita McIlhagga",
    "courseCode": "Ford",
    "date": "4/21/2023",
    "term": "Alley",
    "section": "Point",
    "timeIn": "8:44"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23f1" },
    "student": { "$oid": "65a76900fc13ae79abfa23f2" },
    "studentName": "Saunderson Fortnon",
    "courseCode": "Mercury",
    "date": "12/13/2023",
    "term": "Crossing",
    "section": "Point",
    "timeIn": "7:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23f3" },
    "student": { "$oid": "65a76900fc13ae79abfa23f4" },
    "studentName": "Kylen Letson",
    "courseCode": "Oldsmobile",
    "date": "9/18/2023",
    "term": "Parkway",
    "section": "Street",
    "timeIn": "0:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23f5" },
    "student": { "$oid": "65a76900fc13ae79abfa23f6" },
    "studentName": "Hervey Slowey",
    "courseCode": "Acura",
    "date": "9/17/2023",
    "term": "Avenue",
    "section": "Way",
    "timeIn": "10:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23f7" },
    "student": { "$oid": "65a76900fc13ae79abfa23f8" },
    "studentName": "Bernardina Warburton",
    "courseCode": "Mercedes-Benz",
    "date": "4/28/2023",
    "term": "Hill",
    "section": "Way",
    "timeIn": "20:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23f9" },
    "student": { "$oid": "65a76900fc13ae79abfa23fa" },
    "studentName": "Valentino Gregol",
    "courseCode": "Mitsubishi",
    "date": "9/22/2023",
    "term": "Circle",
    "section": "Place",
    "timeIn": "23:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23fb" },
    "student": { "$oid": "65a76900fc13ae79abfa23fc" },
    "studentName": "Cammy Earney",
    "courseCode": "Mitsubishi",
    "date": "4/16/2023",
    "term": "Terrace",
    "section": "Avenue",
    "timeIn": "23:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23fd" },
    "student": { "$oid": "65a76900fc13ae79abfa23fe" },
    "studentName": "Alix McMechan",
    "courseCode": "Pontiac",
    "date": "6/19/2023",
    "term": "Alley",
    "section": "Plaza",
    "timeIn": "11:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa23ff" },
    "student": { "$oid": "65a76900fc13ae79abfa2400" },
    "studentName": "Valery Claybourn",
    "courseCode": "Chevrolet",
    "date": "9/3/2023",
    "term": "Terrace",
    "section": "Hill",
    "timeIn": "10:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2401" },
    "student": { "$oid": "65a76900fc13ae79abfa2402" },
    "studentName": "Chadwick Kippax",
    "courseCode": "Volkswagen",
    "date": "4/14/2023",
    "term": "Lane",
    "section": "Drive",
    "timeIn": "0:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2403" },
    "student": { "$oid": "65a76900fc13ae79abfa2404" },
    "studentName": "Samantha Papaccio",
    "courseCode": "Chrysler",
    "date": "5/4/2023",
    "term": "Avenue",
    "section": "Road",
    "timeIn": "4:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2405" },
    "student": { "$oid": "65a76900fc13ae79abfa2406" },
    "studentName": "Devlen De Fries",
    "courseCode": "Buick",
    "date": "1/14/2024",
    "term": "Center",
    "section": "Place",
    "timeIn": "18:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2407" },
    "student": { "$oid": "65a76900fc13ae79abfa2408" },
    "studentName": "Lynea Bragg",
    "courseCode": "Ford",
    "date": "7/25/2023",
    "term": "Circle",
    "section": "Plaza",
    "timeIn": "8:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2409" },
    "student": { "$oid": "65a76900fc13ae79abfa240a" },
    "studentName": "Tanitansy Corbyn",
    "courseCode": "Mercedes-Benz",
    "date": "12/16/2023",
    "term": "Circle",
    "section": "Lane",
    "timeIn": "13:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa240b" },
    "student": { "$oid": "65a76900fc13ae79abfa240c" },
    "studentName": "Audre Redemile",
    "courseCode": "Audi",
    "date": "5/21/2023",
    "term": "Road",
    "section": "Terrace",
    "timeIn": "7:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa240d" },
    "student": { "$oid": "65a76900fc13ae79abfa240e" },
    "studentName": "Ervin Mooreed",
    "courseCode": "BMW",
    "date": "3/14/2023",
    "term": "Alley",
    "section": "Hill",
    "timeIn": "12:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa240f" },
    "student": { "$oid": "65a76900fc13ae79abfa2410" },
    "studentName": "Humbert Cook",
    "courseCode": "Audi",
    "date": "9/23/2023",
    "term": "Trail",
    "section": "Park",
    "timeIn": "15:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2411" },
    "student": { "$oid": "65a76900fc13ae79abfa2412" },
    "studentName": "Maxi Buglass",
    "courseCode": "Dodge",
    "date": "12/14/2023",
    "term": "Pass",
    "section": "Junction",
    "timeIn": "18:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2413" },
    "student": { "$oid": "65a76900fc13ae79abfa2414" },
    "studentName": "Oliver Hayhow",
    "courseCode": "Maserati",
    "date": "4/12/2023",
    "term": "Lane",
    "section": "Park",
    "timeIn": "12:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2415" },
    "student": { "$oid": "65a76900fc13ae79abfa2416" },
    "studentName": "Uri Hallatt",
    "courseCode": "Cadillac",
    "date": "12/20/2023",
    "term": "Point",
    "section": "Junction",
    "timeIn": "15:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2417" },
    "student": { "$oid": "65a76900fc13ae79abfa2418" },
    "studentName": "Ingeborg Brownjohn",
    "courseCode": "Subaru",
    "date": "1/3/2023",
    "term": "Place",
    "section": "Junction",
    "timeIn": "14:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2419" },
    "student": { "$oid": "65a76900fc13ae79abfa241a" },
    "studentName": "Averyl Nation",
    "courseCode": "BMW",
    "date": "12/12/2023",
    "term": "Trail",
    "section": "Road",
    "timeIn": "9:01"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa241b" },
    "student": { "$oid": "65a76900fc13ae79abfa241c" },
    "studentName": "Licha Balassi",
    "courseCode": "Toyota",
    "date": "4/12/2023",
    "term": "Way",
    "section": "Street",
    "timeIn": "3:59"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa241d" },
    "student": { "$oid": "65a76900fc13ae79abfa241e" },
    "studentName": "Leeann Kennifeck",
    "courseCode": "Saturn",
    "date": "12/11/2023",
    "term": "Circle",
    "section": "Place",
    "timeIn": "1:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa241f" },
    "student": { "$oid": "65a76900fc13ae79abfa2420" },
    "studentName": "Charline Foulkes",
    "courseCode": "Infiniti",
    "date": "2/25/2023",
    "term": "Trail",
    "section": "Place",
    "timeIn": "23:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2421" },
    "student": { "$oid": "65a76900fc13ae79abfa2422" },
    "studentName": "Arluene Micheli",
    "courseCode": "Cadillac",
    "date": "11/11/2023",
    "term": "Parkway",
    "section": "Pass",
    "timeIn": "8:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2423" },
    "student": { "$oid": "65a76900fc13ae79abfa2424" },
    "studentName": "Harry Totterdell",
    "courseCode": "Land Rover",
    "date": "6/22/2023",
    "term": "Avenue",
    "section": "Center",
    "timeIn": "7:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2425" },
    "student": { "$oid": "65a76900fc13ae79abfa2426" },
    "studentName": "Bernie Philippart",
    "courseCode": "Plymouth",
    "date": "1/26/2023",
    "term": "Point",
    "section": "Point",
    "timeIn": "16:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2427" },
    "student": { "$oid": "65a76900fc13ae79abfa2428" },
    "studentName": "Lorin Batts",
    "courseCode": "Suzuki",
    "date": "12/11/2023",
    "term": "Alley",
    "section": "Drive",
    "timeIn": "13:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2429" },
    "student": { "$oid": "65a76900fc13ae79abfa242a" },
    "studentName": "Hamlen Nussii",
    "courseCode": "Mercedes-Benz",
    "date": "6/21/2023",
    "term": "Park",
    "section": "Crossing",
    "timeIn": "7:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa242b" },
    "student": { "$oid": "65a76900fc13ae79abfa242c" },
    "studentName": "Gage Brito",
    "courseCode": "Kia",
    "date": "10/3/2023",
    "term": "Road",
    "section": "Court",
    "timeIn": "15:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa242d" },
    "student": { "$oid": "65a76900fc13ae79abfa242e" },
    "studentName": "Sibylla Hamsher",
    "courseCode": "Mercedes-Benz",
    "date": "8/13/2023",
    "term": "Center",
    "section": "Junction",
    "timeIn": "9:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa242f" },
    "student": { "$oid": "65a76900fc13ae79abfa2430" },
    "studentName": "Jennee Haulkham",
    "courseCode": "Mazda",
    "date": "9/2/2023",
    "term": "Street",
    "section": "Drive",
    "timeIn": "2:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2431" },
    "student": { "$oid": "65a76900fc13ae79abfa2432" },
    "studentName": "Katusha Paler",
    "courseCode": "GMC",
    "date": "6/11/2023",
    "term": "Pass",
    "section": "Crossing",
    "timeIn": "12:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2433" },
    "student": { "$oid": "65a76900fc13ae79abfa2434" },
    "studentName": "Colet Brahmer",
    "courseCode": "BMW",
    "date": "1/5/2023",
    "term": "Center",
    "section": "Place",
    "timeIn": "8:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2435" },
    "student": { "$oid": "65a76900fc13ae79abfa2436" },
    "studentName": "Daphne Stennet",
    "courseCode": "Mazda",
    "date": "12/24/2023",
    "term": "Junction",
    "section": "Place",
    "timeIn": "14:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2437" },
    "student": { "$oid": "65a76900fc13ae79abfa2438" },
    "studentName": "Randi Fairy",
    "courseCode": "Chevrolet",
    "date": "8/11/2023",
    "term": "Drive",
    "section": "Terrace",
    "timeIn": "13:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2439" },
    "student": { "$oid": "65a76900fc13ae79abfa243a" },
    "studentName": "April Sellors",
    "courseCode": "Mazda",
    "date": "8/17/2023",
    "term": "Drive",
    "section": "Circle",
    "timeIn": "21:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa243b" },
    "student": { "$oid": "65a76900fc13ae79abfa243c" },
    "studentName": "Staffard Titmarsh",
    "courseCode": "Volvo",
    "date": "3/5/2023",
    "term": "Plaza",
    "section": "Trail",
    "timeIn": "4:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa243d" },
    "student": { "$oid": "65a76900fc13ae79abfa243e" },
    "studentName": "Tomi Conring",
    "courseCode": "Lexus",
    "date": "4/30/2023",
    "term": "Plaza",
    "section": "Avenue",
    "timeIn": "4:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa243f" },
    "student": { "$oid": "65a76900fc13ae79abfa2440" },
    "studentName": "Durante Binge",
    "courseCode": "Lamborghini",
    "date": "10/14/2023",
    "term": "Lane",
    "section": "Road",
    "timeIn": "13:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2441" },
    "student": { "$oid": "65a76900fc13ae79abfa2442" },
    "studentName": "Georgia Dumbrill",
    "courseCode": "Cadillac",
    "date": "8/4/2023",
    "term": "Center",
    "section": "Junction",
    "timeIn": "4:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2443" },
    "student": { "$oid": "65a76900fc13ae79abfa2444" },
    "studentName": "Danny Grunguer",
    "courseCode": "Chevrolet",
    "date": "1/13/2023",
    "term": "Plaza",
    "section": "Court",
    "timeIn": "18:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2445" },
    "student": { "$oid": "65a76900fc13ae79abfa2446" },
    "studentName": "Rubina Connick",
    "courseCode": "Infiniti",
    "date": "2/9/2023",
    "term": "Crossing",
    "section": "Alley",
    "timeIn": "19:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2447" },
    "student": { "$oid": "65a76900fc13ae79abfa2448" },
    "studentName": "Clevey Brimacombe",
    "courseCode": "Chrysler",
    "date": "9/26/2023",
    "term": "Street",
    "section": "Place",
    "timeIn": "12:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2449" },
    "student": { "$oid": "65a76900fc13ae79abfa244a" },
    "studentName": "Abbe Dargan",
    "courseCode": "Hyundai",
    "date": "6/8/2023",
    "term": "Center",
    "section": "Circle",
    "timeIn": "12:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa244b" },
    "student": { "$oid": "65a76900fc13ae79abfa244c" },
    "studentName": "Mala Ferronet",
    "courseCode": "Acura",
    "date": "1/24/2023",
    "term": "Drive",
    "section": "Crossing",
    "timeIn": "11:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa244d" },
    "student": { "$oid": "65a76900fc13ae79abfa244e" },
    "studentName": "Lindsey Hubbert",
    "courseCode": "Volkswagen",
    "date": "12/21/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "17:26"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa244f" },
    "student": { "$oid": "65a76900fc13ae79abfa2450" },
    "studentName": "Fernando Bennington",
    "courseCode": "Ford",
    "date": "4/5/2023",
    "term": "Crossing",
    "section": "Crossing",
    "timeIn": "8:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2451" },
    "student": { "$oid": "65a76900fc13ae79abfa2452" },
    "studentName": "Ginger Works",
    "courseCode": "Ford",
    "date": "6/11/2023",
    "term": "Junction",
    "section": "Lane",
    "timeIn": "8:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2453" },
    "student": { "$oid": "65a76900fc13ae79abfa2454" },
    "studentName": "Cathrin Rive",
    "courseCode": "Toyota",
    "date": "2/11/2023",
    "term": "Lane",
    "section": "Circle",
    "timeIn": "11:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2455" },
    "student": { "$oid": "65a76900fc13ae79abfa2456" },
    "studentName": "Carlyn Sackes",
    "courseCode": "Dodge",
    "date": "8/8/2023",
    "term": "Street",
    "section": "Alley",
    "timeIn": "4:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2457" },
    "student": { "$oid": "65a76900fc13ae79abfa2458" },
    "studentName": "Tamar Larner",
    "courseCode": "Oldsmobile",
    "date": "10/3/2023",
    "term": "Pass",
    "section": "Parkway",
    "timeIn": "18:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2459" },
    "student": { "$oid": "65a76900fc13ae79abfa245a" },
    "studentName": "Osmond Eldrid",
    "courseCode": "Ford",
    "date": "1/9/2024",
    "term": "Avenue",
    "section": "Plaza",
    "timeIn": "10:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa245b" },
    "student": { "$oid": "65a76900fc13ae79abfa245c" },
    "studentName": "Frederic Terrill",
    "courseCode": "Infiniti",
    "date": "3/16/2023",
    "term": "Pass",
    "section": "Trail",
    "timeIn": "15:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa245d" },
    "student": { "$oid": "65a76900fc13ae79abfa245e" },
    "studentName": "Batsheva Lowson",
    "courseCode": "Chevrolet",
    "date": "3/3/2023",
    "term": "Plaza",
    "section": "Place",
    "timeIn": "14:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa245f" },
    "student": { "$oid": "65a76900fc13ae79abfa2460" },
    "studentName": "Tynan Goult",
    "courseCode": "Mercedes-Benz",
    "date": "4/17/2023",
    "term": "Pass",
    "section": "Court",
    "timeIn": "16:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2461" },
    "student": { "$oid": "65a76900fc13ae79abfa2462" },
    "studentName": "Adore Jirka",
    "courseCode": "Hyundai",
    "date": "11/5/2023",
    "term": "Parkway",
    "section": "Pass",
    "timeIn": "7:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2463" },
    "student": { "$oid": "65a76900fc13ae79abfa2464" },
    "studentName": "Murielle Ivanchenkov",
    "courseCode": "Cadillac",
    "date": "11/18/2023",
    "term": "Circle",
    "section": "Way",
    "timeIn": "1:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2465" },
    "student": { "$oid": "65a76900fc13ae79abfa2466" },
    "studentName": "Ardeen Rolstone",
    "courseCode": "Saturn",
    "date": "9/17/2023",
    "term": "Pass",
    "section": "Avenue",
    "timeIn": "17:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2467" },
    "student": { "$oid": "65a76900fc13ae79abfa2468" },
    "studentName": "Roxane MacRierie",
    "courseCode": "Toyota",
    "date": "8/16/2023",
    "term": "Place",
    "section": "Street",
    "timeIn": "7:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2469" },
    "student": { "$oid": "65a76900fc13ae79abfa246a" },
    "studentName": "Ansley Measor",
    "courseCode": "Mercedes-Benz",
    "date": "9/26/2023",
    "term": "Street",
    "section": "Lane",
    "timeIn": "11:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa246b" },
    "student": { "$oid": "65a76900fc13ae79abfa246c" },
    "studentName": "Von Matthesius",
    "courseCode": "Audi",
    "date": "9/14/2023",
    "term": "Hill",
    "section": "Road",
    "timeIn": "22:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa246d" },
    "student": { "$oid": "65a76900fc13ae79abfa246e" },
    "studentName": "Issiah Merring",
    "courseCode": "GMC",
    "date": "8/20/2023",
    "term": "Court",
    "section": "Park",
    "timeIn": "20:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa246f" },
    "student": { "$oid": "65a76900fc13ae79abfa2470" },
    "studentName": "Jacklin Sewter",
    "courseCode": "Ford",
    "date": "3/29/2023",
    "term": "Court",
    "section": "Lane",
    "timeIn": "11:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2471" },
    "student": { "$oid": "65a76900fc13ae79abfa2472" },
    "studentName": "Allie Bamfield",
    "courseCode": "Buick",
    "date": "2/12/2023",
    "term": "Circle",
    "section": "Crossing",
    "timeIn": "20:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2473" },
    "student": { "$oid": "65a76900fc13ae79abfa2474" },
    "studentName": "Allina Parkhouse",
    "courseCode": "Toyota",
    "date": "3/7/2023",
    "term": "Lane",
    "section": "Street",
    "timeIn": "17:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2475" },
    "student": { "$oid": "65a76900fc13ae79abfa2476" },
    "studentName": "Sigismondo Pyatt",
    "courseCode": "Toyota",
    "date": "7/14/2023",
    "term": "Circle",
    "section": "Avenue",
    "timeIn": "11:23"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2477" },
    "student": { "$oid": "65a76900fc13ae79abfa2478" },
    "studentName": "Royall Ellacombe",
    "courseCode": "Pontiac",
    "date": "5/21/2023",
    "term": "Pass",
    "section": "Center",
    "timeIn": "16:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2479" },
    "student": { "$oid": "65a76900fc13ae79abfa247a" },
    "studentName": "Tamarra Bisson",
    "courseCode": "Nissan",
    "date": "12/23/2023",
    "term": "Park",
    "section": "Avenue",
    "timeIn": "19:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa247b" },
    "student": { "$oid": "65a76900fc13ae79abfa247c" },
    "studentName": "Jud Gosker",
    "courseCode": "Ford",
    "date": "2/21/2023",
    "term": "Court",
    "section": "Pass",
    "timeIn": "8:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa247d" },
    "student": { "$oid": "65a76900fc13ae79abfa247e" },
    "studentName": "Dacie Critcher",
    "courseCode": "Ford",
    "date": "4/11/2023",
    "term": "Junction",
    "section": "Lane",
    "timeIn": "18:22"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa247f" },
    "student": { "$oid": "65a76900fc13ae79abfa2480" },
    "studentName": "Thebault Smitheram",
    "courseCode": "Nissan",
    "date": "1/17/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "11:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2481" },
    "student": { "$oid": "65a76900fc13ae79abfa2482" },
    "studentName": "Willdon Gresly",
    "courseCode": "GMC",
    "date": "8/4/2023",
    "term": "Street",
    "section": "Plaza",
    "timeIn": "9:35"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2483" },
    "student": { "$oid": "65a76900fc13ae79abfa2484" },
    "studentName": "Starla Presidey",
    "courseCode": "Bentley",
    "date": "4/12/2023",
    "term": "Plaza",
    "section": "Circle",
    "timeIn": "6:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2485" },
    "student": { "$oid": "65a76900fc13ae79abfa2486" },
    "studentName": "Feliza Grimoldby",
    "courseCode": "Cadillac",
    "date": "10/21/2023",
    "term": "Center",
    "section": "Point",
    "timeIn": "14:37"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2487" },
    "student": { "$oid": "65a76900fc13ae79abfa2488" },
    "studentName": "Brenna Pitceathly",
    "courseCode": "Toyota",
    "date": "8/14/2023",
    "term": "Parkway",
    "section": "Alley",
    "timeIn": "3:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2489" },
    "student": { "$oid": "65a76900fc13ae79abfa248a" },
    "studentName": "Alica Bayfield",
    "courseCode": "Mercury",
    "date": "8/9/2023",
    "term": "Center",
    "section": "Park",
    "timeIn": "14:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa248b" },
    "student": { "$oid": "65a76900fc13ae79abfa248c" },
    "studentName": "Hertha Saywood",
    "courseCode": "Cadillac",
    "date": "4/23/2023",
    "term": "Drive",
    "section": "Alley",
    "timeIn": "2:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa248d" },
    "student": { "$oid": "65a76900fc13ae79abfa248e" },
    "studentName": "Julianne Echallie",
    "courseCode": "Lincoln",
    "date": "5/4/2023",
    "term": "Parkway",
    "section": "Alley",
    "timeIn": "15:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa248f" },
    "student": { "$oid": "65a76900fc13ae79abfa2490" },
    "studentName": "Gerianna Barbrick",
    "courseCode": "Ford",
    "date": "7/22/2023",
    "term": "Drive",
    "section": "Junction",
    "timeIn": "15:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2491" },
    "student": { "$oid": "65a76900fc13ae79abfa2492" },
    "studentName": "Alberto Lambot",
    "courseCode": "Dodge",
    "date": "10/31/2023",
    "term": "Parkway",
    "section": "Hill",
    "timeIn": "18:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2493" },
    "student": { "$oid": "65a76900fc13ae79abfa2494" },
    "studentName": "Jens Hambling",
    "courseCode": "Ford",
    "date": "2/18/2023",
    "term": "Road",
    "section": "Alley",
    "timeIn": "19:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2495" },
    "student": { "$oid": "65a76900fc13ae79abfa2496" },
    "studentName": "Quintana Ventum",
    "courseCode": "Pontiac",
    "date": "11/18/2023",
    "term": "Point",
    "section": "Circle",
    "timeIn": "9:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2497" },
    "student": { "$oid": "65a76900fc13ae79abfa2498" },
    "studentName": "Jillayne Sliney",
    "courseCode": "Toyota",
    "date": "6/7/2023",
    "term": "Way",
    "section": "Road",
    "timeIn": "0:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2499" },
    "student": { "$oid": "65a76900fc13ae79abfa249a" },
    "studentName": "Berni McVey",
    "courseCode": "Audi",
    "date": "12/20/2023",
    "term": "Alley",
    "section": "Pass",
    "timeIn": "5:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa249b" },
    "student": { "$oid": "65a76900fc13ae79abfa249c" },
    "studentName": "Arlin Matthewes",
    "courseCode": "Hyundai",
    "date": "9/29/2023",
    "term": "Terrace",
    "section": "Junction",
    "timeIn": "17:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa249d" },
    "student": { "$oid": "65a76900fc13ae79abfa249e" },
    "studentName": "Ewart Rabier",
    "courseCode": "Toyota",
    "date": "3/10/2023",
    "term": "Park",
    "section": "Trail",
    "timeIn": "19:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa249f" },
    "student": { "$oid": "65a76900fc13ae79abfa24a0" },
    "studentName": "Cherry Kersley",
    "courseCode": "Acura",
    "date": "1/21/2023",
    "term": "Trail",
    "section": "Center",
    "timeIn": "13:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24a1" },
    "student": { "$oid": "65a76900fc13ae79abfa24a2" },
    "studentName": "Elliot Swenson",
    "courseCode": "Hummer",
    "date": "6/19/2023",
    "term": "Hill",
    "section": "Plaza",
    "timeIn": "6:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24a3" },
    "student": { "$oid": "65a76900fc13ae79abfa24a4" },
    "studentName": "Nils Grigson",
    "courseCode": "Buick",
    "date": "10/2/2023",
    "term": "Plaza",
    "section": "Junction",
    "timeIn": "11:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24a5" },
    "student": { "$oid": "65a76900fc13ae79abfa24a6" },
    "studentName": "Chev Milington",
    "courseCode": "GMC",
    "date": "1/23/2023",
    "term": "Center",
    "section": "Alley",
    "timeIn": "11:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24a7" },
    "student": { "$oid": "65a76900fc13ae79abfa24a8" },
    "studentName": "Nonah Howgego",
    "courseCode": "Ford",
    "date": "3/31/2023",
    "term": "Drive",
    "section": "Way",
    "timeIn": "18:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24a9" },
    "student": { "$oid": "65a76900fc13ae79abfa24aa" },
    "studentName": "Gabi Battram",
    "courseCode": "Lexus",
    "date": "3/5/2023",
    "term": "Hill",
    "section": "Avenue",
    "timeIn": "5:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24ab" },
    "student": { "$oid": "65a76900fc13ae79abfa24ac" },
    "studentName": "Michail Germann",
    "courseCode": "Volvo",
    "date": "11/6/2023",
    "term": "Parkway",
    "section": "Circle",
    "timeIn": "20:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24ad" },
    "student": { "$oid": "65a76900fc13ae79abfa24ae" },
    "studentName": "Nollie McSperron",
    "courseCode": "Audi",
    "date": "1/7/2023",
    "term": "Terrace",
    "section": "Avenue",
    "timeIn": "18:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24af" },
    "student": { "$oid": "65a76900fc13ae79abfa24b0" },
    "studentName": "Jennie Dellenty",
    "courseCode": "BMW",
    "date": "12/6/2023",
    "term": "Parkway",
    "section": "Parkway",
    "timeIn": "11:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24b1" },
    "student": { "$oid": "65a76900fc13ae79abfa24b2" },
    "studentName": "Rosabella Balch",
    "courseCode": "Ford",
    "date": "2/6/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "17:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24b3" },
    "student": { "$oid": "65a76900fc13ae79abfa24b4" },
    "studentName": "Calypso Saby",
    "courseCode": "BMW",
    "date": "3/2/2023",
    "term": "Parkway",
    "section": "Place",
    "timeIn": "15:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24b5" },
    "student": { "$oid": "65a76900fc13ae79abfa24b6" },
    "studentName": "Leland Dorning",
    "courseCode": "Suzuki",
    "date": "1/16/2023",
    "term": "Trail",
    "section": "Road",
    "timeIn": "8:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24b7" },
    "student": { "$oid": "65a76900fc13ae79abfa24b8" },
    "studentName": "Neely Brahm",
    "courseCode": "Dodge",
    "date": "11/29/2023",
    "term": "Road",
    "section": "Drive",
    "timeIn": "11:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24b9" },
    "student": { "$oid": "65a76900fc13ae79abfa24ba" },
    "studentName": "Brigitta Camilio",
    "courseCode": "Isuzu",
    "date": "11/4/2023",
    "term": "Alley",
    "section": "Place",
    "timeIn": "7:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24bb" },
    "student": { "$oid": "65a76900fc13ae79abfa24bc" },
    "studentName": "Quintana Parham",
    "courseCode": "Lincoln",
    "date": "2/10/2023",
    "term": "Street",
    "section": "Lane",
    "timeIn": "12:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24bd" },
    "student": { "$oid": "65a76900fc13ae79abfa24be" },
    "studentName": "Merwin Silcocks",
    "courseCode": "Ford",
    "date": "2/24/2023",
    "term": "Avenue",
    "section": "Crossing",
    "timeIn": "22:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24bf" },
    "student": { "$oid": "65a76900fc13ae79abfa24c0" },
    "studentName": "Lil Stoak",
    "courseCode": "Nissan",
    "date": "1/24/2023",
    "term": "Plaza",
    "section": "Pass",
    "timeIn": "18:01"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24c1" },
    "student": { "$oid": "65a76900fc13ae79abfa24c2" },
    "studentName": "Etta Teasdale-Markie",
    "courseCode": "Mitsubishi",
    "date": "6/24/2023",
    "term": "Alley",
    "section": "Center",
    "timeIn": "6:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24c3" },
    "student": { "$oid": "65a76900fc13ae79abfa24c4" },
    "studentName": "Easter Avesque",
    "courseCode": "Jaguar",
    "date": "5/8/2023",
    "term": "Lane",
    "section": "Alley",
    "timeIn": "17:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24c5" },
    "student": { "$oid": "65a76900fc13ae79abfa24c6" },
    "studentName": "Durand Dryburgh",
    "courseCode": "Audi",
    "date": "4/12/2023",
    "term": "Terrace",
    "section": "Terrace",
    "timeIn": "17:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24c7" },
    "student": { "$oid": "65a76900fc13ae79abfa24c8" },
    "studentName": "Blanch Fochs",
    "courseCode": "Pontiac",
    "date": "4/7/2023",
    "term": "Center",
    "section": "Parkway",
    "timeIn": "5:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24c9" },
    "student": { "$oid": "65a76900fc13ae79abfa24ca" },
    "studentName": "Blanche Yushin",
    "courseCode": "Land Rover",
    "date": "6/2/2023",
    "term": "Street",
    "section": "Trail",
    "timeIn": "4:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24cb" },
    "student": { "$oid": "65a76900fc13ae79abfa24cc" },
    "studentName": "Fleming Draysay",
    "courseCode": "Mitsubishi",
    "date": "1/30/2023",
    "term": "Avenue",
    "section": "Road",
    "timeIn": "7:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24cd" },
    "student": { "$oid": "65a76900fc13ae79abfa24ce" },
    "studentName": "Hestia Saturley",
    "courseCode": "Ford",
    "date": "7/21/2023",
    "term": "Hill",
    "section": "Circle",
    "timeIn": "13:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24cf" },
    "student": { "$oid": "65a76900fc13ae79abfa24d0" },
    "studentName": "Emalia Ida",
    "courseCode": "Lexus",
    "date": "8/6/2023",
    "term": "Plaza",
    "section": "Center",
    "timeIn": "21:22"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24d1" },
    "student": { "$oid": "65a76900fc13ae79abfa24d2" },
    "studentName": "Cassie Sustins",
    "courseCode": "Cadillac",
    "date": "4/10/2023",
    "term": "Lane",
    "section": "Drive",
    "timeIn": "15:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24d3" },
    "student": { "$oid": "65a76900fc13ae79abfa24d4" },
    "studentName": "Rog Ridgers",
    "courseCode": "Mazda",
    "date": "3/7/2023",
    "term": "Trail",
    "section": "Pass",
    "timeIn": "12:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24d5" },
    "student": { "$oid": "65a76900fc13ae79abfa24d6" },
    "studentName": "Grace Kumaar",
    "courseCode": "Volvo",
    "date": "7/24/2023",
    "term": "Pass",
    "section": "Parkway",
    "timeIn": "0:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24d7" },
    "student": { "$oid": "65a76900fc13ae79abfa24d8" },
    "studentName": "Abbott Raddenbury",
    "courseCode": "Oldsmobile",
    "date": "4/1/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "11:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24d9" },
    "student": { "$oid": "65a76900fc13ae79abfa24da" },
    "studentName": "Cory Deering",
    "courseCode": "Buick",
    "date": "3/13/2023",
    "term": "Alley",
    "section": "Court",
    "timeIn": "18:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24db" },
    "student": { "$oid": "65a76900fc13ae79abfa24dc" },
    "studentName": "Teressa Van der Beek",
    "courseCode": "Mazda",
    "date": "2/13/2023",
    "term": "Road",
    "section": "Drive",
    "timeIn": "8:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24dd" },
    "student": { "$oid": "65a76900fc13ae79abfa24de" },
    "studentName": "Levin Boltwood",
    "courseCode": "Dodge",
    "date": "4/13/2023",
    "term": "Plaza",
    "section": "Hill",
    "timeIn": "15:35"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24df" },
    "student": { "$oid": "65a76900fc13ae79abfa24e0" },
    "studentName": "Alexa Benge",
    "courseCode": "Honda",
    "date": "10/7/2023",
    "term": "Point",
    "section": "Center",
    "timeIn": "3:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24e1" },
    "student": { "$oid": "65a76900fc13ae79abfa24e2" },
    "studentName": "Edeline Bowerman",
    "courseCode": "Hyundai",
    "date": "9/12/2023",
    "term": "Road",
    "section": "Crossing",
    "timeIn": "10:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24e3" },
    "student": { "$oid": "65a76900fc13ae79abfa24e4" },
    "studentName": "Nike Daws",
    "courseCode": "Honda",
    "date": "8/30/2023",
    "term": "Park",
    "section": "Terrace",
    "timeIn": "21:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24e5" },
    "student": { "$oid": "65a76900fc13ae79abfa24e6" },
    "studentName": "Tarah MacCart",
    "courseCode": "Buick",
    "date": "7/13/2023",
    "term": "Avenue",
    "section": "Circle",
    "timeIn": "21:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24e7" },
    "student": { "$oid": "65a76900fc13ae79abfa24e8" },
    "studentName": "Conn Smeal",
    "courseCode": "GMC",
    "date": "2/18/2023",
    "term": "Street",
    "section": "Court",
    "timeIn": "2:52"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24e9" },
    "student": { "$oid": "65a76900fc13ae79abfa24ea" },
    "studentName": "Saw Jouannot",
    "courseCode": "Audi",
    "date": "11/4/2023",
    "term": "Crossing",
    "section": "Crossing",
    "timeIn": "23:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24eb" },
    "student": { "$oid": "65a76900fc13ae79abfa24ec" },
    "studentName": "Leisha Arnowitz",
    "courseCode": "Mazda",
    "date": "12/4/2023",
    "term": "Place",
    "section": "Hill",
    "timeIn": "9:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24ed" },
    "student": { "$oid": "65a76900fc13ae79abfa24ee" },
    "studentName": "Leigh Crean",
    "courseCode": "Land Rover",
    "date": "5/5/2023",
    "term": "Trail",
    "section": "Court",
    "timeIn": "3:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24ef" },
    "student": { "$oid": "65a76900fc13ae79abfa24f0" },
    "studentName": "Jehu Spinley",
    "courseCode": "Mazda",
    "date": "1/3/2024",
    "term": "Court",
    "section": "Crossing",
    "timeIn": "19:18"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24f1" },
    "student": { "$oid": "65a76900fc13ae79abfa24f2" },
    "studentName": "Becky Bransden",
    "courseCode": "Chevrolet",
    "date": "9/27/2023",
    "term": "Court",
    "section": "Place",
    "timeIn": "20:11"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24f3" },
    "student": { "$oid": "65a76900fc13ae79abfa24f4" },
    "studentName": "Sashenka Birtwhistle",
    "courseCode": "Dodge",
    "date": "9/18/2023",
    "term": "Hill",
    "section": "Road",
    "timeIn": "20:04"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24f5" },
    "student": { "$oid": "65a76900fc13ae79abfa24f6" },
    "studentName": "Prent Simonaitis",
    "courseCode": "Buick",
    "date": "12/6/2023",
    "term": "Terrace",
    "section": "Hill",
    "timeIn": "1:39"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24f7" },
    "student": { "$oid": "65a76900fc13ae79abfa24f8" },
    "studentName": "Jameson Denziloe",
    "courseCode": "BMW",
    "date": "8/6/2023",
    "term": "Lane",
    "section": "Point",
    "timeIn": "15:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24f9" },
    "student": { "$oid": "65a76900fc13ae79abfa24fa" },
    "studentName": "Charil Dreng",
    "courseCode": "Nissan",
    "date": "8/2/2023",
    "term": "Avenue",
    "section": "Road",
    "timeIn": "12:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24fb" },
    "student": { "$oid": "65a76900fc13ae79abfa24fc" },
    "studentName": "Bunni Jochanany",
    "courseCode": "Mitsubishi",
    "date": "8/2/2023",
    "term": "Street",
    "section": "Alley",
    "timeIn": "20:00"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24fd" },
    "student": { "$oid": "65a76900fc13ae79abfa24fe" },
    "studentName": "Bernita Izon",
    "courseCode": "Volvo",
    "date": "8/25/2023",
    "term": "Circle",
    "section": "Court",
    "timeIn": "7:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa24ff" },
    "student": { "$oid": "65a76900fc13ae79abfa2500" },
    "studentName": "Yves Lloyd",
    "courseCode": "Chevrolet",
    "date": "3/19/2023",
    "term": "Trail",
    "section": "Junction",
    "timeIn": "10:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2501" },
    "student": { "$oid": "65a76900fc13ae79abfa2502" },
    "studentName": "Annice Matthiesen",
    "courseCode": "Infiniti",
    "date": "1/14/2024",
    "term": "Point",
    "section": "Point",
    "timeIn": "21:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2503" },
    "student": { "$oid": "65a76900fc13ae79abfa2504" },
    "studentName": "Lenci McPeake",
    "courseCode": "Dodge",
    "date": "5/18/2023",
    "term": "Trail",
    "section": "Drive",
    "timeIn": "6:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2505" },
    "student": { "$oid": "65a76900fc13ae79abfa2506" },
    "studentName": "Javier Scutcheon",
    "courseCode": "Pontiac",
    "date": "3/15/2023",
    "term": "Drive",
    "section": "Point",
    "timeIn": "6:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2507" },
    "student": { "$oid": "65a76900fc13ae79abfa2508" },
    "studentName": "Vaughan Schenfisch",
    "courseCode": "Kia",
    "date": "10/6/2023",
    "term": "Junction",
    "section": "Road",
    "timeIn": "3:59"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2509" },
    "student": { "$oid": "65a76900fc13ae79abfa250a" },
    "studentName": "Molli Cooke",
    "courseCode": "Subaru",
    "date": "6/1/2023",
    "term": "Park",
    "section": "Lane",
    "timeIn": "11:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa250b" },
    "student": { "$oid": "65a76900fc13ae79abfa250c" },
    "studentName": "Alasteir Klaas",
    "courseCode": "Pontiac",
    "date": "10/7/2023",
    "term": "Way",
    "section": "Terrace",
    "timeIn": "6:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa250d" },
    "student": { "$oid": "65a76900fc13ae79abfa250e" },
    "studentName": "Reggy Battlestone",
    "courseCode": "Oldsmobile",
    "date": "3/17/2023",
    "term": "Lane",
    "section": "Park",
    "timeIn": "21:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa250f" },
    "student": { "$oid": "65a76900fc13ae79abfa2510" },
    "studentName": "Daron Preble",
    "courseCode": "Ford",
    "date": "10/1/2023",
    "term": "Circle",
    "section": "Circle",
    "timeIn": "6:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2511" },
    "student": { "$oid": "65a76900fc13ae79abfa2512" },
    "studentName": "Jsandye Sonschein",
    "courseCode": "GMC",
    "date": "2/13/2023",
    "term": "Lane",
    "section": "Plaza",
    "timeIn": "19:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2513" },
    "student": { "$oid": "65a76900fc13ae79abfa2514" },
    "studentName": "Raphaela Fronks",
    "courseCode": "Nissan",
    "date": "10/27/2023",
    "term": "Avenue",
    "section": "Point",
    "timeIn": "12:23"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2515" },
    "student": { "$oid": "65a76900fc13ae79abfa2516" },
    "studentName": "Shaina Carress",
    "courseCode": "GMC",
    "date": "6/12/2023",
    "term": "Drive",
    "section": "Center",
    "timeIn": "23:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2517" },
    "student": { "$oid": "65a76900fc13ae79abfa2518" },
    "studentName": "Cirstoforo Gurnay",
    "courseCode": "BMW",
    "date": "11/19/2023",
    "term": "Road",
    "section": "Crossing",
    "timeIn": "16:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2519" },
    "student": { "$oid": "65a76900fc13ae79abfa251a" },
    "studentName": "Jedd Raulston",
    "courseCode": "Land Rover",
    "date": "5/8/2023",
    "term": "Junction",
    "section": "Pass",
    "timeIn": "23:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa251b" },
    "student": { "$oid": "65a76900fc13ae79abfa251c" },
    "studentName": "Carine Found",
    "courseCode": "Infiniti",
    "date": "1/3/2024",
    "term": "Plaza",
    "section": "Terrace",
    "timeIn": "16:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa251d" },
    "student": { "$oid": "65a76900fc13ae79abfa251e" },
    "studentName": "Andrei Reichelt",
    "courseCode": "Ford",
    "date": "11/14/2023",
    "term": "Avenue",
    "section": "Circle",
    "timeIn": "4:51"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa251f" },
    "student": { "$oid": "65a76900fc13ae79abfa2520" },
    "studentName": "Adrianne Buncom",
    "courseCode": "Bentley",
    "date": "7/6/2023",
    "term": "Park",
    "section": "Parkway",
    "timeIn": "12:10"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2521" },
    "student": { "$oid": "65a76900fc13ae79abfa2522" },
    "studentName": "Holly-anne Hillan",
    "courseCode": "Oldsmobile",
    "date": "1/9/2024",
    "term": "Center",
    "section": "Circle",
    "timeIn": "5:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2523" },
    "student": { "$oid": "65a76900fc13ae79abfa2524" },
    "studentName": "Meredith Agnew",
    "courseCode": "Mazda",
    "date": "11/10/2023",
    "term": "Park",
    "section": "Road",
    "timeIn": "8:45"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2525" },
    "student": { "$oid": "65a76900fc13ae79abfa2526" },
    "studentName": "Darcie Lourenco",
    "courseCode": "Pontiac",
    "date": "9/28/2023",
    "term": "Street",
    "section": "Avenue",
    "timeIn": "22:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2527" },
    "student": { "$oid": "65a76900fc13ae79abfa2528" },
    "studentName": "Joel Giacomoni",
    "courseCode": "Ferrari",
    "date": "4/30/2023",
    "term": "Crossing",
    "section": "Drive",
    "timeIn": "22:54"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2529" },
    "student": { "$oid": "65a76900fc13ae79abfa252a" },
    "studentName": "Ferrel Kightly",
    "courseCode": "Volkswagen",
    "date": "12/15/2023",
    "term": "Alley",
    "section": "Center",
    "timeIn": "21:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa252b" },
    "student": { "$oid": "65a76900fc13ae79abfa252c" },
    "studentName": "Sharron Lawee",
    "courseCode": "Foose",
    "date": "6/21/2023",
    "term": "Road",
    "section": "Alley",
    "timeIn": "23:36"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa252d" },
    "student": { "$oid": "65a76900fc13ae79abfa252e" },
    "studentName": "Leeland Yellep",
    "courseCode": "Oldsmobile",
    "date": "5/8/2023",
    "term": "Street",
    "section": "Plaza",
    "timeIn": "5:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa252f" },
    "student": { "$oid": "65a76900fc13ae79abfa2530" },
    "studentName": "Baudoin Grocutt",
    "courseCode": "Mercedes-Benz",
    "date": "8/31/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "16:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2531" },
    "student": { "$oid": "65a76900fc13ae79abfa2532" },
    "studentName": "Ingram Duligall",
    "courseCode": "Dodge",
    "date": "7/18/2023",
    "term": "Trail",
    "section": "Circle",
    "timeIn": "0:09"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2533" },
    "student": { "$oid": "65a76900fc13ae79abfa2534" },
    "studentName": "Lodovico Heaney",
    "courseCode": "Jeep",
    "date": "1/18/2023",
    "term": "Drive",
    "section": "Junction",
    "timeIn": "14:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2535" },
    "student": { "$oid": "65a76900fc13ae79abfa2536" },
    "studentName": "Katherine Godehard.sf",
    "courseCode": "Volkswagen",
    "date": "12/29/2023",
    "term": "Plaza",
    "section": "Place",
    "timeIn": "17:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2537" },
    "student": { "$oid": "65a76900fc13ae79abfa2538" },
    "studentName": "Druci Kobes",
    "courseCode": "Maybach",
    "date": "7/12/2023",
    "term": "Circle",
    "section": "Park",
    "timeIn": "11:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2539" },
    "student": { "$oid": "65a76900fc13ae79abfa253a" },
    "studentName": "Wandie Minithorpe",
    "courseCode": "Ford",
    "date": "10/8/2023",
    "term": "Pass",
    "section": "Junction",
    "timeIn": "11:37"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa253b" },
    "student": { "$oid": "65a76900fc13ae79abfa253c" },
    "studentName": "Barnaby Whitechurch",
    "courseCode": "Cadillac",
    "date": "6/27/2023",
    "term": "Drive",
    "section": "Hill",
    "timeIn": "23:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa253d" },
    "student": { "$oid": "65a76900fc13ae79abfa253e" },
    "studentName": "Jordan Raynham",
    "courseCode": "Hyundai",
    "date": "9/16/2023",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "0:01"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa253f" },
    "student": { "$oid": "65a76900fc13ae79abfa2540" },
    "studentName": "Madelle Kemmett",
    "courseCode": "Chevrolet",
    "date": "3/18/2023",
    "term": "Parkway",
    "section": "Crossing",
    "timeIn": "23:49"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2541" },
    "student": { "$oid": "65a76900fc13ae79abfa2542" },
    "studentName": "Theodor Tookey",
    "courseCode": "Audi",
    "date": "2/11/2023",
    "term": "Center",
    "section": "Crossing",
    "timeIn": "4:50"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2543" },
    "student": { "$oid": "65a76900fc13ae79abfa2544" },
    "studentName": "Gottfried Lodge",
    "courseCode": "Toyota",
    "date": "8/2/2023",
    "term": "Crossing",
    "section": "Avenue",
    "timeIn": "12:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2545" },
    "student": { "$oid": "65a76900fc13ae79abfa2546" },
    "studentName": "Winnah Ingamells",
    "courseCode": "Lexus",
    "date": "10/24/2023",
    "term": "Drive",
    "section": "Pass",
    "timeIn": "14:47"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2547" },
    "student": { "$oid": "65a76900fc13ae79abfa2548" },
    "studentName": "Nari Grenkov",
    "courseCode": "Mitsubishi",
    "date": "8/21/2023",
    "term": "Parkway",
    "section": "Pass",
    "timeIn": "21:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2549" },
    "student": { "$oid": "65a76900fc13ae79abfa254a" },
    "studentName": "Morgen Brookesbie",
    "courseCode": "Chevrolet",
    "date": "8/15/2023",
    "term": "Junction",
    "section": "Street",
    "timeIn": "7:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa254b" },
    "student": { "$oid": "65a76900fc13ae79abfa254c" },
    "studentName": "Elwyn Raddan",
    "courseCode": "GMC",
    "date": "7/19/2023",
    "term": "Point",
    "section": "Park",
    "timeIn": "10:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa254d" },
    "student": { "$oid": "65a76900fc13ae79abfa254e" },
    "studentName": "Collete Dimmock",
    "courseCode": "Audi",
    "date": "1/10/2024",
    "term": "Park",
    "section": "Circle",
    "timeIn": "8:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa254f" },
    "student": { "$oid": "65a76900fc13ae79abfa2550" },
    "studentName": "Petra Kayes",
    "courseCode": "Ford",
    "date": "4/23/2023",
    "term": "Way",
    "section": "Way",
    "timeIn": "2:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2551" },
    "student": { "$oid": "65a76900fc13ae79abfa2552" },
    "studentName": "Leonhard Hollyar",
    "courseCode": "Chevrolet",
    "date": "7/31/2023",
    "term": "Hill",
    "section": "Alley",
    "timeIn": "7:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2553" },
    "student": { "$oid": "65a76900fc13ae79abfa2554" },
    "studentName": "Gwenette Gann",
    "courseCode": "Dodge",
    "date": "8/26/2023",
    "term": "Place",
    "section": "Court",
    "timeIn": "8:52"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2555" },
    "student": { "$oid": "65a76900fc13ae79abfa2556" },
    "studentName": "Bryon Pocklington",
    "courseCode": "Mercury",
    "date": "8/19/2023",
    "term": "Road",
    "section": "Drive",
    "timeIn": "8:37"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2557" },
    "student": { "$oid": "65a76900fc13ae79abfa2558" },
    "studentName": "Vaclav Eminson",
    "courseCode": "BMW",
    "date": "3/11/2023",
    "term": "Drive",
    "section": "Place",
    "timeIn": "14:17"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2559" },
    "student": { "$oid": "65a76900fc13ae79abfa255a" },
    "studentName": "Godfrey Pick",
    "courseCode": "Pontiac",
    "date": "3/1/2023",
    "term": "Parkway",
    "section": "Terrace",
    "timeIn": "8:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa255b" },
    "student": { "$oid": "65a76900fc13ae79abfa255c" },
    "studentName": "Howie Creagh",
    "courseCode": "Chevrolet",
    "date": "11/13/2023",
    "term": "Alley",
    "section": "Terrace",
    "timeIn": "12:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa255d" },
    "student": { "$oid": "65a76900fc13ae79abfa255e" },
    "studentName": "Andriana Stean",
    "courseCode": "Mitsubishi",
    "date": "6/7/2023",
    "term": "Pass",
    "section": "Junction",
    "timeIn": "12:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa255f" },
    "student": { "$oid": "65a76900fc13ae79abfa2560" },
    "studentName": "Emmey Eginton",
    "courseCode": "Land Rover",
    "date": "9/7/2023",
    "term": "Circle",
    "section": "Crossing",
    "timeIn": "17:35"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2561" },
    "student": { "$oid": "65a76900fc13ae79abfa2562" },
    "studentName": "Annamaria Strutley",
    "courseCode": "Cadillac",
    "date": "4/6/2023",
    "term": "Circle",
    "section": "Drive",
    "timeIn": "11:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2563" },
    "student": { "$oid": "65a76900fc13ae79abfa2564" },
    "studentName": "Manny Vaggs",
    "courseCode": "Mitsubishi",
    "date": "3/21/2023",
    "term": "Pass",
    "section": "Place",
    "timeIn": "2:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2565" },
    "student": { "$oid": "65a76900fc13ae79abfa2566" },
    "studentName": "Tova Olliver",
    "courseCode": "Pontiac",
    "date": "12/4/2023",
    "term": "Road",
    "section": "Way",
    "timeIn": "17:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2567" },
    "student": { "$oid": "65a76900fc13ae79abfa2568" },
    "studentName": "Clark Colombier",
    "courseCode": "Mazda",
    "date": "5/12/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "17:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2569" },
    "student": { "$oid": "65a76900fc13ae79abfa256a" },
    "studentName": "Melisent Collet",
    "courseCode": "Lincoln",
    "date": "1/11/2024",
    "term": "Plaza",
    "section": "Alley",
    "timeIn": "2:05"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa256b" },
    "student": { "$oid": "65a76900fc13ae79abfa256c" },
    "studentName": "Gawain Ivasechko",
    "courseCode": "Honda",
    "date": "6/12/2023",
    "term": "Trail",
    "section": "Crossing",
    "timeIn": "7:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa256d" },
    "student": { "$oid": "65a76900fc13ae79abfa256e" },
    "studentName": "Jessalin Khristyukhin",
    "courseCode": "Dodge",
    "date": "12/12/2023",
    "term": "Circle",
    "section": "Alley",
    "timeIn": "11:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa256f" },
    "student": { "$oid": "65a76900fc13ae79abfa2570" },
    "studentName": "Nadya Ferrarini",
    "courseCode": "Jaguar",
    "date": "6/14/2023",
    "term": "Road",
    "section": "Court",
    "timeIn": "22:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2571" },
    "student": { "$oid": "65a76900fc13ae79abfa2572" },
    "studentName": "Brittany Rickaby",
    "courseCode": "Mercedes-Benz",
    "date": "7/21/2023",
    "term": "Alley",
    "section": "Crossing",
    "timeIn": "5:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2573" },
    "student": { "$oid": "65a76900fc13ae79abfa2574" },
    "studentName": "Christalle Kopacek",
    "courseCode": "Ferrari",
    "date": "9/7/2023",
    "term": "Circle",
    "section": "Alley",
    "timeIn": "2:34"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2575" },
    "student": { "$oid": "65a76900fc13ae79abfa2576" },
    "studentName": "Ogdon Bredee",
    "courseCode": "Oldsmobile",
    "date": "7/30/2023",
    "term": "Point",
    "section": "Parkway",
    "timeIn": "0:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2577" },
    "student": { "$oid": "65a76900fc13ae79abfa2578" },
    "studentName": "Nannie Rehme",
    "courseCode": "Ford",
    "date": "10/9/2023",
    "term": "Court",
    "section": "Pass",
    "timeIn": "0:29"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2579" },
    "student": { "$oid": "65a76900fc13ae79abfa257a" },
    "studentName": "Doroteya Pellant",
    "courseCode": "Suzuki",
    "date": "5/11/2023",
    "term": "Circle",
    "section": "Lane",
    "timeIn": "22:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa257b" },
    "student": { "$oid": "65a76900fc13ae79abfa257c" },
    "studentName": "Nerita Comolli",
    "courseCode": "Mazda",
    "date": "2/17/2023",
    "term": "Center",
    "section": "Center",
    "timeIn": "23:30"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa257d" },
    "student": { "$oid": "65a76900fc13ae79abfa257e" },
    "studentName": "Jarrod Ivatt",
    "courseCode": "Ford",
    "date": "1/6/2023",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "1:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa257f" },
    "student": { "$oid": "65a76900fc13ae79abfa2580" },
    "studentName": "Jaquenette Wainwright",
    "courseCode": "Ferrari",
    "date": "7/31/2023",
    "term": "Street",
    "section": "Point",
    "timeIn": "22:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2581" },
    "student": { "$oid": "65a76900fc13ae79abfa2582" },
    "studentName": "Ursulina Burtwistle",
    "courseCode": "Porsche",
    "date": "7/13/2023",
    "term": "Terrace",
    "section": "Junction",
    "timeIn": "21:15"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2583" },
    "student": { "$oid": "65a76900fc13ae79abfa2584" },
    "studentName": "Welbie Benedtti",
    "courseCode": "Ford",
    "date": "12/9/2023",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "0:20"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2585" },
    "student": { "$oid": "65a76900fc13ae79abfa2586" },
    "studentName": "Bradly Mossop",
    "courseCode": "Toyota",
    "date": "2/24/2023",
    "term": "Court",
    "section": "Alley",
    "timeIn": "9:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2587" },
    "student": { "$oid": "65a76900fc13ae79abfa2588" },
    "studentName": "Hilde Crank",
    "courseCode": "Buick",
    "date": "6/21/2023",
    "term": "Avenue",
    "section": "Lane",
    "timeIn": "0:55"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2589" },
    "student": { "$oid": "65a76900fc13ae79abfa258a" },
    "studentName": "Gay Dabourne",
    "courseCode": "Volkswagen",
    "date": "2/5/2023",
    "term": "Place",
    "section": "Crossing",
    "timeIn": "9:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa258b" },
    "student": { "$oid": "65a76900fc13ae79abfa258c" },
    "studentName": "Charla Landes",
    "courseCode": "Mercedes-Benz",
    "date": "10/10/2023",
    "term": "Street",
    "section": "Junction",
    "timeIn": "6:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa258d" },
    "student": { "$oid": "65a76900fc13ae79abfa258e" },
    "studentName": "Katharina Rewbottom",
    "courseCode": "Chevrolet",
    "date": "6/6/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "9:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa258f" },
    "student": { "$oid": "65a76900fc13ae79abfa2590" },
    "studentName": "Marylou Janiak",
    "courseCode": "Mazda",
    "date": "8/28/2023",
    "term": "Hill",
    "section": "Place",
    "timeIn": "1:06"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2591" },
    "student": { "$oid": "65a76900fc13ae79abfa2592" },
    "studentName": "Gennie Gerard",
    "courseCode": "Nissan",
    "date": "1/28/2023",
    "term": "Circle",
    "section": "Plaza",
    "timeIn": "1:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2593" },
    "student": { "$oid": "65a76900fc13ae79abfa2594" },
    "studentName": "Judi McGlone",
    "courseCode": "Pontiac",
    "date": "5/18/2023",
    "term": "Junction",
    "section": "Way",
    "timeIn": "7:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2595" },
    "student": { "$oid": "65a76900fc13ae79abfa2596" },
    "studentName": "Dulcy Jeanneau",
    "courseCode": "Pontiac",
    "date": "5/27/2023",
    "term": "Circle",
    "section": "Terrace",
    "timeIn": "1:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2597" },
    "student": { "$oid": "65a76900fc13ae79abfa2598" },
    "studentName": "Allan Starkings",
    "courseCode": "Mazda",
    "date": "10/27/2023",
    "term": "Drive",
    "section": "Avenue",
    "timeIn": "0:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa2599" },
    "student": { "$oid": "65a76900fc13ae79abfa259a" },
    "studentName": "Jarrad Fanshaw",
    "courseCode": "Ford",
    "date": "1/4/2024",
    "term": "Parkway",
    "section": "Court",
    "timeIn": "7:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa259b" },
    "student": { "$oid": "65a76900fc13ae79abfa259c" },
    "studentName": "Winny Rennebeck",
    "courseCode": "Volkswagen",
    "date": "5/9/2023",
    "term": "Crossing",
    "section": "Center",
    "timeIn": "1:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa259d" },
    "student": { "$oid": "65a76900fc13ae79abfa259e" },
    "studentName": "Margery Morecombe",
    "courseCode": "Isuzu",
    "date": "11/26/2023",
    "term": "Trail",
    "section": "Center",
    "timeIn": "21:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa259f" },
    "student": { "$oid": "65a76900fc13ae79abfa25a0" },
    "studentName": "Fallon Piper",
    "courseCode": "BMW",
    "date": "1/15/2024",
    "term": "Way",
    "section": "Center",
    "timeIn": "12:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25a1" },
    "student": { "$oid": "65a76900fc13ae79abfa25a2" },
    "studentName": "Sandye Valerio",
    "courseCode": "Infiniti",
    "date": "7/20/2023",
    "term": "Center",
    "section": "Center",
    "timeIn": "10:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25a3" },
    "student": { "$oid": "65a76900fc13ae79abfa25a4" },
    "studentName": "Gerrie Biggadyke",
    "courseCode": "Austin",
    "date": "8/29/2023",
    "term": "Junction",
    "section": "Lane",
    "timeIn": "23:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25a5" },
    "student": { "$oid": "65a76900fc13ae79abfa25a6" },
    "studentName": "Erin Hupka",
    "courseCode": "Infiniti",
    "date": "7/11/2023",
    "term": "Avenue",
    "section": "Court",
    "timeIn": "10:44"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25a7" },
    "student": { "$oid": "65a76900fc13ae79abfa25a8" },
    "studentName": "Cassi Kibard",
    "courseCode": "Chevrolet",
    "date": "1/8/2024",
    "term": "Court",
    "section": "Parkway",
    "timeIn": "16:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25a9" },
    "student": { "$oid": "65a76900fc13ae79abfa25aa" },
    "studentName": "Florina Tavernor",
    "courseCode": "Maybach",
    "date": "6/29/2023",
    "term": "Junction",
    "section": "Circle",
    "timeIn": "8:40"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25ab" },
    "student": { "$oid": "65a76900fc13ae79abfa25ac" },
    "studentName": "Jakie Wharrier",
    "courseCode": "Mazda",
    "date": "4/26/2023",
    "term": "Plaza",
    "section": "Drive",
    "timeIn": "3:44"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25ad" },
    "student": { "$oid": "65a76900fc13ae79abfa25ae" },
    "studentName": "Ole Cookley",
    "courseCode": "GMC",
    "date": "12/17/2023",
    "term": "Court",
    "section": "Trail",
    "timeIn": "16:02"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25af" },
    "student": { "$oid": "65a76900fc13ae79abfa25b0" },
    "studentName": "Broderic Gozzett",
    "courseCode": "Oldsmobile",
    "date": "1/10/2024",
    "term": "Terrace",
    "section": "Court",
    "timeIn": "17:18"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25b1" },
    "student": { "$oid": "65a76900fc13ae79abfa25b2" },
    "studentName": "Corney Rawstorn",
    "courseCode": "Dodge",
    "date": "7/8/2023",
    "term": "Alley",
    "section": "Avenue",
    "timeIn": "9:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25b3" },
    "student": { "$oid": "65a76900fc13ae79abfa25b4" },
    "studentName": "Amos Ephson",
    "courseCode": "Dodge",
    "date": "1/11/2023",
    "term": "Lane",
    "section": "Road",
    "timeIn": "10:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25b5" },
    "student": { "$oid": "65a76900fc13ae79abfa25b6" },
    "studentName": "Lonee Othen",
    "courseCode": "Dodge",
    "date": "9/5/2023",
    "term": "Parkway",
    "section": "Court",
    "timeIn": "5:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25b7" },
    "student": { "$oid": "65a76900fc13ae79abfa25b8" },
    "studentName": "Delilah Bergstram",
    "courseCode": "Dodge",
    "date": "2/13/2023",
    "term": "Parkway",
    "section": "Park",
    "timeIn": "11:24"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25b9" },
    "student": { "$oid": "65a76900fc13ae79abfa25ba" },
    "studentName": "Isidoro Kits",
    "courseCode": "Kia",
    "date": "2/19/2023",
    "term": "Drive",
    "section": "Way",
    "timeIn": "20:57"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25bb" },
    "student": { "$oid": "65a76900fc13ae79abfa25bc" },
    "studentName": "Gayel Gockeler",
    "courseCode": "Ford",
    "date": "4/30/2023",
    "term": "Hill",
    "section": "Parkway",
    "timeIn": "3:03"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25bd" },
    "student": { "$oid": "65a76900fc13ae79abfa25be" },
    "studentName": "Julie Lente",
    "courseCode": "Chevrolet",
    "date": "2/8/2023",
    "term": "Circle",
    "section": "Hill",
    "timeIn": "23:19"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25bf" },
    "student": { "$oid": "65a76900fc13ae79abfa25c0" },
    "studentName": "Turner Fackrell",
    "courseCode": "Pontiac",
    "date": "7/29/2023",
    "term": "Park",
    "section": "Street",
    "timeIn": "10:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25c1" },
    "student": { "$oid": "65a76900fc13ae79abfa25c2" },
    "studentName": "Westbrook Siberry",
    "courseCode": "Chevrolet",
    "date": "8/1/2023",
    "term": "Hill",
    "section": "Court",
    "timeIn": "21:33"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25c3" },
    "student": { "$oid": "65a76900fc13ae79abfa25c4" },
    "studentName": "Shanta Brydone",
    "courseCode": "Bentley",
    "date": "10/7/2023",
    "term": "Lane",
    "section": "Drive",
    "timeIn": "2:43"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25c5" },
    "student": { "$oid": "65a76900fc13ae79abfa25c6" },
    "studentName": "Geri Stading",
    "courseCode": "Subaru",
    "date": "11/19/2023",
    "term": "Center",
    "section": "Place",
    "timeIn": "11:16"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25c7" },
    "student": { "$oid": "65a76900fc13ae79abfa25c8" },
    "studentName": "Sibley Crees",
    "courseCode": "Isuzu",
    "date": "5/8/2023",
    "term": "Drive",
    "section": "Trail",
    "timeIn": "23:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25c9" },
    "student": { "$oid": "65a76900fc13ae79abfa25ca" },
    "studentName": "Rodolphe McCathy",
    "courseCode": "Volkswagen",
    "date": "1/12/2024",
    "term": "Avenue",
    "section": "Street",
    "timeIn": "22:08"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25cb" },
    "student": { "$oid": "65a76900fc13ae79abfa25cc" },
    "studentName": "Leonanie Stuckow",
    "courseCode": "Lexus",
    "date": "3/17/2023",
    "term": "Park",
    "section": "Crossing",
    "timeIn": "23:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25cd" },
    "student": { "$oid": "65a76900fc13ae79abfa25ce" },
    "studentName": "Lorie Tern",
    "courseCode": "Saab",
    "date": "6/21/2023",
    "term": "Street",
    "section": "Place",
    "timeIn": "18:37"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25cf" },
    "student": { "$oid": "65a76900fc13ae79abfa25d0" },
    "studentName": "Poul Buttner",
    "courseCode": "Kia",
    "date": "4/12/2023",
    "term": "Lane",
    "section": "Junction",
    "timeIn": "4:59"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25d1" },
    "student": { "$oid": "65a76900fc13ae79abfa25d2" },
    "studentName": "Florette Presnall",
    "courseCode": "Cadillac",
    "date": "3/5/2023",
    "term": "Place",
    "section": "Road",
    "timeIn": "7:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25d3" },
    "student": { "$oid": "65a76900fc13ae79abfa25d4" },
    "studentName": "Tanny De Nisco",
    "courseCode": "Suzuki",
    "date": "11/14/2023",
    "term": "Hill",
    "section": "Drive",
    "timeIn": "22:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25d5" },
    "student": { "$oid": "65a76900fc13ae79abfa25d6" },
    "studentName": "Amandi Huggard",
    "courseCode": "Chevrolet",
    "date": "8/2/2023",
    "term": "Pass",
    "section": "Junction",
    "timeIn": "12:14"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25d7" },
    "student": { "$oid": "65a76900fc13ae79abfa25d8" },
    "studentName": "Haily Simnor",
    "courseCode": "Pontiac",
    "date": "3/10/2023",
    "term": "Pass",
    "section": "Hill",
    "timeIn": "3:12"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25d9" },
    "student": { "$oid": "65a76900fc13ae79abfa25da" },
    "studentName": "Kissiah Dixon",
    "courseCode": "Chevrolet",
    "date": "4/21/2023",
    "term": "Pass",
    "section": "Crossing",
    "timeIn": "13:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25db" },
    "student": { "$oid": "65a76900fc13ae79abfa25dc" },
    "studentName": "Elyn Ferney",
    "courseCode": "Jaguar",
    "date": "6/14/2023",
    "term": "Junction",
    "section": "Way",
    "timeIn": "20:48"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25dd" },
    "student": { "$oid": "65a76900fc13ae79abfa25de" },
    "studentName": "Klement Arnoldi",
    "courseCode": "Chrysler",
    "date": "12/24/2023",
    "term": "Parkway",
    "section": "Road",
    "timeIn": "1:46"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25df" },
    "student": { "$oid": "65a76900fc13ae79abfa25e0" },
    "studentName": "Randee Budgey",
    "courseCode": "Suzuki",
    "date": "7/12/2023",
    "term": "Terrace",
    "section": "Junction",
    "timeIn": "15:28"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25e1" },
    "student": { "$oid": "65a76900fc13ae79abfa25e2" },
    "studentName": "Jessey Brozek",
    "courseCode": "Land Rover",
    "date": "1/12/2023",
    "term": "Street",
    "section": "Way",
    "timeIn": "18:31"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25e3" },
    "student": { "$oid": "65a76900fc13ae79abfa25e4" },
    "studentName": "Sherrie Empson",
    "courseCode": "Lexus",
    "date": "8/17/2023",
    "term": "Court",
    "section": "Parkway",
    "timeIn": "7:38"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25e5" },
    "student": { "$oid": "65a76900fc13ae79abfa25e6" },
    "studentName": "Hallsy Wymer",
    "courseCode": "Chevrolet",
    "date": "8/28/2023",
    "term": "Alley",
    "section": "Drive",
    "timeIn": "23:27"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25e7" },
    "student": { "$oid": "65a76900fc13ae79abfa25e8" },
    "studentName": "Marianna Quayle",
    "courseCode": "Ford",
    "date": "4/6/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "22:42"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25e9" },
    "student": { "$oid": "65a76900fc13ae79abfa25ea" },
    "studentName": "Roxane Alway",
    "courseCode": "Honda",
    "date": "10/5/2023",
    "term": "Road",
    "section": "Street",
    "timeIn": "10:25"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25eb" },
    "student": { "$oid": "65a76900fc13ae79abfa25ec" },
    "studentName": "Ophelie Comiskey",
    "courseCode": "Lexus",
    "date": "4/13/2023",
    "term": "Road",
    "section": "Drive",
    "timeIn": "13:32"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25ed" },
    "student": { "$oid": "65a76900fc13ae79abfa25ee" },
    "studentName": "Alan Girardet",
    "courseCode": "Isuzu",
    "date": "1/16/2024",
    "term": "Hill",
    "section": "Trail",
    "timeIn": "13:21"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25ef" },
    "student": { "$oid": "65a76900fc13ae79abfa25f0" },
    "studentName": "Violette Goshawk",
    "courseCode": "Mazda",
    "date": "10/11/2023",
    "term": "Pass",
    "section": "Drive",
    "timeIn": "5:56"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25f1" },
    "student": { "$oid": "65a76900fc13ae79abfa25f2" },
    "studentName": "Peadar Stowte",
    "courseCode": "Chevrolet",
    "date": "1/10/2024",
    "term": "Place",
    "section": "Trail",
    "timeIn": "9:53"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25f3" },
    "student": { "$oid": "65a76900fc13ae79abfa25f4" },
    "studentName": "Romeo Skpsey",
    "courseCode": "Subaru",
    "date": "1/4/2024",
    "term": "Court",
    "section": "Way",
    "timeIn": "16:23"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25f5" },
    "student": { "$oid": "65a76900fc13ae79abfa25f6" },
    "studentName": "Jeanie Whitter",
    "courseCode": "Maybach",
    "date": "11/19/2023",
    "term": "Way",
    "section": "Alley",
    "timeIn": "4:41"
  },
  {
    "_id": { "$oid": "65a76900fc13ae79abfa25f7" },
    "student": { "$oid": "65a76900fc13ae79abfa25f8" },
    "studentName": "Shelby Glasscoe",
    "courseCode": "Infiniti",
    "date": "8/24/2023",
    "term": "Point",
    "section": "Lane",
    "timeIn": "23:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa25f9" },
    "student": { "$oid": "65a76901fc13ae79abfa25fa" },
    "studentName": "Norbert Buney",
    "courseCode": "BMW",
    "date": "1/9/2024",
    "term": "Plaza",
    "section": "Crossing",
    "timeIn": "23:06"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa25fb" },
    "student": { "$oid": "65a76901fc13ae79abfa25fc" },
    "studentName": "Augustine Petteford",
    "courseCode": "Chevrolet",
    "date": "6/13/2023",
    "term": "Place",
    "section": "Plaza",
    "timeIn": "1:17"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa25fd" },
    "student": { "$oid": "65a76901fc13ae79abfa25fe" },
    "studentName": "Ivette Croydon",
    "courseCode": "Dodge",
    "date": "2/28/2023",
    "term": "Parkway",
    "section": "Plaza",
    "timeIn": "5:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa25ff" },
    "student": { "$oid": "65a76901fc13ae79abfa2600" },
    "studentName": "Georgie Lempke",
    "courseCode": "Chevrolet",
    "date": "2/8/2023",
    "term": "Crossing",
    "section": "Lane",
    "timeIn": "9:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2601" },
    "student": { "$oid": "65a76901fc13ae79abfa2602" },
    "studentName": "Addie Santi",
    "courseCode": "Acura",
    "date": "2/17/2023",
    "term": "Court",
    "section": "Park",
    "timeIn": "20:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2603" },
    "student": { "$oid": "65a76901fc13ae79abfa2604" },
    "studentName": "Theodore Bruggeman",
    "courseCode": "Infiniti",
    "date": "11/1/2023",
    "term": "Lane",
    "section": "Drive",
    "timeIn": "4:19"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2605" },
    "student": { "$oid": "65a76901fc13ae79abfa2606" },
    "studentName": "Pennie Piggens",
    "courseCode": "Cadillac",
    "date": "12/12/2023",
    "term": "Street",
    "section": "Terrace",
    "timeIn": "20:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2607" },
    "student": { "$oid": "65a76901fc13ae79abfa2608" },
    "studentName": "Dorris Grisedale",
    "courseCode": "Hyundai",
    "date": "12/8/2023",
    "term": "Way",
    "section": "Alley",
    "timeIn": "22:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2609" },
    "student": { "$oid": "65a76901fc13ae79abfa260a" },
    "studentName": "Cristy Ickowicz",
    "courseCode": "Hyundai",
    "date": "1/4/2023",
    "term": "Alley",
    "section": "Drive",
    "timeIn": "13:44"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa260b" },
    "student": { "$oid": "65a76901fc13ae79abfa260c" },
    "studentName": "Hercules Coomer",
    "courseCode": "Chrysler",
    "date": "8/8/2023",
    "term": "Alley",
    "section": "Place",
    "timeIn": "3:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa260d" },
    "student": { "$oid": "65a76901fc13ae79abfa260e" },
    "studentName": "Miquela Czajkowski",
    "courseCode": "Maserati",
    "date": "3/7/2023",
    "term": "Trail",
    "section": "Place",
    "timeIn": "4:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa260f" },
    "student": { "$oid": "65a76901fc13ae79abfa2610" },
    "studentName": "Joell Hyslop",
    "courseCode": "Subaru",
    "date": "7/30/2023",
    "term": "Junction",
    "section": "Point",
    "timeIn": "20:12"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2611" },
    "student": { "$oid": "65a76901fc13ae79abfa2612" },
    "studentName": "Garey Stanmore",
    "courseCode": "Mitsubishi",
    "date": "1/16/2023",
    "term": "Road",
    "section": "Crossing",
    "timeIn": "12:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2613" },
    "student": { "$oid": "65a76901fc13ae79abfa2614" },
    "studentName": "Felicio Brideau",
    "courseCode": "Chevrolet",
    "date": "3/14/2023",
    "term": "Hill",
    "section": "Point",
    "timeIn": "10:00"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2615" },
    "student": { "$oid": "65a76901fc13ae79abfa2616" },
    "studentName": "Addia Sheirlaw",
    "courseCode": "Buick",
    "date": "11/9/2023",
    "term": "Road",
    "section": "Place",
    "timeIn": "18:18"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2617" },
    "student": { "$oid": "65a76901fc13ae79abfa2618" },
    "studentName": "Kelwin Ivchenko",
    "courseCode": "Dodge",
    "date": "5/13/2023",
    "term": "Way",
    "section": "Park",
    "timeIn": "17:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2619" },
    "student": { "$oid": "65a76901fc13ae79abfa261a" },
    "studentName": "Demetre Thornhill",
    "courseCode": "Mercury",
    "date": "11/27/2023",
    "term": "Way",
    "section": "Avenue",
    "timeIn": "9:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa261b" },
    "student": { "$oid": "65a76901fc13ae79abfa261c" },
    "studentName": "Joyous Blankman",
    "courseCode": "Chevrolet",
    "date": "3/24/2023",
    "term": "Way",
    "section": "Plaza",
    "timeIn": "23:34"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa261d" },
    "student": { "$oid": "65a76901fc13ae79abfa261e" },
    "studentName": "Paddy Phil",
    "courseCode": "GMC",
    "date": "6/5/2023",
    "term": "Place",
    "section": "Crossing",
    "timeIn": "1:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa261f" },
    "student": { "$oid": "65a76901fc13ae79abfa2620" },
    "studentName": "Elnar Schout",
    "courseCode": "Volkswagen",
    "date": "1/8/2023",
    "term": "Junction",
    "section": "Plaza",
    "timeIn": "14:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2621" },
    "student": { "$oid": "65a76901fc13ae79abfa2622" },
    "studentName": "Dale Mallender",
    "courseCode": "Audi",
    "date": "4/5/2023",
    "term": "Plaza",
    "section": "Terrace",
    "timeIn": "10:36"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2623" },
    "student": { "$oid": "65a76901fc13ae79abfa2624" },
    "studentName": "Nariko Rissen",
    "courseCode": "Infiniti",
    "date": "8/2/2023",
    "term": "Plaza",
    "section": "Plaza",
    "timeIn": "11:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2625" },
    "student": { "$oid": "65a76901fc13ae79abfa2626" },
    "studentName": "Aurilia Mc Faul",
    "courseCode": "Mitsubishi",
    "date": "7/22/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "21:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2627" },
    "student": { "$oid": "65a76901fc13ae79abfa2628" },
    "studentName": "Gaynor Lilian",
    "courseCode": "Lexus",
    "date": "1/22/2023",
    "term": "Crossing",
    "section": "Alley",
    "timeIn": "15:05"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2629" },
    "student": { "$oid": "65a76901fc13ae79abfa262a" },
    "studentName": "Clarabelle Pennigar",
    "courseCode": "Audi",
    "date": "6/18/2023",
    "term": "Park",
    "section": "Point",
    "timeIn": "6:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa262b" },
    "student": { "$oid": "65a76901fc13ae79abfa262c" },
    "studentName": "Lindon Flori",
    "courseCode": "Mitsubishi",
    "date": "8/14/2023",
    "term": "Park",
    "section": "Avenue",
    "timeIn": "18:51"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa262d" },
    "student": { "$oid": "65a76901fc13ae79abfa262e" },
    "studentName": "Vick Rolf",
    "courseCode": "Hyundai",
    "date": "11/12/2023",
    "term": "Street",
    "section": "Alley",
    "timeIn": "16:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa262f" },
    "student": { "$oid": "65a76901fc13ae79abfa2630" },
    "studentName": "Kip Finlater",
    "courseCode": "Volkswagen",
    "date": "9/23/2023",
    "term": "Trail",
    "section": "Place",
    "timeIn": "22:50"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2631" },
    "student": { "$oid": "65a76901fc13ae79abfa2632" },
    "studentName": "Fredelia Stibbs",
    "courseCode": "Dodge",
    "date": "3/27/2023",
    "term": "Way",
    "section": "Alley",
    "timeIn": "1:18"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2633" },
    "student": { "$oid": "65a76901fc13ae79abfa2634" },
    "studentName": "Carlye Harcombe",
    "courseCode": "Chevrolet",
    "date": "2/18/2023",
    "term": "Parkway",
    "section": "Court",
    "timeIn": "9:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2635" },
    "student": { "$oid": "65a76901fc13ae79abfa2636" },
    "studentName": "Tabbie Featherstonehaugh",
    "courseCode": "Ford",
    "date": "9/17/2023",
    "term": "Lane",
    "section": "Lane",
    "timeIn": "6:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2637" },
    "student": { "$oid": "65a76901fc13ae79abfa2638" },
    "studentName": "Benni Ventam",
    "courseCode": "Pontiac",
    "date": "2/22/2023",
    "term": "Parkway",
    "section": "Lane",
    "timeIn": "2:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2639" },
    "student": { "$oid": "65a76901fc13ae79abfa263a" },
    "studentName": "Flynn Ducarne",
    "courseCode": "Suzuki",
    "date": "2/1/2023",
    "term": "Circle",
    "section": "Plaza",
    "timeIn": "2:17"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa263b" },
    "student": { "$oid": "65a76901fc13ae79abfa263c" },
    "studentName": "Filide Brunger",
    "courseCode": "Lotus",
    "date": "11/7/2023",
    "term": "Pass",
    "section": "Plaza",
    "timeIn": "5:50"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa263d" },
    "student": { "$oid": "65a76901fc13ae79abfa263e" },
    "studentName": "Orrin Wadie",
    "courseCode": "Volvo",
    "date": "8/14/2023",
    "term": "Pass",
    "section": "Park",
    "timeIn": "23:41"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa263f" },
    "student": { "$oid": "65a76901fc13ae79abfa2640" },
    "studentName": "Carver Kells",
    "courseCode": "Bugatti",
    "date": "6/20/2023",
    "term": "Street",
    "section": "Trail",
    "timeIn": "17:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2641" },
    "student": { "$oid": "65a76901fc13ae79abfa2642" },
    "studentName": "Sonja Mortell",
    "courseCode": "Chevrolet",
    "date": "10/21/2023",
    "term": "Terrace",
    "section": "Point",
    "timeIn": "15:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2643" },
    "student": { "$oid": "65a76901fc13ae79abfa2644" },
    "studentName": "Issie Borchardt",
    "courseCode": "Ford",
    "date": "2/11/2023",
    "term": "Street",
    "section": "Pass",
    "timeIn": "6:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2645" },
    "student": { "$oid": "65a76901fc13ae79abfa2646" },
    "studentName": "Alanson Gemlett",
    "courseCode": "GMC",
    "date": "1/12/2023",
    "term": "Way",
    "section": "Center",
    "timeIn": "10:11"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2647" },
    "student": { "$oid": "65a76901fc13ae79abfa2648" },
    "studentName": "Kayley Gurdon",
    "courseCode": "Chrysler",
    "date": "10/17/2023",
    "term": "Center",
    "section": "Alley",
    "timeIn": "7:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2649" },
    "student": { "$oid": "65a76901fc13ae79abfa264a" },
    "studentName": "Roddie Ciobotaro",
    "courseCode": "Chevrolet",
    "date": "2/8/2023",
    "term": "Place",
    "section": "Trail",
    "timeIn": "4:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa264b" },
    "student": { "$oid": "65a76901fc13ae79abfa264c" },
    "studentName": "Beltran Saffer",
    "courseCode": "Cadillac",
    "date": "6/1/2023",
    "term": "Road",
    "section": "Junction",
    "timeIn": "7:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa264d" },
    "student": { "$oid": "65a76901fc13ae79abfa264e" },
    "studentName": "Cyrille Sowte",
    "courseCode": "BMW",
    "date": "7/17/2023",
    "term": "Trail",
    "section": "Drive",
    "timeIn": "16:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa264f" },
    "student": { "$oid": "65a76901fc13ae79abfa2650" },
    "studentName": "Leona Dawbury",
    "courseCode": "Mazda",
    "date": "3/31/2023",
    "term": "Alley",
    "section": "Park",
    "timeIn": "8:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2651" },
    "student": { "$oid": "65a76901fc13ae79abfa2652" },
    "studentName": "Haily Cheavin",
    "courseCode": "Hyundai",
    "date": "5/16/2023",
    "term": "Hill",
    "section": "Crossing",
    "timeIn": "19:16"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2653" },
    "student": { "$oid": "65a76901fc13ae79abfa2654" },
    "studentName": "Frederick Dummigan",
    "courseCode": "Chevrolet",
    "date": "11/7/2023",
    "term": "Center",
    "section": "Point",
    "timeIn": "18:12"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2655" },
    "student": { "$oid": "65a76901fc13ae79abfa2656" },
    "studentName": "Monty Rochelle",
    "courseCode": "Plymouth",
    "date": "8/22/2023",
    "term": "Pass",
    "section": "Alley",
    "timeIn": "0:09"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2657" },
    "student": { "$oid": "65a76901fc13ae79abfa2658" },
    "studentName": "Goldi Gypps",
    "courseCode": "Audi",
    "date": "10/22/2023",
    "term": "Road",
    "section": "Point",
    "timeIn": "10:19"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2659" },
    "student": { "$oid": "65a76901fc13ae79abfa265a" },
    "studentName": "Guthry Cockburn",
    "courseCode": "Hummer",
    "date": "11/30/2023",
    "term": "Avenue",
    "section": "Street",
    "timeIn": "11:35"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa265b" },
    "student": { "$oid": "65a76901fc13ae79abfa265c" },
    "studentName": "Bunny Kenlin",
    "courseCode": "Hyundai",
    "date": "8/19/2023",
    "term": "Plaza",
    "section": "Alley",
    "timeIn": "11:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa265d" },
    "student": { "$oid": "65a76901fc13ae79abfa265e" },
    "studentName": "Ive Probart",
    "courseCode": "Land Rover",
    "date": "1/2/2023",
    "term": "Road",
    "section": "Circle",
    "timeIn": "3:48"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa265f" },
    "student": { "$oid": "65a76901fc13ae79abfa2660" },
    "studentName": "Noelyn Melanaphy",
    "courseCode": "Subaru",
    "date": "12/10/2023",
    "term": "Terrace",
    "section": "Trail",
    "timeIn": "2:14"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2661" },
    "student": { "$oid": "65a76901fc13ae79abfa2662" },
    "studentName": "Giffer Busch",
    "courseCode": "Ford",
    "date": "7/28/2023",
    "term": "Alley",
    "section": "Court",
    "timeIn": "9:16"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2663" },
    "student": { "$oid": "65a76901fc13ae79abfa2664" },
    "studentName": "Colene Titt",
    "courseCode": "Mercury",
    "date": "8/24/2023",
    "term": "Pass",
    "section": "Drive",
    "timeIn": "14:05"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2665" },
    "student": { "$oid": "65a76901fc13ae79abfa2666" },
    "studentName": "Shelba Rollingson",
    "courseCode": "Cadillac",
    "date": "3/15/2023",
    "term": "Crossing",
    "section": "Park",
    "timeIn": "16:41"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2667" },
    "student": { "$oid": "65a76901fc13ae79abfa2668" },
    "studentName": "Kaila Paulo",
    "courseCode": "Toyota",
    "date": "7/10/2023",
    "term": "Place",
    "section": "Place",
    "timeIn": "17:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2669" },
    "student": { "$oid": "65a76901fc13ae79abfa266a" },
    "studentName": "Emmery Hardstaff",
    "courseCode": "Ford",
    "date": "10/23/2023",
    "term": "Park",
    "section": "Plaza",
    "timeIn": "2:16"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa266b" },
    "student": { "$oid": "65a76901fc13ae79abfa266c" },
    "studentName": "Reider Elkin",
    "courseCode": "Volvo",
    "date": "1/12/2024",
    "term": "Pass",
    "section": "Terrace",
    "timeIn": "10:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa266d" },
    "student": { "$oid": "65a76901fc13ae79abfa266e" },
    "studentName": "Carolan Iorillo",
    "courseCode": "Mercedes-Benz",
    "date": "9/23/2023",
    "term": "Terrace",
    "section": "Parkway",
    "timeIn": "21:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa266f" },
    "student": { "$oid": "65a76901fc13ae79abfa2670" },
    "studentName": "Lewie Hinners",
    "courseCode": "Nissan",
    "date": "2/18/2023",
    "term": "Center",
    "section": "Hill",
    "timeIn": "8:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2671" },
    "student": { "$oid": "65a76901fc13ae79abfa2672" },
    "studentName": "Kiele Chazelas",
    "courseCode": "Ford",
    "date": "8/14/2023",
    "term": "Junction",
    "section": "Crossing",
    "timeIn": "14:00"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2673" },
    "student": { "$oid": "65a76901fc13ae79abfa2674" },
    "studentName": "Maryjane Boxhill",
    "courseCode": "Volkswagen",
    "date": "9/1/2023",
    "term": "Road",
    "section": "Parkway",
    "timeIn": "18:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2675" },
    "student": { "$oid": "65a76901fc13ae79abfa2676" },
    "studentName": "Adah Motton",
    "courseCode": "Ford",
    "date": "1/4/2023",
    "term": "Hill",
    "section": "Plaza",
    "timeIn": "21:23"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2677" },
    "student": { "$oid": "65a76901fc13ae79abfa2678" },
    "studentName": "Konstance Greatex",
    "courseCode": "Audi",
    "date": "11/3/2023",
    "term": "Road",
    "section": "Street",
    "timeIn": "20:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2679" },
    "student": { "$oid": "65a76901fc13ae79abfa267a" },
    "studentName": "Cletis Djordjevic",
    "courseCode": "Plymouth",
    "date": "9/2/2023",
    "term": "Terrace",
    "section": "Hill",
    "timeIn": "1:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa267b" },
    "student": { "$oid": "65a76901fc13ae79abfa267c" },
    "studentName": "Elna Eskriett",
    "courseCode": "Oldsmobile",
    "date": "2/4/2023",
    "term": "Street",
    "section": "Trail",
    "timeIn": "6:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa267d" },
    "student": { "$oid": "65a76901fc13ae79abfa267e" },
    "studentName": "Gayle Dufty",
    "courseCode": "Mitsubishi",
    "date": "8/2/2023",
    "term": "Terrace",
    "section": "Circle",
    "timeIn": "22:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa267f" },
    "student": { "$oid": "65a76901fc13ae79abfa2680" },
    "studentName": "Rainer Kimberley",
    "courseCode": "Volkswagen",
    "date": "12/18/2023",
    "term": "Drive",
    "section": "Parkway",
    "timeIn": "10:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2681" },
    "student": { "$oid": "65a76901fc13ae79abfa2682" },
    "studentName": "Anabel Gerbi",
    "courseCode": "Hummer",
    "date": "4/14/2023",
    "term": "Junction",
    "section": "Parkway",
    "timeIn": "13:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2683" },
    "student": { "$oid": "65a76901fc13ae79abfa2684" },
    "studentName": "Dwight Iacomi",
    "courseCode": "Chevrolet",
    "date": "1/4/2023",
    "term": "Alley",
    "section": "Hill",
    "timeIn": "19:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2685" },
    "student": { "$oid": "65a76901fc13ae79abfa2686" },
    "studentName": "Tanya Clorley",
    "courseCode": "Isuzu",
    "date": "1/14/2024",
    "term": "Way",
    "section": "Avenue",
    "timeIn": "21:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2687" },
    "student": { "$oid": "65a76901fc13ae79abfa2688" },
    "studentName": "Joseito Drabble",
    "courseCode": "Acura",
    "date": "4/12/2023",
    "term": "Crossing",
    "section": "Terrace",
    "timeIn": "0:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2689" },
    "student": { "$oid": "65a76901fc13ae79abfa268a" },
    "studentName": "Garth Figger",
    "courseCode": "Chevrolet",
    "date": "2/25/2023",
    "term": "Way",
    "section": "Hill",
    "timeIn": "16:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa268b" },
    "student": { "$oid": "65a76901fc13ae79abfa268c" },
    "studentName": "Sean Posselow",
    "courseCode": "Chevrolet",
    "date": "4/10/2023",
    "term": "Trail",
    "section": "Center",
    "timeIn": "2:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa268d" },
    "student": { "$oid": "65a76901fc13ae79abfa268e" },
    "studentName": "Zedekiah Donnelly",
    "courseCode": "Kia",
    "date": "11/20/2023",
    "term": "Center",
    "section": "Trail",
    "timeIn": "21:48"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa268f" },
    "student": { "$oid": "65a76901fc13ae79abfa2690" },
    "studentName": "Arlene Beggs",
    "courseCode": "Subaru",
    "date": "11/8/2023",
    "term": "Alley",
    "section": "Crossing",
    "timeIn": "21:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2691" },
    "student": { "$oid": "65a76901fc13ae79abfa2692" },
    "studentName": "Linda Shone",
    "courseCode": "Ford",
    "date": "1/18/2023",
    "term": "Park",
    "section": "Junction",
    "timeIn": "23:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2693" },
    "student": { "$oid": "65a76901fc13ae79abfa2694" },
    "studentName": "Hartley Matijasevic",
    "courseCode": "Buick",
    "date": "10/21/2023",
    "term": "Park",
    "section": "Road",
    "timeIn": "5:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2695" },
    "student": { "$oid": "65a76901fc13ae79abfa2696" },
    "studentName": "Gerard O'Fallon",
    "courseCode": "GMC",
    "date": "11/25/2023",
    "term": "Hill",
    "section": "Hill",
    "timeIn": "5:46"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2697" },
    "student": { "$oid": "65a76901fc13ae79abfa2698" },
    "studentName": "Bambi Renackowna",
    "courseCode": "Suzuki",
    "date": "11/14/2023",
    "term": "Way",
    "section": "Circle",
    "timeIn": "3:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2699" },
    "student": { "$oid": "65a76901fc13ae79abfa269a" },
    "studentName": "Jessamine Benbrick",
    "courseCode": "Mitsubishi",
    "date": "9/27/2023",
    "term": "Avenue",
    "section": "Trail",
    "timeIn": "11:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa269b" },
    "student": { "$oid": "65a76901fc13ae79abfa269c" },
    "studentName": "Tann O'Luney",
    "courseCode": "Volkswagen",
    "date": "4/26/2023",
    "term": "Parkway",
    "section": "Way",
    "timeIn": "9:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa269d" },
    "student": { "$oid": "65a76901fc13ae79abfa269e" },
    "studentName": "Emery Downham",
    "courseCode": "Ford",
    "date": "6/22/2023",
    "term": "Parkway",
    "section": "Road",
    "timeIn": "7:46"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa269f" },
    "student": { "$oid": "65a76901fc13ae79abfa26a0" },
    "studentName": "Wilma Fidele",
    "courseCode": "Chevrolet",
    "date": "8/21/2023",
    "term": "Circle",
    "section": "Pass",
    "timeIn": "4:35"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26a1" },
    "student": { "$oid": "65a76901fc13ae79abfa26a2" },
    "studentName": "Albertina Steanyng",
    "courseCode": "Fairthorpe",
    "date": "1/18/2023",
    "term": "Junction",
    "section": "Crossing",
    "timeIn": "12:10"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26a3" },
    "student": { "$oid": "65a76901fc13ae79abfa26a4" },
    "studentName": "Shae Tanby",
    "courseCode": "Geo",
    "date": "11/14/2023",
    "term": "Street",
    "section": "Road",
    "timeIn": "3:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26a5" },
    "student": { "$oid": "65a76901fc13ae79abfa26a6" },
    "studentName": "Leonard Excell",
    "courseCode": "Isuzu",
    "date": "10/15/2023",
    "term": "Road",
    "section": "Road",
    "timeIn": "2:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26a7" },
    "student": { "$oid": "65a76901fc13ae79abfa26a8" },
    "studentName": "Coleman Ferronel",
    "courseCode": "Spyker",
    "date": "6/12/2023",
    "term": "Alley",
    "section": "Junction",
    "timeIn": "1:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26a9" },
    "student": { "$oid": "65a76901fc13ae79abfa26aa" },
    "studentName": "Roseann Dodgshon",
    "courseCode": "Infiniti",
    "date": "10/5/2023",
    "term": "Terrace",
    "section": "Parkway",
    "timeIn": "23:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26ab" },
    "student": { "$oid": "65a76901fc13ae79abfa26ac" },
    "studentName": "Kerri Wycherley",
    "courseCode": "Mercedes-Benz",
    "date": "11/17/2023",
    "term": "Circle",
    "section": "Terrace",
    "timeIn": "13:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26ad" },
    "student": { "$oid": "65a76901fc13ae79abfa26ae" },
    "studentName": "Abba Maraga",
    "courseCode": "Hyundai",
    "date": "6/29/2023",
    "term": "Drive",
    "section": "Point",
    "timeIn": "8:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26af" },
    "student": { "$oid": "65a76901fc13ae79abfa26b0" },
    "studentName": "Jud Brewett",
    "courseCode": "Chevrolet",
    "date": "10/31/2023",
    "term": "Trail",
    "section": "Trail",
    "timeIn": "4:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26b1" },
    "student": { "$oid": "65a76901fc13ae79abfa26b2" },
    "studentName": "Zilvia Chalke",
    "courseCode": "Dodge",
    "date": "11/14/2023",
    "term": "Way",
    "section": "Drive",
    "timeIn": "9:18"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26b3" },
    "student": { "$oid": "65a76901fc13ae79abfa26b4" },
    "studentName": "Catherin Field",
    "courseCode": "Mercedes-Benz",
    "date": "8/22/2023",
    "term": "Pass",
    "section": "Circle",
    "timeIn": "4:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26b5" },
    "student": { "$oid": "65a76901fc13ae79abfa26b6" },
    "studentName": "Aldon Bryett",
    "courseCode": "Pontiac",
    "date": "3/15/2023",
    "term": "Drive",
    "section": "Pass",
    "timeIn": "4:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26b7" },
    "student": { "$oid": "65a76901fc13ae79abfa26b8" },
    "studentName": "Wolfy Babbage",
    "courseCode": "Toyota",
    "date": "7/24/2023",
    "term": "Street",
    "section": "Street",
    "timeIn": "5:26"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26b9" },
    "student": { "$oid": "65a76901fc13ae79abfa26ba" },
    "studentName": "Mommy Troman",
    "courseCode": "Infiniti",
    "date": "4/15/2023",
    "term": "Hill",
    "section": "Street",
    "timeIn": "16:31"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26bb" },
    "student": { "$oid": "65a76901fc13ae79abfa26bc" },
    "studentName": "Fairleigh McNaught",
    "courseCode": "Buick",
    "date": "3/22/2023",
    "term": "Lane",
    "section": "Street",
    "timeIn": "10:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26bd" },
    "student": { "$oid": "65a76901fc13ae79abfa26be" },
    "studentName": "Waldon Buckston",
    "courseCode": "Ford",
    "date": "7/3/2023",
    "term": "Court",
    "section": "Road",
    "timeIn": "18:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26bf" },
    "student": { "$oid": "65a76901fc13ae79abfa26c0" },
    "studentName": "Peri Lapree",
    "courseCode": "Cadillac",
    "date": "11/21/2023",
    "term": "Plaza",
    "section": "Parkway",
    "timeIn": "12:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26c1" },
    "student": { "$oid": "65a76901fc13ae79abfa26c2" },
    "studentName": "Hastie Lorrimer",
    "courseCode": "Acura",
    "date": "2/10/2023",
    "term": "Drive",
    "section": "Pass",
    "timeIn": "5:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26c3" },
    "student": { "$oid": "65a76901fc13ae79abfa26c4" },
    "studentName": "Robinia D'Aeth",
    "courseCode": "Nissan",
    "date": "5/29/2023",
    "term": "Drive",
    "section": "Lane",
    "timeIn": "10:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26c5" },
    "student": { "$oid": "65a76901fc13ae79abfa26c6" },
    "studentName": "Delly Romero",
    "courseCode": "Chevrolet",
    "date": "3/3/2023",
    "term": "Street",
    "section": "Drive",
    "timeIn": "2:41"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26c7" },
    "student": { "$oid": "65a76901fc13ae79abfa26c8" },
    "studentName": "Izzy Whitcher",
    "courseCode": "Chevrolet",
    "date": "1/31/2023",
    "term": "Pass",
    "section": "Crossing",
    "timeIn": "0:10"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26c9" },
    "student": { "$oid": "65a76901fc13ae79abfa26ca" },
    "studentName": "Hyacintha Toppes",
    "courseCode": "Chevrolet",
    "date": "10/6/2023",
    "term": "Way",
    "section": "Trail",
    "timeIn": "18:02"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26cb" },
    "student": { "$oid": "65a76901fc13ae79abfa26cc" },
    "studentName": "Gram Franke",
    "courseCode": "Suzuki",
    "date": "1/3/2024",
    "term": "Park",
    "section": "Plaza",
    "timeIn": "21:06"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26cd" },
    "student": { "$oid": "65a76901fc13ae79abfa26ce" },
    "studentName": "Antonin Spinozzi",
    "courseCode": "Chevrolet",
    "date": "11/18/2023",
    "term": "Avenue",
    "section": "Junction",
    "timeIn": "12:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26cf" },
    "student": { "$oid": "65a76901fc13ae79abfa26d0" },
    "studentName": "Renelle Lade",
    "courseCode": "Mercury",
    "date": "4/23/2023",
    "term": "Avenue",
    "section": "Park",
    "timeIn": "17:13"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26d1" },
    "student": { "$oid": "65a76901fc13ae79abfa26d2" },
    "studentName": "Mae Staves",
    "courseCode": "Nissan",
    "date": "9/11/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "10:26"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26d3" },
    "student": { "$oid": "65a76901fc13ae79abfa26d4" },
    "studentName": "Peri Stallibrass",
    "courseCode": "Saab",
    "date": "4/26/2023",
    "term": "Parkway",
    "section": "Lane",
    "timeIn": "18:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26d5" },
    "student": { "$oid": "65a76901fc13ae79abfa26d6" },
    "studentName": "Tyne Danigel",
    "courseCode": "Ford",
    "date": "5/4/2023",
    "term": "Court",
    "section": "Hill",
    "timeIn": "19:09"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26d7" },
    "student": { "$oid": "65a76901fc13ae79abfa26d8" },
    "studentName": "Christiano Blondell",
    "courseCode": "Pontiac",
    "date": "10/19/2023",
    "term": "Point",
    "section": "Terrace",
    "timeIn": "22:53"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26d9" },
    "student": { "$oid": "65a76901fc13ae79abfa26da" },
    "studentName": "Krystalle Marcoolyn",
    "courseCode": "GMC",
    "date": "5/28/2023",
    "term": "Street",
    "section": "Road",
    "timeIn": "12:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26db" },
    "student": { "$oid": "65a76901fc13ae79abfa26dc" },
    "studentName": "Claudio De Gouy",
    "courseCode": "Ford",
    "date": "1/13/2023",
    "term": "Hill",
    "section": "Hill",
    "timeIn": "20:09"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26dd" },
    "student": { "$oid": "65a76901fc13ae79abfa26de" },
    "studentName": "Gwendolin Potkin",
    "courseCode": "Ford",
    "date": "12/26/2023",
    "term": "Parkway",
    "section": "Court",
    "timeIn": "21:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26df" },
    "student": { "$oid": "65a76901fc13ae79abfa26e0" },
    "studentName": "Audy Dibben",
    "courseCode": "Mitsubishi",
    "date": "4/14/2023",
    "term": "Hill",
    "section": "Parkway",
    "timeIn": "4:23"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26e1" },
    "student": { "$oid": "65a76901fc13ae79abfa26e2" },
    "studentName": "Garvin Pycock",
    "courseCode": "Lexus",
    "date": "5/16/2023",
    "term": "Pass",
    "section": "Plaza",
    "timeIn": "7:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26e3" },
    "student": { "$oid": "65a76901fc13ae79abfa26e4" },
    "studentName": "Rachael Sutehall",
    "courseCode": "Mitsubishi",
    "date": "5/5/2023",
    "term": "Terrace",
    "section": "Park",
    "timeIn": "15:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26e5" },
    "student": { "$oid": "65a76901fc13ae79abfa26e6" },
    "studentName": "Klarrisa Philipet",
    "courseCode": "Subaru",
    "date": "9/28/2023",
    "term": "Junction",
    "section": "Plaza",
    "timeIn": "4:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26e7" },
    "student": { "$oid": "65a76901fc13ae79abfa26e8" },
    "studentName": "Karlotte Smees",
    "courseCode": "Saab",
    "date": "5/24/2023",
    "term": "Avenue",
    "section": "Avenue",
    "timeIn": "3:36"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26e9" },
    "student": { "$oid": "65a76901fc13ae79abfa26ea" },
    "studentName": "Kelci Simony",
    "courseCode": "Jaguar",
    "date": "1/27/2023",
    "term": "Road",
    "section": "Place",
    "timeIn": "9:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26eb" },
    "student": { "$oid": "65a76901fc13ae79abfa26ec" },
    "studentName": "Carolyn Valencia",
    "courseCode": "Audi",
    "date": "10/14/2023",
    "term": "Court",
    "section": "Terrace",
    "timeIn": "22:22"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26ed" },
    "student": { "$oid": "65a76901fc13ae79abfa26ee" },
    "studentName": "Aymer Lenihan",
    "courseCode": "Infiniti",
    "date": "8/6/2023",
    "term": "Crossing",
    "section": "Terrace",
    "timeIn": "22:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26ef" },
    "student": { "$oid": "65a76901fc13ae79abfa26f0" },
    "studentName": "Shirline Ballard",
    "courseCode": "Subaru",
    "date": "11/4/2023",
    "term": "Way",
    "section": "Junction",
    "timeIn": "10:30"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26f1" },
    "student": { "$oid": "65a76901fc13ae79abfa26f2" },
    "studentName": "Janek Adkins",
    "courseCode": "Lincoln",
    "date": "9/26/2023",
    "term": "Point",
    "section": "Road",
    "timeIn": "6:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26f3" },
    "student": { "$oid": "65a76901fc13ae79abfa26f4" },
    "studentName": "Mendy Cadany",
    "courseCode": "Scion",
    "date": "1/11/2023",
    "term": "Street",
    "section": "Way",
    "timeIn": "9:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26f5" },
    "student": { "$oid": "65a76901fc13ae79abfa26f6" },
    "studentName": "Dulcy Greep",
    "courseCode": "Infiniti",
    "date": "7/6/2023",
    "term": "Place",
    "section": "Crossing",
    "timeIn": "21:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26f7" },
    "student": { "$oid": "65a76901fc13ae79abfa26f8" },
    "studentName": "Vanya Petrus",
    "courseCode": "Pontiac",
    "date": "5/10/2023",
    "term": "Center",
    "section": "Point",
    "timeIn": "23:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26f9" },
    "student": { "$oid": "65a76901fc13ae79abfa26fa" },
    "studentName": "Windham Ewols",
    "courseCode": "Toyota",
    "date": "9/6/2023",
    "term": "Park",
    "section": "Point",
    "timeIn": "12:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26fb" },
    "student": { "$oid": "65a76901fc13ae79abfa26fc" },
    "studentName": "Sabra Goulding",
    "courseCode": "Buick",
    "date": "12/29/2023",
    "term": "Point",
    "section": "Junction",
    "timeIn": "3:42"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26fd" },
    "student": { "$oid": "65a76901fc13ae79abfa26fe" },
    "studentName": "Marsiella Britton",
    "courseCode": "Chevrolet",
    "date": "9/12/2023",
    "term": "Alley",
    "section": "Court",
    "timeIn": "7:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa26ff" },
    "student": { "$oid": "65a76901fc13ae79abfa2700" },
    "studentName": "Alexandro Hooke",
    "courseCode": "Buick",
    "date": "5/20/2023",
    "term": "Trail",
    "section": "Street",
    "timeIn": "15:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2701" },
    "student": { "$oid": "65a76901fc13ae79abfa2702" },
    "studentName": "Agneta Russen",
    "courseCode": "Chevrolet",
    "date": "2/28/2023",
    "term": "Street",
    "section": "Crossing",
    "timeIn": "7:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2703" },
    "student": { "$oid": "65a76901fc13ae79abfa2704" },
    "studentName": "Jori Rosekilly",
    "courseCode": "Infiniti",
    "date": "11/14/2023",
    "term": "Court",
    "section": "Hill",
    "timeIn": "5:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2705" },
    "student": { "$oid": "65a76901fc13ae79abfa2706" },
    "studentName": "Myrtice Roome",
    "courseCode": "Acura",
    "date": "9/22/2023",
    "term": "Crossing",
    "section": "Court",
    "timeIn": "16:30"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2707" },
    "student": { "$oid": "65a76901fc13ae79abfa2708" },
    "studentName": "Jolee Suggate",
    "courseCode": "Mazda",
    "date": "5/24/2023",
    "term": "Parkway",
    "section": "Plaza",
    "timeIn": "10:31"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2709" },
    "student": { "$oid": "65a76901fc13ae79abfa270a" },
    "studentName": "Wenda Szymczyk",
    "courseCode": "Cadillac",
    "date": "12/22/2023",
    "term": "Park",
    "section": "Place",
    "timeIn": "21:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa270b" },
    "student": { "$oid": "65a76901fc13ae79abfa270c" },
    "studentName": "Henrie Heart",
    "courseCode": "Toyota",
    "date": "4/4/2023",
    "term": "Alley",
    "section": "Park",
    "timeIn": "6:49"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa270d" },
    "student": { "$oid": "65a76901fc13ae79abfa270e" },
    "studentName": "Justine Petrichat",
    "courseCode": "Jeep",
    "date": "2/18/2023",
    "term": "Lane",
    "section": "Plaza",
    "timeIn": "8:18"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa270f" },
    "student": { "$oid": "65a76901fc13ae79abfa2710" },
    "studentName": "Riki McGuinley",
    "courseCode": "Chrysler",
    "date": "7/15/2023",
    "term": "Place",
    "section": "Trail",
    "timeIn": "15:48"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2711" },
    "student": { "$oid": "65a76901fc13ae79abfa2712" },
    "studentName": "Dougie Powers",
    "courseCode": "Hyundai",
    "date": "2/28/2023",
    "term": "Way",
    "section": "Center",
    "timeIn": "12:34"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2713" },
    "student": { "$oid": "65a76901fc13ae79abfa2714" },
    "studentName": "Fancy Amey",
    "courseCode": "Ford",
    "date": "2/4/2023",
    "term": "Point",
    "section": "Center",
    "timeIn": "19:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2715" },
    "student": { "$oid": "65a76901fc13ae79abfa2716" },
    "studentName": "Chris Benois",
    "courseCode": "Dodge",
    "date": "11/27/2023",
    "term": "Junction",
    "section": "Parkway",
    "timeIn": "22:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2717" },
    "student": { "$oid": "65a76901fc13ae79abfa2718" },
    "studentName": "Myrna Feasby",
    "courseCode": "Honda",
    "date": "9/25/2023",
    "term": "Place",
    "section": "Drive",
    "timeIn": "14:34"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2719" },
    "student": { "$oid": "65a76901fc13ae79abfa271a" },
    "studentName": "Hunt Deakan",
    "courseCode": "Acura",
    "date": "5/5/2023",
    "term": "Alley",
    "section": "Point",
    "timeIn": "1:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa271b" },
    "student": { "$oid": "65a76901fc13ae79abfa271c" },
    "studentName": "Brena Trimbey",
    "courseCode": "Mercury",
    "date": "9/25/2023",
    "term": "Park",
    "section": "Trail",
    "timeIn": "0:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa271d" },
    "student": { "$oid": "65a76901fc13ae79abfa271e" },
    "studentName": "Samantha Novotne",
    "courseCode": "Lamborghini",
    "date": "9/5/2023",
    "term": "Court",
    "section": "Center",
    "timeIn": "3:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa271f" },
    "student": { "$oid": "65a76901fc13ae79abfa2720" },
    "studentName": "Rhody Audley",
    "courseCode": "Ford",
    "date": "8/19/2023",
    "term": "Parkway",
    "section": "Center",
    "timeIn": "20:00"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2721" },
    "student": { "$oid": "65a76901fc13ae79abfa2722" },
    "studentName": "Dayle Pepye",
    "courseCode": "Mazda",
    "date": "3/31/2023",
    "term": "Center",
    "section": "Plaza",
    "timeIn": "12:37"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2723" },
    "student": { "$oid": "65a76901fc13ae79abfa2724" },
    "studentName": "Ilene Dewis",
    "courseCode": "Audi",
    "date": "8/29/2023",
    "term": "Hill",
    "section": "Park",
    "timeIn": "10:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2725" },
    "student": { "$oid": "65a76901fc13ae79abfa2726" },
    "studentName": "Jess Bilovus",
    "courseCode": "Chevrolet",
    "date": "1/15/2023",
    "term": "Court",
    "section": "Parkway",
    "timeIn": "21:14"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2727" },
    "student": { "$oid": "65a76901fc13ae79abfa2728" },
    "studentName": "Umeko Freeland",
    "courseCode": "Dodge",
    "date": "7/14/2023",
    "term": "Junction",
    "section": "Street",
    "timeIn": "6:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2729" },
    "student": { "$oid": "65a76901fc13ae79abfa272a" },
    "studentName": "Eden Jodrellec",
    "courseCode": "Jaguar",
    "date": "2/1/2023",
    "term": "Trail",
    "section": "Place",
    "timeIn": "20:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa272b" },
    "student": { "$oid": "65a76901fc13ae79abfa272c" },
    "studentName": "Daffie MacIntyre",
    "courseCode": "Dodge",
    "date": "1/15/2023",
    "term": "Parkway",
    "section": "Plaza",
    "timeIn": "1:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa272d" },
    "student": { "$oid": "65a76901fc13ae79abfa272e" },
    "studentName": "Morgan Baison",
    "courseCode": "Nissan",
    "date": "9/3/2023",
    "term": "Court",
    "section": "Pass",
    "timeIn": "10:37"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa272f" },
    "student": { "$oid": "65a76901fc13ae79abfa2730" },
    "studentName": "Durand Kowal",
    "courseCode": "Mercedes-Benz",
    "date": "9/9/2023",
    "term": "Way",
    "section": "Crossing",
    "timeIn": "4:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2731" },
    "student": { "$oid": "65a76901fc13ae79abfa2732" },
    "studentName": "Sela Rutherford",
    "courseCode": "Buick",
    "date": "5/12/2023",
    "term": "Way",
    "section": "Avenue",
    "timeIn": "0:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2733" },
    "student": { "$oid": "65a76901fc13ae79abfa2734" },
    "studentName": "Elisabet Okell",
    "courseCode": "Chevrolet",
    "date": "3/28/2023",
    "term": "Court",
    "section": "Terrace",
    "timeIn": "17:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2735" },
    "student": { "$oid": "65a76901fc13ae79abfa2736" },
    "studentName": "Mavra Hillock",
    "courseCode": "Ford",
    "date": "8/14/2023",
    "term": "Terrace",
    "section": "Place",
    "timeIn": "4:26"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2737" },
    "student": { "$oid": "65a76901fc13ae79abfa2738" },
    "studentName": "Natale Muscott",
    "courseCode": "Honda",
    "date": "12/11/2023",
    "term": "Center",
    "section": "Court",
    "timeIn": "9:26"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2739" },
    "student": { "$oid": "65a76901fc13ae79abfa273a" },
    "studentName": "Elvis Hartin",
    "courseCode": "Mitsubishi",
    "date": "1/22/2023",
    "term": "Way",
    "section": "Parkway",
    "timeIn": "11:44"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa273b" },
    "student": { "$oid": "65a76901fc13ae79abfa273c" },
    "studentName": "Henrie Toyer",
    "courseCode": "Chevrolet",
    "date": "6/22/2023",
    "term": "Road",
    "section": "Crossing",
    "timeIn": "0:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa273d" },
    "student": { "$oid": "65a76901fc13ae79abfa273e" },
    "studentName": "Brennan Burleton",
    "courseCode": "Cadillac",
    "date": "5/12/2023",
    "term": "Park",
    "section": "Lane",
    "timeIn": "19:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa273f" },
    "student": { "$oid": "65a76901fc13ae79abfa2740" },
    "studentName": "Tobi Laverack",
    "courseCode": "Ford",
    "date": "8/14/2023",
    "term": "Road",
    "section": "Pass",
    "timeIn": "12:53"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2741" },
    "student": { "$oid": "65a76901fc13ae79abfa2742" },
    "studentName": "Valencia Whitley",
    "courseCode": "Mazda",
    "date": "9/18/2023",
    "term": "Avenue",
    "section": "Trail",
    "timeIn": "8:44"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2743" },
    "student": { "$oid": "65a76901fc13ae79abfa2744" },
    "studentName": "Worden Kohnemann",
    "courseCode": "Ford",
    "date": "7/20/2023",
    "term": "Parkway",
    "section": "Junction",
    "timeIn": "12:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2745" },
    "student": { "$oid": "65a76901fc13ae79abfa2746" },
    "studentName": "Orton Kopje",
    "courseCode": "BMW",
    "date": "10/18/2023",
    "term": "Pass",
    "section": "Hill",
    "timeIn": "15:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2747" },
    "student": { "$oid": "65a76901fc13ae79abfa2748" },
    "studentName": "Magdalen Rowlett",
    "courseCode": "Kia",
    "date": "5/15/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "8:46"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2749" },
    "student": { "$oid": "65a76901fc13ae79abfa274a" },
    "studentName": "Madonna Quernel",
    "courseCode": "Audi",
    "date": "10/27/2023",
    "term": "Lane",
    "section": "Lane",
    "timeIn": "23:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa274b" },
    "student": { "$oid": "65a76901fc13ae79abfa274c" },
    "studentName": "Raynell Sterte",
    "courseCode": "Isuzu",
    "date": "5/8/2023",
    "term": "Crossing",
    "section": "Way",
    "timeIn": "20:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa274d" },
    "student": { "$oid": "65a76901fc13ae79abfa274e" },
    "studentName": "Rozella Jerzyk",
    "courseCode": "Chevrolet",
    "date": "1/20/2023",
    "term": "Crossing",
    "section": "Hill",
    "timeIn": "12:48"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa274f" },
    "student": { "$oid": "65a76901fc13ae79abfa2750" },
    "studentName": "Sarajane Harriskine",
    "courseCode": "Mercury",
    "date": "9/18/2023",
    "term": "Point",
    "section": "Plaza",
    "timeIn": "10:06"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2751" },
    "student": { "$oid": "65a76901fc13ae79abfa2752" },
    "studentName": "Elka Halksworth",
    "courseCode": "Volkswagen",
    "date": "5/11/2023",
    "term": "Plaza",
    "section": "Avenue",
    "timeIn": "9:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2753" },
    "student": { "$oid": "65a76901fc13ae79abfa2754" },
    "studentName": "Wilow Tuckey",
    "courseCode": "Porsche",
    "date": "1/8/2024",
    "term": "Drive",
    "section": "Parkway",
    "timeIn": "15:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2755" },
    "student": { "$oid": "65a76901fc13ae79abfa2756" },
    "studentName": "Lethia Crennan",
    "courseCode": "Chevrolet",
    "date": "12/19/2023",
    "term": "Parkway",
    "section": "Drive",
    "timeIn": "0:17"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2757" },
    "student": { "$oid": "65a76901fc13ae79abfa2758" },
    "studentName": "Novelia Lazonby",
    "courseCode": "Dodge",
    "date": "9/17/2023",
    "term": "Junction",
    "section": "Place",
    "timeIn": "9:16"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2759" },
    "student": { "$oid": "65a76901fc13ae79abfa275a" },
    "studentName": "Hermon Harmes",
    "courseCode": "Cadillac",
    "date": "6/22/2023",
    "term": "Park",
    "section": "Plaza",
    "timeIn": "7:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa275b" },
    "student": { "$oid": "65a76901fc13ae79abfa275c" },
    "studentName": "Ernesto Borzone",
    "courseCode": "Kia",
    "date": "5/16/2023",
    "term": "Point",
    "section": "Road",
    "timeIn": "1:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa275d" },
    "student": { "$oid": "65a76901fc13ae79abfa275e" },
    "studentName": "Antonius Mustin",
    "courseCode": "Volkswagen",
    "date": "1/26/2023",
    "term": "Junction",
    "section": "Alley",
    "timeIn": "19:05"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa275f" },
    "student": { "$oid": "65a76901fc13ae79abfa2760" },
    "studentName": "Syd Lill",
    "courseCode": "Cadillac",
    "date": "9/22/2023",
    "term": "Court",
    "section": "Pass",
    "timeIn": "20:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2761" },
    "student": { "$oid": "65a76901fc13ae79abfa2762" },
    "studentName": "Laura Broschek",
    "courseCode": "Mitsubishi",
    "date": "1/15/2023",
    "term": "Avenue",
    "section": "Way",
    "timeIn": "18:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2763" },
    "student": { "$oid": "65a76901fc13ae79abfa2764" },
    "studentName": "Chrisse Deetlefs",
    "courseCode": "Ford",
    "date": "5/25/2023",
    "term": "Avenue",
    "section": "Terrace",
    "timeIn": "22:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2765" },
    "student": { "$oid": "65a76901fc13ae79abfa2766" },
    "studentName": "Babb Milius",
    "courseCode": "Ford",
    "date": "8/25/2023",
    "term": "Hill",
    "section": "Hill",
    "timeIn": "14:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2767" },
    "student": { "$oid": "65a76901fc13ae79abfa2768" },
    "studentName": "Case Senecaux",
    "courseCode": "Nissan",
    "date": "1/1/2023",
    "term": "Crossing",
    "section": "Lane",
    "timeIn": "12:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2769" },
    "student": { "$oid": "65a76901fc13ae79abfa276a" },
    "studentName": "Hadria Zahor",
    "courseCode": "Kia",
    "date": "7/14/2023",
    "term": "Junction",
    "section": "Pass",
    "timeIn": "1:11"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa276b" },
    "student": { "$oid": "65a76901fc13ae79abfa276c" },
    "studentName": "Port Cinderey",
    "courseCode": "Cadillac",
    "date": "4/16/2023",
    "term": "Road",
    "section": "Center",
    "timeIn": "4:25"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa276d" },
    "student": { "$oid": "65a76901fc13ae79abfa276e" },
    "studentName": "Gabi Ableson",
    "courseCode": "Oldsmobile",
    "date": "10/9/2023",
    "term": "Place",
    "section": "Street",
    "timeIn": "22:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa276f" },
    "student": { "$oid": "65a76901fc13ae79abfa2770" },
    "studentName": "Perrine Elvey",
    "courseCode": "Maybach",
    "date": "7/2/2023",
    "term": "Road",
    "section": "Trail",
    "timeIn": "11:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2771" },
    "student": { "$oid": "65a76901fc13ae79abfa2772" },
    "studentName": "Ram Paur",
    "courseCode": "Ford",
    "date": "4/24/2023",
    "term": "Place",
    "section": "Way",
    "timeIn": "11:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2773" },
    "student": { "$oid": "65a76901fc13ae79abfa2774" },
    "studentName": "Blinnie Thaxton",
    "courseCode": "Acura",
    "date": "9/26/2023",
    "term": "Crossing",
    "section": "Way",
    "timeIn": "6:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2775" },
    "student": { "$oid": "65a76901fc13ae79abfa2776" },
    "studentName": "Lotti Gaskal",
    "courseCode": "Ford",
    "date": "2/16/2023",
    "term": "Court",
    "section": "Park",
    "timeIn": "1:50"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2777" },
    "student": { "$oid": "65a76901fc13ae79abfa2778" },
    "studentName": "Aurelia Fahy",
    "courseCode": "Ford",
    "date": "2/21/2023",
    "term": "Place",
    "section": "Pass",
    "timeIn": "4:00"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2779" },
    "student": { "$oid": "65a76901fc13ae79abfa277a" },
    "studentName": "Liza Haylor",
    "courseCode": "Toyota",
    "date": "3/23/2023",
    "term": "Park",
    "section": "Lane",
    "timeIn": "19:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa277b" },
    "student": { "$oid": "65a76901fc13ae79abfa277c" },
    "studentName": "Alison Brockley",
    "courseCode": "Chevrolet",
    "date": "10/21/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "5:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa277d" },
    "student": { "$oid": "65a76901fc13ae79abfa277e" },
    "studentName": "Felita Matchitt",
    "courseCode": "Land Rover",
    "date": "3/11/2023",
    "term": "Crossing",
    "section": "Parkway",
    "timeIn": "16:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa277f" },
    "student": { "$oid": "65a76901fc13ae79abfa2780" },
    "studentName": "Sammy Capps",
    "courseCode": "Ford",
    "date": "5/12/2023",
    "term": "Point",
    "section": "Center",
    "timeIn": "14:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2781" },
    "student": { "$oid": "65a76901fc13ae79abfa2782" },
    "studentName": "Gray Jarrell",
    "courseCode": "Nissan",
    "date": "10/2/2023",
    "term": "Circle",
    "section": "Circle",
    "timeIn": "21:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2783" },
    "student": { "$oid": "65a76901fc13ae79abfa2784" },
    "studentName": "Claire Freegard",
    "courseCode": "Honda",
    "date": "5/26/2023",
    "term": "Court",
    "section": "Drive",
    "timeIn": "13:51"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2785" },
    "student": { "$oid": "65a76901fc13ae79abfa2786" },
    "studentName": "Dare Berns",
    "courseCode": "BMW",
    "date": "8/8/2023",
    "term": "Place",
    "section": "Way",
    "timeIn": "1:22"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2787" },
    "student": { "$oid": "65a76901fc13ae79abfa2788" },
    "studentName": "Annamarie Falkous",
    "courseCode": "Hyundai",
    "date": "12/14/2023",
    "term": "Street",
    "section": "Street",
    "timeIn": "22:25"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2789" },
    "student": { "$oid": "65a76901fc13ae79abfa278a" },
    "studentName": "Judon Delahunty",
    "courseCode": "Mitsubishi",
    "date": "5/13/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "19:06"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa278b" },
    "student": { "$oid": "65a76901fc13ae79abfa278c" },
    "studentName": "Franchot Senechell",
    "courseCode": "Nissan",
    "date": "1/28/2023",
    "term": "Park",
    "section": "Road",
    "timeIn": "1:35"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa278d" },
    "student": { "$oid": "65a76901fc13ae79abfa278e" },
    "studentName": "Phip Tyght",
    "courseCode": "Oldsmobile",
    "date": "8/3/2023",
    "term": "Park",
    "section": "Court",
    "timeIn": "0:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa278f" },
    "student": { "$oid": "65a76901fc13ae79abfa2790" },
    "studentName": "Kermie Peperell",
    "courseCode": "Suzuki",
    "date": "4/15/2023",
    "term": "Road",
    "section": "Lane",
    "timeIn": "2:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2791" },
    "student": { "$oid": "65a76901fc13ae79abfa2792" },
    "studentName": "Gilberto Kenzie",
    "courseCode": "Plymouth",
    "date": "10/17/2023",
    "term": "Crossing",
    "section": "Crossing",
    "timeIn": "22:18"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2793" },
    "student": { "$oid": "65a76901fc13ae79abfa2794" },
    "studentName": "Inga Hexter",
    "courseCode": "Mercury",
    "date": "12/26/2023",
    "term": "Trail",
    "section": "Terrace",
    "timeIn": "4:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2795" },
    "student": { "$oid": "65a76901fc13ae79abfa2796" },
    "studentName": "Debera Reddlesden",
    "courseCode": "Pontiac",
    "date": "6/27/2023",
    "term": "Plaza",
    "section": "Alley",
    "timeIn": "4:42"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2797" },
    "student": { "$oid": "65a76901fc13ae79abfa2798" },
    "studentName": "Brenna De'Ath",
    "courseCode": "Ford",
    "date": "4/19/2023",
    "term": "Terrace",
    "section": "Circle",
    "timeIn": "0:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2799" },
    "student": { "$oid": "65a76901fc13ae79abfa279a" },
    "studentName": "Rees Stein",
    "courseCode": "Oldsmobile",
    "date": "6/27/2023",
    "term": "Road",
    "section": "Crossing",
    "timeIn": "5:30"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa279b" },
    "student": { "$oid": "65a76901fc13ae79abfa279c" },
    "studentName": "Griz Ales",
    "courseCode": "Hyundai",
    "date": "4/3/2023",
    "term": "Pass",
    "section": "Street",
    "timeIn": "2:22"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa279d" },
    "student": { "$oid": "65a76901fc13ae79abfa279e" },
    "studentName": "Misha Ahrend",
    "courseCode": "Subaru",
    "date": "8/19/2023",
    "term": "Circle",
    "section": "Junction",
    "timeIn": "3:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa279f" },
    "student": { "$oid": "65a76901fc13ae79abfa27a0" },
    "studentName": "Theadora Braxay",
    "courseCode": "Ford",
    "date": "8/8/2023",
    "term": "Lane",
    "section": "Hill",
    "timeIn": "22:10"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27a1" },
    "student": { "$oid": "65a76901fc13ae79abfa27a2" },
    "studentName": "Lorenzo Sandcraft",
    "courseCode": "GMC",
    "date": "7/18/2023",
    "term": "Street",
    "section": "Hill",
    "timeIn": "14:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27a3" },
    "student": { "$oid": "65a76901fc13ae79abfa27a4" },
    "studentName": "Rani Goathrop",
    "courseCode": "Spyker",
    "date": "5/29/2023",
    "term": "Pass",
    "section": "Road",
    "timeIn": "3:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27a5" },
    "student": { "$oid": "65a76901fc13ae79abfa27a6" },
    "studentName": "Caitlin Bramstom",
    "courseCode": "Volvo",
    "date": "1/12/2024",
    "term": "Center",
    "section": "Hill",
    "timeIn": "21:06"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27a7" },
    "student": { "$oid": "65a76901fc13ae79abfa27a8" },
    "studentName": "Ketty Ferraresi",
    "courseCode": "Suzuki",
    "date": "1/9/2024",
    "term": "Plaza",
    "section": "Crossing",
    "timeIn": "1:37"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27a9" },
    "student": { "$oid": "65a76901fc13ae79abfa27aa" },
    "studentName": "Pooh Abbatt",
    "courseCode": "Mercedes-Benz",
    "date": "3/6/2023",
    "term": "Terrace",
    "section": "Lane",
    "timeIn": "17:22"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27ab" },
    "student": { "$oid": "65a76901fc13ae79abfa27ac" },
    "studentName": "Lissa Hawley",
    "courseCode": "Chevrolet",
    "date": "9/19/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "17:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27ad" },
    "student": { "$oid": "65a76901fc13ae79abfa27ae" },
    "studentName": "Addie Durber",
    "courseCode": "Ford",
    "date": "1/11/2024",
    "term": "Plaza",
    "section": "Place",
    "timeIn": "2:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27af" },
    "student": { "$oid": "65a76901fc13ae79abfa27b0" },
    "studentName": "Arri Pawlyn",
    "courseCode": "Bugatti",
    "date": "1/9/2023",
    "term": "Parkway",
    "section": "Crossing",
    "timeIn": "21:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27b1" },
    "student": { "$oid": "65a76901fc13ae79abfa27b2" },
    "studentName": "Claudetta Ough",
    "courseCode": "Nissan",
    "date": "1/12/2023",
    "term": "Way",
    "section": "Court",
    "timeIn": "6:50"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27b3" },
    "student": { "$oid": "65a76901fc13ae79abfa27b4" },
    "studentName": "Yanaton Hollingshead",
    "courseCode": "BMW",
    "date": "12/22/2023",
    "term": "Lane",
    "section": "Circle",
    "timeIn": "18:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27b5" },
    "student": { "$oid": "65a76901fc13ae79abfa27b6" },
    "studentName": "Murry Purry",
    "courseCode": "Ford",
    "date": "6/25/2023",
    "term": "Point",
    "section": "Hill",
    "timeIn": "17:46"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27b7" },
    "student": { "$oid": "65a76901fc13ae79abfa27b8" },
    "studentName": "Roxanna Coburn",
    "courseCode": "Toyota",
    "date": "6/13/2023",
    "term": "Center",
    "section": "Circle",
    "timeIn": "10:32"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27b9" },
    "student": { "$oid": "65a76901fc13ae79abfa27ba" },
    "studentName": "Myrta Monier",
    "courseCode": "Acura",
    "date": "10/10/2023",
    "term": "Street",
    "section": "Terrace",
    "timeIn": "9:14"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27bb" },
    "student": { "$oid": "65a76901fc13ae79abfa27bc" },
    "studentName": "Pyotr Phlipon",
    "courseCode": "Chrysler",
    "date": "10/21/2023",
    "term": "Point",
    "section": "Plaza",
    "timeIn": "20:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27bd" },
    "student": { "$oid": "65a76901fc13ae79abfa27be" },
    "studentName": "Eula Cusworth",
    "courseCode": "Mercedes-Benz",
    "date": "4/21/2023",
    "term": "Road",
    "section": "Terrace",
    "timeIn": "1:36"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27bf" },
    "student": { "$oid": "65a76901fc13ae79abfa27c0" },
    "studentName": "Artemas Seager",
    "courseCode": "Mercury",
    "date": "2/24/2023",
    "term": "Center",
    "section": "Junction",
    "timeIn": "8:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27c1" },
    "student": { "$oid": "65a76901fc13ae79abfa27c2" },
    "studentName": "Thomasina Tale",
    "courseCode": "Nissan",
    "date": "6/4/2023",
    "term": "Parkway",
    "section": "Alley",
    "timeIn": "20:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27c3" },
    "student": { "$oid": "65a76901fc13ae79abfa27c4" },
    "studentName": "Katie Hallan",
    "courseCode": "Mercedes-Benz",
    "date": "1/3/2024",
    "term": "Terrace",
    "section": "Plaza",
    "timeIn": "19:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27c5" },
    "student": { "$oid": "65a76901fc13ae79abfa27c6" },
    "studentName": "Mercy Farren",
    "courseCode": "Chevrolet",
    "date": "7/8/2023",
    "term": "Hill",
    "section": "Hill",
    "timeIn": "13:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27c7" },
    "student": { "$oid": "65a76901fc13ae79abfa27c8" },
    "studentName": "Ronald Fedorchenko",
    "courseCode": "Buick",
    "date": "10/11/2023",
    "term": "Terrace",
    "section": "Street",
    "timeIn": "19:10"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27c9" },
    "student": { "$oid": "65a76901fc13ae79abfa27ca" },
    "studentName": "Idette Abell",
    "courseCode": "Scion",
    "date": "6/11/2023",
    "term": "Drive",
    "section": "Hill",
    "timeIn": "19:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27cb" },
    "student": { "$oid": "65a76901fc13ae79abfa27cc" },
    "studentName": "Benetta Pittock",
    "courseCode": "Ford",
    "date": "11/20/2023",
    "term": "Junction",
    "section": "Drive",
    "timeIn": "21:42"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27cd" },
    "student": { "$oid": "65a76901fc13ae79abfa27ce" },
    "studentName": "Monica MacTrustey",
    "courseCode": "Plymouth",
    "date": "1/3/2023",
    "term": "Crossing",
    "section": "Court",
    "timeIn": "18:36"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27cf" },
    "student": { "$oid": "65a76901fc13ae79abfa27d0" },
    "studentName": "Jeannette Bensley",
    "courseCode": "Toyota",
    "date": "10/10/2023",
    "term": "Alley",
    "section": "Terrace",
    "timeIn": "23:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27d1" },
    "student": { "$oid": "65a76901fc13ae79abfa27d2" },
    "studentName": "Jeremias Klyn",
    "courseCode": "Nissan",
    "date": "5/12/2023",
    "term": "Junction",
    "section": "Parkway",
    "timeIn": "0:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27d3" },
    "student": { "$oid": "65a76901fc13ae79abfa27d4" },
    "studentName": "Keeley Lippett",
    "courseCode": "Mercedes-Benz",
    "date": "10/6/2023",
    "term": "Park",
    "section": "Drive",
    "timeIn": "16:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27d5" },
    "student": { "$oid": "65a76901fc13ae79abfa27d6" },
    "studentName": "Nerta Eayrs",
    "courseCode": "Lexus",
    "date": "1/16/2024",
    "term": "Hill",
    "section": "Way",
    "timeIn": "11:15"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27d7" },
    "student": { "$oid": "65a76901fc13ae79abfa27d8" },
    "studentName": "Barbi Havick",
    "courseCode": "Kia",
    "date": "4/25/2023",
    "term": "Street",
    "section": "Parkway",
    "timeIn": "20:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27d9" },
    "student": { "$oid": "65a76901fc13ae79abfa27da" },
    "studentName": "Rozelle Estevez",
    "courseCode": "Mercury",
    "date": "10/26/2023",
    "term": "Road",
    "section": "Terrace",
    "timeIn": "10:09"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27db" },
    "student": { "$oid": "65a76901fc13ae79abfa27dc" },
    "studentName": "Jaquenette Stoltz",
    "courseCode": "Chevrolet",
    "date": "12/24/2023",
    "term": "Junction",
    "section": "Plaza",
    "timeIn": "5:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27dd" },
    "student": { "$oid": "65a76901fc13ae79abfa27de" },
    "studentName": "Valery Gladden",
    "courseCode": "Mercedes-Benz",
    "date": "2/27/2023",
    "term": "Place",
    "section": "Center",
    "timeIn": "12:52"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27df" },
    "student": { "$oid": "65a76901fc13ae79abfa27e0" },
    "studentName": "Patin Kirkebye",
    "courseCode": "Saab",
    "date": "7/29/2023",
    "term": "Plaza",
    "section": "Road",
    "timeIn": "10:56"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27e1" },
    "student": { "$oid": "65a76901fc13ae79abfa27e2" },
    "studentName": "Archer Myner",
    "courseCode": "Volvo",
    "date": "10/30/2023",
    "term": "Crossing",
    "section": "Road",
    "timeIn": "2:19"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27e3" },
    "student": { "$oid": "65a76901fc13ae79abfa27e4" },
    "studentName": "Helenelizabeth McTerlagh",
    "courseCode": "Cadillac",
    "date": "9/8/2023",
    "term": "Circle",
    "section": "Terrace",
    "timeIn": "13:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27e5" },
    "student": { "$oid": "65a76901fc13ae79abfa27e6" },
    "studentName": "Sayre Cudihy",
    "courseCode": "GMC",
    "date": "11/21/2023",
    "term": "Pass",
    "section": "Alley",
    "timeIn": "12:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27e7" },
    "student": { "$oid": "65a76901fc13ae79abfa27e8" },
    "studentName": "Cordelia Blythe",
    "courseCode": "GMC",
    "date": "1/27/2023",
    "term": "Circle",
    "section": "Crossing",
    "timeIn": "22:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27e9" },
    "student": { "$oid": "65a76901fc13ae79abfa27ea" },
    "studentName": "Edith Mitchall",
    "courseCode": "Chevrolet",
    "date": "8/21/2023",
    "term": "Avenue",
    "section": "Street",
    "timeIn": "19:58"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27eb" },
    "student": { "$oid": "65a76901fc13ae79abfa27ec" },
    "studentName": "Vern Duchatel",
    "courseCode": "Audi",
    "date": "12/31/2023",
    "term": "Parkway",
    "section": "Point",
    "timeIn": "0:13"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27ed" },
    "student": { "$oid": "65a76901fc13ae79abfa27ee" },
    "studentName": "Maud Palombi",
    "courseCode": "BMW",
    "date": "8/31/2023",
    "term": "Terrace",
    "section": "Road",
    "timeIn": "23:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27ef" },
    "student": { "$oid": "65a76901fc13ae79abfa27f0" },
    "studentName": "Rosanna Sibbe",
    "courseCode": "GMC",
    "date": "8/1/2023",
    "term": "Road",
    "section": "Place",
    "timeIn": "7:39"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27f1" },
    "student": { "$oid": "65a76901fc13ae79abfa27f2" },
    "studentName": "De witt Conradie",
    "courseCode": "Lincoln",
    "date": "8/21/2023",
    "term": "Lane",
    "section": "Plaza",
    "timeIn": "17:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27f3" },
    "student": { "$oid": "65a76901fc13ae79abfa27f4" },
    "studentName": "Carmelina Whatsize",
    "courseCode": "Chevrolet",
    "date": "10/30/2023",
    "term": "Trail",
    "section": "Circle",
    "timeIn": "21:45"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27f5" },
    "student": { "$oid": "65a76901fc13ae79abfa27f6" },
    "studentName": "Nomi Ladds",
    "courseCode": "Nissan",
    "date": "5/13/2023",
    "term": "Plaza",
    "section": "Way",
    "timeIn": "9:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27f7" },
    "student": { "$oid": "65a76901fc13ae79abfa27f8" },
    "studentName": "Robbert Curnnokk",
    "courseCode": "Mercedes-Benz",
    "date": "11/14/2023",
    "term": "Place",
    "section": "Drive",
    "timeIn": "12:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27f9" },
    "student": { "$oid": "65a76901fc13ae79abfa27fa" },
    "studentName": "Curry Wride",
    "courseCode": "Pontiac",
    "date": "11/12/2023",
    "term": "Center",
    "section": "Center",
    "timeIn": "5:20"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27fb" },
    "student": { "$oid": "65a76901fc13ae79abfa27fc" },
    "studentName": "Yurik Sanbroke",
    "courseCode": "Pontiac",
    "date": "4/15/2023",
    "term": "Court",
    "section": "Center",
    "timeIn": "0:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27fd" },
    "student": { "$oid": "65a76901fc13ae79abfa27fe" },
    "studentName": "Wilmar Tanzig",
    "courseCode": "Jaguar",
    "date": "6/11/2023",
    "term": "Place",
    "section": "Drive",
    "timeIn": "3:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa27ff" },
    "student": { "$oid": "65a76901fc13ae79abfa2800" },
    "studentName": "Willette Chastelain",
    "courseCode": "Saab",
    "date": "1/2/2024",
    "term": "Alley",
    "section": "Lane",
    "timeIn": "23:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2801" },
    "student": { "$oid": "65a76901fc13ae79abfa2802" },
    "studentName": "Shaughn Minghella",
    "courseCode": "Chrysler",
    "date": "7/23/2023",
    "term": "Pass",
    "section": "Parkway",
    "timeIn": "13:25"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2803" },
    "student": { "$oid": "65a76901fc13ae79abfa2804" },
    "studentName": "Eberhard Semorad",
    "courseCode": "Dodge",
    "date": "11/16/2023",
    "term": "Court",
    "section": "Court",
    "timeIn": "19:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2805" },
    "student": { "$oid": "65a76901fc13ae79abfa2806" },
    "studentName": "Minnaminnie Belfield",
    "courseCode": "Kia",
    "date": "1/23/2023",
    "term": "Road",
    "section": "Way",
    "timeIn": "11:34"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2807" },
    "student": { "$oid": "65a76901fc13ae79abfa2808" },
    "studentName": "Georgi Kerwick",
    "courseCode": "Audi",
    "date": "7/31/2023",
    "term": "Trail",
    "section": "Park",
    "timeIn": "7:53"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2809" },
    "student": { "$oid": "65a76901fc13ae79abfa280a" },
    "studentName": "Andrej Kohlert",
    "courseCode": "Buick",
    "date": "12/2/2023",
    "term": "Park",
    "section": "Terrace",
    "timeIn": "9:03"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa280b" },
    "student": { "$oid": "65a76901fc13ae79abfa280c" },
    "studentName": "Odessa Al Hirsi",
    "courseCode": "Toyota",
    "date": "2/2/2023",
    "term": "Lane",
    "section": "Crossing",
    "timeIn": "16:12"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa280d" },
    "student": { "$oid": "65a76901fc13ae79abfa280e" },
    "studentName": "Tedmund Sherlaw",
    "courseCode": "Infiniti",
    "date": "10/3/2023",
    "term": "Way",
    "section": "Place",
    "timeIn": "11:39"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa280f" },
    "student": { "$oid": "65a76901fc13ae79abfa2810" },
    "studentName": "Lotti Sabben",
    "courseCode": "Saturn",
    "date": "1/30/2023",
    "term": "Lane",
    "section": "Drive",
    "timeIn": "6:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2811" },
    "student": { "$oid": "65a76901fc13ae79abfa2812" },
    "studentName": "Sabina Kemetz",
    "courseCode": "Nissan",
    "date": "3/25/2023",
    "term": "Pass",
    "section": "Center",
    "timeIn": "15:41"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2813" },
    "student": { "$oid": "65a76901fc13ae79abfa2814" },
    "studentName": "Erica Burnsides",
    "courseCode": "Toyota",
    "date": "1/29/2023",
    "term": "Parkway",
    "section": "Circle",
    "timeIn": "11:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2815" },
    "student": { "$oid": "65a76901fc13ae79abfa2816" },
    "studentName": "Ainslee Pilling",
    "courseCode": "Ford",
    "date": "6/30/2023",
    "term": "Parkway",
    "section": "Lane",
    "timeIn": "9:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2817" },
    "student": { "$oid": "65a76901fc13ae79abfa2818" },
    "studentName": "Nadiya Dorrity",
    "courseCode": "Mercedes-Benz",
    "date": "2/2/2023",
    "term": "Street",
    "section": "Trail",
    "timeIn": "22:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2819" },
    "student": { "$oid": "65a76901fc13ae79abfa281a" },
    "studentName": "Malva Prosch",
    "courseCode": "Lamborghini",
    "date": "1/16/2023",
    "term": "Trail",
    "section": "Avenue",
    "timeIn": "18:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa281b" },
    "student": { "$oid": "65a76901fc13ae79abfa281c" },
    "studentName": "Persis Winborn",
    "courseCode": "Mercedes-Benz",
    "date": "4/18/2023",
    "term": "Way",
    "section": "Place",
    "timeIn": "9:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa281d" },
    "student": { "$oid": "65a76901fc13ae79abfa281e" },
    "studentName": "Kristy Goulstone",
    "courseCode": "Porsche",
    "date": "9/11/2023",
    "term": "Place",
    "section": "Way",
    "timeIn": "4:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa281f" },
    "student": { "$oid": "65a76901fc13ae79abfa2820" },
    "studentName": "Genna Robiot",
    "courseCode": "Suzuki",
    "date": "11/18/2023",
    "term": "Terrace",
    "section": "Crossing",
    "timeIn": "9:05"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2821" },
    "student": { "$oid": "65a76901fc13ae79abfa2822" },
    "studentName": "Gloriana Hissett",
    "courseCode": "GMC",
    "date": "1/24/2023",
    "term": "Point",
    "section": "Court",
    "timeIn": "5:10"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2823" },
    "student": { "$oid": "65a76901fc13ae79abfa2824" },
    "studentName": "Addie Penniall",
    "courseCode": "Mitsubishi",
    "date": "7/5/2023",
    "term": "Point",
    "section": "Center",
    "timeIn": "22:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2825" },
    "student": { "$oid": "65a76901fc13ae79abfa2826" },
    "studentName": "Rasia L'Homme",
    "courseCode": "Subaru",
    "date": "2/25/2023",
    "term": "Court",
    "section": "Point",
    "timeIn": "16:49"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2827" },
    "student": { "$oid": "65a76901fc13ae79abfa2828" },
    "studentName": "Philipa Fouracres",
    "courseCode": "Chevrolet",
    "date": "4/10/2023",
    "term": "Place",
    "section": "Avenue",
    "timeIn": "9:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2829" },
    "student": { "$oid": "65a76901fc13ae79abfa282a" },
    "studentName": "Fredia Jann",
    "courseCode": "Mazda",
    "date": "8/30/2023",
    "term": "Avenue",
    "section": "Drive",
    "timeIn": "5:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa282b" },
    "student": { "$oid": "65a76901fc13ae79abfa282c" },
    "studentName": "Nicolas Baltzar",
    "courseCode": "Lincoln",
    "date": "1/10/2024",
    "term": "Park",
    "section": "Pass",
    "timeIn": "23:02"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa282d" },
    "student": { "$oid": "65a76901fc13ae79abfa282e" },
    "studentName": "Babbette McRill",
    "courseCode": "Ford",
    "date": "12/5/2023",
    "term": "Center",
    "section": "Point",
    "timeIn": "7:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa282f" },
    "student": { "$oid": "65a76901fc13ae79abfa2830" },
    "studentName": "Viola Edmundson",
    "courseCode": "Saab",
    "date": "7/1/2023",
    "term": "Pass",
    "section": "Plaza",
    "timeIn": "10:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2831" },
    "student": { "$oid": "65a76901fc13ae79abfa2832" },
    "studentName": "Sawyer Nussii",
    "courseCode": "Chevrolet",
    "date": "9/16/2023",
    "term": "Place",
    "section": "Junction",
    "timeIn": "14:09"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2833" },
    "student": { "$oid": "65a76901fc13ae79abfa2834" },
    "studentName": "Aretha Pouck",
    "courseCode": "Mercedes-Benz",
    "date": "12/24/2023",
    "term": "Way",
    "section": "Court",
    "timeIn": "3:55"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2835" },
    "student": { "$oid": "65a76901fc13ae79abfa2836" },
    "studentName": "Claudetta Klambt",
    "courseCode": "Mitsubishi",
    "date": "5/3/2023",
    "term": "Circle",
    "section": "Trail",
    "timeIn": "18:43"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2837" },
    "student": { "$oid": "65a76901fc13ae79abfa2838" },
    "studentName": "Layla Skeech",
    "courseCode": "Mitsubishi",
    "date": "5/22/2023",
    "term": "Alley",
    "section": "Circle",
    "timeIn": "2:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2839" },
    "student": { "$oid": "65a76901fc13ae79abfa283a" },
    "studentName": "Lila Seemmonds",
    "courseCode": "Mercury",
    "date": "11/25/2023",
    "term": "Terrace",
    "section": "Avenue",
    "timeIn": "7:59"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa283b" },
    "student": { "$oid": "65a76901fc13ae79abfa283c" },
    "studentName": "Katya Iglesia",
    "courseCode": "Acura",
    "date": "5/29/2023",
    "term": "Terrace",
    "section": "Trail",
    "timeIn": "17:13"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa283d" },
    "student": { "$oid": "65a76901fc13ae79abfa283e" },
    "studentName": "Isaac Fante",
    "courseCode": "Mitsubishi",
    "date": "3/16/2023",
    "term": "Alley",
    "section": "Center",
    "timeIn": "19:24"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa283f" },
    "student": { "$oid": "65a76901fc13ae79abfa2840" },
    "studentName": "Emmery Sirett",
    "courseCode": "Toyota",
    "date": "7/4/2023",
    "term": "Road",
    "section": "Center",
    "timeIn": "22:14"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2841" },
    "student": { "$oid": "65a76901fc13ae79abfa2842" },
    "studentName": "Gizela Denis",
    "courseCode": "Lotus",
    "date": "10/9/2023",
    "term": "Circle",
    "section": "Lane",
    "timeIn": "6:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2843" },
    "student": { "$oid": "65a76901fc13ae79abfa2844" },
    "studentName": "Margery Bedow",
    "courseCode": "Ford",
    "date": "1/9/2024",
    "term": "Place",
    "section": "Hill",
    "timeIn": "8:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2845" },
    "student": { "$oid": "65a76901fc13ae79abfa2846" },
    "studentName": "Freddy Whibley",
    "courseCode": "BMW",
    "date": "7/20/2023",
    "term": "Crossing",
    "section": "Park",
    "timeIn": "9:47"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2847" },
    "student": { "$oid": "65a76901fc13ae79abfa2848" },
    "studentName": "Eliot Beverley",
    "courseCode": "Lexus",
    "date": "12/20/2023",
    "term": "Place",
    "section": "Way",
    "timeIn": "3:50"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2849" },
    "student": { "$oid": "65a76901fc13ae79abfa284a" },
    "studentName": "Parsifal Sumnall",
    "courseCode": "GMC",
    "date": "5/2/2023",
    "term": "Plaza",
    "section": "Alley",
    "timeIn": "0:40"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa284b" },
    "student": { "$oid": "65a76901fc13ae79abfa284c" },
    "studentName": "Luz Baldetti",
    "courseCode": "GMC",
    "date": "1/2/2023",
    "term": "Center",
    "section": "Court",
    "timeIn": "21:05"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa284d" },
    "student": { "$oid": "65a76901fc13ae79abfa284e" },
    "studentName": "Ches Shawl",
    "courseCode": "GMC",
    "date": "2/13/2023",
    "term": "Road",
    "section": "Way",
    "timeIn": "8:33"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa284f" },
    "student": { "$oid": "65a76901fc13ae79abfa2850" },
    "studentName": "Alessandra Maine",
    "courseCode": "Land Rover",
    "date": "1/15/2023",
    "term": "Street",
    "section": "Lane",
    "timeIn": "16:00"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2851" },
    "student": { "$oid": "65a76901fc13ae79abfa2852" },
    "studentName": "Alaine Baxill",
    "courseCode": "Chrysler",
    "date": "2/25/2023",
    "term": "Hill",
    "section": "Alley",
    "timeIn": "21:21"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2853" },
    "student": { "$oid": "65a76901fc13ae79abfa2854" },
    "studentName": "Charita Strattan",
    "courseCode": "GMC",
    "date": "2/20/2023",
    "term": "Pass",
    "section": "Hill",
    "timeIn": "13:04"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2855" },
    "student": { "$oid": "65a76901fc13ae79abfa2856" },
    "studentName": "Abby Brogi",
    "courseCode": "Subaru",
    "date": "5/5/2023",
    "term": "Lane",
    "section": "Lane",
    "timeIn": "23:29"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2857" },
    "student": { "$oid": "65a76901fc13ae79abfa2858" },
    "studentName": "Robinetta Ramberg",
    "courseCode": "Volkswagen",
    "date": "7/16/2023",
    "term": "Drive",
    "section": "Road",
    "timeIn": "15:49"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2859" },
    "student": { "$oid": "65a76901fc13ae79abfa285a" },
    "studentName": "Janenna Guillet",
    "courseCode": "Oldsmobile",
    "date": "1/10/2023",
    "term": "Parkway",
    "section": "Parkway",
    "timeIn": "14:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa285b" },
    "student": { "$oid": "65a76901fc13ae79abfa285c" },
    "studentName": "Shea Filippone",
    "courseCode": "Chevrolet",
    "date": "1/24/2023",
    "term": "Plaza",
    "section": "Pass",
    "timeIn": "15:19"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa285d" },
    "student": { "$oid": "65a76901fc13ae79abfa285e" },
    "studentName": "Denna Clutton",
    "courseCode": "GMC",
    "date": "7/25/2023",
    "term": "Hill",
    "section": "Junction",
    "timeIn": "3:17"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa285f" },
    "student": { "$oid": "65a76901fc13ae79abfa2860" },
    "studentName": "Boy Aleixo",
    "courseCode": "Ford",
    "date": "3/30/2023",
    "term": "Drive",
    "section": "Circle",
    "timeIn": "8:37"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2861" },
    "student": { "$oid": "65a76901fc13ae79abfa2862" },
    "studentName": "Bryon Coldbath",
    "courseCode": "Chevrolet",
    "date": "3/9/2023",
    "term": "Park",
    "section": "Pass",
    "timeIn": "12:02"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2863" },
    "student": { "$oid": "65a76901fc13ae79abfa2864" },
    "studentName": "Aurelea Queripel",
    "courseCode": "Dodge",
    "date": "1/30/2023",
    "term": "Parkway",
    "section": "Junction",
    "timeIn": "12:46"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2865" },
    "student": { "$oid": "65a76901fc13ae79abfa2866" },
    "studentName": "Emelyne Folling",
    "courseCode": "Fiat",
    "date": "10/1/2023",
    "term": "Hill",
    "section": "Junction",
    "timeIn": "15:12"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2867" },
    "student": { "$oid": "65a76901fc13ae79abfa2868" },
    "studentName": "Dorice Giacobazzi",
    "courseCode": "Pontiac",
    "date": "3/10/2023",
    "term": "Point",
    "section": "Pass",
    "timeIn": "6:23"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2869" },
    "student": { "$oid": "65a76901fc13ae79abfa286a" },
    "studentName": "Shoshana Flintoffe",
    "courseCode": "Mitsubishi",
    "date": "9/21/2023",
    "term": "Park",
    "section": "Street",
    "timeIn": "23:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa286b" },
    "student": { "$oid": "65a76901fc13ae79abfa286c" },
    "studentName": "Langsdon Jeger",
    "courseCode": "Ford",
    "date": "3/15/2023",
    "term": "Junction",
    "section": "Drive",
    "timeIn": "19:01"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa286d" },
    "student": { "$oid": "65a76901fc13ae79abfa286e" },
    "studentName": "Lauritz Sarfatti",
    "courseCode": "Plymouth",
    "date": "10/8/2023",
    "term": "Parkway",
    "section": "Pass",
    "timeIn": "10:42"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa286f" },
    "student": { "$oid": "65a76901fc13ae79abfa2870" },
    "studentName": "Eliza Robotham",
    "courseCode": "Subaru",
    "date": "1/11/2024",
    "term": "Plaza",
    "section": "Plaza",
    "timeIn": "20:07"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2871" },
    "student": { "$oid": "65a76901fc13ae79abfa2872" },
    "studentName": "Vasili Lambden",
    "courseCode": "Hyundai",
    "date": "5/13/2023",
    "term": "Center",
    "section": "Parkway",
    "timeIn": "1:28"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2873" },
    "student": { "$oid": "65a76901fc13ae79abfa2874" },
    "studentName": "Dena Grebner",
    "courseCode": "Honda",
    "date": "8/14/2023",
    "term": "Avenue",
    "section": "Hill",
    "timeIn": "19:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2875" },
    "student": { "$oid": "65a76901fc13ae79abfa2876" },
    "studentName": "Roi Lydon",
    "courseCode": "Mercedes-Benz",
    "date": "10/24/2023",
    "term": "Parkway",
    "section": "Alley",
    "timeIn": "14:38"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2877" },
    "student": { "$oid": "65a76901fc13ae79abfa2878" },
    "studentName": "Nanete Knyvett",
    "courseCode": "Ford",
    "date": "12/12/2023",
    "term": "Place",
    "section": "Crossing",
    "timeIn": "3:54"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2879" },
    "student": { "$oid": "65a76901fc13ae79abfa287a" },
    "studentName": "Standford Hendron",
    "courseCode": "Buick",
    "date": "8/31/2023",
    "term": "Trail",
    "section": "Point",
    "timeIn": "23:27"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa287b" },
    "student": { "$oid": "65a76901fc13ae79abfa287c" },
    "studentName": "Lisa Beneteau",
    "courseCode": "Audi",
    "date": "9/4/2023",
    "term": "Terrace",
    "section": "Plaza",
    "timeIn": "12:41"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa287d" },
    "student": { "$oid": "65a76901fc13ae79abfa287e" },
    "studentName": "Guinna Tezure",
    "courseCode": "Subaru",
    "date": "12/23/2023",
    "term": "Lane",
    "section": "Alley",
    "timeIn": "23:36"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa287f" },
    "student": { "$oid": "65a76901fc13ae79abfa2880" },
    "studentName": "Mellicent Laimable",
    "courseCode": "Ford",
    "date": "9/9/2023",
    "term": "Point",
    "section": "Street",
    "timeIn": "7:23"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2881" },
    "student": { "$oid": "65a76901fc13ae79abfa2882" },
    "studentName": "Haven Torregiani",
    "courseCode": "Austin",
    "date": "5/23/2023",
    "term": "Plaza",
    "section": "Hill",
    "timeIn": "5:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2883" },
    "student": { "$oid": "65a76901fc13ae79abfa2884" },
    "studentName": "Carline Pelz",
    "courseCode": "Pontiac",
    "date": "11/26/2023",
    "term": "Hill",
    "section": "Road",
    "timeIn": "21:57"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2885" },
    "student": { "$oid": "65a76901fc13ae79abfa2886" },
    "studentName": "Wilbur McCroft",
    "courseCode": "Audi",
    "date": "5/31/2023",
    "term": "Alley",
    "section": "Park",
    "timeIn": "5:08"
  },
  {
    "_id": { "$oid": "65a76901fc13ae79abfa2887" },
    "student": { "$oid": "65a76901fc13ae79abfa2888" },
    "studentName": "Selby Halfhyde",
    "courseCode": "Chevrolet",
    "date": "7/11/2023",
    "term": "Avenue",
    "section": "Hill",
    "timeIn": "23:31"
  }
]

export default attendanceMock;