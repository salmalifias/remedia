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
      background: "#191c20",
    }).then(function () {
      // Redirect the user
      window.location.href = "/dashboard";
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      formValues: [{ name: "", email: "" }],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }
  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { name: "", email: "" }],
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Permintaan Desain</h4>
                <form className="forms-sample">
                  {this.state.formValues.map((element, index) => (
                    <div key={index}>
                      <p className="card-description">Slide</p>
                      <Form.Group>
                        <label>Judul Slide</label>
                        <Form.Control
                          type="text"
                          name="judul"
                          placeholder="Judul Permintaan"
                          value={element.judul || ""}
                          onChange={(e) => this.handleChange(index, e)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>Isi Slide</label>
                        <Form.Control
                          type="text"
                          name="isi"
                          value={element.isi || ""}
                          onChange={(e) => this.handleChange(index, e)}
                          placeholder="Jenis Desain (Postingan/Sertifikat/dll)"
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>Foto Pada Desain</label>
                        <div className="custom-file">
                          <Form.Control
                            type="file"
                            className="form-control visibility-hidden"
                            name="foto"
                            lang="es"
                            value={element.foto || ""}
                            onChange={(e) => this.handleChange(index, e)}
                          />
                          <label
                            className="custom-file-label text-muted"
                            htmlFor="customFileLang"
                          >
                            Tambahkan Foto
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                  ))}
                  <div className="d-flex flex-row justify-content-between">
                    <button
                      onClick={this.showAlert}
                      type="button"
                      className="btn btn-primary mr-2"
                    >
                      Tambah Permintaan
                    </button>
                    <button
                      // onClick={this.showAlert}
                      onClick={() => this.addFormFields()}
                      type="button"
                      className="btn btn-secondary"
                    >
                      + Slide
                    </button>
                  </div>
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