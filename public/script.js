function debounce(func, delay) {
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () { return func.apply(null, args); }, delay);
    };
}
function generateTileGrid() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    var numCols = Math.floor(vw / 100);
    var numRows = Math.floor(vh / 100);
    var container = document.querySelector('.tile-container');
    if (container) {
        container.innerHTML = '';
        for (var i = 0; i < numRows * numCols; i++) {
            var tile = document.createElement('div');
            tile.classList.add('tile');
            container.appendChild(tile);
        }
        var tileWidth = vw / numCols;
        var tileHeight = vh / numRows;
        var tileSpacing_1 = 2;
        var tileTotalWidth_1 = tileWidth - tileSpacing_1;
        var tileTotalHeight_1 = tileHeight - tileSpacing_1;
        var tiles_1 = container.querySelectorAll('.tile');
        tiles_1.forEach(function (tile) {
            tile.setAttribute('style', "\n      width: ".concat(tileTotalWidth_1, "px; \n      height: ").concat(tileTotalHeight_1, "px; \n      margin: ").concat(tileSpacing_1 / 2, "px"));
        });
        tiles_1.forEach(function (tile) {
            tile.addEventListener('mouseenter', function () {
                tile.classList.add('glow', 'highlight');
                var index = Array.from(tiles_1).indexOf(tile);
                var row = Math.floor(index / numCols);
                var col = index % numCols;
                if (row > 0) {
                    tiles_1[index - numCols].classList.add('glow', 'highlight');
                }
                if (row < numRows - 1) {
                    tiles_1[index + numCols].classList.add('glow', 'highlight');
                }
                if (col > 0) {
                    tiles_1[index - 1].classList.add('glow', 'highlight');
                }
                if (col < numCols - 1) {
                    tiles_1[index + 1].classList.add('glow', 'highlight');
                }
            });
            tile.addEventListener('mouseleave', function () {
                tiles_1.forEach(function (tile) {
                    tile.classList.remove('glow', 'highlight');
                });
            });
        });
    }
    else {
        console.error('Could not find container element');
    }
}
generateTileGrid();
window.addEventListener('resize', debounce(generateTileGrid, 250));
var bg = document.querySelector('.tile-container');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var delay = 100;
    setTimeout(function () {
        bg.style.background = "radial-gradient(circle at ".concat(x, "px ").concat(y, "px, #e94141, #000000)");
    }, delay);
});
function returnBtn() {
    var btn = document.querySelector('.return-btn');
    btn.addEventListener('click', function () {
        window.history.back();
    });
}
returnBtn();
