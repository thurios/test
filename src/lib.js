function getYMD(dateColumn) {
    return Utilities.formatDate(dateColumn, 'Asia/Tokyo', 'yyyy年M月d日');
}

function columnToLetter(column) {
  var temp, letter = '';
  while (column > 0)
  {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

function letterToColumn(letter) {
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++)
  {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}

function trim_(target){
  if (target == null || target == undefined){
    return "";
  }
  return target.replace(/(^\s+)|(\s+$)/g, "");
}

function inAndTrue(obj, key) {
  if (! obj) {
    return false;
  }

  return key in obj && obj[key];
}

/*
function clearAllNotes() {
  // var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet1 = ss.getSheetByName("バナー枠");
  // sheet1.clearNotes();
}
*/
