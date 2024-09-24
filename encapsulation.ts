class BankCustomer{
    private name : string;
    private secretCBCode: string;

    constructor(name: string, secretCBCode: string){
        this.name = name;
        this.secretCBCode = secretCBCode;
    }

    public getName(): string {
        return this.name;
    }

    public verifyPinInput(code : string) : boolean {
        return code ? this.secretCBCode === code : false;
    }
}
