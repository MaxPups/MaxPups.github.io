$('#calendar-id').bitroidCalendarEv(
    {
        lang: "ru",
        sundayFirst: false,
        years: "2021-2023",
        format: "DD.MM.YYYY",
        showEventBlock: true,
        events : [
                  {
                day: "16",
                month: "05",
                year: "2022",
                event_description: "Кино в усадьбе",
                event_title: "1: Кино в усадьбе Долгорукова",
                event_body: "Проводим показ картин с участием Сухорукова"
            },
            {
                day: "16",
                month: "05",
                year: "2022",
                event_description: "Фестиваль красок",
                event_title: "2: Ежегодный вестиваль красок",
                event_body: "Вестиваль красок, место встречи парк 300 летия"
            },
            {
                day: "16",
                month: "05",
                year: "2022",
                event_description: "Палнетарий",
                event_title: "3: Выставка братьев поповых",
                event_body: "Космос внутри нас"
            }
    
        ],
        containers : {
            events : ".calendarev-events-container"
        }
    }
);
