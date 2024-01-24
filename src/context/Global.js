import React, { useContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5500/api/v1/"


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

   
   
   



    //called in form to post incomes to database
    const addIncome = async (income) => {
        //console.log("addincome")
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
            getIncomes();
    }
    // gets incomes from database
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        .catch((err) =>{
            setError(err.response.data.message)
        });
        setIncomes(response.data);
    }
    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes();
    }

    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total+= income.amount
        })
        return total
    }


     //called in expense form to post expenses to database
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) =>{
                setError(err.response.data.message)
            })
            getExpenses();
    }
    // gets incomes from database
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        .catch((err) =>{
            setError(err.response.data.message)
        });
        setExpenses(response.data);
    }
    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses();
    }

    const totalExpense = () => {
        let totalE = 0;
        expenses.forEach((expense) => {
            totalE+= expense.amount
        })
        return totalE
    }
    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history.slice(0,3)
    }

    
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () =>{
    return useContext(GlobalContext)
}