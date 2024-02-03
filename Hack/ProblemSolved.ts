function smallestNegativeBalance(debts: string[][]): string[] {
    const balances: { [key: string]: number } = {};
    // Calculate balances for each person
    for (const [borrower, lender, amountStr] of debts) {
        const amount = parseInt(amountStr);
        balances[borrower] = (balances[borrower] || 0) - amount;
        balances[lender] = (balances[lender] || 0) + amount;
    }

    console.log(balances);
    // Find persons with negative balances
    const negativeBalances = Object.entries(balances)
        .filter(([_, balance]) => balance < 0)
        .sort((a, b) => a[1] - b[1]);

    // Find persons with the smallest negative balance
    const smallestBalance = negativeBalances.length > 0 ? negativeBalances[0][1] : 0;
    const smallestDebtors = negativeBalances.filter(([, balance]) => balance === smallestBalance);
    return smallestDebtors.map(([debtor]) => debtor);
}

var example = [
    ["Alex","Blake","2"],
    ["Blake","Alex","2"],
    ["Casey","Alex","5"],
    ["Blake","Alex","4"],
    ["Alex","Blake","7"],
    ["Alex","Casey","1"],
]
smallestNegativeBalance(example)
