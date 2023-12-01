function OutlineButton({ label = "default", num, ...rest }) {
  console.log({ ...rest });
  return (
    <button className="btn" {...rest}>
      {label}
    </button>
  );
}

export default OutlineButton;
/***
 * practise
 * values are
 * border color-> primary,secondary
 * disabled -> should be disabled
 * type -> should be passed
 *
 */
