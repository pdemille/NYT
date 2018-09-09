## Start Locally

Install all frontend/backend dependencies. While in this directory (I believe I run in `nyt-react-master`), I run:

```
yarn install
cd client
yarn install
cd ..
``

After complete, I run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

### Heroku

If Heroku app is not created then run the following command:

```
heroku create
```

### Deploying


