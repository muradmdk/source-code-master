"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Page = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" }) // clear error when typing
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required"
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required"
    } else if (formData.newPassword === formData.currentPassword) {
      newErrors.newPassword = "New password must be different"
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required"
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted ✅", formData)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-9">
        <h1 className="text-[20px] text-xl font-bold pb-2">Update Password</h1>
        <div className="bg-[#a2c95c] w-[50px] h-0.5 mt-1"></div>
      </div>

      <div>
        <h3 className="text-[18px] text-[#444444] font-semibold border-b-2 border-[#e9e9e9] pb-2.5 mb-5">
          Change Password
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Current Password */}
          <div className="flex flex-col mb-5 w-1/3">
            <span className="text-[13px] mb-2 font-medium">Current Password</span>
            <Input
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="h-[35px] text-[14px]"
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.currentPassword}</p>
            )}
          </div>

          {/* New + Confirm Password */}
          <div className="flex items-center gap-7">
            <div className="flex flex-col w-1/3">
              <span className="text-[13px] mb-2 font-medium">New Password</span>
              <Input
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                className="h-[35px] text-[14px]"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
              )}
            </div>

            <div className="flex flex-col w-1/3">
              <span className="text-[13px] mb-2 font-medium">Confirm Password</span>
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="h-[35px] text-[14px]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Save Button */}
          <Button
            type="submit"
            className="text-[14px] text-[#101010] bg-[#a2c95c] border border-[#a2c95c] py-2 px-3 font-bold mt-7 hover:bg-black hover:text-[#a2c95c]"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Page
