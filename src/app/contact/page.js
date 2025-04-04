"use client"
import { Button } from "@/components/ui/button";
import { TextField } from "@mui/material";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Contact() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstNameRef, "First Name Ref")
    let obj = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    }
    console.log(obj)
    try {
      const post = await fetch("https://blog-post-wine-three.vercel.app/api/users/add-user", { method: "POST", body: JSON.stringify(obj) })
      console.log("Data Added")
      firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you!</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField
                  fullWidth
                  inputRef={firstNameRef}
                  label="First Name"
                  variant="outlined"
                  className="[&_.MuiOutlinedInput-root]:rounded-lg"
                />
                <TextField
                  fullWidth
                  inputRef={lastNameRef}
                  label="Last Name"
                  variant="outlined"
                  className="[&_.MuiOutlinedInput-root]:rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-5">
                <TextField
                  fullWidth
                  inputRef={emailRef}
                  label="Email"
                  type="email"
                  variant="outlined"
                  className="[&_.MuiOutlinedInput-root]:rounded-lg"
                />

                <TextField
                  fullWidth
                  inputRef={messageRef}
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  className="[&_.MuiOutlinedInput-root]:rounded-lg"
                />

                <Button className="w-full py-6 text-lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or suggestions? Fill out the form or use the
                contact details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contact@blogwebsite.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Blog Street<br />
                    Digital City, CA 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Twitter/X icon */}
                  </svg>
                </a>
                {/* Add other social icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}