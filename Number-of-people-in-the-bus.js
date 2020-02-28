// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

var number = function(busStops){
    let on = 0
    for (let i = 0; i < busStops.length; i++) {
      let getOff = busStops[i][1]
      let getOn = busStops[i][0]
      on += getOn - getOff
    }
    return on
  }