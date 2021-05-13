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
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Fade from "react-reveal/Fade";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isValidEmail } from "../../../utils";
import { loginUserAction, resetAuthAction } from "../../../store/actions/auth";
import { AUTH_LOGIN_SUCCESS } from "../../../store/actionTypes";
import { MOCK_USER } from "../../../mocks/index";
import useListenStatus from "../../../hooks/useListenStatus";

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
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.light,
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
    color: theme.palette.info.main,
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  const handleClickShowPassword = React.useCallback(() => {
    setPasswordVisibility(!isPasswordVisible);
  }, [isPasswordVisible, setPasswordVisibility]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const login = React.useCallback(() => {
    console.error(values);
    if (!isValidEmail(values.email)) {
      setStatus("invalidEmail");
      return;
    }
    if (values.password.length < 8) {
      setStatus("invalidPassword");
      return;
    }
    setStatus(null);
    setIsLoading(true);
    //TODO: Bypassing login for now
    setTimeout(() => {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: { token: "TOKEN", user: MOCK_USER },
      });
      history.push("/marketplace");
    }, 1500);
    //const { id, ...payload } = values;
    //dispatch(loginUserAction({ ...payload, id: values.email }));
  }, [values, setStatus, setIsLoading, dispatch, history]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      login();
    },
    [login]
  );

  const onSuccess = () => {
    setStatus(null);
    setIsLoading(false);
    history.push("/marketplace");
  };

  const onFailure = () => {
    setStatus("invalidLogin");
    setIsLoading(false);
  };

  const authState = useSelector((state) => state.auth);

  useListenStatus(
    authState.auth_status,
    onSuccess,
    onFailure,
    resetAuthAction({ auth_status: null })
  );

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Fade up cascade>
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
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutline className={classes.icon} />
                  </InputAdornment>
                ),
              }}
              FormHelperTextProps={{ error: true }}
              helperText={(() => {
                if (status === "invalidEmail") {
                  return "Invalid email";
                }
                return null;
              })()}
              onChange={(e) => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
                handleChange("email")(e);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              size="small"
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
                      {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              FormHelperTextProps={{ error: true }}
              helperText={(() => {
                if (status === "invalidPassword") {
                  return "Should have at least 8 characters.";
                }
                return null;
              })()}
              onChange={(e) => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
                handleChange("password")(e);
              }}
              error={status === "invalidPassword"}
            />
            {status === "invalidLogin" && (
              <Alert severity="error">Login failed!</Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.submit)}
              disabled={isLoading}
              endIcon={
                isLoading && <CircularProgress size={18} color="inherit" />
              }
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
              Sign in with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.twitter)}
              startIcon={<Twitter />}
            >
              Sign in with Twitter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2" className={classes.link}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" className={classes.link}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Fade>
      </div>
    </Container>
  );
}
