const name = ["mohammad", "ali", "ahmad", "mahdi", "zahra", "sara"]


// filter
console.log(name.filter((number) => {
    return number > 15
}))


// indexOf
console.log(name.indexOf("ali"))
console.log(name.indexOf("zahra"))
console.log(name.indexOf("sadra"))  // sadra is not in array


// splice
name.splice(2, 0, "mehran", "mohsen")
console.log(name)

name.splice(2, 2)
console.log(name)





