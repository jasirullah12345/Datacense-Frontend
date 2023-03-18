import React from 'react';
import {useNavigate} from "react-router-dom";
import AuthWrapper from "components/auth/AuthWrapper";
import InputField from "components/InputField";
import Button from "components/Button";
import useAuth from "hooks/useAuth";
import {Formik} from "formik";
import config from "config";
import * as Yup from 'yup';

const Register = () => {
    const navigate = useNavigate();

    const {register} = useAuth();

    return (
        <div className={'bg-primary text-white'}>
            <div className={'px-[140px] py-[40px] mx-auto flex flex-col min-h-screen'}>
                <h1 className={'font-black text-2xl'}>Datacense</h1>
                <div className={'flex flex-col items-center justify-center flex-grow'}>
                    <AuthWrapper registration>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                confirmPassword: "",
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                password: Yup.string().min(8,'Password must have 8 characters').max(255).required('Password is required'),
                                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password')
                            })}
                            onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                                try {
                                    await register(values.email, values.password).then(
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

                                    <InputField type={'password'} placeholder={"Repeat Password"} name={'confirmPassword'}
                                                value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange}
                                                error={Boolean(touched.confirmPassword) && errors.confirmPassword}/>

                                    {errors.submit && <span className={'text-red-500 text-xs'}>{errors.submit}</span>}

                                    <Button type={'submit'} disabled={isSubmitting} text={'Register'}
                                            className={'mx-auto'}/>
                                </form>
                            )}
                        </Formik>
                    </AuthWrapper>
                </div>
            </div>
        </div>
    );
};

export default Register;
