import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../logo.svg";
import Badge from "@mui/material/Badge";
import { Grid, Select, MenuItem } from '@mui/material';

import { bindActionCreators } from "redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { userActionCreator } from "../../reduxutils/actions.js";
import { CircleFlag } from "react-circle-flags";
function Header(props) {
  const dispatch = useDispatch();
  const setCountry = bindActionCreators(userActionCreator.setCountry, dispatch);
  const country = useSelector((state) => state.userInfo.country);
  const setName = bindActionCreators(userActionCreator.setName, dispatch);
  const disableAnno = bindActionCreators(
    userActionCreator.disableAnno,
    dispatch
  );
  const disablePredict = bindActionCreators(
    userActionCreator.disablePredict,
    dispatch
  );
  const name = useSelector((state) => state.userInfo.name);
  const handleNameChange = (e) => {
    let val = e.target.value;
    setName(val);
    if (val == "Government Representive") {
      disablePredict(false);
      disableAnno(true);
    } else {
      disablePredict(true);
      disableAnno(false);
    }
  };
  return (
    <>
      <AppBar
        style={{ background: "#5a189a	" }}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }
      }
      >
        <Toolbar color="white">
          <Typography variant="h6" noWrap component="div">
         
          </Typography>
          <Typography fontWeight="Bold" color="white" marginLeft={"10px"} minWidth="240px" fontSize={"18px"}>
            Food Security Analysis
          </Typography>
          &nbsp;
          <Grid container justifyContent="flex-end">
  <Grid item>
    <Select
      label="Country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      sx={{ color: 'white', border: 'none'}} // Setting text color to white

    >
      <MenuItem value="India">India</MenuItem>
      <MenuItem value="USA">USA</MenuItem>
      <MenuItem value="China">China</MenuItem>
    </Select>
    {/* Uncomment this if you're using react-flags-select or a similar package */}
    {/* <CircleFlag countryCode={countryMapping[country]} height={60} /> */}
  </Grid>
  <Grid item>
    <Select
      label="User"
      value={name}
      onChange={handleNameChange}
      sx={{ color: 'white', border:'none' }} // Setting text color to white
    >
      <MenuItem value="Government Representive">Government Representative</MenuItem>
      <MenuItem value="Researcher">Researcher</MenuItem>
    </Select>
  </Grid>
</Grid>




        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
export const countryMapping = {
	USA: "us",
	India: "in",
	China: "cn",
  Ecuador: "ec",
};
