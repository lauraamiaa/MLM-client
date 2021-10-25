import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatcall, updateStatusCatcall } from "../../store/catcall/actions";
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

  //   const sortedCatcalls = [...catcall.expressions].sort((a, b) => {
  //     return a.status - b.status;
  //   });
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
                  <button onClick={() => approvedOnclickHandler(s)}>
                    Approve
                  </button>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}
