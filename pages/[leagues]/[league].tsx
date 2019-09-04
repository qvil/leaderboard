import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

import Result from "./Result";

interface ILeagueProps {}

const useStyles = makeStyles({
  root: {
    padding: 16
  }
});

const League: React.FunctionComponent<ILeagueProps> = props => {
  const router = useRouter();
  const { root } = useStyles({});

  const { league } = router.query;

  return (
    <div className={root}>
      league: {league}
      <Result />
    </div>
  );
};

export default League;
