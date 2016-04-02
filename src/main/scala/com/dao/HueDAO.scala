package com.dao

import scala.util.Random

class HueDAO{
  def getRandomNumbers = new Random().nextInt(7)
}