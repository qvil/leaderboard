import { useRouter } from "next/router";

interface ILeagueProps {}

const League: React.FunctionComponent<ILeagueProps> = props => {
  const router = useRouter();
  const { league } = router.query;
  console.log("TCL: league", league);

  return <div>league: {league}</div>;
};

export default League;
