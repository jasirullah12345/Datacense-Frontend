import React, {useEffect, useState} from 'react';
import InputField from "../InputField";
import Button from "../Button";

const UserRow = ({user, setUsers, level}) => {

    const [item, setItem] = useState(user);

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
            <div className={'flex items-end gap-[32px] mb-[24px]'} style={{paddingLeft: `${58 * level}px`}}>
                <InputField placeholder={"Enter ID"} name={'id'} value={item.id} label={'ID'} hideDetails small
                            onChange={(e) => setItem({...item, id: e.target.value})}/>
                <InputField placeholder={"Enter Name"} name={'name'} value={item.name} label={'Name'} hideDetails small
                            onChange={(e) => setItem({...item, name: e.target.value})}/>
                <InputField placeholder={"Enter Age"} name={'age'} value={item.age} label={'Age'} hideDetails small
                            onChange={(e) => setItem({...item, age: e.target.value})}/>
                <InputField placeholder={"Enter Yes/No"} name={'veteran'} value={item.veteran} label={'Veteran'}
                            hideDetails small onChange={(e) => setItem({...item, veteran: e.target.value})}/>
                <Button onClick={addChildren} text={'Add Childrens'}
                        className={'py-[11px] px-[21px] font-medium text-xs h-fit whitespace-nowrap'}/>
            </div>
            {item.children && item.children.map((child, index) => {
                return <UserRow key={index} user={child} setUsers={onSetUser} level={level + 1}/>

            })}
        </div>
    );
};

export default UserRow;
