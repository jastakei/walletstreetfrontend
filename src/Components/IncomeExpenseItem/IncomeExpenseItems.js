import React from "react";
import styled from "styled-components";
import { calender, dollar,comment, trash, money, freelance,stocks,users,bitcoin,card,piggy,loans,food,medical,tv,takeaway,plane,car,utilities,house,glass,phone, computer,clothing, play, circle } from "../../utils/Icons";
import Button from "../Button/Button";
import { dateFormat } from "../../utils/dateFormat";



function IncomeExpenseItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type

}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'other':
                return piggy;
            default:
                return piggy;
        }
    }
    const expenseCatIcon = () => {
        switch (category) {
            case 'studentloans':
                return loans;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return plane;
            case 'carpay':
                return car;
            case 'creditcard':
                return card;
            case 'utilities':
                return utilities;
            case 'rent':
                return house;
            case 'goingout':
                return glass;
            case 'phone':
                return phone;
            case 'wifi':
                return computer; 
            case 'subscription':
                return play
            case 'other':
                return circle;
            default:
                return circle
        }
    }
    console.log(type)
    return (
        <IncomeItemStyle indicator={indicatorColor} >
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p> {comment} {description}</p>

                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyle>
    )
}
const IncomeItemStyle = styled.div`
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: .4rem;
        width: 100%;
        color: #222260;
        .icon{
            width: 80px;
            height: 80px;
            border-radius: 20px;
            background: rgba(255, 0, 0, 0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #FFFFFF;
            i{
                font-size: 2.3rem;
            }
        }

        .content{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: .2rem;
            h5{
                font-size: 1rem;
                padding-left: 2rem;
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: .8rem;
                    height: .8rem;
                    border-radius: 50%;
                    background: ${props => props.indicator};
                }
            }

            .inner-content{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .text{
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    p{
                        font-size: .9rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: var(--primary-color);
                        opacity: 0.8;
                    }
                }
            }
        }
`;
export default IncomeExpenseItem