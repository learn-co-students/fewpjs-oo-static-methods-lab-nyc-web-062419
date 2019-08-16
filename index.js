class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^\w\s\'\-]/gi, '')
  }

  static titleize(string){
    let nonValidWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = []
    let string1 = string.split(" ")
    for (let n = 0; n < string1.length; n++) {
      if (n == 0) {
        arr.push(this.capitalize(string1[n]))
      } else {
        if (nonValidWords.includes(string1[n])){
          arr.push(string1[n])
        } else {
          arr.push(this.capitalize(string1[n]))
        }
      }
    }
    console.log(arr)
    return arr.join(" ")
  }
}