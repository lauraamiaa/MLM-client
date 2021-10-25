import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatcall,
  updateStatusCatcall,
  deleteCatcall,
} from "../../store/catcall/actions";
import { selectCatcall } from "../../store/catcall/selector";

export default function Dashboard() {
  const dispatch = useDispatch();
  const catcall = useSelector(selectCatcall);
  console.log("catcall", catcall);

  useEffect(() => {
    dispatch(fetchCatcall());
  }, [dispatch]);

  function approvedOnclickHandler(catcall) {
    const data = { id: catcall.id, status: "approved" };
    dispatch(updateStatusCatcall(data));
  }

  const sortedCatcalls = catcall.expressions.sort((a, b) => {
    return b.status - a.status;
  });

  console.log("sorted catcalls", sortedCatcalls);
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {catcall.expressions &&
          catcall.expressions.map((s) => {
            return (
              <div key={s.id}>
                {s.expression}
                {s.status === "pending" ? (
                  <div>
                    <button onClick={() => approvedOnclickHandler(s)}>
                      Approve
                    </button>
                    <button
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
