import React from 'react';
import {
  CountdownCircleTimer,
} from 'react-countdown-circle-timer';
import { withBlockExtensions } from '@plone/volto/helpers';
import './styles.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

//
function View({ data }) {
  const renderTime = (dimension, time, color) => {
    return (
      <div className="time-wrapper">
        <div className="time" style={{ color }}>
          {time}
        </div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;
  const stratTime = Date.now() / 1000;
  const endTime = Date.parse(data.countToDate) / 1000;
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;


  return (
    <>
      {data.title && <h2 className="timer-title">{data.title}</h2>}
      {remainingTime <= 0 ? <h2 className="timer-title endMessage">{data.endMessage}</h2> : 
      <div className="block timer-container" style={{ gap: `${data.spacing}px` }}
      >
        {data.showDay && (
          <CountdownCircleTimer
            {...timerProps}
            colors={data.dayColor || ['#000']}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
            trailColor={data.showDayTrail ? '#d9d9d9' : 'rgba(217, 217, 217, 0)'}
            strokeWidth={data.hideDaysRunningTrail ? 0 : 5}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime('days', getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        )}

        {data.showHour && (
          <CountdownCircleTimer
            {...timerProps}
            colors={data.hourColor || ['#000']}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            trailColor={data.showHourTrail ? '#d9d9d9' : 'rgba(217, 217, 217, 0)'}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
            })}
            strokeWidth={data.hideHourRunningTrail ? 0 : 5}

          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        )}
        {data.showMinute && (
          <CountdownCircleTimer
            {...timerProps}
            colors={data.minuteColor || ['#000']}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            trailColor={data.showMinuteTrail ? '#d9d9d9' : 'rgba(217, 217, 217, 0)'}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
            })}
            strokeWidth={data.hideMinuteRunningTrail ? 0 : 5}

          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime(
                  'minutes',
                  getTimeMinutes(hourSeconds - elapsedTime),
                )}
              </span>
            )}
          </CountdownCircleTimer>
        )}

        {data.showSecond && (
          <CountdownCircleTimer
            {...timerProps}
            isPlaying
            colors={data.secondColor || ['#000']}
            trailColor={data.showSecondTrail ? '#d9d9d9' : 'rgba(217, 217, 217, 0)'}
            duration={minuteSeconds}
            strokeWidth={data.hideSecondRunningTrail ? 0 : 5}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0
            })}
            
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime('seconds', getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        )}
      </div>
      }
    </>
            
  );
}

export default withBlockExtensions(View);
