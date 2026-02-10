/**
 * JAVASCRIPT DATA TYPES, METHODS AND PROPERTIES GUIDE FOR NODE.JS
 * =============================================================
 * A comprehensive reference for beginners with practical examples
 */

/**
 * STRING METHODS AND PROPERTIES
 * ============================
 * Strings are one of the most frequently used data types
 */

// String creation
const str1 = "Hello world";
const str2 = 'Single quotes work too';
const str3 = `Template literals allow ${str1}`;

// String properties
console.log('Length of string:', str1.length); // 11

// String methods - accessing characters
console.log(str1.charAt(0)); // "H"
console.log(str1[0]); // "H" (array-like access)

// Searching within strings
console.log(str1.indexOf('world')); // 6
console.log(str1.includes('Hello')); // true
console.log(str1.startsWith('Hello')); // true
console.log(str1.endsWith('world')); // true
console.log(str1.search(/world/)); // 6 (with regex)

// Extracting substrings
console.log(str1.slice(0, 5)); // "Hello"
console.log(str1.slice(-5)); // "world" (negative index counts from end)
console.log(str1.substring(0, 5)); // "Hello"
console.log(str1.substr(6, 5)); // "world" (deprecated)

// Case modification
console.log(str1.toUpperCase()); // "HELLO WORLD"
console.log(str1.toLowerCase()); // "hello world"

// Splitting strings
console.log('a,b,c'.split(',')); // ["a", "b", "c"]
console.log('a b c'.split(' ')); // ["a", "b", "c"]
console.log('a\nb\nc'.split('\n')); // ["a", "b", "c"]

// Combining strings
console.log('Hello'.concat(' ', 'world')); // "Hello world"
console.log('Hello' + ' ' + 'world'); // "Hello world"

// Trimming whitespace
console.log('  Hello world  '.trim()); // "Hello world"
console.log('  Hello world  '.trimStart()); // "Hello world  "
console.log('  Hello world  '.trimEnd()); // "  Hello world"

// Replacing content
console.log(str1.replace('world', 'there')); // "Hello there"
console.log(str1.replaceAll('l', 'L')); // "HeLLo worLd"

// String padding
console.log('5'.padStart(3, '0')); // "005"
console.log('5'.padEnd(3, '0')); // "500"

// String repetition
console.log('='.repeat(10)); // "=========="

// Real-world examples
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}
console.log(slugify('Hello World! How are you?')); // "hello-world-how-are-you"

function maskCreditCard(cardNumber) {
  const last4 = cardNumber.slice(-4);
  return '*'.repeat(cardNumber.length - 4) + last4;
}
console.log(maskCreditCard('1234567890123456')); // "************3456"

/**
 * NUMBER METHODS AND PROPERTIES
 * ===========================
 */

// Number creation
const num1 = 42;
const num2 = 3.14159;
const num3 = 123e5; // 12300000
const num4 = 123e-5; // 0.00123

// Number properties
console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest possible number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // Not a Number

// Number validation
console.log(Number.isFinite(42)); // true
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true

// Parsing strings to numbers
console.log(parseInt('42px')); // 42
console.log(parseFloat('3.14')); // 3.14
console.log(Number('42')); // 42

// Number conversion methods
const price = 42.9599;
console.log(price.toFixed(2)); // "42.96" (string with 2 decimal places)
console.log(price.toPrecision(4)); // "42.96" (string with 4 significant digits)
console.log(price.toString()); // "42.9599"
console.log(price.toString(2)); // Binary representation
console.log(price.toString(16)); // Hex representation

// Math object (common companion to Number)
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.abs(-5)); // 5
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1

// Real-world examples
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}
console.log(formatCurrency(1234.56)); // "$1,234.56"

/**
 * BOOLEAN METHODS AND PROPERTIES
 * =============================
 */

// Boolean creation
const bool1 = true;
const bool2 = false;
const bool3 = Boolean(1); // true
const bool4 = Boolean(0); // false

// Boolean conversion
console.log(bool1.toString()); // "true"
console.log(!bool1); // false (logical NOT)

// Truthy and falsy values
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('hello')); // true
console.log(Boolean(42)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// Real-world examples
function hasPermission(user, requiredRole) {
  return user && user.roles && user.roles.includes(requiredRole);
}

const user = { roles: ['admin', 'editor'] };
console.log(hasPermission(user, 'admin')); // true
console.log(hasPermission(null, 'admin')); // false

/**
 * ARRAYS METHODS AND PROPERTIES
 * ===========================
 * Arrays are extremely important in JavaScript and Node.js
 */

// Array creation
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const arr4 = Array.of(1, 2, 3); // [1, 2, 3]

// Array properties
console.log(arr1.length); // 5

// Accessing elements
console.log(arr1[0]); // 1
console.log(arr1.at(-1)); // 5 (last element)

// Adding/removing elements (mutating methods)
const fruits = ['apple', 'banana', 'orange'];
fruits.push('mango'); // Add to end
console.log(fruits); // ['apple', 'banana', 'orange', 'mango']

fruits.pop(); // Remove from end
console.log(fruits); // ['apple', 'banana', 'orange']

fruits.unshift('strawberry'); // Add to start
console.log(fruits); // ['strawberry', 'apple', 'banana', 'orange']

fruits.shift(); // Remove from start
console.log(fruits); // ['apple', 'banana', 'orange']

fruits.splice(1, 1); // Remove 1 element starting at index 1
console.log(fruits); // ['apple', 'orange']

fruits.splice(1, 0, 'kiwi', 'pear'); // Insert elements at index 1
console.log(fruits); // ['apple', 'kiwi', 'pear', 'orange']

// Non-mutating methods that return new arrays
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate a value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find - get first element that passes a test
const found = numbers.find(num => num > 3);
console.log(found); // 4

// findIndex - get index of first element that passes a test
const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3

// some - test if at least one element passes
console.log(numbers.some(num => num > 4)); // true

// every - test if all elements pass
console.log(numbers.every(num => num < 10)); // true

// Array iteration
numbers.forEach(num => console.log(num)); // 1, 2, 3, 4, 5

// Joining arrays
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];
const combined = [...arr5, ...arr6]; // Spread operator
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr5.concat(arr6)); // [1, 2, 3, 4, 5, 6]

// Finding elements
console.log(numbers.includes(3)); // true
console.log(numbers.indexOf(3)); // 2

// Sorting and reversing
const unsorted = [5, 2, 8, 1, 4];
console.log(unsorted.sort()); // [1, 2, 4, 5, 8]
console.log(unsorted.reverse()); // [8, 5, 4, 2, 1]

// Custom sorting with compare function
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 30 }
];

users.sort((a, b) => a.age - b.age); // Sort by age ascending
console.log(users);

// Converting arrays to strings
console.log(numbers.join()); // "1,2,3,4,5"
console.log(numbers.join('-')); // "1-2-3-4-5"
console.log(numbers.toString()); // "1,2,3,4,5"

// Slicing arrays (non-mutating)
console.log(numbers.slice(1, 4)); // [2, 3, 4]
console.log(numbers.slice(-2)); // [4, 5]

// Flattening arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// Real-world examples
function paginate(items, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
}

const allItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
console.log(paginate(allItems, 1, 2)); // ['item1', 'item2']
console.log(paginate(allItems, 2, 2)); // ['item3', 'item4']

function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

const people = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Boston' },
  { name: 'Charlie', age: 25, city: 'Chicago' }
];

console.log(groupBy(people, 'age'));
// { '25': [{ name: 'Alice', age: 25, city: 'New York' }, 
//          { name: 'Charlie', age: 25, city: 'Chicago' }],
//   '30': [{ name: 'Bob', age: 30, city: 'Boston' }] }

/**
 * OBJECT METHODS AND PROPERTIES
 * ===========================
 * Objects are fundamental in JavaScript
 */

// Object creation
const obj1 = { name: 'John', age: 30 };
const obj2 = new Object();
obj2.name = 'Jane';
obj2.age = 25;

const obj3 = Object.create(null); // No prototype
obj3.name = 'Bob';

// Object properties and methods
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Accessing properties
console.log(person.firstName); // "John"
console.log(person['lastName']); // "Doe"
console.log(person.fullName()); // "John Doe"

// Adding, modifying and deleting properties
person.email = 'john.doe@example.com'; // Add
person.age = 31; // Modify
delete person.age; // Delete

// Checking if property exists
console.log('firstName' in person); // true
console.log(person.hasOwnProperty('firstName')); // true
console.log(person.hasOwnProperty('toString')); // false (inherited)

// Getting object information
console.log(Object.keys(person)); // ['firstName', 'lastName', 'email', 'fullName']
console.log(Object.values(person)); // ['John', 'Doe', 'john.doe@example.com', [Function: fullName]]
console.log(Object.entries(person)); // [['firstName', 'John'], ['lastName', 'Doe'], ...]

// Merging objects
const personDetails = { age: 30, occupation: 'Developer' };
const mergedPerson = { ...person, ...personDetails };
console.log(mergedPerson);

// Alternative merging using Object.assign
const mergedPerson2 = Object.assign({}, person, personDetails);
console.log(mergedPerson2);

// Object iteration
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Freezing and sealing objects
const config = { apiKey: '12345', timeout: 1000 };
Object.freeze(config); // Cannot add, delete, or modify properties
// config.timeout = 2000; // This will not work

const preferences = { theme: 'dark', fontSize: 16 };
Object.seal(preferences); // Can modify values but cannot add or delete properties
preferences.fontSize = 18; // This works
// preferences.language = 'en'; // This will not work

// Object destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName); // "John Doe"

// Real-world examples
function createUser({ username, email, role = 'user' }) {
  return {
    id: Date.now(),
    username,
    email,
    role,
    createdAt: new Date()
  };
}

const newUser = createUser({ username: 'john_doe', email: 'john@example.com' });
console.log(newUser);

function filterObjectByKeys(obj, keysToKeep) {
  return Object.keys(obj)
    .filter(key => keysToKeep.includes(key))
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
}

const user2 = { id: 123, name: 'Alice', email: 'alice@example.com', password: 'secret' };
const publicUser = filterObjectByKeys(user2, ['id', 'name']);
console.log(publicUser); // { id: 123, name: 'Alice' }

/**
 * DATE OBJECT METHODS AND PROPERTIES
 * ================================
 */

// Date creation
const now = new Date(); // Current date and time
const date1 = new Date('2023-04-15'); // From date string
const date2 = new Date(2023, 3, 15); // Year, month (0-based), day
const timestamp = Date.now(); // Current timestamp in milliseconds

// Date conversion
console.log(now.toString()); // "Wed Apr 09 2023 12:00:00 GMT+0000"
console.log(now.toISOString()); // "2023-04-09T12:00:00.000Z"
console.log(now.toLocaleDateString()); // "4/9/2023" (based on locale)
console.log(now.toLocaleTimeString()); // "12:00:00 PM" (based on locale)
console.log(now.toUTCString()); // "Wed, 09 Apr 2023 12:00:00 GMT"

// Getting date components
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 3 (April, 0-based)
console.log(now.getDate()); // 9
console.log(now.getDay()); // Day of week (0-6, where 0 is Sunday)
console.log(now.getHours()); // 12
console.log(now.getMinutes()); // 0
console.log(now.getSeconds()); // 0
console.log(now.getMilliseconds()); // 0
console.log(now.getTime()); // Milliseconds since January 1, 1970

// Setting date components
const birthday = new Date();
birthday.setFullYear(1990);
birthday.setMonth(0); // January (0-based)
birthday.setDate(15);
console.log(birthday);

// Date calculations
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30); // Add 30 days
console.log(futureDate);

// Date difference in days
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}

const startDate = new Date(2023, 3, 1);
const endDate = new Date(2023, 3, 15);
console.log(daysBetween(startDate, endDate)); // 14

// Real-world examples
function formatRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return 'just now';
  if (diffMins < 60) return `${diffMins} minutes ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays < 30) return `${diffDays} days ago`;
  
  return date.toLocaleDateString();
}

const pastDate = new Date();
pastDate.setHours(pastDate.getHours() - 5);
console.log(formatRelativeTime(pastDate)); // "5 hours ago"

/**
 * MAP OBJECT METHODS AND PROPERTIES
 * ================================
 * Maps are key-value collections with better performance and flexibility
 */

// Map creation
const map1 = new Map();
const map2 = new Map([
  ['name', 'John'],
  ['age', 30]
]);

// Adding entries
map1.set('key1', 'value1');
map1.set('key2', 'value2');
map1.set(42, 'numeric key'); // Keys can be any type
map1.set({}, 'object key'); // Even objects can be keys

// Getting values
console.log(map1.get('key1')); // "value1"
console.log(map1.size); // 4

// Checking if key exists
console.log(map1.has('key1')); // true
console.log(map1.has('nonexistent')); // false

// Deleting entries
map1.delete('key1');
console.log(map1.has('key1')); // false

// Clearing the map
map1.clear();
console.log(map1.size); // 0

// Iterating over maps
const userRoles = new Map([
  ['john', 'admin'],
  ['jane', 'editor'],
  ['bob', 'user']
]);

// forEach
userRoles.forEach((role, username) => {
  console.log(`${username}: ${role}`);
});

// entries
for (const [username, role] of userRoles.entries()) {
  console.log(`${username}: ${role}`);
}

// keys and values
console.log([...userRoles.keys()]); // ['john', 'jane', 'bob']
console.log([...userRoles.values()]); // ['admin', 'editor', 'user']

// Real-world examples
function cacheWithTimeout() {
  const cache = new Map();
  
  return {
    set(key, value, ttlMs) {
      const expiry = Date.now() + ttlMs;
      cache.set(key, { value, expiry });
      
      // Auto-cleanup
      setTimeout(() => {
        if (cache.has(key) && cache.get(key).expiry <= Date.now()) {
          cache.delete(key);
        }
      }, ttlMs);
    },
    
    get(key) {
      if (!cache.has(key)) return null;
      
      const item = cache.get(key);
      if (item.expiry <= Date.now()) {
        cache.delete(key);
        return null;
      }
      
      return item.value;
    },
    
    has(key) {
      return this.get(key) !== null;
    }
  };
}

const cache = cacheWithTimeout();
cache.set('user:123', { name: 'John' }, 5000); // Cache for 5 seconds
console.log(cache.get('user:123')); // { name: 'John' }
// After 5 seconds: cache.get('user:123') would return null

/**
 * SET OBJECT METHODS AND PROPERTIES
 * ================================
 * Sets are collections of unique values
 */

// Set creation
const set1 = new Set();
const set2 = new Set([1, 2, 3, 2, 1]); // Duplicates are automatically removed

console.log(set2.size); // 3

// Adding values
set1.add('a');
set1.add('b');
set1.add('a'); // Duplicate not added

console.log(set1.size); // 2

// Checking if value exists
console.log(set1.has('a')); // true
console.log(set1.has('c')); // false

// Deleting values
set1.delete('a');
console.log(set1.has('a')); // false

// Clearing the set
set1.clear();
console.log(set1.size); // 0

// Iterating over sets
const uniqueTags = new Set(['javascript', 'node', 'react', 'javascript']);

// forEach
uniqueTags.forEach(tag => {
  console.log(tag);
});

// entries, keys, values
// Note: For sets, keys and values are the same
console.log([...uniqueTags.values()]); // ['javascript', 'node', 'react']

// Real-world examples
function findUniqueElements(array) {
  return [...new Set(array)];
}

console.log(findUniqueElements([1, 2, 3, 2, 1, 4, 5, 4])); // [1, 2, 3, 4, 5]

function getIntersection(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter(item => set1.has(item));
}

console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

/**
 * PROMISES AND ASYNC/AWAIT
 * =======================
 * Essential for Node.js asynchronous operations
 */

// Promise creation
const simplePromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    resolve('Operation completed');
  } else {
    reject(new Error('Operation failed'));
  }
});

// Promise handling
simplePromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Promise settled'));

// Chaining promises
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: 'User ' + id });
    }, 100);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' }
      ]);
    }, 100);
  });
}

fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => console.error(error));

// Promise.all - wait for all promises to resolve
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then(users => console.log('All users:', users))
  .catch(error => console.error(error));

// Promise.race - resolve or reject as soon as one promise settles
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('First'), 200)),
  new Promise(resolve => setTimeout(() => resolve('Second'), 100))
])
  .then(result => console.log('Race winner:', result)) // "Second"
  .catch(error => console.error(error));

// Promise.allSettled - wait for all promises to settle
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Failure'),
  Promise.resolve('Another success')
])
  .then(results => console.log('All settled:', results));

// Promise.any - resolves as soon as one promise fulfills
Promise.any([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Fail')), 100)),
  new Promise(resolve => setTimeout(() => resolve('Success'), 200))
])
  .then(result => console.log('Any result:', result)) // "Success"
  .catch(error => console.error(error));

// Async/await syntax
async function getUserWithPosts(userId) {
  try {
    // Await suspends execution until promise resolves
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    
    return { user, posts };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Call async function
getUserWithPosts(1)
  .then(result => console.log('User with posts:', result))
  .catch(error => console.error(error));

// Parallel execution with async/await
async function getMultipleUsers(userIds) {
  try {
    const promises = userIds.map(id => fetchUser(id));
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Real-world examples
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);
      lastError = error;
      
      if (attempt < maxRetries) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(`Operation failed after ${maxRetries} attempts: ${lastError.message}`);
}

// Example usage:
async function flakyOperation() {
  const random = Math.random();
  if (random < 0.7) throw new Error('Random failure');
  return 'Success!';
}

retryOperation(flakyOperation)
  .then(result => console.log('Retry succeeded:', result))
  .catch(error => console.error('Retry final error:', error));

/**
 * BUFFER OBJECT (NODE.JS SPECIFIC) - CONTINUED
 * ==========================================
 */

// Modifying buffers (continued)
buffer1[0] = 72; // ASCII for 'H'
buffer1[1] = 105; // ASCII for 'i'
console.log(buffer1.toString()); // "Hi" followed by zeros

// Copying buffers
const target = Buffer.alloc(buffer2.length);
buffer2.copy(target);
console.log(target.toString()); // "Hello world"

// Slicing buffers (creates a view, not a copy)
const slice = buffer2.slice(0, 5);
console.log(slice.toString()); // "Hello"
slice[0] = 74; // ASCII for 'J'
console.log(buffer2.toString()); // "Jello world" (original is modified)

// Concatenating buffers
const combined = Buffer.concat([buffer2, Buffer.from(' of buffers')]);
console.log(combined.toString()); // "Hello world of buffers"

// Comparing buffers
console.log(Buffer.compare(buffer1, buffer2)); // -1, 0, or 1 (like string comparison)
console.log(buffer1.equals(buffer2)); // false

// Iterating over buffers
for (const byte of buffer2) {
  console.log(byte); // prints each byte value
}

// Converting to array
const array = [...buffer2]; // Array of byte values
console.log(array); // [72, 101, 108, 108, 111, ...]

// Buffer.map() (using Array methods by converting first)
const mappedArray = Array.from(buffer2).map(byte => byte + 1);
const mappedBuffer = Buffer.from(mappedArray);
console.log(mappedBuffer.toString()); // "Ifmmp!xpsme" (each char code incremented)

// Buffer.reduce() (using Array methods)
const sum = Array.from(buffer2).reduce((total, byte) => total + byte, 0);
console.log(`Sum of byte values: ${sum}`);

// Buffer.filter() (using Array methods)
const filtered = Buffer.from(Array.from(buffer2).filter(byte => byte > 100));
console.log(filtered.toString()); // "ello world" (removed 'H')

// Real-world examples
function encodeBase64Url(buffer) {
  return buffer.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

const token = Buffer.from('some-secret-data');
console.log(encodeBase64Url(token)); // Base64url encoded string

function checkFileSignature(buffer, signature) {
  if (buffer.length < signature.length) return false;
  
  const fileStart = buffer.slice(0, signature.length);
  return fileStart.equals(Buffer.from(signature));
}

// Example usage:
const pngSignature = [0x89, 0x50, 0x4E, 0x47];
const fileBuffer = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
console.log(`Is PNG file: ${checkFileSignature(fileBuffer, pngSignature)}`); // true

/**
 * ARRAY FUNCTIONAL METHODS (MAP, REDUCE, FILTER, ETC.)
 * =================================================
 * Deeper dive into essential higher-order array methods
 */

// map() - transform each element and return new array
const numbers = [1, 2, 3, 4, 5];

// Basic mapping
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Map with index and array parameters
const withIndexes = numbers.map((num, index, array) => {
  return `Element ${index} of ${array.length}: ${num}`;
});
console.log(withIndexes);

// Map objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

const usernames = users.map(user => user.name);
console.log(usernames); // ['Alice', 'Bob', 'Charlie']

// Transforming object structure
const formattedUsers = users.map(({ id, name, age }) => ({
  userId: id,
  displayName: name.toUpperCase(),
  isAdult: age >= 18
}));
console.log(formattedUsers);

// reduce() - accumulate a single value
// Basic sum
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Different initial value
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log(product); // 120

// Building objects with reduce
const usersByIdObject = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersByIdObject);
// { '1': { id: 1, name: 'Alice', age: 25 }, ... }

// Counting occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

// Flattening arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.reduce((flat, current) => [...flat, ...current], []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Chaining reduces
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 30 },
  { category: 'B', value: 40 },
  { category: 'C', value: 50 }
];

const categoryTotals = data.reduce((totals, item) => {
  totals[item.category] = (totals[item.category] || 0) + item.value;
  return totals;
}, {});
console.log(categoryTotals); // { A: 40, B: 60, C: 50 }

// filter() - create a new array with elements that pass a test
// Basic filtering
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Object filtering
const youngUsers = users.filter(user => user.age < 30);
console.log(youngUsers); // [{ id: 1, name: 'Alice', age: 25 }]

// Combining filter with other methods (filter-map chain)
const doubledEvens = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
console.log(doubledEvens); // [4, 8]

// find() and findIndex() - getting the first match
const charlie = users.find(user => user.name === 'Charlie');
console.log(charlie); // { id: 3, name: 'Charlie', age: 35 }

const charlieIndex = users.findIndex(user => user.name === 'Charlie');
console.log(charlieIndex); // 2

// some() and every() - testing array elements
const hasAdults = users.some(user => user.age >= 18);
console.log(hasAdults); // true

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// flat() and flatMap()
const deeplyNested = [1, [2, [3, [4]]]];
console.log(deeplyNested.flat()); // [1, 2, [3, [4]]]
console.log(deeplyNested.flat(2)); // [1, 2, 3, [4]]
console.log(deeplyNested.flat(Infinity)); // [1, 2, 3, 4]

// flatMap combines map and flat
const sentences = ['Hello world', 'Node.js is great'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'Node.js', 'is', 'great']

// indexOf, lastIndexOf, includes
const repeats = [1, 2, 3, 2, 1];
console.log(repeats.indexOf(2)); // 1
console.log(repeats.lastIndexOf(2)); // 3
console.log(repeats.includes(4)); // false

// Real-world examples
// Data transformation pipeline
function processUserData(users) {
  return users
    .filter(user => user.active) // Only active users
    .map(user => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      emailVerified: Boolean(user.emailVerified)
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

const rawUsers = [
  { id: 1, firstName: 'John', lastName: 'Doe', active: true, emailVerified: true },
  { id: 2, firstName: 'Jane', lastName: 'Smith', active: false, emailVerified: false },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', active: true, emailVerified: false }
];

console.log(processUserData(rawUsers));

// Implementing a search function
function searchUsers(users, searchTerm) {
  const term = searchTerm.toLowerCase();
  
  return users.filter(user => {
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(term)
    );
  });
}

console.log(searchUsers(rawUsers, 'jo')); // Finds both John and Johnson

/**
 * STRING ADVANCED METHODS
 * =====================
 * Extra string manipulation techniques
 */

// Working with Unicode and surrogate pairs
const emoji = '😀';
console.log(emoji.length); // 2 (surrogate pair)
console.log([...emoji].length); // 1 (using iterator that's surrogate-pair aware)

// String.fromCharCode and String.fromCodePoint
console.log(String.fromCharCode(65, 66, 67)); // "ABC"
console.log(String.fromCodePoint(128512)); // "😀"

// charCodeAt and codePointAt
const str = 'ABC😀';
console.log(str.charCodeAt(0)); // 65 (A)
console.log(str.codePointAt(3)); // 128512 (😀)

// normalize - handling Unicode normalization
const normalized = 'é'.normalize('NFC');
const decomposed = 'é'.normalize('NFD');
console.log(normalized.length); // 1
console.log(decomposed.length); // 2

// Regular expressions with strings
const text = 'The quick brown fox jumps over the lazy dog.';

// test for pattern
const hasQuick = /quick/.test(text);
console.log(hasQuick); // true

// match - find all matches
const matches = text.match(/[a-z]o[a-z]/g);
console.log(matches); // ['row', 'fox', 'dog']

// search - find position
const position = text.search(/fox/);
console.log(position); // 16

// replace with function
const censored = text.replace(/[aeiou]/gi, match => '*');
console.log(censored); // "Th* q**ck br*wn f*x j*mps *v*r th* l*zy d*g."

// matchAll - iterate through all matches with groups
const regex = /([a-z])o([a-z])/g;
const matchIterator = text.matchAll(regex);
for (const match of matchIterator) {
  console.log(match[0], match[1], match[2]); // e.g., "row", "r", "w"
}

// Template literals and tagged templates
const name = 'John';
const age = 30;

// Basic template
const greeting = `Hello, ${name}! You are ${age} years old.`;

// Tagged template function
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] || '';
    return `${result}${str}<span class="highlight">${value}</span>`;
  }, '');
}

const highlighted = highlight`My name is ${name} and I am ${age} years old.`;
console.log(highlighted);

// Real-world examples
function stripHtml(html) {
  return html.replace(/<[^>]*>?/g, '');
}

const html = '<p>This is <strong>HTML</strong> content.</p>';
console.log(stripHtml(html)); // "This is HTML content."

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Consolidate multiple hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

console.log(generateSlug('This is a Blog Post Title!')); // "this-is-a-blog-post-title"

/**
 * OBJECT ADVANCED METHODS AND PATTERNS
 * ==================================
 */

// Object property descriptors
const person = {};

// Define a property with a descriptor
Object.defineProperty(person, 'name', {
  value: 'John',
  writable: true,     // Can be changed
  enumerable: true,   // Shows up in for...in loops
  configurable: true  // Can be deleted or modified
});

// Define multiple properties
Object.defineProperties(person, {
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  },
  id: {
    value: 'abc123',
    writable: false,  // Read-only
    enumerable: false // Hidden from for...in
  }
});

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, 'id');
console.log(descriptor);

// Object getters and setters
const product = {
  _price: 0,
  
  get price() {
    return `$${this._price.toFixed(2)}`;
  },
  
  set price(value) {
    if (value < 0) throw new Error('Price cannot be negative');
    this._price = value;
  }
};

product.price = 19.99;
console.log(product.price); // "$19.99"

// Object inheritance
const animal = {
  makeSound() {
    console.log('Some animal sound');
  }
};

const dog = Object.create(animal, {
  bark: {
    value: function() {
      console.log('Woof!');
    }
  }
});

dog.makeSound(); // "Some animal sound"
dog.bark(); // "Woof!"

// Check prototype chain
console.log(animal.isPrototypeOf(dog)); // true
console.log(Object.getPrototypeOf(dog) === animal); // true

// Object.assign for mixins
const canSwim = {
  swim() {
    console.log(`${this.name} is swimming`);
  }
};

const canFly = {
  fly() {
    console.log(`${this.name} is flying`);
  }
};

const duck = {
  name: 'Duck'
};

// Add multiple behaviors
Object.assign(duck, canSwim, canFly);
duck.swim(); // "Duck is swimming"
duck.fly(); // "Duck is flying"

// Object methods for reflection
// Get all own property names (including non-enumerable)
console.log(Object.getOwnPropertyNames(person)); // ["name", "age", "id"]

// Get only enumerable own property names
console.log(Object.keys(person)); // ["name", "age"]

// Get own and inherited property names
function getAllPropertyNames(obj) {
  const props = new Set();
  let current = obj;
  
  while (current) {
    Object.getOwnPropertyNames(current).forEach(prop => props.add(prop));
    current = Object.getPrototypeOf(current);
  }
  
  return [...props];
}

console.log(getAllPropertyNames(dog)); // Includes Object prototype methods

// Real-world examples
// Simple validation schema
function createValidator(schema) {
  return function validate(data) {
    const errors = {};
    
    for (const [key, rules] of Object.entries(schema)) {
      const value = data[key];
      
      if (rules.required && (value === undefined || value === null || value === '')) {
        errors[key] = `${key} is required`;
        continue;
      }
      
      if (value !== undefined) {
        if (rules.type && typeof value !== rules.type) {
          errors[key] = `${key} must be a ${rules.type}`;
        }
        
        if (rules.min !== undefined && value < rules.min) {
          errors[key] = `${key} must be at least ${rules.min}`;
        }
        
        if (rules.max !== undefined && value > rules.max) {
          errors[key] = `${key} must be at most ${rules.max}`;
        }
        
        if (rules.pattern && !rules.pattern.test(value)) {
          errors[key] = `${key} has invalid format`;
        }
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
}

const userValidator = createValidator({
  username: { 
    required: true, 
    type: 'string',
    pattern: /^[a-z0-9_]{3,16}$/i
  },
  age: {
    required: true,
    type: 'number',
    min: 18,
    max: 120
  }
});

console.log(userValidator({
  username: 'john_doe',
  age: 16
}));

// Deep object copy
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepCopy(item));
  }
  
  if (obj instanceof Object) {
    const copy = {};
    Object.keys(obj).forEach(key => {
      copy[key] = deepCopy(obj[key]);
    });
    return copy;
  }
  
  return obj;
}

const original = { 
  name: 'John',
  details: { age: 30, address: { city: 'New York' } },
  hobbies: ['reading', 'swimming']
};

const copy = deepCopy(original);
copy.details.address.city = 'Boston';
console.log(original.details.address.city); // "New York" (unchanged)

/**
 * ASYNC PATTERNS AND UTILITIES
 * ==========================
 * Advanced patterns for working with asynchronous code
 */

// Promisify callback-based functions
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Example with a callback function
function readFileCallback(path, callback) {
  setTimeout(() => {
    if (path.includes('error')) {
      callback(new Error('File not found'));
    } else {
      callback(null, `Content of ${path}`);
    }
  }, 100);
}

const readFilePromise = promisify(readFileCallback);

readFilePromise('test.txt')
  .then(content => console.log(content))
  .catch(err => console.error(err));

// Delay/sleep function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start');
  await delay(1000);
  console.log('After 1 second');
}

example();

// Sequential vs parallel execution
async function runSequentially(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

async function runParallel(tasks) {
  return Promise.all(tasks.map(task => task()));
}

// Execute with limited concurrency
async function runWithConcurrencyLimit(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);
    
    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  
  return Promise.all(results);
}

// Task queue with concurrency control
class TaskQueue {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }
  
  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject
      });
      
      this.next();
    });
  }
  
  async next() {
    if (this.running >= this.concurrency || this.queue.length === 0) {
      return;
    }
    
    this.running++;
    const { task, resolve, reject } = this.queue.shift();
    
    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.next();
    }
  }
}

// Example usage:
const queue = new TaskQueue(2); // 2 concurrent tasks max

// Add tasks to the queue
function createTask(id, delay) {
  return () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Task ${id} completed after ${delay}ms`);
        resolve(id);
      }, delay);
    });
  };
}

queue.add(createTask(1, 1000));
queue.add(createTask(2, 500));
queue.add(createTask(3, 2000));
queue.add(createTask(4, 800));

// Real-world examples
// API client with retry logic
class ApiClient {
  constructor(baseUrl, maxRetries = 3, timeout = 5000) {
    this.baseUrl = baseUrl;
    this.maxRetries = maxRetries;
    this.timeout = timeout;
  }
  
  async fetch(endpoint, options = {}) {
    let attempt = 0;
    
    while (attempt < this.maxRetries) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          ...options,
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        attempt++;
        
        if (error.name === 'AbortError') {
          console.warn(`Request timeout (attempt ${attempt}/${this.maxRetries})`);
        } else {
          console.error(`API error (attempt ${attempt}/${this.maxRetries}):`, error);
        }
        
        if (attempt >= this.maxRetries) {
          throw error;
        }
        
        // Exponential backoff
        await delay(2 ** attempt * 100);
      }
    }
  }
  
  async get(endpoint) {
    return this.fetch(endpoint);
  }
  
  async post(endpoint, data) {
    return this.fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
}

// Usage example (would need actual API endpoint)
// const api = new ApiClient('https://api.example.com');
// api.get('/users').then(data => console.log(data));

/**
 * NODE.JS STREAMS
 * ============
 * Working with streams for efficient data processing
 */

// Example with built-in streams
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

// Reading file as stream
function countLinesInFile(filePath) {
  return new Promise((resolve, reject) => {
    let lineCount = 0;
    
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    
    readStream.on('data', (chunk) => {
      // Count newlines in the chunk
      lineCount += (chunk.match(/\n/g) || []).length;
    });
    
    readStream.on('end', () => {
      resolve(lineCount);
    });
    
    readStream.on('error', (err) => {
      reject(err);
    });
  });
}

// Custom transform stream
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
}

// Example: Converting a file to uppercase
function convertFileToUppercase(inputPath, outputPath) {
  const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(outputPath);
  const uppercaseTransform = new UppercaseTransform();
  
  readStream
    .pipe(uppercaseTransform)
    .pipe(writeStream);
    
  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

// CSV parser stream
class CsvParser extends Transform {
  constructor(options = {}) {
    super({ ...options, objectMode: true });
    this.delimiter = options.delimiter || ',';
    this.headers = options.headers || null;
    this.buffer = '';
  }
  
  _transform(chunk, encoding, callback) {
    this.buffer += chunk.toString();
    
    const lines = this.buffer.split('\n');
    this.buffer = lines.pop();  // Keep the last incomplete line
    
    if (!this.headers && lines.length > 0) {
      this.headers = lines.shift().split(this.delimiter);
    }
    
    for (const line of lines) {
      if (line.trim() === '') continue;
      
      const values = line.split(this.delimiter);
      const record = {};
      
      this.headers.forEach((header, index) => {
        record[header] = values[index];
      });
      
      this.push(record);
    }
    
    callback();
  }
  
  _flush(callback) {
    if (this.buffer.trim()) {
      const values = this.buffer.split(this.delimiter);
      const record = {};
      
      this.headers.forEach((header, index) => {
        record[header] = values[index];
      });
      
      this.push(record);
    }
    
    callback();
  }
}

// Example of using the CSV parser
function processCsvFile(filePath) {
  return new Promise((resolve, reject) => {
    const records = [];
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    const csvParser = new CsvParser();
    
    readStream
      .pipe(csvParser)
      .on('data', (record) => {
        records.push(record);
      })
      .on('end', () => {
        resolve(records);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

// Pipeline helper (modern approach)
const { pipeline } = require('stream/promises');

async function processFileWithPipeline(inputPath, outputPath) {
  try {
    await pipeline(
      fs.createReadStream(inputPath, { encoding: 'utf8' }),
      new UppercaseTransform(),
      fs.createWriteStream(outputPath)
    );
    console.log('Pipeline succeeded');
  } catch (err) {
    console.error('Pipeline failed', err);
  }
}

/**
 * FUNCTIONAL PROGRAMMING UTILITIES
 * ==============================
 */

// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// Composition
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((value, fn) => fn(value), x);
  };
}

function pipe(...fns) {
  return function(x) {
    return fns.reduce((value, fn) => fn(value), x);
  };
}

const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

const operation1 = compose(square, increment, double);
console.log(operation1(3)); // square(increment(double(3))) = 49

const operation2 = pipe(double, increment, square);
console.log(operation2(3)); // square(increment(double(3))) = 49

// Memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log(memoizedFib(40)); // Fast calculation
