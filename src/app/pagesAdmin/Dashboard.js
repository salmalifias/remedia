import React, { Component } from "react";
import { Row, Form } from "react-bootstrap";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              
              <div className="card-body">
              <h4 className="card-title">Cari Permintaan</h4>
                {/* <div className="row align-items-center row"> */}
                  {/* <div className="col-xl-12 p-2 "> */}
                    <Form className="ml-2">
                    <Row>
                      <Form.Group className="form-sort ">
                        <select className="form-control" id="sortby">
                          <option>Status Permintaan</option>
                          <option>Permintaan diproses</option>
                          <option>Permintaan ditolak</option>
                          <option>Permintaan selesai</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="form-sort">
                        <Form.Control
                          type="text"
                          className="form-control"
                          id="judul"
                          placeholder="Judul Permintaan"
                        />
                      </Form.Group>
                      <Form.Group className="form-sort">
                        <select className="form-control" id="sortby">
                          <option>Semua Permintaan</option>
                          <option>Videografi</option>
                          <option>Desain</option>
                          <option>Publikasi</option>
                          <option>Website</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="form-sort">
                        <select className="form-control" id="sortby">
                          <option>Semua Bidang</option>
                          <option>Kemahasiswaan</option>
                          <option>Kemasyarakatan</option>
                          <option>Kominfo</option>
                          <option>DKKP</option>
                          <option>Sekretariat Umum</option>
                          <option>Miba</option>
                        </select>
                      </Form.Group>
                      <button type="search" className="btn btn-primary" style={{ height: "36px", width: "100px" }}>
                        Cari
                      </button>
                      </Row>
                    </Form>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Status Permintaan</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Dept/Biro</th>
                        <th>Bidang</th>
                        <th>Judul Permintaan</th>
                        <th>Jenis Permintaan</th>
                        <th>Tanggal Publikasi</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-danger">Ditolak</label>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-warning">
                            Diterima
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-success">Selesai</label>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-success">Selesai</label>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-warning">
                            Diterima
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
