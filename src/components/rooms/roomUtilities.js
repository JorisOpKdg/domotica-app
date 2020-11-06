import kelder from "./../../assets/background/bg-kelder.jpeg";
import gelijkvloers from "./../../assets/background/bg-gelijkvloers.jpeg";
import eersteVerdiep from "./../../assets/background/bg-1e-verdiep.jpeg";
import zolder from "./../../assets/background/bg-zolder.jpeg";

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
      return `url(${kelder})`;
    case 2:
      return `url(${gelijkvloers})`;
    case 3:
      return `url(${eersteVerdiep})`;
    case 4:
      return `url(${zolder})`;
    default:
      return undefined;
  }
}
