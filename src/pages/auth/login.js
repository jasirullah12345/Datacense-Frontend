import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import AuthWrapper from "components/auth/AuthWrapper";
import InputField from "components/InputField";
import Button from "components/Button";
import useAuth from "hooks/useAuth";
import {Formik} from "formik";
import config from "config";
import * as Yup from 'yup';
import {capitalize} from "utils/text-formator";

const Login = () => {
    const navigate = useNavigate();

    const {login} = useAuth();

    return (
        <div className={'bg-primary text-white'}>
            <div className={'px-[30px] md:px-[140px] py-[40px] mx-auto flex flex-col min-h-screen'}>
                <h1 className={'font-black text-2xl text-center md:text-start'}>{capitalize(process.env.REACT_APP_APP_NAME)}</h1>
                <div className={'flex flex-col items-center justify-center flex-grow'}>
                    <AuthWrapper>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                                try {
                                    await login(values.email, values.password).then(
                                        () => {
                                            navigate(config.defaultPath, {replace: true});
                                        },
                                        (err) => {
                                            setStatus({success: false});
                                            setErrors({submit: err.message});
                                            setSubmitting(false);
                                        }
                                    );
                                } catch (err) {
                                    console.error(err);
                                    setStatus({success: false});
                                    setErrors({submit: err.message});
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                                <form noValidate className={'flex flex-col gap-2 pt-10'} onSubmit={handleSubmit}>
                                    <h1 className={'font-semibold text-2xl text-center pb-4'}>Login</h1>

                                    <InputField type={'email'} placeholder={"Email"} name={'email'} value={values.email}
                                                onBlur={handleBlur}
                                                onChange={handleChange} error={Boolean(touched.email) && errors.email}/>

                                    <InputField type={'password'} placeholder={"Password"} name={'password'}
                                                value={values.password} onBlur={handleBlur} onChange={handleChange}
                                                error={Boolean(touched.password) && errors.password}/>

                                    {errors.submit && <span className={'text-red-500 text-xs'}>Wrong Credentials</span>}

                                    <div className={'font-medium text-base -mt-1 mb-2 text-end'}>
                                        <Link to='/forgot'>Forgot Password?</Link>
                                    </div>

                                    <Button type={'submit'} disabled={isSubmitting} text={'Login'}
                                            className={'mx-auto min-w-[180px]'}/>
                                </form>
                            )}
                        </Formik>
                    </AuthWrapper>
                </div>
            </div>
        </div>
    );
};

export default Login;
