module.exports = {
  success,
  fail,
  repair,
  get
};

function success(item) {
  if(item.enhancement >= 20) {
    return { ...item,  };
  }else {
    return{...item, enhancement: item.enhancement +1}
  }
}

function fail(item) {
  if(item.enhancement > 16) {
    return { ...item, enhancement: item.enhancement - 1 };
  }else if (item.enhancement > 15) {
    return { ...item, durability: item.durability - 10}
  }else{
    return { ...item, durability: item.durability - 5 }
  }
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  if(item.enhancement > 0){
    return { ...item,name: `[+${item.enhancement}]${item.name}` };
  }else{
    return{ ...item }
  }
}

// class Item {
//   constructor(name,durability,enhancement){
//     this.name = name,
//     this.durability = durability,
//     this.enhancement = enhancement
//   }
// }