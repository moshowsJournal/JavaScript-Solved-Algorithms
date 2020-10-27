// Complete the migratoryBirds function below.
/***
You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

For example, assume your bird sightings are of types arr = [1, 1, 2,2,3] . There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type .

**/

function migratoryBirds(arr) {
    let freqs = [...new Set(arr)].map(value=>{
        return {
            type : value,
            count : arr.filter(item=>item === value).length
        }
    }).sort((a,b)=>b.count - a.count);
    let sameCount = freqs.filter(item=>{
        return item.count === freqs[0].count && item.count > 1
    }).sort((a,b)=>a.type - b.type);
    return sameCount.length > 1 ? sameCount[0].type : freqs[0].type
}