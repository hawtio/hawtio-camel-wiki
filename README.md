hawtio-camel-wiki
=================

A sample application for creating and editing camel routes with [hawtio](http://hawt.io/) in any web container (tomcat, jetty, wildfly etc).

Either install the WAR into your container or from the source code just run

    cd hawtio-camel-wiki
    mvn jetty:run

Then open [http://localhost:8080/](http://localhost:8080/) and you should be all set!

Then just create camel routes; edit them visually in hawtio. You can then use the Camel tab in hawtio to view the running routes and their metrics.
