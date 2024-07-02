import React from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";

function NewProject() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
        {/* alert section */}
        {/* heading section */}

        {/* react split/ coding section */}
        <div>
          {/* horizontal  - top coding section + bottom result section*/}
          <SplitPane
            split="horizontal"
            minSize={100}
            maxSize={-100}
            defaultSize={"50%"}
          >
            {/* top */}
            <SplitPane split="vertical" minSize={500}>
              {/* html */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
<div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
    <FaHtml5 className="text-xl text-red-500"/>
    <p className="text-primaryText font-semibold">HTML</p>
</div>
{/* icons */}
<div className="cursor-pointer flex items-center justify-center gap-5 px-4">
    <FcSettings className="text-xl text-primaryText"/>
    <FaChevronDown className="text-xl text-primaryText"/>
</div>
                </div>
                <div>Code Mirror</div>
              </div>
              <SplitPane split="vertical" minSize={500}>
                {/* css */}
                <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
<div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
    <FaCss3 className="text-xl text-sky-500"/>
    <p className="text-primaryText font-semibold">CSS</p>
</div>
{/* icons */}
<div className="cursor-pointer flex items-center justify-center gap-5 px-4">
    <FcSettings className="text-xl text-primaryText"/>
    <FaChevronDown className="text-xl text-primaryText"/>
</div>
                </div>
                <div>Code Mirror</div>
              </div>
                {/* js */}
                <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
<div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
    <FaJs className="text-xl text-yellow-500"/>
    <p className="text-primaryText font-semibold">JS</p>
</div>
{/* icons */}
<div className="cursor-pointer flex items-center justify-center gap-5 px-4">
    <FcSettings className="text-xl text-primaryText"/>
    <FaChevronDown className="text-xl text-primaryText"/>
</div>
                </div>
                <div>Code Mirror</div>
              </div>
              </SplitPane>
            </SplitPane>
            {/* bottom */}
            <div> </div>
          </SplitPane>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
