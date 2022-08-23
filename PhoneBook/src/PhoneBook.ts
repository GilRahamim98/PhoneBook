import IPhoneBook from "./IPhoneBook"
import Contact from "./Contact"

class PhoneBook implements IPhoneBook {
    index: number
    size: number
    constructor(private phoneBookArray: Contact[] = []) {
        this.index = 0
        this.size = this.phoneBookArray.length
    }

    [Symbol.iterator](): Iterator<Contact | undefined> {
        return this
    }
    add(contact: Contact): number {
        this.phoneBookArray.push(contact)
        this.size += 1
        return contact.id
    }
    addPhone(id: number, phone: string): void {
        const currentContact = this.phoneBookArray.find(contact => contact.id === id)
        currentContact?.setMyphones(phone)
        console.log("Phone added successfully!")
    }
    get(id: number): Contact | undefined
    get(name: string): Contact[] | undefined
    get(arg: number | string): Contact[] | Contact | undefined {
        if (typeof arg === "number") {
            return this.phoneBookArray.find(contact => contact.id === arg)
        }
        return this.phoneBookArray.filter(contact => contact.name === arg)
    }
    remove(id: number): Contact | undefined {
        const indexOfRemovedContact = this.phoneBookArray.findIndex(contact => {
            return contact.id === id
        })
        if (indexOfRemovedContact !== -1) {
            this.size -= 1
        }
        const removedContact = this.phoneBookArray.splice(indexOfRemovedContact, 1)
        return removedContact[0]
    }
    next() {
        if (this.index === this.phoneBookArray.length) {
            return {
                done: true,
                value: undefined
            }
        }
        return {
            done: false,
            value: this.phoneBookArray[this.index++]
        };
    }

}

function createPhoneBook(): IPhoneBook {
    return new PhoneBook()
}

export default createPhoneBook