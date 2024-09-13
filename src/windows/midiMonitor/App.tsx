import { useEffect } from 'react';
import { MidiMessage } from 'midiMonitor/components/message';
import { useMidiMessages } from 'midiMonitor/hooks/useMidiMessages';
// import { formatTime } from '../../utils/formatTime';
import { Page } from 'shared/components/Page';
// import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

// import { Content } from './components/atoms/Content';
// import { Page } from './components/atoms/Page';
// import { Sidebar } from './components/organisms/Sidebar';
// import { useCsiApi } from './hooks/useCsiApi';
// import { About } from './pages/About';
// import { Home } from './pages/Home';
// import { Install } from './pages/Install';
// import { ReaperPath } from './pages/ReaperPath';
// import { useAppDispatch, useAppSelector } from './store/hooks';
// import { fetchReaperPath } from './store/settings/actions';
// import { getReaperPath } from './store/settings/selectors';

export const App = () => {
  const { messages } = useMidiMessages();
  const paths = ['/home', '/functions', '/about', '/install'];
  // const location = useLocation();
  // const dispatch = useAppDispatch();
  // const reaperPath = useAppSelector(getReaperPath);
  const appRoot = document.getElementById('app');

  // useCsiApi();

  useEffect(() => {
    // const setClass = async () => {
    //   const className = await window.reasonusAPI.getOS();
    //   appRoot.classList.add(className);
    // };
    // dispatch(fetchReaperPath());
    // setClass();
  }, []);

  // if (!reaperPath) {
  //   return (
  //     <Page>
  //       <Sidebar/>
  //       <Content>
  //         <ReaperPath />
  //       </Content>
  //     </Page>
  //   );
  // }

  return (
    <Page>
      Midi monitor ({messages.length})
      <section>
        {messages.slice( messages.length - 30).map((message) => (
          <MidiMessage
            key={message.time}
          >
            <span className="time">{message.time}</span>
            <span className="channel">{message.channel}</span>
            <span className={`command-${message.command}`}>{message.command}</span>
            <span>{message.key}</span>
            <span>{message.value}</span>
            <span>{(message.message.trim().replace('\n', ''))}</span>
          </MidiMessage>
        ))}
      </section>
    </Page>
  );
};
// <Sidebar/>
// <Content>
//   <Routes>
//     <Route path="/home" element={<Home />} />
//     <Route path="/install" element={<Install />} />
//     <Route path="/about" element={<About />} />
//     {/* <Route path="*" element={<Home />} /> */}
//   </Routes>
//   {!paths.includes(location.pathname) && (
//     <Navigate replace to="/home" />
//   )}
// </Content>
