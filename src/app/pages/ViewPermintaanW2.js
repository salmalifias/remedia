import React, { Component } from "react";
import "../../assets/styles/_player.scss";
import Swal from "sweetalert2";

export class ViewPermintaanW extends Component {
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
                <div className="d-flex flex-row justify-content-between">
                  <h6 className="card-title">Permintaan Website</h6>
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
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_7.jpg")}
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_8.jpg")}
                    width="auto"
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
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Teks/Tautan</h4>
                <div className="preview-list w-100">
                  <div className="preview-item p-0">
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces-clipart/pic-2.png")}
                        className="rounded-circle"
                        alt="face"
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Lingkungan Hidup</h6>
                        </div>
                        <p className="text-muted">Selesai 15 Februari 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted">
                  Sudah dipublikasikan. Berikut adalah link post
                  https://kema.unpad.ac.id/RONALDINHO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPermintaanW;