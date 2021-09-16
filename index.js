// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let newArr = arr.slice(0, 2)
    return  newArr
}

const returnLastTwoDrivers= function(arr) {
    let newArr = arr.slice(-2)
    return  newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler =  createFareMultiplier(3)

const selectDifferentDrivers = function(arr, func) {
    return func(arr)
}