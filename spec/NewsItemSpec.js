describe('Article', function() {
    articleData = {
        title: "Google to European commission: Android is key to mobile competition",
        url: "https://www.theguardian.com/technology/2016/nov/10/google-european-commission-android"
    };

    it('can be created with a text and url', function() {
        article = new Article(articleData.title, articleData.url);
        expect(article.getTitle()).toEqual(articleData.title);
        expect(article.getUrl()).toEqual(articleData.url);
    });
});
