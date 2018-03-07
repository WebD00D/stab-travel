import React, { Component } from "react";
import cx from "classnames";
import fire from "../database";
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
      photoOnePreview: "",
      photoOneFile: null,
      photoTwoPreview: "",
      photoTwoFile: null,
      photoThreePreview: "",
      photoThreeFile: null,
      photoFourPreview: "",
      photoFourFile: null,
      photoFivePreview: "",
      photoFiveFile: null,
      imageLoading: false,
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
    console.log("FILE PREVIEW", files[0].preview);

    const dateTime = Date.now();

    this.setState({
      imageLoading: true
    })

    if (this.state.photoOnePreview.trim() == "") {
      this.setState({
        photoOnePreview: files[0].preview
      });

      const storageRefOne = fire
        .storage()
        .ref()
        .child(`ST-${dateTime}-${files[0].name}`);
      storageRefOne.put(files[0]).then(
        function(snapshot) {
          this.setState({
            photoOneFile: snapshot.metadata.downloadURLs[0],
            imageLoading: false
          });
        }.bind(this)
      );

      return;
    }

    if (this.state.photoTwoPreview.trim() == "") {
      this.setState({
        photoTwoPreview: files[0].preview
      });

      const storageRefTwo = fire
        .storage()
        .ref()
        .child(`ST-${dateTime}-${files[0].name}`);
      storageRefTwo.put(files[0]).then(
        function(snapshot) {
          this.setState({
            photoTwoFile: snapshot.metadata.downloadURLs[0],
            imageLoading: false
          });
        }.bind(this)
      );

      return;
    }

    if (this.state.photoThreePreview.trim() == "") {
      this.setState({
        photoThreePreview: files[0].preview
      });

      const storageRefThree = fire
        .storage()
        .ref()
        .child(`ST-${dateTime}-${files[0].name}`);
      storageRefThree.put(files[0]).then(
        function(snapshot) {
          this.setState({
            photoThreeFile: snapshot.metadata.downloadURLs[0],
            imageLoading: false
          });
        }.bind(this)
      );

      return;
    }

    if (this.state.photoFourPreview.trim() == "") {
      this.setState({
        photoFourPreview: files[0].preview
      });

      const storageRefFour = fire
        .storage()
        .ref()
        .child(`ST-${dateTime}-${files[0].name}`);
      storageRefFour.put(files[0]).then(
        function(snapshot) {
          this.setState({
            photoFourFile: snapshot.metadata.downloadURLs[0],
            imageLoading: false
          });
        }.bind(this)
      );
      return;
    }

    if (this.state.photoFivePreview.trim() == "") {
      this.setState({
        photoFivePreview: files[0].preview
      });

      const storageRefFive = fire
        .storage()
        .ref()
        .child(`ST-${dateTime}-${files[0].name}`);
      storageRefFive.put(files[0]).then(
        function(snapshot) {
          this.setState({
            photoFiveFile: snapshot.metadata.downloadURLs[0],
            imageLoading: false
          });
        }.bind(this)
      );

      return;
    }
  }

  render() {
    
    return (
      <div className={cx("stab-travel__step", { "d-none": this.props.hidden })}>
        <div className="stab-travel__photo--row">
          <div className="stab-travel__photo-wrap">
            {this.state.photoOnePreview ? (
              <span
                onClick={() => {
                  this.setState({
                    photoOnePreview: '',
                    photoOneFile: null
                  });
                }}
                className="stab-travel__photo-count-remove"
              >
                X
              </span>
            ) : (
              <span className="stab-travel__photo-count">1</span>
            )}
            {this.state.photoOnePreview ? (
              <div
                className="stab-travel__photo-lg stab-travel___photo-bg"
                style={{
                  backgroundImage: `url(${this.state.photoOnePreview})`
                }}
              />
            ) : (
              <Dropzone
                onDrop={this._uploadPhoto}
                className="stab-travel__photo-lg"
                multiple={false}
              />
            )}
          </div>
          <div className="stab-travel__small-photo-row">
            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
              {this.state.photoTwoPreview ? (
                <span
                  onClick={() => {
                    this.setState({
                      photoTwoPreview: '',
                      photoTwoFile: null
                    });
                  }}
                  className="stab-travel__photo-count-remove"
                >
                  X
                </span>
              ) : (
                <span className="stab-travel__photo-count">2</span>
              )}
                {this.state.photoTwoPreview ? (
                  <div
                    className="stab-travel__photo-sm stab-travel___photo-bg"
                    style={{
                      backgroundImage: `url(${this.state.photoTwoPreview})`
                    }}
                  />
                ) : (
                  <Dropzone
                    onDrop={this._uploadPhoto}
                    className="stab-travel__photo-sm"
                    multiple={false}
                  />
                )}
              </div>
              <div className="stab-travel__photo-wrap">
              {this.state.photoThreePreview ? (
                <span
                  onClick={() => {
                    this.setState({
                      photoThreePreview: '',
                      photoThreeFile: null
                    });
                  }}
                  className="stab-travel__photo-count-remove"
                >
                  X
                </span>
              ) : (
                <span className="stab-travel__photo-count">3</span>
              )}
                {this.state.photoThreePreview ? (
                  <div
                    className="stab-travel__photo-sm stab-travel___photo-bg"
                    style={{
                      backgroundImage: `url(${this.state.photoThreePreview})`
                    }}
                  />
                ) : (
                  <Dropzone
                    onDrop={this._uploadPhoto}
                    className="stab-travel__photo-sm"
                    multiple={false}
                  />
                )}
              </div>
            </div>
            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
              {this.state.photoFourPreview ? (
                <span
                  onClick={() => {
                    this.setState({
                      photoFourPreview: '',
                      photoFourFile: null
                    });
                  }}
                  className="stab-travel__photo-count-remove"
                >
                  X
                </span>
              ) : (
                <span className="stab-travel__photo-count">4</span>
              )}
                {this.state.photoFourPreview ? (
                  <div
                    className="stab-travel__photo-sm stab-travel___photo-bg"
                    style={{
                      backgroundImage: `url(${this.state.photoFourPreview})`
                    }}
                  />
                ) : (
                  <Dropzone
                    onDrop={this._uploadPhoto}
                    className="stab-travel__photo-sm"
                    multiple={false}
                  />
                )}
              </div>
              <div className="stab-travel__photo-wrap">
              {this.state.photoFivePreview ? (
                <span
                  onClick={() => {
                    this.setState({
                      photoFivePreview: '',
                      photoFiveFile: null
                    });
                  }}
                  className="stab-travel__photo-count-remove"
                >
                  X
                </span>
              ) : (
                <span className="stab-travel__photo-count">5</span>
              )}
                {this.state.photoFivePreview ? (
                  <div
                    className="stab-travel__photo-sm stab-travel___photo-bg"
                    style={{
                      backgroundImage: `url(${this.state.photoFivePreview})`
                    }}
                  />
                ) : (
                  <Dropzone
                    onDrop={this._uploadPhoto}
                    className="stab-travel__photo-sm"
                    multiple={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <TravelButton
          buttonText={ this.state.imageLoading  ? "Loading..." : "Continue" }
          handleClick={() =>
            {
              if ( !this.state.imageLoading  ) {
                this.props.setPhotos(
                  this.state.photoOneFile,
                  this.state.photoTwoFile,
                  this.state.photoThreeFile,
                  this.state.photoFourFile,
                  this.state.photoFiveFile
                )
              }
            }

          }
        />
      </div>
    );
  }
}

export default StepThree;
