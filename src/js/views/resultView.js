import View from './view';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe foun for your query ! Please try again :)';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(rec) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${rec.id}">
          <figure class="preview__fig">
            <img src="${rec.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${rec.title}</h4>
            <p class="preview__publisher">${rec.publisher}</p>
          </div>
        </a>
        </li>
    `;
  }
}

export default new ResultView();
