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
        this.sex = [`Female`, `Male`];
        this.numbers = [2, 3, 4, 5, 6, 10, 12];
    }

    returnBillTo = (option) => {
        switch (option) {
            case `Insurance`:
                return (
                    <div className="widzs">
                        <p className="tit-ins">Insurances</p>
                        <input className="simple-input wi100pre" type="text" />
                        <div className="fle-gre-d">
                            <p className="tit-ins">Code</p>
                            <p className="tit-ins">Name</p>
                            <p className="tit-ins">Rol 2 Ins</p>
                            <p className="tit-ins">Policy</p>
                            <p className="tit-ins">Primary</p>
                        </div>
                    </div>
                );

            case `Patient`:
                return (
                    <div className="widzs">
                        <p className="tit-ins">Billing Streets</p>
                        <input className="simple-input wi100pre" type="text" />
                        <p className="tit-ins">Billing City/State/Zip</p>
                        <div className="flell">
                            <input className="simple-input wi100pre" type="text" />
                            <DropDown
                                option={this.props.billStates}
                                status={this.props.isBilLStatesOpen}
                                menu={this.states}
                                id="billStates" />
                            <input className="simple-input wi100pre" type="text" />
                        </div>
                    </div>
                )
            default: break;
        }
    }

    render() {
        return (
            <div className="padd15">
                <div className="fle-n-dd">
                    <div>
                        <p className="side-t">Client Details</p>
                        <p className="tit-ins gg">Client Location ID</p>
                        <input className="simple-input widkkk" type="text" />
                        <p className="tit-ins">Physician ID</p>
                        <input className="simple-input widkkk" type="text" />
                        <div className="fle-n-dd">
                            <div className="gg ll">
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
                            <div className="gg">
                                <p className="tit-ins">Fasting</p>
                                <div id="fir-da" className="sma">
                                    <DropDown
                                        option={this.props.fasting}
                                        status={this.props.isFastingOpen}
                                        menu={this.fastingOptions}
                                        id="fasting" />
                                </div>
                            </div>
                            <div className="gg">
                                <p className="tit-ins">Stat</p>
                                <div id="fir-da" className="sma">
                                    <DropDown
                                        option={this.props.stat}
                                        status={this.props.isStatOpen}
                                        menu={this.statOptions}
                                        id="stat" />
                                </div>
                            </div>
                        </div>
                        <div className="fle-n-dd">
                            <div>
                                <p className="tit-ins">Electronic Order Number</p>
                                <input className="simple-input kk302" type="text" />
                            </div>
                            <div>
                                <p className="tit-ins">Order Type</p>
                                <div id="fir-da" className="smagg">
                                    <DropDown
                                        option={this.props.orderType}
                                        status={this.props.isOrderTypeOpen}
                                        menu={this.orderType}
                                        id="orderType" />
                                </div>
                            </div>
                        </div>

                        <div>
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

                    <div>
                        <p className="side-t">Patient Details</p>
                        <div className="cli-det">
                            <div className="fle-n-dd">
                                <div>
                                    <div>
                                        <p className="tit-ins">First Name</p>
                                        <input className="simple-input l620" type="text" />
                                    </div>
                                    <div>
                                        <p className="tit-ins">Last Name</p>
                                        <input className="simple-input l620" type="text" />
                                    </div>
                                    <div className="fle-n-dd">
                                        <div>
                                            <p className="tit-ins">M. Name</p>
                                            <input className="simple-input sma-150 ma-ri-10" type="text" />
                                        </div>
                                        <div>
                                            <p className="tit-ins">DOB</p>
                                            <input className="simple-input sma-150 ma-ri-10" type="text" />
                                        </div>
                                        <div>
                                            <p className="tit-ins">Sex</p>
                                            <div id="fir-da" className="sma sma-150">
                                                <DropDown
                                                    option={this.props.sex}
                                                    status={this.props.isSexOpen}
                                                    menu={this.sex}
                                                    id="sex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="tit-ins">Patient Chart #</p>
                                        <input className="simple-input wifol" type="text" />
                                    </div>
                                    <p className="tit-ins">Order Sets</p>
                                    <input className="long-input wifol" type="text" />
                                </div>
                                <div>
                                    <div>
                                        <p className="tit-ins">Street</p>
                                        <input className="simple-input l620" type="text" />
                                    </div>
                                    <div className="fle-n-dd">
                                        <div>
                                            <p className="tit-ins">City</p>
                                            <input className="simple-input sma-150 ma-ri-10" type="text" />
                                        </div>
                                        <div>
                                            <p className="tit-ins">State</p>
                                            <div id="fir-da" className="sma sma-150">
                                                <DropDown
                                                    option={this.props.state}
                                                    status={this.props.isStateOpen}
                                                    menu={this.states}
                                                    id="state" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="tit-ins">Zip</p>
                                            <input className="simple-input sma-150 ma-ri-10" type="text" />
                                        </div>
                                    </div>
                                    <div className="fle-n-dd">
                                        <div className="ma-ri-10">
                                            <p className="tit-ins">Phone</p>
                                            <input className="simple-input wer250" type="text" />
                                        </div>
                                        <div className="wer230">
                                            <p className="tit-ins">Bill To</p>
                                            <div id="fir-da" className=" wer230">
                                                <DropDown
                                                    option={this.props.bills}
                                                    status={this.props.isBillsOpen}
                                                    menu={this.bills}
                                                    id="bills" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="or-set">
                                        <p className="tit-ins">Additional Information</p>
                                        <textarea
                                            className="gross-other"
                                            value={this.props.comment}
                                            onChange={this.handleChange}
                                        ></textarea>

                                        <p className="tit-ins mar-to">WARNINGS</p>
                                        <p className="tit-ins mar-to">No any warnings...</p>
                                    </div>
                                </div>
                                {this.returnBillTo(this.props.bills)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="derio">
                    <div className="wi150px">
                        <DropDown
                            option={this.props.numbers}
                            status={this.props.isNumbOpen}
                            menu={this.numbers}
                            id="numbers" />
                    </div>
                    <input className="simple-input wi50re" type="text" placeholder="0" />
                    <button className="create-b">Create</button>
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
    sex: state.dropdownOption.sex,
    isSexOpen: state.dropdownStatus.sex,
    numbers: state.dropdownOption.numbers,
    isNumbOpen: state.dropdownStatus.numbers,
    billStates: state.dropdownOption.billStates,
    isBilLStatesOpen: state.dropdownStatus.billStates,
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
