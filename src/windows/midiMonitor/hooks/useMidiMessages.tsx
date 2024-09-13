import { useEffect, useState } from 'react';
import { MidiStandardMessage } from 'types';
import { formatTime } from 'utils/formatTime';

export const useMidiMessages = () => {
  const [messages, setMessages] = useState<MidiStandardMessage[]>([]);
  const [time, setTime] = useState(Date.now());

  const addMessage = (_: unknown, message: MidiStandardMessage) => {
    const newTime = time + message.deltaTime * 1000;
    const list = [
      {
        ...message,
        time: formatTime(newTime),
      },
      ...messages,
    ];
    setTime(newTime);
    setMessages(list);
  };

  useEffect(() => {
    window.midiAPI.onMidiUpdate(addMessage);
  }, []);

  return { messages };
};
