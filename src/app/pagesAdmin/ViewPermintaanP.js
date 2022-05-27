import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../assets/styles/_player.scss";
import Swal from "sweetalert2";

export class ViewPermintaanP extends Component {
  showDelete = () => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Permintaan akan dihapus",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      background: '#191c20'
    });
  };
  showDownload = () => {
    Swal.fire({
      title: "Download bahan permintaan",
      text: "Permintaan akan didownload",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      background: '#191c20'
    });
  };
  showAdd = () => {
    Swal.fire({
      title: "Berhasil",
      text: "Hasil editing telah ditambahkan",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      background: '#191c20'
    }).then(function () {
      // Redirect the user
      window.location.href = "/view-permintaan-publikasi2";
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  RONALDINHO MENUJU RANS CILEGON FC: APAKAH SEPADAN?
                </h4>
                <p className="card-description">
                  Departemen Seni Budaya dan Olahraga | Bidang Minat dan Bakat{" "}
                  <br />
                  Publikasi Tanggal 29 Februari 2021
                </p>
                <div className="d-flex flex-row justify-content-between">
                  <h6 className="card-title">Permintaan Publikasi</h6>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div
                      onClick={this.showDelete}
                      className="mdi mdi-delete-forever"
                    />
                    <div
                      onClick={this.showDownload}
                      className="mdi mdi-download"
                    />
                  </div>
                </div>
                <div style={{ display: "block" }}>
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_7.jpg")}
                    width="180"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_7.jpg")}
                    width="110"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_7.jpg")}
                    width="110"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_7.jpg")}
                    width="180"
                    height="110"
                    alt="carousel-item"
                  />
                </div>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ac nunc ut magna porttitor euismod eu et nunc. Sed interdum
                  quam vulputate quam scelerisque, vitae accumsan libero
                  interdum. Praesent at sem at mauris posuere commodo. Nam arcu
                  orci, tincidunt facilisis sem quis, ultricies sagittis tortor.
                  Morbi rutrum, metus et faucibus fringilla, ligula nunc
                  accumsan tortor, eget vestibulum dui metus pharetra tortor.
                  Maecenas eget sapien pretium, dictum justo in, scelerisque
                  lorem. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitur sit amet sem
                  dapibus, sagittis risus in, vulputate nibh. Phasellus gravida
                  finibus est sed vehicula.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Hasil Permintaan</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <select className="form-control" id="sortby">
                      <option style={{color:"#c3c5cf"}}>Terima/Tolak</option>
                      <option style={{color:"#c3c5cf"}}>Terima</option>
                      <option style={{color:"#c3c5cf"}}>Tolak</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>Photo/File</label>
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
                        Tambahkan
                      </label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Catatan/Link</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                    />
                  </Form.Group>
                  <button
                    type="button"
                    onClick={this.showAdd}
                    className="btn btn-primary mr-2"
                  >
                    Add
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPermintaanP;
