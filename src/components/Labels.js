import React, { Component } from 'react';
import { connect } from 'react-redux';




export class Labels extends Component {

    render() {
        return (
            <div className="fle-ceb">
                <div className="white-bor">
                    <p className="acc-tit">Accession Labes</p>
                    <div className="mar-g-g">
                        <input className="lit-input" type="text" placeholder="accession" />
                        <button className="grn-btn-new">Search</button>
                        <button className="clear-btn">Clear</button>
                    </div>

                    <div className="fle-tab-bar">
                        <p className="acc-tit barr">Barcode</p>
                        <p className="acc-tit specc">Specimen</p>
                        <p className="acc-tit ttype">Type</p>
                        <p className="acc-tit quntyyt">Quantity</p>
                    </div>

                    {
                        this.props.list.map((item, i) => {
                            return (
                                <div key={i} className="fle-item-lab">
                                    <div className="lab-it">
                                        <p className="barr">{item.barcode}</p>
                                        <p className="specc">{item.specimen}</p>
                                        <p className="ttype">{item.type}</p>
                                        <input className="lit-input-sm" type="text" value={item.qty}/>
                                    </div>
                                    <button className="red-btn-new">del</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: [{
        barcode: `190675678`,
        specimen: `SST`,
        type: `type`,
        qty: 4
    }]
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Labels)
