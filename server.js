import Hapi from "hapi";
import React from "react";

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: "GET",
  path: "/client.min.js",
  handler: function(request, reply) {
    reply.file(`${__dirname}/client.min.js`);
  }
});

server.route({
  method: "GET",
  path: "/{path*}",
  handler: function(request, reply) {
    const view = React.renderToString(<h1>Howdy!</h1>);

    const layout = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <div id="app">${view}</div>
          <script src="client.min.js" async defer></script>
        </body>
      </html>
    `;

    reply(layout);
  }
});

server.start();
