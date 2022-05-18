const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => function (fare) {
   return fare * multiplier;
};
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);