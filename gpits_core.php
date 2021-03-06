<?php
abstract class DomainKnowledge {
  abstract protected function generateQuery($raw_query);
}

abstract class Driver {
  protected $base = "";
  abstract protected function connect();
  abstract protected function runQuery($query);
}

class Field {
  public $name;
  public $value;

  public function __construct($name=null, $value=null) {
    $this->name = $name;
    $this->value = $value;
  }

}

class Query {
  public $raw_data = null;
  public $get_property = null;
  public $fields = array();

  function __construct($raw_data = null) {
    $this->raw_data = $raw_data;
    $this->fields = array();
  }

  function addField($name, $value=null) {
    $f = new Field($name, $value);
    //$f->init($name, $value);
    $this->fields[] = $f;
  }

  protected function __toString() {
    $return = "Get property: " . $this->get_property . " ";
    foreach ($this->fields as $f) {
      $return .= $f->name . " : " . $f->value . " ";
    }
    return $return;
  }
}

class Request {
  public $raw_query;
  public $user;

  public function __construct($raw_query=null, $user=null) {
    $this->raw_query = $raw_query;
    $this->user = $user;
  }
}

abstract class Response {
  public $attributes;

  public function __construct($attributes = null) {
    if($attributes == null)
      $this->attributes = array();
    else
      $this->attributes = $attributes;
  }

  public abstract function format();
}

abstract class Tutor {
  public abstract function decideFedBack();
  public abstract function attendRequest($request);
}

abstract class User {}

class UserProfile {
  protected $name;
  protected $description;
  protected $attributes;

  public function __construct($name=null, $description = null, $attributes = null) {
    $this->name = $name;
    $this->description = $description;
    if($attributes == null)
      $this->attributes = array();
    else
      $this->attributes = $attributes;
  }

}

abstract class UserProfiler {
  public abstract function decideUserProfile($user);
}
