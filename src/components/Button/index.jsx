"use client";
const Button = (props) => {
  const { style, click, children } = props;
  return (
    <button className={style} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
