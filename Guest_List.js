"use strict";
let Guest_List = ['IMRAN KHAN', 'NAWAZ SHARIF', 'SHABAZ SHARIF', 'ASIF ALI ZARDARI'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!');
}
let absent_guest = 'SHABAZ SHARIF';
let new_guest = 'kamran tessori';
Guest_List[2] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!');
}
console.log(` Mr.${absent_guest} is not coming to the party.`);
