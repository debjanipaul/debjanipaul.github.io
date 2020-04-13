import React from 'react';
import PDFViewer from './PDFViewer';
import PDFJSBackend from './backends/pdfjs.js';
import MyHtmlResume from './pdfs/MyHtmlResume.pdf';

class Resume extends React.Component {
    render() {
        console.log('*** Resume URL ***: ' + process.env.PUBLIC_URL + '/MyHtmlResume.pdf')
        return (
            <div>
                <PDFViewer
                    backend={PDFJSBackend}
                    src={process.env.PUBLIC_URL + '/MyHtmlResume.pdf'}
                // src={MyHtmlResume}
                />
            </div>
        )
    }
}
export default Resume;