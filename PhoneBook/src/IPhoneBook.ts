import Contact from './Contact'
interface IPhoneBook extends Iterable<Contact | undefined> {
    size: number,
    add(contact: Contact): number
    addPhone(id: number, phone: string): void
    get(id: number): Contact | undefined
    get(name: string): Contact[] | undefined
    remove(id: number): Contact | undefined

    next(value?: string): { done: boolean, value?: Contact }
    // nameContains(input: string): void
}


export default IPhoneBook