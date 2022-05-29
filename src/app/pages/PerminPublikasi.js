import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

export class PerminPublikasi extends Component {
  showAlert = () => {
    Swal.fire({
      title: "Berhasil",
      text: "Permintaan Masuk",
      icon: "success",
      confirmButtonText: "OK",
      background: '#191c20'
    }).then(function () {
      // Redirect the user
      window.location.href = "/dashboard";
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Permintaan Publikasi</h4>
                <p className="card-description">
                  Silahkan masukkan detail permintaan publikasi. Diharapkan
                  untuk mendeskripsikan secara lengkap dan jelas.
                </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Judul Permintaan Publikasi
                    </label>
                    <Form.Control
                      type="text"
                      id="judul"
                      placeholder="Judul Permintaan"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Jam Publikasi</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="jam"
                      placeholder="Jam Publikasi"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">
                      Tanggal Publikasi
                    </label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="tanggal"
                      placeholder="Tanggal Publikasi"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Caption</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="caption"
                      placeholder="Caption"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label>Poster</label>
                    <div className="custom-file">
                      <Form.Control
                        type="file"
                        className="form-control visibility-hidden"
                        id="customFileLang"
                        lang="es"
                      />
                      <label
                        className="custom-file-label text-muted"
                        htmlFor="customFileLang"
                      >
                        Tambahkan Foto
                      </label>
                    </div>
                  </Form.Group>
                  <button
                    onClick={this.showAlert}
                    type="button"
                    className="btn btn-primary mr-2"
                  >
                    Tambah Permintaan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PerminPublikasi;
