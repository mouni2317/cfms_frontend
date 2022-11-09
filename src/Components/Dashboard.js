import * as React from "react";
import { Component } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { apiUrl } from "./constants";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardDetails: {
        cardNumber: 0,
        validity: "",
        cardType: "",
        status: "",
        totalCredit: 0,
        reditUsed: 0,
        remainingCredit: 0
      },
      recentTransactions: [
        {
          productName: "",
          transactionId: 0,
          purchaseDate: "",
          amountPaid: 0,
          productId: 0,
          usercardId: 0,
          outstanding: false,
          completed: true,
          userId: 0,
          data: ""
        },
      ],
      defaultCardNumber: 6541987998742136
    };
  }

  componentDidMount() {
    Promise.all([
      axios.post(apiUrl + '/getCardDetails', {
        userId: parseInt(sessionStorage.getItem('userId'))
      }),
      axios.post(apiUrl + '/getAllTransactions', {
        userId: parseInt(sessionStorage.getItem('userId'))
      })
    ])
    .then(([res1, res2]) => {
      const cardDetails = res1.data;
      const transactionDetails = res2.data.transactionDetails;
      this.setState({CardDetails: cardDetails, recentTransactions: transactionDetails});
    })
    .catch(function (error) {
      console.log(error);
    });
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
                    {this.state.CardDetails.cardNumber ? this.state.CardDetails.cardNumber : this.state.defaultCardNumber}
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
                    {sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName')}
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
                    {this.state.CardDetails.validity}
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
                    {this.state.CardDetails.cardType}
                  
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
                    {this.state.CardDetails.status}
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
                      INR {this.state.CardDetails.totalCredit}
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
                      INR {this.state.CardDetails.creditUsed}
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
                      INR {this.state.CardDetails.remainingCredit}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <br />

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
                        {row.productName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.purchaseDate}
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