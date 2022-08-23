import IPhoneBook from "./IPhoneBook"
import Contact from "./Contact"
class PhoneBook implements IPhoneBook {
    constructor(private phoneBookArray: Contact[] = []) { }
    size: number = this.phoneBookArray.length
    add(contact: Contact): number {
        this.phoneBookArray.push(contact)
        return contact.id
    }
    addPhone(id: number, phone: string): void {
        const currentContact = this.phoneBookArray.find(contact => contact.id === id)
        currentContact?.phones.push(phone)
        console.log("Phone added successfully!")
    }
    get(id: number): Contact | undefined
    get(name: string): Contact | undefined
    get(arg: number | string): Contact | undefined {
        if (typeof arg === "number") {
            return this.phoneBookArray.find(contact => contact.id === arg)
        }
        return this.phoneBookArray.find(contact => contact.name === arg)
    }
    remove(id: number): Contact | undefined {
        const indexOfRemovedContact = this.phoneBookArray.findIndex(contact => {
            return contact.id === id
        })
        const removedContact = this.phoneBookArray.splice(indexOfRemovedContact, 1)
        return removedContact[0]
    }
}

function createPhoneBook(): IPhoneBook {
    return new PhoneBook()
}

export default createPhoneBook