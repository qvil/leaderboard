import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

import Result from "./Result";

interface ILeagueProps {}

const useStyles = makeStyles({
  root: {
    padding: 16,
    display: "flex",
    justifyContent: "center"
  }
});

const dummyData = {
  name: "qvil",
  phone: 123
};

const League: React.FunctionComponent<ILeagueProps> = props => {
  const router = useRouter();
  console.log("TCL: router", router);
  const { root } = useStyles({});

  // const { league } = router.query;

  return (
    <div className={root}>
      <Result title="Match 1" data={dummyData} />
    </div>
  );
};

export default League;
