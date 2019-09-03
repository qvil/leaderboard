import Link from "next/link";
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
        <Link key={`MediaCard-${title}`} href={`/leagues/${title}`}>
          <MediaCard
            className={classes.card}
            img={img}
            title={title}
            description={description}
          />
        </Link>
      ))}
    </div>
  );
}
