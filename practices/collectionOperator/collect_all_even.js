'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let even = [];
  for(let i of collection){
    if(i % 2 == 0){
      even.push(i);
    }
  }
  //console.log(even);
  return even;
}
//module.exports = collect_all_even;
