# getFeedback
A NodeJs &amp; ReactJS &amp; MongoDB Application

# About
This is a full-stack web application project using NodeJs as backend, ReactJS as frontend and MongoDB for data storage.

The app that can be used to send mass emails to a big list of clients for the purpose of collecting feedback.  It allows users to 

* Login with a google account.
* Add credits to the account.
* Create a survey with a customized question.
* Send out the survey to a list of clients.
* See a summary of clients' feedbacks.

A live example is available at https://lower-worms-65775.herokuapp.com/

# Install & Requirements

To run the code in developemnt mode on a local machine, follow the steps below:
1. Clone the repo

```
git clone https://github.com/YuxinZhou/getFeedback.git
```

2. Install the dependency for both server side and client side. (Suppose `getFeedback` folder is under the `$HOME` directory)

```
cd $HOME/getFeedback
npm install
cd $HOME/getFeedback/clinet
npm install
```
3. Create your API key file. 

In `getFeedback/config`, create a `dev.js` file which should include all your private API keys, using the template:
```js
module.exports = {
  googleClientID: 'your-google-client-id',
  googleClientSecret: 'your-google-client-id',
  mongoURI: 'mongodbURI to mlab',  // format: mongodb://admin:pwd@dsXXXXX.mlab.com:XXXXX/DB_name
  cookieKey: 'cookieKey',  // A random string will be fine
  stripePublicKey: 'stripePublicKey', // start with 'pk_'
  stripeSecretKey: 'stripeSecretKey', // start with 'sk_'
  sendgridKey: 'sendgridKey', // start with 'SG.'
  redirectDomain: 'http://localhost:3000/' 
};
```

4. Run 

```
cd $HOME/getFeedback
npm run dev
```
You should see a logging info like below, and you can see a frontend React app at http://localhost:3000/
```
[0] > server@1.0.0 server ~/getFeedback
[0] > nodemon server.js
[0] 
[2] 
[2] > server@1.0.0 webhook ~/getFeedback
[2] > lt -p 5000 -s dakkdoekdpf
[2] 
[1] 
[1] > server@1.0.0 client ~/getFeedback
[1] > npm run start --prefix client
```
5. Update the WebHook 

To receive a WebHook request from localhost, we use localtunnel to create a unique publicly accessible url (e.g. https://dakkdoekdpf.localtunnel.me) that will proxy all requests to your locally running webserver. And you need to set the SendGrid ballback URL to be this localtunnel URI. To do so, you need to

    1. Go to https://app.sendgrid.com/settings/mail_settings 
    2. In `Event Notification`, set `HTTP POST URL` to be https://dakkdoekdpf.localtunnel.me/api/surveys/webhooks . 
    3. Check the `Clicked` in `SELECT ACTIONS` column 
    4. Save your changes.



