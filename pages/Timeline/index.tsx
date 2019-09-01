import { createStyles, makeStyles } from "@material-ui/core/styles";
import MediaCard from "../../components/MediaCard";
import tileData from "./tileData";

const useStyles = makeStyles(
  createStyles({
    container: {
      display: "flex",
      flexFlow: "column wrap",
      alignItems: "center",
      padding: 16
    },
    card: {
      marginTop: 8,
      width: 500
    }
  })
);

export default function Timeline() {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      {tileData.map(({ title, description, img }) => (
        <MediaCard
          key={`MediaCard-${title}`}
          className={classes.card}
          img={img}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
