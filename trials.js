// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printAccount(accountHolder, accountNumber, businessName) {
	
	console.log(`Account Holder Name: ${accountHolder}`);
	console.log(`Account Holder Number: ${accountNumber}`);
	console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header

function showAddresses(array) {
	
	console.log('Addresses:');
	for (let a of array) {
		console.log(a);
	}
}

// Add function to print phone types and numbers

function showPhoneNums(phoneNumbers) {

	console.log('Phone Numbers:');
	for (let p of phoneNumbers) {
		console.log(`${p[0]}: ${p[1]}`);
	}
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();

// Add function to add transactions

function addTransaction(date, amount, transactions) {
	transactions.set(date, amount);
	console.log('Added transaction');
}

// Use the function to add transactions
addTransaction('May-2', -500, transactions);
addTransaction('May-13', 1200, transactions);
addTransaction('May-15', -100, transactions);
addTransaction('May-21', -359, transactions);
addTransaction('May-29', 2200, transactions);

// Add function to show balance status
function showBalanceStatus(balance) {
	if (balance < 0) {
		console.log('YOU ARE OVERDRAWN');
	} else if (0 < balance && balance < 20) {
		console.log('Warning: You are close to zero balance');
	} else {
		console.log('Thank you for your business.');
	}
}

// Add function to show transactions
function showTransactions(transactions, balance) {
	let tType;
	let overdraft = false;

	console.log(`Starting Balance: ${balance}`);
	
	for (let t of transactions) {
		
		if (t[1] > 0) {
			tType = 'Deposit';
		} else {
			tType = 'Withdrawal';
		}

		balance += t[1];

		console.log(`${t[0]} | ${tType} | ${t[1]} | ${balance}`);

		if (balance < 0 && overdraft === false) {
			showBalanceStatus(balance);
			balance -= 25;
			console.log(`You have incurred a $25 overdraft fee. Your new balance is ${balance}`);
			overdraft = true;
		}
	}
	console.log(`Ending Balance: ${balance}`);
	showBalanceStatus(balance);

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
	'accountHolder' : accountHolder,
	'accountNumber' : accountNumber,
	'businessName' : businessName,
	'addresses' : addresses,
	'phoneNumbers' : phoneNumbers,
	'transactions' : transactions,
	'startingBalance' : 26000
};

// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




