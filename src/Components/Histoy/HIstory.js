import React from "react";
import styled from "styled-components";
import { useGlobal } from "../../context/Global";


function History() {
    const { transactionHistory } = useGlobal();
    const [...history] = transactionHistory();
    return (
       <HistoryStyle>
            <h3>Recent History</h3>
            {history.map((i) => {
                const {_id, title, amount, type} = i;
                return (
                    <div key={_id} className="hist-item">
                        <p style={{
                            color: type === "expense" ? "red" : "var(--color-green)"
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === "expense" ? "red" : "var(--color-green)"
                        }}>
                            {
                                type === "expense" ? `-${amount}` : `+${amount}` 
                            }
                        </p>
                    </div>
                )
            })}
       </HistoryStyle>
    )
}
const HistoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .hist-item{
        background: var(--color-item);
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export default History