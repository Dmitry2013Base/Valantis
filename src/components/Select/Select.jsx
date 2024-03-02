import { useEffect, useState } from 'react';
import styles from '../Select/Select.module.css';

const Select = ({ data, getSelect, ...props}) => {
    const defaultCurrent = '';
    const [current, setCurrent] = useState(defaultCurrent);
    useEffect(() => {
        if (current !== defaultCurrent) {
            getSelect(current);
        }
        // eslint-disable-next-line
    }, [current])

    return (
        <select className={ styles.select } onChange={(e) => setCurrent(e.currentTarget.value)} value={ current } { ...props }>
            <option value={ defaultCurrent } disabled>Выберите параметр</option>
            {
                data.map(item => <option key={ item.value } value={ item.value }>{ item.text }</option>)
            }
        </select>
    );
}

export default Select;
