import React, {useMemo, useState} from 'react';
import Table from "./table";
import Pagination from "./pagination";
import SearchIconDark from "assets/icons/Search=Dark.svg";

const Datatable = (props) => {
    const {
        searchText, setSearchText, headers, rows, totalRecords, recordPerPage, setRecordPerPage, page, setPage
    } = props;
    const [search, setSearch] = useState(searchText);

    const totalPages = useMemo(() => {
        return Math.ceil(totalRecords / recordPerPage);
    }, [totalRecords, recordPerPage])

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchText(search);
        }
    }

    return (<div className={'flex flex-col items-end'}>
        <div className={'w-full max-w-[287px] relative'}>
            <input type="text"
                   name={'search'}
                   className={'w-full bg-[#F0F0F0] text-[#72767B] font-normal text-base py-[12px] pl-[16px] pr-[50px] rounded-[5px] outline-none'}
                   placeholder={'Search'}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   onKeyPress={onKeyPress}/>
            <img src={SearchIconDark} alt="" onClick={() => setSearchText(search)}
                 className={'absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer'}/>
        </div>
        <div className={'w-full my-8'}>
            <Table headers={headers} rows={rows}/>
        </div>
        <Pagination totalPages={totalPages} activePage={page} setPage={setPage}/>
    </div>);
};

export default Datatable;
