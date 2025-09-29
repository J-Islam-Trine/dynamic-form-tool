// demographic form data
export const formInputDemographic = [
  {
    title: "Personal Information",
    formInput: [

      { type: "text", placeholder: "Enter first name", label: "First Name" },
      { type: "text", placeholder: "Enter middle name", label: "Middle Name" },
      { type: "text", placeholder: "Enter last name", label: "Last Name" },

      { type: "date", placeholder: "dd/mm/yyyy", label: "Date of birth" },
      { type: "number", placeholder: "Auto generate..", label: "Age", disabled: true },

      {
        type: "select",
        placeholder: "Select gender",
        label: "Gender",
        options: [
          { label: "Select Gender", value: "", disabled: true, selected: true },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ]
      },

      {
        type: "select",
        placeholder: "Select marital status",
        label: "Marital Status",
        options: [
          { label: "Select marital status", value: "", disabled: true, selected: true },
          { label: "Single", value: "single" },
          { label: "Married", value: "married" },
          { label: "Widowed", value: "widowed" },
          { label: "Divorced", value: "divorced" },
          { label: "Separated", value: "separated" }
        ]
      },

      {
        type: "select",
        placeholder: "Select nationality",
        label: "Nationality",
        options: [
          { label: "Select nationality", value: "", disabled: true, selected: true },
          { label: "Bangladeshi", value: "bangladeshi" },
          { label: "Indian", value: "indian" },
          { label: "American", value: "american" },
          { label: "British", value: "british" },
          { label: "Canadian", value: "canadian" }
        ]
      },

      {
        type: "select",
        placeholder: "Select country of birth",
        label: "Country of Birth",
        options: [
          { label: "Select country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" },
          { label: "USA", value: "usa" },
          { label: "UK", value: "uk" },
          { label: "Canada", value: "canada" }
        ]
      },

      {
        type: "text",
        placeholder: "Enter place of birth",
        label: "Place of Birth"
      },

      {
        type: "text",
        placeholder: "Enter NID number",
        label: "National ID (NID)"
      },

      {
        type: "select",
        placeholder: "Select residential status",
        label: "Residential Status",
        options: [
          { label: "Select status", value: "", disabled: true, selected: true },
          { label: "Resident", value: "resident" },
          { label: "Non-Resident", value: "non-resident" },
          { label: "Foreign National", value: "foreign" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },
  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter phone number", label: "Phone" },
      { type: "text", placeholder: "Enter alternative phone number", label: "Phone (Alternative)" },
      { type: "email", placeholder: "Enter email address", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },
  {
    title: "Current Address",
    formInput: [
      { type: "text", placeholder: "Enter address", label: "Address" },

      {
        type: "select",
        placeholder: "Select country",
        label: "Country",
        options: [
          { label: "Select country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" },
          { label: "USA", value: "usa" },
          { label: "UK", value: "uk" },
          { label: "Canada", value: "canada" }
        ]
      },

      {
        type: "select",
        placeholder: "Select district",
        label: "District",
        options: [
          { label: "Select district", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" },
          { label: "Mumbai", value: "mumbai" },
          { label: "Los Angeles", value: "los_angeles" },
          { label: "London", value: "london" }
        ]
      },

      {
        type: "select",
        placeholder: "Select city",
        label: "City",
        options: [
          { label: "Select city", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" },
          { label: "Sylhet", value: "sylhet" },
          { label: "Mymensingh", value: "mymensingh" },
          { label: "Rajshahi", value: "rajshahi" }
        ]
      },

      { type: "text", placeholder: "Enter post code", label: "Post Code" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },
  {
    title: "Permanent Address",
    formInput: [
      { type: "text", placeholder: "Enter address", label: "Address" },

      {
        type: "select",
        placeholder: "Select country",
        label: "Country",
        options: [
          { label: "Select country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" },
          { label: "USA", value: "usa" },
          { label: "UK", value: "uk" },
          { label: "Canada", value: "canada" }
        ]
      },

      {
        type: "select",
        placeholder: "Select district",
        label: "District",
        options: [
          { label: "Select district", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" },
          { label: "Mumbai", value: "mumbai" },
          { label: "Los Angeles", value: "los_angeles" },
          { label: "London", value: "london" }
        ]
      },

      {
        type: "select",
        placeholder: "Select city",
        label: "City",
        options: [
          { label: "Select city", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" },
          { label: "Sylhet", value: "sylhet" },
          { label: "Mymensingh", value: "mymensingh" },
          { label: "Rajshahi", value: "rajshahi" }
        ]
      },

      { type: "text", placeholder: "Enter post code", label: "Post Code" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },
  {
    title: "Other Details",
    formInput: [
      { type: "text", placeholder: "Enter father's name", label: "Father's Name" },
      { type: "text", placeholder: "Enter mother's name", label: "Mother's Name" },
      { type: "text", placeholder: "Enter spouse's name", label: "Spouse Name" },

      {
        type: "select",
        placeholder: "Select banking status",
        label: "Banking with us?",
        options: [
          { label: "Select option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },

      {
        type: "select",
        placeholder: "Select employment status",
        label: "Our Bank Staff",
        options: [
          { label: "Select option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },
  {
    title: "Documents",
    formInput: [
      { type: "file", placeholder: "", label: "Utility Bill" },
      { type: "file", placeholder: "", label: "Birth Certificate" },
      { type: "file", placeholder: "", label: "National ID (NID)" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  }
];

// supplement form data
export const formInputSupplement = [
  {
    title: "Personal Info",
    formInput: [
      { type: "text", placeholder: "Enter full name", label: "Name" },
      { type: "text", placeholder: "Enter age", label: "Age" },

      {
        type: "select",
        placeholder: "Select gender",
        label: "Gender",
        options: [
          { label: "Select gender", value: "", disabled: true, selected: true },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ]
      },

      {
        type: "select",
        placeholder: "Select residential status",
        label: "Residential Status",
        options: [
          { label: "Select status", value: "", disabled: true, selected: true },
          { label: "Resident", value: "resident" },
          { label: "Non-Resident", value: "non_resident" }
        ]
      },

      {
        type: "select",
        placeholder: "Select relationship status",
        label: "Relationship Status",
        options: [
          { label: "Select status", value: "", disabled: true, selected: true },
          { label: "Single", value: "single" },
          { label: "Married", value: "married" },
          { label: "Divorced", value: "divorced" }
        ]
      },

      { type: "file", placeholder: "", label: "Signature" },
      { type: "file", placeholder: "", label: "Image" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Supplement Info",
    formInput: [
      {
        type: "select",
        placeholder: "Select limit percentage",
        label: "Limit Percentage",
        options: [
          { label: "Select percentage", value: "", disabled: true, selected: true },
          { label: "10%", value: "10" },
          { label: "25%", value: "25" },
          { label: "50%", value: "50" },
          { label: "75%", value: "75" },
          { label: "100%", value: "100" }
        ]
      },
      { type: "text", placeholder: "Enter limit amount", label: "Limit Amount" },
      { type: "text", placeholder: "Enter embossing name", label: "Embossing Name" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter street", label: "Street" },

      {
        type: "select",
        placeholder: "Select city",
        label: "City",
        options: [
          { label: "Select city", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" },
          { label: "Rajshahi", value: "rajshahi" }
        ]
      },

      {
        type: "select",
        placeholder: "Select district",
        label: "District",
        options: [
          { label: "Select district", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Sylhet", value: "sylhet" },
          { label: "Khulna", value: "khulna" }
        ]
      },

      {
        type: "select",
        placeholder: "Select division",
        label: "Division",
        options: [
          { label: "Select division", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chattogram", value: "chattogram" },
          { label: "Barisal", value: "barisal" }
        ]
      },

      {
        type: "select",
        placeholder: "Select country",
        label: "Country",
        options: [
          { label: "Select country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" },
          { label: "USA", value: "usa" }
        ]
      },

      { type: "text", placeholder: "Enter post code", label: "Post Code" },
      { type: "text", placeholder: "Enter phone number", label: "Phone" },
      { type: "text", placeholder: "Enter residential phone number", label: "Phone (Residential)" },
      { type: "email", placeholder: "Enter email address", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Professional Info",
    formInput: [
      {
        type: "select",
        placeholder: "Select occupation type",
        label: "Occupation Type",
        options: [
          { label: "Select occupation", value: "", disabled: true, selected: true },
          { label: "Salaried", value: "salaried" },
          { label: "Self-employed", value: "self_employed" },
          { label: "Retired", value: "retired" }
        ]
      },
      { type: "text", placeholder: "Enter organization name", label: "Organization Name" },

      {
        type: "select",
        placeholder: "Select designation",
        label: "Designation",
        options: [
          { label: "Select designation", value: "", disabled: true, selected: true },
          { label: "Manager", value: "manager" },
          { label: "Executive", value: "executive" },
          { label: "Officer", value: "officer" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Address",
    formInput: [
      {
        type: "select",
        placeholder: "Select country",
        label: "Country",
        options: [
          { label: "Select country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" },
          { label: "USA", value: "usa" }
        ]
      },

      {
        type: "select",
        placeholder: "Select division",
        label: "Division",
        options: [
          { label: "Select division", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chattogram", value: "chattogram" }
        ]
      },

      { type: "text", placeholder: "Enter post code", label: "Post Code" },

      {
        type: "select",
        placeholder: "Select district",
        label: "District",
        options: [
          { label: "Select district", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Sylhet", value: "sylhet" }
        ]
      },

      {
        type: "select",
        placeholder: "Select city",
        label: "City",
        options: [
          { label: "Select city", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" }
        ]
      },

      { type: "text", placeholder: "Enter street", label: "Street" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  }
];

// spouse form data
export const formInputSpouse = [
  {
    title: "Personal Info",
    formInput: [
      { type: "text", placeholder: "Enter Name", label: "Name" },
      { type: "text", placeholder: "dd/mm/yyyy", label: "Date of Birth" },
      { type: "text", placeholder: "Enter NID", label: "NID" },
      { type: "text", placeholder: "Enter Passport no", label: "Passport No" },
      { type: "file", placeholder: "", label: "Image" },
      { type: "file", placeholder: "", label: "Marriage Certificate" },
      { type: "file", placeholder: "", label: "Passport" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Other",
    formInput: [
      {
        type: "select",
        placeholder: "Enter Asset value",
        label: "Has Joint Account?",
        options: [
          { label: "Select option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        type: "select",
        placeholder: "Enter Revenue",
        label: "Is Nominee?",
        options: [
          { label: "Select option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter Street", label: "Street" },
      {
        type: "select",
        placeholder: "Select City",
        label: "City",
        options: [
          { label: "Select City", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chittagong", value: "chittagong" }
        ]
      },
      {
        type: "select",
        placeholder: "Select District",
        label: "District",
        options: [
          { label: "Select District", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Sylhet", value: "sylhet" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Division",
        label: "Division",
        options: [
          { label: "Select Division", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Barisal", value: "barisal" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Country",
        label: "Country",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      { type: "text", placeholder: "Enter Post Code", label: "Post Code" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone (Residential)" },
      { type: "email", placeholder: "Enter Email", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Professiona Info",
    formInput: [
      {
        type: "select",
        placeholder: "Select Occupation",
        label: "Occupation Type",
        options: [
          { label: "Select Occupation", value: "", disabled: true, selected: true },
          { label: "Salaried", value: "salaried" },
          { label: "Self-employed", value: "self_employed" }
        ]
      },
      { type: "text", placeholder: "Enter Name", label: "Organization Name" },
      {
        type: "select",
        placeholder: "Select Type",
        label: "Designation",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Manager", value: "manager" },
          { label: "Officer", value: "officer" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Office Address",
    formInput: [
      {
        type: "select",
        placeholder: "Select Country",
        label: "Country",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Division",
        label: "Division",
        options: [
          { label: "Select Division", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Chattogram", value: "chattogram" }
        ]
      },
      { type: "text", placeholder: "Enter Post Code", label: "Post Code" },
      {
        type: "select",
        placeholder: "Select District",
        label: "District",
        options: [
          { label: "Select District", value: "", disabled: true, selected: true },
          { label: "Khulna", value: "khulna" },
          { label: "Sylhet", value: "sylhet" }
        ]
      },
      {
        type: "select",
        placeholder: "Select City",
        label: "City",
        options: [
          { label: "Select City", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Barisal", value: "barisal" }
        ]
      },
      { type: "text", placeholder: "Enter Street", label: "Street" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  }
];

// guarantor form data
export const formInputGuarantor = [
  {
    title: "Personal Info",
    formInput: [
      { type: "text", placeholder: "Enter Name", label: "Name" },
      { type: "text", placeholder: "dd/mm/yyyy", label: "Date of Birth" },
      {
        type: "select",
        placeholder: "Enter Gender",
        label: "Gender",
        options: [
          { label: "Select Gender", value: "", disabled: true, selected: true },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ]
      },
      { type: "text", placeholder: "Enter Father's Name", label: "Father's Name" },
      { type: "text", placeholder: "Enter Mother's Name", label: "Mother's Name" },
      { type: "text", placeholder: "Enter ID", label: "National ID/Passport No" },
      { type: "file", placeholder: "", label: "Birth Certificate" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Other",
    formInput: [
      {
        type: "select",
        placeholder: "Select status",
        label: "Reference",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Relative", value: "relative" },
          { label: "Colleague", value: "colleague" }
        ]
      },
      {
        type: "select",
        placeholder: "Select status",
        label: "Relationship",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Brother", value: "brother" },
          { label: "Friend", value: "friend" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Status",
        label: "Residential",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Owner", value: "owner" },
          { label: "Tenant", value: "tenant" }
        ]
      },
      {
        type: "select",
        placeholder: "Select status",
        label: "Has Account?",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      { type: "text", placeholder: "Enter CIF no", label: "CIF" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter Street", label: "Street" },
      {
        type: "select",
        placeholder: "Select City",
        label: "City",
        options: [
          { label: "Select City", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Sylhet", value: "sylhet" }
        ]
      },
      {
        type: "select",
        placeholder: "Select District",
        label: "District",
        options: [
          { label: "Select District", value: "", disabled: true, selected: true },
          { label: "Chattogram", value: "chattogram" },
          { label: "Khulna", value: "khulna" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Division",
        label: "Division",
        options: [
          { label: "Select Division", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Barisal", value: "barisal" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Country",
        label: "Country",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      { type: "text", placeholder: "Enter Post Code", label: "Post Code" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone (Residential)" },
      { type: "email", placeholder: "Enter Email", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Professiona Info",
    formInput: [
      {
        type: "select",
        placeholder: "Select Occupation",
        label: "Occupation Type",
        options: [
          { label: "Select Occupation", value: "", disabled: true, selected: true },
          { label: "Salaried", value: "salaried" },
          { label: "Business", value: "business" }
        ]
      },
      { type: "text", placeholder: "Enter Name", label: "Organization Name" },
      {
        type: "select",
        placeholder: "Select Type",
        label: "Designation",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Manager", value: "manager" },
          { label: "Clerk", value: "clerk" }
        ]
      },
      { type: "text", placeholder: "Enter TIN no", label: "ETIN" },
      { type: "file", placeholder: "", label: "ETIN" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Passport Information",
    formInput: [
      {
        type: "select",
        placeholder: "Select Country",
        label: "Passport No",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Division",
        label: "Issue Country",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      { type: "file", placeholder: "", label: "Passport" },
      { type: "text", placeholder: "dd/mm/yyyy", label: "Issue date" },
      { type: "text", placeholder: "Enter days", label: "Age of Issue" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Birth Information",
    formInput: [
      { type: "text", placeholder: "Enter Birth Certificate no", label: "Birth Certificate No" },
      {
        type: "select",
        placeholder: "Select Country",
        label: "Birth Country",
        options: [
          { label: "Select Country", value: "", disabled: true, selected: true },
          { label: "Bangladesh", value: "bangladesh" },
          { label: "India", value: "india" }
        ]
      },
      {
        type: "select",
        placeholder: "Select District",
        label: "Birth District",
        options: [
          { label: "Select District", value: "", disabled: true, selected: true },
          { label: "Dhaka", value: "dhaka" },
          { label: "Rajshahi", value: "rajshahi" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  }
];

// reference form data
export const formInputReference = [
  {
    title: "Personal Info",
    formInput: [
      { type: "text", placeholder: "Enter Name", label: "Name" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      {
        type: "select",
        placeholder: "Enter NID",
        label: "Gender",
        options: [
          { label: "Select Gender", value: "", disabled: true, selected: true },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ]
      },
      { type: "text", placeholder: "dd/mm/yyyy", label: "Date of Birth" },
      { type: "text", placeholder: "Enter ID", label: "National ID" },
      {
        type: "select",
        placeholder: "Select Status",
        label: "Residential Status",
        options: [
          { label: "Select Status", value: "", disabled: true, selected: true },
          { label: "Owner", value: "owner" },
          { label: "Tenant", value: "tenant" },
          { label: "Family", value: "family" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Documents",
    formInput: [
      { type: "file", placeholder: "", label: "NID" },
      { type: "file", placeholder: "", label: "Testimony" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 gap-y-3"
  }
];

// nominee form data
export const formInputNominee = [
  {
    title: "Personal Info",
    formInput: [
      { type: "text", placeholder: "Enter Name", label: "Name" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      {
        type: "select",
        placeholder: "Enter Gender",
        label: "Gender",
        options: [
          { label: "Select Gender", value: "", disabled: true, selected: true },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ]
      },
      { type: "text", placeholder: "dd/mm/yyyy", label: "Date of Birth" },
      { type: "text", placeholder: "Enter ID", label: "National ID" },
      {
        type: "select",
        placeholder: "Select Status",
        label: "Relationship",
        options: [
          { label: "Select Relationship", value: "", disabled: true, selected: true },
          { label: "Spouse", value: "spouse" },
          { label: "Child", value: "child" },
          { label: "Parent", value: "parent" },
          { label: "Sibling", value: "sibling" },
          { label: "Relative", value: "relative" },
          { label: "Other", value: "other" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  },

  {
    title: "Documents",
    formInput: [
      { type: "file", placeholder: "", label: "NID" },
      { type: "file", placeholder: "", label: "Testimony" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 gap-y-3"
  }
];

// security form data
export const formInputSecurity = [
  {
    title: "Basic Information",
    formInput: [
      {
        type: "select",
        placeholder: "Select Owner",
        label: "Security Owner",
        options: [
          { label: "Select Owner", value: "", disabled: true, selected: true },
          { label: "Applicant", value: "applicant" },
          { label: "Guarantor", value: "guarantor" },
          { label: "Nominee", value: "nominee" },
          { label: "Reference", value: "reference" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Bank Name",
        label: "Bank Name",
        options: [
          { label: "Select Bank", value: "", disabled: true, selected: true },
          { label: "Bank A", value: "bank_a" },
          { label: "Bank B", value: "bank_b" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Branch Name",
        label: "Branch Name",
        options: [
          { label: "Select Branch", value: "", disabled: true, selected: true },
          { label: "Branch X", value: "branch_x" },
          { label: "Branch Y", value: "branch_y" }
        ]
      },
      {
        type: "date",
        placeholder: "Enter Issue Date",
        label: "Issue Date"
      },
      {
        type: "text",
        placeholder: "Enter Security Number",
        label: "Security Number"
      },
      {
        type: "select",
        placeholder: "Select Type",
        label: "Security Type",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "FDR", value: "fdr" },
          { label: "Sanchaypatra", value: "sanchaypatra" },
          { label: "Bond", value: "bond" }
        ]
      },
      {
        type: "date",
        placeholder: "Enter Maturity Date",
        label: "Maturity Date"
      },
      {
        type: "select",
        placeholder: "Select Interest Rate",
        label: "Interest Rate",
        options: [
          { label: "Select Rate", value: "", disabled: true, selected: true },
          { label: "5%", value: "5" },
          { label: "7%", value: "7" },
          { label: "10%", value: "10" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Option",
        label: "Auto Renewable",
        options: [
          { label: "Select Option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Option",
        label: "Auto Rollover",
        options: [
          { label: "Select Option", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  },

  {
    title: "Security Value Matrics",
    formInput: [
      {
        type: "select",
        placeholder: "Select Block Status",
        label: "Block Status",
        options: [
          { label: "Select Status", value: "", disabled: true, selected: true },
          { label: "Blocked", value: "blocked" },
          { label: "Unblocked", value: "unblocked" }
        ]
      },
      {
        type: "text",
        placeholder: "Enter Bank Account",
        label: "Bank Account"
      },
      {
        type: "number",
        placeholder: "Enter Free Amount",
        label: "Free Amount"
      },
      {
        type: "number",
        placeholder: "Enter Face Value",
        label: "Face Value"
      },
      {
        type: "select",
        placeholder: "Select LTV",
        label: "Present Value (Allowable) LTV",
        options: [
          { label: "Select LTV", value: "", disabled: true, selected: true },
          { label: "70%", value: "70" },
          { label: "80%", value: "80" },
          { label: "90%", value: "90" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Allowable Value",
        label: "Allowable Value",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Allowable Loan",
        label: "Allowable Loan",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Lien",
        label: "Lien",
        options: [
          { label: "Select", value: "", disabled: true, selected: true },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Status",
        label: "Security Status",
        options: [
          { label: "Select Status", value: "", disabled: true, selected: true },
          { label: "Active", value: "active" },
          { label: "Expired", value: "expired" },
          { label: "Pending", value: "pending" }
        ]
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  }
];

// Company Information Form
export const formInputFCompanyInformation = [
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",
    title: "COMPANY INFORMATION",
    
    titleHidden: false,

    buttonHidden: false,
    
    buttonName: "Save",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Save",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      {
        type: "text",
        placeholder: "Enter Company Name",
        label: "Name of the Company",
      },
      {
        type: "text",
        placeholder: "Enter Year of Incorporation/Establishment",
        label: "Year of Incorporation/Establishment",
      },
      {
        type: "select",
        placeholder: "Enter Nature of Business",
        label: "Nature of Business",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Sole Proprietorship", value: "t1" },
          { label: "Partnership", value: "t2" },
          { label: "Private Limited Company", value: "t3" },
          { label: " Public Limited Company", value: "t3" },
        ],
      },
      {
        type: "number",
        placeholder: "Enter Annual Sales (In BDT)",
        label: "Annual Sales (In BDT)",
      },
      {
        type: "text",
        placeholder: "Enter Web Address",
        label: "Web Address",
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Registered Office Address & Tel",
    titleHidden: false,

    buttonHidden: false,
    buttonName: "Save",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [


      // Registered Office Address & Tel
      {
        type: "text",
        placeholder: "Enter Registered Office Address",
        label: "Registered Office Address",
      },
      {
        type: "text",
        placeholder: "Enter Registered Office Telephone No.",
        label: "Registered Office Telephone No.",
      },
      {
        type: "select",
        placeholder: "Select Ownership Type",
        label: "Registered Office Ownership",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Owned", value: "owned" },
          { label: "Rented", value: "rented" },
          { label: "Leased", value: "leased" },
        ],
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Factory Address & Tel",
    titleHidden: false,
    buttonHidden: false,
    
    buttonName: "Save",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [

      // Factory Address & Tel (Optional)
      {
        type: "textarea",
        placeholder: "Enter Factory Address (If Applicable)",
        label: "Factory Address",
      },
      {
        type: "text",
        placeholder: "Enter Factory Telephone No.",
        label: "Factory Telephone No.",
      },
      {
        type: "select",
        placeholder: "Select Ownership Type",
        label: "Factory Ownership",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Owned", value: "owned" },
          { label: "Rented", value: "rented" },
          { label: "Leased", value: "leased" },
        ],
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Contact Person Details",
    titleHidden: false,

    buttonHidden: false,
    buttonName: "Save",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      // Key Contact Person Details split
      {
        type: "text",
        placeholder: "Enter Contact Person Name",
        label: "Key Contact Person Name",
      },
      {
        type: "text",
        placeholder: "Enter Contact Person Designation",
        label: "Key Contact Person Designation",
      },
      {
        type: "text",
        placeholder: "Enter Contact Person Phone No.",
        label: "Key Contact Person Phone No.",
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Information of owners",
    titleHidden: false,

    buttonHidden: false,
    buttonName: "Save",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      // Key Contact Person Details split
      {
        type: "button",
        elementClass: "col-span-4 flex",
        cls: "w-full flex justify-end",
        iconName: "mdi:plus-circle-outline",
        iconColor: "text-black",
        iconText: "Add",
        iconLink: "#",
      },
      {
        type: "text",
        placeholder: "Enter owner Name",
        label: "Name",
      },
      {
        type: "number",
        placeholder: "Enter age",
        label: "Age",
      },
      {
        type: "text",
        placeholder: "Enter latest educational qualification",
        label: "Educational Qualification",
      },
      {
        type: "select",
        placeholder: "Enter latest educational qualification",
        label: "Nationality",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Bangladeshi", value: "BD" },
          { label: "Australian", value: "AU" },
          { label: "Russian", value: "RU" },
          { label: "Others", value: "RU" },
        ]
      },
      {
        type: "select",
        placeholder: "Enter position/designation on company",
        label: "Position",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "CEO", value: "1" },
          { label: "COO", value: "2" },
          { label: "CFO", value: "3" },
          { label: "Others", value: "4" },
        ]
      },
      {
        type: "number",
        placeholder: "Ener percentage(%) of share this person holding",
        label: "Share",
        
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Employee Information",
    titleHidden: false,

    buttonHidden: false,
    buttonName: "Save",
    buttonClass: "",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      
      {
        type: "button",
        elementClass: "col-span-4 flex",
        cls: "w-full flex justify-end",
        iconName: "mdi:plus-circle-outline",
        iconColor: "text-black",
        iconText: "Add",
        iconLink: "#",
      },
      {
        type: "select",
        placeholder: "Enter latest educational qualification",
        label: "Category",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Executive Level", value: "EL" },
          { label: "Management Level", value: "ML" },
          { label: "Non-Management Level", value: "NML" },
          { label: "Others", value: "ot" },
        ]
      },
      {
        type: "number",
        placeholder: "Enter number of permanent staffs",
        label: "Permanent Staffs",
      },
      {
        type: "number",
        placeholder: "Enter number of contractual staffs",
        label: "Contractual Staffs",
      },
      {
        type: "number",
        placeholder: "Enter number of other type of staffs",
        label: "Other",
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Salary Related Information",
    titleHidden: false,

    buttonHidden: false,
    buttonName: "Save",
    buttonClass: "",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
     
      {
        type: "select",
        label: "Salary Payment Method",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Fully Account Payee", value: "EL" },
          { label: "Partially Account Payee", value: "ML" },
          { label: "Cash Paid", value: "NML" },
        ]
      },
      {
        type: "select",
        label: "Bank Name",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Eastern Bank PLC", value: "EL" },
          { label: "Sonali Bank", value: "ML" },
          { label: "BRAC Bank", value: "NML" },
          { label: "Islami Bank Bangladesh Limited", value: "NML" },
          { label: "Dutch-Bangla Bank", value: "NML" },
          { label: "Other", value: "NML" },
        ]
      },
      {
        type: "text",
        placeholder: "Entert branch address",
        label: "Branch Address",
      },
    ],
  },
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

    titleCSS: "bg-white text-black border-b-2 my-2",
    title: "Salary Related Information",
    titleHidden: true,

    buttonHidden: false,
    buttonName: "Save",
    buttonClass: "",
    icon: "mdi:file-outline",

    modalHidden: true,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      
      {
        type: "button",
        elementClass: "border-t-2 pt-2 col-span-4 flex",
        cls: "w-full flex justify-end",
        iconName: "mdi:plus-circle-outline",
        iconColor: "text-black",
        iconText: "Add",
        iconLink: "#",
      },
      {
        type: "select",
        label: "Salary Range",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Below 15,000", value: "EL" },
          { label: "15,000-24,999", value: "ML" },
          { label: "25,000-49,999", value: "NML" },
          { label: "50,000-99,999", value: "NML" },
          { label: "100,000 and Above", value: "NML" },
        ]
      },
      {
        type: "text",
        placeholder: "Entert branch address",
        label: "No. of Staffs Within the Range",
      },
      {
        type: "text",
        placeholder: "Entert Expected No. of Files",
        label: "Expected No. of Files",
      },
    ],
  },
  {
  SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-3",

  titleCSS: "bg-white text-black border-b-2 my-2",
  title: "Banking and Credit Related Information",
  titleHidden: false,

  buttonHidden: false,
  buttonName: "Save",
  buttonClass: "",
  icon: "mdi:file-outline",

  modalHidden: true,
  modalName: "Create",
  modalId: "createBankingCredit",
  titleModal: "Create a new banking record",

  modalButtonLink: "/admin/banking/create",
  modalButtonName: "Create",

  formInput: [
    {
      type: "select",
      label: "Business Account With",
      options: [
        { label: "Select Bank", value: "", disabled: true, selected: true },
        { label: "Eastern Bank PLC", value: "ebl" },
        { label: "Sonali Bank", value: "sonali" },
        { label: "BRAC Bank", value: "brac" },
        { label: "Islami Bank", value: "islami" },
        { label: "Dutch-Bangla Bank", value: "dbbl" },
        { label: "Other", value: "other" },
      ]
    },
    {
      type: "text",
      placeholder: "Enter branch address",
      label: "Branch Address",
    },
    {
      type: "select",
      label: "Credit Facility With",
      options: [
        { label: "Select Institution", value: "", disabled: true, selected: true },
        { label: "Eastern Bank PLC", value: "ebl" },
        { label: "Bangladesh Bank", value: "bb" },
        { label: "City Bank", value: "city" },
        { label: "Other", value: "other" },
      ]
    },
    {
      type: "text",
      placeholder: "Enter institution branch address",
      label: "Institution Branch Address",
    },
    {
      type: "select",
      label: "Credit Rating (if available)",
      options: [
        { label: "Select Rating", value: "", disabled: true, selected: true },
        { label: "AAA", value: "aaa" },
        { label: "AA+", value: "aa_plus" },
        { label: "A", value: "a" },
        { label: "BBB", value: "bbb" },
        { label: "Not Rated", value: "not_rated" },
      ]
    },
    {
      type: "text",
      placeholder: "Enter name of rating agency",
      label: "Name of Rating Agency",
    }
  ]
},


]

// employment form data
export const formInputEmployment = [
  {
    title: "Employment Details",
    formInput: [
      { type: "text", placeholder: "Enter Employee Name", label: "Employee Name" },
      { type: "text", placeholder: "Enter Designation", label: "Designation" },
      { type: "text", placeholder: "Enter Department", label: "Department" },
      { type: "date", placeholder: "Select Joining Date", label: "Joining Date" },
      { type: "text", placeholder: "Enter Work Experience", label: "Total Work Experience" },
      {
        type: "select",
        placeholder: "Select Employment Type",
        label: "Employment Type",
        options: [
          { label: "Select Type", value: "", disabled: true, selected: true },
          { label: "Permanent", value: "permanent" },
          { label: "Contractual", value: "contractual" },
          { label: "Part-time", value: "part_time" }
        ]
      },
      { type: "text", placeholder: "Enter Employee ID", label: "Employee ID" },
      {
        type: "select",
        placeholder: "Select Employment Status",
        label: "Employment Status",
        options: [
          { label: "Select Status", value: "", disabled: true, selected: true },
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" }
        ]
      },
      { type: "text", placeholder: "Enter Previous Organization", label: "Previous Organization" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  },

  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter Street", label: "Street" },
      { type: "select", placeholder: "Select City", label: "City", options: [] },
      { type: "select", placeholder: "Select District", label: "District", options: [] },
      { type: "select", placeholder: "Select Division", label: "Division", options: [] },
      { type: "select", placeholder: "Select Country", label: "Country", options: [] },
      { type: "text", placeholder: "Enter Post Code", label: "Post Code" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      { type: "text", placeholder: "Enter Residential Phone", label: "Phone (Residential)" },
      { type: "email", placeholder: "Enter Email", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  },

  {
    title: "Business Details",
    formInput: [
      { type: "text", placeholder: "Enter Organization Name", label: "Organization Name" },
      { type: "date", placeholder: "Select Establish Date", label: "Establish Date" },
      {
        type: "select",
        placeholder: "Select Role",
        label: "Role in Company",
        options: [
          { label: "Select Role", value: "", disabled: true, selected: true },
          { label: "Owner", value: "owner" },
          { label: "Partner", value: "partner" },
          { label: "Director", value: "director" }
        ]
      },
      {
        type: "select",
        placeholder: "Select Mode of Sales",
        label: "Mode of Sales",
        options: [
          { label: "Select Mode", value: "", disabled: true, selected: true },
          { label: "Retail", value: "retail" },
          { label: "Wholesale", value: "wholesale" },
          { label: "Online", value: "online" }
        ]
      },
      { type: "number", placeholder: "Enter Number of Employees", label: "Number of Employee" },
      {
        type: "text",
        placeholder: "Enter Business Type",
        label: "Business Type"
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  },

  {
    title: "Contact Information",
    formInput: [
      { type: "text", placeholder: "Enter Street", label: "Street" },
      { type: "select", placeholder: "Select City", label: "City", options: [] },
      { type: "select", placeholder: "Select District", label: "District", options: [] },
      { type: "select", placeholder: "Select Division", label: "Division", options: [] },
      { type: "select", placeholder: "Select Country", label: "Country", options: [] },
      { type: "text", placeholder: "Enter Post Code", label: "Post Code" },
      { type: "text", placeholder: "Enter Phone Number", label: "Phone" },
      { type: "text", placeholder: "Enter Office Phone", label: "Phone (Office)" },
      { type: "email", placeholder: "Enter Email", label: "Email" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: true,
  },

  {
    title: "Business Figure",
    formInput: [
      {
        type: "select",
        placeholder: "Select Year",
        label: "Year",
        options: [
          { label: "Select Year", value: "", disabled: true, selected: true },
          { label: "2022", value: "2022" },
          { label: "2023", value: "2023" },
          { label: "2024", value: "2024" }
        ]
      },
      { type: "number", placeholder: "Enter Turnover", label: "Turnover" },
      { type: "number", placeholder: "Enter Profit", label: "Profit" }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3",
    buttonHidden: false,
  }
];

// product form data
export const formInputProduct = [
  {
    title: "Product Selection",
    formInput: [
      {
        type: "select",
        placeholder: "Select Product",
        label: "Product",
        options: [
          { label: "Smart Home Loan", value: "", disabled: true, selected: true },
          { label: "Home Loan", value: "home_loan" },
          { label: "Car Loan", value: "car_loan" },
          { label: "Education Loan", value: "education_loan" },
          { label: "Personal Loan", value: "personal_loan" },
          { label: "Business Loan", value: "business_loan" }
        ]
      },
      {
        type: "table",
        label: "Product Information Table",
        tableData: {
          head: ["Name", "Details"],
          body: [
            ["Product Name", "Smart Home Loan"],
            ["Product Code", "HL2025"],
            ["Product Type", "Secured"],
            ["Scheme Type", "Fixed Rate"],
            ["Interest Rate", "7.5% per annum"],
            ["Processing Fee", "1% of loan amount"],
            ["Tenure", "20 years"],
            ["Loan Limit", "Up to BDT 1 crore"],
            ["LTV Ratio", "80%"],
            ["Status", "Active"]
          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-3"
  },
];

//emi calculator
export const formInputEMICalculator = [
  {
    title: "EMI Calculator",
    formInput: [
      {
        type: "number",
        placeholder: "Enter loan amount",
        label: "Loan Amount",
        cls: "w-full",
      },
      {
        type: "number",
        placeholder: "Enter interest rate (%)",
        label: "Interest Rate",
        cls: "w-full",
      },
      {
        type: "number",
        placeholder: "Enter number of months",
        label: "Number of Months",
        cls: "w-full",
      },
      {
        type: "date",
        placeholder: "Select disbursement date",
        label: "Disbursement Date",
        cls: "w-full",
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-3"
  }
];

//Work flow management
export const formInputWorkflow = [
  {
    title: "Workflow - Retail SME - Quick Loan V1",
    titleCSS: "text-white bg-blue-500",
    buttonName: "Add new Step",
    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "",
            "Step Name",
            "Stage",
            "Target Stage",
            "Role",
            "action"
          ],
          body: [
            [
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:drag-vertical",
                    iconColor: "",
                    iconText: ""
                  }
                }
              },
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:draft",
                    iconColor: "",
                    iconText: "Save As Draft"
                  }
                }
              },
              "Application Initiation",
              "Application Initiation",
              "Relationship Officer",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:drag-vertical",
                    iconColor: "",
                    iconText: ""
                  }
                }
              },
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:add-bold",
                    iconColor: "",
                    iconText: "Submit Application"
                  }
                }
              },
              "Application Initiation",
              "Approval - RM Level",
              "Relationship Officer",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:drag-vertical",
                    iconColor: "",
                    iconText: ""
                  }
                }
              },
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:approve",
                    iconColor: "",
                    iconText: "Approve Application"
                  }
                }
              },
              "Approval - RM Level",
              "Enrichment - Retail Risk Officer",
              "Relationship Manager",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:drag-vertical",
                    iconColor: "",
                    iconText: ""
                  }
                }
              },
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:do-not-disturb-on",
                    iconColor: "",
                    iconText: "Reject Application"
                  }
                }
              },
              "Approval - RM Level",
              "Archive",
              "Relationship Manager",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ]
          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3"
  }
];

// Field Settings Form
export const formFieldSettings = [
  {
    title: "Workflow Management",
    titleCSS: "bg-blue-500",
    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "Status",
            "Step Name",
            "Step Type",
            "Entries",
            "Action"
          ],
          body: [
            [
              "",
              "Start",
              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:play",
                    iconColor: "",
                    iconText: "Start"
                  }
                }
              },
              "",
              ""
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Active": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              "Submit Application",
              {
                type: "icon-text",
                items: {
                  "Form": {
                    iconName: "mdi:file-document",
                    iconColor: "",
                    iconText: "Form Submission"
                  }
                }
              },
              "5",
              {
                type: "icon-text",
                items: {
                  "menu": {
                    iconName: "mdi:menu",
                    iconColor: "",
                    iconText: ""
                  }
                }
              },
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Active": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              "Document Upload",
              {
                type: "icon-text",
                items: {
                  "Upload": {
                    iconName: "mdi:upload",
                    iconColor: "",
                    iconText: "Upload Docs"
                  }
                }
              },
              "4",
              {
                type: "icon-text",
                items: {
                  "menu": {
                    iconName: "mdi:menu",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Active": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              "Initial Screening",
              {
                type: "icon-text",
                items: {
                  "Screening": {
                    iconName: "mdi:eye-check-outline",
                    iconColor: "",
                    iconText: "Screening"
                  }
                }
              },
              "2",
              {
                type: "icon-text",
                items: {
                  "menu": {
                    iconName: "mdi:menu",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Active": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              "Basic Credit Evaluation",
              {
                type: "icon-text",
                items: {
                  "CreditCheck": {
                    iconName: "mdi:credit-card-check",
                    iconColor: "",
                    iconText: "Credit Review"
                  }
                }
              },
              "1",
              {
                type: "icon-text",
                items: {
                  "menu": {
                    iconName: "mdi:menu",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [
              {
                type: "icon-text",
                items: {
                  "Active": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              "Complete",
              {
                type: "icon-text",
                items: {
                  "Complete": {
                    iconName: "mdi:flag-checkered",
                    iconColor: "",
                    iconText: "Complete"
                  }
                }
              },
              "",
              ""
            ]
          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3"
  }
];

// workflow create
export const formWorkflowCreate = [
  {
    title: "Create a new workflow",
    titleCSS: "bg-blue-400 text-white",
    buttonHidden: false,
    buttonName: "Create",
    buttonLink: "/admin/workflows/view",
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-3",
    formInput: [
      {
        type: "text",
        placeholder: "Enter unique workflow name",
        label: "Workflow Name",
        cls: "w-full",
      },
      {
        type: "number",
        placeholder: "Enter initial state",
        label: "Initial State",
        cls: "w-full disabled",
        disabled: false,
      },
      {
        type: "textarea",
        placeholder: "Enter description",
        label: "Details",
        cls: "w-full col-span-2",
      },
    ]
  }
];

// workflow add step
export const formWorkflowAddStep = [
  {
    title: "Workflow Manager",
    titleCSS: "bg-blue-400 text-white",
    buttonHidden: true,
    modalHidden: false,
    modalName: "Add new step",
    modalId: 'modalId01',
    titleModal: 'Add a new step in workflow',

    modalButtonLink: "/admin/workflows/create/draft",
    modalButtonName: "Add",

    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-3",
    formInput: [
      {
        type: "table",
        label: "",
        elementClass: "col-span-2",
        tableData: {
          head: [
            {
              type: "button",
              items: {
                "Add new step": {
                  link: "#",
                  style: "btn btn-outline btn-primary w-full",
                  iconText: "Add",
                  icon: "mdi:plus",
                  disabled: false,
                }
              }
            },
          ],
          body: [
            [
              {
                type: "input",
                items: {
                  "stage": {
                    label: "Step Name",
                    placeholder: "Step Name",
                    type: "text",
                    typeClass: "input",
                    icon: "mdi:pencil-outline",
                    disabled: false
                  }
                }
              },
              {
                type: "input",
                items: {
                  "stage": {
                    label: "Is Final Stage?",
                    placeholder: "Is final Stage?",
                    type: "select",
                    typeClass: "w-full",
                    icon: "mdi:flag-outline",
                    disabled: false,
                    selected: false,
                    options: [
                      { label: "No", value: false, selected: false },
                      { label: "Yes", value: true, selected: true },
                    ]
                  }
                }
              },
              {
                type: "input",
                items: {
                  "stage": {
                    label: "Target Stage",
                    placeholder: "Target Stage",
                    type: "text",
                    typeClass: "input w-full",
                    icon: "mdi:arrow-right",
                    disabled: false
                  }
                }
              },
              {
                type: "input",
                items: {
                  "stage": {
                    label: "Role",
                    placeholder: "Select role?",
                    type: "select",
                    typeClass: "w-full",
                    icon: "mdi:flag-outline",
                    disabled: false,
                    selected: false,
                    options: [
                      { label: "Relationship Officer", value: false, selected: false },
                      { label: "Relationship Manager", value: true, selected: true },
                    ]
                  }
                }
              },
            ],
            [
              {
                type: "input",
                items: {
                  "stage": {
                    label: "Product Code",
                    placeholder: "Product Code",
                    type: "text",
                    typeClass: "input w-full",
                    icon: "mdi:barcode",
                    disabled: false
                  }
                }
              },
              {
                type: "input",
                items: {
                  "Action": {
                    label: "Role Action",
                    placeholder: "Add Role Action",
                    type: "select",
                    typeClass: "w-full",
                    icon: "mdi:tooltip-edit-outline",
                    disabled: false,
                    selected: false,
                    options: [
                      { label: "Query Return to CRM", value: 'QR-CRM', selected: true },
                      { label: "Forward to CPV", value: 'FWD-CPV', selected: false },
                      { label: "Reject to RRM", value: 'RJT-RRM', selected: false },
                    ]
                  }
                }
              },
            ]
          ],
        }
      },

      {
        type: "modal",
        cls: "w-full",
        modalData: [
          {
            titleHidden: true,
            buttonHidden: true,
            modalHidden: true,
            SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3",
            formInput: [
              {
                type: "text",
                placeholder: "Enter Step Name",
                label: "Step Name",
                name: "stepName",
                cls: "w-full",
              },
              {
                type: "text",
                placeholder: "Enter Current Stage Number",
                label: "Current Stage Number",
                name: "productID",
                cls: "w-full"
              },
              {
                type: "select",
                label: "Is this a final step?",
                name: "isFinal",
                cls: "w-full",
                options: [
                  { label: "No", value: false },
                  { label: "Yes", value: true },
                ],
              },
              {
                type: "select",
                label: "Who will work on this step?",
                name: "roleId",
                cls: "w-full",
                options: [
                  { label: "Relationship Officer", value: "RO" },
                  { label: "Relationship Manager", value: "RM" },
                  { label: "Credit Risk Analyst", value: "CRA" },
                  { label: "Credit Risk Manager", value: "CRM" },
                ],
              },
              {
                type: "text",
                placeholder: "Enter next stage",
                label: "Next Stage",
                name: "targetStage",
                cls: "w-full"
              },
              {
                type: "text",
                placeholder: "Enter product Code",
                label: "Product Code",
                name: "productCode",
                cls: "w-full"
              },
              {
                type: "select",
                label: "Role Action",
                name: 'roleAction',
                cls: "w-full",
                options: [
                  { label: "Query Return to CRM", value: 'QR-CRM', selected: true },
                  { label: "Forward to CPV", value: 'FWD-CPV', selected: false },
                  { label: "Reject to RRM", value: 'RJT-RRM', selected: false },
                ]
              },
            ]

          }
        ],
      },

    ]
  }
];

//Work flow management
export const formViewWorkflow = [
  {
    // title: "Workflow - Retail SME - Quick Loan V1",
    // titleCSS: "text-white bg-blue-500",
    titleHidden: true,
    // buttonName: "Add new Step",
    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "Step Name",
            "Stage",
            "Target Stage",
            "Role",
            "action"
          ],
          body: [
            // [
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:drag-vertical",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   },
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:draft",
            //         iconColor: "",
            //         iconText: "Save As Draft"
            //       }
            //     }
            //   },
            //   "Application Initiation",
            //   "Application Initiation",
            //   "Relationship Officer",
            //   {
            //     type: "icon-text",
            //     items: {
            //       "edit": {
            //         iconName: "mdi:pencil",
            //         iconColor: "",
            //         iconText: ""
            //       },
            //       "remove": {
            //         iconName: "mdi:remove-circle-outline",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   }
            // ],
            [

              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:add-bold",
                    iconColor: "",
                    iconText: "Submit Application"
                  }
                }
              },
              "Application Initiation",
              "Approval - RM Level",
              "Relationship Officer",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            // [
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:drag-vertical",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   },
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:approve",
            //         iconColor: "",
            //         iconText: "Approve Application"
            //       }
            //     }
            //   },
            //   "Approval - RM Level",
            //   "Enrichment - Retail Risk Officer",
            //   "Relationship Manager",
            //   {
            //     type: "icon-text",
            //     items: {
            //       "edit": {
            //         iconName: "mdi:pencil",
            //         iconColor: "",
            //         iconText: ""
            //       },
            //       "remove": {
            //         iconName: "mdi:remove-circle-outline",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   }
            // ],
            // [
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:drag-vertical",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   },
            //   {
            //     type: "icon-text",
            //     items: {
            //       "Start": {
            //         iconName: "mdi:do-not-disturb-on",
            //         iconColor: "",
            //         iconText: "Reject Application"
            //       }
            //     }
            //   },
            //   "Approval - RM Level",
            //   "Archive",
            //   "Relationship Manager",
            //   {
            //     type: "icon-text",
            //     items: {
            //       "edit": {
            //         iconName: "mdi:pencil",
            //         iconColor: "",
            //         iconText: ""
            //       },
            //       "remove": {
            //         iconName: "mdi:remove-circle-outline",
            //         iconColor: "",
            //         iconText: ""
            //       }
            //     }
            //   }
            // ]
          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3"
  }
];

//Work flow management
export const formCreateWorkflow = [
  {
    // title: "Workflow - Retail SME - Quick Loan V1",
    // titleCSS: "text-white bg-blue-500",
    titleHidden: true,
    // buttonName: "Add new Step",
    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "",
            "Step Name",
            "Stage",
            "Target Stage",
            "Role",
            "action"
          ],
          body: [

          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3"
  }
];

// workflow list
export const formViewWorkflowList = [
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3",
    title: "Workflow",
    titleHidden: false,
    buttonHidden: true,

    modalHidden: false,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "Workflow Name",
            "Created Date",
            "Updated Date",
            "Total Stages",
            "Status",
            "",
            "Action"
          ],
          body: [
            [
              "Retail SME - Quick Loan V1",
              "2024-05-01",
              "2025-06-01",
              "6",
              {
                type: "icon-text",
                items: {
                  "status": {
                    iconName: "mdi:circle-slice-8",
                    iconColor: "text-green-400",
                    iconText: "Active"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800",
                checked: true,
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit"
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  }
                }
              }
            ],
            [
              "Retail Loan - Auto Approval",
              "2023-10-15",
              "2025-04-20",
              "4",
              {
                type: "icon-text",
                items: {
                  "status": {
                    iconName: "mdi:circle-outline",
                    iconColor: "text-yellow-500",
                    iconText: "Pause"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800",
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit"
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  }
                }
              }
            ],
            [
              "Credit Card Origination Flow",
              "2024-12-05",
              "2025-05-28",
              "5",
              {
                type: "icon-text",
                items: {
                  "status": {
                    iconName: "mdi:circle-outline",
                    iconColor: "text-yellow-500",
                    iconText: "Pause"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800",
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit"
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  }
                }
              }
            ]
          ]
        }
      },
      {
        type: "modal",
        cls: "w-full",
        modalData: [
          {
            titleHidden: true,
            buttonHidden: true,
            modalHidden: true,
            SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-3",
            formInput: [
              {
                type: "text",
                placeholder: "Enter unique workdflow name",
                label: "Workflwo Name",
                name: "targetStage",
                cls: "w-full"
              },
              {
                type: "select",
                label: "Product Name",
                name: "isFinal",
                cls: "w-full",
                options: [
                  { label: "Product 1", value: 'p1' },
                  { label: "Product 2", value: 'p2' },
                ],
              },
              {
                type: "textarea",
                placeholder: "Enter workflow description",
                elementClass: "col-span-2",
                label: "Description",
                name: "workflwoDescription",
                cls: "w-full"
              },
            ]

          }
        ],
      },
    ],

  }
];

// workflow list all
export const formWorkflowViewAll = [
  {
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3",
    title: "Workflow",
    titleHidden: false,
    buttonHidden: true,

    modalHidden: false,
    modalName: "Create",
    modalId: 'createWorkflow',
    titleModal: 'Create a new workflow',

    modalButtonLink: "/admin/workflows/create",
    modalButtonName: "Create",

    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "Workflow Name",
            "Created Date",
            "Updated Date",
            "Total Stages",
            "Status",
            "Visibility",
            "Action"
          ],
          body: [
            [
              {
                type: "text-link",
                items: {
                  "text": {
                    text: "Retail SME - Quick Loan V1",
                    link: "/admin/workflows/view/workflow",
                    style: "text-blue-500 hover:underline"
                  }
                }
              },
              "2024-05-01",
              "2025-06-01",
              "6",
              {
                type: "icon-text",
                items: {
                  "status": {
                    iconName: "mdi:check-circle",
                    iconColor: "text-blue-400",
                    iconText: "Published"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800",
                checked: true
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit",
                    iconLink: "/admin/workflows/edit/draft",
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  },
                  "duplicate": {
                    iconName: "mdi:content-duplicate",
                    iconColor: "text-black-500",
                    iconText: "Duplicate"
                  }
                }
              }
            ],
            [
              {
                type: "text-link",
                items: {
                  "text": {
                    text: "Retail Loan - Auto Approval",
                    link: "#",
                    style: "text-blue-500 hover:underline"
                  }
                }
              },
              "2023-10-15",
              "2025-04-20",
              "4",
              {
                type: "icon-text",
                items: {
                  status: {
                    iconName: "mdi:file-document-edit-outline",
                    iconColor: "text-slate-500",
                    iconText: "Draft"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800"
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit"
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  },
                  "duplicate": {
                    iconName: "mdi:content-duplicate",
                    iconColor: "text-black-500",
                    iconText: "Duplicate"
                  }
                }
              }
            ],
            [
              {
                type: "text-link",
                items: {
                  "text": {
                    text: "Credit Card Origination Flow",
                    link: "#",
                    style: "text-blue-500 hover:underline"
                  }
                }
              },
              "2024-12-05",
              "2025-05-28",
              "5",
              {
                type: "icon-text",
                items: {
                  status: {
                    iconName: "mdi:ab-testing",
                    iconColor: "text-green-500",
                    iconText: "Testing"
                  }
                }
              },
              {
                type: "checkbox",
                cls: "toggle border-yellow-600 bg-yellow-500 checked:border-green-500 checked:bg-green-400 checked:text-white-800"
              },
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: "Edit"
                  },
                  "view": {
                    iconName: "mdi:eye-outline",
                    iconColor: "",
                    iconText: "View"
                  },
                  "remove": {
                    iconName: "mdi:delete-outline",
                    iconColor: "text-red-500",
                    iconText: "Delete"
                  },
                  "duplicate": {
                    iconName: "mdi:content-duplicate",
                    iconColor: "text-black-500",
                    iconText: "Duplicate"
                  }
                }
              }
            ]
          ]

        }
      },
      {
        type: "modal",
        cls: "w-full",
        modalData: [
          {
            titleHidden: true,
            buttonHidden: true,
            modalHidden: true,
            SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-3",
            formInput: [
              {
                type: "text",
                placeholder: "Enter unique workdflow name",
                label: "Workflwo Name",
                name: "targetStage",
                cls: "w-full"
              },
              {
                type: "select",
                label: "Product Name",
                name: "isFinal",
                cls: "w-full",
                options: [
                  { label: "Product 1", value: 'p1' },
                  { label: "Product 2", value: 'p2' },
                ],
              },
              {
                type: "textarea",
                placeholder: "Enter workflow description",
                elementClass: "col-span-2",
                label: "Description",
                name: "workflwoDescription",
                cls: "w-full"
              },
            ]

          }
        ],
      },
    ],

  }
];

//workflow view by workflow id
export const formWorkflowID = [
  {
    // title: "Workflow - Retail SME - Quick Loan V1",
    // titleCSS: "text-white bg-blue-500",
    titleHidden: true,
    // buttonName: "Add new Step",
    formInput: [
      {
        type: "table",
        label: "",
        tableData: {
          head: [
            "Step Name",
            "Stage",
            "Target Stage",
            "Role",
            "action"
          ],
          body: [
            [

              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:draft",
                    iconColor: "",
                    iconText: "Save As Draft"
                  }
                }
              },
              "Application Initiation",
              "Application Initiation",
              "Relationship Officer",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [

              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:add-bold",
                    iconColor: "",
                    iconText: "Submit Application"
                  }
                }
              },
              "Application Initiation",
              "Approval - RM Level",
              "Relationship Officer",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [

              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:approve",
                    iconColor: "",
                    iconText: "Approve Application"
                  }
                }
              },
              "Approval - RM Level",
              "Enrichment - Retail Risk Officer",
              "Relationship Manager",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ],
            [

              {
                type: "icon-text",
                items: {
                  "Start": {
                    iconName: "mdi:do-not-disturb-on",
                    iconColor: "",
                    iconText: "Reject Application"
                  }
                }
              },
              "Approval - RM Level",
              "Archive",
              "Relationship Manager",
              {
                type: "icon-text",
                items: {
                  "edit": {
                    iconName: "mdi:pencil",
                    iconColor: "",
                    iconText: ""
                  },
                  "remove": {
                    iconName: "mdi:remove-circle-outline",
                    iconColor: "",
                    iconText: ""
                  }
                }
              }
            ]
          ]
        }
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-3"
  }
];


// workflow edit
export const formWorkflowEdit = [
  {
    title: "Basic Information",
    titleCSS: "bg-blue-300 text-white",
    titleHidden: false,
    icon: "mdi:form-select",
    buttonLink: "#",
    buttonName: "Save Info",
    buttonHidden: false,
    SectionCSS: "grid grid-cols-1 md:grid-cols-3 gap-4 my-4",
    elementClass: "form-control",
    modalHidden: true,
    modalId: "modal-basic-info",
    modalName: "Add Detail",
    titleModal: "Basic Info Modal",
    subtitleModal: "Enter your data here",
    modalButtonName: "Add",
    modalButtonLink: "#",
    formInput: [
      {
        type: "text",
        label: "Workflow Name",
        placeholder: "Retail SME - Quick Loan V1",
        cls: "input input-bordered w-full",
      },
      {
        type: "text",
        label: "Created Date",
        placeholder: "dd/mm/yyyy",
        value: "	01/05/2025",
        disabled: true,
        cls: "input input-bordered w-full",
      },
      {
        type: "text",
        label: "Total Stages",
        disabled: true,
        placeholder: "stage",
        value: "6",
        cls: "input input-bordered w-full",
      },
    ],
  },
  {
    title: "Settings",
    titleCSS: "bg-purple-300 text-white",
    titleHidden: false,
    icon: "mdi:cog-outline",
    buttonLink: "#",
    buttonName: "Save Settings",
    buttonHidden: false,
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 gap-4 my-4",
    elementClass: "form-control",
    modalHidden: true,
    modalId: "modal-settings",
    modalName: "Configure",
    titleModal: "Settings Modal",
    subtitleModal: "Workflow configuration",
    modalButtonName: "Update",
    modalButtonLink: "#",
    formInput: [
      {
        type: "select",
        label: "Workflow Type",
        cls: "select select-bordered w-full",
        options: [
          { value: "sme", label: "Retail SME" },
          { value: "auto", label: "Auto Loan" },
          { value: "credit", label: "Credit Card" },
        ],
        selected: true,
      },
      {
        type: "select",
        label: "Workflow Status",
        cls: "select select-bordered w-full",
        options: [
          { value: "Paused", label: "Paused" },
          { value: "Published", label: "Published" },
          { value: "Draft", label: "Draft" },
        ],
        selected: true,
      },
      {
        type: "select",
        label: "Activity Status",
        cls: "select select-bordered w-full",
        options: [
          { value: "Active", label: "Active" },
          { value: "Paused", label: "Paused" },
          { value: "Scheduled", label: "Scheduled" },
        ],
        selected: true,
      },
      {
        type: "text",
        label: "Product Name",
        placeholder: "Product Name",
        value: "Quick Loan",
        disabled: false,
        cls: "input input-bordered w-full",
      },
    ],
  },
];