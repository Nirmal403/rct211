const handleIncrement = () => {
  return { type: "INCREMENT", payload: 1 };
};
const handleDecrement = () => {
  return { type: "DECREMENT", payload: 1 };
};

export { handleIncrement, handleDecrement };
