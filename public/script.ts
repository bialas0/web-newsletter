function debounce(func: Function, delay: number) {
  let timeoutId: any;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
}

function generateTileGrid() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const numCols = Math.floor(vw / 100);
  const numRows = Math.floor(vh / 100);

  const container = document.querySelector('.tile-container') as HTMLElement;

  if (container) {
    container.innerHTML = '';

    for (let i = 0; i < numRows * numCols; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      container.appendChild(tile);
    }

    const tileWidth = vw / numCols;
    const tileHeight = vh / numRows;
    const tileSpacing = 2;
    const tileTotalWidth = tileWidth - tileSpacing;
    const tileTotalHeight = tileHeight - tileSpacing;
    const tiles = container.querySelectorAll('.tile');
    
    tiles.forEach(tile => {
      tile.setAttribute('style', `width: ${tileTotalWidth}px; height: ${tileTotalHeight}px; margin: ${tileSpacing / 2}px`);
    });

    tiles.forEach(tile => {
      tile.addEventListener('mouseenter', () => {
        tile.classList.add('glow', 'highlight');

        const index = Array.from(tiles).indexOf(tile);
        const row = Math.floor(index / numCols);
        const col = index % numCols;

        if (row > 0) {
          tiles[index - numCols].classList.add('glow', 'highlight');
        }

        if (row < numRows - 1) {
          tiles[index + numCols].classList.add('glow', 'highlight');
        }

        if (col > 0) {
          tiles[index - 1].classList.add('glow', 'highlight');
        }

        if (col < numCols - 1) {
          tiles[index + 1].classList.add('glow', 'highlight');
        }
      });

      tile.addEventListener('mouseleave', () => {
        tiles.forEach(tile => {
          tile.classList.remove('glow', 'highlight');
        });
      });
    });
  } else {
    console.error('Could not find container element');
  }
}
generateTileGrid();
window.addEventListener('resize', debounce(generateTileGrid, 250));

const bg = document.querySelector('.tile-container') as HTMLElement;

document.addEventListener('mousemove', (e: MouseEvent) => {
  const x = e.clientX;
  const y = e.clientY;
  const delay: number = 100;

  setTimeout(() => {
    bg.style.background = `radial-gradient(circle at ${x}px ${y}px, #e94141, #000000)`;
  }, delay);
});