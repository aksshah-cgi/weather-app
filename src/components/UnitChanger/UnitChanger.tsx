import { useState, useEffect } from 'react';
import './UnitChanger.css';

interface Props {
    onUnitChange: (arg: string) => void;
}

export const UnitChanger: React.FC<Props> = ({ onUnitChange }) => {
    const [degreeUnit, setDegreeUnit] = useState<string>('C');

    const updateUnit = (unit:string) => { 
        setDegreeUnit(unit);
        onUnitChange(unit);
    }

    return (
        <div className="unit_changer">
            <button
                type="button"
                className={degreeUnit == 'C' ? 'active' : 'inactive'}
                onClick={e => { updateUnit('C') }}
            >°C</button>
            |
            <button
                type="button"
                className={degreeUnit == 'F' ? 'active' : 'inactive'}
                onClick={e => { updateUnit('F') }}
            >°F</button>
        </div>
    )
};
