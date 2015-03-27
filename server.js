import Hapi from "hapi";
import React from "react";

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: "GET",
  path: "/{path*}",
  handler: function(request, reply) {
    const content = React.renderToString(<h1>Howdy!</h1>);

    reply(content);
  }
});

server.start();
