if (Meteor.isServer) {
  const Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true,
    apiPath: 'restivus/',
  });

  Api.addRoute('cards', {authRequired: true}, {
    post: function() {
      console.log(this.bodyParams);

      const id = Cards.insert({
        title: this.bodyParams.title,
        boardId: this.bodyParams.boardId,
        listId: this.bodyParams.listId,
        description: this.bodyParams.description,
        userId : this.userId,
        sort: 0,
        members:[ this.userId ],
      });

      return {data: 'Working.'};
    },
  });
}
