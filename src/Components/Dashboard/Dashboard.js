import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/Chart";
import History from "../Histoy/HIstory";
import { dollar } from "../../utils/Icons";
import { useGlobal } from "../../context/Global";
import { useEffect } from "react";


function Dashboard() {
    const { totalExpense, incomes, expenses, totalIncome, getExpenses, getIncomes, totalBalance } = useGlobal();

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (

        <DashboardStyle>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                       <Chart />
                        <div className="amount-con"> 
                            <div className="income">
                                <h3>Total Income</h3>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h3>Total Expense</h3>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h3>Total Balance</h3>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h3 className="maxmin-title">Min<span>Income</span>Max</h3>
                        <div className="maxmin-item">
                            <p>
                                {incomes.length > 0 ? Math.min(...incomes.map(i => i.amount)) : 0}
                            </p>
                            <p>
                                {incomes.length > 0 ? Math.max(...incomes.map(i => i.amount)) : 0}
                            </p>
                        </div>
                        <h3 className="maxmin-title">Min<span>Expense</span>Max</h3>
                        <div className="maxmin-item">
                            <p>
                                {expenses.length > 0 ? Math.min(...expenses.map(i => i.amount)) : 0}
                            </p>
                            <p>
                                {expenses.length > 0 ? Math.max(...expenses.map(i => i.amount)) : 0}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </InnerLayout>
        </DashboardStyle>
    )
}
const DashboardStyle = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            margin-top: 1rem;
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .income, .expense, .balance{
                    background: var(--color-item);
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 3.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h3{
                margin: -.5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .maxmin-title{
                margin: 1rem 0;
                font-size: 1.1rem;
                span{
                    font-size: 1.5rem;
                }
            }
            .maxmin-item{
                background: var(--color-item);
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }

`;
export default Dashboard