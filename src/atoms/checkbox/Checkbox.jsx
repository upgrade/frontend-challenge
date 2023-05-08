import React from 'react';
import { useField } from 'formik';

export default function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-group">
      <div className="checkbox">
        <input
          {...field}
          {...props}
          aria-invalid={Boolean(meta.touched && meta.error)}
          aria-describedby={`${props.name}-feedback ${props.name}-help`}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I agree to <a href="">terms and conditions</a></span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
