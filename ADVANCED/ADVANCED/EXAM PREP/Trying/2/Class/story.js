class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${
        this._likes.slice(1).length
      } others like this story!`;
    }
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    if (username == this.creator) {
      throw new Error("You can't like your own story!");
    }

    this._likes.push(username);
    return `${username} liked ${title}!`;
  }

  dislike(username) {
    if (this._likes.includes(username) == false) {
      throw new Error("You can't dislike this story!");
    }
    this._likes = this._likes.filter((user) => user !== username);
    return `${username} disliked ${title}`;
  }

  comment (username, content, id){
      
  }
}
