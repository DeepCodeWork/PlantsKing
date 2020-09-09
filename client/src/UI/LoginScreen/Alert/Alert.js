import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Classes from './Alert.module.css';

const Alert = ({ alerts }) => alerts !== null && alerts.length >0 
    
    && alerts.map(alert=>{
        return <div key={alert.id} className={ `alert alert-${alert.alertType} ${Classes.alertBox}` } role="alert">
                {alert.msg}
            </div>
    })
    
alert.propTypes = {
    alerts : propTypes.object.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);