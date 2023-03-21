import React, {useMemo} from 'react';
import ArrowLeftIconDark from "assets/icons/ArrowLeft=Dark.svg";
import ArrowRightIconDark from "assets/icons/ArrowRight=Dark.svg";

const Pagination = ({totalPages, activePage, setPage}) => {

    const isLeftDisabled = useMemo(() => {
        return activePage === 1;
    }, [activePage])

    const isRightDisabled = useMemo(() => {
        return activePage === totalPages;
    }, [activePage, totalPages])

    return (<div className={'flex items-center space-x-5'}>
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
        <div>
            No of records
        </div>
    </div>);
};

export default Pagination;
