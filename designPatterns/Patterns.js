// let stock = (function () {
//   let currentStock = 1000;

//   function addStock(amount) {
//     currentStock += amount;
//   }

//   function withdrawStock(amount) {
//     if (amount <= currentStock) {
//       currentStock -= amount;
//     }
//   }
//   function getStock() {

//     console.log(currentStock);
//   }

//   return {
//     addStock,
//     withdrawStock,
//     getStock,
//   };
// })();

// function productFactoryMethod(pName, pPrice) {
//   let stocks = 10;
//   return {
//     pName,
//     pPrice,
//     viewStocks(){
//       console.log(`current stock is ${stocks}`);

//     }
//     ,
//     buy(quantity) {
//       if (quantity <= stocks) {
//         stocks -= quantity;
//         console.log(`${quantity} pieces is bought`);
//       }else{
//         console.error("Sorry, we ran out of stock!");

//       }
//     },
//     refill(quantity) {
//       stocks += quantity;
//       console.log(`${quantity} qty is added`);
//     },
//   };
// }

// let samsung=productFactoryMethod("Samsung Galaxy s24ultra",200000);

// class YoutubeChannel {
//   constructor() {
//     this.subscribers = [];
//   }

//   subscribe(user) {
//     this.subscribers.push(user);
//     user.update("You have subscribed to the channel.")
//   }

//   unsubscribe(user) {
//     this.subscribers = this.subscribers.filter((sub) => sub !== user);
//     user.update("You have unsubscribed the channel.")
//   }

//   notify(msg) {
//     this.subscribers.forEach((user) => {
//       user.update(msg);
//     });
//   }
// }

// class Users {
//   constructor(name) {
//     this.name = name;
//   }
//   update(msg) {
//     console.log(`${this.name},${msg}`);
//   }
// }

// let slaypoint=new YoutubeChannel();
// let usr1=new Users("Ankit")
// let usr2=new Users("Alan")

// slaypoint.subscribe(usr1)
// slaypoint.subscribe(usr2)
// slaypoint.unsubscribe(usr1)


