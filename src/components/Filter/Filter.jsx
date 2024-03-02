import { useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from '../Filter/Filter.module.css';
import Input from '../Input/Input';
import Select from '../Select/Select';


const Filter = ({ getFilter, resetFilter }) => {

    const [select, setSelect] = useState('');
    const filterValue = useRef(null);
    const submit = (e) => {
        e.preventDefault();
        getFilter(select, filterValue.current.value.trim());
    }

    return (
        <form className={ styles.filter } onSubmit={ submit }>
            <Select data={[
                { value: 'product', text: 'По названию' },
                { value: 'price', text: 'По цене' },
                { value: 'brand', text: 'По бренду' },
            ]} name="filters" getSelect={(e) => setSelect(e)} required/>
            <Input name="filter-param" type="text" innerRef={ filterValue } placeholder="Значение" required/>
            <Button type="submit">Показать</Button>
            <Button type="button" onClick={ () => resetFilter() }>Сбросить</Button>
        </form>
    );
}

export default Filter;
