// special type for BAR CHARTS

// space out bars horizontally.
// spaces out bars with equal inner and outer padding (inner makes the bars thicker, outer adds space)

// domain: categories. range: height, as before. then add: paddingInner and paddingOuter

let x = d3.scaleBand()
  .domain(["AFRICA", "N. AMERICA", "EUROPE", "S. AMERICA", "ASIA", "AUSTRALIA"])
  .range([0, 400])
  .paddingInner(0.3)
  .paddingOuter(0.2)
  
console.log(x("S. AMERICA"))    // 209
console.log(x("AUSTRALIA"))     // 341
console.log(x("AFRICA"))        // 13.1

// bandwidth returns the width of a band's rectangles
console.log(x.bandwidth())      //45.9
  
