## hawtio-camel-wiki

**hawtio-camel-wiki** is an application for creating, editing and managing [Apache Camel](http://camel.apache.org/) [Enterprise Integration Patterns](http://camel.apache.org/enterprise-integration-patterns.html) with [hawtio](http://hawt.io/) in any web container (tomcat, jetty, wildfly etc).

### Getting Started

To get started, if you have [Maven](http://maven.apache.org/) and [git](http://git-scm.com/) installed, type the following into a shell:

    git clone https://github.com/hawtio/hawtio-camel-wiki.git
    cd hawtio-camel-wiki
    mvn jetty:run

Then open [http://localhost:8080/](http://localhost:8080/) and you should be all set!

In the **Wiki** tab create a new file; select the **Camel Spring XML** option, then you will have a new camel route file you can edit visually.

You can then use the **Camel** tab in hawtio to view the running routes and their metrics; debug them, trace them etc.

If you are using messaging protocols like AMQP, MQTT, JMS or WebSockets, the bundled [Apache ActiveMQ broker](http://activemq.apache.org/) can be viewed in the **ActiveMQ** tab where you can browse queues, send messages to destinations and view real time metrics etc.

### How it works

On startup the [hawtio configuration](https://github.com/hawtio/hawtio/blob/master/docs/Configuration.md) is read from [blueprint.properties](https://github.com/hawtio/hawtio-camel-wiki/blob/master/src/main/resources/blueprint.properties) which specifies which git repo is cloned on startup - which is [this one by default](https://github.com/hawtio/hawtio-camel-wiki-config).

The configuration is stored in **~/.hawtioCamelWiki/config** (you can edit these files using any tool outside of hawtio if you prefer too - and push/pull as you see fit).

### Running on OpenShift

Every developer has 3 free machines to play with on [OpenShift](http://openshift.com/) so if you want to try this out there try this:

First, you'll need to create an [OpenShift Online account](https://openshift.redhat.com/app/account/new).

Then you can create an instance of [hawtio camel wiki using this link](https://www.openshift.com/quickstarts/hawtio-camel-wiki)

#### Using rhc

Read  the OpenShift Getting Started guide and install the **rhc** command-line tool.

You should then be able to try this on the command line:

    rhc app create mycamelwiki jbossews-2.0 --from-code=http://github.com/hawtio/hawtio-camel-wiki.git