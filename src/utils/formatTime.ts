const zeroPadStart = (num: number, places: number) => String(num).padStart(places, '0');
const zeroPadEnd = (num: number, places: number) => String(num).padEnd(places, '0');

export const formatTime = (timeStamp: number): string => {
  const date = new Date(timeStamp);

  // eslint-disable-next-line max-len
  return `${zeroPadStart(date.getUTCHours(), 2)}:${zeroPadStart(date.getUTCMinutes(), 2)}:${zeroPadStart(date.getUTCSeconds(), 2)}.${zeroPadEnd(date.getUTCMilliseconds(), 3)}`;
};
