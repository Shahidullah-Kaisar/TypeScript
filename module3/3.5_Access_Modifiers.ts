// Access Modifiers Example
{

class BankAccount {
    // Public and readonly: can be accessed anywhere, but cannot be modified after initialization
    public readonly id: number;
  
    // Public: can be accessed and modified from anywhere
    public name: string;
  
    // Private: can only be accessed and modified inside this class
    private _balance: number;
  
    // If you used protected instead of private, subclasses would also be able to access it
    // protected _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
  
    // Public method: can be accessed from outside the class
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
  
    // Public method: allows outside access to the private balance
    public getBalance() {
      return this._balance;
    }
  }
  
  // A subclass of BankAccount
  class StudentAccount extends BankAccount {
    test() {
      // ❌ this._balance; // Error: '_balance' is private and only accessible within BankAccount
  
      // ✅ If _balance was protected instead of private, we could do this:
      // console.log(this._balance); 
    }
  }
  
  // Create an instance of BankAccount
  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  
  // Call public method to deposit money
  goribManusherAccount.addDeposit(20);
  
  // Get the balance using the public method
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance); // Output: 40
  

}