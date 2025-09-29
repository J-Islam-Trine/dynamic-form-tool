//create new data for sales

//new mainlayout sidebar data
export const buSidebarData = [
  {
    sectionName: "Dashboard",
    children: [
      {
        link: "/BU/home",
        label: "Home"
      },
      {
        link: "/BU/profile",
        label: "Profile"
      },
    ]
  },
  {
    sectionName: " Document Verification",
    children: [
      {
        link: "/BU/documentQueue/new",
        label: "New"
      },
      {
        link: "/BU/documentQueue/deficient",
        label: "Deficient"
      },
      {
        link: "/BU/documentQueue/approved",
        label: "Approved"
      },
    ]
  },
  {
    sectionName: "Validation Tools",
    children: [
      { link: "/BU/tools/bulkVerify", label: "Bulk Verify" },
      { link: "/BU/tools/cibilChecker", label: "CIBIL Checker" },
      { link: "/BU/tools/autoClassifier", label: "Auto-Classifier" },
    ]
  },
  {
    sectionName: "Work board",
    children: [
      { link: "/BU/workBoard/bulkVerify", label: "Active Cases" },
      { link: "/BU/workBoard/cibilChecker", label: "Document Types" },
    ]
  },

];