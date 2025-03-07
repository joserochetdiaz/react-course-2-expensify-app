import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


const now = moment();

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense  ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
  
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));        
        }
        
    } 
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide description and amount.'}));
        }else{
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            });
            this.setState(() => ({error: ''}));
        }
    }
    render (){
        return (

                <form className="form" onSubmit={this.onSubmit}>
                    {<p className="form__error">{this.state.error}</p> && this.state.error}
                    <input 
                        type="text"
                        placeholder = "Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type = "text"
                        placeholder = "Amount"
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                    />
                    <textarea
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                        className="text-area"
                        placeholder = "Add a note for your expense (optional)"
                    >
                    </textarea>
                    <div>
                        <button className="button">Add expense</button>
                    </div>
                </form>
        )
    }
}

export default ExpenseForm; 