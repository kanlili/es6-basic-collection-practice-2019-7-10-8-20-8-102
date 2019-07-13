'use strict';

module.exports = function countSameElements(collection) {
  let c=[];
     for(let item of collection){
        let ele=find(c,item);
        if(ele){
          ele.count++;
        }else{
        c.push({key:item,count:1});
        }
     }
     return c;
  }
  function find(collection,ch){
      for(let item of collection){
           if(item.key ==ch){
              return item;
           }
      }
       return null;
}
