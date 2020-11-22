import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,

  makeStyles,
  Theme
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { CustomIcon } from "../@icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    }
  })
);

export const AppToolbar = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {props.hasBackButton ? (
            <IconButton
              onClick={() => {
                props.navigation.goBack();
              }}
              color="inherit"
            >
              <CustomIcon name="arrow_back" style={{ fontSize: 24 }} />
              <Typography
                style={{ marginLeft: 4 }}
                className={classes.title}
                variant="h6"
                noWrap
              >
                {props.title}
              </Typography>
            </IconButton>
          ) : (
              <Typography className={classes.title} variant="h6" noWrap>
                {props.title}
              </Typography>
            )}

        </Toolbar>
      </AppBar>
    </div>
  );
};
