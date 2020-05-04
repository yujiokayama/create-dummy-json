/**
 * 使わなくてもよい
 */
var faker = require("faker");
var db = [];
var dlStatus = ["01", "02", "03"];

/**
 * JSONを生成する
 */
for (var i = 0; i < 100; ++i) {
  var randomDay = getRandomYmd("2020/02/01", "2020/4/20");
  db.push({
    cooperationDate: `${randomDay} 11:11:11`,
    recordDivision: `${Math.floor(Math.random() * 2)}`,
    dlStatus: `${dlStatus[Math.floor(Math.random() * dlStatus.length)]}`,
    imageId: `${randomDay.split("/").join("")}11111100`,
    createdDate: `${randomDay}`,
    dataReporPath: "/xxxx/yyyy",
    byteSize: `${Math.floor(Math.random() * 99999)}`
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
var result = Array.from(db);
result.sort(function (a, b) {
  return new Date(b.cooperationDate) - new Date(a.cooperationDate);
});

/**
 * スペース4文字でインデント
 */
console.log(JSON.stringify(result, undefined, 4));
