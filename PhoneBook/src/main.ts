import createPhoneBook from "./PhoneBook"
import Contact from "./Contact"

const newPhoneBook = createPhoneBook()

newPhoneBook.add(new Contact(1, "Roza", "Olive 19,Oranit", ["0525381648", "035526325"]))
newPhoneBook.add(new Contact(2, "Dana", "Sabon 1,Haifa", ["0525381647"]))
newPhoneBook.add(new Contact(3, "Robert", "Golani 17,Ashdod", ["0525381612", "035526855"]))
newPhoneBook.add(new Contact(4, "Roza", "Balfur 22,Bat Yam", ["0525381675", "035526327", "035526377"]))
newPhoneBook.add(new Contact(5, "Ran", "Ben Gurion 45,Holon", ["0525381645", "035513578"]))
newPhoneBook.add(new Contact(6, "Omer", "Hadar 4,Yafo", ["0525381634", "046698745"]))
newPhoneBook.add(new Contact(7, "Roza", "Hanarkis 7,Oranit", ["0525323648", "027786325"]))
newPhoneBook.add(new Contact(8, "Omer", "Party 7,Eilat", ["0525312648", "0509632566"]))
newPhoneBook.add(new Contact(9, "Dan", "Givati 78,Holon", ["0525323548", "0545526322"]))
newPhoneBook.add(new Contact(10, "David", "Olive 2,Oranit", ["0525345648", "034326325", "035426323"]))
newPhoneBook.add(new Contact(11, "Dana", "Yosaftal 30,Bat Yam", ["0525312348"]))

function checkForShahar() {
    console.log("Size before insert new contacts:", newPhoneBook.size)
    /*Adding 2 new contacts: 1 with existing name, 1 with new name and checking the size is updated*/
    newPhoneBook.add(new Contact(12, "Ran", "Dror 32,Jerusalm", ["0536812345"]))
    newPhoneBook.add(new Contact(13, "Yakov", "Caldera 12,Ramat Gan", ["0536812345"]))
    console.log("Size after the insert :", newPhoneBook.size)
    /*Adding phone to existing contact*/
    newPhoneBook.addPhone(2, "0536874562")
    console.log("Checking if he get the new phone:", newPhoneBook.get(2))
    /*Getting contacts by name and adding to them the same phone*/
    const rozaArray = newPhoneBook.get("Roza")
    let lastId: number
    if (rozaArray != undefined) {
        for (let contact of rozaArray) {
            newPhoneBook.addPhone(contact.id, "047963256")
        }
        lastId = rozaArray[rozaArray.length - 1].id

    } else {
        //If it doesnt found any contact with this name and just for checking put 11
        lastId = 11
    }

    /*Removing the last contact (of the previous contacts from #8) by id*/
    console.log("The deleted contact: ", newPhoneBook.remove(lastId))
    console.log("The size after: ", newPhoneBook.size);

}
checkForShahar()

for (const contact of newPhoneBook) {
    console.log(contact)
}
// if(newPhoneBook.nameContains("Roza"))
// for (const contact of newPhoneBook.nameContains("Roza")) {
//     console.log(contact);

// }