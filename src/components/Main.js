import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';



export class Main extends Component {
    constructor(props) {
        super(props);
        this.dateOptions = [`Today`, `Yesterday`, `2 Days Ago`];
        this.fastingOptions = [`Yes`, `No`, `Unknown`, `No Specimen`];
        this.statOptions = [`Yes`, `No`];
        this.orderType = [`IGS Initial`, `IGS Follow up`, `IGS Redraw`];
    }


    render() {
        return (
            <div className="padd15">
                <p className="side-t">Client Details</p>
                <div className="cli-det">
                    <div>
                        <p className="tit-ins">Client Location ID</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Physician ID</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Col. Date</p>
                        <div className="fl-date">
                            <div id="fir-da" className="sma">
                                <DropDown
                                    option={this.props.date}
                                    status={this.props.isDateOpen}
                                    menu={this.dateOptions}
                                    id="date" />
                            </div>
                            <input className="simple-input sma" type="text" placeholder="HH:mm" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">Fasting</p>
                        <div id="fir-da" className="sma">
                            <DropDown
                                option={this.props.fasting}
                                status={this.props.isFastingOpen}
                                menu={this.fastingOptions}
                                id="fasting" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">Stat</p>
                        <div id="fir-da" className="sma">
                            <DropDown
                                option={this.props.stat}
                                status={this.props.isStatOpen}
                                menu={this.statOptions}
                                id="stat" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">Electronic Order Number</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Order Type</p>
                        <div id="fir-da" className="sma">
                            <DropDown
                                option={this.props.orderType}
                                status={this.props.isOrderTypeOpen}
                                menu={this.orderType}
                                id="orderType" />
                        </div>
                    </div>
                </div>
                <div className="cli-det fl-sta">
                    <div id="fir-diag">
                        <p className="tit-ins">Diagnoses</p>
                        <input className="simple-input widee" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Specimens</p>
                        <input className="simple-input widee" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    date: state.dropdownOption.date,
    isDateOpen: state.dropdownStatus.date,
    fasting: state.dropdownOption.fasting,
    isFastingOpen: state.dropdownStatus.fasting,
    stat: state.dropdownOption.stat,
    isStatOpen: state.dropdownStatus.stat,
    orderType: state.dropdownOption.orderType,
    isOrderTypeOpen: state.dropdownStatus.orderType,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
