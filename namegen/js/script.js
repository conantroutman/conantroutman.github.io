var titles = [
  "Doktor",
  "Kommisarie",
  "Direktör",
  "Professor",
  "Bankir",
  "Byrådirektör",
  "Överbefälhavare",
  "Källarmästare",
  "Hovslagare",
  "Borgmästare",
  "Ordförande",
  "Advokat",
  "Ärkebiskop",
  "Statsminister",
  "Utrikesminister",
  "Justitieminister",
  "Cykelreparatör",
  "Kassabiträde",
  "Miljöminister",
  "Skomakare",
  "Trädgårdsmästare",
  "Farbror",
  "Astrofysiker",
  "Ortoped",
  "Gynekolog",
  "Dirigent",
  "Trumslagare",
  "Tandhygienist",
  "Civilminister",
  "Finansminister",
  "General",
  "Tant",
  "Poliskonstapel",
  "Kapellmästare",
  "Herr",
  "Fru",
  "Andningskonsult",
  "Jordbruksminister",
  "Landshövding",
  "Handläggare",
  "Aktiemäklare",
  "Hundpsykolog",
  "Nyhetsankare",
  "Kapten",
  "Docent",
  "Chefskock",
  "Vaktmästare",
  "Biskop"
];
var names = [
  "Sten",
  "Bengt",
  "Lena",
  "Bosse",
  "Conny",
  "Rudolf",
  "Tengil",
  "Birgit",
  "Barbro",
  "Katla",
  "Jonas",
  "Jan-Ove",
  "Henry",
  "Dick",
  "Eva",
  "Bertil",
  "Olof",
  "Gunnar",
  "Åke",
  "Anders",
  "Tage",
  "Torsten",
  "Carina",
  "Folke",
  "Greger",
  "Bill",
  "Knut",
  "Inge",
  "Findus",
  "Örjan",
  "Ian",
  "Stefan",
  "Håkan",
  "Evert",
  "Lasse",
  "Lars-Emil",
  "Alfons",
  "Stina",
  "Lars",
  "Mats",
  "Ola",
  "Urban",
  "Orvar",
  "Sture",
  "Lisbeth",
  "Janne",
  "Kristin",
  "Kerstin",
  "Göran",
  "Hans-Olof",
  "Karl",
  "Carl",
  "Pontus",
  "Oskar",
  "Bollfrans",
  "Göte",
  "Tibor",
  "Eivor",
  "Mats-Emil",
  "Sven-Otto",
  "Dag-Otto",
  "Otto",
  "Joakim",
  "Mia",
  "Kent",
  "Frej",
  "Barbro",
  "Barbara",
  "Emil",
  "Måns",
  "Engelbrekt",
  "Roy",
  "Nasse",
  "Kalle",
  "Lennart",
  "Steve",
  "Max",
  "Gordon",
  "Ola-Conny",
  "Morgan",
  "Nalle",
  "Balle",
  "Fido",
  "Ture",
  "Annika",
  "Melvin",
  "Bengt",
  "Jerker",
  "Kasper",
  "Casper",
  "Rasmus",
  "Frans",
  "Folke",
  "Ingrid",
  "Börje",
  "Magnus",
  "Mikael",
  "Niklas",
  "Jimmy",
  "Patrik",
  "Mackan",
  "Mange",
  "Karin",
  "Fabian",
  "Bingo",
  "Bo",
  "Bo-Göran",
  "Stig",
  "Dag-Britt",
  "Sten-Sture",
  "Fritiof",
  "Abel",
  "Nemo",
  "Ernst",
  "Ebba",
  "Wolfgang",
  "Bo-Ragglan",
  "Arne",
  "Sune",
  "Kerstin",
  "Fabian",
  "Kurt",
  "Magnus",
  "Walter"
];
var surnames = [
  "Modem",
  "Grep",
  "Salmonella",
  "Kramp",
  "Gop",
  "Läder",
  "Lastkaj",
  "Diesel",
  "Nakenbad",
  "Zündapp",
  "Racketsson",
  "Kragballe",
  "Dückert",
  "Castrol",
  "Hink",
  "Karatekick",
  "Boll",
  "Kaviarsson",
  "Block",
  "Strupe",
  "Bunke",
  "Pilsner",
  "Dieselsson",
  "Snus",
  "Mellin",
  "Kattsand",
  "Sill",
  "Kortison",
  "Asbest",
  "Ipren",
  "Bosch",
  "Gädda",
  "Madrass",
  "Lös",
  "Lax",
  "Bister",
  "Svinto",
  "Jägermeister",
  "Kruka",
  "Styrservo",
  "Kavel",
  "Porslin",
  "Protes",
  "Såpa",
  "Dass",
  "Grenrör",
  "Mask",
  "Larv",
  "Gräs",
  "Bidé",
  "Latrin",
  "Såg",
  "Sork",
  "Konserv",
  "Mäsk",
  "Akvavit",
  "Vovve",
  "Task",
  "Karré",
  "Kassler",
  "Artros",
  "Tobaksson",
  "Borrelia",
  "Propp",
  "Sachs",
  "Tvåtakt",
  "Sula",
  "Laminat",
  "Psalme",
  "Pojksson",
  "Skräck",
  "Svettsson",
  "Krut",
  "Kotte",
  "Stormakt",
  "Raggmunk",
  "Elfirma",
  "Special",
  "Gips",
  "Kropp",
  "Tarm",
  "Hänglåsius",
  "Knarvel",
  "Arsle",
  "Rööv",
  "Kratta",
  "Listerine",
  "Magplask",
  "Kolera",
  "Katarr",
  "Skelett",
  "Pengar",
  "Turban",
  "Arselius",
  "Masarin",
  "Semleröv",
  "Kask",
  "Borste",
  "Karies",
  "Skogsbär",
  "Hund",
  "Grav",
  "Brasa",
  "Klotpung",
  "Flak",
  "Yxa",
  "Nalle",
  "Prippsson",
  "Sprängsten",
  "Herrgård",
  "Alzheimer",
  "Bronkit",
  "Bältros",
  "Fanders",
  "Torsk",
  "Grustag",
  "Von Blandfärs",
  "Von Katzenjammer",
  "Hitler",
  "Giffel",
  "Polpotsson",
  "Kasse",
  "Kalas",
  "McDonald",
  "Padda",
  "G-son",
  "Psoriasis",
  "Talletask",
  "Rubella",
  "Gylf",
  "Oxhuvud",
  "Emalj",
  "And",
  "Golvbrunn",
  "Parkinson",
  "Bärkasse",
  "Hockey",
  "Tourettes",
  "Vetekrans",
  "Öl",
  "Pytt",
  "Grillsson",
  "Satansson",
  "Knaster",
  "Svärdfisk",
  "Soviet",
  "Jävelsson",
  "Garage",
  "Uggla",
  "Igel",
  "Skrälle",
  "Bensin",
  "Grov",
  "Frossa",
  "Heinz",
  "Golf",
  "Meskalin",
  "Gift",
  "Död",
  "Fisk",
  "Sylta",
  "Stearin",
  "Lagom",
  "Lekman",
  "Sarin",
  "Gas",
  "Platt",
  "Napalm",
  "Finkel",
  "Luftwaffe",
  "Von Spritzen",
  "Stereo",
  "Krupp",
  "Fobi",
  "Påse",
  "Turbo",
  "Dyna",
  "Sula",
  "Von Arschloch",
  "Bira",
  "Bultsax",
  "Anus",
  "Rectum",
  "Målare",
  "Asfyxius"
];
var nicknames = [
  "Raggmunken",
  "Dieseldunken",
  "Yxmördaren",
  "Skelettet",
  "Kakan",
  "Fiskarn",
  "Badkrukan",
  "Snuskhummern",
  "Kexet",
  "Babyface",
  "Den förvuxna bebisen",
  "Kokoskorven",
  "Buddha",
  "Röven",
  "Pisset",
  "Kuken",
  "Räser",
  "Trucken",
  "Loket",
  "Slemmet",
  "Bredsladd",
  "Bredställ",
  "Myggan",
  "Räkan",
  "Grand Deluxe",
  "Diktatorn"
];
var savedNames = new Array();

function setup() {
  if (localStorage.getItem(savedNames).length > 0) {
    savedNames = localStorage.getItem(savedNames);
    printSavedNames();
  }
}

function generateName() {
  var name;
  var oldName;
  var surname;
  var title;
  var nickname;

  name = generate(name, names);
  surname = generate(surname, surnames);
  title = generate(title, titles);
  nickname = generate(nickname, nicknames);

  var chance = Math.floor(Math.random() * 5) + 1;
  if (chance === 1 || chance === 2) {
    $("#name-text").text(title + " " + name + " " + surname);
  } else {
    /*else if (chance === 3) {
        $("#name-text").text(name + " " + '"' + nickname + '"' + " " + surname);
    }*/
    $("#name-text").text(name + " " + surname);
  }
}

function generate(data, array) {
  var name = data;
  var oldName;
  if (name != null) {
    oldName = data;
    name = randomize(array);

    while (name === oldName) {
      name = randomize(array);
    }
  } else {
    name = randomize(array);
  }

  return name;
}

function randomize(array) {
  var result = array[Math.floor(Math.random() * array.length)];
  return result;
}

function copyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

function saveName() {
  var name = document.getElementById("name-text").innerHTML;
  savedNames.push(name);
  printSavedNames();
  localStorage.setItem("savedNames", savedNames);
}

function printSavedNames() {
  var div = document.getElementById("saved-names");
  div.innerHTML = "";
  var text;
  for (i = 0; i < savedNames.length; i++) {
    text = document.createElement("p");
    text.innerHTML = savedNames[i];
    div.appendChild(text);
  }
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
