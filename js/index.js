if ($('input').prop('disabled')) {
    $('form').addClass('disabled');
}

$('input').on('click', function () {
    if (this.value) {
        $('.form__clear-btn').addClass('active');
    } else {
        $('.form__clear-btn').removeClass('active');
    }
})

$('input').on('input', function () {
    if (this.value) {
        $('.form__clear-btn').addClass('active');
    } else {
        $('.form__clear-btn').removeClass('active');
    }
})

$('input').on('blur', function (e) {
    if (!e.relatedTarget && this.value) {
        $(this).addClass('filled');
        $('.form__clear-btn').removeClass('active');
    } else {
        $(this).removeClass('filled');
    }
})

$('.form__clear-btn').on('click', function () {
    $('input').val('');
    $(this).removeClass('active');
})

$('.text__show-more-btn').on('click', function () {
    console.log(this);
    $(this).toggleClass('active');
    $('.top-content__text').toggleClass('show');
})

function setDaysInMonthInSelect() {
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        $('select').append('<option>' + i + ' день' + '</option>');
    }
}

setDaysInMonthInSelect();

$(function () {
    $('select').selectric({
        maxHeight: 200,
        arrowButtonMarkup: `
        <b class="button">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.48995 8.95404L10.3089 5.11356C10.5637 4.85872 10.5637 4.44596 10.3089 4.19113C10.0541 3.93629 9.64488 3.93629 9.39363 4.19113L6.00181 7.60449L2.6064 4.19113C2.35156 3.93629 1.94239 3.93629 1.69114 4.19113C1.43631 4.44596 1.43631 4.85872 1.69114 5.11356L5.51008 8.95404C5.64648 9.09043 5.82594 9.15145 6.00181 9.14068C6.17768 9.15145 6.35714 9.09043 6.48995 8.95404Z" fill="#333E50"/>
            </svg>
        </b>
        `,
        disableOnMobile: false
    });
});

const currentPrice = '4.90 ₽';

const stocksLeadersGrowth = [
    {
        logo: './images/icons/company/vtbr.png',
        title: 'ВТБ банк',
        subtitle: 'VTBR',
        lastPrice: '18.24 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/default-company.svg',
        title: 'Пао «Русгидро»',
        subtitle: 'HYDR',
        lastPrice: '4.90 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/dis-rm.png',
        title: 'The Walt Disney Company',
        subtitle: 'DIS-RM',
        lastPrice: '54.23 $',
        dynamic: 'decline',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/gazp.png',
        title: 'Газпром',
        subtitle: 'VTBR',
        lastPrice: '14.36 ₽',
        dynamic: 'decline',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/default-company.svg',
        title: 'The Walt Disney Company',
        subtitle: 'DIS-RM',
        lastPrice: '9.24 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/csco-rm.png',
        title: 'Cisco Systems, Inc.',
        subtitle: 'CSCO-RM',
        lastPrice: '18.24 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    }
];

const stocksYieldsLeaders = [
    {
        logo: './images/icons/company/sberb.png',
        title: 'ПАО Сбербанк',
        subtitle: 'SBER',
        lastPrice: '151.51 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/gazp.png',
        title: 'ПАО «Газпром»',
        subtitle: 'GAZP',
        lastPrice: '162.29 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/pao-polus.png',
        title: 'ПАО «Полюс»',
        subtitle: 'PLZL',
        lastPrice: '8 148.5 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/pao-rosseti.png',
        title: 'ПАО «Россети Ленэнерго»',
        subtitle: 'LSNG',
        lastPrice: '10.55 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/pao-magnit.png',
        title: 'ПАО «Магнит»',
        subtitle: 'MGNT',
        lastPrice: '4 581.5 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    },
    {
        logo: './images/icons/company/pao-lukojl.png',
        title: 'ПАО «ЛУКОЙЛ»',
        subtitle: 'LKOH',
        lastPrice: '4 021.5 ₽',
        dynamic: 'increase',
        dynamicValue: '138.75 %'
    }
];

function setValueToStockLeaderGrowthTable(list) {
    for (let item in list) {
        $('.table-list__body').append(
            '<tr class="table-list__row">' +

            '<td class="table-list__cell">' +
            '<div class="table-list__cell-title-wrapper">' +
            '<div class="table-list__cell-img-wrapper"><img src="' + list[item].logo + '" alt="company-logo" /></div>' +
            '<div><a href="#">' + list[item].title + '</a><p>' + list[item].subtitle + '</p></div>'
            + '</div></td>'
            +
            '<td class="table-list__cell"><p class="table-list__cell-price">' + list[item].lastPrice + '</p></td>'
            +

            '<td class="table-list__cell"><div class="table-list__cell-rates ' + list[item].dynamic + '">' +
            '<div><p class="rates__value">' + list[item].dynamicValue + '</p>' +
            '<p class="rates__value">' + currentPrice + '</p></div></div></td>'

            + '</tr>'
        );
    }
};

setValueToStockLeaderGrowthTable(stocksLeadersGrowth);

$('.navigation-table__button').on('click', function () {
    $('.navigation-table__button').removeClass('selected').addClass('unselected');
    $(this).removeClass('unselected').addClass('selected');
    $('.table-list__body').empty();
    if (this.dataset.value === 'leaders-growth') {
        setValueToStockLeaderGrowthTable(stocksLeadersGrowth);
    } else {
        setValueToStockLeaderGrowthTable(stocksYieldsLeaders);
    }
});

const newsToCalendar = [
    {
        date: 'Ноябрь 17',
        news: [
            {
                time: '13:00',
                special: true,
                country_flag: './images/icons/flags/russia.png',
                status: 'red',
                title: 'Индекс цен на продовольствие'
            },
            {
                time: '13:00',
                special: true,
                country_flag: './images/icons/flags/russia.png',
                status: 'red',
                title: 'Employment Overall Flash'
            },
            {
                time: '16:45',
                special: false,
                country_flag: './images/icons/flags/usa.png',
                status: 'orange',
                title: 'Изменение занятости (кв/кв)'
            },
            {
                time: '13:00',
                special: false,
                country_flag: './images/icons/flags/usa.png',
                status: 'green',
                title: 'Изменение занятости (кв/кв), ИПЦ Франции, базовый индекс цен производителей (PPI) (г/г) (окт)'
            }
        ]
    },
    {
        date: 'Ноябрь 18',
        news: [
            {
                time: '09:00',
                special: false,
                country_flag: './images/icons/flags/usa.png',
                status: 'orange',
                title: 'ИПЦ Франции'
            },
            {
                time: '14:40',
                special: false,
                country_flag: './images/icons/flags/russia.png',
                status: 'red',
                title: 'PPI exFood/Energy MM'
            },
            {
                time: '16:45',
                special: false,
                country_flag: './images/icons/flags/russia.png',
                status: 'green',
                title: 'Речь члена FOMC Уильямса'
            },
            {
                time: '16:45',
                special: false,
                country_flag: './images/icons/flags/usa.png',
                status: 'orange',
                title: 'Базовый индекс цен производителей (PPI) (г/г) (окт)'
            }
        ]
    }
];

function setNewsToCalendar(list) {
    for (let i in list) {
        let fragment = '';
        list[i].news.forEach(item => {
            fragment += `
                <div class="news__row">
                    <p class="news__time ${item.special ? 'special' : ''}">${item.time}</p>
                    <img src="${item.country_flag}" alt='country-flag' />
                    <p class="news__status-dot ${item.status}"></p>
                    <p class="news__title">${item.title}</p>
                </div>
            `
        });

        $('.calendar__news')
            .append('<div class="news__container">' +
                '<div class= "news__row"><span class="text-sm-title">' + list[i].date + '</span></div > ' +
                fragment
                + '</div>'
                + '</div>'
            )

    }
};

setNewsToCalendar(newsToCalendar);