import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import Checkbox from './Checkbox';
import { changeFirstName, changeLastName, changeDob, changePhone, changeStreet, changeCity, changeState, changeZip, changeBarcode, clear, submitEAcc, getEacc } from '../store/actions/Efunc';
// import SearchInput from './SearchInput';



export class Efunc extends Component {
    constructor(props) {
        super(props);
        this.gens = [`Male`, `Female`];
    }

    render() {
        return (
            <div className="main-div">
                <h3>Enter Barcode:</h3>
                <div className="flex">
                    <input type="number" onChange={this.props.changeBarcode} value={this.props.acc.barCode ? this.props.acc.barCode : ""} className="simple-input" />
                    {/* <SearchInput
                        id="barCode"
                        type="text"
                        view="search-input"
                        url="e-accession"
                        onItemClick={this.props.getEAcc}
                        isLoading={this.props.isLoadEacc}
                        searchQuery={this.props.searchEacc}
                        searchResults={this.props.eaccs} /> */}
                    <div onClick={this.props.getEacc} className="grn-btn jgyt">OK</div>
                </div>

                <h3 className="fdfr">Patient Info:</h3>
                <div className="flex">
                    <div className="sert">
                        <p className="dfrt">First Name</p>
                        <input onChange={this.props.changeFirstName} value={this.props.acc.firstName ? this.props.acc.firstName : ""} className="simple-input" />
                        <p className="dfrt">Last Name</p>
                        <input onChange={this.props.changeLastName} value={this.props.acc.lastName ? this.props.acc.lastName : ""} className="simple-input" />
                        <p className="dfrt">Date of Birth</p>
                        <input onChange={this.props.changeDob} value={this.props.acc.dob ? this.props.acc.dob : ""} className="simple-input" />
                    </div>

                    <div className="sert">
                        <p className="dfrt">Gender</p>
                        <NewDropDown
                            id={`genderefunc`}
                            actionType="SET_EGEN_DROP_OPTION"
                            height="30px"
                            status={this.props.isOpenGen}
                            menu={this.gens}
                            option={this.props.acc.gender} />
                        <p className="dfrt">Phone</p>
                        <input onChange={this.props.changePhone} value={this.props.acc.phone ? this.props.acc.phone : ""} className="simple-input" />
                        <p className="dfrt">Street</p>
                        <input onChange={this.props.changeStreet} value={this.props.acc.street ? this.props.acc.street : ""} className="simple-input" />
                    </div>

                    <div className="sert">
                        <p className="dfrt">City</p>
                        <input onChange={this.props.changeCity} value={this.props.acc.city ? this.props.acc.city : ""} className="simple-input" />
                        <p className="dfrt">State</p>
                        <input onChange={this.props.changeState} value={this.props.acc.state ? this.props.acc.state : ""} className="simple-input" />
                        <p className="dfrt">Zip</p>
                        <input onChange={this.props.changeZip} value={this.props.acc.zip ? this.props.acc.zip : ""} className="simple-input" />
                    </div>
                </div>

                <div className="flex fgtgt">
                    <div className="fvbbb">
                        <Checkbox status={this.props.acc.testType === `Weight Management` ? 1 : 0} title="Weight Management" id="weight" />
                    </div>
                    <div className="fvbbb">
                        <Checkbox status={this.props.acc.testType === `Nutritional Deficiency` ? 1 : 0} title="Nutritional Deficiency" id="nutr" />
                    </div>
                    <div className="fvbbb">
                        <Checkbox status={this.props.acc.testType === `Telomers` ? 1 : 0} title="Telomers" id="telo" />
                    </div>
                </div>

                <div className="flex dfdfd">
                    <div onClick={this.props.clear} className="grey-btn">CLEAR</div>
                    <div onClick={this.props.submitEAcc} className="grn-btn jgyt">SUBMIT</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: state.eacc,
    isOpenGen: state.newDDStatus.genderefunc,
    isLoadEacc: state.searchLoading.barCode,
    searchEacc: state.searchQuery.barCode,
    eaccs: state.searchResults.barCode,
})

const mapDispatchToProps = dispatch => ({
    changeFirstName: e => dispatch(changeFirstName(e)),
    changeLastName: e => dispatch(changeLastName(e)),
    changeDob: e => dispatch(changeDob(e)),
    changePhone: e => dispatch(changePhone(e)),
    changeStreet: e => dispatch(changeStreet(e)),
    changeCity: e => dispatch(changeCity(e)),
    changeState: e => dispatch(changeState(e)),
    changeZip: e => dispatch(changeZip(e)),
    changeBarcode: e => dispatch(changeBarcode(e)),
    clear: () => dispatch(clear()),
    submitEAcc: () => dispatch(submitEAcc()),
    getEacc: (barCode) => dispatch(getEacc(barCode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
