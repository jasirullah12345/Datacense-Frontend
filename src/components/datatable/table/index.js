import React from 'react';
import Header from "./header";
import Body from "./body";

const Table = ({headers, rows}) => {
    return (
        <table className={'min-w-full rounded-t-[10px] overflow-hidden'}>
            <Header headers={headers}/>
            <Body rows={rows}/>
        </table>
    );
};

export default Table;
