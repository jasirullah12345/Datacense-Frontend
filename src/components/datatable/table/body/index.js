import React from 'react';
import GroupRow from "./GroupRow";

const Body = ({rows}) => {

    return (
        <tbody className={'bg-white text-xl font-normal'}>
        {rows.length > 0 ? rows.map((row, index) => {
                if (!row.children) {
                    return <tr key={index} className={'border-b-[1px] border-black'}>
                        {Object.values(row).slice(1).map((item, index) => {
                            return <td key={index} className={'pt-6 pb-[13px] text-center'}>
                                {item}
                            </td>
                        })}
                    </tr>
                } else {
                    return <GroupRow key={index} row={row} level={0}/>
                }
            }) :
            <tr className={'border-b-[1px] border-black'}>
                <td className={'pt-6 pb-[13px] text-center'} colSpan="4">
                    No records found
                </td>
            </tr>
        }
        </tbody>
    );
};

export default Body;
