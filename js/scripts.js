function Restaurant() {
  this.customerList = [];
}

// Restaurant.prototype.customer = function() {
//   this.customerList.push(customers);
//   console.log(customerList);
// }

var customers = [];

function Customer(customerName, phoneNumber, partySize) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.partySize = partySize;
}


Customer.prototype.customerInfo = function() {
  customers.push([this.customerName,this.phoneNumber,this.partySize]);
  console.log(customers);
  return customers;
}

Customer.prototype.waitTime = function() {
  var parties = [];
  var time = 0;
  for(var i=0; i < customers.length; i++) {
    parties.push(customers[i][2])
    }
    console.log(parties);
    for(var k=0; k < parties.length; k++) {
      if (parties[k] === 2) {
        return 30;
      }
    }
}
