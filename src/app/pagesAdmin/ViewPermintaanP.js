import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Slider from "react-slick";
import ReactPlayer from "react-player";
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
                      <option>Terima/Tolak</option>
                      <option>Terima</option>
                      <option>Tolak</option>
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
        <div className="row">
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Desain</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/img_7.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/img_5.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/img_6.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                </Slider>
                {/* <div className="d-flex py-4"> */}
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
                        <p className="text-muted">Selesai 20 Februari 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Video</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=bjuL4WOZACs"
                    />
                  </div>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=YimFGM8DTzY"
                    />
                  </div>
                </Slider>
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
                        <div className="d-flex d-md-block d-xl-flex flex-row  justify-content-between">
                          <h6 className="preview-subject">Lingkungan Hidup</h6>
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
                        <p className="text-muted">Selesai 15 Februari 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  https://instagram.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPermintaanP;
