'use client'
import {CountrySelectField} from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const SignUpPage = () => {
    
    const {
        register, 
        handleSubmit, 
        control, 
        formState: {errors, isSubmitting},
     } = useForm<SignUpFormData>( {
        defaultValues:{ 
            fullName: '', 
            email: '', 
            password: '', 
            country: 'US', 
            investmentGoals: 'Growth', 
            riskTolerance: 'Medium', 
            preferredIndustry: 'Technology'
        }, 
        mode: 'onBlur'
    }, );

    const onSubmit = async(data:SignUpFormData) => { 
        try {
            console.log(data)
        } catch(e) {
            console.error(e)}
    }

    return (
        <>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 border-4 border-yellow-500'>
                <InputField 
                    name="fullName"
                    label = "Full Name"
                    placeholder = "Fabi T"
                    register = {register}
                    error = {errors.fullName}
                    validation = {{required: 'Full name is required', minLength: 2}}
                />
                
                {/* Campo de Correo */}
                <InputField 
                    name="email"
                    label = "Email"
                    placeholder = "fabi@gmail.com"
                    register = {register}
                    error = {errors.email}
                    validation = {{required: 'Email is required', pattern: /^w+@\w+\.\w+$/, message: "Please enter an email address"}}
                />

                {/* Campo de Contraseña */}
                <InputField 
                    name="password"
                    label = "Password"
                    placeholder = "Enter a strong password"
                    type = 'password'
                    register = {register}
                    error = {errors.password}
                    validation = {{required: 'Password is required', minLength: {value: 8, message: "Password must be at least 8 characters"}}}
                />


                {/* Campo de país */}
                <CountrySelectField 
                    name='country'
                    label='Country'
                    control={control}
                    error = {errors.country}
                    required
                />


                {/*Campo de Investment Goals*/}
                <SelectField 
                    name='investmentGoals'
                    label='Investment Goals'
                    placeholder='Select your investment goals'
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                {/* Campo de Tolerancia Riesgo*/}
                <SelectField 
                    name='riskTolerance'
                    label='Risk Tolerance'
                    placeholder='Select your risk level'
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                {/* Campo de Industria Preferida*/}
                <SelectField 
                    name='preferredIndustry'
                    label='Preferred Industry'
                    placeholder='Select your preferred industry'
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />                

                <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Creating account' : 'Start your investing journey'}
                </Button>
                <FooterLink 
                    text='Already have an account?'
                    href='/sign-in'
                    linkText='Sign-in' 
                />
            </form>
        </>
    )
}

export default SignUpPage