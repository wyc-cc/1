document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count++;
      counterElement.textContent = count;
    }

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 玩家戰鬥機
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 30,
    height: 20,
    speed: 5,
    draw: function() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

// 敵機
const enemies = [];

// 子彈
const bullets = [];

// 遊戲迴圈
function gameLoop() {
    // 清除畫面
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製玩家戰鬥機
    player.draw();

    // 更新和繪製敵機
    // ...

    // 更新和繪製子彈
    // ...

    // 處理鍵盤輸入
    // ...

    // 碰撞檢測
    // ...

    // 請求下一幀
    requestAnimationFrame(gameLoop);
}

// 開始遊戲
gameLoop();