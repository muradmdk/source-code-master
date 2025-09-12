'use client';
import { useState } from 'react';
import Header from '@/components/Header'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from '@/components/ui/stepper';
import { BookUser, Check, CreditCard, ListTodo, LoaderCircleIcon, LockKeyhole } from 'lucide-react';
const steps = [
    {
        id: 1,
        title: 'Start Process',
        icon: "/images/icons/person-lines-fill.svg",
        fname: "your process is started please click on the next button for Proceeding"
    },
    {
        id: 2,
        title: 'Student Detail',
        icon: "/images/icons/person-lines-fill.svg",
        fnname: "Full Name:",
        email: "Email:",
        name: "Muhammad Ali",
        mail: "alimaqbool2122@gmail.com",
        pp: "Primary Phone:",
        pno: "+923207622923",
        stitle: "Student Information",
        stext: "Please select one of the following option:",
    },
    {
        id: 3,
        title: 'Batch & Time',
        icon: "/images/icons/clock-history.svg",
    },
    {
        id: 4,
        title: 'Payment',
        icon: "/images/icons/credit-card-2-back-fill.svg",
    },
];


const page = () => {
    // const [currentStep, setCurrentStep] = useState(2);

    const [currentStep, setCurrentStep] = useState(1); // start with id=1

    const handleNext = () => {
        const currentIndex = steps.findIndex(step => step.id === currentStep);
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id);
        }
    };

    const handlePrev = () => {
        const currentIndex = steps.findIndex(step => step.id === currentStep);
        if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1].id);
        }
    };

    return (
        <>
            <Header />
            <div className='pt-[120px] pb-9'>

                <div className='mb-[30px]'>
                    <h2 className='text-[36px] font-bold text-center uppercase'>Enrolment</h2>
                </div>

                {/* Conatiner */}
                <div className='w-full max-w-[1024px] px-[15px] mx-auto'>

                    <div className=''>

                        <div className='p-2.5 bg-[#f9f9f9] border-2 border-[#f1f1f1] flex items-center gap-4'>
                            <div>
                                <Image
                                    src="/images/All-Courses/1.webp"
                                    width={585}
                                    height={405}
                                    alt='arabi-for-adults'
                                    className='!w-[100px] !h-auto'
                                />
                            </div>

                            <div>
                                <h2 className='text-[16px] font-bold'>
                                    Arabic for Adults
                                </h2>
                                <span className='text-[18px] font-bold'>
                                    PKR. 6,900.00
                                </span>
                            </div>
                        </div>

                        {/* Enrolment Card */}
                        <div className='bg-white shadow-all mt-6 p-6'>

                            <Stepper
                                value={currentStep}
                                onValueChange={setCurrentStep}
                                indicators={{
                                    completed: <Check className="size-4" />,
                                    loading: <LoaderCircleIcon className="size-4 animate-spin" />,
                                }}
                                className="space-y-8"
                            >
                                <StepperNav className="gap-3 mb-15">
                                    {steps.map((step, index) => {
                                        return (
                                            <StepperItem key={index} step={index + 1} className="relative items-start ">
                                                <StepperTrigger className="flex flex-col items-start justify-center gap-2.5 grow" asChild>
                                                    <StepperIndicator className="size-8 border-2 data-[state=completed]:text-white data-[state=completed]:bg-green-500 data-[state=inactive]:bg-transparent data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground">
                                                        <img src={step.icon} alt="" />
                                                    </StepperIndicator>
                                                    <div className="flex flex-col items-start gap-1">
                                                        <div className="text-[10px] font-semibold uppercase text-muted-foreground">Step {index + 1}</div>
                                                        <StepperTitle className="text-start text-base font-semibold group-data-[state=inactive]/step:text-muted-foreground">
                                                            {step.title}
                                                        </StepperTitle>
                                                        <div>
                                                            <Badge
                                                                variant="primary"
                                                                size="sm"
                                                                appearance="light"
                                                                className="hidden group-data-[state=active]/step:inline-flex"
                                                            >
                                                                In Progress
                                                            </Badge>
                                                            <Badge
                                                                variant="success"
                                                                size="sm"
                                                                appearance="light"
                                                                className="hidden group-data-[state=completed]/step:inline-flex"
                                                            >
                                                                Completed
                                                            </Badge>
                                                            <Badge
                                                                variant="secondary"
                                                                size="sm"
                                                                className="hidden group-data-[state=inactive]/step:inline-flex text-muted-foreground"
                                                            >
                                                                Pending
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </StepperTrigger>
                                                {steps.length > index + 1 && (
                                                    <StepperSeparator className="absolute top-4 inset-x-0 start-9 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none  group-data-[state=completed]/step:bg-green-500" />
                                                )}
                                            </StepperItem>
                                        );
                                    })}
                                </StepperNav>

                                <StepperPanel className="text-sm">
                                    {steps.map((step, index) => (
                                        step.id === currentStep && (
                                            <StepperContent key={step.id} value={step.id} className="text-center">
                                                {/* ✅ This will ONLY render when step.id === currentStep */}

                                                {/* Example: show fname only for id:1 */}
                                                {step.id === 1 && (
                                                    <span className='font-medium capitalize'>{step.fname}</span>
                                                )}

                                                {/* Example: show student details only for id:2 */}
                                                {step.id === 2 && (
                                                    <div>
                                                        <div className='flex text-start'>
                                                            <div className='flex flex-col w-1/2'>
                                                                <span className='text-[#8b8b8b] mb-1 font-normal'>{step.fnname}</span>
                                                                <span className='font-medium capitalize'>{step.name}</span>
                                                            </div>
                                                            <div className='flex flex-col w-1/2'>
                                                                <span className='text-[#8b8b8b] mb-1 font-normal'>{step.email}</span>
                                                                <span className='font-medium capitalize'>{step.mail}</span>
                                                            </div>
                                                            <div className='flex flex-col w-1/2'>
                                                                <span className='text-[#8b8b8b] mb-1 font-normal'>{step.pp}</span>
                                                                <span className='font-medium capitalize'>{step.pno}</span>
                                                            </div>
                                                        </div>

                                                        <div className='text-start mt-6'>
                                                            <h3 className='text-[18px] mb-2.5 font-bold'>{step.stitle}</h3>
                                                            <div className='pt-2 pb-4 px-2.5 border-2 border-[#f1f1f1] bg-[#f9f9f9]'>
                                                                <p className='text-[13px] mb-4'>{step.stext}</p>
                                                                <RadioGroup defaultValue="comfortable" className="flex items-center gap-5">
                                                                    <div className="flex items-center gap-3">
                                                                        <RadioGroupItem value="default" id="r1" />
                                                                        <Label htmlFor="r1">For Self</Label>
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <RadioGroupItem value="comfortable" id="r2" />
                                                                        <Label htmlFor="r2">For Friend & Family</Label>
                                                                    </div>
                                                                </RadioGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Example: for id:3 */}
                                                {step.id === 3 && (
                                                    <div className='text-start'>
                                                        <h3 className='text-[18px] mb-2.5 font-bold'>Batch & Time Selection Coming Soon...</h3>

                                                        <div className='pt-2 pb-4 px-2.5 border-2 border-[#f1f1f1] bg-[#f9f9f9]'>
                                                            <p className='text-[13px] mb-4'>
                                                                Please select time slot from available time slots list.
                                                            </p>
                                                            <div className='flex items-center gap-4'>
                                                                <div className='flex flex-col w-1/3'>
                                                                    <label className="inline-block mb-2 text-[13px]">Time Slots</label>
                                                                    <select name="time_slot" id="time_slot" className='border border-[#e5e5e5] bg-white text-[#212121] h-9 text-[13px] outline-0 px-3.5'>
                                                                        <option value="" data-time="">Select Time Slot</option>
                                                                        <option value="664" data-time="06:00 AM to 09:00 AM">06:00 AM to 09:00 AM</option>
                                                                        <option value="665" data-time="09:00 AM to 12:00 PM">09:00 AM to 12:00 PM</option>
                                                                        <option value="666" data-time="12:00 PM to 03:00 PM">12:00 PM to 03:00 PM</option>
                                                                        <option value="667" data-time="03:00 PM to 06:00 PM">03:00 PM to 06:00 PM</option>
                                                                        <option value="668" data-time="06:00 PM to 09:00 PM">06:00 PM to 09:00 PM</option>
                                                                        <option value="669" data-time="09:00 PM to 12:00 AM">09:00 PM to 12:00 AM</option>
                                                                        <option value="1776" data-time="12:00 AM to 03:00 AM">12:00 AM to 03:00 AM</option>
                                                                    </select>
                                                                </div>
                                                                <div className='flex flex-col w-1/3'>
                                                                    <label className="inline-block mb-2 text-[13px]">language</label>
                                                                    <select name="language_id" id="language_id" className='border border-[#e5e5e5] bg-white text-[#212121] h-9 text-[13px] outline-0 px-3.5'>
                                                                        <option value="" data-language="">Select Language</option>
                                                                        <option value="1" data-language="English">English</option>
                                                                        <option value="2" data-language="Urdu">Urdu</option>
                                                                    </select>
                                                                </div>
                                                                <div className='w-1/9 mt-[27px]'>
                                                                    <button type="button" className='text-center w-full py-2 px-[25px] flex items-center leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock mr-2" viewBox="0 0 16 16">
                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                                        </svg>Add
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )}

                                                {/* Example: for id:4 */}
                                                {step.id === 4 && (
                                                    <div className='text-left'>
                                                        <div className='flex items-center bg-[#eeeeee] py-2.5 mb-5'>
                                                            <div className='max-w-full flex-1 px-[15px] flex flex-col'>
                                                                Monthly: <span className='font-bold'>PKR 6,900.00</span>
                                                            </div>
                                                            <div className='max-w-full flex-1 px-[15px] flex flex-col'>
                                                                Student: <span className='font-bold'>1</span>
                                                            </div>
                                                            <div className='max-w-full flex-1 px-[15px] flex flex-col'>
                                                                Interval:<span className='font-bold'>1</span>
                                                            </div>
                                                            <div className='max-w-full flex-1 px-[15px] flex flex-col'>
                                                                Discount:<span className='font-bold'>0</span>
                                                            </div>
                                                            <div className='max-w-full flex-1 px-[15px] flex flex-col text-right'>
                                                                Total Amount:<span className='font-bold'>6,900.00</span>
                                                            </div>
                                                        </div>
                                                        <div className='max-w-[58.333333%] flex-[58.333333%] px-[15px] flex items-center mb-6'>
                                                            <label className='text-[14px] font-bold min-w-[155px]'>Have a coupon code?</label>
                                                            <input type="text" name="coupon_code" id="coupon_code" placeholder="Enter your coupon" className='mx-2 w-full h-[38px] py-1.5 px-3 text-[16px]  font-normal leading-[1.5] text-[#495057] bg-white border border-[#ced4da] rounded-[4px] outline'></input>
                                                            <button type="button" className='text-center w-full py-2 px-[25px] flex items-center leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] cursor-pointer border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>Apply Coupon</button>
                                                        </div>
                                                    </div>

                                                )}
                                            </StepperContent>
                                        )
                                    ))}
                                </StepperPanel>



                                {/* <div className='py-3 px-2.5 border border-[#f1f1f1] bg-[#f9f9f9]'>
                                    <h3 className='text-[18px] mb-2.5 font-bold'>Student Information</h3>

                                    <div>
                                        <p className='mb-4 text-[13px]'>Please select one of the following option:</p>

                                        <RadioGroup defaultValue="option-one" className="flex items-center gap-5">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-one" id="option-one" />
                                                <Label htmlFor="option-one">For Self</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-two" id="option-two" />
                                                <Label htmlFor="option-two">For Friend & Family</Label>
                                            </div>
                                        </RadioGroup>

                                    </div>
                                </div> */}


                                <div className="flex items-center justify-between gap-2.5">
                                    <Button
                                        variant="outline"
                                        onClick={handlePrev}
                                        disabled={currentStep === steps[0].id}
                                    >
                                        Previous
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={handleNext}
                                        disabled={currentStep === steps[steps.length - 1].id}
                                    >
                                        Next
                                    </Button>
                                </div>

                            </Stepper>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default page
