$('#calendar-id').bitroidCalendarEv(
    {
        lang: "ru",
        sundayFirst: false,
        years: "2021-2023",
        format: "DD.MM.YYYY",
        showEventBlock: true,
        events : [
            {
                day : "03",
                month : "02",
                year : "2021",
                event_description : "Описание события",
                event_title : "Заголовок для события",
                event_body : "Описание для события"
            },
            {
                day : "03",
                month : "02",
                year : "2022",
                event_description : "Описание события2",
                event_title : "Заголовок для события2",
                event_body : "Описание для события2"
            },
    
        ],
        containers : {
            events : ".calendarev-events-container"
        }
    }
);