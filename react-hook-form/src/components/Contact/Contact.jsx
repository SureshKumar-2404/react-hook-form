import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function Contact() {
    const form = useForm();
    const { register, control, handleSubmit, formState: { errors } } = form;
    // const { errors } = formState;
    const onSubmit = (data) => {
        console.log('Form Submitted', data);
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor='username' className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type='text' id='username' {...register('username', {
                        required: {
                            value: true, message: "Username is required"
                        }, maxLength: 80
                    })
                    } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <p className='text-red-500 text-xs italic'>{errors.username?.message}</p>
                </div>


                <div className="mb-4">
                    <label htmlFor='email' className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type='email' id='email' name='email' {...register('email', {
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid Email Format"
                        },
                        validate: {
                            notAdmin: (fieldValue) => {
                                return (
                                    fieldValue !== "admin@gmail.com" || "Enter a different email address"
                                );
                            },
                            notBlackListed: (fieldValue) => {
                                return (
                                    !fieldValue.endsWith("baddomain.com") || "This email is not Supported"
                                )
                            }
                        },
                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <p className='text-red-500 text-xs italic'>{errors.email?.message}</p>
                </div>


                <div className="mb-6">
                    <label htmlFor='phone' className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type='tel' id='phone' name='phone' {...register('phone', {
                        required: {
                            value: true, message: "Phone is required",

                        },
                        minLength: {
                            value: 6,
                            message: "Minimum 6 Characters required"
                        },
                        maxLength: {
                            value: 10,
                            message: "Minimum 10 Characters required"
                        }
                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <p className='text-red-500 text-xs italic'>{errors.phone?.message}</p>

                </div>


                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    );
}

export default Contact;
