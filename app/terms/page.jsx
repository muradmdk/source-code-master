import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const termsdata = {
  sections: [
    {
      id: 1,
      type: "intro",
      title: "Terms of Use",
      content:
        'Welcome to Source Code Academia! By accessing or using our online learning management system (the "LMS"), you agree to be bound by the following terms and conditions (the "Terms of Use"). Please read these Terms of Use carefully before accessing or using the LMS.',
    },
    {
      id: 2,
      type: "dualContent",
      title: "- Eligibility",
      content:
        "You must be at least 18 years old to use the LMS. By using the LMS, you represent and warrant that you are 18 years of age or older and that you have the right, authority, and capacity to enter into these Terms of Use.",
      subContent:
        "While the LMS is intended for users who are at least 18 years old, children under the age of 18 may also enroll in our certain courses which are specifically desgined for kids under the age of 18 years with the consent of their parent or legal guardian. By consenting to their child's use of the LMS, the parent or legal guardian assumes all responsibility for the child's use of the platform and agrees to be bound by these Terms of Use on behalf of their child.",
    },
    {
      id: 3,
      type: "content",
      title: "- Intellectual Property",
      content:
        'The content and materials on the LMS, including but not limited to text, graphics, images, and software, are the property of Source Code Academia or its licensors and are protected by copyright and trademark laws. You may not use any content or materials on the LMS for any commercial purpose without the express written consent of Source Code Academia.',
    },
    {
      id: 4,
      type: "content",
      title: "- Disclaimer of Warranties",
      content:
        'The LMS is provided on an "as is" and "as available" basis. Source Code Academia makes no representations or warranties of any kind, express or implied, as to the operation of the LMS or the information, content, materials, or products included on the LMS.',
    },
    {
      id: 5,
      type: "content",
      title: "- Limitation of Liability",
      content:
        "In no event shall Source Code Academia be liable for any damages of any kind arising from the use of the LMS, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
    },
    {
      id: 6,
      type: "content",
      title: "- Indemnification",
      content:
        "You agree to indemnify and hold Source Code Academia and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the LMS, your violation of these Terms of Use, or your violation of any rights of another.",
    },
    {
      id: 7,
      type: "content",
      title: "- Governing Law",
      content:
        "These Terms of Use and your use of the LMS shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without giving effect to any principles of conflicts of law.",
    },
    {
      id: 8,
      type: "content",
      title: "- Changes to the Terms of Use",
      content:
        "Source Code Academia reserves the right to modify these Terms of Use at any time without prior notice. Any modifications will be effective immediately upon posting to the LMS. Your continued use of the LMS after any modifications have been made will constitute your acceptance of the modified Terms of Use.",
    },
    {
      id: 9,
      type: "content",
      title: "- Termination",
      content:
        "Source Code Academia reserves the right to terminate your access to the LMS at any time without notice.",
    },
    {
      id: 10,
      type: "dualHeading",
      title: "- Refund Policy",
      subTitle: "- For Awaiting Students (Pending Enrollment):",
      content: "Refunds are available if requested at least 15 days before the batch start date. If the request is made after this period, one month's fee will be deducted.",
      subTitle1: "- For Enrolled Students:",
      content1: "Refunds will be processed starting from the month following your notification about leaving the course. The fee for the month in which you inform us will be deducted.",
      subTitle2: "- Registration Fee:",
      content2: "50% Registration Fee is Refundable only if you complete the whole course."
    },
    {
      id: 11,
      type: "content",
      title: "- Miscellaneous",
      content:
        "These Terms of Use constitute the entire agreement between you and Source Code Academia and govern your use of the LMS. If any provision of these Terms of Use is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.",
    },
    {
      id: 12,
      type: "content",
      title: "- Contact Us",
      content: <>If you have any questions about these Terms of Use, please contact us at <span className='text-blue-600 visited:text-purple-600'><a href="info@sourcecode.com.pk">info@sourcecode.com.pk</a></span> </>,
    },
  ],
};

const renderSection = (section) => {

  if (section.type === "intro") {
    return (
      <div className='mb-4 pb-4' key={section.id}>
        <h1 className='text-4xl font-bold text-center mt-7 mb-12'>
          {section.title}
        </h1>
        <p className='mb-4 text-[14px] text-center'>
          {section.content}
        </p>
      </div>
    )
  }
  if (section.type === "content") {
    return (
      <div className='mb-4 pb-4' key={section.id}>
        <h1 className='text-2xl font-bold text-[#212529] mb-2'>
          {section.title}
        </h1>
        <p className='mb-4 text-[14px]'>
          {section.content}
        </p>
      </div>
    )
  }
  if (section.type === "dualContent") {
    return (
      <div className='mb-4 pb-4' key={section.id}>
        <h1 className='text-2xl font-bold text-[#212529] mb-2'>
          {section.title}
        </h1>
        <p className='mb-4 text-[14px]'>
          {section.content}
        </p>
        <p className='mb-4 text-[14px]'>
          {section.subContent}
        </p>
      </div>
    )
  }
  if (section.type === "dualHeading") {
    return (
      <div className='mb-4 pb-4' key={section.id}>
        <h1 className='text-2xl font-bold text-[#212529] mb-2'>
          {section.title}
        </h1>
        <h2 className='text-[16px] font-bold text-[#212529] mb-1'>
          {section.subTitle}
        </h2>
        <p className='mb-4 text-[14px]'>
          {section.content}
        </p>
        <h2 className='text-[16px] font-bold text-[#212529] mb-1'>
          {section.subTitle1}
        </h2>
        <p className='mb-4 text-[14px]'>
          {section.content1}
        </p>
        <h2 className='text-[16px] font-bold text-[#212529] mb-1'>
          {section.subTitle2}
        </h2>
        <p className='mb-4 text-[14px]'>
          {section.content2}
        </p>
      </div>
    )
  }
}

const blogs = () => {
  return (

    <>
      <Header />
      <div className='px-20 pt-[100px] pb-2.5'>
        {termsdata.sections.map((section) => renderSection(section))}
      </div>
      <Footer/>
    </>
  )
}

export default blogs
