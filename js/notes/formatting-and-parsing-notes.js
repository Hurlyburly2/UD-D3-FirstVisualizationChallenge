// Convert numbers to readable formats:
  // Adding thousand seperators (eg. 5,000), defining # of decimel points, display ints as currency/percentages
  
// Works by feeding a specifier string

d3.format(".0%")(0.123)   // rounded percentage "12%"
d3.format("($.2f)")(-3.5)  // localized fixed-point currency   $3.50
d3.format("+20")(42)    //space filled and signed "                    +42"
d3.format(".^20")(42)  //dot filled and centered  ".........42........."
d3.format(".2s")(42e6)    // SI-prefit with two significant digits "42M"
d3.format("#x")(48879)  // prefixed lowercase hexadecimal "0xbeef"
d3.format(",.2r")(4223)   // grouped thousands with two significant digits "4,200"

let formatter = d3.format(".2f")

formatter(1000)   // 1000.00
formatter(5.248)  // 5.25
formatter(30.1)   // 30.10

// making a specifier:

d3.format(specifier)

[[fill]align][sign][symbol][0][width][,][.precision][type]

// sign
  // - : shows a minus sign for negative values and nothing for positive values or zero (default)
  // + : shows a plus sign for positive numbers and zero, shows a minus sign for negative
  // ( : shows nothing for zero/positive, and puts negative numbers in parenthesis
  // (space) : a space adds a space for zero/positive numbers and a minue sign for negative
// symbol
  // $ - apply currency symbols per the locale definition (if you want to use a current that isn't USD you need to define a custom locale - check d3 documentation if needed)
  // # - binary, octal, or hexadecimal notation
// comma
  // , - adds a group seperator for the thousands (1,000)
// precision
  // .2 - decimel point followed by a number signals the # of digits following the decimal point
// type
  // gives a special format according to the selection
  // e - exponent notation
  // f - fixed point notation
  // g - decimel/exponent notation rounded to significant digits
  // r - decimel notation, rounded to significant digits
  // s - decimel notation with SI prefix, rounded to significant digits
  // % - multiply by 100, then decimel notation with percent sign
  // p - multiply by 100, round to significant digits, then decimel notation with percent sign
  // b - binary notation, rounded to integer
  // o - octal notation, rounded to integer
  // d - decimel notation, rounded to integer
  // x - hexadecimal notation- using lower-case letters, rounded to integer
  // X - hexadecimal notation - using upper-case letters, rounded to integer
  // c - converts the integer to the corresponding unicode character
  // (none) - like g, but trim insignificant trailing zeroes
// all other fields are optional


// SEPARATE FORMATTER FOR TIME (d3.timeFormat, d3.timeParse)

// timeFormat: JavaScript date object -> human readable time

let formatTime = d3.timeFormat("%B %d, %Y")   // Converts JavaScript date object to human-readable time
formatTime(new Date)     // "June 30, 2015"

// timeParse: human readable time -> JavaScript date object

let parseTime = d3.timeParse("%B %d, %Y")
parseTime("June 30, 2015")    // Tue Jun 30 2015 00:00:00 GMT-0700 (PDT)

// time formatting:
  // %a - abbreviated weekday name
  // %A - full weekday name
  // %b - appreviated month name
  // %B - full month name
  // %c - the locale's date and time, such as %x, %X
  // %d - zero-padded day of the month as a decimal number (01-31)
  // %e - space-padded day of the month as a decimal number ( 1-31)
  // %f - microseconds as a decimal number (000000- 999999)
  // %H - hour (24 hour clock) as a decimal number (00-23)
  // %I - hour (12 hour clock) as a decimal number (00-12)
  // %j - day of the year as a decimal number (001-366)
  // %m - month as a decimal number (01-12)
  // %M - minute as a decimal number (00-59)
  // %L - milliseconds as a decimal number (000, 999)
  // %p - either AM or PM
  // %Q - milliseconds since UNIX epoch
  // %s - seconds since UNIX epoch
  // %S - second as a ddecimal number (00, 61)
  // %u - Monday-based (ISO 8601) weekday as a decimal number (1-7)
  // %U - Sunday-based week of the year as a decimal number (00-53)
  // %V - ISO 8601 week of the year as a decimal number (00-53)
  // %w - Sunday-based weekday as a decimal number (0-6)
  // %W - Monday-based week of the year as a decimal number (00-53)
  // %x - the locale's date, such as %-m/%-d/%Y
  // %X - the locale's time, such as %-I:%M:%S %p
  // %y - year without century as a decimal number (00-99)
  // %Y - year with century as a decimal number
  // %Z - time zone offset, such as -0700, -07:00, -07, or Z
  // %% - a literal percent sign
  
// EXAMPLES:

let parseTime = d3.timeParse("%d/%m/%y")
let example = parseTime("19/12/93")   // Sun Dec 19 1993 00:00:00 GMT+0700 (+07)

let formatTime = d3.timeFormat("%m-%d-%Y")
formatTime(example) // 12-19-1993
  
