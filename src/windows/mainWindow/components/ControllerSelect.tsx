import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useController } from 'mainWindow/hooks/useController/useController';
import { ControllerName } from 'mainWindow/controllers';

const StyledSelect = styled.select`
  background: transparent;
  border: none;
  position: absolute;
  font-size: 16px;
  top: 8px;
  right: 16px;
`;

export const ControllerSelect = () => {
  const { controllerList, setController, controller } = useController();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setController(event.target.value as ControllerName);
  };

  return (
    <StyledSelect name="" id="" onChange={ handleChange}>
      {controllerList.map((item) => (
        <option key={item.key} value={item.key} selected={item.key === controller}>{item.name}</option>
      ))}
    </StyledSelect>
  );
};
