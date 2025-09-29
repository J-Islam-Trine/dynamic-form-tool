export const cpvHomeTableData = 
 {
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
              iconName: "mdi:progress-star-four-points",
              iconColor: "text-yellow-500",
              iconText: "Ongoing"
            }
          }
        },
        {
          type: "button",
          items: {
            View: { link: "/cpv/1122/view", style: "btn btn-xs btn-info" },
          }
        }
      ]
    ]
  }


export const photoEvidenceTableData = {
  head: ["Document", "Status", "Actions"],
  body: [
    [
      "Front of Business",
      {
        type: "icon-text",
        items: {
          verified: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Verified",
          },
        },
      },
      {
        type: "button",
        items: {
          View: { link: "#", style: "btn btn-xs btn-info" },
          Recheck: { link: "#", style: "btn btn-xs btn-warning" },
        },
      },
    ],
    [
      "Inventory Stock",
      {
        type: "icon-text",
        items: {
          incomplete: {
            iconName: "mdi:close-circle",
            iconColor: "text-red-500",
            iconText: "Incomplete",
          },
        },
      },
      {
        type: "button",
        items: {
          "Request More": { link: "#", style: "btn btn-xs btn-error" },
        },
      },
    ],
  ],
};

export const verificationChecklistTableData = {
  head: ["Check Item", "Status", "Actions"],
  body: [
    [
      "Business Exists",
      {
        type: "icon-text",
        items: {
          checked: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Yes",
          },
        },
      },
      {
        type: "button",
        items: {
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        },
      },
    ],
    [
      "Matches NID Address",
      {
        type: "icon-text",
        items: {
          checked: {
            iconName: "mdi:check-circle",
            iconColor: "text-green-500",
            iconText: "Yes",
          },
        },
      },
      {
        type: "button",
        items: {
          Edit: { link: "#", style: "btn btn-xs btn-outline" },
        },
      },
    ],
    [
      "Employee Count (__/25)",
      {
        type: "icon-text",
        items: {
          missing: {
            iconName: "mdi:alert-circle",
            iconColor: "text-yellow-500",
            iconText: "Incomplete",
          },
        },
      },
      {
        type: "button",
        items: {
          "Update Count": { link: "#", style: "btn btn-xs btn-warning" },
        },
      },
    ],
  ],
};
