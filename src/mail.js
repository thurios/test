
// メール
var MAIL_FROM = 'nyuko@profuture.co.jp';
var MAIL_FROM2 = 'info@thurios.co.jp'; // 金井のテスト用
var MAIL_NAME = 'ProFuture編集部';
var MAIL_REPLY_TO = MAIL_FROM;
var DEFAULT_CC = 'nyuko@profuture.co.jp';
var PROQ_EMAIL = 'nyuko@ml.pro-q.jp';

// 枠の設定
var COLUMNS = [
  {
    "site": "HRプロ", "name": "HR自社枠7:30", "time": "7時30分",
    "note": 5, "project": 7, "draft": 8, "status": 9,
    "inside": true
  },
  {
    "site": "HRプロ", "name": "HRプロ_info広告", "time": "7時30分",
    "note": 10, "draft": 11, "status": 12,
    "inside": true, "dummyOutside": true
  },
  {
    "site": "HRプロ", "name": "HRプロ_6行広告", "time": "7時30分",
    "note": 13, "draft": 14, "status": 15
  },
  {
    "site": "HRプロ", "name": "HRプロ_単独DM", "time": "10時",
    "note": 16, "project": 18, "draft": 19, "status": 20,
    "before7DaySend": true
  },
  {
    "site": "HRプロ", "name": "HRプロ_単独DM", "time": "12時",
    "note": 21, "project": 23, "draft": 24, "status": 25,
    "before7DaySend": true
  },
  {
    "site": "HRプロ", "name": "HRプロ_アンケート", "time": "12時",
    "note": 26, "draft": 28, "status": 29,
    "before7DaySend": true, "deadline": 5, "survey": true
  },
  {
    "site": "経営プロ", "name": "経営プロ自社枠7:30", "time": "7時30分",
    "note": 31, "project": 33, "draft": 34, "status": 35,
    "inside": true
  },
  {
    "site": "経営プロ", "name": "経営プロ_info広告", "time": "7時30分",
    "note": 36, "draft": 37, "status": 38,
    "inside": true, "dummyOutside": true
  },
  {
    "site": "経営プロ", "name": "経営プロ_6行", "time": "7時30分",
    "note": 39, "draft": 40, "status": 41
  },
  {
    "site": "経営プロ", "name": "経営プロ_単独DM", "time": "12時",
    "note": 42, "project": 44, "draft": 45, "status": 46,
    "before7DaySend": true
  },
  {
    "site": "経営プロ", "name": "経営プロ_アンケート", "time": "12時",
    "note": 47, "draft": 49, "status": 50,
    "before7DaySend": true, "deadline": 5, "survey": true
  },
];

var PROJECTS = [
    {
      "name": "共催/PS_編集G", "owner": "編集G担当者", "isClient": false,
      "to": "site@profuture.co.jp", "cc": "kikaku@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "共催/PS_企画G", "owner": "企画G担当者", "isClient": false,
      "to": "kikaku@profuture.co.jp", "cc": "site@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "共催/PS_クラ", "owner": "", "isClient": true,
      "send5": true, "send3": true
    },
    {
      "name": "村上案件（イレギュラー）", "owner": "村上", "isClient": false,
      "to": "t.murakami@profuture.co.jp", "cc": "site@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "HRサポート", "owner": "", "isClient": false,
      "to": "staff", "cc": "hrsupport@profuture.co.jp", "cc2": "nyuko@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "企画G作成", "owner": "企画G担当者", "isClient": false,
      "to": "kikaku@profuture.co.jp", "cc": "staff",
      "send5": true, "send3": true
    },
    {
      "name": "調査レポート", "owner": "生方", "isClient": false,
      "to": "s.ubukata@profuture.co.jp", "cc": "site@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "コラム編集企画", "owner": "生方", "isClient": false,
      "to": "s.ubukata@profuture.co.jp", "cc": "site@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "オリジナル編集企画", "owner": "生方", "isClient": false,
      "to": "s.ubukata@profuture.co.jp", "cc": "site@profuture.co.jp",
      "send5": true, "send3": true
    },
    {
      "name": "ミニアンケート", "owner": "", "isClient": true,
      "miniSurvey": true,
      "send5": false, "send3": false
    },
    {
      "name": "Podcast単独", "owner": "松岡", "isClient": false,
      "to": "h.matsuoka@profuture.co.jp", "cc": "hrsupport@profuture.co.jp",
      "send5": true, "send3": true
    },
];

// 枠の設定
var COLUMNS_IRREGULAR = [
    {
      "site": "HRプロ", "name": "HRプロ_単独DM", "time": "16時",
      "note": 4, "project": 6, "draft": 7, "status": 8,
      "before7DaySend": true
    },
];


function mailReminder() {
    remindRegularMail();
    remindIrregularMail();
}


function remindRegularMail() {
    remindMail(SHEET_NAME, COLUMNS);
}

function remindIrregularMail() {
    remindMail(SHEET_NAME_IRREGULAR, COLUMNS_IRREGULAR);
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

    var note; // メモ欄（送信情報が書かれている）
    var mailTplSheet; // メールテンプレートシート
    var tpl; // メール本文テンプレート
    var mailInfo; // メール送信情報
    var title; // メールタイトル
    var company; // 企業
    var targetCount = 0; // 送信/下書き対象数
    var deliveryDate; // 配信日
    var deliveryDateStr; // 配信日の文字列
    var sendType; // 送信タイプ 送信,下書き
    var beforeSalesDate; // 営業日（３営前など)

    var hasError = false;
    var canSend = false;

    var deadlineDate;
    var deadline3;
    var deadline5;
    var deadline7;


    var projectType; // 案件対応
    var isPlanningGroupProject; // 企画G作成かどうか

    var isNew = false; // リニューアル過渡期のためのフラグ

    // メールを送信する権限があるかどうか(MAIL_FROMのエイリアスがGMailで設定されているかどうか）
    var aliases = GmailApp.getAliases();
    aliases.forEach(function(value) {
        if (value == MAIL_FROM) {
            canSend = true;
        }

        if (value == MAIL_FROM2) {
            MAIL_FROM = MAIL_FROM2;
            canSend = true;
        }
    });

    if (!canSend) {
        Browser.msgBox('あなたはGMailで[' + MAIL_FROM + ']のエイリアスが設定されていないため、メールを送信できません');
        return;
    }


    // カレンダーを上から順に処理する
    for (var i = 0; i < salesDateColumn.length; i++) {
        company = '';
        note = '';
        deadlineDate = '';
        isNew = false;


        // 締切を設定する。メール送信対象でない営業日(7,10以外)は、ここで処理が終わる
        switch (salesDateColumn[i][0]) {
            case '本日':
                deadline10before10 = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');
                deadline3 = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');
                continue;
            case '2営前':
                deadline5 = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');
                continue;
            case '3営前':
                deadline10before7 = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');
                beforeSalesDate = 3;
                deadlineDate = deadline3;
                continue;
            case '4営前':
                deadline7 = Utilities.formatDate(salesDateColumn[i][1], 'Asia/Tokyo', 'M/d');
                continue;
            case '5営前':
                beforeSalesDate = 5;
                deadlineDate = deadline5;
                continue;
            case '7営前':
                beforeSalesDate = 7;
                deadlineDate = deadline7;
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
                isNew = true;
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
            hasError = false;
            isPlanningGroupProject = false;
            projectType = '';
            projectInfo = null;

            company = salesDateColumn[i][adInfo['note'] - 1];

            // 対象の入力がない場合はスキップ
            if (!company) {
                return;
            }

            draft = salesDateColumn[i][adInfo['draft'] - 1];
            status = salesDateColumn[i][adInfo['status'] - 1];

            // 入稿に何か入力してある場合はスキップ
            if (draft !== '') {
                return;
            }

            // 8,9日前リマインダーは進捗が「仮」以外はスキップ
            if (8 <= beforeSalesDate && beforeSalesDate <= 9 && status.indexOf('仮') !== 0) {
                return;
            }

            // 7日以内は仮の場合はスキップ
            if (status.indexOf('仮') === 0 && beforeSalesDate <= 7) {
                return;
            }

            // ステータスが対象営業日前リマインド済の場合はスキップ（すでに送信しているため）
            if (status.indexOf(beforeSalesDate.toString() + 'R済') !== -1) {
                return;
            }

            // 案件対応セル
            if ('project' in adInfo) {
                projectType = salesDateColumn[i][adInfo['project'] - 1];

                // ・入力があった場合のチェック
                if (projectType != '') {
                    isPlanningGroupProject = true;

                    PROJECTS.forEach(function(_projectInfo, index) {
                        if (_projectInfo['name'] == projectType) {
                            projectInfo = _projectInfo;
                            return;
                        }
                    });

                    // 送信設定されていない日付ではメール送信しない
                    if (projectInfo) {
                        if (beforeSalesDate == 5 && !projectInfo['send5']) {
                            return;
                        }

                        if (beforeSalesDate == 3 && !projectInfo['send3']) {
                            return;
                        }
                    }

                } else {
                    isPlanningGroupProject = false;
                }
            }

            // アンケートは7日未満は送らない
            if ('survey' in adInfo && beforeSalesDate < 7) {
                return;
            }

            // 締切が5営前の場合、締切を上書きする（アンケート）
            if (('deadline' in adInfo && adInfo['deadline'] == 5) ||
                (projectInfo && 'miniSurvey' in projectInfo && projectInfo['miniSurvey'])
            ) {
                // リニューアル後は入稿期限はアンケートが10営前、それ以外(クイックミニ含む)は7営前で統一される
                if (isNew) {
                    if ('survey' in adInfo) {
                        deadlineDate = deadline10before10;
                    }
                } else {
                    deadlineDate = deadline5;
                }
            }

            note = sheet.getRange(i + START_DATA_ROW, adInfo['note']).getNote();

            // メモの入力チェック
            if (status.indexOf('仮') === 0) {
                // 仮の時はnoteの有無はチェックしない
            } else if (!note) {
                Browser.msgBox(beforeSalesDate.toString() + '営前' + adInfo['time'] + adInfo['name'] + '（' + company + '）のメモがありません。入力してください。');
                return;
            }

            mailInfo = getMailInfoFromNote(note);

            if (status.indexOf('仮') === 0) {
                mailTplSheet = ss.getSheetByName('仮枠');
            } else if (projectInfo) { // 案件対応の場合
                if (projectInfo['isClient']) {
                    if ('miniSurvey' in projectInfo && projectInfo['miniSurvey']) {
                        mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前ミニアンケート');
                    } else {
                        mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前');
                    }
                } else {
                    mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前社内');
                }
            } else {
                if (beforeSalesDate === 7 && isPlanningGroupProject) {
                    mailTplSheet = ss.getSheetByName('7営前社内');
                } else if ('survey' in adInfo) {
                    if (isNew) {
                        mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前アンケート');
                    } else {
                        mailTplSheet = ss.getSheetByName('7営前アンケート');
                    }
                } else if ('inside' in adInfo && !('dummyOutside' in adInfo)) {
                    mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前社内');
                } else {
                    mailTplSheet = ss.getSheetByName(beforeSalesDate.toString() + '営前');
                }
            }

            title = mailTplSheet.getRange('B1').getValue();
            tpl = mailTplSheet.getRange('B2').getValue();

            targetCount++;

            //        mailInfo['staff']['mail'] = getStaffMail(mailInfo['staff']['name']);

            //        if (('inside' in adInfo && adInfo['inside'] && ! mailInfo['to']['mail']) || isPlanningGroupProject) {



            // 案件対応の場合
            if (status.indexOf('仮') === 0) {
                mailInfo['to'] = {'name': '企画Ｇ', 'mail': 'kikaku@profuture.co.jp'};
                mailInfo['cc'] = [{'name': '', 'mail': 'nyuko@profuture.co.jp'}];
                mailInfo['projectType'] = projectType;
            } else if (projectInfo) {
                // クライアントではない場合は、TO/CCを上書き
                if (!projectInfo['isClient']) {
                    // TOがstaff以外の場合は上書き
                    if (projectInfo['to'] == 'staff') {
                        mailInfo['to'] = mailInfo['staff'];
                    } else {
                        mailInfo['to'] = {
                            'mail': projectInfo['to'],
                            'name': projectInfo['owner']
                        };
                    }

                    // CCがstaff以外の場合は上書き
                    mailInfo['cc'] = [];
                    if (projectInfo['cc'] == 'staff') {
                        mailInfo['cc'].push(mailInfo['staff']);
                    } else {
                        mailInfo['cc'].push({
                            'mail': projectInfo['cc']
                        });
                    }

                    // デフォルトCCは常に送る
                    if (DEFAULT_CC) {
                        mailInfo['cc'].push({
                            "name": "",
                            "mail": DEFAULT_CC
                        });
                    }

                } else if ('miniSurvey' in projectInfo && projectInfo['miniSurvey']) {
                    mailInfo['cc'].push({
                        "name": "",
                        "mail": PROQ_EMAIL
                    });

                    mailInfo['cc'].push(mailInfo['staff']);
                }
            } else {
                if (('inside' in adInfo && adInfo['inside']) || isPlanningGroupProject) {
                    mailInfo['to'] = mailInfo['staff'];
                } else {
                    mailInfo['cc'].push(mailInfo['staff']);
                }
            }

            if (!('inside' in adInfo && adInfo['inside'])) {
              mailInfo['cc'].push({
                "name": "",
                "mail": "kikaku@profuture.co.jp"
              });
            }

            mailInfo['company'] = company;
            mailInfo['deliveryDate'] = deliveryDateStr;
            mailInfo['product'] = adInfo['name'];
            mailInfo['deadlineDate'] = deadlineDate;
            mailInfo['projectType'] = projectType;
            mailInfo['beforeSalesDate'] = beforeSalesDate;

            body = setMailBody(mailInfo, tpl);

            title = title.replace(/%company%/, mailInfo['company']);
            title = title.replace(/%deliveryDate%/, mailInfo['deliveryDate']);
            title = title.replace(/%product%/, adInfo['name']);
            title = title.replace(/%beforeSalesDate%/, mailInfo['beforeSalesDate']);

            var message = getConfirmationMessage(adInfo, mailInfo, note, beforeSalesDate);

            if (status.indexOf('仮') === 0) {
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
                    if (status.indexOf('仮') === 0) {
                      statusPrefix = '仮';
                    } else {
                      statusPrefix = '';
                    }
                    sheet.getRange(i + START_DATA_ROW, adInfo['status']).setValue(statusPrefix + beforeSalesDate.toString() + 'R済');
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
    var message = beforeSalesDate.toString() + "営前" + adInfo['time'] + "[" + adInfo['site']　 + "]" + adInfo['name'] + "枠のリマインダーメール\\n";
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
function getMailInfoFromNote(note) {
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

    if (DEFAULT_CC) {
        cc.push({
            "name": "",
            "mail": DEFAULT_CC
        });
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

    /*
    // CCは本文には記載させない仕様になったのでコメントアウトしておく(2018/6/25)
    if (info['cc'].length > 0) {

      for (var i = 0; i < info['cc'].length; i++) {
        if (info['cc'][i]['name'] && 'outside' in info['cc'][i]) {
          if (! ccAdded) {
            address += String.fromCharCode(10);
            address += "cc: ";
            ccAdded = true;
          }
          address += info['cc'][i]['name'] + "様　";
        }
      }
    }
    */

    var body = tpl.replace(/%address%/, address);
    body = body.replace(/%deliveryDate%/, info['deliveryDate']);
    body = body.replace(/%product%/, info['product']);
    body = body.replace(/%deadlineDate%/, info['deadlineDate']);
    body = body.replace(/%projectType%/, info['projectType']);
    body = body.replace(/%company%/, info['company']);
    body = body.replace(/%beforeSalesDate%/, info['beforeSalesDate']);


    // アンケートは5営業前が締切になるので、テンプレートのプレースホルダーの名前を差別したい(2018/6/29)
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
    //  Logger.log(options);

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

function trim_(target){
  if (target == null || target == undefined){
    return "";
  }
  return target.replace(/(^\s+)|(\s+$)/g, "");
}
