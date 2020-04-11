import React from 'react';
import PDFViewer from './PDFViewer';
import PDFJSBackend from './backends/pdfjs.js';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <PDFViewer
                    backend={PDFJSBackend}
                    src='/MyHtmlResume.pdf'
                />
            </div>
        )
    }
}
export default Resume;