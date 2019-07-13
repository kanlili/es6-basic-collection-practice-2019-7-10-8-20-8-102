'use strict';

module.exports = function countSameElements(collection) {
        let c=[];
          for(let item of collection){
            if(item.length>1){
             let {key,count}=split(item);
             push(c,key,count);
            }else{
            c.push(item);
            }
          }
         return count(c);
       }
       function split(ch){
         let arr=ch.split("-");
         return {key:arr[0],count:parseInt(arr[1],10)};
       }
       function  push(c,key,count){
         for(var i=0;i<count;i++){
         c.push(key);
         }
       }
       function count(collection){
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
