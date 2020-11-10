export const getHours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "24:00",
];

export function createValues(min, max) {
  let values = [];
  for (let i = min; i < max + 1; i++) {
    values.push(i.toString());
  }
  return values;
}

export function createTitle(service) {
  let title;
  switch (service) {
    case "temperature":
      title = "Temperatuur";
      break;
    case "music":
      title = "Muziek";
      break;
    case "lighting":
      title = "Verlichting";
      break;
    case "curtains":
      title = "Gordijnen";
      break;
    default:
      title = "Titel is ongekend";
  }
  return title;
}

export function getMinMax(service) {
  let minmax;
  switch (service) {
    case "temperature":
      minmax = { min: 1, max: 30 };
      break;
    case "music":
      minmax = { min: 1, max: 20 };
      break;
    case "lighting":
      minmax = { min: 1, max: 20 };
      break;
    default:
      minmax = null;
  }
  return minmax;
}

export function getConfigInfo(service) {
  const minmax = getMinMax(service);
  const hours = getHours;
  let values;

  if (minmax !== null) {
    values = createValues(minmax.min, minmax.max);
  } else {
    values = ["Open", "Dicht"];
  }

  return { hours, values };
}
