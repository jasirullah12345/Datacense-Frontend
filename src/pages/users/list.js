import React, {useEffect, useState} from 'react';
import Datatable from "components/datatable";
import axios from "utils/axios";

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

    useEffect(() => {
        fetchData();
    }, [searchText, recordPerPage, page]);

    const fetchData = async () => {
        // const response = await axios.get('/users');
        // const data = await response.json();
        const data = [
            {
            id: 1, name: 'John Doe', age: 25, veteran: true, children: [{
                id: 3, name: 'John Doe', age: 25, veteran: true, children: [{
                    id: 51, name: 'John Doe', age: 25, veteran: true
                }, {
                    id: 52, name: 'John Doe', age: 25, veteran: true
                }]
            }, {
                id: 4, name: 'John Doe', age: 25, veteran: true, children: [{
                    id: 5, name: 'John Doe', age: 25, veteran: true
                }, {
                    id: 6, name: 'John Doe', age: 25, veteran: true
                }]
            }]
        }, {
            id: 2, name: 'Doe', age: 28, veteran: false, children: [{
                id: 7, name: 'John Doe', age: 25, veteran: true
            }, {
                id: 8, name: 'John Doe', age: 25, veteran: true, children: [{
                    id: 9, name: 'John Doe', age: 25, veteran: true
                }, {
                    id: 10, name: 'John Doe', age: 25, veteran: true
                }]
            }]
        }, {
            id: 11, name: 'John Doe', age: 25, veteran: true
        }]
        setTotalRecords(50);
        setRows(data);
    }

    return (<div className={'py-[14px] lg:px-[30px]'}>
            <Datatable searchText={searchText} setSearchText={setSearchText} headers={headers} rows={rows}
                       totalRecords={totalRecords} recordPerPage={recordPerPage} setRecordPerPage={setRecordPerPage}
                       page={page} setPage={setPage}/>
        </div>);
};

export default UserList;
