/**
 * faker.js
 */
var faker = require("faker");
// faker.locale = "ja";

var db = {
  members: [],
};

/**
 * JSONを生成する
 */
for (var i = 0; i < 100; ++i) {
  db.members.push({
    id: i + 1,
    name: faker.name.findName(),
    age: faker.random.number(100)
  });
}

/**
 * 範囲内のランダムな日付を生成する
 */
function getRandomYmd(fromYmd, toYmd) {
  var d1 = new Date(fromYmd);
  var d2 = new Date(toYmd);
  var c = (d2 - d1) / 86400000;
  var x = Math.floor(Math.random() * (c + 1));
  d1.setDate(d1.getDate() + x);
  var y = d1.getFullYear();
  var m = ("00" + (d1.getMonth() + 1)).slice(-2);
  var d = ("00" + d1.getDate()).slice(-2);
  return y + "/" + m + "/" + d;
}

/**
 * ソート
 */
// var result = Array.from(db);
// result.sort(function (a, b) {
//   return new Date(b.cooperationDate) - new Date(a.cooperationDate);
// });

/**
 * スペース4文字でインデント
 */
console.log(JSON.stringify(db, undefined, 4));
