import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import cx from "clsx";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(1, 0),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0.5)}px)`,
    transition: theme.transitions.create("width"),
    fontSize: 14,
    width: "100%",
    [theme.breakpoints.up("md")]: {},
    "&::-webkit-input-placeholder": {
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(0.25),
      textAlign: "center",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  avatarSmall: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatarVerySmall: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
  toolbar: {
    height: theme.spacing(12),
  },

  paper: {
    padding: theme.spacing(0.5, 4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:
      "2.71693px 2.71693px 2.71693px 6.79234px rgba(0, 0, 0, 0.015), -2.71693px 2.71693px 0px 6.79234px rgba(0, 0, 0, 0.015)",
    borderRadius: theme.spacing(1.5),
  },

  link: {
    fontSize: 14,
    margin: theme.spacing(1),
    "&.active": {
      background: theme.palette.primary.main,
      color: theme.palette.background.default,
      borderRadius: theme.spacing(1.25),
    },
  },
  button: {
    fontSize: 18,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <Button
            className={classes.link}
            size="small"
            component={NavLink}
            to={"/marketplace"}
          >
            Marketplace
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.link}
            size="small"
            component={NavLink}
            to={"/drops"}
          >
            ⚡️Drops⚡
          </Button>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon size="small" className={classes.avatarVerySmall} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.link}
            size="small"
            component={NavLink}
            to={"/influencers"}
          >
            Influencers
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.link}
            size="small"
            component={NavLink}
            to={"/artists"}
          >
            Artists
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

const StyledMenu = withStyles({
  "& .MuiList-padding": {
    padding: 0, //TODO: apply this
  },
})((props) => (
  <Menu
    elevation={1}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      fontSize: 14,
    },
  },
}))(MenuItem);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      getContentAnchorEl={null}
    >
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemText
          primary="Signed in as: "
          secondary="salmaan.a.qadir@gmail.com"
        />
      </StyledMenuItem>
      <Divider />
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemText primary="My account" />
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemText primary="Auction Dashboard" />
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemText primary="Settings" />
      </StyledMenuItem>
      <Divider />
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemText primary="Logout" />
      </StyledMenuItem>
    </StyledMenu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} />
          <div className={classes.grow} />
          <Navbar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              className={classes.button}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              size="large"
              startIcon={
                <Avatar alt="Sal Qadir" className={classes.avatarSmall}>
                  S
                </Avatar>
              }
            >
              Sal Qadir
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
