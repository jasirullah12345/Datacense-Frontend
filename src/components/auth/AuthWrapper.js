import React from 'react';
import Button from "components/Button";
import {useLocation, useNavigate} from "react-router-dom";

const AuthWrapper = ({children, registration = false}) => {
    const navigate = useNavigate();
    let location = useLocation();

    const goToRegistration = () => {
        const route = location.pathname.split('/')[1];
        if (route !== 'register') navigate('/register');
    }

    const goToLogin = () => {
        const route = location.pathname.split('/')[1];
        if (route !== 'login') navigate('/login');
    }

    return (<div className={'w-full max-w-[560px] bg-white rounded-[5px] py-[52px] px-[50px] md:px-[84px] flex flex-col text-primary'}>
        <div className={'flex justify-between w-full gap-3'}>
            <Button text={'Login'} color={registration ? 'lightSky' : 'sky'}
                    className={`${!registration && '!cursor-auto'} w-full lg:w-fit lg:min-w-[180px]`}
                    onClick={goToLogin}/>
            <Button text={'Register'} color={registration ? 'sky' : 'lightSky'}
                    className={`${registration && '!cursor-auto'} w-full lg:w-fit lg:min-w-[180px]`}
                    onClick={goToRegistration}/>
        </div>

        {children}
    </div>);
};

export default AuthWrapper;
