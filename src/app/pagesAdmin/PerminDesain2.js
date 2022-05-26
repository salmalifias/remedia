import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

export class PerminDesain2 extends Component {
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
                <h4 className="card-title">Permintaan Desain</h4>
                <form className="forms-sample">
                  <p className="card-description">Slide 1</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control
                      type="text"
                      id="judul"
                      placeholder="Judul Permintaan"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control
                      type="text"
                      id="jenis"
                      placeholder="Jenis Desain (Postingan/Sertifikat/dll)"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Desain</label>
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
                  <p className="card-description">Slide 2</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control
                      type="text"
                      id="judul"
                      placeholder="Judul Permintaan"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control
                      type="text"
                      id="jenis"
                      placeholder="Jenis Desain (Postingan/Sertifikat/dll)"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Desain</label>
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

export default PerminDesain2;
