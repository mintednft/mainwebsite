import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import cx from "clsx";
import Twitter from "@material-ui/icons/Twitter";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2, 0),
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1.5, 0),
    color: theme.palette.background.paper,
    minHeight: theme.spacing(5),
  },
  submit: {
    background: "#04C904",
    "&:hover": {
      background: "#04C904",
    },
  },
  google: {
    background: "#DB4437",
    "&:hover": {
      background: "#DB4437",
    },
  },
  twitter: {
    background: "#08A0E9",
    "&:hover": {
      background: "#08A0E9",
    },
  },
  icon: {
    color: theme.palette.grey[500],
  },
  text: {
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  link: {
    color: "#3250FE",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <img
          src={process.env.PUBLIC_URL + "/assets/small_logo.png"}
          className={classes.avatar}
          alt="Minted Logo"
        />
        <Typography variant="h4" className={classes.text}>
          Welcome to Minted
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Please login to continue
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            size="small"
            onChange={handleChange("email")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonOutline className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            size="small"
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className={classes.icon}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={cx(classes.button, classes.submit)}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={cx(classes.button, classes.google)}
            startIcon={
              <img
                src={process.env.PUBLIC_URL + "/assets/google.png"}
                alt="Google Logo"
              />
            }
          >
            Google
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={cx(classes.button, classes.twitter)}
            startIcon={<Twitter />}
          >
            Twitter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
