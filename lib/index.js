'use strict';

const fs = require('fs');
const _ = require('lodash');

console.time('entire process');

let trafficData = fs.readFileSync('./data/traffic-accidents.csv').toString();

console.timeEnd('entire process');

// My Code //

let obj = trafficData.split('\r\n');

const splitInnerData = () => {
  let keys = [];
  let arr = [];
  let arr2 = [];
  for(let i = 0; i < obj.length; i++) {
    if(i === 0){
      keys.push(obj[i].split(','));
      keys = _.flatten(keys);
    }
    arr.push(obj[i].split(','));
  }
  for(let i = 0; i < obj.length; i++) {
    arr2.push(_.zipObject(keys, arr[i]));
  }
  return arr2;
};

const splitData = splitInnerData();
