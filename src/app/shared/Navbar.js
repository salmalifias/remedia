import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    const{history}=this.props;
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row justify-content-between">
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <div className="align-self-center">
            <a className="navbar-brand brand-logo ml-3" href="index.html">
              <img src={require("../../assets/images/logo.png")} alt="logo" />
            </a>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <Dropdown alignRight as="li" className="nav-item d-lg-block">
              <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
                + Permintaan
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list create-new-dropdown-menu">
                <h6 className="p-3 mb-0">Permintaan</h6>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => history.push("/permintaan-desain-1")}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-drawing text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Design</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => history.push("/permintaan-video")}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-video text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Videografi</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => history.push("/permintaan-website")}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-web text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Website</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => history.push("/permintaan-publikasi")}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-phone text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Publikasi</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown alignRight as="li" className="nav-item">
              <Dropdown.Toggle
                as="a"
                className="nav-link count-indicator cursor-pointer"
              >
                <i className="mdi mdi-bell"></i>
                <span className="count bg-danger"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <h6 className="p-3 mb-0">Notifikasi</h6>
                <Dropdown.Divider />
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={() => history.push("/view-permintaan-desain2")}
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      EXTEND OPEN RECRUITMENT
                    </p>
                    <p className="text-muted ellipsis mb-0">
                      Permintaan selesai
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={() => history.push("/view-permintaan-web")}
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1">
                      INFORMASI SEPUTAR PPK
                    </h6>
                    <p className="text-muted ellipsis mb-0">
                      Permintaan diterima
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={() => history.push("/view-permintaan-publikasi")}
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-warning"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1">
                      WUJUDKAN KAMPUS YANG AMAN
                    </h6>
                    <p className="text-muted ellipsis mb-0">
                      Permintaan dalam progres!
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">Lihat Notifikasi Lainnya</p>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown alignRight as="li" className="nav-item">
              <Dropdown.Toggle
                as="a"
                className="nav-link cursor-pointer no-caret"
              >
                <div className="navbar-profile">
                  <img
                    className="img-xs rounded-circle"
                    src={require("../../assets/images/faces-clipart/pic-1.png")}
                    alt="profile"
                  />
                  <p className="mb-0 d-none d-sm-block navbar-profile-name">
                    MSDM
                  </p>
                  <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <Dropdown.Item
                  onClick={() => history.push("/login")}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Log Out</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);