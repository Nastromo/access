import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import Checkbox from './Checkbox';



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
                    <input type="number" className="simple-input" />
                    <div className="grn-btn jgyt">OK</div>
                </div>

                <h3 className="fdfr">Patient Info:</h3>
                <div className="flex">
                    <div className="sert">
                        <p className="dfrt">First Name</p>
                        <input className="simple-input" />
                        <p className="dfrt">Last Name</p>
                        <input className="simple-input" />
                        <p className="dfrt">Date of Birth</p>
                        <input className="simple-input" />
                    </div>

                    <div className="sert">
                        <p className="dfrt">Gender</p>
                        <NewDropDown
                            id={`genderefunc`}
                            actionType="SET_INS_DROP_OPTION"
                            height="30px"
                            status={false}
                            menu={this.gens}
                            option={this.props.acc} />
                        <p className="dfrt">Phone</p>
                        <input className="simple-input" />
                        <p className="dfrt">Street</p>
                        <input className="simple-input" />
                    </div>

                    <div className="sert">
                        <p className="dfrt">City</p>
                        <input className="simple-input" />
                        <p className="dfrt">State</p>
                        <input className="simple-input" />
                        <p className="dfrt">Zip</p>
                        <input className="simple-input" />
                    </div>
                </div>

                <div className="flex fgtgt">
                    <div className="fvbbb">
                        <Checkbox status={true} title="Weight Management" id="weight" />
                    </div>
                    <div className="fvbbb">
                        <Checkbox status={true} title="Nutritional Deficiency" id="nutr" />
                    </div>
                    <div className="fvbbb">
                        <Checkbox status={true} title="Telomers" id="telo" />
                    </div>
                </div>

                <div className="flex dfdfd">
                    <div className="grey-btn">CLEAR</div>
                    <div className="grn-btn jgyt">SUBMIT</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
