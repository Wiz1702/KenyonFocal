var word_meaning_dict = {
   "eaton center" : "a building for phonathon callers",
   "the hill": "Kenyon itself, situated on a hill, often used to distinguish between thing that happen “on the hill” (on campus) and things that happen “off the hill” (anywhere else, particularly in Knox County)",

   "mods" : "Meadow Lane Residences",
   "gunderdome":"Gund residence Hall Common Area",
   "milks":"The Morgan Apartments",
   "aclands":"The Acland apartments",
   "adr":"Alumni Dining Room, below Peirce dining hall",
   "rosse": "The Rosse Hall",
   "squad":"The Science Quad(Samuel Mather, Tomsich, Higley, and Hayes)",
   "the new apps":"The new apartments",
   "gates of hell":"The two pillars on middle path",
   "peirce": "The peirce dining hall",
   "eaton" : "The eaton centre",
   "kac": "Kenyon Athletic Centre(also known as the Lowry Center)",
   "gund": "The Gund residence Hall",
   "mather": "Mather Residence Hall",
   "smather": "An Academic building on the Science Quad",
   "the gund": "The Gund Gallery",
   "chalmers": "The Library",
   "hayes": "An Academic building on the science quad",
   "old k": "Old Kenyon,A residence hall located south of the campus",
   "caples": "A residence hall located behind Mather",
   "bookstore": "The Kenyon Bookstore",
   "village market": "A place to buy groceries and snacks",
   "norton": "The Norton residence hall",
   "lewis": "The Lewis residence hall",
   "gund commons": "Mailroom, Gameroom are all located here",
   "nca": "North Campus Apartments",
   "allen house": "Office of the ODEI",
   "bfec": "Brown Family Environmental Center",
   "odei": "Office Of Diversity and Inclusion",
   "title 9": "The regulations which restrict certain unpleasant behavior",
   "middle path": "The path which runs through the Campus",
   "gommons": " Short for Gund Commons, the first year relaxation space",
   "the naz": "Short for Mount Vernon Nazarene University",
   "express": "Short for Peirce Express, the dining hall situated under Farr 112",
   "kenyon crud": "A cold that students will get at various points during the semester. The symptoms vary, but the beginnings of each semester are generally seen as peak times to catch the crud",
   "comps": "Short for senior comprehensive exercises, the final project for every student that varies depending on major. Sometimes referred to as a thesis or capstone project",
   "ads": "Alpha Delta Phi: A fraternity",
   "dekes": "Delta Kappa Epsilon: A fraternity",
   "delts": "Delta Tau Delta: A fraternity",
   "betas": "Beta Theta Pi: A fraternity",
   "thetas": "Theta Delta Phi: A fraternity",
   "edms": "Epsilon Delta Mu: A fraternity",
   "phi taus": "Phi Kappa Tau: A fraternity",
   "zetas": "Zeta Alpha Pi: A fraternity",
   "vi": "Short for The Village Inn, an alternative dining space in Gambier",
   "extendo": "A period in between peak mealtimes in Peirce where students can grab cold foods to go",
   "the bier": "Short for Gambier",
   "at":"Assistant teacher",
   "avi":"Kenyon's dining services contractor",
   "ca":"Community Advisor",
   "cge":"Center For Global Engagement",
   "cdo":"Career Development Office",
   "cv": "Curriculumn Vitae or Resume",
   "da":"Discrimination Advisor",
   "gpa":"Grade Point Average: It is an indicator of your academic progress",
   "hcc":"Health and Counseling Center",
   "hr":"Human resources",
   "iphs":"Integrated Program in Humane Studies",
   "isak" : "International Society at Kenyon (student organization)",
   "kcdc" :"Kenyon Dance and Drama Club",
   "kcmun": "Kenyon College Model United Nations",
   "kcn": "Kenyon Career Network",
   "keep": "Kenyon Educational Enrichment Program",
   "kf" : "Kenyon Fund (annual giving fund)",
   "kfs" : "Kenyon Film Society",
   "kiss" : "Kenyon Information and Support Service",
   "kpf" : "Kenyon Parents Fund (annual giving fund)",
   "lbis" : "Library and Information Services",
   "ld" : "Learning disability",
   "learn":"Linking Education Advising Resources and Needs",
   "ltc" : "Library and technology consultant",
   "lsat" : "Law School Admissions Test",
   "mcat" : "Medical College Admissions Test",
   "reach" : "Recognizing Each Other's Ability to Conquer the Hill",
   "sac": "Student Affairs Center",
   "samosa" : "South Asian Multicultural Organization for Student Awareness",
   "sass" : "Student Accessibility Support Services",
   "sat" : "Standardized Achievement Test",
   "skap" : "Summer Kenyon Academic Partnership",
   "ucc" : "Upperclass counselor",
   "vcat" : "Veterinary College Admissions Test",
   "wkco" : "Student radio station (91.9 FM)",
  "mcbride":"The Mcbride residence hall",
  "mather":"The Mather residence hall",
  "moc":"Men of Color: An Association of students who are Black, Latinx, and Native American",
"naz":"Mount Vernon Nazarene University",
  "bsu":"Black Students Union",
  "asa":"African Students Association",
   "new aps":"The new apartments: Behind the NCAs",
    "kcp":"Kenyon College Players",
    "the horn":"Horn Gallery",
    "eco":"Environmental Campus Organization",
    "bfc":"Business and Finance Committee",
    "campo":"Campus Safety",
    "disco":"Disabled Students Community Organization"
  
    };

function searchWord() {
  var word = document.getElementById("wordInput").value.toLowerCase();
  var meaning = word_meaning_dict[word] || "Word not found in the dictionary";
  document.getElementById("meaning").textContent = meaning;
}

function suggestWords() {
  var input = document.getElementById("wordInput").value.toLowerCase();
  var suggestions = Object.keys(word_meaning_dict).filter(function(word) {
      return word.includes(input);
  });
  var suggestionList = document.getElementById("suggestions");
  suggestionList.innerHTML = "";
  suggestions.forEach(function(suggestion) {
      var li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", function() {
          document.getElementById("wordInput").value = suggestion;
          searchWord();
          suggestionList.innerHTML = "";
      });
      suggestionList.appendChild(li);
  });
}

function printWords() {
  console.log("Focal Vocabulary Library");
  var words = "";
  var wordSections = {};

  for (var word in word_meaning_dict) {
    var firstLetter = word[0].toUpperCase();

    if (!wordSections[firstLetter]) {
      wordSections[firstLetter] = [];
    }

    wordSections[firstLetter].push(word);
  }

  // Sort sections alphabetically
  var sortedSections = Object.keys(wordSections).sort();

  // Generate HTML markup for the sorted sections
  var columns = [];
  var columnCount = 3;
  var columnWidth = Math.ceil(sortedSections.length / columnCount);

  var column = "<div style='float: left; width: " + (100 / columnCount) + "%;'>";

  var i = 0;
  for (var section of sortedSections) {
    if (i > 0 && i % columnWidth === 0) {
      columns.push(column + "</div>");
      column = "<div style='float: left; width: " + (100 / columnCount) + "%;'>";
    }

    column += "<h2>" + section + "</h2>";

    for (var j = 0; j < wordSections[section].length; j++) {
      column += wordSections[section][j] + "<br>";
    }

    i++;
  }

  // Add the remaining column
  columns.push(column + "</div>");

  // Join the columns and set the content to the 'words' element
  words = columns.join("");
  document.getElementById("words").innerHTML = words;
}
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        searchWord(); // search the word when the user presses Enter
    }
});


// Call on page load
printWords();



