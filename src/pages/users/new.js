import React, {useState} from 'react';
import SuccessDialog from "components/dialogs/Success";
import SelectBox from "components/SelectBox";
import Button from "components/Button";
import UserRow from "components/users/UserRow";
import axios from "utils/axios";
import {useNavigate} from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [validators, setValidators] = useState([]);
    const [grandpas, setGrandpas] = useState([
        {
            value: 0,
            name: 'Select Grandpa'
        },
        {
            value: 123,
            name: 'Jasir Ullah Khan'
        },
        {
            value: 345,
            name: 'Ali Raza'
        }
    ]);
    const [selectedGrandPa, setSelectedGrandPa] = useState(grandpas[0]);
    const [users, setUsers] = useState({
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
                },
                    {
                        "_id": "52_jkl012",
                        "id": "52",
                        "name": "John Doe",
                        "age": 25,
                        "veteran": "Yes"
                    }
                ]
            },
                {
                    "_id": "4_mno345",
                    "id": "4",
                    "name": "Mr.",
                    "age": 25,
                    "veteran": "Yes",
                    "children": [{
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
        });

    const showDialog = () => {
        setShowSuccessDialog(true);
        setTimeout(() => {
            setShowSuccessDialog(false);
            navigate('/users');
        }, 3000);
    }

    const saveUsers = async () => {
        let allValid = true;
        validators.forEach((validatorRef) => {
            if (!validatorRef.current()) {
                allValid = false;
            }
        });

        if (allValid) {
            // await axios.post('/users', users);
            showDialog();
        }
    }

    const registerValidation = (validatorRef) => {
        setValidators((prevValidators) => {
            if (!prevValidators.includes(validatorRef)) {
                return [...prevValidators, validatorRef];
            }
            return prevValidators;
        });
    };

    return (
        <div className={'py-[14px] lg:px-[30px]'}>
            <div className={'flex justify-between mb-[32px]'}>

                <div className={'w-[200px]'}>
                    <SelectBox options={grandpas} selected={selectedGrandPa} setSelected={setSelectedGrandPa}/>
                </div>
                <Button onClick={saveUsers} text={'Save'} color={'secondary'}
                        className={'py-[11px] px-[21px] font-medium text-xs'}/>
            </div>

            <div className={'min-w-full overflow-x-scroll pb-4'}>
                <UserRow user={users} setUsers={setUsers} level={0} onValidate={registerValidation}/>
            </div>

            {showSuccessDialog && <SuccessDialog message={'All users has been added successfully'}/>}
        </div>
    );
};

export default NewUser;
