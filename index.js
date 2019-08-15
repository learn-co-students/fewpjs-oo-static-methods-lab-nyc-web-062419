class Formatter {
  //add static methods here
  static capitalize(s) {
    s = s.charAt(0).toUpperCase() + s.slice(1)
    return s
  }
  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9-']+/g, "")
  }
  static titleize(s) {
    let arr = s.split(" ")
    let arr2 = []
    arr.forEach(word => {
      // prettier-ignore
      if ((word == 'the' || word == 'a' || word == 'an' || word == 'but' || word == 'of' || word == 'and' || word == 'for' || word == 'at' || word == 'by' || word == 'from')){
        arr2.push(word)
      }
      else{
        arr2.push(Formatter.capitalize(word))
      }
    })
    return arr2.join(" ")
  }
}
