describe('Newspaper', function() {

    articleData = {
        title1: "Brian Lara: The biggest test of all – archive",
        url1: "https://www.theguardian.com/sport/2016/jul/08/brian-lara-cricket-west-indies-test-1994",
        title2: "Make mine a Darth Vader burger! The weirdest edible movie tie-ins",
        url2: "https://www.theguardian.com/film/filmblog/2017/jan/12/weird-edible-movie-tie-ins-food-darth-vader-burger"
    };

    it('can be created', function() {
        // article1 = new Article(articleData.title1, articleData.url1);
        // article2 = new Article(articleData.title2, articleData.url2);
        newspaper = new Newspaper();
        expect(newspaper instanceof Newspaper).toEqual(true);
    });

});
