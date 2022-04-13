import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class PerminDesain1 extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Permintaan Desain</h4>
                <p className="card-description">Silahkan masukkan detail permintaan desain. Diharapkan untuk mendeskripsikan secara lengkap dan jelas.</p>
                <form className="forms-sample">
                  <Form.Group>
                    <label>Judul Permintaan Desain</label>
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Jenis Desain</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Jumlah Halaman</label>
                    <Form.Control type="text" id="jumlah" placeholder="Jumlah Halaman" />
                  </Form.Group>
                  <Form.Group>
                    <label>Data (Isi desain)</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan file (Word/PDF)</label>
                    </div>
                  </Form.Group>
                  <button type="next" className="btn btn-primary mr-2">Next</button>
                </form>
              </div>
            </div>
        </div>
        </div>
      </div> 
    );
  }
}

export default PerminDesain1;