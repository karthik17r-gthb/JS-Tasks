// Task 1 — Product API & Array Methods

const API_URL = 'https://fakestoreapi.com/products';

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(products => {
    // 1. Display: Product title, Price, Category
    console.log("===== ALL PRODUCTS =====");
    products.forEach(p => {
      console.log(`Title: ${p.title} | Price: $${p.price} | Category: ${p.category}`);
    });

    // 2. Use map() to create a new array containing only title and price
    const mappedProducts = products.map(p => ({ title: p.title, price: p.price }));
    console.log("\n===== MAPPED PRODUCTS (Title & Price Only) =====");
    console.log(mappedProducts);

    // 3. Use filter() to find products with price greater than $100
    const expensiveProducts = products.filter(p => p.price > 100);
    console.log("\n===== PRODUCTS OVER $100 =====");
    console.log(expensiveProducts);

    // 4. Use find() to find the first product in the "electronics" category
    const firstElectronic = products.find(p => p.category === 'electronics');
    console.log("\n===== FIRST ELECTRONICS PRODUCT =====");
    console.log(firstElectronic);

    // 5. Use reduce() to calculate the total price
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    console.log(`\nTotal Price of All Products: $${totalPrice.toFixed(2)}`);

    // 6. Use sort() to arrange products from highest price to lowest
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    console.log("\n===== PRODUCTS SORTED BY PRICE (HIGHEST TO LOWEST) =====");
    console.log(sortedProducts);
  })
  .catch(error => {
    // Handle API errors
    console.error("API Error encountered:", error.message);
  })
  .finally(() => {
    // Completion message
    console.log("\nOperation completed successfully.");
  });


//   Task 2 — Product Category Dashboard

function generateDashboard(products) {
  const totalProducts = products.length;

  // Count categories using reduce
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  // Sort by price to easily find highest and lowest
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  const lowestPrice = sortedByPrice[0].price;
  const highestPrice = sortedByPrice[sortedByPrice.length - 1].price;

  // Calculate average using reduce
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalPrice / totalProducts;

  // Helper function to capitalize category names for the dashboard
  const formatCategory = (str) => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Output using Template Literals
  console.log(`===== PRODUCT DASHBOARD =====

Total Products: ${totalProducts}

${Object.entries(categoryCounts).map(([cat, count]) => `${formatCategory(cat)}: ${count}`).join('\n')}

Highest Price: $${highestPrice.toFixed(2)}
Lowest Price: $${lowestPrice.toFixed(2)}
Average Price: $${averagePrice.toFixed(2)}`);
}

fetch(API_URL)
  .then(res => res.json())
  .then(data => generateDashboard(data))
  .catch(err => console.error("Error loading dashboard:", err));


//   Task 3 — User & Post API

const USERS_API = 'https://jsonplaceholder.typicode.com/';
const POSTS_API = 'https://jsonplaceholder.typicode.com/';

// Fetch Users Data safely
fetch(USERS_API)
  .then(res => {
    // If the server returns an HTML error page, stop here and throw an error
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }
    
    // Check if the content type is actually JSON
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we didn't get JSON from the server!");
    }
    
    return res.json();
  })
  .then(users => {
    console.log("===== USER NAMES =====");
    users.forEach(u => console.log(u.name));

    console.log("\n===== USER NAMES & EMAILS =====");
    users.forEach(u => console.log(`${u.name} (${u.email})`));

    console.log("\n===== FIND USER WITH ID 5 =====");
    const user5 = users.find(u => u.id === 5);
    console.log(user5);

    console.log("\n===== FILTER USERS FROM CITY: 'Roscoeview' =====");
    const targetCity = 'Roscoeview'; 
    const filteredUsers = users.filter(u => u.address && u.address.city === targetCity);
    console.log(filteredUsers);
  })
  .catch(err => {
    // This will now catch the error cleanly without breaking your app
    console.error("Users API Error handled:", err.message);
  });



//   Task 4 — API + Search

function searchProducts() {
  const categoryInput = prompt("Enter product category (e.g., electronics, jewelery, men's clothing, women's clothing):");
  const maxPriceInput = parseFloat(prompt("Enter maximum price (e.g., 500):"));

  if (!categoryInput || isNaN(maxPriceInput)) {
    console.log("Invalid input provided.");
    return;
  }

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      // Clean up string input for a safer match
      const targetCategory = categoryInput.trim().toLowerCase();

      const matchedProducts = products.filter(p => {
        return p.category.toLowerCase() === targetCategory && p.price <= maxPriceInput;
      });

      console.log(`\n===== RESULTS FOR: ${categoryInput} Under $${maxPriceInput} =====`);
      if (matchedProducts.length === 0) {
        console.log("No products match your criteria.");
      } else {
        matchedProducts.forEach(p => {
          console.log(`- ${p.title} ($${p.price})`);
        });
      }
    })
    .catch(err => console.error("Search failed:", err));
}

// Execute the search function
searchProducts();


// Task 5 — API Shopping Cart

function startShoppingCart() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      console.log("===== AVAILABLE PRODUCTS =====");
      products.forEach(p => console.log(`ID: ${p.id} | ${p.title} - $${p.price}`));

      const cart = [];
      let shopping = true;

      while (shopping) {
        const input = prompt("Enter the ID of the product you want to add to your cart (or type 'checkout' to finish):");
        
        if (!input || input.toLowerCase() === 'checkout') {
          shopping = false;
        } else {
          const productId = parseInt(input);
          const foundProduct = products.find(p => p.id === productId);

          if (foundProduct) {
            cart.push(foundProduct);
            console.log(`Added to cart: ${foundProduct.title}`);
          } else {
            alert("Invalid Product ID. Please try again.");
          }
        }
      }

      // Calculate initial total using reduce()
      const rawTotal = cart.reduce((sum, item) => sum + item.price, 0);
      
      // Calculate discount tiers
      let discountRate = 0;
      if (rawTotal > 200) {
        discountRate = 0.20; // 20%
      } else if (rawTotal > 100) {
        discountRate = 0.10; // 10%
      }

      const discountAmount = rawTotal * discountRate;
      const finalAmount = rawTotal - discountAmount;

      console.log("\n===== FINAL RECEIPT =====");
      console.log(`Items in cart: ${cart.length}`);
      console.log(`Subtotal: $${rawTotal.toFixed(2)}`);
      console.log(`Discount Applied: ${discountRate * 100}% (-$${discountAmount.toFixed(2)})`);
      console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
    })
    .catch(err => console.error("Error managing shopping cart:", err));
}

// Start the shopping experience
startShoppingCart();


// Task 6 — FakeStore Product Report

const PRODUCT_REPORT_API_URL = 'https://fakestoreapi.com/products';

// 1. Fetch API
fetch(PRODUCT_REPORT_API_URL)
  // 2. Convert response using .json()
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(products => {
    // Start generating the report data
    const totalProducts = products.length;

    // 4. Create product names array using map()
    const productNames = products.map(p => p.title);

    // 5. Filter expensive products (price > 100) using filter()
    const expensiveProducts = products.filter(p => p.price > 100);

    // 6. Find electronics product using find()
    const electronicsProduct = products.find(p => p.category === 'electronics');

    // 7. Calculate total price using reduce()
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

    // 8. Check products using some() and every()
    const hasProductAbove500 = products.some(p => p.price > 500);
    const allProductsAbove1 = products.every(p => p.price > 1);

    // 9. Sort from Highest price → lowest price
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);

    // ===== PRINT EXPECTED FINAL OUTPUT =====
    console.log("========== PRODUCT REPORT ==========\n");
    
    console.log(`Total Products: ${totalProducts}\n`);

    // 3. Display all product names from the map array using forEach()
    console.log("Product Names:");
    productNames.forEach(name => console.log(`- ${name}`));
    
    console.log("\nProducts Above $100:");
    expensiveProducts.forEach(p => console.log(`- ${p.title} ($${p.price})`));

    console.log("\nElectronics Product:");
    if (electronicsProduct) {
      console.log(`- ${electronicsProduct.title} (Category: ${electronicsProduct.category})`);
    } else {
      console.log("- None found");
    }

    console.log(`\nTotal Product Value:\n$${totalPrice.toFixed(2)}\n`);

    console.log(`Any Product Above $500:\n${hasProductAbove500}\n`);

    console.log(`All Products Above $1:\n${allProductsAbove1}\n`);

    console.log("Highest → Lowest:");
    sortedProducts.forEach(p => console.log(`- $${p.price.toFixed(2)}: ${p.title}`));
  })
  // 10. Error handling using .catch()
  .catch(error => {
    console.error("An error occurred while fetching the report:", error.message);
  })
  // 10. Completion message using .finally()
  .finally(() => {
    console.log("\n====================================");
    console.log("Product Report Generation Complete.");
  });


