{
  // getter and setter
  class BankAccount {
    public readonly id: number; // can be accessed from outside, but cannot be changed
    public name: string; // public, can be accessed and modified from anywhere
    protected _balance: number; // accessible from this class and any subclasses (not from outside)

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter method - allows us to add money to _balance like a property
    set deposit(amount: number) {
      this._balance = this.balance + amount; // calls the getter to get current balance
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter method - allows us to get balance like a property
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

  // goribManusherAccount.deposit = 0;
  // goribManusherAccount.addDeposit(20); // function call korte hsse

  goribManusherAccount.deposit = 50; // using setter like a property

  // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

  const myBalance = goribManusherAccount.balance; // property er mto kore (using getter like a property)
  console.log(myBalance); // Output: 100
}

/*
  Getter এবং Setter in:
    Getter:
        Getter হচ্ছে এমন একটি method যেটা property-এর মত behave করে।
        get keyword দিয়ে লেখা হয়।
        এটি object এর কোনো private/protected property বাইরে থেকে read করার সুবিধা দেয়।

        get balance() {
        return this._balance;
        }
    এখন object.balance লিখলেই _balance return করবে, function call করার দরকার নেই।

 Setter:
	Setter হচ্ছে এমন একটি method যেটা property-এর মত behave করে কিন্তু value সেট করতে ব্যবহৃত হয়।
	set keyword দিয়ে লেখা হয়।
	এটি private/protected property-তে বাইরে থেকে value assign/set করতে দেয়।
    
    set deposit(amount: number) {
    this._balance = this._balance + amount;
    }
    এখন object.deposit = 50 লিখলেই _balance তে ৫০ যোগ হয়ে যাবে, function call করার দরকার নেই।

  */
