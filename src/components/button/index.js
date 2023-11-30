/**
 *
 * @returns CButton - component why?
 * becoz its returning JSX element
 * Fragment - <></>
 */
export function CButton({ label = "Submit", color }) {
  console.log(color);
  return (
    <>
      <span
        style={{
          padding: "10px 15px",
          backgroundColor: color,
          borderRadius: "5px",
          margin: "1px",
        }}
      >
        {label}
      </span>
    </>
  );
}

// CButton.defaultProps = {
//   label: "Submit",
// };
