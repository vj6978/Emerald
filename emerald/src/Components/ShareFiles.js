import React from 'react'
import { FilePond } from 'react-filepond';
import SharedFilesTable from './SharedFilesTable'
import './ShareFiles.css'

const ShareFiles = () =>
{
    return(
        <div>
            <h3>Share Files With The Team!</h3>
            <div className="card">
                <div className="card-body">
                    {/* Update server URL for file upload */}
                    <FilePond allowMultiple={true} server="" />
                </div>
            </div>
            <div>
                {
                    <SharedFilesTable></SharedFilesTable>
                }
            </div>
        </div>
    );
}

export default ShareFiles