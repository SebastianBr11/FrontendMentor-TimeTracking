export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getSvgName(title) {
  return title.toLowerCase().replace(" ", "-");
}

export function hrOrHrs(number) {
  return number === 1 ? "hr" : "hrs";
}
