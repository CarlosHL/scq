var TitleSection = React.createClass({
    render: function(){
      return (
        <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
          <h2 className="mdl-card__title-text"> { this.props.titleText } </h2>
        </div>
      );
    }
});
//Card is really messy
var Card = React.createClass({
    /* an initial state called response, actually not entirely sure
     * why we have it.. :)
    */
    getInitialState: function(){
        return {response: []};
    },
    componentDidUpdate: function(){
        componentHandler.upgradeDom();    
    },

    //handleSurveySubmit is called whenever a submit button is pushed
    //it calls POST on /api/response sending a JSON of the survey data
    //and on success calls the removeHandler which removes the 
    //corresponding cards 
    //case matching of the question type, generates the corresponding
    //card, eventually we want one card per survey, this will be tricky
    render: function(){
      if(this.props.response_format == "multipleChoice"){
        return (
          <div className="updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
            <div>
              <TitleSection titleText={this.props.title}/>
              <MultipleChoice
              options={this.props.options}
              onSubmit={this.props.onSubmit}
              nextHandler={this.props.nextHandler}
              prevHandler={this.props.prevHandler}
              surveyID={this.props.surveyID}
              department={this.props.department}
              creator={this.props.creator}
              isInstructor={this.props.isInstructor}
              questionID={this.props.questionID}
              response_format={this.props.response_format}
              questionNum={this.props.questionNum}
              numQuestions={this.props.numQuestions}
              responseSize={this.props.responseSize}/>
            </div>
          </div>
        );
      }else if(this.props.response_format == "rating"){
        return (
          <div className="updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
            <div>
              <TitleSection titleText={this.props.title}/>
              <Rating
              surveyID={this.props.surveyID}
              department={this.props.department}
              creator={this.props.creator}
              isInstructor={this.props.isInstructor}
              onSubmit={this.props.onSubmit}
              nextHandler={this.props.nextHandler}
              prevHandler={this.props.prevHandler}
              surveyID={this.props.surveyID}
              questionID={this.props.questionID}
              response_format={this.props.response_format}
              questionNum={this.props.questionNum}
              numQuestions={this.props.numQuestions}
              responseSize={this.props.responseSize}/>
            </div>
          </div>
        );
       }else if (this.props.response_format == "trueOrFalse"){
          return (
            <div className="updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
              <div>
                  <TitleSection titleText={this.props.title}/>
                  <SingleChoice
                  options={this.props.options}
                  onSubmit={this.props.onSubmit}
                  nextHandler={this.props.nextHandler}
                  prevHandler={this.props.prevHandler}
                  surveyID={this.props.surveyID}
                  department={this.props.department}
                  creator={this.props.creator}
                  isInstructor={this.props.isInstructor}
                  questionID={this.props.questionID}
                  response_format={this.props.response_format}
                  questionNum={this.props.questionNum}
                  numQuestions={this.props.numQuestions}
                  responseSize={this.props.responseSize}/>
              </div>
            </div>
          );
    } else if (this.props.response_format == "freeResponse"){
        return (
          <div className="updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
            <div>
              <TitleSection titleText={this.props.title}/>
              <FreeResponse 
              onSubmit={this.props.onSubmit}
              nextHandler={this.props.nextHandler}
              prevHandler={this.props.prevHandler}
              surveyID={this.props.surveyID}
              department={this.props.department}
              creator={this.props.creator}
              isInstructor={this.props.isInstructor}
              questionID={this.props.questionID}
              response_format={this.props.response_format}
              questionNum={this.props.questionNum}
              numQuestions={this.props.numQuestions}
              responseSize={this.props.responseSize}/>
            </div>
        </div>
      );
    } else {
        alert("not Valid card type");
        return undefined;;
    }
  }
});