package com.utils

import org.json4s.CustomSerializer
import org.json4s.JsonAST.{JNull, JString}
import org.joda.time.format.DateTimeFormat

/**
 * Created by Sachin on 8/20/2015.
 */
object Utilities {

  val timeOnlyFormatter = DateTimeFormat.forPattern("HH:mm:ss")
  val dateOnlyFormatter = DateTimeFormat.forPattern("yyyy-MM-dd")

  case object SqlDateSerializer extends CustomSerializer[java.sql.Date](format => (
    {
      case JString(date) => new java.sql.Date(dateOnlyFormatter.parseDateTime(date).getMillis)
      case JNull => null
    },
    {
      case date: java.sql.Date => JString(date.toString)
    }))

  implicit val formats=List(SqlDateSerializer)

}
