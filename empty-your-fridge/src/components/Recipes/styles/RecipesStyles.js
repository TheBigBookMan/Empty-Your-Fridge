export const recipeStyles = {
  recipesContainer: {
    width: "800px",
    height: "300px",
    boxShadow: "1px 1px 8px 1px rgba(0, 0, 0, 0.4)",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
  },
  recipesBox: {
    width: "100%",
    height: "80%",
    overflowY: "scroll",
    display: "flex",
    flexWrap: "wrap",
    // boxShadow: "1px 1px 8px 1px rgba(0, 0, 0, 0.4)",
    gap: "15px",
  },
  recipe: {
    margin: "5px",
    boxShadow: "1px 1px 8px 1px rgba(0, 0, 0, 0.4)",
    borderRadius: "10px",
    padding: "3px",
    width: "160px",
    height: "150px",
    listStyleType: "none",
  },
  link: {
    wordWrap: "break-word",
    width: "50px",
  },
  pic: {
    width: "160px",
    height: "100px",
    borderRadius: "5px",
  },
  name: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  linkStar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "155px",
  },
  medium: {
    width: "400px",
  },
};
