class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        let article = this.listOfArticles.find(ar => ar.articleModel == articleModel.toLowerCase() && ar.articleName == articleName);
        if (article) {
            article.quantity += quantity;

        } else {
            let articleObj = { articleModel: articleModel.toLowerCase(), articleName, quantity };
            this.listOfArticles.push(articleObj);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName == guestName);
        if (guest) {
            throw new Error(`${guest.guestName} has already been invited.`)
        } else {
            let points;
            if (personality == 'Vip') {
                points = 500;
            } else if (personality == 'Middle') {
                points = 250;
            } else {
                points = 50;
            }

            this.guests.push({ guestName, points, purchaseArticle: 0 });
            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(r => r.articleModel == articleModel.toLowerCase() && r.articleName == articleName);
        if (!article) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(g => g.guestName == guestName);
        if (!guest) {
            return `This guest is not invited.`;
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        } else {
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle += 1;
            article.quantity -= 1;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        }
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach((ar) => {
                result.push(`${ar.articleModel} - ${ar.articleName} - ${ar.quantity}`);
            });

            return result.join('\n');
        }

        if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach((g) => {
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            });

            return result.join('\n');
        }
    }
}