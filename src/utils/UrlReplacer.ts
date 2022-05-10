function URLReplacer(str: string) {
  let match = str.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  );
  let final = str;
  if (match) {
    match.map((url) => {
      final = final.replace(
        url,
        '<a href="' + url + '" target="_BLANK">' + url + "</a>"
      );
    });
  }
  return {__html: final};
}

export default URLReplacer;
