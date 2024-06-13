//LMAO @computers and their inability to do arithmetic on decimals
// name is misleading, it's not as safe as you think!!!

/**
 * @param _nums Array of numbers to be added
 * @returns sum of numbers in the array, rounded to 4 decimal places
 */
export function safeDecimalAdder(_nums: number[]) {
  return (
    Math.round(_nums.reduce((partialSum, n) => partialSum + n, 0) * 1e12) / 1e12
  );
}

/**
 *
 * @param _nums Array of numbers to be multiplied
 * @returns product of numbers in the array, rounded to 4 decimal places
 */
export function safeDecimalMultiplier(_nums: number[]) {
  return parseFloat(
    (
      Math.round(_nums.reduce((partialSum, n) => partialSum * n, 1) * 1e12) /
      1e12
    ).toFixed(5)
  );
}

/**
 * @param x number to be stringified
 * @returns string of numbers with commas e.g. 6,969,696
 */
export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// this is not even a calculator anymore lmao
export function csvJSON(csv: string) {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const obj = {} as any;
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
}
