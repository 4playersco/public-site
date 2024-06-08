"use client";
import React, { useState, useEffect } from "react";

import styles from "./LatestEvents.module.scss";
import Container from "../../utility/Container";
import Calendar from "../Calendar";

type UpcomingEvent = {
  id: string;
  startTime: string;
  title: string;
};
const LatestEvents = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>();

  useEffect(() => {
    const fn = async () => {
      setLoading(true);

      fetch("https://api.4-playersofcolorado.org/calendar/upcoming/9", {
        cache: "no-store",
      })
        .then(async (data) => {
          if (data.ok) {
            const results = await data.json();
            setUpcomingEvents(results);
            setLoading(false);
          } else {
            console.error(data.statusText);
            setError(data.statusText);
          }
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });

      setLoading(false);
    };

    fn();
  }, []);

  return (
    <div className={styles.LatestEvents}>
      <Container>
        <h2 className={styles.heading}>Upcoming Events</h2>
        <p>
          Come visit us at our monthly meeting at 7pm on the second Monday of
          each month at{" "}
          <a
            href="https://www.google.com/maps/dir//Charlie's+Denver,+900+E+Colfax+Ave,+Denver,+CO+80218/@39.7397694,-104.978392,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876c792d2c23dbc9:0xb4e1b42dcd87972!2m2!1d-104.9762311!2d39.739667"
            target="_blank"
            rel="noreferrer"
          >
            Charlie&apos;s Denver
          </a>{" "}
          (seasonally, check calendar below)
        </p>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {upcomingEvents && upcomingEvents.length > 0 ? (
              <ul className={styles.list}>
                {upcomingEvents.map((event) => (
                  <li className={styles.listItem} key={event.id}>
                    <div>
                      <Calendar date={event.startTime} />
                    </div>
                    <h4 className={styles.eventHeading}>
                      <a
                        href={`https://members.4-playersofcolorado.org/event/${event.id}`}
                      >
                        {event.title}
                      </a>
                    </h4>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{error || "No events scheduled"}</p>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default LatestEvents;
