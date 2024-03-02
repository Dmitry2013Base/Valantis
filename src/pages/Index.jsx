import { useEffect, useState } from "react";
import { getFilterItems, getItemsById } from "../api/actions";
import Pagination from "../components/Pagination/Pagination";
import Catalog from "../components/Catalog/Catalog";
import Filter from "../components/Filter/Filter";
import '../assets/index.css'


const Index = () => {   
    const limit = 50;
    const [pageCount, setPageCount] = useState(1);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [itemsId, setItemsId] = useState([]);
    const [isVisibleLoader, setIsVisibleLoader] = useState(true);

    useEffect(() => {
        let page = sessionStorage.getItem('page');
        getFilter('product', '', (page !== null) ? Number(page) : -1);
        // eslint-disable-next-line
    }, [])

    const getFilter = (paramName, value, page = -1) => {
        getFilterItems(paramName, (isNaN(value) || value === '') ? value : Number(value))
            .then(e => {
                if (typeof(e) !== 'undefined') {
                    let items = e.data.result
                        .filter((value, index, self) => index === self.findIndex((e) => (e === value)));
                    setItemsId(items);
                    setPageCount(Math.ceil(items.length / limit));
                    changePage((page === -1) ? 1 : page, items);
                }
            }
        );
    }

    const changePage = (page, items = null) => {
        setIsVisibleLoader(true);
        getItemsById(((items === null) ? itemsId : items).slice(page * limit - limit, page * limit))
            .then(i => {
                if (i) {
                    setItems(i.data.result.filter((value, index, self) => index === self.findIndex((e) => (e.id === value.id))));
                    setPage(page);
                    setIsVisibleLoader(false);
                    sessionStorage.setItem('page', page);
                }
            }
        );
    }

    return (
        <section className="catalog">
            <h1 className="header">Каталог</h1>
            <div>
                <Filter getFilter={ getFilter } resetFilter={ () => getFilter('product', '') }/>
                <Catalog array={ items } isVisibleLoader={ isVisibleLoader }/>
                {
                    !isVisibleLoader && items.length ? <Pagination currentPage={ page } pageCount={ pageCount } changePage={ changePage }/> : <></>
                }
            </div>
        </section>
    );
}

export default Index;
