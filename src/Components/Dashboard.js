import * as React from "react";
import { Component } from "react";
import Moment from "moment";
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
          ProductName: "Boat Headset",
          transactionId: "1234A23",
          PurchaseDate: Moment("08-11-2022").format("DD-MM-YY"),
          amountPaid: 3000,
        },
        {
          ProductName: "Nike Shoes",
          transactionId: "4563B12",
          PurchaseDate: Moment("3-07-2022").format("DD-MM-YY"),
          amountPaid: 4000,
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
        fontSize: 16,
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
        <div >
          <div className="usercard" style={{float:"left",width:"40%",marginLeft:"30%"}}>
            <Item key={1} elevation={10}>
              <Grid container >
                <Grid item xs={10}>
                  <b className="lfi" style={{float:"right"}}>LFI</b>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={4}>
                  <p className="attribute">Card Number :</p>
                </Grid>
                <Grid item xs={8}>
                  <p className="value">
                    {this.state.CardDetails.CardNumber}
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={4}>
                  <p className="attribute">Name :</p>
                </Grid>
                <Grid item xs={8}>
                  <p className="value">
                    {this.state.CardDetails.HolderName}
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={4}>
                  <p className="attribute">Valid till :</p>
                </Grid>
                <Grid item xs={8}>
                  <p className="value">
                    {this.state.CardDetails.Validity}
                  </p>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={4}>
                  <p className="attribute">Card Type :</p>
                </Grid>
                <Grid item xs={8}>
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
                    <p className="attribute">Total Credit :</p>
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
                    <p className="attribute">Credit Used :</p>
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
                    <p className="attribute">Remaining Credit :</p>
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
          <br />
          <div className="products-title">
            <h6>PRODUCTS PURCHASED</h6>
          </div>
          <br />

          <div className="products-purchased">
            {this.state.productsPurchased.map((x) => {
              return (
                <Grid className="product" container border={1}>
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
                                Product Name :
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
                                Amount Paid :
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
          <br />
          <div className="transactions">
            <TableContainer component={Paper}>
              <Table aria-label="customized table" border={1} >
                <TableHead>
                  <TableRow>
                    <StyledTableCell><b>Product Name</b></StyledTableCell>
                    <StyledTableCell align="right"><b>Date</b></StyledTableCell>
                    <StyledTableCell align="right"><b>Amount Paid</b></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody border={1}>
                  {this.state.recentTransactions.map((row) => (
                    <StyledTableRow key={row.transactionId}>
                      <StyledTableCell component="th" scope="row">
                        {row.ProductName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.PurchaseDate}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        INR {row.amountPaid}
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