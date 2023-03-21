import React from 'react';

const Header = ({headers}) => {
    return (
        <thead className={'bg-primary text-white font-medium text-xl'}>
            <tr>
                {headers.map((header, index) => {
                    return <th key={index} className={'py-[10px] px-[20px]'}>{header}</th>
                })}
            </tr>
        </thead>
    );
};

export default Header;
