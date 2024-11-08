import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { ControllerContext } from './context';
import { ControllerName, controllers } from 'mainWindow/controllers';

export const ControllerProvider: FC<PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line max-len
  const [controller, setControllerName] = useState<ControllerName>(localStorage.getItem('controller') as ControllerName || 'PresonusFaderPort');
  const controllerList = useMemo(() => Object.entries(controllers).map(([key, _controller]) => ({
    key: key as ControllerName,
    name: _controller.name,
  })), []);
  const activeController = useMemo(() => controllers[controller], [controller]);

  const setController = (name: ControllerName) => {
    setControllerName(name);
    localStorage.setItem('controller', name);
  };

  return (
    <ControllerContext.Provider value={{ controller, controllerList, setController, activeController }}>
      { children}
    </ControllerContext.Provider>
  );
};
