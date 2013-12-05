// lets disable jolokia

// default the perspective
(function (Perspective) {
  var metadata = Perspective.metadata || {};
  Perspective.defaultPerspective = "CamelWiki";
  Perspective.defaultPageLocation = "#/wiki/view";

  metadata["CamelWiki"] = {
    label: "Camel Wiki",
    isValid: function (workspace) { return true; },
    lastPage: "#/wiki/view",
    topLevelTabs: {
      includes: [
        {
          href: "#/wiki"
        },
        {
          id: "activemq"
        },
        {
          id: "camel"
        },
        {
          id: "jmx"
        },
        {
          href: "#/dashboard"
        },
        {
          href: "#/health"
        },
        {
          href: "#/logs"
        }
      ]
    }
  };

})(Perspective || {});


