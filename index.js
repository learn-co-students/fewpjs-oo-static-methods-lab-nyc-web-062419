class Formatter {
  //add static methods here
  static capitalize(string) {
    let upperCaseLetter = string.charAt().toUpperCase();
    return upperCaseLetter + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let keywords = [
      "the",
      "a",
      "but",
      "an",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let word = string.split(" ");
    word[0] = this.capitalize(word[0]);
    return word
      .map(w => {
        if (keywords.includes(w)) {
          return w;
        } else if (word[0] === w) {
          return this.capitalize(w);
        } else {
          return this.capitalize(w);
        }
      })
      .join(" ");
  }
}
