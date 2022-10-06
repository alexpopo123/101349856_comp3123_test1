// function filter lowercase string in an array
const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)){
            const filterArray = mixedArray.filter((filterString) => typeof filterString == "string")

            //return each element of mixedArray array by using map() 
            const mapLowerCaseString = filterArray.map((filterLC) => filterLC.toLowerCase())

            resolve(mapLowerCaseString)
        }else{
            reject("failed")
        }
    }
)}





//set the value in array

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then((resolve) => console.log(resolve))
    .catch((failed) => console.log(failed))


