"use strict";
let guest_list = ['Ali', 'Farhan', 'Raza', 'Ayesha'];
let not_present = ['Farhan'];
let new_guest = ['Babar Azam'];
guest_list[1] = new_guest[0];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\n', 'We Invited You on Dinner Tomorrow.\nThank You\n');
}
guest_list.unshift('Shaheen', 'Sarfaraz', 'Rizwan');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\n', 'We Invited You on Dinner Tomorrow.\nThank You\n');
}
