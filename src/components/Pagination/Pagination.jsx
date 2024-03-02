import Button from '../Button/Button';
import styles from '../Pagination/Pagination.module.css';


const Pagination = ({ pageCount, currentPage, changePage }) => {
    const getPages = (pagesCount, currentPage) => {
        if (pagesCount < 10) return Array.from({ length: pagesCount }, (_, i) => `${i + 1}`);
    
        let first = 1, second = (pagesCount > 1) ? 2 : -1, penultimate = pagesCount - 1, last = pagesCount;
        let skip = '...';
        return [
            `${first}`,
            `${second}`,
            (currentPage - 2 > second) && skip,
            (currentPage > 1) && `${currentPage - 1}`,
            `${currentPage}`,
            (currentPage < last) && `${Number(currentPage) + 1}`,
            (Number(currentPage) + 2 < penultimate) && skip,
            `${penultimate}`,
            `${last}`
        ].filter((value, index, self) => (typeof(value) !=='boolean' && (index === self.findIndex((e) => (e === value)))) || value === skip);
    }
    
    return (
        <div className={ styles.pagination }>
            {
                getPages(pageCount, currentPage).map((page, index) =>
                    <Button
                        key={ index }
                        style={{ backgroundColor: (Number(page) === Number(currentPage)) && '#fbf0c8' }}
                        onClick={() => !isNaN(page) && Number(currentPage) !== Number(page) && changePage(page)}>
                        { page }
                    </Button>
                )
            }
        </div>
    );
}

export default Pagination;
