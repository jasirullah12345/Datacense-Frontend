import React from 'react';
import {capitalize} from "utils/text-formator";

const DrawerHeader = () => {
    return (<div className={'mb-[52px] pl-[17px]'}>
        <span className={'font-black text-2xl'}>{capitalize(process.env.REACT_APP_APP_NAME)}</span>
    </div>);
};

export default DrawerHeader;
