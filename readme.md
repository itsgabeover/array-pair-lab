# Functions on Functions on Functions Guest Starring: Arrays

## Instructions

This exercise is going to get us plenty of reps in with both writing functions, and navigating through arrays. 

* In this lab you'll notice two files, and i`ndex.html` file and an `index.js `file. The i`ndex.html` file is importing the `index.js` file and running its code. 

* You can open the `index.html` file in your browser by navigating to his repo in terminal and typing `open index.html` if you're on a mac (if you're on windows, navigate to this folder in your file explorer, right click on the `index.html` file, select "open with" and choose your browser.) Once you open this file in the browser, open you JS console. You should see a bunch of console log errors that are undefined.

* The console logs are logging the functions we are expecting you to write. When they are written properly in the `index.js` file, the desired result should be console logged in the browser


## DELIVERABLES

1. Write an function called `sortCohortDesc()` that sorts the `ourCohort` array descending alphabetically by first name (Tina's name should be first).

2. Write an function called `shortNames()` that filters the `ourCohort` array to only students whose full name is less that 15 characters.

3. Write a function called `cohortSize()` that tells you how many students there are in the `ourCohort` array

4. Write a function called `locateStudent()` that takes in an arugment of a student name in the form of a string, and returns that student out of the `ourCohort` array.

5. Write an function called `phaseNames()` that iterates over the `coursePhases` array and returns a new array of the `name` value from each object.

6. Write a function that iterates over the `coursePhases()` array and returns all the objects with the language "JavaScript"



----------------------------------------------------------------->



## ADVANCED DELIVERABLES

7. Write a function called `allTheGabes` that iterates over the `ourCohort` array and returns the number of students with the first name "Gabriel"

8. Write a function called `studentAndPhase() that iterates over the `ourCohort` array and returns a new array with each student name plus the string "is currently in Phase 1!"
Example: [
    "Erica Rojo is currently in Phase 1!",
    "Natalie Barba is currently in Phase 1!",
    "Joe Orekhov is currently in Phase 1!",
    "Tina Guliuzza is currently in Phase 1!",
    "Gabriel Rodriguez is currently in Phase 1!",
    "Shawna Akiona is currently in Phase 1!",
    "Charles Oneymem is currently in Phase 1!",
    "Melissa Funk is currently in Phase 1!",
    "Gabriel Miranda is currently in Phase 1!"
]

9. Write a function called `sortPhasesByName()` that sorts the `coursePhases` array alphabetacally by the `name` value on each object