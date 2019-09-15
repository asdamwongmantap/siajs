import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {Button,Card, CardHeader, CardBody} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_data';

class ListJenisRekening extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    }

  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`
      return (
      <NavLink strict to={id}> {cell} </NavLink>
    );
  };

  render() {

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Jenis Rekening{' '}
            <div className="card-header-actions">
            <Button color="primary" className="px-4" href="/setup/addjenisrekening"><i className="icon-plus"></i> Tambah Data</Button>
            </div>
          </CardHeader>
          <CardBody>
            <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options}>
              {/* <TableHeaderColumn dataField="notransaksi" dataSort dataFormat={this.idFormat} >No. Transaksi</TableHeaderColumn> */}
              <TableHeaderColumn isKey dataField="notransaksi"  >No. Transaksi</TableHeaderColumn>
              <TableHeaderColumn  dataField="tanggal" dataSort>Tanggal</TableHeaderColumn>
              <TableHeaderColumn dataField="descrek" dataSort>Deskripsi</TableHeaderColumn>
              <TableHeaderColumn dataField="ket" dataSort>Keterangan</TableHeaderColumn>
              <TableHeaderColumn dataField="debit" dataSort>Debit</TableHeaderColumn>
              <TableHeaderColumn dataField="kredit" dataSort>Kredit</TableHeaderColumn>
              <TableHeaderColumn dataField="status" dataSort>Status</TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ListJenisRekening;
