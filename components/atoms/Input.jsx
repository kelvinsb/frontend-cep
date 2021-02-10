import PropTypes from "prop-types";

import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../../styles/input";
import ReactInputMask from "react-input-mask";

export default function Input({ name, label, placeholder, mask, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName} className="text-lg">
        {label}
      </label>
      <br />
      <ReactInputMask
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
        className="rounded-lg shadow-md border border-solid border-black py-1.5 px-3 max-w-full"
        mask={mask}
        {...rest}
      />
      {error && { error }}
      <style jsx>{styles}</style>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  placeholder: "",
  mask: "",
};
