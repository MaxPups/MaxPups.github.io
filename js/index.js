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
                event_description : `<a href="https://www.youtube.com/"></a>`,
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
            {
                day : "15",
                month : "02",
                year : "2022",
                event_description : "событие САШИ",
                event_title : "что-то произойдеи",
                event_body : "Описание для события"
                // event_body : "Описание для события2"
            },
            {
                day : "15",
                month : "05",
                year : "2022",
                event_description : "событие САШИ",
                event_title : "что-то произойдеи",
                event_body : "Описание для события"
                // event_body : "Описание для события2"
            },
            {
                day : "16",
                month : "05",
                year : "2022",
                event_description : "событие САШИ@@",
                event_title : "что-то произойдеи?????",
                event_body : "12312312asdbnfasdbfnainsd"
                // event_body : "Описание для события2"
            },
    
        ],
        containers : {
            events : ".calendarev-events-container"
        }
    }
);
