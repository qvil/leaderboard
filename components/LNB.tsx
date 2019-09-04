import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface IProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  typography: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function LNB<IProps>({ title }) {
  const { root, typography } = useStyles({});

  return (
    <AppBar className={root} position="sticky" color="default">
      <Toolbar className={typography}>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
