import assert from "assert";
import Context from "../../components/Context";
import Path from "../../components/Path";
import React from "react/addons";

describe("Path", function() {
  it("should require a context", function() {
    const element = <Context path="test"><Path /></Context>;
    const markup = React.renderToStaticMarkup(element);

    assert.equal(markup, "<div><code>test</code></div>");
  });
});
