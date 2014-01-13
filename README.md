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

Then open [http://localhost:8000/](http://localhost:8080/) and you should be all set!

The following tabs may be useful:

* **Wiki** tab lets you browse the existing route files and documentation. To create a new integration flow, click the **Create** icon in the toolbar (towards the top and right of the window) and select the **Camel Spring XML** option, then you will have a new camel route file you can edit visually.
* **ActiveMQ** tab lets you look inside the bundled [Apache ActiveMQ broker](http://activemq.apache.org/) where you can browse queues, send messages to destinations and view real time metrics etc.
* **Camel** tab lets you view the real time metrics and attributes of all the currently running Camel routes; as well as debug and trace them.

### How it works

On startup HawtioCamelWiki should clone this [configuration repository](https://github.com/hawtio/hawtio-camel-wiki-config) (which is [defined here](https://github.com/hawtio/hawtio-camel-wiki/blob/master/src/main/resources/blueprint.properties#L10) if you wish to change it!) and it then boots up all Spring XML and camel routes defined in there and watches for any changes.

The git repository is cloned to **~/.hawtioCamelWiki/config** if you wish to push/pull changes. You can edit these files directly using any tool outside of HawtioCamelWiki if you prefer too - and push/pull as you see fit.

All changes via the HawtioCamelWiki are versioned in the git repository (try the Actions -> History option in the Wiki view on the top right).


## Upgrading to JBoss Fuse

So in many ways, HawtioCamelWiki is a little bit like a cut down stand alone simpler version of [JBoss Fuse](http://www.jboss.org/products/fuse)

Fuse offers the following advantages:

* supports a number of JVMs working as a logical cluster with failover and load balancing; on bare metal (any computer with a JVM), on the Open Hybrid Cloud (via [OpenShift Online](https://www.openshift.com/products/online) for the public cloud or [OpenShift Enterprise](https://www.openshift.com/products/enterprise) for on premise, or a combination of both) or any IaaS like EC2 via [Apache jclouds](http://jclouds.apache.org/).
* makes it [easy to create topologies](http://macstrac.blogspot.co.uk/2013/10/a-sneak-peek-at-whats-coming-in-jboss.html) (like master/slave, replicated, N+1) of federated message brokers
* makes it easy to configure and manage your entire cluster
* supports [different profiles](http://jboss-fuse.viewdocs.io/fuse/profiles) of container; so rather than just having one set of camel integration flows that run in a JVM you can federate, partition and do rolling upgrades of them.

To get a HawtioCamelWiki like experience with Fuse [try watching this demo](http://vimeo.com/80625940).

Or try these instructions:

* grab a recent [distro of fuse-fabric](https://repository.jboss.org/nexus/content/repositories/ea/org/fusesource/fabric/fuse-fabric/) and unpack it
* run **bin/fusefabric**
* once its started up type:

```
fabric:create --new-user admin --new-user-password admin
```

* then wait a minute or so, typing this command should say 'success'

```
container-list
```

* now open [http://localhost:8181/](http://localhost:8181/) and in the Containers view go to the [examples/camel/profile profile page](http://localhost:8181/hawtio/index.html#/wiki/branch/1.0/view/fabric/profiles/example/camel/profile.profile) and create a new container (the one on the right).

You now have a JVM running any camel routes in [this profile](http://localhost:8181/hawtio/index.html#/wiki/branch/1.0/view/fabric/profiles/example/camel/profile.profile). Create any camel routes and they will update automatically or you can use [versions to do rolling upgrades](http://jboss-fuse.viewdocs.io/fuse/rollingUpgrade) as shown in the [demo](http://vimeo.com/80625940).

You can then copy this profile and run different groups of containers running different routes as you see fit.

### Running on OpenShift

Every developer has 3 free machines to play with on [OpenShift](http://openshift.com/) so if you want to try this out there try this:

First, you'll need to create an [OpenShift Online account](https://openshift.redhat.com/app/account/new).

Then you can create an instance of [hawtio camel wiki using this link](https://www.openshift.com/quickstarts/hawtio-camel-wiki)

#### Using rhc

Read  the OpenShift Getting Started guide and install the **rhc** command-line tool.

You should then be able to try this on the command line:

    rhc app create mycamelwiki jbossews-2.0 --from-code=http://github.com/hawtio/hawtio-camel-wiki.git

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/hawtio/hawtio-camel-wiki/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

