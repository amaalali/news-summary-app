describe('Newspaper', function() {

    articleData = {
        title1: "Brian Lara: The biggest test of all – archive",
        url1: "https://www.theguardian.com/sport/2016/jul/08/brian-lara-cricket-west-indies-test-1994",
        title2: "Make mine a Darth Vader burger! The weirdest edible movie tie-ins",
        url2: "https://www.theguardian.com/film/filmblog/2017/jan/12/weird-edible-movie-tie-ins-food-darth-vader-burger"
    };

    it('can be created', function() {
        let newspaper = new Newspaper();
        expect(newspaper instanceof Newspaper).toEqual(true);
    });

    it('#addArticle', function() {
        article1 = new Article(articleData.title1, articleData.url1);
        let newspaper = new Newspaper();
        newspaper.addArticle(article1);
        expect(newspaper.articles[0]).toEqual(article1);
    });

    it('#addArticles', function() {
        let article1 = new Article(articleData.title1, articleData.url1);
        let article2 = new Article(articleData.title2, articleData.url2);
        let newspaper = new Newspaper();
        newspaper.addArticles([ article1, article2 ]);
        expect(newspaper.articles).toEqual([ article1, article2 ]);
    });

});
