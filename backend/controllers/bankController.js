const Bank = require("../models/bank");

exports.verifyBank = async (req, res, next) => {
 
    const totalPrice = parseFloat(req.body.price);
    const lastName = req.body.lastName;
    const cardNumber = Number(req.body.cardNumber);
    const expDate = req.body.expDate;
    const csv = req.body.csv;
    let check = await Bank.verifyBank(lastName, cardNumber, csv);
    if (check) {
      let exp = new Date(expDate);
      let dateDif = check.expDate - exp;
      if (dateDif > 0) {
        let currentBalance = parseFloat(check.balance) - totalPrice;
        if (currentBalance > 0) {
          const updateBalance = await new Bank(
            check._id,
            check.email,
            check.SSN,
            check.firstName,
            check.lastName,
            check.cardNumber,
            check.expDate,
            check.csv,
            currentBalance
          ).update();
          res.status(200).json({ message: "ordered" });
        } else {
          res.status(200).json({ message: "your balance is low" });
        }
      } else {
        res.status(201).json({ message: "your card is expire" });
      }
    }
  };