import ReactGA from "react-ga";

const event = (category, action) => {
  ReactGA.event({
    category: category,
    action: action
  });
};

export default event;
