import React from 'react';
import AuthWrapper from "components/auth/AuthWrapper";

const Register = () => {
    return (
        <div className={'bg-primary text-white'}>
            <div className={'px-[140px] py-[40px] mx-auto flex flex-col min-h-screen'}>
                <h1 className={'font-black text-2xl'}>Datacense</h1>
                <div className={'flex flex-col items-center justify-center flex-grow'}>
                    <AuthWrapper registration>
                        Register
                    </AuthWrapper>
                </div>
            </div>
        </div>
    );
};

export default Register;
