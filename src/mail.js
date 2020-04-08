
// メール
var MAIL_FROM = 'nyuko@profuture.co.jp';
var MAIL_FROM2 = 'info@thurios.co.jp'; // 金井のテスト用
var MAIL_NAME = 'ProFuture編集部';
var MAIL_REPLY_TO = MAIL_FROM;
var DEFAULT_CC = 'nyuko@profuture.co.jp';
var PROQ_EMAIL = 'nyuko@ml.pro-q.jp';

// 枠の設定
var IN_HOUSE_SHEET_COLUMNS = [
  {
    "site": "HRプロ",
    "name": "HR自社枠7:30",
    "time": "7時30分",
    "inside": true,
    "project": true,
    "column": {
        "note": "D",
        "project": "F",
        "draft": "G",
        "status": "H",
    },
  },
  {
    "site": "HRプロ",
    "name": "HRプロ_info広告",
    "time": "7時30分",
    "inside": true,
    "dummyOutside": true,
    "project": false,
    "column": {
        "note": "I",
        "draft": "J",
        "status": "K",
    }
  },
  {
    "site": "HRプロ",
    "name": "HRプロ16:00",
    "time": "16時",
    "inside": true,
    "project": true,
    "column": {
        "note": "O",
        "project": "Q",
        "draft": "R",
        "status": "S",
    }
  },
  {
    "site": "経営プロ",
    "name": "経営プロ自社枠7:30",
    "time": "7時30分",
    "inside": true,
    "project": true,
    "column": {
        "note": "U",
        "project": "W",
        "draft": "X",
        "status": "Y",
    }
  },
  {
    "site": "経営プロ",
    "name": "経営プロ_info広告",
    "time": "7時30分",
    "inside": true,
    "dummyOutside": true,
    "project": false,
    "column": {
        "note": "Z",
        "draft": "AA",
        "status": "AB",
    }
  },
];

var SALES_SHEET_COLUMNS = [
    {
        "site": "HRプロ",
        "name": "HRプロ_6行広告",
        "time": "7時30分",
        "inside": false,
        "project": false,
        "column": {
            "note": "E",
            "draft": "F",
            "status": "G",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ_単独DM",
        "time": "10時",
        "inside": false,
        "project": true,
        "column": {
            "note": "K",
            "project": "M",
            "draft": "N",
            "status": "O",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ_単独DM",
        "time": "12時",
        "inside": false,
        "project": true,
        "column": {
            "note": "U",
            "project": "W",
            "draft": "X",
            "status": "Y",
        },
    },
    {
        "site": "経営プロ",
        "name": "経営プロ_6行",
        "time": "7時30分",
        "inside": false,
        "project": false,
        "column": {
            "note": "AB",
            "draft": "AC",
            "status": "AD",
        },
    },
    {
        "site": "経営プロ",
        "name": "経営プロ_単独DM",
        "time": "12時",
        "inside": false,
        "project": true,
        "column": {
            "note": "AH",
            "project": "AJ",
            "draft": "AK",
            "status": "AL",
        },
    },
    {
        "site": "経営プロ",
        "name": "経営プロ_単独DM",
        "time": "12時",
        "inside": false,
        "project": true,
        "column": {
            "note": "AM",
            "project": "AO",
            "draft": "AP",
            "status": "AQ",
        },
    },
];


var BANNER_SHEET_COLUMNS = [
    {
        "site": "HRプロ",
        "name": "HRプロ ヘッダー",
        "inside": true,
        "banner": true,
        "project": false,
        "column": {
            "note": "D",
            "draft": "E",
            "status": "F",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ ヘッダー",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "G",
            "draft": "H",
            "status": "I",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ テキスト",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "J",
            "draft": "K",
            "status": "L",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ テキスト",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "M",
            "draft": "N",
            "status": "O",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ スモールバナー",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "P",
            "draft": "Q",
            "status": "R",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ スモールバナー",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "S",
            "draft": "T",
            "status": "U",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "V",
            "draft": "W",
            "status": "X",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "Y",
            "draft": "Z",
            "status": "AA",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ セカンド レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "AB",
            "draft": "AC",
            "status": "AD",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ セカンド レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "AE",
            "draft": "AF",
            "status": "AG",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ 記事下 レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "AH",
            "draft": "AI",
            "status": "AJ",
        },
    },
    {
        "site": "HRプロ",
        "name": "HRプロ 記事下 レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "AK",
            "draft": "AL",
            "status": "AM",
        },
    },
    {
        "site": "経営プロ",
        "name": "経営プロ レクタングル",
        "inside": true,
        "banner": true,
        "project": false,
        "column": {
            "note": "AO",
            "draft": "AP",
            "status": "AQ",
        },
    },
    {
        "site": "経営プロ",
        "name": "経営プロ レクタングル",
        "inside": false,
        "banner": true,
        "project": false,
        "column": {
            "note": "AR",
            "draft": "AS",
            "status": "AT",
        },
    },
];

var PROJECTS = [
    {
        "name": "共催/PS_編集G",
        "inside": true,
        "owner": "編集G担当者",
        "isClient": false,
        "to": "staff",
    },
    {
        "name": "共催/PS_企画G",
        "inside": true,
        "owner": "企画G担当者",
        "isClient": false,
        "to": "staff",
    },
    {
        "name": "共催/PS_クラ",
        "inside": false,
        "owner": "",
        "isClient": true,
    },
    {
        "name": "調査レポート",
        "inside": true,
        "owner": "内藤",
        "isClient": false,
        "to": "y.naito@profuture.co.jp",
    },
    {
        "name": "コラム編集企画",
        "inside": true,
        "owner": "",
        "isClient": false,
        "to": "staff",
    },
    {
        "name": "オリジナル編集企画",
        "inside": true,
        "owner": "",
        "isClient": false,
        "to": "staff",
    },
    {
        "name": "村上案件（イレギュラー）",
        "inside": true,
        "owner": "村上",
        "isClient": false,
        "to": "t.murakami@profuture.co.jp",
        "cc": "site@profuture.co.jp",
    },
    {
        "name": "HRサポート",
        "inside": true,
        "owner": "",
        "isClient": false,
        "to": "staff",
        "cc": "hrsupport@profuture.co.jp",
    },
    {
        "name": "Podcast単独",
        "inside": true,
        "owner": "松岡",
        "isClient": false,
        "to": "h.matsuoka@profuture.co.jp",
        "cc": "hrsupport@profuture.co.jp",
    },
    {
        "name": "企画G作成",
        "inside": true,
        "owner": "企画G担当者",
        "isClient": false,
        "to": "kikaku@profuture.co.jp",
        "cc": "staff",
    },
    {
        "name": "QM",
        "inside": false,
        "owner": "",
        "isClient": true,
        "survey": true,
        "miniSurvey": true,
    },
    {
        "name": "共同調査",
        "inside": true,
        "owner": "村上様 草野",
        "isClient": false,
        "survey": true,
        "to": "t.murakami@profuture.co.jp,k.kusano@profuture.co.jp",
    },
    {
        "name": "通常アンケート",
        "inside": false,
        "owner": "",
        "isClient": true,
        "survey": true,
    },
];

function mailReminder() {
    // メールを送信する権限があるかどうか(MAIL_FROMのエイリアスがGMailで設定されているかどうか）
    if (!checkGmailAliases()) {
        return;
    }

    remindInHouseMail();
    remindSalesMail();
    remindBannerMail();
}

function remindInHouseMail() {
    remindMail(SHEET_NAME, IN_HOUSE_SHEET_COLUMNS);
}

function remindSalesMail() {
    remindMail(SALES_SHEET_NAME, SALES_SHEET_COLUMNS);
}

function remindBannerMail() {
    remindMail(BANNER_SHEET_NAME, BANNER_SHEET_COLUMNS);
}

/**
 * リマインド対象をチェックしてメールを送信する
 *
 * 1. 全体を取得
 * 2. 7, 10営業日前のチェック
 * 3. 2に該当した場合、会社が登録されているか
 * 4. 入稿済み、ステータスはOKか(OKならばスキップ)
 * 5. セルのメモを取得
 * 6. メモの情報からメールを作成
 */
function remindMail(adSheetName, adColumnSetting) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(adSheetName);

    var salesDateColumn = sheet.getRange(START_DATA_ROW, SALES_DATE_COLUMN, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

    var mailTplSheet; // メールテンプレートシート
    var tpl; // メール本文テンプレート
    var mailInfo; // メール送信情報
    var title; // メールタイトル
    var targetCount = 0; // 送信/下書き対象数
    var deliveryDate; // 配信日
    var deliveryDateStr; // 配信日の文字列
    var sendType; // 送信タイプ 送信,下書き
    var beforeSalesDate; // 営業日（３営前など)

    var inputed;

    var hasError = false;

    var isClient = false;

    // カレンダーを上から順に処理する
    for (var i = 0; i < salesDateColumn.length; i++) {
        deadlineDate = '';


        // 締切を設定する。メール送信対象でない営業日(7,10以外)は、ここで処理が終わる
        if (! salesDateColumn[i][1]) {
            break;
        }

        var targetDate = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');

        switch (salesDateColumn[i][0]) {
            case '本日':
                today = targetDate;
                continue;
            case '3営前':
                deadline10before7 = targetDate;
                beforeSalesDate = 3;
                continue;
            case '7営前':
                beforeSalesDate = 7;
                deadlineDate = today;
                break;
            case '8営前':
                beforeSalesDate = 8;
                break;
            case '9営前':
                beforeSalesDate = 9;
                break;
            case '10営前':
                beforeSalesDate = 10;
                deadlineDate = deadline10before7;
                deadline10 = targetDate;
                break;
            case '20営前':
                beforeSalesDate = 20;
                deadlineDate = deadline10;
                break;
            case '30営前':
                beforeSalesDate = 30;
                deadlineDate = deadline10;
                break;
            default:
                continue;
        };

        deliveryDate = salesDateColumn[i][1];

        if (!deliveryDate) {
            continue;
        }

        deliveryDateStr = Utilities.formatDate(deliveryDate, 'Asia/Tokyo', 'M/d');

        // 広告枠を処理する
        adColumnSetting.forEach(function(adInfo, index) {
            inputed = {
                company: '',
                note: '',
                draft: '',
                status: '',
                projectType: '',
            };

            hasError = false;
            projectInfo = null;

            inputed['company'] = salesDateColumn[i][letterToColumn(adInfo['column']['note']) - 1];

            // 対象の入力がない場合はスキップ
            if (! inputed['company']) {
                return;
            }

            inputed['draft'] = salesDateColumn[i][letterToColumn(adInfo['column']['draft']) - 1];

            // 入稿に何か入力してある場合はスキップ
            if (inputed['draft'] !== '') {
                return;
            }

            inputed['status'] = salesDateColumn[i][letterToColumn(adInfo['column']['status']) - 1];

            // 8,9日前リマインダーは進捗が「仮」以外はスキップ
            if (8 <= beforeSalesDate && beforeSalesDate <= 9 && inputed['status'].indexOf('仮') !== 0) {
                return;
            }

            // 7日前は仮の場合はスキップ
            if (inputed['status'].indexOf('仮') === 0 && beforeSalesDate === 7) {
                return;
            }

            // ステータスが対象営業日前リマインド済の場合はスキップ（すでに送信しているため）
            if (inputed['status'].indexOf(beforeSalesDate.toString() + 'R済') !== -1) {
                return;
            }

            // 案件対応セル
            if (inAndTrue(adInfo, 'project')) {
                inputed['projectType'] = salesDateColumn[i][letterToColumn(adInfo['column']['project']) - 1];

                // ・入力があった場合のチェック
                if (inputed['projectType'] !== '') {
                    PROJECTS.forEach(function(_projectInfo, index) {
                        if (_projectInfo['name'] == inputed['projectType']) {
                            projectInfo = _projectInfo;
                            return;
                        }
                    });
                }
            }

            if (inputed['projectType'] == '共同調査') {
                if (beforeSalesDate < 10) {
                    // 共同調査は10日が締め切り
                    return;
                }
            } else if (beforeSalesDate > 10) {
                // 20日前、30日前は案件が共同調査のみ送る
                return;
            }

            // 20日前、30日前は案件が共同調査のみ送る
            if (beforeSalesDate == 20 || beforeSalesDate == 30) {
                if (inputed['projectType'] != '共同調査') {
                    return;
                }
            }

            // メモ
            inputed['note'] = sheet.getRange(i + START_DATA_ROW, letterToColumn(adInfo['column']['note'])).getNote();

            // メモの入力チェック
            if (inputed['status'].indexOf('仮') === 0) {
                // 仮の時はnoteの有無はチェックしない
            } else if (! inputed['note']) {
                let msg = `${beforeSalesDate.toString()}営前`;

                if (adInfo['time']) {
                    msg += ` ${adInfo['time']}`;
                }

                msg += ` ${adInfo['name']}（${inputed['company']}）のメモがありません。入力してください。`;
                Browser.msgBox(msg);
                return;
            }

            noteInfo = getInfoFromNote(inputed['note']);

            mailTplSheet = ss.getSheetByName(getMailTplSheetName(beforeSalesDate, inputed, projectInfo, adInfo));

            title = mailTplSheet.getRange('B1').getValue();
            tpl = mailTplSheet.getRange('B2').getValue();

            targetCount++;

            isClient = false;

            if (inputed['status'].indexOf('仮') === 0) {
                // 仮枠の場合
                mailInfo = {
                    'to': {'name': '企画Ｇ', 'mail': 'kikaku@profuture.co.jp'},
                    'cc': [],
                    'projectType': inputed['projectType'],
                }
            } else if (projectInfo) {
                // 案件の場合
                if (projectInfo['isClient']) {
                    isClient = true;
                } else {
                    mailInfo = {
                        'to': {},
                        'cc': [],
                    };

                    if (projectInfo['to'] == 'staff') {
                        // TOがstaffの場合
                        mailInfo['to'] = noteInfo['staff'];
                    } else {
                        mailInfo['to'] = {
                            'mail': projectInfo['to'],
                            'name': projectInfo['owner']
                        };
                    }

                    if (projectInfo['cc']) {
                        if (projectInfo['cc'] == 'staff') {
                            mailInfo['cc'].push(noteInfo['staff']);
                        } else {
                            mailInfo['cc'].push({
                                'mail': projectInfo['cc']
                            });
                        }
                    }
                }
            } else {
                // 案件以外
                if (inAndTrue(adInfo, 'inside')) {
                    // 自社枠
                    mailInfo = {
                        'to': noteInfo['staff'],
                        'cc': [],
                    };
                } else {
                    // 販売枠
                    isClient = true;
                }
            }

            if (isClient) {
                mailInfo = {
                    'to': noteInfo['to'],
                    'cc': noteInfo['cc'],
                };

                mailInfo['cc'].push(noteInfo['staff']);

                mailInfo['cc'].push({
                    "name": "",
                    "mail": "kikaku@profuture.co.jp"
                });
            }

            if (projectInfo && inAndTrue(projectInfo, 'miniSurvey')) {
                mailInfo['cc'].push({
                    "name": "",
                    "mail": PROQ_EMAIL
                });
            }

            if (DEFAULT_CC) {
                mailInfo['cc'].push({
                    "name": "",
                    "mail": DEFAULT_CC
                });
            }

            mailInfo['company'] = inputed['company'];
            mailInfo['deliveryDate'] = deliveryDateStr;

            if (inAndTrue(projectInfo, 'survey')) {
                mailInfo['product'] = 'アンケート';
            } else {
                mailInfo['product'] = adInfo['name'];
            }

            mailInfo['deadlineDate'] = deadlineDate;
            mailInfo['projectType'] = inputed['projectType'];
            mailInfo['beforeSalesDate'] = beforeSalesDate;
            mailInfo['staff'] = noteInfo['staff'];

            body = setMailBody(mailInfo, tpl);

            title = title.replace(/%company%/, mailInfo['company']);
            title = title.replace(/%deliveryDate%/, mailInfo['deliveryDate']);
            title = title.replace(/%product%/, mailInfo['product']);
            title = title.replace(/%beforeSalesDate%/, mailInfo['beforeSalesDate']);

            var message = getConfirmationMessage(adInfo, mailInfo, inputed['note'], beforeSalesDate);

            if (inputed['status'].indexOf('仮') === 0) {
            } else if (!mailInfo['staff']['name']) {
                message += "\\n・PF担当者が正しく設定されていません。メモの先頭に【PF担当者】を入力してください。\\n";
                hasError = true;
            } else if (!mailInfo['staff']['mail']) {
                message += "\\n・PF担当者が担当者シートに存在しません。担当者シートにメールアドレスとの対応を入力してください。\\n";
                hasError = true;
            }

            if (!mailInfo['to']['name'] || !mailInfo['to']['mail']) {
                message += "\\n・TOが正しく設定されていません。メモに\\nTO\\nメールアドレス:名前\\nで入力してください。\\n";
                hasError = true;
            }

            if (hasError) {
                Browser.msgBox(message);
                return;
            }

            message += "\\n-----------------------------------------";
            message += "\\n下記の内容でメールを送信します。はい→送信、いいえ→GMailの下書き、キャンセル→何もしない\\n";
            message += "\\n-----------------------------------------\\n";
            message += "件名: " + title + "";

            message += "\\n---------------以下本文---------------\\n";

            message += body.split(String.fromCharCode(10)).join('\\n');

            //      var a = Browser.msgBox(message, Browser.Buttons.YES_NO);
            var result = Browser.msgBox(message, Browser.Buttons.YES_NO_CANCEL);

            if (result === 'yes') {
                sendType = 'send';
            } else if (result === 'no') {
                sendType = 'draft';
            }

            if (result !== 'cancel') {
                sendMail(mailInfo, title, body, sendType);

                if (sendType === 'send') {
                    if (inputed['status'].indexOf('仮') === 0) {
                      statusPrefix = '仮';
                    } else {
                      statusPrefix = '';
                    }
                    sheet.getRange(i + START_DATA_ROW, letterToColumn(adInfo['column']['status'])).setValue(statusPrefix + beforeSalesDate.toString() + 'R済');
                }
            }
        });
    }


    if (targetCount === 0) {
        Browser.msgBox(adSheetName + ' リマインドメールの対象はありません');
    }
}

/**
 * メール送信対象の確認メッセージのヘッダー部分を取得
 */
function getConfirmationMessage(adInfo, mailInfo, note, beforeSalesDate) {
    var message = beforeSalesDate.toString() + "営前";

    if (adInfo['time']) {
        message += adInfo['time'];
    }

    message += "[" + adInfo['site']　 + "]" + adInfo['name'] + "枠のリマインダーメール\\n";
    message += "---------------メモ欄---------------\\n";
    message += note.split(String.fromCharCode(10)).join('\\n');

    message += "\\n---------------メモ欄から情報を抽出---------------\\n";
    message += "配信日:" + mailInfo['deliveryDate'] + "\\n";
    message += "会社名:" + mailInfo['company'] + "\\n";

    if (mailInfo['staff']) {
        message += "担当者: " + mailInfo['staff']['name'] + "（" + mailInfo['staff']['mail'] + "）\\n";
    }

    message += "TO: " + mailInfo['to']['name'] + "（" + mailInfo['to']['mail'] + "）\\n";
    for (var j = 0; j < mailInfo['cc'].length; j++) {
        message += "CC: " + mailInfo['cc'][j]['mail'];

        if (mailInfo['cc'][j]['name']) {
            message += "(" + mailInfo['cc'][j]['name'] + ")";
        }

        message += "\\n";
    }

    return message;
}

/**
 * メモ欄の値から、送信対象者を設定
 */
function getInfoFromNote(note) {
    if (! note) {
      return {};
    }

    var lines = note.split(String.fromCharCode(10));
    var result;
    var staff = {};
    var to = {};
    var cc = [];

    var mode;
    for (var i = 0; i < lines.length; i++) {
        if (!lines[i]) {
            continue;
        }

        if (!mode) {
            if (result = lines[i].match(/【(.+)】/)) {
                staff['name'] = result[1];
                if (staff['name']) {
                    staff['mail'] = getStaffMail(staff['name']);
                }
                continue;
            }
        }

        if (result = lines[i].match(/^TO$/)) {
            mode = 'TO';
            continue;
        }

        if (result = lines[i].match(/^CC$/)) {
            mode = 'CC';
            continue;
        }

        if (mode === 'TO') {
            person = lines[i].split(':');
            to['mail'] = trim_(person[0]);
            to['name'] = trim_(person[1]);
            continue;
        }

        if (mode === 'CC') {
            if (result = lines[i].match(/【(.+)】/)) {
                person = {
                    'name': trim_(result[1])
                };
                if (result[1]) {
                    cc.push({
                        'mail': trim_(getStaffMail(result[1])),
                        'name': trim_(result[1]),
                    });
                }
            } else {
                person = lines[i].split(':');
                cc.push({
                    'mail': person[0],
                    'name': person[1],
                    'outside': true
                });
            }
            continue;
        }
    }

    return {
        'staff': staff,
        'to': to,
        'cc': cc
    };
}

/**
 * 担当者のメールを取得
 */
function getStaffMail(name) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('担当者');

    var datas = sheet.getDataRange().getValues();

    for (var i = 0; i < datas.length; i++) {
        if (datas[i][0] === name) {
            return datas[i][1];
        }
    }

    return null;
}

/**
 * メール本文を設定
 */
function setMailBody(info, tpl) {
    var ccAdded = false;
    var address = info['to']['name'] + "様";

    var body = tpl.replace(/%address%/, address);
    body = body.replace(/%deliveryDate%/, info['deliveryDate']);
    body = body.replace(/%product%/, info['product']);
    body = body.replace(/%deadlineDate%/, info['deadlineDate']);
    body = body.replace(/%projectType%/, info['projectType']);
    body = body.replace(/%company%/, info['company']);
    body = body.replace(/%beforeSalesDate%/, info['beforeSalesDate']);

    body = body.replace(/%surveyDeadlineDate%/, info['deadlineDate']);

    return body;
}

/**
 * メール送信
 */
function sendMail(mailInfo, title, body, sendType) {
    var options = {};
    var cc = mailInfo['cc'].map(function(c) {
        return c['mail'];
    }).join(",");

    options['cc'] = cc;
    options['from'] = MAIL_FROM;
    options['name'] = MAIL_NAME;
    options['replyTo'] = MAIL_REPLY_TO;

    if (sendType === 'draft') {
        GmailApp.createDraft(
            mailInfo['to']['mail'],
            title,
            body,
            options
        );
        Browser.msgBox('メールをGmailの下書きに保存しました');
    } else {
        //    GmailApp.createDraft(
        GmailApp.sendEmail(
            mailInfo['to']['mail'],
            title,
            body,
            options
        );
        //    Browser.msgBox('メールを送信しました(しかし、テスト中のため下書きに保存しました。ステータスは変わります。)');
        Browser.msgBox('メールを送信しました');
    }
}

function getMailTplSheetName(beforeSalesDate, inputed, projectInfo, adInfo) {
    var sheetName;

    if (inputed['status'].indexOf('仮') === 0) {
        if (inAndTrue(adInfo, 'banner')) {
            sheetName = '仮枠バナー';
        } else {
            sheetName = '仮枠';
        }
    } else if (inAndTrue(adInfo, 'banner')) {
        if (inAndTrue(adInfo, 'inside')) {
            sheetName = beforeSalesDate.toString() + '営前自社バナー';
        } else {
            sheetName = beforeSalesDate.toString() + '営前バナー';
        }
    } else if (projectInfo) { // 案件対応の場合
        if (projectInfo['name'] == 'QM' || projectInfo['name'] == '通常アンケート') {
            sheetName = beforeSalesDate.toString() + '営前アンケート';
        } else if (projectInfo['name'] == '共同調査') {
            sheetName = beforeSalesDate.toString() + '営前共同アンケート';
        } else if (projectInfo['isClient']) {
            sheetName = beforeSalesDate.toString() + '営前';
        } else {
            sheetName = beforeSalesDate.toString() + '営前社内';
        }
    } else {
        if (! inAndTrue(adInfo, 'inside') || inAndTrue(adInfo, 'dummyOutside')) {
            sheetName = beforeSalesDate.toString() + '営前';
        } else {
            sheetName = beforeSalesDate.toString() + '営前社内';
        }
    }

    return sheetName;
}

function checkGmailAliases() {
    // メールを送信する権限があるかどうか(MAIL_FROMのエイリアスがGMailで設定されているかどうか）
    var aliases = GmailApp.getAliases();
    var canSend = false;

    aliases.forEach(function(value) {
        if (value == MAIL_FROM) {
            canSend = true;
        }

        if (value == MAIL_FROM2) {
            MAIL_FROM = MAIL_FROM2;
            MAIL_REPLY_TO = MAIL_FROM2;
            canSend = true;
        }
    });

    if (!canSend) {
        Browser.msgBox('あなたはGMailで[' + MAIL_FROM + ']のエイリアスが設定されていないため、メールを送信できません');
    }

    return canSend;
}
