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
                "_id": "1_abc123",
                "id": "1",
                "name": "John Doe",
                "age": 25,
                "veteran": "Yes",
                "children": [{
                    "_id": "3_def456",
                    "id": "3",
                    "name": "Doe",
                    "age": 25,
                    "veteran": "Yes",
                    "children": [{
                        "_id": "51_ghi789",
                        "id": "51",
                        "name": "John Doe",
                        "age": 25,
                        "veteran": "Yes"
                    }, {
                        "_id": "52_jkl012",
                        "id": "52",
                        "name": "John Doe",
                        "age": 25,
                        "veteran": "Yes"
                    }]
                },
                    {
                        "_id": "4_mno345",
                        "id": "4",
                        "name": "Mr.",
                        "age": 25,
                        "veteran": "Yes",
                        "children": [
                            {
                                "_id": "5_pqr678",
                                "id": "5",
                                "name": "Jasir",
                                "age": 25,
                                "veteran": "Yes"
                            },
                            {
                                "_id": "6_stu901",
                                "id": "6",
                                "name": "Ullah Khan",
                                "age": 25,
                                "veteran": "Yes"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "2_nmo987",
                "id": "2",
                "name": "Doe",
                "age": 28,
                "veteran": "No",
                "children": [
                    {
                        "_id": "7_qwe654",
                        "id": "7",
                        "name": "John Doe",
                        "age": 25,
                        "veteran": "Yes"
                    },
                    {
                        "_id": "8_asd321",
                        "id": "8",
                        "name": "John Doe",
                        "age": 25,
                        "veteran": "Yes",
                        "children": [
                            {
                                "_id": "9_zxc654",
                                "id": "9",
                                "name": "John Doe",
                                "age": 25,
                                "veteran": "Yes"
                            },
                            {
                                "_id": "10_vbn987",
                                "id": "10",
                                "name": "John Doe",
                                "age": 25,
                                "veteran": "Yes"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "11_rty246",
                "id": "11",
                "name": "John Doe",
                "age": 25,
                "veteran": "Yes"
            }
        ]

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
