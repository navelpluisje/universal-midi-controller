export declare global {
	interface Window {
		midiAPI: {
      onMidiUpdate: (callback: MidiUpdateCallback) => void;
      onMidiMessage: (callback: MidiUpdateCallback) => void;
      onSysexMessage: (callback: MidiUpdateCallback) => void;
      sendMidiMessage: (midiMessage: MidiMessage) => void;
      setWindowSize: (windowSize: WindowSize) => void;
    };
    windowAPI: {
      hideMidiMonitor: () => void;
      openMidiMonitor: () => void;
    };
	}
}

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MIDI_MONITOR_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

