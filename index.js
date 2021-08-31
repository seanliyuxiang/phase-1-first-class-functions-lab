// Code your solution in this file!

const returnFirstTwoDrivers = driversArr => driversArr.slice(0, 2);

const returnLastTwoDrivers = driversArr => driversArr.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(anInteger=4) {
  return function(fare) {
    return anInteger * fare;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, cb) => cb(arrayOfDrivers);