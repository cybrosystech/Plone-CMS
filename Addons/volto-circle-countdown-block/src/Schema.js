export const CountdownSchema = (props) => {
    const {intl} = props;
    const currentDate = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(currentDate.getDate() + 0);
  
    return {
      title: 'Countdown Block',
      fieldsets: [
        {
          id: 'default',
          title: 'Default',
          fields: ['title', 'countToDate', 'endMessage','spacing'],
        },
        {
          id: 'days',
          title: 'Days',
          fields: [ 'showDay','showDayTrail','hideDaysRunningTrail','dayColor'],
        },
        {
          id: 'hours',
          title: 'Hours',
          fields: [ 'showHour','showHourTrail','hideHourRunningTrail','hourColor'],
        },
        {
          id: 'minutes',
          title: 'Minutes',
          fields: [ 'showMinute','showMinuteTrail','hideMinuteRunningTrail','minuteColor'],
        },
        {
          id: 'seconds',
          title: 'Seconds',
          fields: [ 'showSecond','showSecondTrail','hideSecondRunningTrail','secondColor'],
        },
      ],
  
      properties: {
        title: {
          title: 'Count Title',
          default: 'Countdown to Next event',
        },
        countToDate: {
          title: 'Countdown to Date',
          widget: 'datetime',
          default: currentDate.toISOString(),
        },
        endMessage: {
          title: 'End Message',
          default: 'Countdown is over',
        },
        spacing: {
          title: 'Spacing',
          widget: 'slider',
          settings: {
            min: 0,
            max: 100,
            step: 1,
            start: 0,
          },
        },
        showDay:{
          title: 'Show Days',
          type: 'boolean',
          default: true,
        },
        showDayTrail:{
          title: 'Show Trail',
          type: 'boolean',
          default: true,
        },
        dayColor:{
          title: 'Day Color',
          default: 'black',
          widget: 'style_time_color' },      

          hideDaysRunningTrail:{
            title: 'Hide Running Trail',
            type: 'boolean',
            default: true,
          },

        showHour: {
          title: 'Show Hours',
          type: 'boolean',
          default: true,
        },
        showHourTrail:{
          title: 'Show Trail',
          type: 'boolean',
          default: true,
        },
        hourColor:{
          title: 'Hour Color',
          widget: 'style_time_color' 
        }, 
        hideHourRunningTrail:{
          title: 'Hide Running Trail',
          type: 'boolean',
          default: true,
        },   
        showMinute: {
          title: 'Show minutes',
          type: 'boolean',
          default: true,
        },
        showMinuteTrail:{
          title: 'Show Trail',
          type: 'boolean',
          default: true,
        },
        minuteColor:{
          title: 'Minute Color',
          widget: 'style_time_color' 
        },    
        hideMinuteRunningTrail:{
          title: 'Hide Running Trail',
          type: 'boolean',
          default: true,
        }, 
        showSecond: {
          title: 'Show Seconds',
          type: 'boolean',
          default: true,
        },

        showSecondTrail:{
          title: 'Show Trail',
          type: 'boolean',
          default: true,
        },
        hideSecondRunningTrail:{
          title: 'Hide Running Trail',
          type: 'boolean',
          default: true,
        },

        secondColor:{
          title: 'Second Color',
          widget: 'style_time_color' 
        }, 
 
        
      },
      required: [],
    };
  };
  