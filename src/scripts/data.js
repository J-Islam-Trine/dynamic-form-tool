//sample application list table data
export const mainApplicationTableData = [
  {
    id: "#APP2596",
    userName: "Asha Khatun",
    loanType: "Card Loan",
    branch: "Mirpur 10",
    date: "Just now",
    status: "Complete"
  },
  {
    id: "#APP3582",
    userName: "Bikash Bosh",
    loanType: "SME Loan",
    branch: "Wari",
    date: "Just now",
    status: "In Progress"
  },
  {
    id: "#APP4256",
    userName: "Cynthiya PL",
    loanType: "Retail Loan",
    branch: "Bhaluka",
    date: "Just now",
    status: "Pending"
  },
  {
    id: "#APP5968",
    userName: "Chandan Roy",
    loanType: "Card Loan",
    branch: "Kalibari Road",
    date: "Just now",
    status: "In Progress"
  },
  {
    id: "#APP5968",
    userName: "Md Tareq",
    loanType: "SME",
    branch: "Moharaja Road",
    date: "Just now",
    status: "Complete"
  },
  {
    id: "#APP5968",
    userName: "M. Pial",
    loanType: "Retail Loan",
    branch: "Moharaja Road",
    date: "Just now",
    status: "Rejected"
  },
  {
    id: "#APP5968",
    userName: "Z Piash",
    loanType: "Card Loan",
    branch: "Moharaja Road",
    date: "Just now",
    status: "Complete"
  },
  {
    id: "#APP5968",
    userName: "Behan Khan",
    loanType: "Student Loan",
    branch: "Natun Bazar",
    date: "Just now",
    status: "Complete"
  }
];

export const salaryAdvanceTableData= [
  {
    id: "#SAL2596",
    userName: "Asha Khatun",
    loanType: "Card Loan",
    branch: "Mirpur 10",
    date: "Just now",
    status: "Complete"
  }];

// Breadcrumbs: Application
export const breadApp = [
  { label: "Dashboard", href: "/" },
  { label: "Card", href: "#" },
  { label: "Application" }
];

// Breadcrumbs: Application
export const breadWorkFlow = [
  { label: "Dashboard", href: "/" },
  { label: "Applications", href: "#" },
  { label: "Status" }
];

// Breadcrumbs: New Application 
export const breadNewApp = [
  { label: "Dashboard", href: "/" },
  { label: "Card", href: "#" },
  { label: "Application", href: "/application" },
  { label: "New Application" }
];

// Breadcrumbs: Application selected 
export const breadAppSelected = [
  { label: "Dashboard", href: "/" },
  { label: "Card", href: "#" },
  { label: "Application View", href: "/viewApplication" },
  { label: "Application #Id" }
];

// CardDefault: Application Container
export const cardDataAppContainer = [
  {
    Title: "New Application",
    Content: "",
    icon: "mdi:file-document-plus-outline",
    iconColor: "text-black",
    bgColor: "bg-white",
    orientation: "flex-col",
    link: "/newApplication"
  },
  {
    Title: "View Application",
    Content: "",
    icon: "mdi:file-document-plus-outline",
    iconColor: "text-black",
    bgColor: "bg-white",
    orientation: "flex-col",
    link: "/viewApplication"
  },
  {
    Title: "Application Credit History",
    Content: "",
    icon: "mdi:file-document-plus-outline",
    iconColor: "text-black",
    bgColor: "bg-white",
    orientation: "flex-col",
    link: "/applicationCreditHistory"
  },
];

// CardDefault: New Application
export const cardDataNewApp = [
  {
    Title: "Demographic Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-success",
    orientation: "flex-col",
    link: "#",
    text: "text-white",
  },
  {
    Title: "Sourcing Customer Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-success",
    orientation: "flex-col",
    link: "#",
    text: "text-white",
  },
  {
    Title: "Supplement Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-warning",
    orientation: "flex-col",
    link: "#"
  },
  {
    Title: "Spouse Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Reference",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Guarantor Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Nominee Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Financial Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Security Info",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Products",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
  {
    Title: "Document Preview",
    Content: "",
    icon: "mdi:file-account-outline",
    iconColor: "text-black",
    bgColor: "bg-blue-300",
    orientation: "flex flex-col",
    link: "#"
  },
];

// application header data
export const headerData ={
  label: "Loan Application",
  value: "#APP2596",
  date: "15 May, 2025",
  branch: "Dhaka",
  handler: "Musfiq",
}

// documents data
export const tableDocument = {
  head: [
    "Information Field",
    "Document Name",
    "Priority",
    "Auth",
    "File Type",
    "Receive Date",
    "Action",
  ],
  body: [
    [
      "Personal ID",
      "ID_Card.pdf",
      "High",
      "Admin",
      "PDF",
      "2024-12-01",
      {
        type: "button",
        items: {
          "Update": {
            link: "/update/1",
            style: "btn btn-warning"
          },
          "Delete": {
            link: "/delete/1",
            style: "btn btn-error"
          }
        }
      }
    ],
    [
      "Income Proof",
      "Salary_Slip_March.pdf",
      "Medium",
      "User",
      "PDF",
      "2024-11-20",
      {
        type: "button",
        items: {
          "Update": {
            link: "/update/2",
            style: "btn btn-warning"
          },
          "Delete": {
            link: "/delete/2",
            style: "btn btn-error"
          }
        }
      }
    ],
    [
      "Address Proof",
      "Utility_Bill.pdf",
      "Low",
      "Admin",
      "PDF",
      "2024-11-10",
      {
        type: "button",
        items: {
          "Update": {
            link: "/update/3",
            style: "btn btn-warning"
          },
          "Delete": {
            link: "/delete/3",
            style: "btn btn-error"
          }
        }
      }
    ]
  ]
};

// demography data
export const dataDemography = [
  {
    title: "Personal Information",
    content: [
      { label: "Name", value: "Peter Parker" },
      { label: "Date of Birth", value: "18 May, 2007" },
      { label: "Age", value: "30" },
      { label: "Gender", value: "Male" },
      { label: "National ID", value: "325 3215 1234" },
    ]
  },
  {
    title: "Contact Information",
    content: [
      { label: "Email", value: "peterparker@spidy.com" },
      { label: "Phone", value: "+1 (555) 123-4567" },
      { label: "Alternate Phone", value: "+1 (555) 987-6543" },
      { label: "Address", value: "123 Main St, Springfield, IL 62704" },
      { label: "City", value: "Springfield" },
      { label: "State", value: "Illinois" },
      { label: "Postal Code", value: "62704" },
      { label: "Country", value: "United States" }
    ]
  },
];

// demography data
export const dataDemographic = [
  {
    title: "Personal Information",
    Name: "Peter Parker",
    NID: "325 3215 1234",
    DOB: "18 May, 2007",
    Age: "18",
    Gender: "Male"
  },
  {
    title: "Contact Information",
    Email: "peterparker@spidy.com",
    Phone: "+1 (555) 123-4567",
    AlPhone: "+1 (555) 987-6543",
    Address: "123 Main St, Springfield, IL 62704",
    City: "Springfield",
    District: "Illinois",
    Postcode: "62704",
    Country: "United States"
  },
];

// financial data
export const dataFinancial = [
  {
    title: "Employment / Professional Info",
    content: [
      { label: "Occupation", value: "Software Engineer" },
      { label: "Employer", value: "TechNova Ltd." },
      { label: "Employment Type", value: "Full-time" },
      { label: "Years Employed", value: "3 years" },
      { label: "Work Email", value: "peter@technova.com" }
    ]
  },
  {
    title: "Income & Liabilities",
    content: [
      { label: "Annual Income", value: "$85,000" },
      { label: "Other Income", value: "$5,000" },
      { label: "Monthly Liabilities", value: "$1,800" },
      { label: "Outstanding Loans", value: "Car Loan ($10,000)" }
    ]
  },


  {
    title: "Business Info",
    content: [
      { label: "Business Name", value: "Web Solutions LLC" },
      { label: "Business Type", value: "Sole Proprietorship" },
      { label: "Established Year", value: "2018" },
      { label: "Annual Revenue", value: "$120,000" },
      { label: "Business Address", value: "450 Startup Lane, San Francisco, CA" }
    ]
  },
  {
    title: "Income & Liabilities",
    content: [
      { label: "Net Monthly Income", value: "$7,500" },
      { label: "Rent/Mortgage", value: "$1,200" },
      { label: "Utilities", value: "$300" },
      { label: "Credit Card Debt", value: "$4,000" }
    ]
  }
];

// nominee data
export const dataNominee = [
  {
    title: "Primary Nominee Information",
    content: [
      { label: "Full Name", value: "Sophia Williams" },
      { label: "Relationship", value: "Spouse" },
      { label: "Date of Birth", value: "1990-04-15" },
      { label: "Phone Number", value: "+1-555-123-4567" },
      { label: "Email Address", value: "sophia.williams@example.com" },
      { label: "Nationality", value: "American" },
      { label: "Identification Type", value: "Passport" },
      { label: "Identification Number", value: "X1234567" },
      { label: "Address", value: "123 Elm Street, Springfield, IL" },
      { label: "Percentage of Share", value: "100%" }
    ]
  },
  {
    title: "Alternate Nominee (If Applicable)",
    content: [
      { label: "Full Name", value: "James Miller" },
      { label: "Relationship", value: "Brother" },
      { label: "Date of Birth", value: "1988-09-20" },
      { label: "Phone Number", value: "+1-555-987-6543" },
      { label: "Email Address", value: "james.miller@example.com" },
      { label: "Nationality", value: "American" },
      { label: "Identification Type", value: "Driver's License" },
      { label: "Identification Number", value: "D87654321" },
      { label: "Address", value: "456 Oak Avenue, Chicago, IL" },
      { label: "Percentage of Share", value: "0%" }
    ]
  }
];

//new mainlayout sidebar data
export const complexDataSideBar = [
  {
    sectionName: "Employee",
    children: [
      {
        link: "/tables/employeeTable",
        label: "Employee List"
      },
      {
        link: "#",
        label: "Add Employee"
      },
    ]
  },
  {
    sectionName: "Product",
    children: [
      {
        link: "/tables/productTable",
        label: "Products List"
      }
    ]
  },
  {
    sectionName: "Enterprise",
    children: [
      {
        link: "/enterprise/enterpriseTable",
        label: "Enterprise List"
      },
      {
        link: "/enterprise/addEnterprise",
        label: "Add Enterprise"
      },
    ]
  },
  {
    sectionName: "Entrepreneur",
    children: [
      {
        link: "/tables/entrepreneurTable",
        label: "Entrepreneur List"
      }
    ]
  },
  {
    sectionName: "Application",
    children: [
      {
        link: "/applications/view/11221",
        label: "View Application"
      }
    ]
  },
  {
    sectionName: "Salary Advance",
    children: [
      {
        link: "/salary-advance/applications/create",
        label: "Request for Salary Advance"
      }
    ]
  },
  {
    sectionName: "Manage Approval Workflows",
    children: [
      { link: "/admin/workflows/create", label: "Create a new workflow" },
      { link: "/admin/workflows/view/all", label: "View all workflows" },
    ]
  },
  {
    sectionName: "Tools",
    children: [
      {
        link: "/calculatorEMI",
        label: "Loan Calculator"
      },
      {
        link: "/crgScoring",
        label: "Credit Assessment Tool"
      }
    ]
  },
  {
    sectionName: "Help and Information",
    children: [
      {
        link: "/guide",
        label: "Component Guide"
      }
    ]
  }

];

// sidebar regular
export const dataSidebar = [
  { link: "/", label: "Dashboard" },
  { link: "/application", label: "Application" },
  { link: "/viewApplication", label: "Application View" },
  { link: "#", label: "Recommendation" },
  { link: "#", label: "Document View" },
  { link: "#", label: "Timeline" },
  { link: "#", label: "Query & Mitigation" },
  { link: "#", label: "Product Info" },
  { link: "#", label: "Avg Balance" },
  { link: "#", label: "App Credit History" },
  { link: "#", label: "GMI" },
  { link: "#", label: "Verification" },
  { link: "#", label: "CPA" },
  { link: "#", label: "Approval" },
  { link: "/crgScoring", label: "CRG Scoring" },
  { link: "#", label: "Signout" }
];

// security data
export const dataApplicationViewSecurity = [
  {
    title: "Basic Information",
    content: [
      { label: "Security Owner", value: "Self" },
      { label: "Bank Name", value: "Eastern Bank PLC" },
      { label: "Branch Name", value: "Gulshan" },
      { label: "Security Type", value: "Fixed Deposit" },
      { label: "Security Number", value: "FD2023EB123456" },
      { label: "Issue Date", value: "15/05/2023" },
      { label: "Maturity Date", value: "15/05/2026" },
      { label: "Interest Rate", value: "7.25%" },
      { label: "Auto Renewable", value: "YES" },
      { label: "Auto Rollover", value: "YES" }
    ]
  },
  {
    title: "Security Value Metrics",
    content: [
      { label: "Block Status", value: "YES" },
      { label: "Block Amount", value: "100,000 BDT" },
      { label: "Free Amount", value: "0 BDT" },
      { label: "Face Value", value: "100,000 BDT" },
      { label: "Present Value - Allowable", value: "80%" },
      { label: "LTV", value: "80%" },
      { label: "Allowable Value", value: "87,480 BDT" },
      { label: "Allowable Loan", value: "85,000 BDT" },
      { label: "Lien", value: "YES" },
      { label: "Security Status", value: "Active" }
    ]
  }
];

// supplement data
export const dataSupplement = [
  {
    title: "Personal Information",
    content: [
      { label: "Name", value: "Ms. Pepper Potts" },
      { label: "Embossing Name", value: "Papper Potts" },
      { label: "Gender", value: "Female" },
      { label: "DOB", value: "05/04/2000" },
      { label: "Age", value: "25" },
      { label: "Place of Birth", value: "Pennsylvania" },
      { label: "National ID no", value: "123-45-6789" },
      { label: "Nationality", value: "United States" },
      { label: "Relationship With Primary Card applicants", value: "Spouse" },
      { label: "Passport No.", value: "U123456789" },
      { label: "Phone (Primary)", value: "+880 123 45678 912" },
      { label: "Phone (Residence)", value: "+880 123 87654 912" },
      { label: "Residential Status", value: "Owned" },
      { label: "Relationship", value: "Sister" },
      { label: "Limit Percentage", value: "25%" },
      { label: "Limit Amount", value: "2,50,000" },
      { label: "Embossing Name", value: "Pepper Pot" },
      { label: "Encoded Name", value: "null" },
      { label: "Company Name", value: "Stark Industry" },
      { label: "Designation", value: "Software Engineer" },
      { label: "Area", value: "Springfield Township" },
      { label: "Phone (Office)", value: "+1 123 44444 912" },
      { label: "Email ID", value: "abc@gmail.com" }
    ]
  },
  {
    title: "Photo & Signature",
    media: {
      image: "https://avatar.iran.liara.run/public/girl",
      signature: "/src/components/viewSupplement/signature-demo.png"
    }
  },
];

// spouse data
export const dataSpouse = [
  {
    title: "Basic Identity",
    dataType: "text",
    content: [
      { label: "Full Name", value: "Pepper Potts" },
      { label: "NID", value: "+880 123 87654 912" },
      { label: "Date Of Birth", value: "19 May, 1980" },
      { label: "Gender", value: "Female" },
      { label: "Nationality", value: "Bangladeshi" },
      { label: "Relationship", value: "Wife" },
      { label: "Spouse Name", value: "Tony Stark" },
      { label: "Residential Status", value: "Owner" },
      { label: "Birth Certificate No", value: "1234 5678 9012" },
      { label: "ETIN No", value: "1234 5678 9012" },
      { label: "Valid Passport No", value: "1234 5678 9012" },
      { label: "CIF ID", value: "369825" }
    ]
  },
  {
    title: "Contact Details",
    dataType: "text",
    content: [
      { label: "Phone", value: "+880 123 45678 912" },
      { label: "Alternate Phone", value: "+880 123 45678 219" },
      { label: "Email", value: "pepper.potts@stark.com" },
      { label: "Present Address", value: "221C Bakergonj, Dhaka" },
      { label: "Birth Country", value: "Bangladesh" }
    ]
  },
  {
    title: "Others",
    dataType: "text",
    content: [
      { label: "Is Spouse a Joint Account Holder?", value: "No" },
      { label: "Is Spouse a Nominee?", value: "No" },
      { label: "Age", value: "35 years" },
      { label: "Age of Passport Issued Date", value: "15 Days" },
      { label: "Passport Issued Date", value: "May, 2025" },
      { label: "Passport Issued Country", value: "Bangladesh" }
    ]
  },
  {
    title: "Professional Details",
    dataType: "text",
    content: [
      { label: "Occupation", value: "Investment Banker" },
      { label: "Organization Name", value: "Stark Industries" },
      { label: "Designation", value: "Personal Assistant" },
      { label: "Office Address", value: "221C Bakergonj, Dhaka" }
    ]
  },
  {
    title: "Identification Documents",
    dataType: "image",
    content: [
      { label: "Image", value: "https://placehold.co/300x200?text=Photo" },
      { label: "NID Copy", value: "https://placehold.co/300x200?text=NID" },
      { label: "Marriage Certificate", value: "https://placehold.co/300x200?text=Marriage" },
      { label: "Passport", value: "Null" }
    ]
  }
];

// input types
export const FormInputType = {
  radio: { type: "radio", class: "radio" },
  text: { type: "text", class: "input input-bordered" },
  checkbox: { type: "checkbox", class: "checkbox" },
  toggle: { type: "checkbox", class: "toggle" },
  password: { type: "password", class: "input" },

  email: { type: "email", class: "input input-bordered" },
  number: { type: "number", class: "input input-bordered" },
  date: { type: "date", class: "input input-bordered" },
  time: { type: "time", class: "input input-bordered" },
  datetime: { type: "datetime-local", class: "input input-bordered" },
  file: { type: "file", class: "file-input file-input-bordered" },
  range: { type: "range", class: "range" },

  textarea: { type: "textarea", class: "textarea textarea-bordered" },
  select: { type: "select", class: "select select-bordered" },

  tel: { type: "tel", class: "input input-bordered" },
  url: { type: "url", class: "input input-bordered" },
  color: { type: "color", class: "input input-bordered w-16 p-0" },
};

// formbuilder field data
export const FormBuilderField = [
  {
    title: "Layout",
    ButtonData: [
      { name: "Section Break", link: "#" },
      { name: "Data Table", link: "#" },
      { name: "Grid", link: "#" },
      { name: "Card", link: "#" },
      { name: "Tabs", link: "#" }
    ]
  },
  {
    title: "Text and Input",
    ButtonData: [
      { name: "Short Text", link: "#" },
      { name: "Paragraph", link: "#" },
      { name: "Email", link: "#" },
      { name: "Phone Number", link: "#" },
      { name: "Password", link: "#" }
    ]
  },
  {
    title: "Choices",
    ButtonData: [
      { name: "Dropdown", link: "#" },
      { name: "Radio Buttons", link: "#" },
      { name: "Checkboxes", link: "#" },
      { name: "Multi-Select", link: "#" }
    ]
  },
  {
    title: "Date and Time",
    ButtonData: [
      { name: "Date Picker", link: "#" },
      { name: "Time Picker", link: "#" },
      { name: "Date & Time", link: "#" }
    ]
  },
  {
    title: "Media",
    ButtonData: [
      { name: "Image Upload", link: "#" },
      { name: "File Upload", link: "#" },
      { name: "Video Embed", link: "#" }
    ]
  },
  {
    title: "Advanced",
    ButtonData: [
      { name: "Signature", link: "#" },
      { name: "Custom Code", link: "#" },
      { name: "Location Picker", link: "#" },
      { name: "Rating", link: "#" }
    ]
  }
];

// guarantor data
export const dataGuarantor = [
  {
    title: "Basic Identity",
    content: [
      { label: "Reference", value: "Pepper Potts" },
      { label: "Existing Customer", value: "Yes" },
      { label: "Account No", value: "123 45678 9123" },
      { label: "Name of Guarantor", value: "Tony Stark" },
      { label: "Father’s Name", value: "Howard Stark" },
      { label: "Mother’s Name", value: "Maria Stark" },
      { label: "Date of Birth", value: "19 May, 1980" },
      { label: "Nationality", value: "Bangladeshi" },
      { label: "Relationship", value: "Brother-in-law" },
      { label: "Gender", value: "Female" },
      { label: "Age", value: "35 years" },
      { label: "Residential Status", value: "Owner" },
      { label: "Birth Certificate No", value: "1234 5678 9012" },
      { label: "ETIN No", value: "1234 5678 9012" },
      { label: "Valid Passport No", value: "1234 5678 9012" },
      { label: "CIF ID", value: "369825" },
      { label: "Contact No", value: "+880 123 45678 912" },
      { label: "Contact No (Optional)", value: "+880 123 45678 219" },
      { label: "Profession", value: "Investment Banker" },
      { label: "Spouse Name", value: "Pepper Potts" },
      { label: "Passport Issued Country", value: "Bangladesh" },
      { label: "Passport Issued Date", value: "May, 2025" },
      { label: "Age of Issued Date", value: "15 Days" },
      { label: "Office Address", value: "221C Bakergonj, Dhaka" },
      { label: "Email", value: "pepper.potts@stark.com" },
      { label: "Birth Country", value: "Bangladesh" }
    ]
  },
  {
    title: "Photo & Documents",
    media: {
      birthCertificate: "https://placehold.co/600x400?text=Birth%20Certificate",
      etin: "https://placehold.co/600x400?text=ETIN",
      passport: "https://placehold.co/600x400?text=Passport"
    }
  }
];

// product information data
export const dataProductInfo = [
  {
    title: "Product Info",
    content: [
      { label: "Product Name", value: "EBL Platinum Credit Loan" },
      { label: "Product Code", value: "EBL-CCL-PLAT-001" },
      { label: "Product Type", value: "Secured Credit Card Loan" },
      { label: "Scheme Type", value: "Fixed Deposit Backed" },
      { label: "Interest Rate", value: "11.50% per annum" },
      { label: "Processing Fee", value: "1.25% of Loan Amount" },
      { label: "Tenure", value: "36 Months" },
      { label: "Loan Limit", value: "BDT 200,000" },
      { label: "LTV Ratio", value: "90%" },
      { label: "Status", value: "Active" }
    ]
  }
];

// scripts/legalOpinionData.ts

export const formInputLegalOpinion = [
  {
    title: "Legal Opinion",
    formInput: [
      {
        type: "select",
        placeholder: "Select opinion type",
        label: "Opinion Type",
        options: [
          { label: "Select type", value: "", disabled: true, selected: true },
          { label: "Internal", value: "internal" },
          { label: "External", value: "external" }
        ]
      },
      {
        type: "text",
        placeholder: "Enter the Name",
        label: "Agency Name"
      },
      {
        type: "text",
        placeholder: "Enter code",
        label: "Agency Code"
      },
      {
        type: "date",
        placeholder: "dd/mm/yyyy",
        label: "Date of Document Received"
      },
      {
        type: "text",
        placeholder: "Enter ID",
        label: "Legal Remarks"
      },
      {
        type: "select",
        placeholder: "Select Status",
        label: "Residential Status",
        options: [
          { label: "Select status", value: "", disabled: true, selected: true },
          { label: "Resident", value: "resident" },
          { label: "Non-Resident", value: "non_resident" }
        ]
      },
      {
        type: "textarea",
        placeholder: "Feedback",
        label: "Feedback on Search",
        class: "col-span-1 md:col-span-2 lg:col-span-3", 
        elementClass: "w-full col-span-3", 
        cls: "col-span-3 w-full",
      }
    ],
    SectionCSS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3"
  }
];

export const legalOpinionViewData = [
  {
    title: "Legal Opinion View",
    content: [
      {
        label: "Opinion Type",
        value: "Internal"
      },
      {
        label: "Agency Name",
        value: "Eastern Bank Ltd"
      },
      {
        label: "Agency Code",
        value: "EBL-CCL-PLAT-001"
      },
      {
        label: "Date of Document Received",
        value: "22/04/2025"
      },
      {
        label: "Legal Remarks",
        value: "#APP2596"
      },
      {
        label: "Residential Status",
        value: "Resident"
      },
      {
        label: "Feedback on Search",
        value: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
      }
    ]
  }
];

export const crgCreditScoring = {
  head: [
    "SL No",
    "Criteria",
    "Max Risk Weight",
    "Parameter",
    "Earned Score"
  ],
  body: [
    [
      "1",
      "Occupation",
      "1",
      "Other govt./Private Service",
      

    ],
    [
      "2",
      "Length of Service",
      "2",
      "Confirmed Job(Above 2 years)",

    ],
    [
      "3",
      "Education",
      "4",
      "Graduate/Post graduate or Equivalent",

    ],
    [
      "4",
      "AGE(on the date of icon amturity)",
      "5",
      "25 years to 35 years",

    ],
    [
      "5",
      "Housing Status",
      "3",
      "Rented and Other",

    ],
    [
      "6",
      "Surplus Monthly Income",
      "12",
      "450000 to 650000",

    ],
    [
      "7",
      "DBR",
      "12",
      "More than 40%",

    ],
    [
      "8",
      "Bank A/C with Bank Asia Ltd",
      "2",
      "FDR & DPS and anyother transaction",

    ],
    [
      "9",
      "Telephone",
      "2",
      "Mobile phone only",

    ],
    [
      "10",
      "Tax payment",
      "1",
      "Regular Tax payer",

    ]
  ],
  summary: {
    finalScore: 22,
    totalScore: 50,
    quality: "Good"
  }
};
