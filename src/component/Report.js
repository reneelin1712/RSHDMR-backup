import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//JS CSS for this component
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  report: {
    height: "1400px"
  }
}));

//Generate the report using data from server
export default function Report({ report }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //data is passed down from Upload component
  const { data1, data2, datastats, url } = report;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="report" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Report"
      />

      {/*the first chunk of the data */}
      <CardContent>
        <List className={classes.report}>
          <Grid container spacing={1} style={{ width: "55%" }}>
            {data1.map(([item, value],index) => {
              return (
                <Grid item xs={6} key={item}>
                  <ListItem >
                    <ListItemText>
                      {item} is {value}
                    </ListItemText>
                  </ListItem>
                </Grid>
              );
            })}
          </Grid>

          {/*the second chunk of the data */}
          <Grid container spacing={1}>
            {data2.map(([item, value]) => {
              return (
                <Grid item xs={6} key={item}>
                  <ListItem >
                    <ListItemText>
                      {item} is {value}
                    </ListItemText>
                  </ListItem>
                </Grid>
              );
            })}
          </Grid>

          {/*the third chunk of the data and image from server */}
          <Grid container spacing={1}>
            <img src={url} alt="" />
            {datastats.map(([item, value]) => {
              return (
                <Grid item xs={6} key={item}>
                  <ListItem >
                    <ListItemText>
                      {item} is {value}
                    </ListItemText>
                  </ListItem>
                </Grid>
              );
            })}
          </Grid>
        </List>

        <Button size="medium" variant="contained" color="primary">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="http://ec2-52-193-188-87.ap-northeast-1.compute.amazonaws.com/download-pdf"
            target="_blank"
          >
            DOWNLOAD PDF
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
