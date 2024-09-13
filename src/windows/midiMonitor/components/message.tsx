import styled from 'styled-components';

export const MidiMessage = styled.section`
    display: grid;
    row-gap: 8px;
    column-gap: 16px;
    grid-template-columns: 12ch 4ch 10ch 4ch 4ch 20ch;
    grid-template-rows: 24px;
    border-top: 1px solid #444444;
    align-items: center;

    .time {
        color: #888;
    }

    .channel {
        text-align: end;
    }

    .NoteOn {
        color: var(--color-3);
    }
    .NoteOff {
        color: var(--color-5);
    }
    .CC {
        color: var(--color-1);
    }
    .ChannelAftertouch,
    .PolyAftertouch {
      color: var(--color-2);
    }
`;
