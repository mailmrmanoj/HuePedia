
/**
 * Created by sachin on 8/13/2015.
 */


package com.boot

import akka.actor.{ ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.RouteConcatenation
import akka.stream.ActorMaterializer
import com.dao.HueDAO
import com.ning.http.client.AsyncHttpClientConfig
import com.rest.HueRest
import com.utils.CORSSupport
import play.api.libs.ws.{WSClient, DefaultWSClientConfig}
import play.api.libs.ws.ning.{NingWSClient, NingAsyncHttpClientConfigBuilder}

import scala.concurrent.ExecutionContext.Implicits.global

trait CoreSystem {
  implicit lazy val system = ActorSystem("ActorSystem")

  sys.addShutdownHook(system.shutdown)
}

trait PlayHelper{
  val config = new NingAsyncHttpClientConfigBuilder(DefaultWSClientConfig()).build()
  val builder = new AsyncHttpClientConfig.Builder(config)
  val wsClient = new NingWSClient(builder.build())
}

trait RestEndCollection extends RouteConcatenation with CORSSupport with CoreSystem{
  override val contextRoot: String = "huePedia"
  val allRoutes = new HueRest(new HueDAO()).routes
  val availableRoutes=cors(allRoutes)
}

object Boot extends App with RestEndCollection{
  implicit val materializer = ActorMaterializer()

  val r = Http().bindAndHandle(availableRoutes, interface = "0.0.0.0", port = 8080)
  r.map { x => println("Successfully Bound to " + x.localAddress) }.recover { case _ => println("Failed to Bind ") }
  Thread.sleep(5000)
}
