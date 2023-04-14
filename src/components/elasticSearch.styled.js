export const clearIndicator = (baseStyles, state) => ({ ...baseStyles, display: "none" });
export const container = (baseStyles, state) => ({
  ...baseStyles,
  width: "100%",
  fontSize: "14px",
  lineHeight: "24px",
  fontFamily: "Noto Sans",
  outline: "1px solid transparent",
});
export const control = (baseStyles, state) => ({
  ...baseStyles,

  padding: "3px 5px",
  border: "none",
  borderRadius: "4px",
  boxShadow: "none",
});
export const dropdownIndicator = (baseStyles, state) => ({ ...baseStyles, display: "none" });
export const group = (baseStyles, state) => ({ ...baseStyles });
export const groupHeading = (baseStyles, state) => ({ ...baseStyles });
export const indicatorsContainer = (baseStyles, state) => ({ ...baseStyles, display: "none" });
export const indicatorSeparator = (baseStyles, state) => ({ ...baseStyles, display: "none" });
export const input = (baseStyles, state) => ({ ...baseStyles, margin: "0" });
export const loadingIndicator = (baseStyles, state) => ({ ...baseStyles });
export const loadingMessage = (baseStyles, state) => ({ ...baseStyles });
export const menu = (baseStyles, state) => ({
  ...baseStyles,
  display: "none",
});
export const menuList = (baseStyles, state) => ({
  ...baseStyles,
  height: "100%",
  padding: "0 8px",
});
export const menuPortal = (baseStyles, state) => ({ ...baseStyles });
export const multiValue = (baseStyles, state) => ({
  ...baseStyles,
  borderRadius: "4px",
  backgroundColor: "rgba(var(--brand-color))",
  color: "rgba(var(--text-color))",

  height: "3.2rem",
  alignItems: "center",
  padding: "4px",
});

export const multiValueLabel = (baseStyles, state) => ({ ...baseStyles });
export const multiValueRemove = (baseStyles, state) => ({
  ...baseStyles,
  height: "100%",
  borderRadius: "50%",
});
export const noOptionsMessage = (baseStyles, state) => ({ ...baseStyles, display: "none" });
export const option = (baseStyles, state) => ({
  ...baseStyles,

  display: "none",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "1px solid rgba(var())",
  borderRadius: "4px",
  padding: "5px",
  margin: "8px 0",
});
export const placeholder = (baseStyles, state) => ({
  ...baseStyles,
  fontSize: "16px",
  lineHeight: "24px",
  fontFamily: "Noto Sans, sans-serif",
  margin: "0",
});
export const singleValue = (baseStyles, state) => ({ ...baseStyles });
export const valueContainer = (baseStyles, state) => ({
  ...baseStyles,
  padding: "0",
});

export default {
  clearIndicator,
  container,
  control,
  dropdownIndicator,
  group,
  groupHeading,
  indicatorsContainer,
  indicatorSeparator,
  input,
  loadingIndicator,
  loadingMessage,
  menu,
  menuList,
  menuPortal,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  noOptionsMessage,
  option,
  placeholder,
  singleValue,
  valueContainer,
};
