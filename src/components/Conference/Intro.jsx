import React, { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import emailjs from "@emailjs/browser";

import conference2 from '../../img/mactabbi/conference2.png'

import Bendjelloul from '../../img/mactabbi/BENDJELLOUL.jpg'
import Bennour from '../../img/mactabbi/BENNOUR.jpg'
import Benkirat from '../../img/mactabbi/BENKIRAT.jpg'
import Lakhel from '../../img/mactabbi/conference2.png'

const Intro = () => {

    const Conferences = [
        {
            photo: Benkirat,
            date: "13/11/2023",
            topic: "Entrepreneurial Ecosystem",
            person: "Abdelaziz BENKIRAT",
            job: "Researcher Teacher, management and entrepreneurship coach"
        },
        {
            photo: Lakhel,
            date: "14/11/2023",
            topic: "Entrepreneurship Perspectives",
            person: "Houda Lakhel ",
            job: "Entrepreneur, Owner of LH consulting"
        },
        {
            photo: Bennour,
            date: "15/11/2023",
            topic: "Social Entrepreneurship",
            person: "Farid BENNOUR",
            job: "Lecturer of economics at University Founder and CEO of Nahla Delivery"
        },
        {
            photo: Bendjelloul,
            date: "16/11/2023",
            topic: "Entrepreneurship with Impact",
            person: "Ahmed BENDJELLOUL",
            job: "Entrepreneur ,Certified International Business Mentor"
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
                    "service_2hf41nj",
                    //your template id / Email templates -> sETTINGS -> TemplateID
                    "template_2bim4tl",
                    form.current,
                    //your user id / Integration -> UserID or publicKey
                    "_tI7Cj-NqUNIQQqEb"
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
        <div className='w-full lg:h-[86.5rem] sm:w-auto sm:h-auto  flex-col'>
            <img className='lg:w-full lg:h-[80vh] sm:w-auto sm:h-auto opacity-65 ' src={conference2} />

            <div className='relative lg:-top-[22rem] sm:-top-[10rem] text-center lg:text-[3.5rem] sm:text-[1.5rem] uppercase font-bold font-sans text-white'>
                <div >Annaba</div>
                <div >entrepreneurship</div>
                <div >days</div>
            </div>

            <div className='relative lg:w-[50rem] sm:w-max sm:p-2 lg:-top-[18rem] sm:-top-[7.5rem] lg:left-[12rem] sm:left-[4rem] bg-rouge text-center lg:text-[3rem] sm:text-[1rem] uppercase font-bold font-sans text-white'>
                13-16 Nov 2023 | 2PM-5PM
            </div>

            <div className='relative lg:w-[22rem] sm:w-max sm:p-2 lg:left-[5rem] sm:left-[1rem] lg:-top-[17rem] sm:-top-[7rem] rounded-full bg-orange text-center lg:text-[2rem] sm:text-[1rem] uppercase font-bold font-sans text-white'>
                About the event
            </div>

            <div className='relative lg:w-[65rem] sm:w-auto lg:left-[5rem] sm:-left-[1rem] lg:-top-[18rem] sm:-top-[9rem] lg:text-[1rem] font-sans p-8  rounded-lg'>
                <p className='p-2'>Join us for the most exciting event of the year <strong><i>Annaba Entrepreneurship Days! </i></strong>
                    Organized by <strong className='text-rouge'><i>MacTabBI</i></strong> in partnership with the
                    <strong><i> Higher School of Management </i></strong> in Annaba,
                    this event is not just a gathering;
                    it's a celebration of innovation, inspiration, and the spirit of entrepreneurship. </p>
                <p className='p-2'>Get ready to unlock your potential and be a part of the Global Entrepreneurship Week like never before.
                    Stay tuned for a week filled with insightful sessions, inspirational talks,
                    and networking opportunities that will empower you to shape the future of business and innovation. </p>
                <p className='p-2'>Don't miss out on this incredible journey towards entrepreneurship excellence</p>
            </div>

            <div className='relative lg:w-[22rem] sm:w-max sm:p-2 lg:left-[5rem] sm:left-[1rem] lg:-top-[18rem] sm:-top-[10rem] rounded-full bg-orange text-center lg:text-[2rem] sm:text-[1rem] uppercase font-bold font-sans text-white'>
                Register NOW !
            </div>

            <div className='relative lg:w-[65rem] sm:w-max sm:p-2 lg:left-[5rem] sm:left-[1rem] lg:-top-[16rem] sm:-top-[10rem] uppercase font-bold font-sans'>
                <div>
                    <form ref={form} onSubmit={sendEmail} action="" >
                        <div class="grid w-full gap-6  md:grid-cols-3">
                            <div className='relative 
                        lg:w-max lg:h-auto
                        sm:w-full sm:h-auto'>
                                <input type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name='username'
                                    className='block py-2 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
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
                                    className='block lg:w-72 py-2 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer 
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
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                                sm:w-full'
                                    placeholder='Phone number' />
                            </div>
                        </div>

                        <p className='mt-10 lg:text[2rem] sm:text-[0.9rem] sm:w-max lg:w-auto'>
                            Pick at least one conference
                        </p>
                        <ul class="grid lg:w-full sm:w-min gap-4 md:grid-cols-2 justify-center">
                            {data.map((item, index) =>
                                <div class="flex py-1 " key={index}>
                                    <li >
                                        <input
                                            id={index}
                                            type="checkbox"
                                            name='checkedValues'
                                            onChange={handleChange}
                                            value={item.date}
                                            class="hidden peer"
                                            required="" />
                                        <label for={index} class="inline-flex items-center justify-between w-full sm:w-auto p-2 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div class="flex">
                                                <img class="lg:w-[8rem] sm:w-[4rem] lg:h-[8rem] sm:h-[4rem] text-sky-500 rounded-full"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    src={item.photo} />
                                                <div className='p-4 lg:w-[28rem] sm:w-[20rem]' >
                                                    <div class="lg:text-[16px] sm:text-[12px] text-rouge">{item.date}</div>
                                                    <div class="lg:text-[12px] sm:text-[8px]">{item.topic}</div>
                                                    <div class="lg:text-[16px] sm:text-[12px] text-rouge mt-1">{item.person}</div>
                                                    <div class="lg:text-[10px] sm:text-[8px]">{item.job}</div>
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                </div>
                            )}
                        </ul>

                        <input type="submit" value="Send"
                            className='relative lg:w-[40rem] sm:w-[20rem] lg:left-[10rem] justify-center lg:text-[18px] sm:text-sm text-white rounded-lg bg-orange py-2
                             hover:bg-yellow-300 transition-colors' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Intro