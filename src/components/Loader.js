import React from 'react';

const Loader = () => {
    return (
        <div className={'fixed z-[999] inset-0 flex items-center justify-center'}>
            <div className={'animate-spin rounded-full h-10 md:h-20 w-10 md:w-20 border-4 border-white border-t-primary'}/>
        </div>
    );
};

export default Loader;
