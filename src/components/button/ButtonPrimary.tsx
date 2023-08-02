import React from "react";

type Props = {
  title: string;
  link: string;
  style?: string[] | string;
  backgroundColor?: string;
};

const ButtonPrimary = ({
  title,
  link,
  style,
  backgroundColor,
}: Props): JSX.Element => {
  return (
    <>
      <button
        className={`${style} ${backgroundColor}`}
        onClick={() => {
          location.href = `${link}`;
        }}
      >
        {title}
      </button>
    </>
  );
};

export { ButtonPrimary };
