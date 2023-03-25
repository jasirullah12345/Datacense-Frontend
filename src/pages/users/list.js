import React, {useEffect, useState} from 'react';
import Datatable from "components/datatable";
import {useSelector} from "react-redux";
import {dispatch} from "store";
import {getAllUsers} from "store/reducers/users";

const UserList = () => {
    const [searchText, setSearchText] = useState("");
    const [totalRecords, setTotalRecords] = useState(0);
    const [recordPerPage, setRecordPerPage] = useState({
        value: 10,
        name: '10 records'
    });
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState([]);
    const headers = ['id', 'Name', 'Age', 'Veteran']

    const usersState = useSelector((state) => state.users);

    useEffect(() => {
        setRows(usersState.users);
        setTotalRecords(usersState.totalRecords);
    }, [usersState]);


    useEffect(() => {
        fetchData();
    }, [searchText, recordPerPage, page]);

    const fetchData = () => {
        dispatch(getAllUsers(page, recordPerPage.value, searchText));
    }

    return (<div className={'py-[14px] lg:px-[30px]'}>
        <Datatable searchText={searchText} setSearchText={setSearchText} headers={headers} rows={rows}
                   totalRecords={totalRecords} recordPerPage={recordPerPage} setRecordPerPage={setRecordPerPage}
                   page={page} setPage={setPage}/>
    </div>);
};

export default UserList;
