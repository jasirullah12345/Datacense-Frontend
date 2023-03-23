import React, {useState} from 'react';
import ArrowIcon from "assets/icons/ArrowDown=Dark.svg";

const GroupRow = ({row, level}) => {
    const [opened, setOpened] = useState(false);

    const rowColor = level === 0 ? 'bg-white' : level % 2 === 0 ? 'bg-[#F2F2F2]' : 'bg-[#E9ECEF]';

    return (<>
        <tr className={`border-b-[1px] border-black ${rowColor}`}>
            {row.children ? <td onClick={() => setOpened(!opened)} className={'cursor-pointer'}>
                    <div className={'flex justify-center space-x-1.5'}>
                        <div style={{width: `${level * 30}px`}}/>
                        <span>{row.id}</span>
                        <img src={ArrowIcon} alt="arrow"
                             className={`transition-all duration-300 origin-center ${opened && '-rotate-180'}`}/>
                    </div>
                </td> :
                <td>
                    <div className={'flex justify-center'}>
                        <div style={{width: `${level * 30}px`}}/>
                        <div>{row.id}</div>
                    </div>
                </td>}
            <td className={'pt-6 pb-[13px] text-center'}>
                {row.name}
            </td>
            <td className={'pt-6 pb-[13px] text-center'}>
                {row.age}
            </td>
            <td className={'pt-6 pb-[13px] text-center'}>
                {row.veteran}
            </td>
        </tr>
        {opened && row.children.map((child, index) => {
            return <GroupRow key={index} row={child} level={level + 1}/>
        })}
    </>);
};

export default GroupRow;
