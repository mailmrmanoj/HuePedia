
/**
 * Created by sachin on 8/13/2015.
 */


package com.boot

import akka.actor.{ ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.RouteConcatenation
import akka.stream.ActorMaterializer
import com.dao.HueDAO
import com.rest.HueRest
import com.utils.CORSSupport

import scala.concurrent.ExecutionContext.Implicits.global

trait CoreSystem {
  implicit lazy val system = ActorSystem("ActorSystem")

  sys.addShutdownHook(system.shutdown)
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
