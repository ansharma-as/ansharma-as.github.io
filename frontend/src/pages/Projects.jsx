import React, {useState} from "react";
import ProjectCard from "../components/ProjectCards";
import Navbar from "../components/Navbar";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [darkMode, setDarkMode] = useState(true);

  return (
<div
      className={`w-full h-full bg-zinc-950 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Navbar Component */}
      <div className="fixed">
        <Navbar darkMode={darkMode} /> {/* Pass darkMode to Navbar */}
      </div>

      
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-white text-center ">
          My Recent <strong className="text-purple-500">Works</strong>
        </h1>
        <p className="text-white text-center mt-4">
          Here are a few projects I've worked on recently.
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 px-8 py-3">
            <ProjectCard
            //   imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <ProjectCard
            //   imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <ProjectCard
            //   imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <ProjectCard
            //   imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifier model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <ProjectCard
            //   imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <ProjectCard
            //   imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used OpenCV to detect the face in an image and then pass the face to the classifier to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
