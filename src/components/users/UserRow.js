import React, {useEffect, useRef, useState} from 'react';
import InputField from "../InputField";
import Button from "../Button";

const UserRow = ({user, setUsers, level, onValidate}) => {

    const [item, setItem] = useState(user);
    const [errors, setErrors] = useState({
        id: '',
        name: '',
        age: '',
        veteran: '',
    });

    const validationRef = useRef(null);

    const validate = () => {
        console.log('validate', item)
        let isValid = true;
        let newErrors = {
            id: '',
            name: '',
            age: '',
            veteran: '',
        };

        // ID validation: check if the ID field is empty
        if (!item.id.trim()) {
            isValid = false;
            newErrors.id = 'ID is required';
        }

        // Name validation: check if the name field is empty
        if (!item.name.trim()) {
            isValid = false;
            newErrors.name = 'Name is required';
        }

        // Age validation: check if the age field is empty or not a number
        if (!item.age) {
            isValid = false;
            newErrors.age = 'Age is required';
        }

        // Veteran validation: check if the veteran field is "Yes" or "No"
        if (item.veteran !== 'Yes' && item.veteran !== 'No') {
            isValid = false;
            newErrors.veteran = 'Veteran must be "Yes" or "No"';
        }

        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        validationRef.current = validate;
        onValidate(validationRef);
    }, [onValidate]);

    useEffect(() => {
        setUsers(item);
    }, [item]);

    const addChildren = () => {
        const children = item.children ? item.children : [];
        children.push({
            id: '',
            name: '',
            age: '',
            veteran: '',
            children: []
        });
        setItem({...item, children});
    }

    const onSetUser = (user) => {
        const index = item.children.findIndex(child => child._id ? child._id === user._id : child.id === user.id);
        item.children[index] = user;
        setItem({...item});
    }

    return (
        <div>
            <div className={'flex items-end gap-[32px] mb-[10px]'} style={{paddingLeft: `${58 * level}px`}}>
                <InputField placeholder={"Enter ID"} name={'id'} value={item.id} label={'ID'} small
                            onChange={(e) => setItem({...item, id: e.target.value})}
                            error={errors.id}/>
                <InputField placeholder={"Enter Name"} name={'name'} value={item.name} label={'Name'} small
                            onChange={(e) => setItem({...item, name: e.target.value})} error={errors.name}/>
                <InputField placeholder={"Enter Age"} name={'age'} type={'number'} value={item.age} label={'Age'} small
                            onChange={(e) => setItem({...item, age: e.target.value})} error={errors.age}/>
                <InputField placeholder={"Enter Yes/No"} name={'veteran'} value={item.veteran} label={'Veteran'}
                            small onChange={(e) => setItem({...item, veteran: e.target.value})} error={errors.veteran}/>
                <Button onClick={addChildren} text={'Add Childrens'}
                        className={'py-[11px] px-[21px] font-medium text-xs h-fit whitespace-nowrap mb-5'}/>
            </div>
            {item.children && item.children.map((child, index) => {
                return <UserRow key={index} user={child} setUsers={onSetUser} level={level + 1} onValidate={onValidate}/>

            })}
        </div>
    );
};

export default UserRow;
