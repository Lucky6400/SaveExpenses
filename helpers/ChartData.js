export function getExpensesByMonth(expenses) {
    const modifiedObject = {};
    if (expenses.length > 0) {

        expenses.forEach(transaction => {
            const transactionDate = new Date(transaction.date);
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];

            console.log(months);

            const month = months[transactionDate.getMonth()];
            const amount = parseInt(transaction.price);

            if (modifiedObject.hasOwnProperty(month)) {
                modifiedObject[month] += amount;
            } else {
                modifiedObject[month] = amount;
            }
        });

        return modifiedObject;
    }

    return modifiedObject
}

export function getExpensesByCategory(expenses) {
    const modifiedObject = {};
    if(expenses.length === 0) return modifiedObject;


    expenses.forEach(transaction => {
        const category = transaction.category.name;
        const amount = parseInt(transaction.price);

        if (modifiedObject.hasOwnProperty(category)) {
            modifiedObject[category].amount += amount;
        } else {
            modifiedObject[category] = {
                color: transaction.category.color,
                amount: amount
            };
        }
    });

    return modifiedObject;
}

export const totalSum = (arr) => {
    let amount = 0;

    for (let elem of arr) {
        amount += parseInt(elem.price)
    }

    return amount;
}