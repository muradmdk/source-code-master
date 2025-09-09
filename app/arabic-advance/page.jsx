import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Requirements from '@/components/Requirements';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const interviewText = [
    "We are all tied to the same core. But like a circle, we are facing different directions wherever we stand in life",

    "THE Q&A POST THE INTERVIEW (PART 2)",

    "I don’t like my job, I mean I know I would be more at peace if i were doing my own thing, but still I am a fairly motivated employee of a very big company. Probably the biggest company in the world in what we do. It sends us on regular occasions to seminars and sessions where we get to learn the true meaning of success. I need you to define for me what is the core of success? Everyone defines it differently. I am very confused as to whether I wasted my life and put my kids in a wrong direction after I read your article. You’ve successfully made me think about this and I agree its the most serious issue but I have a hard time relating all this with all the successful people in the world who think otherwise. Please elaborate in private or in public but in detail please. (13 people asked of what is summed up in this question)",

    "ANSWER:",

    "Success is a very relative term. Success for one man is not going to give the other that same satisfaction e.g. If I were to cut a contract of a million dollars for singing, it might be the worst thing to happen to me. Since just because I am good at singing doesn't mean I love to sing. It just doesn't speak to my core. actually I feel hollow after 20 minutes of fine tunes out of my chords. That money will cost me a lot more than a million's worth. It will eat up my personal life. My family will suffer since I'll come home depressed, I would have to hang out with singers which I absolutely despise since they have nothing in common with me. I'll have to go to events which will belittle my very being in front of my own self and that million dollars will crawl up like an insect in my core and kill me very slowly. And by the age of 60 i'll be in a hospital thinking what if i had chosen something I loved doing over money. I know many people would justify all that, but then again, your question signifies that you are not 'many people'. This is whats happening to millions at different jobs that pay very well. And ironically millions more who are at jobs which dont even pay that well. So work towards focusing your thoughts on what you actually want to do in this life. Chasing someone else's success story will only get you regret and will definitely generate uncalled jealousy. Since we don't know these basics of true success, we start chasing every successful man we come across. I see 600 people Sharing 700 habits of highly effective people at Facebook and LinkedIn every day and on Youtube and TED etc guys like Gates and Jobs tell us routines for making that million dollar on Monday and Covey's 8th Habit makes us highly effective by Wednesday. And by Friday evening we have nothing but another warning letter from work, new source of depression, more anxiety and even panic attacks filling the hollowness we feel everywhere. By Sunday evenings we lay the foundation of the Rejection Club and inaugurate it with the fellow failures with giant wish lists, unstable career plans but wonderful eloquence in cheap restaurants and local pubs just to sink ourselves in the rum of self delusion and loudly recite quotes like 'failure is one more learning of how not to do it' just to feel like Tommy Edison for that moment. This is the usual habit of the highly unsuccessful people all over the world. Through these clubs we have a lot of friends that are our friends just because they are as pathetic and lost as we are, we have them as friends since like failure misery also loves company and we don't want to add to our depression by being the only one in the club. And you are lucky if you get all of this depression, since its at least an alarm to quit and follow your heart. Unlucky are those people who are doing good in things they hate doing. The most ironic part is that all this time these same successful entrepreneurs after their amazing motivation lectures of how to suck the planet dry, take off their suits faster than Clark Kent and fly across the world chasing poor monks like Dalai Lama & Co. (In search of satisfaction and peace and some real purpose) Sitting under an old Fig tree under self induced hypnosis terrified by the sounds of their own cash registers crying in confession of 'How scared they are from the hollow cracks of the concrete life they are living') while their highly motivated participants of the that lecture are still buying their books, taking selfies and souvenirs from the lobby of the same hotel exchanging vested interests of their next job opportunity and business cards with fancy designations written bigger than their own names, with fake smiles and plastic emotions laughing at every boring joke of their VPs over fancy dinners and wines which they enjoy only when they tour BTC. (Billed to the Company). You are not a human being if you are not organically real and attached to your core. You are a just another mannequin with a suit. You might deserve alot of glaze to make you attractive, but you dont deserve the right to have or raise kids. Since they were given to you as a FLOCK to raise value, not a STOCK to raise Price.",

    "My company’s vision is 'To reshape the future'. This is a noble purpose and the more I read this vision the more I get confused reading your article. (27 people asked for what what is summed up in this question)",

    "ANSWER:",

    "Sir, Find me a company which announces its purpose ‘We are here to make money’. Obviously it sets a human element in the core at least to show for, and we have seen many companies starting out for a greater purpose than what they are chasing now. I am not saying there isn’t any but the course we are on right now, you’ll have a hard time finding one. And all we are scraping is the lesser evils and calling them great leaders of the corporate. A company in order to survive naturally sets an index of how much subscription is required for the fiscal indicators to go green. And keeps chasing that till the CEO can save his job. And dont get me started on the corruption that they call 'corruption'. So it takes no rocket science to understand why its against the basic intelligence of the corporate to give away even 1% of the revenue for no reason and why wouldn't it be. Ask a CFO this question he'll explain to you why the right side of the ledger is the wrong side of purpose. Even when they do it, they cash mileage and air time with it. Giant corporate CSR campaigns seem better than any of the God's work on TV, especially when giant Industries goes to work for humanity doesn't it? Ask a CCO of any company this question and he'll tell you with a grin on his face where he is hiding his superman T-shirt. Please rest assure I am not against companies making money. I am just against the deception we are involved on mass level in front of our kids about these things. I am against putting the 'MAERSK' Logo on Noah's Arc and still call it noble. I am against lowering our thresholds of tolerance when it comes down to blatantly calling these things CORE VALUES even when you wont practice them unless I get paid for it. I have actually attended a funeral in Toronto which was sponsored by a catering company, with the vision statement 'We'll be there when you wont!!'. Now you tell me if they are living up to their vision or not.",

    "As a quick exercise I want you to do something. Do a quick research and cross reference the vision statements (which you can easily find on Google) of any 10 companies, and then ask the top management if the CEO’s and the stakeholders ever do a health check on how the company is living upto the vision. I bet you not even one company will be doing it not even once since its inception. The vision (purpose) statement of the company is designed to sugar coat the real purpose of making just money. That’s why you will definitely find 10 out of 10 times that every month or quarter every company wants to know the health of the revenue streams irrelevant of the purpose. The CEOs don’t want to listen to the human element described in the purpose (vision) statement. They detach themselves from it from the first time they run an expense diagram. Hence the massive corruption starts by hiding the core of the vision instead of anything else. Instead of helping the consumer, they help themselves. Employee first vs customer first debates are going on instead of vision vs achievement. Hidden charges, lack of empathy, deceit in the customer service staff, rudeness and blatant refusal of service are only a few indicators of how a shallow purpose upstairs depletes the character downstairs.",

    "The one thing that is evident in this money model is that a shallow purpose like fame or fortune will rip away the virtues, even which were gifted to you at birth. And this will happen with or without your consent. However if your purpose is the ultimate good of people, community or country or society, you will still have to equip yourself to make money to make sure you can do the good of people and communities. But you will never become greedy, nor will you step on any single person on the way of making that money since your purpose will keep reminding you that you cannot pick and choose between people or situations since need could be relative but your purpose is absolute. Patience and serenity will calm your self down through this training of sacrifice. This Purpose will obviously make you a giver throughout the course of this journey and great virtues will come inside you with or without your knowledge. You will crave to put more weight on the right side of your personal ledgers since that would be the only indicator whether someone is benefiting from you or not. And the most ironic thing is of all is that we see the example of millions of people and companies which only grew commercially, only because they were givers at the core. The trillions of examples of great customer experiences we see throughout are only about when the company shows compassion and giving ability with no charge to the customer. The sooner a company becomes a receiver and gives away the impression it had of following that human element the sooner it decays and goes out of business. Go through the history of the successful companies that failed. Go through the ironic downfalls of corporate giants and you'll see this trade they made by selling their souls to uncle Sam. Its the balance of nature that takes over and as soon as the human element goes away, the humans go away as well. And the amazing thing about money is that its a bi-product of many goals and journeys, so don’t worry about money, whatever goal you are truly trying to achieve will yield some sort of monetary channels. So money is an output of many a purpose, But money as a purpose only has one output. And that's hollowness of the soul. Beware of that.",

    "(Because of the length of the article the question count is limited)"
];


const page = () => {
    return (
        <>
            <Header/>
            <div className='mb-[70px] pt-[140px]'>

                {/* Container */}
                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                    {/* Row */}
                    <div className='flex items-center flex-wrap mx-[-15px]'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[50%] flex-[50%] min-h-[1px] px-[15px] order-2'>
                            <Image
                                src="/images/All-Courses/5.webp"
                                width={585}
                                height={405}
                                alt='arabi-for-adults'
                            />
                        </div>

                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[50%] flex-[50%] min-h-[1px] px-[15px] order-1'>
                            <div>
                                <h1 className='mb-[30px] text-[52px] font-bold'>Arabic Advance</h1>
                                <p className='mb-2.5 text-[20px] flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" className='mr-2.5 mt-[3px]'>
                                        <path id="grid" d="M1,2.5A1.5,1.5,0,0,1,2.5,1h3A1.5,1.5,0,0,1,7,2.5v3A1.5,1.5,0,0,1,5.5,7h-3A1.5,1.5,0,0,1,1,5.5ZM2.5,2a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,6,5.5v-3A.5.5,0,0,0,5.5,2ZM9,2.5A1.5,1.5,0,0,1,10.5,1h3A1.5,1.5,0,0,1,15,2.5v3A1.5,1.5,0,0,1,13.5,7h-3A1.5,1.5,0,0,1,9,5.5ZM10.5,2a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5ZM1,10.5A1.5,1.5,0,0,1,2.5,9h3A1.5,1.5,0,0,1,7,10.5v3A1.5,1.5,0,0,1,5.5,15h-3A1.5,1.5,0,0,1,1,13.5ZM2.5,10a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5Zm6.5.5A1.5,1.5,0,0,1,10.5,9h3A1.5,1.5,0,0,1,15,10.5v3A1.5,1.5,0,0,1,13.5,15h-3A1.5,1.5,0,0,1,9,13.5Zm1.5-.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5Z" transform="translate(-1 -1)" fill="#101010"></path>
                                    </svg>
                                    <strong className='mr-[5px]'>Category:</strong> Arabic Language
                                </p>
                                <p className='mb-2.5 text-[20px] flex items-center'>
                                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className='mr-2.5 mt-[3px]'>
                                        <path id="Path_4" data-name="Path 4" d="M8,3.5a.5.5,0,0,0-1,0V9a.5.5,0,0,0,.252.434l3.5,2a.5.5,0,0,0,.5-.868L8,8.71Z" fill="#101010"></path>
                                        <path id="Path_5" data-name="Path 5" d="M8,16A8,8,0,1,0,0,8,8,8,0,0,0,8,16Zm7-8A7,7,0,1,1,8,1,7,7,0,0,1,15,8Z" fill="#101010"></path>
                                    </svg>
                                    <strong className='mr-[5px]'>Duration:</strong> 18 Months
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Descittion */}
                    <div className='pt-[60px]'>
                        <p className='text-[30px] text-[#101010] mb-[40px]'>
                            This course is an 18 Months long exposure to language speaking, grammar, and writing activities and projects that will expose the student to Arabic literature, public speaking, books assessment, monologues, dialogues and debates.
                        </p>

                        {interviewText.map((para, index) => (
                            <p key={index} className="text-[#101010] mt-[15px]">
                                {para}
                            </p>
                        ))}

                    </div>


                    {/* Requirements */}
                    <div className='mt-[30px] '>
                        <h1 className='mb-[30px] text-[24px] text-[#101010] font-bold underline underline-offset-17 decoration-[#a2c95c]'>Requirements</h1>
                        <div className='grid grid-cols-3 gap-[30px]'>
                            {[
                                {
                                    image: "/images/All-Courses/internet-icon.svg",
                                    title: "Internet",
                                    text: "WiFi or Cellular Data fast internet speed required",
                                },

                                {
                                    image: "/images/All-Courses/langue-icon.svg",
                                    title: "Language(s)",
                                    text: "English, Urdu",
                                },
                                {
                                    image: "/images/All-Courses/device-icon.svg",
                                    title: "Device(s)",
                                    text: "Mobile, Laptop, Tablet with zoom application pre-installed.",
                                }
                            ].map((item, index) => (
                                <div key={index}>
                                    <Requirements data={item} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* pricing */}
                    <div className='pt-[50px]'>
                        <h1 className='text-[35px] font-bold text-center mb-[16px]'>Enrollment Plans</h1>

                        <Tabs defaultValue="account" className="">
                            <TabsList className="mx-auto mb-4">
                                <TabsTrigger value="account" className="font-bold">Individual Plan</TabsTrigger>
                                <TabsTrigger value="password" className="font-bold">Group Plan</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <div className='flex items-center justify-center flex-wrap mx-[-15]'>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center'>
                                            <h3 className='text-[18px] font-bold'>Monthly</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .6,900.
                                                <sup>00</sup>
                                            </div>
                                            <div className='flex  flex-col'>
                                                <del className='text-[#FFFF] mb-1.5 font-medium'>Rs.20,700.00</del>
                                                <span>Per Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center '>
                                            <h3 className='text-[18px] font-bold'>Quarterly</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .19,665.
                                                <sup>00</sup>
                                            </div>

                                            <div className='flex  flex-col'>
                                                <del className='text-[#909090] mb-1.5 font-medium'>Rs.20,700.00</del>
                                                <span>3 Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center'>
                                            <h3 className='text-[18px] font-bold'>Complete Course</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .111,780.
                                                <sup>00</sup>
                                            </div>

                                            <div className='flex  flex-col'>
                                                <del className='text-[#909090] mb-1.5 font-medium'>Rs.124,200.00</del>
                                                <span>18 Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </TabsContent>
                            <TabsContent value="password">
                                <div className='flex items-center justify-center flex-wrap mx-[-15]'>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center'>
                                            <h3 className='text-[18px] font-bold'>Monthly</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .20,700.
                                                <sup>00</sup>
                                            </div>
                                            <div className='flex  flex-col'>
                                                <del className='text-[#FFFF] mb-1.5 font-medium'>Rs.20,700.00</del>
                                                <span>Per Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center '>
                                            <h3 className='text-[18px] font-bold'>Quarterly</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .62,100.
                                                <sup>00</sup>
                                            </div>

                                            <div className='flex  flex-col'>
                                                <del className='text-[#909090] mb-1.5 font-medium'>Rs.20,700.00</del>
                                                <span>3 Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] pr-[15px]'>
                                        <div className='bg-white p-5 border border-[#e7e7e7] text-center'>
                                            <h3 className='text-[18px] font-bold'>Complete Course</h3>
                                            <div className='text-[35px] pt-5 pb-2.5 font-bold'>
                                                <sup>Rs.</sup>
                                                .372,600.
                                                <sup>00</sup>
                                            </div>

                                            <div className='flex  flex-col'>
                                                <del className='text-[#909090] mb-1.5 font-medium'>Rs.124,200.00</del>
                                                <span>18 Months</span>
                                            </div>
                                            <Link href="" className='inline-block text-center w-full  mt-3 py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </TabsContent>
                        </Tabs>


                    </div>

                    {/* Banner */}
                    <div className='bg-white shadow-all-3 mt-[60px]'>
                        <div className='flex items-center flex-wrap mx-[-15px]'>

                            <div className='w-[100%] max-w-[58.333333%] flex-[58.333333%] min-h-[1px] px-[15px]'>
                                <div className='pl-[30px]'>
                                    <h2 className='text-[#a2c95c] text-[28px] font-medium mb-2.5'>Sponsor a Student</h2>
                                    <h1 className='text-[45px] text-[#101010] font-bold leading-[1.12] mb-5'>
                                        Give the gift of education by sponsoring a student's fees for this course
                                    </h1>

                                    <div className='mb-2.5'>
                                        <Link href="" className='inline-block py-2 px-[25px] leading-[1] bg-[#a2c95c] text-[#101010] text-[15px] border-[2px] border-[#a2c95c] w-auto h-auto font-bold duration-400 ease-linear hover:bg-black hover:border-[#000] hover:text-[#a2c95c]  '>
                                            Sponsor Now!
                                        </Link>
                                    </div>

                                    <Link href="" className='text-[16px] font-bold flex items-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-4 h-4 text-[#a2c95c] mr-0.5' fill='#a2c95c'>
                                            <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" /></svg>
                                        View Terms and Conditions
                                    </Link>
                                </div>
                            </div>

                            <div className='w-[100%] max-w-[41.666667%] flex-[41.666667%] min-h-[1px] px-[15px]'>
                                <div>
                                    <Image
                                        src="/images/All-Courses/sponsor-img.webp"
                                        width={506}
                                        height={360}
                                        alt='requiemts'
                                        className='ml-auto'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default page
