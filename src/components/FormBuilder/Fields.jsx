import React from "react";
import { Icon } from "@iconify/react";

function Fields({ fieldData = [], buttonStyle = "" }) {
  return (
    <div className="flex flex-col max-h-[80vh] overflow-y-auto scrollbar-hide bg-base-100 rounded-lg shadow-md">
      {fieldData.map((data, index) => (
        <div key={index} className="relative">
          {/* Sticky section title */}
          <div className="sticky top-0 z-20 bg-base-100 px-2 py-1 border-b border-gray-200">
            <span className="font-semibold text-gray-700 text-lg">
              {data.title}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-0 px-2 py-2">
            {data.ButtonData.map((btn, idx) => (
              <button
                key={idx}
                className={`w-full ${buttonStyle} flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-primary hover:text-white transition-colors duration-200 shadow-sm`}
              >
                <span className="text-sm font-medium">{btn.name}</span>
                {/* Icon hover is now only active when hovering the button */}
                <Icon
                  icon="mdi:plus-circle-outline"
                  className="text-xl"
                />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fields;
