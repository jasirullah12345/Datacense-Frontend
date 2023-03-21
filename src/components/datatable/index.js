import React, {useMemo} from 'react';
import InputField from "../InputField";
import Table from "./table";
import Pagination from "./pagination";

const Datatable = (props) => {
    const {
        searchText, setSearchText, headers, rows, totalRecords, recordPerPage, setRecordPerPage, page, setPage
    } = props;

    const totalPages = useMemo(() => {
        return Math.ceil(totalRecords / recordPerPage);
    }, [totalRecords, recordPerPage])

    return (<div className={'flex flex-col items-end'}>
        <div className={'w-full max-w-[287px]'}>
            <InputField
                hideDetails
                name={'search'}
                placeholder={'Search'}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}/>
        </div>
        <div className={'w-full my-8'}>
            <Table headers={headers} rows={rows}/>
        </div>
        <Pagination totalPages={totalPages} activePage={page} setPage={setPage}/>
    </div>);
};

export default Datatable;
