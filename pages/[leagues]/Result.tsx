import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

interface IData {
  name: string;
  phone: number;
}

interface IProps {
  title: string;
  data: IData;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    avatar: {
      margin: 10
    }
  })
);

const Result: React.FunctionComponent<IProps> = ({
  title,
  data: { name, phone }
}) => {
  const { root, heading, avatar } = useStyles({});

  return (
    <ExpansionPanel className={root} expanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={heading}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="//opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=w_46&v=1"
            className={avatar}
          />
          <Typography>VS</Typography>
          <Avatar
            alt="Remy Sharp"
            src="//opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=w_46&v=1"
            className={avatar}
          />
        </Grid>
        {/* <Typography>{`${name} ${phone}`}</Typography> */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Result;
