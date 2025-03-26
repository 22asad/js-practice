// Currency converter
// Currency Converter using Functions, Scope & Closures
function currencyConverter() {
    // Private exchange rates (stored in a closure)
    const exchangeRates = {
      USD: 1,       // Base Currency
      PKR: 277.50,  // US Dollar to Pakistani Rupee
      EUR: 0.92,    // US Dollar to Euro
      GBP: 0.78,    // US Dollar to British Pound
      INR: 82.73    // US Dollar to Indian Rupee
    };
  
    // Function to convert currency
    return function (amount, fromCurrency, toCurrency) {
      fromCurrency = fromCurrency.toUpperCase();
      toCurrency = toCurrency.toUpperCase();
  
      if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        return "Invalid currency code!";
      }
  
      // Convert amount to USD first, then to target currency
      let amountInUSD = amount / exchangeRates[fromCurrency];
      let convertedAmount = amountInUSD * exchangeRates[toCurrency];
  
      return `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    };
  }
  
  // Create an instance of the converter
  const convert = currencyConverter();
  
  // Testing the converter
  console.log(convert(100, "USD", "PKR")); // Output: 100 USD = 27750 PKR
  console.log(convert(5000, "PKR", "USD")); // Output: 5000 PKR = 18.02 USD
  console.log(convert(50, "EUR", "GBP")); // Output: 50 EUR = 42.39 GBP
  console.log(convert(1000, "INR", "EUR")); // Output: 1000 INR = 11.16 EUR
  console.log(convert(200, "USD", "XYZ")); // Output: Invalid currency code!
  