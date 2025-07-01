/*** ↓↓ここは触らない↓↓ ***/
const END_TIME = 30; // 再生時間（秒）
const FPS = 30; // 1秒間に何回描画するか
let sound;

/*** ↓↓① ここで音楽を選択しよう↓↓ ***/
function preload() {
  sound = loadSound('music3.mp3');
}

/*** ↓↓ここは触らない↓↓ ***/
function setup() {
  createCanvas(400, 400);
  ws_setup();
  // sound.play();
  frameRate(FPS);
}

/*** ↓↓② ここを書き換えてみよう↓↓ ***/
function draw() {
  /* 1. 開始0秒から10秒まで実行↓↓ */
  if (frameCount < FPS * 15) {
    // 1-1. キャンバスを塗りつぶす
    background('white');

    // 1-2. テンプレートの関数を呼び出す
    // ws_rebound({ num: 50, opacity: [0.5, 1] }); // リバウンド
    /*
    ws_pulse({
      cols: [color('navy'), color('orange')],
      R: 0.5
    }); // パルス
    */
    ws_whirl({ cols: [color('navy')], opacity: [0.5, 0.9] }); // ウィール

    // ws_spiral({}); // スパイラル
    // ws_grid({}); // グリッド
    // ws_line({}); // ライン
  } else if (frameCount == FPS * 15) {
    // 1-3. 上で使ったテンプレートをリセット
    ws_reset('rebound');
    // ws_reset("pulse");
    // ws_reset("whirl");
    // ws_reset("spiral");
    ws_reset('grid');
    // ws_reset("line");
  }
  //
  //
  /* 2. 開始10秒から20秒まで実行↓↓ */
  //
  else if (frameCount < FPS * 20) {
    // 2-1. キャンバスを塗りつぶす
    background('navy');

    // 2-2. テンプレートの関数を呼び出す
    // ws_rebound({});
    ws_pulse({
      num: 30,
      size: [5, 20],
      fade: 'opacity'
    });
    // ws_whirl({});
    ws_spiral({ direction: ['inf', 'left'], diameter: 150 });
    // ws_grid({});
    // ws_line({});
  } else if (frameCount == FPS * 20) {
    // 2-3. 上で使ったテンプレートをリセット
    // ws_reset("rebound");
    ws_reset('pulse');
    // ws_reset("whirl");
    ws_reset('spiral');
    // ws_reset("grid");
    // ws_reset("line");
  } else if (frameCount < FPS * 20) {
    // 2-1. キャンバスを塗りつぶす
    background('navy');

    // 2-2. テンプレートの関数を呼び出す
    // ws_rebound({});
    ws_pulse({
      num: 30,
      size: [5, 20],
      fade: 'opacity'
    });
    // ws_whirl({});
    ws_spiral({ direction: ['inf', 'left'], diameter: 150 });
    // ws_grid({});
    // ws_line({});
  } else if (frameCount == FPS * 20) {
    // 2-3. 上で使ったテンプレートをリセット
    // ws_reset("rebound");
    ws_reset('pulse');
    // ws_reset("whirl");
    ws_reset('spiral');
    // ws_reset("grid");
    // ws_reset("line");
  }
  //
  //
  /* 3. 開始20秒から最後（30秒）まで実行↓↓ */
  //
  else if (frameCount < FPS * END_TIME) {
    // 3-1. キャンバスを塗りつぶす
    background('gold');

    // 3-2. テンプレートの関数を呼び出す
    // ws_rebound({});
    // ws_pulse({});
    ws_whirl({ opacity: [0.5, 0.9], fluctuate: 'off' });
    // ws_spiral({});
    // ws_grid({});
    ws_line({
      angle: 180,
      cols: [color('skyblue'), color('yellow')]
    });
  }

  /*** ↑↑↑書き換えるのはここまで↑↑↑ ***/

  // 開始してからの「秒数」をコンソールに表示
  if (frameCount % FPS == 0) {
    print(floor(frameCount / FPS));
  }

  // プログラムの終了処理
  if (frameCount > FPS * END_TIME) {
    noLoop();
    sound.stop();
    background(255);
  }
}
