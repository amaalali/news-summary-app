(function(exports) {
    function Newspaper() {
        this.articles = [];
    }

    Newspaper.prototype.addArticle = function (article) {
        this.articles.push(article)
    };

    Newspaper.prototype.addArticles = function (articleArray) {
        let that = this;
        articleArray.forEach(
          (article) => that.articles.push(article)
        );
    };

    Newspaper.prototype.read = function () {
        return this.articles;
    };

    exports.Newspaper = Newspaper;
})(this);
