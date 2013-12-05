# HawtioCamelWiki

**HawtioCamelWiki** is a stand alone web application for creating, editing and managing [Apache Camel](http://camel.apache.org/) based integration flows and [Enterprise Integration Patterns](http://camel.apache.org/enterprise-integration-patterns.html) with the [hawtio](http://hawt.io/) console and an embedded [Apache ActiveMQ broker](http://activemq.apache.org/) broker for communicating over AMQP, MQTT, STOMP and WebSockets.

**HawtioCamelWiki** runs stand alone in Maven or in any web container (tomcat, jetty, wildfly etc).

### Features

* a nice integrated web UI for working with integration flows, documentation, files, history and messages in the message broker
* embedded message broker for AMQP, MQTT, STOMP, WebSockets
* lots of embedded camel components out of the box. (To add more just add other [camel components](http://camel.apache.org/components.html) to the pom.xml file.
* view real time visualisations and metrics of integration flows and message endpoints; send messages, browse queues, debug routes, trace routes etc
* all files and changes stored in git with audit log and history
* dashboard and logs UIs (as well as low level JMX too)

### Getting Started

To get started, if you have [Maven](http://maven.apache.org/) and [git](http://git-scm.com/) installed, type the following into a shell:

    git clone https://github.com/hawtio/hawtio-camel-wiki.git
    cd hawtio-camel-wiki
    mvn jetty:run

Then open [http://localhost:8080/](http://localhost:8080/) and you should be all set!

The following tabs may be useful:

* **Wiki** tab lets you browse the existing route files and documentation. To create a new integration flow, click the **Create** icon in the toolbar (towards the top and right of the window) and select the **Camel Spring XML** option, then you will have a new camel route file you can edit visually.
* **ActiveMQ** tab lets you look inside the bundled [Apache ActiveMQ broker](http://activemq.apache.org/) where you can browse queues, send messages to destinations and view real time metrics etc.
* **Camel** tab lets you view the real time metrics and attributes of all the currently running Camel routes; as well as debug and trace them.

### How it works

On startup HawtioCamelWiki should clone this [configuration repository](https://github.com/hawtio/hawtio-camel-wiki-config) (which is [defined here](https://github.com/hawtio/hawtio-camel-wiki/blob/master/src/main/resources/blueprint.properties#L10) if you wish to change it!) and it then boots up all Spring XML and camel routes defined in there and watches for any changes.

The git repository is cloned to **~/.hawtioCamelWiki/config** if you wish to push/pull changes. You can edit these files directly using any tool outside of HawtioCamelWiki if you prefer too - and push/pull as you see fit.

All changes via the HawtioCamelWiki are versioned in the git repository (try the Actions -> History option in the Wiki view on the top right).


### Running on OpenShift

Every developer has 3 free machines to play with on [OpenShift](http://openshift.com/) so if you want to try this out there try this:

First, you'll need to create an [OpenShift Online account](https://openshift.redhat.com/app/account/new).

Then you can create an instance of [hawtio camel wiki using this link](https://www.openshift.com/quickstarts/hawtio-camel-wiki)

#### Using rhc

Read  the OpenShift Getting Started guide and install the **rhc** command-line tool.

You should then be able to try this on the command line:

    rhc app create mycamelwiki jbossews-2.0 --from-code=http://github.com/hawtio/hawtio-camel-wiki.git