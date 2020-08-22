const customStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#9ca3b9",
      fontWeight: 400,
    };
  },
  control: (provided, state) => ({
    ...provided,
    color: "#222d39",
    // height: 60,
    borderRadius: 25,
    backgroundColor: "white",
    // border: "1px solid #fff",

    paddingLeft: "20px",
    paddingRight: "10px",
  }),
};

export default customStyles;
