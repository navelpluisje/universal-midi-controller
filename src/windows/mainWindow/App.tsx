// import { useMidiConnection } from './hooks/useMidiConnection';
import { MidiButton } from './components/MidiButton';
import { Controller } from './components/Controller';
import { MidiFader } from './components/MidiFader';
import { MidiToggleButton } from './components/MidiToggleButton';
import { MidiEncoder } from './components/MidiEncoder';
import { MidiFPDisplay } from './components/MidiFPDisplay';
import { MidiVuMeter } from './components/MidiVuMeter';
import { useController } from './hooks/useController/useController';
import { Page } from 'shared/components/Page';

export const App = () => {
  const { activeController } = useController();

  return (
    <Page>
      <Controller>
        {activeController.controls.map((control) => {
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

          case 'VuMeter':
            return <MidiVuMeter key={control.uuid} settings={control} />;

          case 'DisplayFP':
            return <MidiFPDisplay key={control.uuid} settings={control} />;

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
