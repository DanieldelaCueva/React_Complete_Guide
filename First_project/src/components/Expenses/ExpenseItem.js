import React, {useState} from 'react';

import ExpenseDate  from './ExpenseDate';
import './ExpenseItem.css';
import Card  from '../UI/Card';

const ExpenseItem = (props) => {
    return(
        <li>
            <Card className="expense-item"> 
                <ExpenseDate expenseDate={props.expenseDate}/>
                <div className="expense-item__description">
                    <h2>{props.expenseItem}</h2>
                    <div className="expense-item__price">{props.expenseAmount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;