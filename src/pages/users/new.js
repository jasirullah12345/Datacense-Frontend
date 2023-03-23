import React, {useState} from 'react';
import SuccessDialog from "components/dialogs/Success";
import SelectBox from "../../components/SelectBox";
import Button from "../../components/Button";

const NewUser = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
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

    const showDialog = () => {
        setShowSuccessDialog(true);
        setTimeout(() => {
            setShowSuccessDialog(false);
        }, 3000);
    }

    const saveUsers = () => {
        // showDialog();
    }

    return (
        <div className={'py-[14px] px-[30px]'}>
            <div className={'flex justify-between mb-[32px]'}>

                <div className={'w-[200px]'}>
                    <SelectBox options={grandpas} selected={selectedGrandPa} setSelected={setSelectedGrandPa}/>
                </div>
                <Button onClick={saveUsers} text={'Save'} color={'secondary'}
                        className={'py-[11px] px-[21px] font-medium text-xs'}/>
            </div>
            New User
            {showSuccessDialog && <SuccessDialog message={'All users has been added successfully'}/>}
        </div>
    );
};

export default NewUser;
