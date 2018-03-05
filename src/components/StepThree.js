import React, { Component } from "react";
import cx from "classnames";
import "../App.css";
import TextInput from "./TextInput";
import OptionList from "./OptionList";
import TravelButton from "./Button";
import Dropzone from "react-dropzone";

class StepThree extends Component {
  constructor(props) {
    super(props);

    this._setStepAnswers = this._setStepAnswers.bind(this);
    this._uploadPhoto = this._uploadPhoto.bind(this);

    this.state = {
      responses: [],
      photoOnePreview: '',
      photoOneFile: null,
      photoTwoPreview: '',
      photoTwoFile: null,
      photoThreePreview: '',
      photoThreeFile: null,
      photoFourPreview: '',
      photoFourFile: null,
      photoFivePreview: '',
      photoFiveFile: null
    };
  }

  _setStepAnswers(question, answer) {
    const newObject = { question: question, answer: answer };
    let currentObjects = this.state.responses;

    if (currentObjects.length > 0) {
      let updated = false;
      currentObjects.forEach(function(item) {
        if (item.question === question) {
          item.answer = answer;
          updated = true;
        }
      });

      if (!updated) {
        currentObjects.push(newObject);
      }
    } else {
      currentObjects.push(newObject);
    }

    this.setState({
      responses: currentObjects
    });
  }

  _uploadPhoto(files) {

    console.log(files[0].preview)

    if ( this.state.photoOnePreview.trim() == "" ) {
      this.setState({
        photoOnePreview: files[0].preview,
        photoOneFile: files[0]
      })
      return;
    }

    if ( this.state.photoTwoPreview.trim() == "" ) {
      this.setState({
        photoTwoPreview: files[0].preview,
        photoTwoFile: files[0]
      })
      return;
    }

    if ( this.state.photoThreePreview.trim() == "" ) {
      this.setState({
        photoThreePreview: files[0].preview,
        photoThreeFile: files[0]
      })
      return;
    }

    if ( this.state.photoFourPreview.trim() == "" ) {
      this.setState({
        photoFourPreview: files[0].preview,
        photoFourFile: files[0]
      })
      return;
    }

    if ( this.state.photoFivePreview.trim() == "" ) {
      this.setState({
        photoFivePreview: files[0].preview,
        photoFiveFile: files[0]
      })
      return;
    }


  }

  render() {

    return (
      <div className={cx('stab-travel__step', { 'd-none': this.props.hidden})}>
        <div className="stab-travel__photo--row">
          <div className="stab-travel__photo-wrap">
          <span className="stab-travel__photo-count">1</span>
            { this.state.photoOnePreview ?
              <div className="stab-travel__photo-lg stab-travel___photo-bg" style={{backgroundImage: `url(${this.state.photoOnePreview})`}}></div>
              : <Dropzone onDrop={this._uploadPhoto} className="stab-travel__photo-lg" multiple={false} /> }
          </div>
          <div className="stab-travel__small-photo-row">
            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">2</span>
                { this.state.photoTwoPreview ?
                  <div className="stab-travel__photo-sm stab-travel___photo-bg" style={{backgroundImage: `url(${this.state.photoTwoPreview})`}}></div>
                  : <Dropzone onDrop={this._uploadPhoto} className="stab-travel__photo-sm" multiple={false} /> }
              </div>
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">3</span>
                { this.state.photoThreePreview ?
                  <div className="stab-travel__photo-sm stab-travel___photo-bg" style={{backgroundImage: `url(${this.state.photoThreePreview})`}}></div>
                  : <Dropzone onDrop={this._uploadPhoto} className="stab-travel__photo-sm" multiple={false} /> }
              </div>
            </div>
            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">4</span>
                { this.state.photoFourPreview ?
                  <div className="stab-travel__photo-sm stab-travel___photo-bg" style={{backgroundImage: `url(${this.state.photoFourPreview})`}}></div>
                  : <Dropzone onDrop={this._uploadPhoto} className="stab-travel__photo-sm" multiple={false} /> }
              </div>
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">5</span>
                { this.state.photoFivePreview ?
                  <div className="stab-travel__photo-sm stab-travel___photo-bg" style={{backgroundImage: `url(${this.state.photoFivePreview})`}}></div>
                  : <Dropzone onDrop={this._uploadPhoto} className="stab-travel__photo-sm" multiple={false} /> }
              </div>
            </div>
          </div>
        </div>

        <TravelButton
          buttonText="Review"
          handleClick={() => this.props.setPhotos(
            this.state.photoOneFile,
            this.state.photoTwoFile,
            this.state.photoThreeFile,
            this.state.photoFourFile,
            this.state.photoFiveFile
          )}
        />
      </div>
    );
  }
}

export default StepThree;
