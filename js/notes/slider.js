// Initialize slider
$(".selector").slider({
  max: 100,     // ranges from 0-100
  min: 0,
  step: 1,        // slider goes up in increments of one
  range: false, // true = range slider (two pointers to set two different values)
  value: 50,    // initial value the slider is set to
  slide: ((event, ui) => {
    console.log(ui.value)     // event listener: start (when the slider is moved)
  })                                  // stop (when the slider is released)
})                                    // slide (fires every time the slider changes position)
                                      // change (same as slide)
                                      // event = event, ui = slider status
                                      
$(".selector").slider("value", 100)   // sets slider value to 100
console.log($(".selector").slider("value"))   // Outputs "100"
