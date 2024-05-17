"use client";

import * as m from "@/paraglide/messages";

import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import Container from "../Container";
import { Skeleton } from "../ui/skeleton";

const Countdown = () => {
  const [loading, setloading] = useState(true);
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timerReachedZero, setTimerReachedZero] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-11-01T12:00:00"); // Replace with your target date
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
        );
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ months, days, hours, minutes, seconds });
        setloading(false);
      } else {
        clearInterval(interval);
        setTimerReachedZero(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <Container className="py-16 text-center text-3xl font-semibold text-primary">
        <div>{m.Das_Healthcare_Meetings_Event_findet_statt_in()} </div>
        {loading ? (
          <div className="mx-auto mt-2 flex w-1/2 flex-row items-center gap-x-2">
            <Skeleton className="mx-auto h-5 w-full bg-muted" />
            <Skeleton className="mx-auto h-5 w-full bg-muted" />
            <Skeleton className="mx-auto h-5 w-full bg-muted" />
            <Skeleton className="mx-auto h-5 w-full bg-muted" />
            <Skeleton className="mx-auto h-5 w-full bg-muted" />
          </div>
        ) : (
          <div>
            {timerReachedZero ? (
              <div>
                {m.Das_Healthcare_Meetings_Event_hat_schon_stattgefunden()}
              </div>
            ) : (
              <div>
                <span className="text-xl text-foreground">
                  {countdown.months}{" "}
                  {countdown.months === 1 ? m.month() : m.months()},{" "}
                  {countdown.days} {countdown.days === 1 ? m.day() : m.days()},{" "}
                  {countdown.hours}{" "}
                  {countdown.hours === 1 ? m.hour() : m.hours()},{" "}
                  {countdown.minutes}{" "}
                  {countdown.minutes === 1 ? m.minute() : m.minutes()},{" "}
                  {countdown.seconds}{" "}
                  {countdown.seconds === 1 ? m.second() : m.seconds()}
                </span>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Countdown;
