const Card = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 3px 1px -2px rgba(0, 0, 0, 0.11);
            background-color: white;
            border-radius: 4px;
            padding: 16px;
            transition: 0.5s;
          }
          div:hover {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14),
              0px 3px 14px 2px rgba(0, 0, 0, 0.12);
          }
        `}
      </style>
    </div>
  );
};

export default Card;
