import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import {
    changeIns,
    changeBiilStr,
    changeBillCity,
    changeBillZip,
    changeLocId,
    changePhisId,
    changeTime,
    changeDiag,
    changeSpec,
    changeFirst,
    changeLast,
    changeMname,
    changeDob,
    changeChart,
    changeSet,
    changeStreet,
    changeCity,
    changeZip,
    changePhone,
    handleAddInfo,
    changeEon,
    createAccession,
    delDiag,
    addDiag,
    delSpec,
    addSpec,
    delSet,
    addSet,
    handleDelete,
    handleTimeDelete,
    handlePolicy,
    handleCode,
    rel2Ins,
    getIns,
    delIns
} from '../store/actions/Acc';
import SearchInput from './SearchInput';


// const arr = JSON.stringify([{ code: "fdfd", name: "Test", option: "some", policy: "some policy" }]);

export class Main extends Component {
    constructor(props) {
        super(props);
        this.dateOptions = [`Today`, `Yesterday`, `2 Days Ago`];
        this.fastingOptions = [`Yes`, `No`, `Unknown`];
        this.statOptions = [`Yes`, `No`];
        this.orderType = [``, `IGS Initial`, `IGS Follow up`, `IGS Redraw`, `IGS Lite`];
        this.states = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `FL`, `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, `MD`, `MA`, `MI`, `MN`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VT`, `VA`, `WA`, `WV`, `WI`, `WY`];
        this.bills = [`Insurance`, `Patient`, `Client`];
        this.sex = [`Female`, `Male`, `Unknown`];
        this.numbers = [2, 3, 4, 5, 6, 10, 12];
        this.rels = [`Self`, `Spouce`, `Child`];
    }



    returnIns = () => {
        const list = JSON.parse(this.props.acc.insurances ? this.props.acc.insurances : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex ju-space mar4">
                    <input className="sm37-f" id={i} value={item.companyName} onChange={this.props.handleCode} />

                    <input className="sm37-f" id={i} value={item.rel2Ins ? item.rel2Ins : ""} onChange={this.props.rel2Ins} />

                    <input className="sm-f" id={i} value={item.policy ? item.policy : ""} onChange={this.props.handlePolicy} />

                    <div onClick={this.props.delIns} id={i} className="delete-sml"></div>
                </div>
            )
        });
    }

    returnBillTo = (option) => {
        switch (option) {
            case `Insurance`:
                return (
                    <div className="widzs">
                        <p className="tit-ins">Insurances</p>
                        <SearchInput
                            id="insurances"
                            type="text"
                            view="search-input"
                            url="insurances"
                            onItemClick={this.props.getIns}
                            isLoading={this.props.isLoadIns}
                            searchQuery={this.props.searchIns}
                            searchResults={this.props.insurances} />

                        <div className="fle-gre-d">
                            <p className="tit-ins">Name</p>
                            <p className="tit-ins">Rel 2 Ins</p>
                            <p className="tit-ins">Policy</p>
                            <p className="tit-ins">Primary</p>
                        </div>
                        <div>
                            {this.returnIns()}
                        </div>
                    </div>
                );

            case `Patient`:
                return (
                    <div className="widzs">
                        <p className="tit-ins">Billing Streets</p>
                        <input className="simple-input wi100pre" value={this.props.acc.billingStreets ? this.props.acc.billingStreets : ""} onChange={this.props.changeBiilStr} />
                        <p className="tit-ins">Billing City/State/Zip</p>
                        <div className="flell">
                            <input className="simple-input wi100pre" value={this.props.acc.billingCity ? this.props.acc.billingCity : ""} onChange={this.props.changeBillCity} />
                            <DropDown
                                option={this.props.acc.billingState}
                                status={this.props.isBilLStatesOpen}
                                menu={this.states}
                                id="billStates" />
                            <input className="simple-input wi100pre" value={this.props.acc.billingZip ? this.props.acc.billingZip : ""} onChange={this.props.changeBillZip} />
                        </div>
                    </div>
                )
            default: break;
        }
    }

    delDiag = (e) => {
        this.props.delDiag(Number(e.target.id));
    }

    returnDiags = () => {
        const list = JSON.parse(this.props.acc.diagnoses ? this.props.acc.diagnoses : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex">
                    <div className="item-row">{item}</div>
                    <div onClick={this.delDiag} id={i} className="delete-sml"></div>
                </div>
            )
        });
    }

    delSpec = (e) => {
        this.props.delSpec(Number(e.target.id));
    }

    returnSpecs = () => {
        const list = JSON.parse(this.props.acc.specimens ? this.props.acc.specimens : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex">
                    <div className="item-row">{item}</div>
                    <div onClick={this.delSpec} id={i} className="delete-sml"></div>
                </div>
            )
        });
    }

    delSet = (e) => {
        this.props.delSet(Number(e.target.id));
    }

    returnSets = () => {
        const list = JSON.parse(this.props.acc.orderSets ? this.props.acc.orderSets : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex">
                    <div className="item-row">{item}</div>
                    <div onClick={this.delSet} id={i} className="delete-sml"></div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="padd15">
                <div className="fle-n-dd">
                    <div>
                        <p className="side-t">Client Details</p>
                        <p className="tit-ins gg">Client Location ID</p>
                        <input className="simple-input widkkk" value={this.props.acc.clientLocationId ? this.props.acc.clientLocationId : ""} onChange={this.props.changeLocId} />
                        <p className="tit-ins">Physician ID</p>
                        <input className="simple-input widkkk" value={this.props.acc.physicianId ? this.props.acc.physicianId : ""} onChange={this.props.changePhisId} />
                        <div className="fle-n-dd">
                            <div className="gg ll">
                                <p className="tit-ins">Col. Date</p>
                                <div className="fl-date">
                                    <div id="fir-da" className="sma">
                                        <DropDown
                                            option={this.props.acc.colDate}
                                            status={this.props.isDateOpen}
                                            menu={this.dateOptions}
                                            id="date" />
                                    </div>
                                    <input className="simple-input sma" value={this.props.acc.time ? this.props.acc.time : ""} onChange={this.props.changeTime} onKeyDown={this.props.handleTimeDelete} placeholder="HH:mm" />
                                </div>
                            </div>
                            <div className="gg">
                                <p className="tit-ins">Fasting</p>
                                <div id="fir-da" className="sma">
                                    <DropDown
                                        option={this.props.acc.fasting}
                                        status={this.props.isFastingOpen}
                                        menu={this.fastingOptions}
                                        id="fasting" />
                                </div>
                            </div>
                            <div className="gg">
                                <p className="tit-ins">Stat</p>
                                <div id="fir-da" className="sma">
                                    <DropDown
                                        option={this.props.acc.stat}
                                        status={this.props.isStatOpen}
                                        menu={this.statOptions}
                                        id="stat" />
                                </div>
                            </div>
                        </div>
                        <div className="fle-n-dd">
                            <div>
                                <p className="tit-ins">Electronic Order Number</p>
                                <input className="simple-input kk302" value={this.props.acc.eon ? this.props.acc.eon : ""} onChange={this.props.changeEon} />
                            </div>
                            <div>
                                <p className="tit-ins">Order Type</p>
                                <div id="fir-da" className="smagg">
                                    <DropDown
                                        option={this.props.acc.orderType}
                                        status={this.props.isOrderTypeOpen}
                                        menu={this.orderType}
                                        id="orderType" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div id="fir-diag">
                                <p className="tit-ins">Diagnoses</p>
                                <SearchInput
                                    id="diagnoses"
                                    type="text"
                                    view="search-input"
                                    url="diagnoses"
                                    onItemClick={this.props.addDiag}
                                    isLoading={this.props.isLoadDiag}
                                    searchQuery={this.props.searchDiag}
                                    searchResults={this.props.diagnoses} />
                                <div className="over130px">
                                    {this.returnDiags()}
                                </div>
                            </div>
                            <div>
                                <p className="tit-ins">Specimens</p>
                                <SearchInput
                                    id="specimens"
                                    type="text"
                                    view="search-input"
                                    url="specimens"
                                    onItemClick={this.props.addSpec}
                                    isLoading={this.props.isLoadSpec}
                                    searchQuery={this.props.searchSpec}
                                    searchResults={this.props.specimens} />
                                <div className="over130px">
                                    {this.returnSpecs()}
                                </div>
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
                                        <input className="simple-input l620" value={this.props.acc.firstName ? this.props.acc.firstName : ""} onChange={this.props.changeFirst} />
                                    </div>
                                    <div>
                                        <p className="tit-ins">Last Name</p>
                                        <input className="simple-input l620" value={this.props.acc.lastName ? this.props.acc.lastName : ""} onChange={this.props.changeLast} />
                                    </div>
                                    <div className="fle-n-dd">
                                        <div>
                                            <p className="tit-ins">M. Name</p>
                                            <input className="simple-input sma-150 ma-ri-10" value={this.props.acc.mName ? this.props.acc.mName : ""} onChange={this.props.changeMname} />
                                        </div>
                                        <div>
                                            <p className="tit-ins">DOB</p>
                                            <input className="simple-input sma-150 ma-ri-10" value={this.props.acc.dob ? this.props.acc.dob : ""} onKeyDown={this.props.handleDelete} onChange={this.props.changeDob} />
                                        </div>
                                        <div>
                                            <p className="tit-ins">Sex</p>
                                            <div id="fir-da" className="sma sma-150">
                                                <DropDown
                                                    option={this.props.acc.sex}
                                                    status={this.props.isSexOpen}
                                                    menu={this.sex}
                                                    id="sex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="tit-ins">Patient Chart #</p>
                                        <input className="simple-input wifol" value={this.props.acc.patientChart ? this.props.acc.patientChart : ""} onChange={this.props.changeChart} />
                                    </div>
                                    <div className="or405">
                                        <p className="tit-ins">Order Sets</p>
                                        <SearchInput
                                            id="sets"
                                            type="text"
                                            view="search-input"
                                            url="sets"
                                            onItemClick={this.props.addSet}
                                            isLoading={this.props.isLoadSet}
                                            searchQuery={this.props.searchSet}
                                            searchResults={this.props.sets} />
                                        <div className="over130px">
                                            {this.returnSets()}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="tit-ins">Street</p>
                                        <input className="simple-input l620" value={this.props.acc.street ? this.props.acc.street : ""} onChange={this.props.changeStreet} />
                                    </div>
                                    <div className="fle-n-dd">
                                        <div>
                                            <p className="tit-ins">City</p>
                                            <input className="simple-input sma-150 ma-ri-10" value={this.props.acc.city ? this.props.acc.city : ""} onChange={this.props.changeCity} />
                                        </div>
                                        <div>
                                            <p className="tit-ins">State</p>
                                            <div id="fir-da" className="sma sma-150">
                                                <DropDown
                                                    option={this.props.acc.state}
                                                    status={this.props.isStateOpen}
                                                    menu={this.states}
                                                    id="state" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="tit-ins">Zip</p>
                                            <input className="simple-input sma-150 ma-ri-10" value={this.props.acc.zip ? this.props.acc.zip : ""} onChange={this.props.changeZip} />
                                        </div>
                                    </div>
                                    <div className="fle-n-dd">
                                        <div className="ma-ri-10">
                                            <p className="tit-ins">Phone</p>
                                            <input className="simple-input wer250" value={this.props.acc.phone ? this.props.acc.phone : ""} onChange={this.props.changePhone} />
                                        </div>
                                        <div className="wer230">
                                            <p className="tit-ins">Bill To</p>
                                            <div id="fir-da" className=" wer230">
                                                <DropDown
                                                    option={this.props.acc.billTo}
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
                                            value={this.props.acc.addInfo ? this.props.acc.addInfo : ""}
                                            onChange={this.props.handleAddInfo}
                                        ></textarea>

                                        <p className="tit-ins mar-to">WARNINGS</p>
                                        <p className="tit-ins mar-to">No any warnings...</p>
                                    </div>
                                </div>
                                {this.returnBillTo(this.props.acc.billTo)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="derio">
                    {/* <p className="tit-ins">Printer:</p>
                    <div className="wi150px">
                        <DropDown
                            option={this.props.numbers}
                            status={this.props.isNumbOpen}
                            menu={this.numbers}
                            id="numbers" />
                    </div> */}
                    <input className="simple-input wi50re" type="text" defaultValue={2} />
                    <button onClick={this.props.createAccession} className="create-b">Create</button>
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
    acc: state.acc,

    isLoadDiag: state.searchLoading.diagnoses,
    searchDiag: state.searchQuery.diagnoses,
    diagnoses: state.searchResults.diagnoses,
    diagList: state.diagList,

    isLoadSpec: state.searchLoading.specimens,
    searchSpec: state.searchQuery.specimens,
    specimens: state.searchResults.specimens,
    specList: state.specList,

    isLoadSet: state.searchLoading.sets,
    searchSet: state.searchQuery.sets,
    sets: state.searchResults.sets,
    setList: state.setList,

    isLoadIns: state.searchLoading.insurances,
    searchIns: state.searchQuery.insurances,
    insurances: state.searchResults.insurances,
    insList: state.insList,
})

const mapDispatchToProps = dispatch => ({
    changeIns: (e) => dispatch(changeIns(e)),
    changeBiilStr: (e) => dispatch(changeBiilStr(e)),
    changeBillCity: (e) => dispatch(changeBillCity(e)),
    changeBillZip: (e) => dispatch(changeBillZip(e)),
    changeLocId: (e) => dispatch(changeLocId(e)),
    changePhisId: (e) => dispatch(changePhisId(e)),
    changeTime: (e) => dispatch(changeTime(e)),
    changeDiag: (e) => dispatch(changeDiag(e)),
    changeSpec: (e) => dispatch(changeSpec(e)),
    changeFirst: (e) => dispatch(changeFirst(e)),
    changeLast: (e) => dispatch(changeLast(e)),
    changeMname: (e) => dispatch(changeMname(e)),
    changeDob: (e) => dispatch(changeDob(e)),
    changeChart: (e) => dispatch(changeChart(e)),
    changeSet: (e) => dispatch(changeSet(e)),
    changeStreet: (e) => dispatch(changeStreet(e)),
    changeCity: (e) => dispatch(changeCity(e)),
    changeZip: (e) => dispatch(changeZip(e)),
    changePhone: (e) => dispatch(changePhone(e)),
    handleAddInfo: (e) => dispatch(handleAddInfo(e)),
    changeEon: (e) => dispatch(changeEon(e)),
    createAccession: () => dispatch(createAccession()),
    delDiag: (index) => dispatch(delDiag(index)),
    addDiag: (text) => dispatch(addDiag(text)),
    delSpec: (index) => dispatch(delSpec(index)),
    addSpec: (text) => dispatch(addSpec(text)),
    delSet: (index) => dispatch(delSet(index)),
    addSet: (text) => dispatch(addSet(text)),
    handleDelete: (e) => dispatch(handleDelete(e)),
    handleTimeDelete: (e) => dispatch(handleTimeDelete(e)),
    handlePolicy: (e) => dispatch(handlePolicy(e)),
    handleCode: (e) => dispatch(handleCode(e)),
    rel2Ins: (e) => dispatch(rel2Ins(e)),
    getIns: (text) => dispatch(getIns(text)),
    delIns: (index) => dispatch(delIns(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
