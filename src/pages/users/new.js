import React, {useEffect, useState} from 'react';
import SuccessDialog from "components/dialogs/Success";
import SelectBox from "components/SelectBox";
import Button from "components/Button";
import UserRow from "components/users/UserRow";
import {useNavigate} from "react-router-dom";
import {dispatch} from "store";
import {createUsers, getGrandPa, getUsersWithChildrens} from "store/reducers/users";
import {useSelector} from "react-redux";

const NewUser = () => {
    const navigate = useNavigate();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [validators, setValidators] = useState([]);
    const [grandpas, setGrandpas] = useState([
        {
            value: 0,
            name: 'Select Grandpa'
        }
    ]);
    const initialUser = {
        "id": "",
        "name": "",
        "age": 0,
        "veteran": "",
        "children": [
            {
                "id": "",
                "name": "",
                "age": 0,
                "veteran": "",
                "children": []
            }
        ]
    };
    const [selectedGrandPa, setSelectedGrandPa] = useState(grandpas[0]);
    const [users, setUsers] = useState(initialUser);
    const [forceRenderCounter, setForceRenderCounter] = useState(0);

    const usersState = useSelector((state) => state.users);

    useEffect(() => {
        setGrandpas([
            {
                value: 0,
                name: 'Select Grandpa'
            }].concat(usersState.grandPaUsers));
    }, [usersState.grandPaUsers]);

    useEffect(() => {
        setUsers(usersState.usersWithChildrens);
        if (selectedGrandPa.value !== 0) {
            setValidators([]);
            setForceRenderCounter(forceRenderCounter + 1);
        }
    }, [usersState.usersWithChildrens]);

    useEffect(() => {
        if (selectedGrandPa.value !== 0) {
            dispatch(getUsersWithChildrens(selectedGrandPa.value))
        } else {
            setUsers(initialUser)
        }
    }, [selectedGrandPa]);

    useEffect(() => {
        dispatch(getGrandPa())
    }, []);


    const showDialog = () => {
        setShowSuccessDialog(true);
        setTimeout(() => {
            setShowSuccessDialog(false);
            navigate('/users');
        }, 3000);
    }

    const saveUsers = async () => {
        let allValid = true;
        validators.forEach((validatorRef, index) => {
            if (!validatorRef.current()) {
                allValid = false;
            }
        });

        if (allValid) {
            await dispatch(createUsers(users));
            showDialog();
        }
    };


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
                <UserRow key={forceRenderCounter} user={users} setUsers={(item, index) => setUsers(item)} level={0} index={0}
                         onValidate={registerValidation}/>
            </div>

            {showSuccessDialog && <SuccessDialog message={'All users has been added successfully'}/>}
        </div>
    );
};

export default NewUser;
