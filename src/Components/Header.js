import React from "react";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { doctors } from "./data";
const Header = () => {
  return (
    <section className="header">
      <h2>ANAHA</h2>
      <div className="pages">
        <h4>pateint profile</h4>
        <ChevronRightOutlinedIcon />
        <h4>Analytics</h4>
      </div>
      <div className="drop-down">
        <input list="doctors" name="doctors-list" placeholder="Search" />
        <datalist id="doctors">
          <option value="Doctor1"></option>
          <option value="Doctor2"></option>
          <option value="Doctor3"></option>
          <option value="Doctor4"></option>
        </datalist>
      </div>
      <div className="icons">
        <ErrorOutlineOutlinedIcon />
        <FormatListBulletedOutlinedIcon />
        <NotificationsOutlinedIcon />
      </div>
      <div className="doctor-profiles">
        <select name="" id="">
          {doctors.map((doctor) => {
            const { id, name, image } = doctor;
            return <option className="doctor-names">{name}</option>;
          })}
        </select>
      </div>
    </section>
  );
};

export default Header;
