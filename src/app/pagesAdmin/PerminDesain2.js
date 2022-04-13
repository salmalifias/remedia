import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class PerminDesain2 extends Component {
  render () {
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
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Slide</label>
                    <div className="custom-file">
                      <Form.Control type="photo" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan Foto</label>
                    </div>
                  </Form.Group>
                  <p className="card-description">Slide 2</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Slide</label>
                    <div className="custom-file">
                      <Form.Control type="photo" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan Foto</label>
                    </div>
                  </Form.Group>
                  <p className="card-description">Slide 3</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Slide</label>
                    <div className="custom-file">
                      <Form.Control type="photo" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan Foto</label>
                    </div>
                  </Form.Group>
                  <p className="card-description">Slide 4</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Slide</label>
                    <div className="custom-file">
                      <Form.Control type="photo" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan Foto</label>
                    </div>
                  </Form.Group>
                  <p className="card-description">Slide 5</p>
                  <Form.Group>
                    <label>Judul Slide</label>
                    <Form.Control type="text" id="judul" placeholder="Judul Permintaan" />
                  </Form.Group>
                  <Form.Group>
                    <label>Isi Slide</label>
                    <Form.Control type="text" id="jenis" placeholder="Jenis Desain (Postingan/Sertifikat/dll)" />
                  </Form.Group>
                  <Form.Group>
                    <label>Foto Pada Slide</label>
                    <div className="custom-file">
                      <Form.Control type="photo" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Tambahkan Foto</label>
                    </div>
                  </Form.Group>
                  <button type="next" className="btn btn-primary mr-2">Tambah Permintaan</button>
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