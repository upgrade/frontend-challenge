import React from 'react';
import { useField } from 'formik';

export default function CustomSelect({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-group">
      <select
        {...field}
        {...props}
        aria-invalid={Boolean(meta.touched && meta.error)}
        aria-describedby={`${props.name}-feedback ${props.name}-help`}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
