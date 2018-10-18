import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';
import ToggleForm from './components/ToggleForm';
import {filter, includes, remove, reject } from 'lodash';

const uuidv4 = require('uuid/v4');

class App extends Component {
    state = {
        items       : [],
        isShowForm  : false,
        strSearch   : '',
        orderBy     : 'name',
        orderDir    : 'asc',
        itemSelected: null
    };
        
    constructor(props) {
        super(props);

        this.handleDelete         = this.handleDelete.bind(this);   
        this.handleSubmit         = this.handleSubmit.bind(this);  
        this.handleEdit         = this.handleEdit.bind(this);  
    }

    handleSubmit(item){
        let {items} = this.state;
        let id      = null;

        if(item.id !== '') { //edit
            items = reject(items, { id: item.id});
            id = item.id;
        } else { // add
            id = uuidv4();
        }

        items.push({
            id      : id,
            name    : item.name,
            level   : +item.level
        })

        this.setState({
            items: items,
            isShowForm: false
        });

        localStorage.setItem('task', JSON.stringify(items));

    }

    handleEdit(item){
        this.setState({
            itemSelected: item,
            isShowForm: true
        });
    }

    handleDelete(id){
        let items = this.state.items;
        remove(items, (item)=> {
            return item.id === id;
        });
        this.setState({
            items: items
        });

        localStorage.setItem('task', JSON.stringify(items));
    }

    render() {
        let itemsOrigin = (this.state.items !== null) ? [...this.state.items] : [];
        let {itemSelected}     = this.state;

        return (
            <div>
                <Title/>
                <div className="row">
                    <Search />
                    <Sort />
                    <ToggleForm />
                </div>
                <Form
                    itemSelected={itemSelected}
                    onClickSubmit={this.handleSubmit}
                />
                <List
                    onClickEdit={this.handleEdit}
                    onClickDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default App;
