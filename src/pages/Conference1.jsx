import React, { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import emailjs from "@emailjs/browser";

import conference from '../img/mactabbi/conference.jpg'
import conference2 from '../img/mactabbi/conference2.jpg'

// bg-conference
//bg-gradient-to-r from-rouge to-orange-600

const Conference = () => {
    const Conferences = [
        {
            date: "13/11/2023",
            topic: "Entrepreneurial Ecosystem",
            person: "Abdelaziz BENKIRAT"
        },
        {
            date: "14/11/2023",
            topic: "Entrepreneurship Perspectives",
            person: ""
        },
        {
            date: "15/11/2023",
            topic: "Social Entrepreneurship",
            person: "Farid BENNOUR"
        },
        {
            date: "16/11/2023",
            topic: "Entrepreneurship with Impact",
            person: "Ahmed BENDJELLOUL"
        }
    ]
    const [data, setData] = useState(Conferences)
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        if (checkedValues.length !== 0) {
            emailjs
                .sendForm(
                    //Your service id / Email services -> Gmail -> ServiceID
                    "service_d897vqd",
                    //your template id / Email templates -> sETTINGS -> TemplateID
                    "template_l9g7igi",
                    form.current,
                    //your user id / Integration -> UserID or publicKey
                    "VyBFQFgs0yzRNTGf8"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        setName('')
                        setMail('')
                        setPhone('')
                        navigate("/congrats")
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
        else (alert("Check at least one conference"))

    };

    const [checkedValues, setValues] = useState([])

    const handleChange = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setValues(pre => [...pre, value])
        }
        else (
            setValues(pre => {
                return [...pre.filter(conference => conference !== value)]
            })
        )
    };
    console.log(checkedValues)

    return (
        <div id='Conference'
            className='text-white bg-gradient-to-r from-rouge to-orange-600
            lg:h-full  
            sm:w-auto sm:h-auto '
        >
            <div className='flex gap-1 justify-between 
            lg:flex-row lg:w-full lg:h-full lg:px-20
            sm:flex-col sm:w-auto sm:h-auto sm:px-10'>
                <div className='justify-center p-6 
                lg:w-auto lg:h-auto
                sm:w-auto sm:h-auto'>
                    <img className='
                    lg:h-[90vh] 
                    sm:h-auto'
                        src={conference2} />
                </div>

                <div className='bg-slate-800 border border-slate-600 rounded-md shadow-lg
                p-6 backdrop-filter backdrop-blur-lg bg-opacity-30 relative mt-3
                justify-center
                lg:w-max lg:h-[95vh]'>
                    <h1 className='font-bold text-center
                    lg:text-3xl
                    sm:text-xl'>Register NOW !</h1>

                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className='relative 
                        lg:w-max lg:h-auto
                        sm:w-auto sm:h-auto'>
                            <input type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='username'
                                className='block py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer
                                lg:w-72
                                sm:w-full'
                                placeholder='Full name'
                                required />
                            {/*<label htmlFor=''
                                className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
                                peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer '>
                            Fullname</label>*/}
                        </div>

                        <div className='relative
                        lg:w-max lg:h-auto
                        sm:w-auto sm:h-auto'>
                            <input type='text'
                                required
                                value={mail}
                                name='email'
                                onChange={(e) => setMail(e.target.value)}
                                className='block lg:w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer 
                                sm:w-full'
                                placeholder='E-mail Address' />
                        </div>

                        <div className='relative 
                        lg:w-max lg:h-auto
                        sm:w-auto sm:h-auto'>
                            <input type='text'
                                value={phone}
                                pattern="[0][567][0-9]{8}"
                                required
                                name='phonenumber'
                                onChange={(e) => setPhone(e.target.value)}
                                className='block lg:w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer
                                sm:w-full'
                                placeholder='Phone number' />
                        </div>

                        <div className='relative mt-4
                        lg:w-max lg:h-auto
                        sm:w-auto sm:h-auto'>                            
                        Pick a conference
                            {data.map((item, index) =>
                                <div class="flex py-1" key={index}>
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox"
                                            aria-describedby="helper-checkbox-text"
                                            type="checkbox"
                                            name='checkedValues'
                                            onChange={handleChange}
                                            value={item.date}

                                            class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded 
                                    focus:ring-red-500 focus:ring-2" />
                                    </div>
                                    <div class="ml-2 text-sm">
                                        <label for="helper-checkbox"
                                            class="font-medium text-gray-300">
                                            {item.date}
                                        </label>
                                        <p id="helper-checkbox-text"
                                            class="text-xs font-normal text-gray-300">
                                            {item.topic}
                                        </p>
                                        <p id="helper-checkbox-text"
                                            class="text-xs font-normal text-gray-300">
                                            {item.person}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <input type="submit" value="Send"
                            className=' w-full mb-1 text-[18px] mt-2 text-black rounded bg-white py-1
                             hover:bg-gray-400 transition-colors' />
                    </form>

                </div>
            </div>

        </div>

    )
}

export default Conference