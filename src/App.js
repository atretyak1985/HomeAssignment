import {QuestionForm, Loader, ErrorBlock, NoAnswerBlock, AnswersBlock} from "./components";
import {useWebAppApi} from "./hooks/useWebAppApi";

/*
This is the App component of a web application. It is using the custom hook useWebAppApi to fetch data from an API
and handle state. The component is rendering a QuestionForm, Loader, ErrorBlock, NoAnswerBlock and AnswersBlock,
which are all imported from the components folder. Depending on the state of the results, different components are rendered.
The component also contains functions to get answers from the API, clear all the data, and handle loading state.
*/
function App() {
    const { results, loading, getAnswers, clearAll } = useWebAppApi()

    return (
        <div className="App relative">
            <Loader loading={loading}/>
            <QuestionForm loading={loading} getAnswers={getAnswers} />
            {results.error && (<ErrorBlock error={results.error} clearAll={clearAll} />)}
            {results.noAnswers && (<NoAnswerBlock clearAll={clearAll} />)}
            {!results.noAnswers && results.answers.length > 0 && (<AnswersBlock clearAll={clearAll} results={results}/>)}
        </div>
    );
}

export default App;
