// utils/constants.js
module.exports = {
    baseLayout: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>{{title}}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background: #ffffff;
                  padding: 20px;
              }
              .header {
                  text-align: center;
                  padding: 20px 0;
              }
              .content {
                  padding: 20px 0;
              }
              .image {
                  max-width: 100%;
                  height: auto;
                  margin: 20px 0;
              }
              .footer {
                  text-align: center;
                  padding: 20px 0;
                  color: #666666;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>{{title}}</h1>
              </div>
              {{#if imageUrl}}
              <div class="image">
                  <img src="{{imageUrl}}" alt="Email content" style="max-width: 100%;">
              </div>
              {{/if}}
              <div class="content">
                  {{{content}}}
              </div>
              <div class="footer">
                  {{footer}}
              </div>
          </div>
      </body>
      </html>
    `
  };
  