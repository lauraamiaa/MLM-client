export const dataFetched = (eventsAndVenues) => ({
  type: "event/fetch",
  payload: eventsAndVenues, // { events: [{}, {}], venues: [{}, {}] }
});

export function fetchEventsAndVenues() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/events`); // http://localhost:4000/events
      const venueResponse = await axios.get(`${apiUrl}/events/venues`);
      //   console.log("response fetch events", response.data); // [{}, {}]
      dispatch(
        dataFetched({ events: response.data, venues: venueResponse.data })
      ); // dispatch to backend via thunk/url
    } catch (e) {
      console.log(e.message);
    }
  };
}
