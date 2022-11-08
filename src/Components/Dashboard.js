import * as React from "react";
import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Moment from "moment";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Sekhar@1",
      CardDetails: {
        CardNumber: "123456789",
        HolderName: "Chandra Sekhar",
        Validity: Moment().format("MM/YY"),
        CardType: "Gold",
        Status: "Activated",
        TotalCredit: 10000,
        CreditUsed: 7000,
        RemainingCredit: 3000,
      },
      productsPurchased: [
        { productId:1,
          productName: "Boat Headset",
          productCost: 3000,
          productType: "Electronics",
          datePurchased: Moment("08-11-2022").format("DD-MM-YY"),
        },
        {productId:2,
          productName: "Nike Shoes",
          productCost: 4000,
          productType: "Shoes",
          datePurchased: Moment("3-07-2022").format("DD-MM-YY"),
        },
      ],
      recentTransactions: [
        {
          transactionId: "1234A23",
          transactionDate: Moment("08-11-2022").format("DD-MM-YY"),
          amountPaid: 3000,
          product: "Boat Headset",
        },
        {
          transactionId: "4563B12",
          transactionDate: Moment("3-07-2022").format("DD-MM-YY"),
          amountPaid: 4000,
          product: "Nike Shoes",
        },
      ],
    };
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }));
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }));

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{backgroundColor:"green"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: "70%", flexGrow: 0 }}
              >

                <Link variant="outlined"
                  style={{ color: "white" }}
                  className="nav nav-link"
                  to="/ProductList"
                >
                  <Typography border={2} padding={1} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Check Out Products{" "}
                  </Typography>
                </Link>
              </IconButton>
              <Typography sx={{ ml: 3, flexGrow: 4 }}>
                Welcome , {this.state.userName}
              </Typography>
              <Button variant="outlined" color="inherit">
                <Link
                  style={{ color: "white"}}
                  className="nav nav-link"
                  to="/"
                >
                  LOGOUT
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <div >
          <div className="usercard">
            <Item key={1} elevation={12}>
              <Grid container >
                <Grid item xs={12}>
                  <b className="lfi">LFI</b>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Card Number :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.CardDetails.CardNumber}
                   
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Name :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.CardDetails.HolderName}
                 
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Valid till :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.CardDetails.Validity}
               
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={3}>
                  <p className="attribute">Card Type :</p>
                </Grid>
                <Grid item xs={7}>
                  <p className="value">
                    {this.state.CardDetails.CardType}
                  
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid
                  style={{ backgroundColor: "green", textAlign: "center", color: "white" }}
                  item
                  xs={12}
                >
                  <b className="card-status">
                    {this.state.CardDetails.Status}
                  </b>
                </Grid>
              </Grid>
            </Item>
          </div>
          <br />
          <div>
            <Grid container className="account">
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute">TOTAL CREDIT :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="value">
                      INR {this.state.CardDetails.TotalCredit}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              </div>
              <div>
            <Grid container className="account">
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute">CREDIT USED :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="value">
                      INR {this.state.CardDetails.CreditUsed}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              </div>
              <div>
            <Grid container className="account">
              <Grid item xs={12} sm={12} md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p className="attribute">REMAINING CREDIT :</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p className="value">
                      INR {this.state.CardDetails.RemainingCredit}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="products-title">
            <b>PRODUCTS PURCHASED</b>
          </div>
          <br />

          <div className="products-purchased">
            {this.state.productsPurchased.map((x) => {
              return (
                <Grid className="product" container border={2}>
                  <Grid item xs={12}>
                    <Item
                      key={this.state.productsPurchased.indexOf(x)}
                      elevation={12}
                    >
                      <Grid container>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item xs={4}>
                              <p className="attribute">
                                PRODUCT NAME :
                              </p>
                            </Grid>
                            <Grid item xs={4}>
                              <p className="value">
                                {x.productName}
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container>
                            <Grid item xs={4}>
                              <p className="attribute">
                                AMOUNT PAID :
                              </p>
                            </Grid>
                            <Grid item xs={4}>
                              <p
                                className="value"
                              >
                                INR {x.productCost}
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                </Grid>
              );
            })}

            <br />
          </div>

          <div className="product-names">
            <b>RECENT TRANSACTIONS</b>
          </div>
          <div className="transactions">
            <TableContainer component={Paper}>
              <Table aria-label="customized table" border={2} >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>PRODUCT</StyledTableCell>
                    <StyledTableCell align="right">DATE</StyledTableCell>
                    <StyledTableCell align="right">AMOUNT PAID</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody border={2}>
                  {this.state.recentTransactions.map((row) => (
                    <StyledTableRow key={row.transactionId}>
                      <StyledTableCell component="th" scope="row">
                        {row.product}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.transactionDate}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.amountPaid}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;