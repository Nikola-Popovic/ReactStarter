import { Button, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const StyledIconButton = styled(Button)`
    background-color: transparent;
    box-shadow: none;
    &:hover {
        background-color: transparent;
        border: none;
        box-shadow: none;
    }
    animation: none; 
    transition: none;
    webkit-transition: none;
`;

interface SkolaIconButtonProps {
    onClick: () => void;
    id?: string;
    color?: string;
    disabled?: boolean;
    className?: string;
    startIcon?: React.ReactNode;
    style?: React.CSSProperties;
}

export const SkolaIconButton = (props: PropsWithChildren<SkolaIconButtonProps>) => {
  return <StyledIconButton
    variant='contained'
    onClick={props.onClick}
    id={props.id}
    disabled={props.disabled}
    className={props.className}
    style={props.style}
    startIcon={props.startIcon}
  >
    {props.children}
  </StyledIconButton>;
};