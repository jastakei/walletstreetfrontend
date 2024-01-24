import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobal } from "../../context/Global";
import IncomeForm from "../Forms/IncomeForm";
import IncomeExpenseItem from "../IncomeExpenseItem/IncomeExpenseItems";


function Incomes() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobal();
    useEffect(() => {
        getIncomes()
    },[incomes])
    return (
        <IncomesStyle>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">  
                        <IncomeForm />  
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, type, category, description } = income;
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
                                deleteItem={deleteIncome}
                            />

                        })}
                    </div>

                </div>
            </InnerLayout>
        </IncomesStyle>
    )
}
const IncomesStyle = styled.div`

    display: flex;
    overflow: auto;
        .income-content{
            display: flex;
            gap: 1rem;
            .incomes{
                flex: 1;
            }
        }
    .total-income{
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
export default Incomes;