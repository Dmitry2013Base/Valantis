import './Catalog.module.css';
import Loader from '../Loader/Loader';


const Catalog = ({ array, isVisibleLoader }) => {
    return (
        <div>
            {
                isVisibleLoader 
                ? <Loader isVisible={ isVisibleLoader }/>
                : array?.length
                ? <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Бренд</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array.map(e => 
                                <tr key={ e.id }>
                                    <td>{ e.id }</td>
                                    <td>{ e.product }</td>
                                    <td>{ e.price }</td>
                                    <td>{ e.brand }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : <div>Список пуст!</div>
            }
        </div>
    );
}

export default Catalog;
