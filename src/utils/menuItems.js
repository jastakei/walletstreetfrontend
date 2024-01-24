import { house, transactions, trend, expenses } from "./Icons"
export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: house,
        link: '/dashboard',
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transactions,
        link: '/transactions',
    },
    {
        id: 3,
        title: 'Income',
        icon: trend,
        link: '/income',
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses',
    }
]