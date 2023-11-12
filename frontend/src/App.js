import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "../src/views/Header/header";
import DashBoard from "../src/views/Container/DashBoard/DashBoard";
import { CountryFlag } from "react-flag-kit";
import { countries } from "react-circle-flags";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e7d32", // Dark green
    },
    secondary: {
      main: "#66bb6a", // Light green
      contrastText: "#1b5e20", // Dark green for contrast text
    },
    background: {
      default: "#dcedc8", // Very light green for backgrounds
    },
    text: {
      primary: "#333", // Standard dark text color
      secondary: "#689f38", // A slightly lighter green for secondary text
    },
    error: {
      main: "#c62828", // Red for error messages
    },
    warning: {
      main: "#ff8f00", // Orange for warnings
    },
    info: {
      main: "#1976d2", // Blue for informational messages
    },
    success: {
      main: "#4caf50", // Green for success messages
    },
  },
});



function App() {
  const [country, setCountry] = useState("USA");
  const changeCountry = (ct) => {
    setCountry(ct);
  };
  return (
    <Router>
      <div className="FoodSecurity">
        {/* <Header isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} /> */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header changeCountry={setCountry} />
          <Container fluid>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => <DashBoard country={country} />}
                />
                {/* <Route path='/home' exact component={() => <Home isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} />} /> */}
              </Switch>
            </ThemeProvider>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
