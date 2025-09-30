import React from "react";
import { Icon } from "@iconify/react";

function InputXicon({
  selected = false,
  options = [],
  label = "",
  placeholder = "",
  type = "text",
  typeClass = "input",
  icon = "mdi:email",
  active = false,
}) {
  return (
    <div className="flex flex-col w-full">
      <span>{label}</span>
      <div className="join">
        <span className="btn join-item">
          <Icon className="text-2xl" icon={icon} />
        </span>

        {type === "select" ? (
          <select
            className={`select ${typeClass}`}
            disabled={active}
            defaultValue={options.find((o) => o.selected)?.value || ""}
          >
            {options?.map((option, idx) => (
              <option key={idx} value={option.value} disabled={active}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`join-item ${typeClass} w-full`}
            type={type}
            placeholder={placeholder}
            disabled={active}
          />
        )}
      </div>
    </div>
  );
}

export default InputXicon;
