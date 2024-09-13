/**
 * Clamp the value between the given min and maximum value
 * @param value The value to clamp
 * @param min The minimal value
 * @param max The maximum value
 * @returns If between min and max, the value is returned, the min or max value otherwise
 */
export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};
