// Layouts need data in the CORRECT FORMAT

// Improve visualization performance by using correct data structure

// Arrays: with d3 you can pass an array as a data method for a selection to use as a data join
// Objects: useful if we repeatedly need to access a value (for example, every time visualization updates)

// Array of Objects. Eg:

// BRUTE FORCE SEARCH required to go through and find values in this structure
data = [
  { 'id': 'homer', 'size': 18 }
  { 'id': 'lisa', 'size': 12 }
]

// OBJECT OF ARRAYS
// much faster to get specific values (no search through arrays, you can also do something like this to group categories)
dataMap = {
  'homer':
    { 'id': 'homer', 'size': 18 },
  'lisa':
    { 'id': 'lisa', 'size': 12 }
}

// D3 NEST allows you to group data into categories (groups of data according to different keys)
let yields = [
  { yield: 27.00, variety: "Manchuria", year: 1931 },
  { yield: 48.87, variety: "Another Type", year: 1931 },
  { yield: 27.43, variety: "Manchuria", year: 1931 },
  { yield: 31.00, variety: "Manchuria", year: 1932 }
]
// If you wanted to get yields by year, you'd have to loop over EVERY element of the data array to check the yield's year
// This creates a lot of different operations for our code, could cause lag

let entries = d3.nest()
  .key((d) => { return d.year })
  // .key(function(d) { return d.year })
  .key((d) => { return d.variety })
  .entries(yields)
  
  // CREATES THE BELOW:
  
[
  {
    key: "1931", values: [
      { key: "Mancuria", values: [
        { yield: 27.00, variety: "Manchuria", year: 1931 },
        { yield: 27.43, variety: "Manchuria", year: 1931 }
      ]},
      { key: "Another Type", values: [
        { yield: 48.87, variety: "Another Type", year: 1931 }
      ]}
    ]
  },
  [{
    key: "1932", values: [
      { key: "Manchuria", values: [
        { yield: 31.00, variety: "Manchuria", year: 1932 }
      ]}
    ]
  }]
]

// very easy to switch between years and types (don't have to search through as much code, update visual much faster)
  
  
