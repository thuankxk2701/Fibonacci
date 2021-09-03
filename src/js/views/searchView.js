class SearchView {
  _patterEl = document.querySelector('.search');

  getQuery() {
    const query = this._patterEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._patterEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._patterEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
