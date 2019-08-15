class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(words) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let results = []
    let allWords = words.split(" ")
    for (let i = 0; i < allWords.length; i++) {
      if (i == 0) {
        results.push(this.capitalize(allWords[i]))
      }
      else {
        if (exceptions.includes(allWords[i])) {
          results.push(allWords[i])
        }
        else {
          results.push(this.capitalize(allWords[i]))
        }
      }
    }
    return results.join(" ")
  }
}


