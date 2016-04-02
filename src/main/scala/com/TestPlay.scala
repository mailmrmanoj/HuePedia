package com

/**
 * Created by Sachs on 4/2/2016.
 */

import com.boot.PlayHelper
import play.api.libs.json.Json
import play.api.libs.ws._

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}

object Test extends PlayHelper{



  def main(args: Array[String]) = {

        val data = Json.obj(
          "hue" -> 25500,
          "on" -> false,
          "bri" -> 200,
          "sat" -> 1
        )

        val getUrl = "http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights"
        val putUrl = "http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/3/state"
        val body = getBody(wsClient.url(putUrl).put(data))
        Thread.sleep(1000)
      println(s"body: $body")

    val loopBody = List(65535,25500,46920) foreach {x =>

      val data = Json.obj(
        "hue" -> x  ,
        "on" -> true,
        "bri" -> 254,
        "sat" -> 254
      )

      val putUrl1 = "http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/1/state"
      getBody(wsClient.url(putUrl1).put(data))
      Thread.sleep(1000)
      val putUrl2 = "http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/2/state"
      getBody(wsClient.url(putUrl2).put(data))
      Thread.sleep(1000)
      val putUrl3 = "http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/3/state"
      getBody(wsClient.url(putUrl3).put(data))
      Thread.sleep(1000)
    }


}

  def getBody(future: Future[WSResponse]) = {
    val response = Await.result(future, Duration.Inf);
    if (response.status != 200)
      throw new Exception(response.statusText);
    response.body
  }
}
