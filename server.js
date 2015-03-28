import Hapi from "hapi";
import React from "react";

import Context from "./components/Context";
import Home from "./components/Home";

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
    const context = {
      path: request.path
    };

    const view = React.renderToString(<Context {...context} view={Home} />);

    const layout = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <div id="app">${view}</div>
          <script>window.context = ${JSON.stringify(context)}</script>
          <script src="client.min.js" async defer></script>
        </body>
      </html>
    `;

    reply(layout);
  }
});

server.start();
