import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import styles from "./elasticSearch";

const animatedComponents = makeAnimated();

const ElasticSearch = ({ options, defaultValue, ...props }) => {
  const modifiedOptions = options.map((e) => ({ ...e, label: e.name, value: e.name }));
  const modifiedDefaultValue = defaultValue?.map((e) => ({ ...e, label: e.name, value: e.name }));

  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={modifiedDefaultValue}
      styles={styles}
      isMulti
      // menuIsOpen
      options={modifiedOptions}
      {...props}
    />
  );
};

export default ElasticSearch;
