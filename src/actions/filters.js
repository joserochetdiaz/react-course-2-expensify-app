//Set Text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Set amount filter
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

//Set date filter
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

//Set start date 
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
})

//set end date 
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
})