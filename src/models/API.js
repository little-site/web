import Post from './Post';
import axios from 'axios';

class API {
  constructor(authToken, baseURL = 'https://api.little.site') {
    this.baseURL = baseURL;
    this.siteHandle = 'david-hariri'; // FIXME: This needs to be dynamic
  }

  getPost(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/posts/${id}/`)
        .then(response => {
          const p = response.data;

          resolve([
            new Post(
              p.id,
              p.slug,
              p.comment,
              p.date_created,
              p.date_updated,
              p.location_lat,
              p.location_lon,
              p.location_name,
              p.media,
              p.tweet_id
            )
          ]);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  getPosts(forSiteHandle) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/sites/${forSiteHandle}/posts/?size=50`)
        .then(response => {
          resolve(
            response.data.posts.map(
              p =>
                new Post(
                  p.id,
                  p.slug,
                  p.comment,
                  p.date_created,
                  p.date_updated,
                  p.location_lat,
                  p.location_lon,
                  p.location_name,
                  p.media,
                  p.tweet_id
                )
            )
          );
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}

export default API;
