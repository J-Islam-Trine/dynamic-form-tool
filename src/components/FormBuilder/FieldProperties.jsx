import React, { useState } from "react";
import FieldSetting from "./FieldSetting";

function FormTabs() {
  const [activeTab, setActiveTab] = useState("fieldSettings");

  return (
    <div className="w-full">
      {/* DaisyUI tabs */}
      <div className="tabs tabs-boxed mb-4">
        <button
          className={`tab ${activeTab === "fieldSettings" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("fieldSettings")}
        >
          Field Settings
        </button>
        <button
          className={`tab ${activeTab === "formSettings" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("formSettings")}
        >
          Form Settings
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === "fieldSettings" && (
          <div className="p-4 border rounded-lg bg-base-100">
            <FieldSetting />
          </div>
        )}

        {activeTab === "formSettings" && (
          <div className="p-4 border rounded-lg bg-base-100">
            Form Settings
          </div>
        )}
      </div>
    </div>
  );
}

export default FormTabs;