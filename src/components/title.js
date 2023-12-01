import styles from "./title.module.css";
const Title = ({ label = "Header in title component" }) => {
  return (
    <>
      <h1 className={`${styles.color} ${styles.header} header `}>{label}</h1>
    </>
  );
};

export default Title;

/**
 * external class file if we import directly means. it will introduce style conflict
 * i.e specific component style exposed globally
 * to avoid that scenario we need to import via module like above
 */
