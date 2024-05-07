import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function Contact() {
    // const form = useForm({ defaultValues: {
    //     username:"Adam",
    //     email:"adam@gmail.com",
    //     phone:"9870999000"
    // } });
    const form = useForm({
        defaultValues: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            return {
                username: "Suresh",
                email: "suresh@gmail.com",
                phone: 98078908,
                social: {
                    twitter: "",
                    facebook: ""
                },
                phoneNumbers: ["", ""],
                phNumbers: [{ number: "" }],
                age: 0,
                dob: new Date()
            }
        }
    });

    const { register, control, handleSubmit, formState: { errors, isDirty, touchedFields, dirtyFields, isValid, reset, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: "phNumbers"
    });
    console.log(`isSubmitting:${isSubmitting},
    isSubmitted:${isSubmitted},
    isSubmitSuccessful:${isSubmitSuccessful},
    submitCount:${submitCount}
    `
    )
    // const { errors } = formState;
    const onSubmit = (data) => {
        console.log('Form Submitted', data);
    }

    useEffect(() => {
        if (isSubmitSuccessful && typeof reset === 'function') {
            reset();
        }
    }, [isSubmitSuccessful]);

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor='username' className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type='text' id='username' {...register('username', {
                        required: {
                            value: true, message: "Username is required",
                        },
                        maxLength: {
                            value: 80,
                            message: "Maximum 80 Characters"
                        }
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
                            },
                            // emailAvailable: async (fieldValue) => {
                            //     const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                            //     const data = await response.json()
                            //     return data.length == 0 || 'Email Already Exists'
                            // }
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
                            message: "Minimum 6 Characters"
                        },
                        maxLength: {
                            value: 10,
                            message: "Minimum 10 Characters"
                        }

                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <p className='text-red-500 text-xs italic'>{errors.phone?.message}</p>

                </div>

                <div className="mb-4">
                    <label htmlFor='twitter' className="block text-gray-700 text-sm font-bold mb-2">Twitter</label>
                    <input type='text' id='twitter' {...register('social.twitter')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor='facebook' className="block text-gray-700 text-sm font-bold mb-2">Facebook</label>
                    <input type='text' id='twitter' {...register('social.facebook')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {/* Array Implementation  */}
                <div className="mb-4">
                    <label htmlFor='primary-phone' className="block text-gray-700 text-sm font-bold mb-2">Primary Phone</label>
                    <input type='text' id='primary-phone' {...register('phoneNumbers.[0]')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor='secondary-phone' className="block text-gray-700 text-sm font-bold mb-2">Secondary Phone</label>
                    <input type='text' id='secondary-phone' {...register('phoneNumbers.[1]')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor='List of Phone Numbers' className="block text-gray-700 text-sm font-bold mb-2">List of Phone Numbers</label>
                    <div>
                        {fields.map((field, index) => (
                            <div className='form-control flex mb-2' key={field.id}>
                                <input type='text' {...register(`phNumbers.${index}.number`)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {index > 0 && (
                                    <button type='button' onClick={() => remove(index)} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>
                                )}
                            </div>
                        ))}
                        <button type='button' onClick={() => append({ number: "" })} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Phone Number</button>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor='age' className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                    <input type='number' id='age' {...register('age', {
                        valueAsNumber: true,
                        required: {
                            value: true, message: "Age is required",
                        }
                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <p className='text-red-500 text-xs italic'>{errors.age?.message}</p>

                <div className="mb-4">
                    <label htmlFor='dob' className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                    <input type='date' id='dob' {...register('dob', {
                        valueAsDate: true,
                        required: {
                            value: true, message: "Date of birth is required",
                        }
                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button disabled={!isDirty|| !isValid || isSubmitting} className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isDirty || !isValid || isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold'}`} type="submit">
                        Submit
                    </button>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => reset()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Reset
                    </button>
                </div>


            </form>
            <DevTool control={control} />
        </div>
    );
}

export default Contact;
