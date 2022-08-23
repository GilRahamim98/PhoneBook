"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneBook {
    constructor(phoneBookArray = []) {
        this.phoneBookArray = phoneBookArray;
        // this.index = 0
        this.size = this.phoneBookArray.length;
    }
    add(contact) {
        this.phoneBookArray.push(contact);
        this.size += 1;
        return contact.id;
    }
    addPhone(id, phone) {
        const currentContact = this.phoneBookArray.find(contact => contact.id === id);
        currentContact === null || currentContact === void 0 ? void 0 : currentContact.setMyphones(phone);
        console.log("Phone added successfully!");
    }
    get(arg) {
        if (typeof arg === "number") {
            return this.phoneBookArray.find(contact => contact.id === arg);
        }
        return this.phoneBookArray.filter(contact => contact.name === arg);
    }
    remove(id) {
        const indexOfRemovedContact = this.phoneBookArray.findIndex(contact => {
            return contact.id === id;
        });
        if (indexOfRemovedContact !== -1) {
            this.size -= 1;
        }
        const removedContact = this.phoneBookArray.splice(indexOfRemovedContact, 1);
        return removedContact[0];
    }
}
function createPhoneBook() {
    return new PhoneBook();
}
exports.default = createPhoneBook;
