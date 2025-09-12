"use client";
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Page = () => {
    const [activeTab, setActiveTab] = useState("open");
    const [isOpen, setIsOpen] = useState(false);
    const [tickets] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [errors, setErrors] = useState({});

    // Filter tickets (search simulation)
    const filteredTickets = tickets.filter((t) =>
        t.subject?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [formData, setFormData] = useState({
        mainCategory: "",
        subCategory: "",
        subject: "",
        message: "",
    });

    const subCategories = {
        payment: ["Incorrect Charges", "Payment Declined", "Refund Request"],
        login: ["Cannot Login", "Account Locked"],
        course: ["Cannot access online class link", "Course not showing up in course list"],
        time: ["Teacher Related Issues", "Time Change Request", "Language Change Request"],
        other: ["General Inquiry", "Suggestion and Feedback", "Other Issues"],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.mainCategory) newErrors.mainCategory = "Main Category is required.";
        if (!formData.subCategory) newErrors.subCategory = "Sub Category is required.";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted:", formData);
            alert("Form submitted successfully!");
        }
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    };

    return (
        <>
            <div className="pt-8 pb-3 mb-8 bg-[#F8F8F8] text-base">
                <div className="relative max-w-[1230px] mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-8 px-4">
                            <div className="mb-0">
                                <div className="pb-4">
                                    <h1
                                        className="relative text-2xl font-bold text-[#101010] mb-8 before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-[1.375rem] before:h-[2px] before:bg-[#a2c95c] before:z-[1]"
                                    >
                                        Need Help ?
                                    </h1>
                                    <p className="mb-4 text-gray-900">
                                        We are here to assist you with any issues or questions you may
                                        have while using our online platform. To get started, please
                                        select the main category that best fits your issue or question
                                        from the list below. You will then be asked to choose a sub
                                        category for more specific assistance.
                                    </p>

                                    <ul className="mb-4 space-y-3">
                                        <li className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-3 before:w-[18px] before:h-[2px] before:bg-[#a2c95c]">
                                            <span className="font-normal">Payment/Billing Issues:</span>{" "}
                                            If you have any questions or issues regarding charges, payment declined, refund request, or require financial assistance, please select this category.
                                        </li>
                                        <li className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-3 before:w-[18px] before:h-[2px] before:bg-[#a2c95c]">
                                            <span className="font-normal">Login/Access Issues:</span>{" "}
                                            If you have any questions or issues regarding charges, payment declined, refund request, or require financial assistance, please select this category.
                                        </li>
                                        <li className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-3 before:w-[18px] before:h-[2px] before:bg-[#a2c95c]">
                                            <span className="font-normal">Course Content/Access Issues:</span>{" "}
                                            If you are having issues accessing course materials, your learning experience or if the course is not showing up in your course list, please select this category.
                                        </li>
                                        <li className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-3 before:w-[18px] before:h-[2px] before:bg-[#a2c95c]">
                                            <span className="font-normal">Other:</span>{" "}
                                            If you have a general question or inquiry, suggestion or feedback, or any other issue not listed above, please select this category and specify your issue in the ticket.
                                        </li>
                                        <li className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-3 before:w-[18px] before:h-[2px] before:bg-[#a2c95c]">
                                            <span className="font-normal">Time/Teacher/Language Issues:</span>{" "}
                                            If you are experiencing issues related to class timings, communication language or issues related to teacher.
                                        </li>
                                    </ul>


                                    <p className="mb-0 text-gray-900">
                                        We will do our best to resolve your issue as soon as possible.
                                        Thank you for being part of Source Code Academia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 pb-1 bg-white text-base">
                <div className="max-w-[1230px] mx-auto px-4 relative">
                    {/* Header with button */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="relative text-2xl font-semibold text-[#101010] mb-4 
                         before:content-[''] before:absolute before:-bottom-4 
                         before:left-0 before:w-[1.375rem] before:h-[2px] 
                         before:bg-[#a2c95c]">
                            My Tickets
                        </h1>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-3 py-1 bg-[#a2c95c] text-black font-semibold hover:bg-black hover:text-[#a2c95c]"
                        >
                            {isOpen ? (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-x-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                    Close
                                </>
                            ) : (
                                "Create New Ticket"
                            )}
                        </button>
                    </div>

                    {/* Form (only shows if open) */}
                    {isOpen && (
                        <form onSubmit={handleSubmit} className="bg-[#f8f8f8] p-6 shadow mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Main Category */}
                                <div>
                                    <label className="block mb-1 font-normal text-sm">Main Category*</label>
                                    <Select
                                        value={formData.mainCategory}
                                        onValueChange={(value) => {
                                            setFormData({ ...formData, mainCategory: value, subCategory: "" });
                                            clearError("mainCategory"); // ✅ remove error instantly
                                        }}
                                    >
                                        <SelectTrigger className="w-full border text-sm px-3 py-2 bg-white text-gray-700">
                                            <SelectValue placeholder="Select Main Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="payment">Payment/Billing Issues</SelectItem>
                                                <SelectItem value="login">Login/Access Issues</SelectItem>
                                                <SelectItem value="course">Course Content/Access Issues</SelectItem>
                                                <SelectItem value="time">Time/Teacher/Language Issues</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.mainCategory && (
                                        <p className="text-red-500 text-xs mt-1">{errors.mainCategory}</p>
                                    )}
                                </div>

                                {/* Sub Category */}
                                <div>
                                    <label className="block mb-1 font-normal text-sm">Sub Category*</label>
                                    <Select
                                        value={formData.subCategory}
                                        disabled={!formData.mainCategory}
                                        onValueChange={(value) => {
                                            setFormData({ ...formData, subCategory: value });
                                            clearError("subCategory"); // ✅ remove error instantly
                                        }}
                                    >
                                        <SelectTrigger className="w-full border text-sm px-3 py-2 bg-white text-gray-700">
                                            <SelectValue placeholder="Select Sub Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {formData.mainCategory &&
                                                    subCategories[formData.mainCategory]?.map((sub, i) => (
                                                        <SelectItem key={i} value={sub}>
                                                            {sub}
                                                        </SelectItem>
                                                    ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.subCategory && (
                                        <p className="text-red-500 text-xs mt-1">{errors.subCategory}</p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block mb-1 font-normal text-sm">Subject*</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => {
                                            setFormData({ ...formData, subject: e.target.value });
                                            clearError("subject"); // ✅ remove error instantly
                                        }}
                                        className={`w-full border px-3 py-2 bg-white ${errors.subject ? "border-red-500" : ""
                                            }`}
                                        placeholder="Enter subject"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mt-4">
                                <label className="block mb-1 font-normal text-sm">Message*</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({ ...formData, message: e.target.value });
                                        clearError("message"); // ✅ remove error instantly
                                    }}
                                    className={`w-full border px-3 py-2 bg-white ${errors.message ? "border-red-500" : ""
                                        }`}
                                    rows="4"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Attachment */}
                            <div className="mt-4">
                                <label className="block mb-1 font-normal text-sm">Attachment</label>
                                <label
                                    className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:border-[#a2c95c] hover:bg-[#f9fff2] transition"
                                >
                                    <svg
                                        className="w-10 h-10 mb-2 text-gray-400 group-hover:text-[#a2c95c]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5.978 5.978 0 0112 4c2.21 0 4.21 1.196 5.28 3A4.992 4.992 0 0120 11a4 4 0 01-3 3.87V16m-4 4v-8m0 0l-3 3m3-3l3 3"
                                        ></path>
                                    </svg>
                                    <span className="text-sm text-gray-600">
                                        <span className="font-medium text-[#a2c95c]">Click to upload</span> or drag and drop
                                    </span>
                                    <span className="text-xs text-gray-400">PNG, JPG, PDF, DOCX (Max 5MB)</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*,.pdf,.docx,.doc"
                                    />
                                </label>
                            </div>


                            {/* Submit */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 px-3 py-1 bg-[#a2c95c] text-black font-semibold hover:bg-black hover:text-[#a2c95c]"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className="ins-profile pb-3 mb-8 px-4relative">
                <ul className="flex border-b border-gray-200">
                    <li>
                        <button
                            onClick={() => setActiveTab("open")}
                            className={`px-6 py-3 uppercase text-lg font-medium transition-colors
              ${activeTab === "open"
                                    ? "text-[#101010] border-b-2 border-[#a2c95c]"
                                    : "text-[#959595] hover:text-[#101010]"
                                }`}
                        >
                            Open Tickets
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab("closed")}
                            className={`px-6 py-3 uppercase text-lg font-medium transition-colors
              ${activeTab === "closed"
                                    ? "text-[#101010] border-b-2 border-[#a2c95c]"
                                    : "text-[#959595] hover:text-[#101010]"
                                }`}
                        >
                            Closed Tickets
                        </button>
                    </li>
                </ul>

                <div className="mt-6">
                    {activeTab === "open" ? (
                        <div className="p-5 pb-2 overflow-hidden border border-[#f5f5f5] bg-[#f9f9f9] text-[#101010]  ">
                            {/* Top controls */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                                {/* Show entries */}
                                <div className="flex items-center gap-2 mb-2 md:mb-0">
                                    <label className="text-sm text-black">Show</label>
                                    <div className="relative inline-block">
                                        <select
                                            value={entriesPerPage}
                                            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                                            className="appearance-none inline-block w-auto bg-white border border-gray-300 px-3 py-2 text-sm text-gray-700 
               focus:outline-none focus:border-[#a2c95c] focus:bg-[#f8f8f8] pr-8" // extra right padding for icon
                                        >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                        </select>

                                        {/* Custom icon */}
                                        <Image
                                            src="/images/custom-select.webp" // replace with your image path
                                            alt="dropdown"
                                            width={12}
                                            height={15}
                                            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3"
                                        />
                                    </div>
                                    <span className="text-sm text-black">entries</span>
                                </div>

                                {/* Search */}
                                <div>
                                    <label className="text-sm text-black mr-2">Search:</label>
                                    <input
                                        type="search"
                                        placeholder=""
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="border px-3 py-1 text-sm bg-white"
                                    />
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <Table className="text-xs font-normal border">
                                    <TableHeader>
                                        <TableRow className="bg-gray-100 border border-gray-200">
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                SR.</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Date</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Subject</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Attachment</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Status</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Action</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {filteredTickets.length === 0 ? (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={6}
                                                    className="text-center py-20 text-black text-sm border"
                                                >
                                                    No data available in Open Tickets
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            filteredTickets.map((ticket, index) => (
                                                <TableRow key={ticket.id} className="hover:bg-gray-50">
                                                    <TableCell className="px-3 py-2 border">{index + 1}</TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.date}</TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.subject}</TableCell>
                                                    <TableCell className="px-3 py-2 border">
                                                        {ticket.attachment ? (
                                                            <a
                                                                href={ticket.attachment}
                                                                className="text-blue-600 hover:underline"
                                                            >
                                                                Download
                                                            </a>
                                                        ) : (
                                                            "—"
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.status}</TableCell>
                                                    <TableCell className="px-3 py-2 border">
                                                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                                                            View
                                                        </button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col md:flex-row items-center justify-between mt-4 text-sm text-black">
                                <div>
                                    Showing {filteredTickets.length === 0 ? 0 : 1} to{" "}
                                    {filteredTickets.length} of {filteredTickets.length} entries
                                </div>
                                <div className="flex mt-2 md:mt-0">
                                    <button
                                        disabled
                                        className="px-3 py-1 border bg-gray-100 text-gray-400 cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        disabled
                                        className="px-3 py-1 border bg-gray-100 text-gray-400 cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-5 pb-2 overflow-hidden border border-[#f5f5f5] bg-[#f9f9f9] text-[#101010]  ">
                            {/* Top controls */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                                {/* Show entries */}
                                <div className="flex items-center gap-2 mb-2 md:mb-0">
                                    <label className="text-sm text-black">Show</label>
                                    <div className="relative inline-block">
                                        <select
                                            value={entriesPerPage}
                                            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                                            className="appearance-none inline-block w-auto bg-white border border-gray-300 px-3 py-2 text-sm text-gray-700 
               focus:outline-none focus:border-[#a2c95c] focus:bg-[#f8f8f8] pr-8" // extra right padding for icon
                                        >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                        </select>

                                        {/* Custom icon */}
                                        <Image
                                            src="/images/custom-select.webp" // replace with your image path
                                            alt="dropdown"
                                            width={12}
                                            height={15}
                                            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3"
                                        />
                                    </div>
                                    <span className="text-sm text-black">entries</span>
                                </div>

                                {/* Search */}
                                <div>
                                    <label className="text-sm text-black mr-2">Search:</label>
                                    <input
                                        type="search"
                                        placeholder=""
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="border px-3 py-1 text-sm bg-white"
                                    />
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <Table className="text-xs font-normal border">
                                    <TableHeader>
                                        <TableRow className="bg-gray-100 border border-gray-200">
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                SR.</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Date</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Subject</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Attachment</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Status</TableHead>
                                            <TableHead className="px-3 py-1 text-left whitespace-nowrap border-r border-gray-300">
                                                Action</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {filteredTickets.length === 0 ? (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={6}
                                                    className="text-center py-20 text-black text-sm border"
                                                >
                                                    No data available in Open Tickets
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            filteredTickets.map((ticket, index) => (
                                                <TableRow key={ticket.id} className="hover:bg-gray-50">
                                                    <TableCell className="px-3 py-2 border">{index + 1}</TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.date}</TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.subject}</TableCell>
                                                    <TableCell className="px-3 py-2 border">
                                                        {ticket.attachment ? (
                                                            <a
                                                                href={ticket.attachment}
                                                                className="text-blue-600 hover:underline"
                                                            >
                                                                Download
                                                            </a>
                                                        ) : (
                                                            "—"
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="px-3 py-2 border">{ticket.status}</TableCell>
                                                    <TableCell className="px-3 py-2 border">
                                                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                                                            View
                                                        </button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col md:flex-row items-center justify-between mt-4 text-sm text-black">
                                <div>
                                    Showing {filteredTickets.length === 0 ? 0 : 1} to{" "}
                                    {filteredTickets.length} of {filteredTickets.length} entries
                                </div>
                                <div className="flex mt-2 md:mt-0">
                                    <button
                                        disabled
                                        className="px-3 py-1 border bg-gray-100 text-gray-400 cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        disabled
                                        className="px-3 py-1 border bg-gray-100 text-gray-400 cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Page

