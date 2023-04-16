// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogram = (str) => {
    let newWord = str.toLowerCase()

    let words = new Set()
    let extras = []
    for(let el of newWord){
        if(words.has(el)){
            extras.push(el)
        }else{
             words.add(el)
        }
    }

    if(extras.length > 0){
        return false
    } else {
        return true
    }
}

isIsogram("Dermatoglyphics")

//Solution 2

const isIsogram2 = (str) => {
    return new Set(str.toLowerCase()).size === str.length
}

isIsogram2("abbcc")
