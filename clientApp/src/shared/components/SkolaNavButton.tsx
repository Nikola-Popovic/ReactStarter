import { Link } from 'react-router-dom';
import { SkolaButton } from './SkolaButton';

interface SkolaNavButtonProps {
    to: string;
    label: string;
    id?: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export function SkolaNavButton(props: SkolaNavButtonProps) {
  return <Link id={props.id} to={props.to} style={{ textDecoration: 'none' }}>
    <SkolaButton id={props.id} variant={props.variant} color={props.color} sx={{ ml: 2 }}>
      {props.label}
    </SkolaButton>
  </Link>;
}