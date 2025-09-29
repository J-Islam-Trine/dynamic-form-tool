export const relationsHomeTableData = 
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
              iconName: "mdi:check-circle",
              iconColor: "text-green-500",
              iconText: "Complete"
            }
          }
        },
        {
          type: "button",
          items: {
            Validate: { link: "/relations/documentQueue/new", style: "btn btn-xs btn-info" },
          }
        }
      ]
    ]
  }
