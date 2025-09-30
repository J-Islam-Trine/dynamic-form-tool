import React from "react";
import { Icon } from "@iconify/react";
import InputXicon from "../formElements/InputXicon";
function CareerForm() {
  return (
    <div className="flex flex-col gap-10 px-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">
          Jumpstart Your Dream Career with us
        </span>
        <span className="flex flex-row items-center gap-2 text-warning">
          <Icon className="text-2xl" icon="mdi:plus" />
          <span className="text-sm">Add description</span>
        </span>
      </div>

      {/* Professional Info */}
      <div className="flex flex-col gap-5">
        <div>
          <span className="text-lg font-semibold">Professional Information</span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputXicon
            label="Full Name"
            icon="mdi:account-outline"
            type="text"
            typeClass="input input-text"
            placeholder="Enter your name"
          />
          <InputXicon
            label="Email"
            icon="mdi:email-outline"
            type="email"
            typeClass="input"
            placeholder="example@email.com"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputXicon
            label="Phone number"
            icon="mdi:phone-outline"
            type="tel"
            typeClass="input input-text"
            placeholder="+880 123 1231 2312"
          />
          <InputXicon
            label="Date of Birth"
            icon="mdi:calendar-month-outline"
            type="datetime-local"
            typeClass="input"
            placeholder="dd-mm-yyyy"
          />
        </div>
      </div>

      {/* LinkedIn */}
      <div>
        <span>LinkedIn Profile</span>
        <InputXicon
          icon="mdi:linkedin"
          placeholder="linkedin.com/in/yourname"
        />
      </div>

      {/* Portfolio */}
      <div>
        <span>Portfolio</span>
        <InputXicon icon="mdi:web" placeholder="www.yourportfolio.com" />
      </div>

      {/* Add more field */}
      <div className="my-5">
        <div className="flex flex-row items-center justify-center btn btn-outline btn-warning border-2 border-dotted">
          <Icon className="text-2xl" icon="mdi:plus" />
          <span>Add Field</span>
        </div>
      </div>
    </div>
  );
}

export default CareerForm;
