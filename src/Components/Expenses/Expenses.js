import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobal } from "../../context/Global";
import ExpenseForm from "../Forms/ExpenseForm";
import IncomeExpenseItem from "../IncomeExpenseItem/IncomeExpenseItems";


function Expenses() {
    const {expenses, getExpenses, deleteExpense, totalExpense} = useGlobal();
    useEffect(() => {
        getExpenses()
    },[expenses])
    return (
        <ExpensesStyle>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expense: <span>${totalExpense()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">  
                        <ExpenseForm />  
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) => {
                            const {_id, title, amount, date, type, category, description } = expense;
                            return <IncomeExpenseItem 
                                key={_id}
                                id={_id}
                                title={title}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                description={description}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />

                        })}
                    </div>

                </div>
            </InnerLayout>
        </ExpensesStyle>
    )
}
const ExpensesStyle = styled.div`

    display: flex;
    overflow: auto;
        .expense-content{
            display: flex;
            gap: 1rem;
            .expenses{
                flex: 1;
            }
        }
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    }
`;
export default Expenses;