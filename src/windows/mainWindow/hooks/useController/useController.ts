import { useContext } from 'react';
import { ControllerContext } from './context';

export const useController = () => useContext(ControllerContext);
