// d3 convenient functions - min/max/extent

let data = [
  { grade: "A", value: 4 },
  { grade: "B", value: 3 },
  { grade: "C", value: 2 }
]

let min = d3.min(data, (datum) => {
  return datum.value
})
// returns 2

let max = d3.max(data, (datum) => {
  return datum.value
})
// returns 4

let val_extent = d3.extent(data, (datum) =>{
  return datum.value
})
// returns array with min/max formatted like: [2, 4]

let grade_map = data.map((datum) => {
  return datum.grade
})

// returns an array of all the items' 'grades' or names or whatever
// use it for dynamically generatic the arrays needed for a 'domain'

//getting scales:

let y = d3.scaleLinear()
  .domain([
    d3.min(data, (datum) => { return datum.value })
    d3.max(data, (datum) => { return datum.value })
  ])
  .range([0, 400])

let y = d3.scaleLinear()
  .domain([d3.extent(data, (datum) => {return datum.value})])
  .range([0, 400])

let x = d3.scaleBand()
  .domain(data.map((datum) => {return datum.grade }))
  .range([0, 400])
  .paddingInner(0.3)
  .paddingOuter(0.3)
