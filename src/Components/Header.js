import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ErrorIcon from "@material-ui/icons/Error";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { doctors } from "./data";
const Header = () => {
  return (
    <section className="header">
      <h2>ANAHA</h2>
      <div className="pages">
        <p>pateint profile</p>
        <ChevronRightIcon />
        <p>Analytics</p>
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
        <ErrorIcon className="error-icon" />
        <FormatListBulletedIcon />
        <NotificationsIcon />
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
