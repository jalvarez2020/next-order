// numFloat is a simple function that converts whole numbers into a float.

export default function numFloat(x) {
  if (typeof x != Number) {
    return `${x} is` + NaN;
  } else {
    let total = x * 0.01;
    return total.toFixed(2);
  }
}
