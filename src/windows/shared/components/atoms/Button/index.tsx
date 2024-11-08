import { FC } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonSizes } from './types';
import { ControlPosition } from 'types';

export interface Props {
  children: string;
  /**
   * Sets the size of the button.
   * @default default
   */
  size?: ButtonSizes;
  /**
   * Really no f'ing clue why I added this
   * @default false
   */
  hasFeedback?: boolean;
  /**
   * Callback function for the click handling of the button
   * @returns void
   */
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onClick?: () => void;
  color: string;
  active: boolean;
  blinking?: boolean;
  hasRGB: boolean;
  position: ControlPosition;
  type?: 'round' | 'default';
}

export const Button: FC<Props> = ({
  children,
  size = 'default',
  hasFeedback = false,
  onMouseDown,
  onMouseUp,
  onClick,
  color,
  active,
  blinking = false,
  hasRGB,
  position,
  type = 'default',
}) => {
  const handleMouseDown = () => {
    if (onMouseDown) {
      onMouseDown();
    }
  };

  const handleMouseUp = () => {
    if (onMouseUp) {
      onMouseUp();
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      size={size}
      className={hasFeedback ? 'feedback' : ''}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      $color={color}
      $active={active}
      $blinking={blinking}
      hasFeedback={hasFeedback}
      hasRGB={hasRGB}
      position={position}
      $type={type}
    >
      {children}
    </StyledButton>
  );
};
