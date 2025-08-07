import React, { Component } from 'react';
import ContactService from '../Services/ContactService';
import TablePaginationAction from './TablePaginationAction'; // Assuming you have this component in a separate file
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import './Style.css';
import UpdateButton from './UpdateButton';
import DeleteContact from './DeleteContact'

class ListContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            page: 0,
            rowsPerPage: 5,
        };
        // this.deleteContact = this.deleteContact.bind(this);

    }

    // deleteContact(id) {
    //     //rest api
    //     ContactService.deleteContact(id).then(
    //         res => {
    //             this.setState({ contact: this.state.contact.filter(contact => contact.id !== id) })
    //         }
    //     )
    // }

    componentDidMount() {
        ContactService.getContact().then((res) => {
            this.setState({ contact: res.data });
        });
    }
    
    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleEditClick(contact) {
        this.setState({ editcontact: contact })
    }


    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0,
        });
    };

    render() {
        const { contact, page, rowsPerPage } = this.state;

        const emptyRows =
            rowsPerPage - Math.min(rowsPerPage, contact.length - page * rowsPerPage);

        return (
            <div className='con'>
                <h2 className='text-center'>Contact List</h2>
                <TableContainer sx={{ 
                    display:"flex", maxHeight: "450px" }} component={Paper}>
                    <Table aria-label="contacts table" className='table table-hover'>
                        <TableHead className='thead-dark'>
                            <TableRow>
                                <TableCell>ContactID</TableCell>
                                <TableCell>FirstName</TableCell>
                                <TableCell>LastName</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Contact No.</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Organization</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? contact.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : contact
                            ).map((cont) => {
                                return (
                                    <TableRow key={cont.id}>
                                        <TableCell>{cont.id}</TableCell>
                                        <TableCell>{cont.firstName}</TableCell>
                                        <TableCell>{cont.lastName}</TableCell>
                                        <TableCell>{cont.email}</TableCell>
                                        <TableCell>{cont.contactNo}</TableCell>
                                        <TableCell>{cont.address}</TableCell>
                                        <TableCell>{cont.organization}</TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={2}>
                                                <UpdateButton contactid={cont.id} />
                                                <DeleteContact contactid={cont.id}/>
                                                {/* <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => this.deleteContact(cont.id)} >Delete</Button> */}
                                            </Stack>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={8} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={8}
                                    count={contact.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={this.handleChangePage}
                                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationAction}
                                    sx={{
                                        ".MuiTablePagination-toolbar": {
                                            backgroundColor: "rgba(100,100,100,0.5)",
                                        },
                                        ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows ": {
                                            fontWeight: "bold",
                                            color: "blue",
                                            height: "3px",
                                            marginRight: "10px",
                                        },
                                        ".MuiTablePagination-input": {
                                            color: "blue",
                                            border: "solid",
                                            marginRight: "10px"
                                        },
                                        ".MuiTablePagination-spacer": {
                                            flex: "0.5"
                                        }
                                    }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default ListContact;
