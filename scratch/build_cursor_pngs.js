const fs = require('fs');
const path = require('path');

// Generate raw PNG buffers for 32x32 airplane cursor and 32x32 airplane hover cursor
// PNG specification: 32x32 RGBA image
function createPNG32(isHover = false) {
  // Simple BMP to PNG or minimal valid 32x32 PNG header & chunks
  // We can write valid SVG files and PNG files for maximum browser support
  const svgDefault = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M4 24 L28 4 L22 28 L16 18 L4 24 Z" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>
    <path d="M4 24 L28 4 L16 18 Z" fill="#FF9A6B"/>
    <path d="M28 4 L22 28 L16 18 Z" fill="#FF6B35"/>
  </svg>`;

  const svgHover = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M4 24 L28 4 L22 28 L16 18 L4 24 Z" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round"/>
    <path d="M4 24 L28 4 L16 18 Z" fill="#FF6B35"/>
    <path d="M28 4 L22 28 L16 18 Z" fill="#E8551F"/>
    <circle cx="28" cy="4" r="3" fill="#FF9A6B"/>
  </svg>`;

  return isHover ? svgHover : svgDefault;
}

const outDir = path.join(__dirname, '..', 'public', 'cursor');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'airplane.svg'), createPNG32(false));
fs.writeFileSync(path.join(outDir, 'airplane-hover.svg'), createPNG32(true));
console.log('Cursor SVG files created successfully!');
