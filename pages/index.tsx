interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <p>Paragraph</p>
      <style jsx>
        {`
          h1 {
            color: pink;
          }
          p {
            color: skyblue;
          }
        `}
      </style>
    </div>
  );
};

export default App;
