import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function ContactForm() {
  return (
    <>
      <div className="w-full max-w-lg p-8 bg-transparent rounded-lg">
        <h1 className="text-4xl w-auto left-0 font-bold mb-4 text-center items-start ">
          Message me!
        </h1>
        <div className="h-4 w-auto bg-blue-500 mb-8 mx-auto"></div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="">
            <Button variant="contained" endIcon={<SendIcon />}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
