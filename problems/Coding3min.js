// task S
class DonationService {
  constructor(){}

  // Donation logic
}

class MoneyDonation {
  constructor(user, paymentMethod) {
    this.user = user;
    this.paymentMethod = paymentMethod;
  }

  donateHundred() {
    this.paymentMethod.makePayment(this.user.name, 100);
  }

  donateThousand() {
    this.paymentMethod.makePayment(this.user.name, 1000);
  }

  donateAnySum(donationSum) {
    if (isNaN(+donationSum)) {
      throw new Error("Incorrect donation sum");
    }

    this.paymentMethod.makePayment(this.user.name, +donationSum);
  }
}

class ApplePay {
  makePayment(userName, price) {
    // payment logic here
    console.log(`ApplePay: ${userName} paid ${price}$`);
  }
}

class GooglePay {
  makePayment(userName, price) {
    // payment logic here
    console.log(`GooglePay: ${userName} paid ${price}$`);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

let appleDonate = new MoneyDonation(new User("John Doe"), new ApplePay());
appleDonate.donateHundred();

let googleDonate = new MoneyDonation(new User("Some user"), new GooglePay());
googleDonate.donateThousand();
googleDonate.donateAnySum(123);