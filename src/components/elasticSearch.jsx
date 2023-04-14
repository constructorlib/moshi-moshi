import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import styles from "./elasticSearch.styled";

const animatedComponents = makeAnimated();

const ElasticSearch = ({ defaultValue, ...props }) => {
  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={defaultValue}
      styles={styles}
      isMulti
      menuIsOpen
      {...props}
    />
  );
};

export default ElasticSearch;
