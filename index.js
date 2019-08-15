class Formatter {
  //add static methods here
  static capitalize (word) {

    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length)
 }

  static sanitize (word) {
    return word.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize (title) {
    const words = Formatter.capitalize(title).split(" ")
    const newWords = words.map( word => {
      if (['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })
    return newWords.join(" ")
  }

}