var SHEET_NAME = '自社枠'; // カレンダーのあるシート名
var SHEET_NAME_IRREGULAR = '19年度_HRイレギュラー用16時枠'; // カレンダーのあるシート名

var START_DATA_ROW = 6; // カレンダーの開始行

var SALES_DATE_COLUMN = 1; // 本日、3営前などを表示する列
var DATE_COLUMN = 2; // 日付の列

/**
 * 開いた時に実行される
 */
function onOpen() {
    setSalesDate();
    setMenu();
}

/**
 * メニューにメール送信を追加
 */
function setMenu() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('メール送信')
    .addItem('メールリマインダー', 'mailReminder')
    .addToUi();
}

/**
 * メニューにメール送信を追加
 *
 * 本日、3営前などのセルを設定
 * 毎日0-1時に動作するよう、スケジュールを入れています。
 * もしスケジュールで動かない場合でも、onOpenで呼び出されます。
 */
function setSalesDate() {
    var start = new Date(); // ログ用

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    var dateFormat = 'yyyy年M月d日';
    var today = new Date();
    var todayStr = Utilities.formatDate(today, 'Asia/Tokyo', dateFormat);
    var todayIndex;

    var todayUpdatedYet = false;

    // ヘッダー行から列を特定できると良い

    //  var dateColumn = sheet.getDataRange().getValues();
    var dateColumnRange = sheet.getRange(START_DATA_ROW, DATE_COLUMN, sheet.getLastRow() - 1);
    var dateColumn = dateColumnRange.getValues();
    var dateColumnBg = dateColumnRange.getBackgrounds();

    var salesDateColumnRange = sheet.getRange(START_DATA_ROW, SALES_DATE_COLUMN, sheet.getLastRow() - 1);
    var salesDateColumn = salesDateColumnRange.getValues();
    var salesDateColumnBg = salesDateColumnRange.getBackgrounds();

    for (var i = 0; i < dateColumn.length; i++) {
        if (!dateColumn[i][0]) {
            continue;
        }

        var targetDateStr = Utilities.formatDate(dateColumn[i][0], 'Asia/Tokyo', dateFormat);

        if (todayStr === targetDateStr) {
            if (salesDateColumn[i][0] != '本日') {
                todayUpdatedYet = true;
                salesDateColumn[i][0] = '本日';
                salesDateColumnBg[i][0] = '#E5867C';
            }
            todayIndex = i;

            // 今日あたりにフォーカスさせる（スクロールが面倒なため）
            sheet.getRange(i + START_DATA_ROW + 20, 1).activate();
            //      sheet.getRange(i + START_DATA_ROW, 1).activate();
        } else {
            salesDateColumn[i][0] = '';
            salesDateColumnBg[i][0] = '#ffffff';
        }
    }

    var beforeSalesDateNum = 0
    for (var i = todayIndex + 1; i < dateColumn.length; i++) {
        var bg = dateColumnBg[i][0];

        // 休日はスキップ
        if (bg !== '#ffffff') {
            continue;
        }

        beforeSalesDateNum++;

        if (beforeSalesDateNum === 2) {
            salesDateColumn[i][0] = '2営前';
        }

        if (beforeSalesDateNum === 3) {
            salesDateColumn[i][0] = '3営前';
            salesDateColumnBg[i][0] = '#EDB77B';
        }

        if (beforeSalesDateNum === 4) {
            salesDateColumn[i][0] = '4営前';
        }

        if (beforeSalesDateNum === 5) {
            salesDateColumn[i][0] = '5営前';
            salesDateColumnBg[i][0] = '#AABBFA';
        }

        if (beforeSalesDateNum === 7) {
            salesDateColumn[i][0] = '7営前';
            salesDateColumnBg[i][0] = '#A2E6C0';
        }

        if (beforeSalesDateNum === 8) {
            salesDateColumn[i][0] = '8営前';
        }

        if (beforeSalesDateNum === 9) {
            salesDateColumn[i][0] = '9営前';
        }

        if (beforeSalesDateNum === 10) {
            salesDateColumn[i][0] = '10営前';
            salesDateColumnBg[i][0] = '#FFE0F0';
        }
    }

    if (todayUpdatedYet) {
        salesDateColumnRange.setValues(salesDateColumn);
        salesDateColumnRange.setBackgrounds(salesDateColumnBg);
    }

    var end = new Date();
    var span_sec = (end - start) / 1000;
    Logger.log("処理時間は全部で " + span_sec + " 秒でした");
    //  Browser.msgBox('営業日のチェック完了：）（' + span_sec + '秒）');

}