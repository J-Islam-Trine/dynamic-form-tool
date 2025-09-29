export const tableData =
{
  head: [
    "Date",
    "Stage",
    "Comment",
    "Handlar",
    "Action"
  ],

  body: [
    [
      "01/06/2025",
      "Application Creation",

      "User submitted demographic info. waiting for other info",
      "Musfiq",
      {
        type: "button",
        items: {
          "Open": {
            link: "#",
            style: "btn btn-info"
          }
        }
      }
    ],
    [
      "03/06/2025",
      "Application Creation",

      "User submitted all documents",
      "Musfiq",
      {
        type: "button",
        items: {
          "Open": {
            link: "#",
            style: "btn btn-info"
          }
        }
      }
    ],
    [
      "07/06/2025",
      "Business Unit",

      "Passed all test",
      "Nehal",
      {
        type: "button",
        items: {
          "Open": {
            link: "#",
            style: "btn btn-info"
          }
        }
      }
    ],
  ]
}

// employee Details
export const TableEmployee = {
  head: [
    "Emp ID", "Name", "Department", "Designation",
    "Branch", "LOS Role", "Email", "Phone", "Status", "Actions"
  ],
  body: [
    [
      "EBL-2053", "Mehedi Hasan", "Retail Credit", "Credit Analyst",
      "Head Office", "Risk Reviewer", "mehedi.h@ebl.com", "+880 1700 123456",
      {
        type: "icon-text",
        items: {
          "active": {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Active",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ],
    [
      "EBL-2099", "Shamima Islam", "Corporate Loans", "Senior Loan Officer",
      "Gulshan Branch", "Initiator", "shamima.i@ebl.com", "+880 1812 567890",
      {
        type: "icon-text",
        items: {
          "onLeave": {
            iconName: "mdi:circle",
            iconColor: "text-yellow-500",
            iconText: "On Leave",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ]
  ]
};

// product Details
export const TableProduct = {
  head: [
    "Product Code", "Product Name", "Product Type", "Segment",
    "Interest Rate", "Tenure", "Max Limit", "Currency", "Network Code",
    "Description", "Created By", "Status", "Actions"
  ],
  body: [
    [
      "PRD-1001", "EBL Personal Loan", "Retail", "Retail",
      "11.5%", "60 months", "10,00,000 BDT", "BDT", "NTW-001",
      "Unsecured personal loan for salaried employees.", "Mehedi Hasan",
      {
        type: "icon-text",
        items: {
          "active": {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Active",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ],
    [
      "PRD-1002", "EBL Auto Loan", "Retail", "Retail",
      "9.75%", "48 months", "20,00,000 BDT", "BDT", "NTW-002",
      "Loan for new and reconditioned vehicles.", "Shamima Islam",
      {
        type: "icon-text",
        items: {
          "inactive": {
            iconName: "mdi:circle",
            iconColor: "text-gray-400",
            iconText: "Inactive",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ],
    [
      "PRD-1003", "EBL SME Boost", "SME", "SME",
      "12.25%", "36 months", "15,00,000 BDT", "BDT", "NTW-003",
      "Short-term loan designed for small businesses.", "Tanvir Alam",
      {
        type: "icon-text",
        items: {
          "active": {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Active",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ],
    [
      "PRD-1004", "EBL Home Loan", "Loan", "Retail",
      "8.9%", "240 months", "1,00,00,000 BDT", "BDT", "NTW-004",
      "Long-term financing for home buyers.", "Nusrat Jahan",
      {
        type: "icon-text",
        items: {
          "active": {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Active",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ],
    [
      "PRD-1005", "EBL Platinum Card", "Card", "Retail",
      "2.5% per month", "N/A", "5,00,000 BDT", "BDT", "NTW-005",
      "Premium credit card with reward points.", "Farhan Ahmed",
      {
        type: "icon-text",
        items: {
          "onHold": {
            iconName: "mdi:circle",
            iconColor: "text-yellow-500",
            iconText: "On Hold",
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        }
      }
    ]
  ]
};

// Enterprise Details
export const TableEnterprise = {
  head: [
    "Enterprise ID",
    "Enterprise Name",
    "Type",
    "Industry",
    "Location",
    "Established Year",
    "Revenue (Annual)",
    "Employee Count",
    "Email",
    "Phone",
    "Status",
    "Actions"
  ],
  body: [
    [
      "ENT-1001",
      "Global Textiles Ltd.",
      "Private Limited",
      "Textile",
      "Dhaka EPZ",
      2005,
      "৳12.5 Cr",
      320,
      "info@globaltextiles.com",
      "+880 1755 332211",
      {
        type: "icon-text",
        items: {
          active: {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Active"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "ENT-1002",
      "Digital Fintech Solutions",
      "Private Limited",
      "IT & Fintech",
      "Gulshan-1, Dhaka",
      2018,
      "৳3.2 Cr",
      45,
      "contact@dfs.com",
      "+880 1819 667788",
      {
        type: "icon-text",
        items: {
          inactive: {
            iconName: "mdi:circle",
            iconColor: "text-red-500",
            iconText: "Inactive"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "ENT-1003",
      "Apex Agro Industries",
      "Partnership",
      "Agriculture",
      "Jessore",
      2012,
      "৳5.8 Cr",
      89,
      "apexagro@enterprise.com",
      "+880 1720 889944",
      {
        type: "icon-text",
        items: {
          pending: {
            iconName: "mdi:circle",
            iconColor: "text-yellow-500",
            iconText: "Pending"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ]
  ]
};

// Entrepreneur Details
export const TableEntrepreneur = {
  head: [
    "Entrepreneur ID",
    "Name",
    "Gender",
    "Date of Birth",
    "Education",
    "Business Name",
    "Industry",
    "Experience (Years)",
    "NID Number",
    "Phone",
    "Email",
    "Status",
    "Actions"
  ],
  body: [
    [
      "ENTR-0001",
      "Fahim Rahman",
      "Male",
      "1986-03-14",
      "MBA (Finance)",
      "GreenTech Solutions",
      "IT Services",
      10,
      "1975862345123",
      "+880 1711 234567",
      "fahim.rahman@gmail.com",
      {
        type: "icon-text",
        items: {
          verified: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Verified"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "ENTR-0002",
      "Sharmin Jahan",
      "Female",
      "1990-09-22",
      "BSc (Textile Engineering)",
      "WeaveArt Ltd.",
      "Textile",
      7,
      "1990456789123",
      "+880 1722 556677",
      "sharmin.j@weaveart.com",
      {
        type: "icon-text",
        items: {
          pending: {
            iconName: "mdi:clock-outline",
            iconColor: "text-yellow-500",
            iconText: "Pending"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "ENTR-0003",
      "Md. Hasan Ali",
      "Male",
      "1982-12-05",
      "Diploma (Agro Tech)",
      "FreshAgro",
      "Agriculture",
      15,
      "1982123456789",
      "+880 1700 778899",
      "hasan.ali@freshagro.com",
      {
        type: "icon-text",
        items: {
          inactive: {
            iconName: "mdi:close-circle",
            iconColor: "text-red-500",
            iconText: "Inactive"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ]
  ]
};

export const TableLoanApplication = {
  head: [
    "Application ID",
    "User Name",
    "Loan Type",
    "Branch",
    "Date",
    "Status",
    "Actions"
  ],
  body: [
    [
      "#APP2596",
      "Asha Khatun",
      "Card Loan",
      "Mirpur 10",
      "Just now",
      {
        type: "icon-text",
        items: {
          complete: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Complete"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP3582",
      "Bikash Bosh",
      "SME Loan",
      "Wari",
      "Just now",
      {
        type: "icon-text",
        items: {
          in_progress: {
            iconName: "mdi:progress-clock",
            iconColor: "text-yellow-500",
            iconText: "In Progress"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP4256",
      "Cynthiya PL",
      "Retail Loan",
      "Bhaluka",
      "Just now",
      {
        type: "icon-text",
        items: {
          pending: {
            iconName: "mdi:clock-outline",
            iconColor: "text-gray-500",
            iconText: "Pending"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP5968",
      "Chandan Roy",
      "Card Loan",
      "Kalibari Road",
      "Just now",
      {
        type: "icon-text",
        items: {
          in_progress: {
            iconName: "mdi:progress-clock",
            iconColor: "text-yellow-500",
            iconText: "In Progress"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP5969",
      "Md Tareq",
      "SME Loan",
      "Moharaja Road",
      "Just now",
      {
        type: "icon-text",
        items: {
          complete: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Complete"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP5970",
      "M. Pial",
      "Retail Loan",
      "Moharaja Road",
      "Just now",
      {
        type: "icon-text",
        items: {
          rejected: {
            iconName: "mdi:close-circle",
            iconColor: "text-red-500",
            iconText: "Rejected"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP5971",
      "Z Piash",
      "Card Loan",
      "Moharaja Road",
      "Just now",
      {
        type: "icon-text",
        items: {
          complete: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Complete"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],
    [
      "#APP5972",
      "Behan Khan",
      "Student Loan",
      "Natun Bazar",
      "Just now",
      {
        type: "icon-text",
        items: {
          complete: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Complete"
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Edit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ]
  ]
};


//document queue new form
export const TableNewDocumentVerification = {
  head: [
    "Document Name", "Status", "Action Type", " Action"
  ],
  body: [

    [
      "NID Copy",
      {
        type: "icon-text",
        items: {
          active: {
            iconName: "mdi:circle",
            iconColor: "text-green-500",
            iconText: "Verified",
          }
        }
      },
      {
        type: "select",
        items: {
          action: {
            label: "Select Action",
            labelHidden: true,
            selected: "0",
            selectClass: "select-primary",
            disabled: false,
            options: [
              { label: "Select Action", value: "0" },
              { label: "Request More", value: "1" },
              { label: "Flag to RM", value: "2" }
            ]
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Submit: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],

    [
      "Trade License",
      {
        type: "icon-text",
        items: {
          pending: {
            iconName: "mdi:clock-outline",
            iconColor: "text-yellow-500",
            iconText: "Pending"
          }
        }
      },
      {
        type: "select",
        items: {
          action: {
            label: "Select Action",
            labelHidden: true,
            selected: "0",
            selectClass: "select-warning",
            disabled: false,
            options: [
              { label: "Select Action", value: "0" },
              { label: "Request Resubmit", value: "1" },
              { label: "Escalate", value: "2" }
            ]
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Notify: { link: "#", style: "btn btn-xs btn-outline" }
        }
      }
    ],

    [
      "TIN Certificate",
      {
        type: "icon-text",
        items: {
          rejected: {
            iconName: "mdi:close-circle-outline",
            iconColor: "text-red-500",
            iconText: "Rejected"
          }
        }
      },
      {
        type: "select",
        items: {
          action: {
            label: "Next Step",
            labelHidden: true,
            selected: "0",
            selectClass: "select-error",
            disabled: false,
            options: [
              { label: "Select Option", value: "0" },
              { label: "Request Update", value: "1" },
              { label: "Forward to Supervisor", value: "2" }
            ]
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Retry: { link: "#", style: "btn btn-xs btn-outline btn-error" }
        }
      }
    ],

    [
      "Utility Bill (Recent)",
      {
        type: "icon-text",
        items: {
          expiring: {
            iconName: "mdi:alert-circle-outline",
            iconColor: "text-orange-500",
            iconText: "Expiring"
          }
        }
      },
      {
        type: "select",
        items: {
          action: {
            label: "Next Step",
            labelHidden: true,
            selected: "0",
            selectClass: "select-warning",
            disabled: false,
            options: [
              { label: "Select Option", value: "0" },
              { label: "Request Update", value: "1" },
              { label: "Ignore", value: "2" }
            ]
          }
        }
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Remind: { link: "#", style: "btn btn-xs btn-outline btn-warning" }
        }
      }
    ]



  ]
}


// validation summery
export const TableNewDocumentVerificationSummery ={
  head: [
    "CIBIL Score", "DBR", "Risk",
  ],
  body: [

    [
      "NID Copy", "48%", "Medium",      
    ],
  ]
}
