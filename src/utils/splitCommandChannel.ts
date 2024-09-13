export const splitCommandChannel = (cmd: number) => {
  const command = cmd >> 4;
  const channel = cmd - (command << 4);

  return [command, channel];
};
