import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import { ReactComponent as Logo } from "../../../swa_logo_dark.svg";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Gdp from "../../Macroeconomic/gdpPage.js";
import GdpCurrentUsd from "../../Macroeconomic/GdpCurrentUsd.js";
import GdpCurrentAccoutnBalance from "../../Macroeconomic/GdpCurrentAccoutnBalance.js";
import FDINet from "../../Macroeconomic/FDINet.js";
import FDINetInflows from "../../Macroeconomic/FDINetInflows.js";
import FDINetOutflows from "../../Macroeconomic/FDINetOutflows.js";
import FDINetOutflowsPercentGDP from "../../Macroeconomic/FDINetOutflowsPercentGDP.js";
import Header from "../../Header/header";
import Manufacturing from "../../Agriculture/Manufacturing";
import AnnualGrowth from "../../Agriculture/AnnualGrowth";
import FertilizerProd from "../../Agriculture/FertilizerProd";
import FertilizerCons from "../../Agriculture/FertilizerCons";
import ImportReserves from "../../Debt/ImportReserves";
import GoldReserves from "../../Debt/GoldReserves";
import TotalReserves from "../../Debt/TotalReserves";
import DebtServices from "../../Debt/DebtServices";
import TotalDebt from "../../Debt/TotalDebt";
import CurrentGni from "../../Debt/CurrentGni";
import Bananas from "../../Crops/Bananas";
import Mangoes from "../../Crops/Mangoes";
import Walnuts from "../../Crops/Walnuts";
import Import from "../../Import/Import";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Credit from "../../Agriculture/Credit";
import WalnutsIran from "../../Yield/WalnutsIran";
import MangoesPhilippines from "../../Yield/MangoesPhilippines";
import Sensor from "../../Sensor/Sensor";
import { connect } from "react-redux";
import Agriculture from "../../Agriculture/Agriculture.js";
import { red } from "@material-ui/core/colors";

//import Profile from "../../";
const drawerWidth = 280;

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: "",
      page: "gdp",
      // disablePredict : this.props.disablePredict
    };
    // this.disableAnno = this.disableAnno.bind(this);
    //  const disableAnno =this.props.userInfo.disableAnno;

  }
  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ isExpanded: panel });
  };
  setPage = (page) => {
    this.setState({ page: page, redirectFlag: false });
  };
  handleChatClick = () => {
    window.open("https://cmpe280llmhackathon.streamlit.app", "_blank"); // Opens in a new tab
  };


  componentDidMount = () => { };

  changeGraphType = (type) => {
    this.setState({
      page: type,
    });
  };

  render() {
    /*let redirectVar = null;
    if (this.state.redirectFlag) {
      redirectVar = <Redirect to={{ pathname: "/" }} />;
    }*/
    const iconStyle = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      fontSize: '12px', // Adjust the size as needed
      display: 'flex',
      alignItems: 'center',
      borderRadius: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    };
    return (
      <div>
        <Header></Header>
        <Drawer
  variant="permanent"
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: "#f0f0f0", // Example: Change the background color
      borderRight: "2px solid #ccc", // Example: Add a border to the right side
      boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)", // Example: Apply a subtle box shadow
    },
  }}
>
          <Toolbar />
          <Box sx={{ overflow: "auto"  }}>
            <Accordion
              expanded={this.state.isExpanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0, color: "#9d4edd" }}>
                  Macroeconomic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="GDP"
                      onClick={() => this.changeGraphType("gdp")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      GDP Growth Rage
                      {/* <ListItemText primary="GDP Growth Rage"/> */}
                      </Typography>
                      
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("gdpCurrentUsd")}
                      key="gdpCurrentUsd"
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      GDP Current USD
                      </Typography>
                      {/* <ListItemText primary="GDP Current USD" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="Current Account Balance (% of GDP)"
                      onClick={() =>
                        this.changeGraphType("currentAccountBalance")
                      }
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Current Account Balance (% of GDP)
                      </Typography>
                      {/* <ListItemText primary="Current Account Balance (% of GDP)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net (BoP, current US$)"
                      onClick={() => this.changeGraphType("fdiNet")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Foreign direct investment, net (BoP, current US$)
                      </Typography>
                      {/* <ListItemText primary="Foreign direct investment, net (BoP, current US$)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net outflows (BoP, current US$) "
                      onClick={() => this.changeGraphType("fDINetOutflows")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Foreign direct investment, net outflows (BoP, current US$)
                      </Typography>
                      {/* <ListItemText primary="Foreign direct investment, net outflows (BoP, current US$) " /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net inflows (% of GDP) "
                      onClick={() => this.changeGraphType("fdiNetInflows")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Foreign direct investment, net inflows (% of GDP)
                      </Typography>
                      {/* <ListItemText primary="Foreign direct investment, net inflows (% of GDP)" /> */}
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.isExpanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 , color: "#9d4edd"}}>
                  Agricultural
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                  <ListItem
                      button
                      key="agriculture"
                      onClick={() => this.changeGraphType("agriculture")}
                    >
                     <Typography sx={{ fontSize: '13px'}}>
                     Agriculture(%GDP)
                     </Typography> 
                    {/* <ListItemText primary="Agriculture(%GDP)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="manufacturing"
                      onClick={() => this.changeGraphType("manufacturing")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Manufacturing(%GDP)
                      </Typography>
                    {/* <ListItemText primary="Manufacturing(%GDP)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="annualgrowth"
                      onClick={() => this.changeGraphType("annualgrowth")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Agriculture, forestry, and fishing, value added
                      </Typography>
                      {/* <ListItemText primary="Agriculture, forestry, and fishing, value added" /> */}
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("credit")}
                      key="Credit"
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Credit
                      </Typography>
                      {/* <ListItemText primary="Credit" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="Fertilizers Production"
                      onClick={() => this.changeGraphType("fertilizer_prod")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Fertilizers Production
                      </Typography>
                      {/* <ListItemText primary="Fertilizers Production" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="FDI Consumption"
                      onClick={() => this.changeGraphType("fertilizer_cons")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Fertilizers Consumption
                      </Typography>
                      {/* <ListItemText primary="Fertilizers Consumption" /> */}
                    </ListItem>{" "}
                  </>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.isExpanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0, color: "#9d4edd" }}>
                  Debt
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                  
                    <ListItem
                      button
                      key="importReserves"
                      onClick={() => this.changeGraphType("importReserves")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                        Total reserves in months of imports
                      </Typography>
                      {/* <ListItemText primary="Total reserves in months of imports" /> */}
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("goldReserves")}
                      key="goldReserves"
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Total reserves (includes gold, current US$)
                      </Typography>
                      {/* <ListItemText primary="Total reserves (includes gold, current US$)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="totalReserves"
                      onClick={() => this.changeGraphType("totalReserves")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      Total reserves (% of total external debt)
                      </Typography>
                      {/* <ListItemText primary="Total reserves (% of total external debt)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="debtServices"
                      onClick={() => this.changeGraphType("debtServices")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                        Debt service
                      </Typography>
                      {/* <ListItemText primary="Debt service" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="totalDebt"
                      onClick={() => this.changeGraphType("totalDebt")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                        Total debt service (% of GNI)
                      </Typography>
                      {/* <ListItemText primary="Total debt service (% of GNI)" /> */}
                    </ListItem>
                    <ListItem
                      button
                      key="currentGni"
                      onClick={() => this.changeGraphType("currentGni")}
                    >
                      <Typography sx={{ fontSize: '13px'}}>
                      GNI (current US$)
                      </Typography>
                      {/* <ListItemText primary="GNI (current US$)" /> */}
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>

          

            <Divider />
            <ListItem
              button
              key="ImportExport"
              onClick={() => this.changeGraphType("import")}
            >
              {" "}
              <Typography sx={{ width: "33%", flexShrink: 0, color: "#9d4edd", cursor: 'pointer' }}>
              <ListItemText primary="Import/Export" />
                </Typography>
              
              
            </ListItem>

            {/* <ListItem
              button
              key="Sensor"
              onClick={() => this.changeGraphType("sensor")}
            >
              {" "}
              <ListItemText primary="sensor" />
            </ListItem> */}
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ "padding-left": "250px", "padding-top": "100px" }}
        >
          {this.state.page === "gdp" ? <Gdp /> : null}
          {this.state.page === "agriculture" ? <Agriculture /> : null}
          {this.state.page === "manufacturing" ? <Manufacturing /> : null}
          {this.state.page === "annualgrowth" ? <AnnualGrowth /> : null}

          {this.state.page === "gdpCurrentUsd" ? <GdpCurrentUsd /> : null}
          {this.state.page === "currentAccountBalance" ? (
            <GdpCurrentAccoutnBalance />
          ) : null}
          {this.state.page === "fdiNet" ? <FDINet /> : null}
          {this.state.page === "fdiNetInflows" ? <FDINetInflows /> : null}
          {this.state.page === "fDINetOutflows" ? <FDINetOutflows /> : null}
          {this.state.page === "fDINetOutflowsPercentGDP" ? (
            <FDINetOutflowsPercentGDP />
          ) : null}

          {this.state.page === "credit" ? <Credit /> : null}
          {/* yield */}
          {this.state.page === "walnutsiran" ? <WalnutsIran /> : null}
          {this.state.page === "mangoesphilippines" ? <MangoesPhilippines /> : null}

          {this.state.page === "fertilizer_prod" ? <FertilizerProd /> : null}
          {this.state.page === "fertilizer_cons" ? <FertilizerCons /> : null}
          {/* Debt Services */}
          {this.state.page === "importReserves" ? <ImportReserves /> : null}
          {this.state.page === "goldReserves" ? <GoldReserves /> : null}
          {this.state.page === "totalReserves" ? <TotalReserves /> : null}
          {this.state.page === "debtServices" ? <DebtServices /> : null}
          {this.state.page === "totalDebt" ? <TotalDebt /> : null}
          {this.state.page === "currentGni" ? <CurrentGni /> : null}
          {this.state.page === "import" ? <Import /> : null}
          {this.state.page === "sensor" ? <Sensor /> : null}

        
        </Box>
        <div>
      
        <div style={iconStyle}>
          <IconButton color="success" size="large" onClick={this.handleChatClick}>
            <ChatIcon />
            <span style={{ marginLeft: '5px' }}>Budget GPT Chat</span>
          </IconButton>
         
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(DashBoard);
// export default DashBoard;
