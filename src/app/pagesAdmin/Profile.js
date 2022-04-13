import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class Profile extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card remedia-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={require('../../assets/images/media.png')} className="img-fluid" alt="banner" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0">
                    <h4 className="mb-1 mb-sm-0">Departemen Media Kreatif 2021</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block">Activated!</p>
                  </div>
                  <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                    <button className="btn btn-outline-light btn-rounded get-started-btn">Aktivasi</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">560</h3>
                    </div>
                  </div>
                  <div className="col-3">
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Permintaan Publikasi</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">359</h3>
                    </div>
                  </div>
                  <div className="col-3">
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Permintaan Desain</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">16</h3>
                    </div>
                  </div>
                  <div className="col-3">
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Permintaan Website</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">26</h3>
                    </div>
                  </div>
                  <div className="col-3">
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Permintaan Videografi</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Data Bidang</h4>
                  <p className="text-muted mb-1">Tambah Bidang</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-file-document"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Sekretariat Umum</h6>
                            <p className="text-muted mb-0">Administrasi, Keuangan, MSDM, RnD</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-cloud-download"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Bidang Kemahasiswaan</h6>
                            <p className="text-muted mb-0">KPSDM, APM, Akinov</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-info">
                            <i className="mdi mdi-clock"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Bidang Kemasyarakatan</h6>
                            <p className="text-muted mb-0">Pengmas, Admas, Lingkungan Hidup</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-danger">
                            <i className="mdi mdi-email-open"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Bidang Kominfo</h6>
                            <p className="text-muted mb-0">Hubin, Hubeks, Medkraf</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-warning">
                            <i className="mdi mdi-chart-pie"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Bidang Miba</h6>
                            <p className="text-muted mb-0">Senbora, Ekraf</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item">
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-success">
                            <i className="mdi mdi-bank"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject">Bidang DKKP</h6>
                            <p className="text-muted mb-0">Kastrat, Proaksi</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted">127 diterima, 29 ditolak</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
              <div className="card-body">
                <h4 className="card-title">Data Administrator</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nama Departemen</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Nama Bidang</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Password</label>
                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2">Ubah</button>
                </form>
              </div>
            </div>
        </div>
        </div>
        <div className="row ">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Data Departemen dan Biro</h4>
                  <p className="text-muted mb-1">Tambah Dept/Biro</p>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> No </th>
                        <th> Nama Dept/Biro </th>
                        <th> Bidang </th>
                        <th> Username </th>
                        <th> Password </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">1</span>
                          </div>
                        </td>
                        <td> MSDM </td>
                        <td> Sekretariat Umum </td>
                        <td> emesdeem </td>
                        <td> msdm123 </td>
                        <td> Edit </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">2</span>
                          </div>
                        </td>
                        <td> MSDM </td>
                        <td> Sekretariat Umum </td>
                        <td> emesdeem </td>
                        <td> msdm123 </td>
                        <td> Edit </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">3</span>
                          </div>
                        </td>
                        <td> MSDM </td>
                        <td> Sekretariat Umum </td>
                        <td> emesdeem </td>
                        <td> msdm123 </td>
                        <td> Edit </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">4</span>
                          </div>
                        </td>
                        <td> MSDM </td>
                        <td> Sekretariat Umum </td>
                        <td> emesdeem </td>
                        <td> msdm123 </td>
                        <td> Edit </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">5</span>
                          </div>
                        </td>
                        <td> MSDM </td>
                        <td> Sekretariat Umum </td>
                        <td> emesdeem </td>
                        <td> msdm123 </td>
                        <td> Edit </td>
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

export default Profile;