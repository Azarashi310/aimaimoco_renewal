<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>あいまいもこ</title>
    <link rel="stylesheet" type="text/css" href="../common/css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../common/css/common.css"/>
    <script type="text/javascript" src="../common/js/lib.js"></script>
    <script type="text/javascript" src="../common/js/common.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/index.css"/>
    <script type="text/javascript" src="./js/index.js"></script>
</head>
<body>
<?php
    /**************************************************

    	[GET favorites/list]のお試しプログラム

    	認証方式: ベアラートークン

    	配布: SYNCER
    	公式ドキュメント: https://dev.twitter.com/rest/reference/get/favorites/list
    	日本語解説ページ: https://syncer.jp/Web/API/Twitter/REST_API/GET/favorites/list/

    **************************************************/

    	// 設定
    	$bearer_token = 'AAAAAAAAAAAAAAAAAAAAAOw91AAAAAAAPHRdjJ3f6k7dUNpzB6b2aVSuIDE%3DRVXD9MquwzcGEVL4XdHd9PSzur1CKgg1hHmboFOUP8Z08NBOai' ;	// ベアラートークン
    	$request_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json' ;		// エンドポイント

    	// パラメータ (オプション)
    	$params = array(
    		"user_id" => "873674822298910720",
    "count" => "20",
    ) ;

    // パラメータがある場合
    if( $params ) {
    $request_url .= '?' . http_build_query( $params ) ;
    }

    // リクエスト用のコンテキスト
    $context = array(
    'http' => array(
    'method' => 'GET' , // リクエストメソッド
    'header' => array(			  // ヘッダー
    'Authorization: Bearer ' . $bearer_token ,
    ) ,
    ) ,
    ) ;

    // cURLを使ってリクエスト
    $curl = curl_init() ;
    curl_setopt( $curl , CURLOPT_URL , $request_url ) ;
    curl_setopt( $curl , CURLOPT_HEADER, 1 ) ;
    curl_setopt( $curl , CURLOPT_CUSTOMREQUEST , $context['http']['method'] ) ;			// メソッド
    curl_setopt( $curl , CURLOPT_SSL_VERIFYPEER , false ) ;								// 証明書の検証を行わない
    curl_setopt( $curl , CURLOPT_RETURNTRANSFER , true ) ;								// curl_execの結果を文字列で返す
    curl_setopt( $curl , CURLOPT_HTTPHEADER , $context['http']['header'] ) ;			// ヘッダー
    curl_setopt( $curl , CURLOPT_TIMEOUT , 5 ) ;										// タイムアウトの秒数
    $res1 = curl_exec( $curl ) ;
    $res2 = curl_getinfo( $curl ) ;
    curl_close( $curl ) ;

    // 取得したデータ
    $json = substr( $res1, $res2['header_size'] ) ;				// 取得したデータ(JSONなど)
    $header = substr( $res1, 0, $res2['header_size'] ) ;		// レスポンスヘッダー (検証に利用したい場合にどうぞ)
    $tweets = json_decode($json);
    ?>
<div id="main">
    <div id="globalNavBlock">
        <div class="globalNav__header">
            <div class="globalNav__Logo"><img src="../common/images/logo.png" alt="あいまいもこ"/>
            </div>
            <div class="globalNav__menuList">
                <div class="cell"><a class="link en" href="../">TOP</a></div>
                <div class="cell"><a class="link en" href="../about/">ABOUT</a></div>
                <div class="cell"><a class="link en current" href="../news/">NEWS</a></div>
                <div class="cell"><a class="link en" href="../gallery/">GALLERY</a></div>
                <div class="cell"><a class="link en disenabled">DISCOGRAPHY</a></div>
            </div>
            <div class="globalNav__sns">
                <ul class="sns">
                    <li class="button yt"><a class="link" href="#" target="_blank"><img
                            src="../common/images/header_sns_yt.jpg" alt="youtube"/></a></li>
                    <li class="button tw"><a class="link" href="#" target="_blank"><img
                            src="../common/images/header_sns_tw.jpg" alt="twitter"/></a></li>
                    <li class="button fb"><a class="link" href="#" target="_blank"><img
                            src="../common/images/header_sns_fb.jpg" alt="facebook"/></a></li>
                </ul>
            </div>
        </div>
        <div class="globalNav__side left">
            <p class="copyright">© 2016 aimaimoco. All Rights Reserved.</p>
        </div>
        <div id="contents">
            <div class="bgArea">
                <div class="bg bg3"></div>
                <div class="bg bg2"></div>
                <div class="bg bg1 current"></div>
            </div>
            <div class="news" id="contentMain">
                <div id="news">
                    <div class="inner">
                        <h1 class="news__title en">NEWS</h1>
                        <ul class="news__list">
                            <?php
                                $week = array("Sun" => "日", "Mon" => "月", "Tue" => "火", "Wed" => "水", "Thu" => "木","Fri" => "金","Sat" => "土");
                                $titleStart = '【';
                                $titleEnd = '】';
                                $titleStartPos = 0;
                                $titleEndPos = 0;
                                if (isset($tweets) && empty($tweets->errors)) {
                                    foreach ($tweets as $val) {
                                        echo '<li class="news">';
                                        $datetime = new DateTime($date);
                                        $w = (int)$datetime->format('w');
                                        echo '<p class="date">' . str_replace("-", ".", date('Y-m-d', strtotime($val->created_at))) . '（' . $week[date('D', strtotime($val->created_at))] .'）' . '</p>';
                                        echo '<div class="descriptionArea">';
                                        $titleStartPos = mb_strpos($val->text, $titleStart, 0, "UTF-8");
                                        $titleEndPos = mb_strpos($val->text, $titleEnd, 0, "UTF-8");
                                        if($titleStartPos == $titleEndPos){
                                            echo '<p class="text">' . $val->text . '</p>';
                                        }else{
                                            echo '<h2 class="title">' . mb_substr ($val->text, $titleStartPos, ($titleEndPos + 1)) . '</h2>';
                                            echo '<p class="text">' . mb_substr ($val->text, ($titleEndPos + 1)) . '</p>';
                                        }
                                        echo '</div>';
                                        echo '</li>';
                                    }
                                } else {
                                    echo 'つぶやきはありません。';
                                }
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="globalNav__side right">
            <ul class="buttons">
                <li class="button current"></li>
                <li class="button"></li>
                <li class="button"></li>
            </ul>
        </div>
        <div class="globalNav__footer"></div>
    </div>
</div>
</body>
</html>
