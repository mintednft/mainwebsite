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
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
  greyText: {
    color: theme.palette.grey[400],
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    emailAgain: "",
    username: "",
    name: "",
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
          Signup for Minted
        </Typography>
        {/* <Typography variant="h6" className={classes.text}>
          Please login to continue
        </Typography> */}
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
            type="email"
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
            id="emailAgain"
            label="Confirm Email Address"
            name="emailAgain"
            size="small"
            type="email"
            onChange={handleChange("emailAgain")}
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
            id="username"
            label="Username"
            name="username"
            size="small"
            onChange={handleChange("username")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            size="small"
            onChange={handleChange("name")}
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
          <Box pl={2} pr={2}>
            <Typography variant="caption" className={classes.greyText}>
              Password must be at least 8 characters and contain 1 special
              character or number.
            </Typography>
            <FormControlLabel
              control={<Checkbox value="accept" />}
              label={
                <Typography variant="caption" className={classes.greyText}>
                  By signing up, you agree to the{" "}
                  <Link className={classes.link}>Terms and Conditions</Link> and
                  <Link className={classes.link}> Privacy Policy</Link>.
                </Typography>
              }
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={cx(classes.button, classes.submit)}
          >
            Sign Up
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
            Sign up with Google
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={cx(classes.button, classes.twitter)}
            startIcon={<Twitter />}
          >
            Sign up with Twitter
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/signin" className={classes.link}>
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
