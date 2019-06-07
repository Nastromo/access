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
        this.states = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `FL`, `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, `MD`, `MA`, `MI`, `MN`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VT`, `VA`, `WA`, `WV`, `WI`, `WY`];
        this.bills = [`Insurance`, `Patient`, `Client`];
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

                <p className="side-t top-ma">Patient Details</p>
                <div className="cli-det">
                    <div>
                        <p className="tit-ins">First Name</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Last Name</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Street</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">City</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">State</p>
                        <div id="fir-da" className="sma">
                            <DropDown
                                option={this.props.state}
                                status={this.props.isStateOpen}
                                menu={this.states}
                                id="state" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">Zip</p>
                        <input className="simple-input" type="text" />
                    </div>
                </div>
                <div className="cli-det">
                    <div>
                        <p className="tit-ins">M. Name</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">DOB</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Sex</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Phone</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p className="tit-ins">Bill To</p>
                        <div id="fir-da" className="sma">
                            <DropDown
                                option={this.props.bills}
                                status={this.props.isBillsOpen}
                                menu={this.bills}
                                id="bills" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">Patient Chart #</p>
                        <input className="simple-input" type="text" />
                    </div>
                </div>

                <div className="or-set">
                    <p className="tit-ins">Order Sets</p>
                    <input className="long-input" type="text" />

                    <p className="tit-ins mar-to">Additional Information</p>
                    <textarea
                        className="gross-other"
                        value={this.props.comment}
                        onChange={this.handleChange}
                    ></textarea>

                    <p className="tit-ins mar-to">WARNINGS</p>
                    <p className="tit-ins mar-to">No any warnings...</p>
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
    state: state.dropdownOption.state,
    isStateOpen: state.dropdownStatus.state,
    bills: state.dropdownOption.bills,
    isBillsOpen: state.dropdownStatus.bills,



})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
