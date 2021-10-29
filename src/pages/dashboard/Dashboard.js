import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/admin/actions";
import {
  fetchCatcall,
  updateStatusCatcall,
  deleteCatcall,
} from "../../store/catcall/actions";
import { selectCatcall } from "../../store/catcall/selector";
import { selectAdmin } from "../../store/admin/selector";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const catcall = useSelector(selectCatcall);
  const admin = useSelector(selectAdmin);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCatcall());
  }, [dispatch]);

  useEffect(() => {
    if (!admin.token) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [history]);

  function approvedOnclickHandler(catcall) {
    const data = { id: catcall.id, status: "approved" };
    dispatch(updateStatusCatcall(data));
  }

  function logOutFunction(event) {
    event.preventDefault();
    dispatch(logOut());
    history.push("/");
  }

  return (
    <div className="dash-body">
      <h1 className="dash-title">Dashboard</h1>
      <button className="btn-logout" type="submit" onClick={logOutFunction}>
        Logout
      </button>{" "}
      <div className="dash-expressions">
        {catcall.expressions &&
          catcall.expressions.map((s) => {
            return (
              <div key={s.id} className="buttons-dash">
                {s.expression}
                {s.status === "pending" ? (
                  <div className="buttons-dash">
                    <button
                      className="btn-dash-app"
                      onClick={() => approvedOnclickHandler(s)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn-dash-rem"
                      onClick={() => {
                        dispatch(deleteCatcall(s.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}
