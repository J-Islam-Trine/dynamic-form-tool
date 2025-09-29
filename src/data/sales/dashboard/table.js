
export const Applications = {
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
            View: { link: "/sales/Applications/view", style: "btn btn-xs btn-info" },
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