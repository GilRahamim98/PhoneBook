class Contact {
    constructor(private _id: number, private _name: string, private _address: string, private _phones: string[]) { }
    get id(): number {
        return this._id
    }
    get name(): string {
        return this._name
    }
    get address(): string {
        return this._address
    }
    get phones(): string[] {
        return this._phones
    }
    setMyphones(input: string) {
        this._phones.push(input)
    }

}
export default Contact