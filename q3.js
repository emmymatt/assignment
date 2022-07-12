
function groupObjectsBy(objects, key) {
    const groups = {};
    for (let object of objects) {
        if(groups.hasOwnProperty(object[key])) {
            groups[object[key]].push(object);
        }
        else{
            groups[object[key]] = [object];
        }
    }
    return groups;
}

console.log(groupObjectsBy([ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ], 'channel'));
  