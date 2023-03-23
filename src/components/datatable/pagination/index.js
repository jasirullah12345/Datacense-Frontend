import React, {useMemo} from 'react';
import ArrowLeftIconDark from "assets/icons/ArrowLeft=Dark.svg";
import ArrowRightIconDark from "assets/icons/ArrowRight=Dark.svg";
import SelectBox from "../../SelectBox";

const Pagination = ({totalPages, activePage, setPage, recordPerPage, setRecordPerPage}) => {

    const isLeftDisabled = useMemo(() => {
        return activePage === 1;
    }, [activePage])

    const isRightDisabled = useMemo(() => {
        return activePage === totalPages;
    }, [activePage, totalPages])

    const options = [
        {
            value: 10,
            name: '10 records'
        },
        {
            value: 20,
            name: '20 records'
        },
        {
            value: 50,
            name: '50 records'
        }
    ]

    return (<div className={'flex items-center justify-center flex-wrap gap-5'}>
        <div
            className={'flex border-[0.5px] border-black divide-x-[1px] divide-black rounded-[5px] overflow-hidden h-10'}>
            <div className={`${!isLeftDisabled && "cursor-pointer"} w-10 flex justify-center items-center`}
                 onClick={() => !isLeftDisabled && setPage(--activePage)}>
                <img src={ArrowLeftIconDark} alt=""/>
            </div>
            {[...Array(totalPages)].map((_, index) => {
                return <div key={index}
                            className={` ${index + 1 === activePage && "bg-primary text-white"} w-10 flex justify-center items-center cursor-pointer`}
                            onClick={() => setPage(index + 1)}>
                                <span className={'text-base font-normal'}>
                                    {index + 1}
                                </span>
                </div>
            })}
            <div className={`${!isRightDisabled && "cursor-pointer"} w-10 flex justify-center items-center`}
                 onClick={() => !isRightDisabled && setPage(++activePage)}>
                <img src={ArrowRightIconDark} alt=""/>
            </div>
        </div>
        <div className={'w-[200px]'}>
            <SelectBox options={options} selected={recordPerPage} setSelected={setRecordPerPage}/>
        </div>
    </div>);
};

export default Pagination;
