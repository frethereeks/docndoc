"use client"
import Link from 'next/link'
import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import Image from 'next/image';
import { ASSETS_URL } from '@/app/assets';
import { appRoutePaths } from '@/app/routes/path';
import { TbDeviceMobileMessage } from "react-icons/tb";
import { BsChatDots, BsEnvelopeAt } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Form, Input, notification } from 'antd'
import TextArea from 'antd/es/input/TextArea'

type TContactProps = {
    fullname: string
    email: string
    phone: string
    message: string
}


export default function ContactContainer() {
    const [form] = Form.useForm<TContactProps>()
    const GOOGLE_MAP = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Olusegun%20Obasajo%20Way,%20secondary,%20Abuja,%20Nigeria+(Oakyard%20Properties)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
    const message = encodeURI(`Hi, I am interested in knowing more about DocNDoc`)

    const handleSubmit = async (data: TContactProps) => {
        // const fullname = encodeURI(data.fullname)
        notification.success({ message: `Thank you for reaching us ${data.fullname}. We will get back to you as soon as possible. Please wait...` })
        const message = encodeURI(`Hi, my name is ${data.fullname}. I am reaching out to inquire about the DocnDoc Content Procedure`)
        setTimeout(() => {
            window.location.href = `https://wa.me/2347016872575?text=${message}`
        }, 1500);
    }

    return (
        <main className='relative'>
            <section className="relative bg-primary px-4">
                <Image src={ASSETS_URL['female_content']} alt={'female_chart_content'} className='object-cover opacity-20' fill />
                <div className="relative w-full min-h-[40vh] md:min-h-[60vh] md:max-w-lg mx-auto flex flex-col justify-center items-center gap-2 text-center text-powder">
                    <p className="flex items-center justify-center gap-1 text-sm md:text-base uppercase">
                        <Link href={appRoutePaths.home} className='px-1'>Home</Link> <FaCaretRight /> Contact
                    </p>
                    <h2 className="text-white text-3xl md:text-5xl text-shadow-2xs font-primary font-bold">We listen when you have something to say</h2>
                    <p className="flex items-center justify-center gap-2 text-base py-1">Our staff are real humans with emotion and empathy aimed at providing guidance and support to you anytime you want it.</p>
                </div>
            </section>
            <section className="py-10 md:py-20 px-4 space-y-10 bg-light-grey">
                <h2 className="text-center text-dark text-3xl md:text-5xl text-shadow-2xs font-primary font-bold">Need more help?</h2>
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-6">
                    <aside className="bg-white rounded-sm p-4 flex gap-2 hover:-translate-y-2 transition-all duration-300">
                        <figure className="flex-shrink-0 w-20 md:w-32 bg-powder rounded-sm grid place-items-center text-4xl md:text-5xl">
                            <TbDeviceMobileMessage />
                        </figure>
                        <div className="flex-1 flex flex-col justify-center py-1 sm:py-2 md:py-3 text-dark font-primary">
                            <h2 className="text-lg md:text-lg font-primary font-bold">Text us on WhatsApp</h2>
                            <p className="text-sm sm:text-base py-0">Message and data rate may apply.</p>
                            <Link href={`https://wa.me/2347016872575?text=${message}`} target="_blank" rel="noopener noreferrer" className='w-max py-1 pr-2 underline underline-offset-2 text-text font-light font-primary'>Text Us</Link>
                        </div>
                    </aside>
                    <aside className="bg-white rounded-sm p-4 flex gap-2 hover:-translate-y-2 transition-all duration-300">
                        <figure className="flex-shrink-0 w-20 md:w-32 bg-powder rounded-sm grid place-items-center text-4xl md:text-5xl">
                            <BsChatDots />
                        </figure>
                        <div className="flex-1 flex flex-col justify-center py-1 sm:py-2 md:py-3 text-dark font-primary">
                            <h2 className="text-lg md:text-lg font-primary font-bold">Chat with a Specialist</h2>
                            <p className="text-sm sm:text-base py-0">Available 07:30am - 06:00pm. 6days a week.</p>
                            <button className='w-max py-1 pr-2 cursor-pointer underline underline-offset-2 text-text font-light font-primary'>Chat Now</button>
                        </div>
                    </aside>
                    <aside className="bg-white rounded-sm p-4 flex gap-2 hover:-translate-y-2 transition-all duration-300">
                        <figure className="flex-shrink-0 w-20 md:w-32 bg-powder rounded-sm grid place-items-center text-4xl md:text-5xl -scale-x-100">
                            <TfiHeadphoneAlt />
                        </figure>
                        <div className="flex-1 flex flex-col justify-center py-1 sm:py-2 md:py-3 text-dark font-primary">
                            <h2 className="text-lg md:text-lg font-primary font-bold">Call our Hotline</h2>
                            <p className="text-sm sm:text-base py-0">Available 08:00am - 05:00pm. 5days a week.</p>
                            <Link href={`tel: +2347016872575`} target="_blank" rel="noopener noreferrer" className='w-max py-1 pr-2 underline underline-offset-2 text-text font-light font-primary'>Call Us</Link>
                        </div>
                    </aside>
                    <aside className="bg-white rounded-sm p-4 flex gap-2 hover:-translate-y-2 transition-all duration-300">
                        <figure className="flex-shrink-0 w-20 md:w-32 bg-powder rounded-sm grid place-items-center text-4xl md:text-5xl">
                            <BsEnvelopeAt />
                        </figure>
                        <div className="flex-1 flex flex-col justify-center py-1 sm:py-2 md:py-3 text-dark font-primary">
                            <h2 className="text-lg md:text-lg font-primary font-bold">Send us an Email</h2>
                            <p className="text-sm sm:text-base py-0">We&apos;d love to hear from you.</p>
                            <Link href={`mailto: admin@docndoc.com`} target="_blank" rel="noopener noreferrer" className='w-max py-1 pr-2 underline underline-offset-2 text-text font-light font-primary'>Email Us</Link>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="relative bg-white py-10">
                <div className="container mx-auto space-y-10">
                    <div data-aos="fade-right" data-aos-delay="500" className="relative h-72 md:h-80 rounded-md bg-backdrop overflow-hidden">
                        <iframe loading='lazy' width="100%" height="100%" src={GOOGLE_MAP}></iframe>
                    </div>
                    <div className="relative px-4 w-full max-w-4xl mx-auto py-10">
                        <Form
                            form={form}
                            layout='vertical'
                            onFinish={handleSubmit}
                            className='bg-white p-4 md:px-6'
                            size='middle'
                            labelWrap
                        >
                            <div data-aos="fade-right" data-aos-delay="1000" className="grid md:grid-cols-2 gap-4">
                                <Form.Item<TContactProps> name={"fullname"} label="Full Name" rules={[{ required: true, message: 'Full Name is required' }]}>
                                    <Input className='py-2 -my-2' placeholder='Stephanie Arowolo' />
                                </Form.Item>
                                <Form.Item<TContactProps> name={"phone"} label="Phone Number" rules={[{ required: true, message: 'Phone Number is required' }]}>
                                    <Input className='py-2 -my-2 w-full' maxLength={11} placeholder='08172902760' />
                                </Form.Item>
                            </div>
                            <Form.Item<TContactProps> data-aos="fade-right" data-aos-delay="1200" name={"email"} label="Email Address" rules={[{ required: true, message: 'Email is required' }, { type: "email", message: "Enter a valid email address" }]}>
                                <Input className='py-2 -my-2' type='email' placeholder='arowosteph@gmail.com' />
                            </Form.Item>
                            <Form.Item<TContactProps> data-aos="fade-right" data-aos-delay="1300" name="message" label='Write to us' rules={[{ required: true, message: 'Message is required' }]}>
                                <TextArea className='py-2 -my-2' placeholder='Write message...' rows={5} />
                            </Form.Item>
                            <button data-aos="fade-right" data-aos-delay="1500" type='submit' className="px-6 py-2 rounded-md bg-primary hover:bg-dark/95 text-white font-medium w-max cursor-pointer flex items-center gap-2">Send Message</button>
                        </Form>
                    </div>
                </div>
            </section>
        </main>
    )
}
