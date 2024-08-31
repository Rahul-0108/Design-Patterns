class Product {
    constructor() {
      this.name = '';
      this.price = 0;
      this.color = 'white';
      // ... other properties
    }
  
    // Additional methods can be defined here
  }
  
  // Builder for creating Product instances
  class ProductBuilder {
    constructor() {
      this.product = new Product();
    }
  
    setName(name) {
      this.product.name = name;
      return this; // Return the builder for method chaining
    }
  
    setPrice(price) {
      this.product.price = price;
      return this;
    }
  
    setColor(color) {
      this.product.color = color;
      return this;
    }
  
    // Other methods to set additional properties
  
    build() {
      return this.product; // Return the fully constructed product
    }
  }
  
  // Usage
  const builder = new ProductBuilder();
  
  const productA = builder
    .setName('Product A')
    .setPrice(99.99)
    .setColor('blue')
    .build();
  
  const productB = builder
    .setName('Product B')
    .setPrice(49.99)
    .build();
  
  console.log(productA);
  console.log(productB);