import assert from 'assert';

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

//Tests

try {
    const customer = new BankCustomer('John Doe', '3579');
    assert.equal(typeof customer.getName, 'function');
    assert.equal(typeof customer.verifyPinInput, 'function');
    assert.equal(customer.getName(), 'John Doe');
    assert.ok(customer.verifyPinInput('3579'));

    console.log("Tous les tests sont validés ✅");
} catch (error) {
    console.log("Au moins un des tests a échoué ! ", error);
}
