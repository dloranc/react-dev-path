export default {
  get: url => {
    const base = 'https://jsonplaceholder.typicode.com';

    if (url === `${base}/users?email=Sincere@april.biz`) {
      return Promise.resolve({
        data: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
          }
        ]
      });
    }

    if (url === `${base}/comments?userId=1`) {
      return Promise.resolve({
        data: [
          {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium"
          },
          {
            "postId": 1,
            "id": 2,
            "name": "quo vero",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus"
          }
        ]
      });
    }

    if (url === `${base}/posts?userId=1`) {
      return Promise.resolve({
        data: [
          {
            "userId": 1,
            "id": 1,
            "title": "sunt aut",
            "body": "quia et"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum"
          }
        ]
      });
    }
  }
};
