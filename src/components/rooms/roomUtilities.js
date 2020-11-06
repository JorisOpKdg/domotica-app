// When curtains are closed and the lighting = 0, make backgroundColor black
// When curtains are open and the lighting = 0, make backgroundColor white
// When curtains are open and the lighting < 1, make backgroundColor yellow
export function calculateBackgroundColor(alfa, curtains) {
  if (!curtains && alfa < 1) {
    return "#000";
  }
  return `rgba(255, 165, 0,${alfa / 10}`;
}

// When black background, return white text color
export function calculateTextColor(backgroundColor) {
  if (backgroundColor === "#000") {
    return "#fff";
  }
  return "#000";
}

export function getBackgroundImage(floorId) {
  switch (floorId) {
    case 1:
      return 'url("images/background/bg-kelder.jpeg")';
    case 2:
      return 'url("images/background/bg-kelder.jpeg")';
    case 3:
      return 'url("images/background/bg-kelder.jpeg")';
    case 4:
      return 'url("images/background/bg-kelder.jpeg")';
    default:
      return undefined;
  }
}
