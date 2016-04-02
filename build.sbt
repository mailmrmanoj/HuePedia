name := "HuePedia"

version := "1.0"

scalaVersion := "2.11.2"

libraryDependencies ++= Seq("com.typesafe.slick" %% "slick" % "3.0.0",
  "com.github.tminglei" %% "slick-pg" % "0.9.0",
  "com.typesafe.akka" %% "akka-actor" % "2.3.6",
  "com.typesafe.akka" %% "akka-slf4j" % "2.3.6",
  "ch.qos.logback" % "logback-classic" % "1.1.2",
  "com.typesafe.akka" %% "akka-http-core-experimental" % "1.0",
  "com.typesafe.akka" %% "akka-http-experimental" % "1.0",
  "net.liftweb" % "lift-json_2.11" % "3.0-M2",
  "org.json4s" %% "json4s-jackson" % "3.2.11",
  "joda-time" % "joda-time" % "2.8.2",
  "com.typesafe.play" %% "play-ws" % "2.4.0-M1"
)

resolvers ++= Seq(
  "Spray repository" at "http://repo.spray.io",
  "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"
)