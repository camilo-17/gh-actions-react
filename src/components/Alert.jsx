//rfce
import React from 'react';
import { Alert } from 'shards-react';
function AlertComponent() {
    return (
        <div>
            <Alert theme="primary">
                Alert - Primary Theme (default) -{' '}
                <a className="alert-link" href="#">
                    Example Link
                </a>
            </Alert>
        </div>
    );
}

export default AlertComponent;
