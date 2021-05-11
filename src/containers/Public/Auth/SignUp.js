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
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";

import { isValidEmail } from "../../../utils";

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
  greyText: {
    color: theme.palette.grey[400],
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    emailAgain: "",
    handle: "",
    name: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const [action, setAction] = React.useState();

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

  const dispatch = useDispatch();

  const termsRef = React.useRef();

  const register = React.useCallback(() => {
    console.error(values);
    if (!isValidEmail(values.email)) {
      setStatus("invalidEmail");
      return;
    }
    if (values.email !== values.emailAgain) {
      setStatus("invalidEmailAgain");
      return;
    }
    if (values.name.length < 3) {
      setStatus("invalidName");
      return;
    }
    if (values.handle.length < 6) {
      setStatus("invalidHandle");
      return;
    }
    if (values.password.length < 8) {
      setStatus("invalidPassword");
      return;
    }
    if (!termsRef.current.checked) {
      action.focusVisible();
      setStatus("termsNotAgreed");
      return;
    }
    setStatus(null);
    setIsLoading(true);
    const { emailAgain, ...payload } = values;
    //dispatch(registerUserAction(payload));
  }, [values, termsRef, action, setStatus, setIsLoading, dispatch]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      register();
    },
    [register]
  );

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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
            id="emailAgain"
            label="Confirm Email Address"
            name="emailAgain"
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
              if (status === "invalidEmailAgain") {
                return "Email didn't match";
              }
              return null;
            })()}
            onChange={(e) => {
              if (status === "invalidEmailAgain") {
                setStatus(null);
              }
              handleChange("emailAgain")(e);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="handle"
            label="Username"
            name="handle"
            size="small"
            FormHelperTextProps={{ error: true }}
            helperText={(() => {
              if (status === "invalidHandle") {
                return "Should have at least 6 characters.";
              }
              return null;
            })()}
            onChange={(e) => {
              if (status === "invalidHandle") {
                setStatus(null);
              }
              handleChange("handle")(e);
            }}
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
            FormHelperTextProps={{ error: true }}
            helperText={(() => {
              if (status === "invalidName") {
                return "Invalid Name";
              }
              return null;
            })()}
            onChange={(e) => {
              if (status === "invalidName") {
                setStatus(null);
              }
              handleChange("name")(e);
            }}
            error={status === "invalidName"}
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
          <Box pl={2} pr={2}>
            <Typography variant="caption" className={classes.greyText}>
              Password must be at least 8 characters and contain 1 special
              character or number.
            </Typography>
            <FormControl required error={status === "termsNotAgreed"}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="accept"
                      onChange={(e) => {
                        if (status === "termsNotAgreed") {
                          setStatus(null);
                        }
                      }}
                      inputRef={termsRef}
                      action={setAction}
                    />
                  }
                  label={
                    <Typography variant="caption" className={classes.greyText}>
                      By signing up, you agree to the{" "}
                      <Link className={classes.link}>Terms and Conditions</Link>{" "}
                      and
                      <Link className={classes.link}> Privacy Policy</Link>.
                    </Typography>
                  }
                />
              </FormGroup>
            </FormControl>
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
