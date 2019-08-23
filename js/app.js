//結果の配列
let results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

//ランダム関数
function Random(){

    //配列resultの要素数を取得
    //  --.lengthは1から数える
    let resultLength = results.length - 1;

    //乱数作成
    //  math.random() … 0~1の乱数を作成する
    //  math.round … 小数点以下四捨五入
    let randomNum = Math.random();
    let num = Math.round(randomNum * resultLength);
    console.log(num);

    //乱数を返す
    return num;

}

//ボタンの取得
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){

    //関数呼び出し
    let num = Random();
    
    //数子出現
    if(num == 0){
        let kazuko = document.getElementById("kazuko");
        kazuko.innerHTML = '<img src="../images/kazuko.png" alt="kazuko">';

        let god = document.getElementById("god");
        god.textContent = "あなたは神に選ばれた人間です。";

        let sagi = document.getElementById("sagi");
        sagi.textContent = "続きを読む(有料)";
        sagi.addEventListener("click", function(){
            sagi.href = "../html/form.html"
        });
    }

    //結果を表示
    let change = document.getElementById("result");
    change.textContent = results[num];
});