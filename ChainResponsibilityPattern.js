// Handler interface
class OrderHandler {
    constructor() {
      this.nextHandler = null;
    }
  
    setNextHandler(handler) {
      this.nextHandler = handler;
    }
  
    handleOrder(order) {
      if (this.canHandleOrder(order)) {
        this.processOrder(order);
      } else if (this.nextHandler) {
        this.nextHandler.handleOrder(order);
      } else {
        console.log('No handler can process this order.');
      }
    }
  
    canHandleOrder(order) {}
    processOrder(order) {}
  }
  
  // Concrete Handlers
  class SmallOrderHandler extends OrderHandler {
    canHandleOrder(order) {
      return order.amount <= 100;
    }
  
    processOrder(order) {
      console.log(`Processing small order for ${order.amount}`);
    }
  }
  
  class MediumOrderHandler extends OrderHandler {
    canHandleOrder(order) {
      return order.amount <= 500;
    }
  
    processOrder(order) {
      console.log(`Processing medium order for ${order.amount}`);
    }
  }
  
  class LargeOrderHandler extends OrderHandler {
    canHandleOrder(order) {
      return order.amount > 500;
    }
  
    processOrder(order) {
      console.log(`Processing large order for ${order.amount}`);
    }
  }
  
  // Client
  class Order {
    constructor(amount) {
      this.amount = amount;
    }
  }
  
  // Usage
  const smallOrderHandler = new SmallOrderHandler();
  const mediumOrderHandler = new MediumOrderHandler();
  const largeOrderHandler = new LargeOrderHandler();
  
  smallOrderHandler.setNextHandler(mediumOrderHandler);
  mediumOrderHandler.setNextHandler(largeOrderHandler);
  
  const order1 = new Order(80);
  const order2 = new Order(250);
  const order3 = new Order(600);
  
  smallOrderHandler.handleOrder(order1); // Output: "Processing small order for 80"
  smallOrderHandler.handleOrder(order2); // Output: "Processing medium order for 250"
  smallOrderHandler.handleOrder(order3); // Output: "Processing large order for 600"