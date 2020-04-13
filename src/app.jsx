import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import Header from './header';
import Hero from './heroPage';
import About from './about';
import Project from './projects';
import Articles from './articles';
import Contact from './contact';
import Resume from './resume';
// import PDFViewer from './PDFViewer';
// import PDFJSBackend from './backends/pdfjs.js';



class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Hero} />
                <Route path="/aboutMe" component={About} />
                <Route path="/projects" component={Project} />
                <Route path="/articles" component={Articles} />
                <Route path="/resume" component={Resume} />
                {/* <Route path="/resume" render={() => <PDFViewer backend={PDFJSBackend} src='/MyHtmlResume.pdf' />} /> */}
                <Route path="/contactMe" component={Contact} />
            </Switch>

        )
    }
}
export default App;