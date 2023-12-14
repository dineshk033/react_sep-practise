/**
 *
 * @returns CButton - component why?
 * becoz its returning JSX element
 * Fragment - <></>
 */
export function CButton({ className, label, handleClick, disabled }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
