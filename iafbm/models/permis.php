<?php

class PermisModel extends xModelMysql {

    var $table = 'permis';

    var $mapping = array(
        'id' => 'id',
        'nom' => 'nom',
    );

    var $order_by = array('nom');

    var $primary = array('id');
}
