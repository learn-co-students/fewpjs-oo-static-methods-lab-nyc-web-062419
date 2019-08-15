class Formatter {
  //add static methods here
  static capitalize (string){
    string = string[0].toUpperCase () + string.slice(1)
    return string
  }
  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize (string) {
    let noCaps = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let wordArray = string.split(" ")
    wordArray[0] = wordArray[0][0].toUpperCase() + wordArray[0].slice(1)
    wordArray = wordArray.map(function (word) {
      if (noCaps.includes(word)){
        return word
      }
      else {
        return word[0].toUpperCase() + word.slice(1)
      }
    })
    return wordArray.join(" ")
  }
}