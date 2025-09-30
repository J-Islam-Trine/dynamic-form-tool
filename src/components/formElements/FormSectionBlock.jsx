import React from "react";
import { Icon } from "@iconify/react";
import FormModal from "../Modal/FormModal";
import Table from "../Table/Table";
import IconxText from "../../components/shared/IconxText";
import { FormInputType } from "../../scripts/data";

function FormSectionBlock({
  title = "title",
  data = [],
  SectionCSS = "",
  modalHidden = true,
  buttonHidden = true,
  titleHidden = false,
  titleCSS = "bg-blue-400 text-white",

  icon = "mdi:add",
  buttonClass = "",
  buttonName = "Button",
  buttonLink = "#",

  modalName = "incoming",
  modalId = "my_modal_1",
  titleModal = "title title",
  subtitleModal = "sub",
  modalButtonLink = "#",
  modalButtonName = "Button Modal",
}) {
  const handleModalOpen = () => {
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
  };

  return (
    <div className="mb-5 mx-3">
      {/* Header */}
      <div
        id={title}
        hidden={titleHidden}
        className={`${titleCSS} rounded-sm p-3 flex flex-row justify-between`}
      >
        <span className="text-xl font-semibold">{title}</span>

        {/* Normal Button */}
        <a
          href={buttonLink}
          className={`btn ${buttonClass} join flex flex-row items-center gap-2 rounded-sm`}
          hidden={buttonHidden}
        >
          <Icon className="text-2xl join-item" icon={icon} />
          <span className="join-item">{buttonName}</span>
        </a>

        {/* Modal Trigger Button */}
        <button
          className="join flex flex-row items-center gap-2 btn rounded-sm"
          onClick={handleModalOpen}
          hidden={modalHidden}
        >
          <Icon className="text-2xl join-item" icon={icon} />
          <span className="join-item">{modalName}</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="w-full">
        <fieldset className="fieldset">
          <div className={SectionCSS}>
            {data.map((dem, index) => (
              <div className={`${dem.elementClass} px-5`} key={index}>
                <legend className="fieldset-legend">{dem.label}</legend>

                {/* Select Input */}
                {dem.type === "select" && (
                  <select
                    className={`select ${dem.cls}`}
                    disabled={dem.disabled}
                    defaultValue={dem.options?.find((o) => o.selected)?.value || ""}
                  >
                    {dem.options?.map((option, optIdx) => (
                      <option key={optIdx} value={option.value} disabled={dem.disabled}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {/* Table */}
                {dem.type === "table" && <Table table={dem.tableData} />}

                {/* Modal */}
                {dem.type === "modal" && (
                  <FormModal
                    titleModal={titleModal}
                    subtitleModal={subtitleModal}
                    modalId={modalId}
                    modalData={dem.modalData}
                    modalButtonName={modalButtonName}
                    modalButtonLink={modalButtonLink}
                  />
                )}

                {/* Checkbox */}
                {dem.type === "checkbox" && (
                  <div>
                    <input
                      className={dem.cls}
                      type="checkbox"
                      placeholder={dem.placeholder}
                      checked={dem.checked}
                      disabled={dem.disabled}
                      readOnly
                    />
                  </div>
                )}

                {/* Button / IconxText */}
                {dem.type === "button" && (
                  <div className={dem.cls}>
                    <IconxText
                      iconName={dem.iconName}
                      iconColor={dem.iconColor}
                      iconText={dem.iconText}
                      iconLink={dem.iconLink}
                    />
                  </div>
                )}

                {/* Default Input */}
                {["select", "table", "checkbox", "button", "modal"].includes(dem.type) === false && (
                  <input
                    className={`${FormInputType[dem.type]?.class || ""} ${dem.cls}`}
                    type={FormInputType[dem.type]?.type || dem.type}
                    placeholder={dem.placeholder}
                    value={dem.value}
                    checked={dem.checked}
                    disabled={dem.disabled}
                    readOnly={dem.type === "checkbox"}
                  />
                )}
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default FormSectionBlock;
