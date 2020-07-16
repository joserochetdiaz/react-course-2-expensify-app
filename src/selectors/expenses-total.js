export default ((expenses) => {
    return expenses
            .map((expense , index) => expense.amount)
            .reduce((sum, value) => sum + value, 0);
});