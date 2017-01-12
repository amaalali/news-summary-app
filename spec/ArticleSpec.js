describe('Article', function() {
    articleData = {
        title: "Brian Lara: The biggest test of all – archive",
        url: "https://www.theguardian.com/sport/2016/jul/08/brian-lara-cricket-west-indies-test-1994"
    };

    it('can be created with a text and url', function() {
        article = new Article(articleData.title, articleData.url);
        expect(article.getTitle()).toEqual(articleData.title);
        expect(article.getUrl()).toEqual(articleData.url);
    });
});
