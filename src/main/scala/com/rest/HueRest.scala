package com.rest

import akka.http.scaladsl.model.{HttpEntity, HttpResponse, MediaTypes, StatusCodes}
import akka.http.scaladsl.server.Directives
import akka.stream.ActorMaterializer
import akka.util.Timeout
import com.boot.CoreSystem
import com.dao.HueDAO
import com.utils.Utilities
import org.json4s.jackson.JsonMethods._
import org.json4s.{DefaultFormats, Extraction}

import scala.concurrent.duration._

class HueRest(hueRepo: HueDAO) extends Directives with CoreSystem{
  implicit val askTimeout: Timeout = 10.seconds

  implicit val materializer = ActorMaterializer()

  implicit val formats = DefaultFormats ++ List(Utilities.SqlDateSerializer)

  val routes = path("randomNumbers") {
    get {
      complete {
        val result = hueRepo.getRandomNumbers
        HttpResponse(status = StatusCodes.OK, entity = HttpEntity(MediaTypes.`application/json`, compact(Extraction.decompose(result))))
      }
    }
  }
}