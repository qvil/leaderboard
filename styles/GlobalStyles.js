const GlobalStyles = () => {
  return (
    <div>
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default GlobalStyles;
