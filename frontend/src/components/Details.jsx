import React from 'react'
import SendIcon from "@mui/icons-material/Send";


function Details() {
  return (
    <>
    {/* Left side: HomeAnimation1 */}
    <div className="w-full flex h-screen bg-transparent italic p-20">
        <div className="w-1/2 flex justify-center items-center mb-14">
          <div className="space-y-6 text-white p-8 max-w-md">
            <h1 className="text-5xl font-bold text-white flex items-center space-x-2">
              Hi there!
              <img
                src="/hands/Waving Hand Medium-Light Skin Tone.png"
                alt="wave icon"
                className="w-14 p-2 h-14 inline-block"
              />
            </h1>
            <p className="text-lg leading-relaxed">
              I am Ansh Sharma from Noida, India. I am an AIML and Full-Stack
              Developer, currently learning GenAI. I'm pursuing a B.Tech in
              Computer Science from Bennett University.
            </p>
            <p className="text-lg leading-relaxed">
              In my spare time, I enjoy coding, playing video games, and{" "}
              <a href="#" className="text-blue-400 underline">
                exploring new tech
              </a>
              . I’m always open to hearing about new projects, so feel free to
              drop me a line.
            </p>
            <a
              href="/contact"
              className="text-blue-400 flex items-center space-x-2 hover:underline"
            >
              <span className="bg-blue-500 p-2 rounded-lg text-white">
                Send me a message <SendIcon />
              </span>
            </a>
          </div>
        </div>

        {/* Right side: 3D Canvas with Laptop */}
        <div className="w-1/2 relative justify-center items-center  flex">
          <img
            src="/profile.jpg" // Replace with your actual image path
            alt="Profile"
            className="h-auto object-cover w-[80%] rounded-full"
          />
        </div>
      </div>
    </>
  )
}

export default Details