import { createUseStyles } from "react-jss";
import config from "../theme/config";

const useStyles = createUseStyles({
  trigger: {
    fontSize: "18px",
    float: "left",
    cursor: "pointer",
    "&:hover": { color: config["@primary-color"] },
  },
  logo: {
    height: "32px",
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px",
  },
  avatar: {
    float: "right",
    cursor: "pointer",
    transition: "color 0.3s",
    verticalAlign: "middle",
  },
  lightText: { color: "#FFF !important" },
  sidebar: {
    minHeight: "100vh",
    overflow: "auto",
    position: "fixed",
    left: 0,
  },
  mainContent: { padding: 20, overflow: "initial" },
  innerContent: {
    background: "#fff",
    padding: 10,
    marginTop: 10,
    minHeight: "70vh",
  },
  loading: { fontSize: 24 },
  centerText: { textAlign: "center" },
});

export default useStyles;
