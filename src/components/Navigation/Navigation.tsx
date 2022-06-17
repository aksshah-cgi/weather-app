import './Navigation.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

interface Props {
    mode: string;
}
export const Navigation: React.FC<Props> = ({ mode }) => {
    return (
        <nav>
            <NavLink to="/">Current</NavLink>
            <NavLink to="/forecast">Forecast</NavLink>
        </nav >
    )
}
