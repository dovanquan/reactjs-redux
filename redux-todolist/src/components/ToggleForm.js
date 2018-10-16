import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToggleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.handleAdd = this.handleAdd.bind(this);

        // props.onClickSearchGo
    }

    handleAdd(){
        this.props.onClickAdd();
    }

    render() {
        const { isShowForm } = this.props;
        let btnName = (isShowForm === true) ? "Open form" : "Close form";
        let btnClass = (isShowForm === true) ? "btn-info" : "btn-success";

        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">{btnName}</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

export default connect(mapStateToProps,null)(ToggleForm);
