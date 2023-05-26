import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe foun for your query ! Please try again :)';

  _generateMarkup() {
    return this._data.map(rec => previewView.render(rec, false)).join('');
  }
}

export default new ResultView();
