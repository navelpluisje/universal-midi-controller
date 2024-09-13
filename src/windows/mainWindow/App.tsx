// import { useMidiConnection } from './hooks/useMidiConnection';
import { MidiButton } from './components/MidiButton';
import { Controller } from './components/Controller';
import { PresonusFaderPort } from './controllers/Presonus-FaderPort';
import { MidiFader } from './components/MidiFader';
import { MidiToggleButton } from './components/MidiToggleButton';
import { MidiEncoder } from './components/MidiEncoder';
// import { MidiMcuDisplay } from './components/MidiMcuDisplay';
// import { MidiTimeCode } from './components/MidiTimeCode';
import { Page } from 'shared/components/Page';

export const App = () => {
  return (
    <Page>
      {/* <Controller width={getControllerWidth(McuStyle.controls)} name={McuStyle.name}> */}
      <Controller width={PresonusFaderPort.width} name={PresonusFaderPort.name}>
        {PresonusFaderPort.controls.map((control) => {
          switch (control.type) {
          case 'Button':
          case 'RoundButton':
            return <MidiButton key={control.uuid} settings={control} />;

          case 'ToggleButton':
            return <MidiToggleButton key={control.uuid} settings={control} />;

          case 'Encoder':
            return <MidiEncoder key={control.uuid} settings={control} />;

          case 'Fader':
            return <MidiFader key={control.uuid} settings={control} />;

            // case 'DisplayMCU':
            //   return <MidiMcuDisplay key={control.uuid} settings={control} />;

            // case 'TimeCode':
            //   return <MidiTimeCode key={control.uuid} settings={control} />;

          default:
            return null;
          }
        })}
      </Controller>
    </Page>
  );
};
