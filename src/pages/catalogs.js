import React from 'react';
import CatalogIconDark from "assets/icons/menus/Catalog=Dark.svg";

const Catalogs = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={CatalogIconDark} alt="" className={'w-16'}/>
                <span className={'font-bold text-2xl'}>Catalog</span>
            </div>
        </div>
    );
};

export default Catalogs;
