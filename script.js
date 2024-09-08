function openOrSenior(data) {
  let people = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      people.push("Senior");
    } else {
      people.push("Open");
    }
  }
  return people;
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
