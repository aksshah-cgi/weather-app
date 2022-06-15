import './Navigation.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
    return (
        <nav>
            <NavLink to="/">Current</NavLink>
            <NavLink to="/forecast">Forecast</NavLink>
        </nav>
    )
}
