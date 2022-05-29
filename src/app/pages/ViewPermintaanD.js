import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../../assets/styles/_player.scss";
import Swal from "sweetalert2";

export class ViewPermintaanD extends Component {
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
      window.location.href = "/view-permintaan-desain2";
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
                  <h6 className="card-title">Permintaan Desain</h6>
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
                <p className="card-description">
                  <b>Halaman 1</b>
                  <br />
                  RONALDINHO MENUJU RANS CILEGON FC: APAKAH SEPADAN?
                </p>
                <div style={{ display: "block" }}>
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_8.jpg")}
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_9.jpg")}
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                </div>
                <p className="card-description">
                <Dropdown.Divider />
                  <b>Halaman 2</b>
                  <br />
                  Post votum promissa memini cuius adeptione cupis; quem
                  pollicitus est aversione aversi et fuga. Qui autem de re desit
                  libido frustra miseri qui incurrit odium sui obiecti. Si ergo
                  illa
                </p>
                <div style={{ display: "block" }}>
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_8.jpg")}
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                </div>
                <p className="card-description">
                <Dropdown.Divider />
                  <b>Halaman 3</b>
                  <br />
                  Post votum promissa memini cuius adeptione cupis; quem
                  pollicitus est aversione aversi et fuga. Qui autem de re desit
                  libido frustra miseri qui incurrit odium sui obiecti. Si ergo
                  illa tantum fastidium compesce contra naturalem usum habili,
                  quem habetis vestra potestate, non aliud quam aversantur
                  incurrere. Sed si ipse aversaris, ad languorem: et mors,
                  paupertas et tu miseros fore. Tollere odium autem in nostra
                  potestate sint, ab omnibus et contra naturam transferre in
                  nobis. Sed interim toto desiderio supprimunt: si vis aliqua
                  quae in manu tua tibi necesse confundentur et quae, quod
                  laudabile esset, nihil tamen possides.
                </p>
                <div style={{ display: "block" }}>
                  <img
                    style={{ margin: "4px" }}
                    src={require("../../assets/images/dashboard/img_9.jpg")}
                    width="auto"
                    height="110"
                    alt="carousel-item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPermintaanD;
