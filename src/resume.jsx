import React from 'react';
import PDFViewer from './PDFViewer';
import PDFJSBackend from './backends/pdfjs.js';
import MyHtmlResume from './pdfs/MyHtmlResume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <PDFViewer
                    backend={PDFJSBackend}
                    src={MyHtmlResume}
                />
            </div>
        )
    }
}
export default Resume;